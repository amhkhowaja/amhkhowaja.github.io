#!/usr/bin/env python3
"""
Parses Aadarsh's CV markdown and generates src/data/cv.ts for the React app.

Usage:
    python generate_cv_data.py
    
Input:  ~/Aadarsh-CVs/Aadarsh_Mehdi_CV_Final_Preview.md
Output: ~/github/learn-typescript-tsx/src/data/cv.ts
"""

import re
import os
import json
from pathlib import Path

INPUT_PATH = Path.home() / "Aadarsh-CVs" / "Aadarsh_Mehdi_CV_Final_Preview.md"
OUTPUT_PATH = Path.home() / "github" / "learn-typescript-tsx" / "src" / "data" / "cv.ts"


def parse_markdown(content: str) -> dict:
    cv = {
        "name": "",
        "title": "",
        "location": "",
        "phone": "",
        "email": "",
        "linkedin": "",
        "github": "",
        "summary": "",
        "skills": {},
        "experience": [],
        "education": "",
        "projects": [],
        "achievements": [],
        "workAuthorization": "",
    }

    lines = content.strip().split("\n")
    i = 0

    # Line 1: Name
    if lines[0].startswith("# "):
        cv["name"] = lines[0].replace("# ", "").strip()
        i = 1

    # Line 2: Title
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i < len(lines) and lines[i].startswith("**"):
        cv["title"] = lines[i].replace("**", "").strip()
        i += 1

    # Line 3: Contact info
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i < len(lines):
        contact_line = lines[i]
        # Extract email
        email_match = re.search(r'[\w.+-]+@[\w-]+\.[\w.]+', contact_line)
        if email_match:
            cv["email"] = email_match.group()
        # Extract location
        parts = contact_line.split("|")
        if parts:
            cv["location"] = parts[0].strip()
        i += 1

    # Line 4: LinkedIn / GitHub
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i < len(lines) and "linkedin" in lines[i].lower():
        linkedin_match = re.search(r'https://linkedin\.com/in/[\w-]+', lines[i])
        if linkedin_match:
            cv["linkedin"] = linkedin_match.group()
        github_match = re.search(r'https://github\.com/[\w-]+', lines[i])
        if github_match:
            cv["github"] = github_match.group()
        i += 1

    # Parse sections
    current_section = ""
    section_content = []

    while i < len(lines):
        line = lines[i]

        if line.startswith("## "):
            # Process previous section
            if current_section:
                process_section(cv, current_section, section_content)
            current_section = line.replace("## ", "").strip()
            section_content = []
        else:
            section_content.append(line)
        i += 1

    # Process last section
    if current_section:
        process_section(cv, current_section, section_content)

    return cv


def process_section(cv: dict, section: str, lines: list):
    section_lower = section.lower()

    if "summary" in section_lower:
        cv["summary"] = " ".join(l.strip() for l in lines if l.strip())

    elif "skill" in section_lower:
        cv["skills"] = parse_skills(lines)

    elif "experience" in section_lower:
        cv["experience"] = parse_experience(lines)

    elif "education" in section_lower:
        cv["education"] = " ".join(l.strip() for l in lines if l.strip() and not l.startswith("---"))

    elif "project" in section_lower:
        cv["projects"] = parse_projects(lines)

    elif "achievement" in section_lower:
        cv["achievements"] = parse_achievements(lines)

    elif "authorization" in section_lower:
        cv["workAuthorization"] = " ".join(l.strip() for l in lines if l.strip())


def parse_skills(lines: list) -> dict:
    skills = {}
    for line in lines:
        line = line.strip()
        if line.startswith("- **"):
            match = re.match(r'- \*\*(.+?):\*\*\s*(.+)', line)
            if match:
                category = match.group(1).strip()
                # Split on commas but not inside parentheses
                items = split_outside_parens(match.group(2))
                skills[category] = items
    return skills


def split_outside_parens(text: str) -> list:
    """Split on commas that are not inside parentheses."""
    result = []
    current = ""
    depth = 0
    for char in text:
        if char == '(':
            depth += 1
            current += char
        elif char == ')':
            depth -= 1
            current += char
        elif char == ',' and depth == 0:
            result.append(current.strip())
            current = ""
        else:
            current += char
    if current.strip():
        result.append(current.strip())
    return result


def parse_experience(lines: list) -> list:
    experiences = []
    current_exp = None

    for line in lines:
        line_stripped = line.strip()

        if line.startswith("### "):
            if current_exp:
                experiences.append(current_exp)
            # Parse: ### Role | Company (Period)
            header = line.replace("### ", "").strip()
            # Try format: "Role – Details | Company (Period)"
            # or "Role | Company (Period)"
            role = ""
            company = ""
            period = ""

            period_match = re.search(r'\(([A-Za-z]{3}\s+\d{4}\s*[–-]\s*(?:[A-Za-z]{3}\s+\d{4}|Present))\)\s*$', header)
            if period_match:
                period = period_match.group(1)
                header = header[:period_match.start()].strip()

            if "|" in header:
                parts = header.split("|", 1)
                role = parts[0].strip().rstrip(" –").rstrip(" -")
                company = parts[1].strip()
            else:
                role = header

            # Clean up role: remove parenthetical notes like (Part-time)
            role = re.sub(r'\s*\([^)]*time[^)]*\)', '', role, flags=re.IGNORECASE).strip()

            current_exp = {
                "role": role,
                "company": company,
                "period": period,
                "points": [],
            }

        elif line_stripped.startswith("- ") and current_exp is not None:
            point = line_stripped[2:].strip()
            if point:
                current_exp["points"].append(point)

    if current_exp:
        experiences.append(current_exp)

    return experiences


def parse_projects(lines: list) -> list:
    projects = []
    for line in lines:
        line = line.strip()
        if line.startswith("- **"):
            match = re.match(r'- \*\*(.+?)(?:\s*\(.*?\))?\s*:\*\*\s*(.+)', line)
            if not match:
                match = re.match(r'- \*\*(.+?)\*\*\s*[:\-–]\s*(.+)', line)
            if match:
                name = match.group(1).strip().rstrip(":")
                description = match.group(2).strip()
                projects.append({"name": name, "description": description})
    return projects


def parse_achievements(lines: list) -> list:
    achievements = []
    for line in lines:
        line = line.strip()
        if line.startswith("- **"):
            match = re.match(r'- \*\*(.+?)\*\*\s*[:\-–—]*\s*(.+)', line)
            if match:
                title = match.group(1).strip().rstrip(":")
                description = match.group(2).strip().lstrip("— ").lstrip("- ")
                achievements.append({"title": title, "description": description})
    return achievements


def generate_typescript(cv: dict) -> str:
    output = "// Auto-generated from Aadarsh_Mehdi_CV_Final_Preview.md\n"
    output += "// Run: python generate_cv_data.py\n\n"
    output += "export const cv = " + json.dumps(cv, indent=2, ensure_ascii=False) + ";\n"

    # Add TypeScript types
    output += """
// TypeScript types for the CV data
export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  name: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface CV {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: Record<string, string[]>;
  experience: Experience[];
  education: string;
  projects: Project[];
  achievements: Achievement[];
  workAuthorization: string;
}
"""
    return output


def main():
    if not INPUT_PATH.exists():
        print(f"Error: {INPUT_PATH} not found")
        return

    content = INPUT_PATH.read_text(encoding="utf-8")
    cv = parse_markdown(content)

    # Ensure output directory exists
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    ts_content = generate_typescript(cv)
    OUTPUT_PATH.write_text(ts_content, encoding="utf-8")

    print(f"Generated: {OUTPUT_PATH}")
    print(f"  - {len(cv['experience'])} experience entries")
    print(f"  - {len(cv['projects'])} projects")
    print(f"  - {sum(len(v) for v in cv['skills'].values())} skills across {len(cv['skills'])} categories")


if __name__ == "__main__":
    main()
