// Auto-generated from Aadarsh_Mehdi_CV_Final_Preview.md
// Run: python generate_cv_data.py

export const cv = {
  "name": "AADARSH MEHDI",
  "title": "Experienced Software Developer | Cloud-Native Platforms | AI/ML Systems",
  "location": "Budapest, Hungary",
  "phone": "",
  "email": "aadarshofficial110@gmail.com",
  "linkedin": "https://linkedin.com/in/aadarsh-mehdi-73754b13b",
  "github": "https://github.com/amhkhowaja",
  "summary": "Software Developer with 4+ years of experience designing, owning, and operating cloud-native microservices in telecom-scale production environments. End-to-end ownership of services from API design and implementation through testing, containerization, and production deployment on Kubernetes. Experienced in Python, Go, and Java backend ecosystems, secure coding practices, and database migration strategies. Additionally hands-on with GenAI, RAG pipelines, multi-agent AI systems and LLM Evaluation and Optimization Strategies. Eligible to work in Hungary without sponsorship.",
  "skills": {
    "Programming Languages": [
      "Python",
      "Go",
      "Java",
      "Kotlin",
      "C++",
      "JavaScript",
      "Bash",
      "PowerShell"
    ],
    "Backend & Distributed Systems": [
      "Microservices",
      "REST APIs",
      "Event-Driven Architecture",
      "Java Spring Boot",
      "Kotlin Spring Boot",
      "Apache Kafka",
      "RabbitMQ",
      "OpenAPI",
      "Release Upgrades & Rollbacks",
      "Schema/Data Migrations"
    ],
    "Frontend": [
      "React",
      "Streamlit",
      "Gradio",
      "(HTML",
      "CSS",
      "Bootstrap)"
    ],
    "Web Frameworks": [
      "Flask",
      "FastAPI",
      "Spring Boot"
    ],
    "Cloud & DevOps": [
      "AWS (EKS",
      "IAM",
      "S3)",
      "GCP (GKE)",
      "Kubernetes",
      "Docker",
      "Helm",
      "Jenkins",
      "Apache Airflow",
      "CI/CD"
    ],
    "AI / ML / GenAI": [
      "LangChain",
      "LangFlow",
      "LangGraph",
      "CrewAI",
      "Instructor",
      "LiteLLM",
      "DeepEval",
      "TensorFlow",
      "Keras",
      "RASA",
      "NLP",
      "RAG",
      "Kiro CLI (AI coding agent)",
      "Multi-Agent AI Systems",
      "Agentic AI Architecture",
      "Multi-Agent Orchestration"
    ],
    "Databases": [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "InfluxDB",
      "ETCD",
      "OpenSearch"
    ],
    "Observability & Security": [
      "Prometheus",
      "Grafana",
      "VictoriaMetrics",
      "OAuth 2.0",
      "RBAC",
      "Keycloak",
      "SCA",
      "SonarQube",
      "SecretOps"
    ],
    "Testing & Automation": [
      "Robot Framework",
      "Selenium"
    ],
    "Version Control & Collaboration": [
      "Git",
      "GitHub",
      "GitLab",
      "Gerrit",
      "Jira",
      "Confluence"
    ]
  },
  "experience": [
    {
      "role": "Experienced Software Developer – Cloud LCM Microservices",
      "company": "Ericsson Hungary",
      "period": "Mar 2023 – Present",
      "points": [
        "Designed, developed, and maintained 10+ scalable backend microservices using frameworks such as Python (FastAPI, Flask), Java (Spring Boot), and Go's native web framework.",
        "Owned 2 microservices end-to-end. Contributions included OpenAPI schema creation, API development, testing, maintenance, containerization, and deployment using Docker, Kubernetes, and Helm, ensuring higher availability, quality and timely delivery.",
        "Created shared libraries like auth, object_storage, search_engine and integrated it to all impacted microservices.",
        "Wrote unit tests, functional tests, integration tests, and end-to-end tests using pytest, JUnit, testify (Go), and Robot Framework. Reduced CI/CD test execution time by 40% through optimized test strategies.",
        "Engineered upgrade and rollback workflows for multi-service database migration from etcd to OpenSearch, implementing lifecycle hooks ensuring zero-data-loss rollback capability with backward-compatible deployment strategies",
        "Proactively conducted code reviews based on OWASP Top 10 and company internal secure coding guidelines. Integrated SCA (Software Composition Analysis) vulnerability checks into CI/CD pipelines.",
        "Architected and developed innovative GenAI projects for our product and team, leveraging LangChain, LangFlow, LangGraph, and Kiro agentic terminal."
      ]
    },
    {
      "role": "Python Lab Instructor",
      "company": "Eötvös Loránd University",
      "period": "Sep 2023 – Jul 2025",
      "points": [
        "Taught Python in Practice to 100+ students across 4 semesters.",
        "Covered topics like Python core, REST APIs using Flask and FastAPI, data analysis using data science libraries (NumPy, Pandas, Matplotlib), and machine learning fundamentals using scikit-learn and TensorFlow Keras.",
        "Supervised and mentored 5 final-semester student developers for their theses, guided them with industrial coding best practices, suggested feature implementation ideas, and resolved their queries about Generative AI concepts like RAG."
      ]
    },
    {
      "role": "AI/ML Developer - IoT Accelerator Service Portal",
      "company": "Ericsson Hungary",
      "period": "Jul 2022 – Mar 2023",
      "points": [
        "Independently architected and developed an ML + RASA-based Digital Assistant for the IoTA service portal (an internal product).",
        "Performed data engineering for data collection, annotation, and augmentation using Python data science libraries. Created ETL pipeline using Apache Airflow.",
        "Trained 5 different architecture models: 2 for NLU (intent classification and named entity recognition) using TensorFlow and SpaCy, and 3 for RASA core (stories, actions, and dialogue management).",
        "Developed custom action handlers in Python, invoked based on mappings of stories, NLU (intent classification and NER)",
        "Configured and used RabbitMQ service for message queues.",
        "Deployed the containerized application on Google Kubernetes Engine (GCP) and exhibited it at Ericsson Innovation Day to external customers."
      ]
    },
    {
      "role": "Software Engineer Trainee - 3G Team",
      "company": "Nokia Hungary",
      "period": "Jan 2022 – Jul 2022",
      "points": [
        "Refactored legacy build systems from Makefile to Meson to improve maintainability across 30+ repositories.",
        "Performed functional and integration testing using Robot Framework.",
        "Developed Bash scripts to perform root cause analysis on a complex product."
      ]
    }
  ],
  "education": "**B.Sc. in Computer Science** – Eötvös Loránd University (ELTE), Budapest (2020–2023) Thesis: \"Adaptive, Context-Aware AI Conversational Agent for IoT Service Portal\"",
  "projects": [
    {
      "name": "AI Auto Improver",
      "description": "Self-optimizing FastAPI microservice with automated prompt evolution, pairwise regression gates, multi-dimensional evaluation metrics, concurrent processing, provider-agnostic LLM orchestration, and containerized deployment. Tools: Python 3.12, FastAPI, Instructor, LiteLLM, Pydantic v2, SQLite, asyncio, Gradio, Docker, Mistral AI."
    },
    {
      "name": "Build with Aadarsh",
      "description": "AI-powered SaaS platform for project management across engineering domains. Multi-tenant, multi-domain architecture that generates system designs, integrates with Jira/GitHub/GitLab, and provides domain-specific simulation and planning tools. Built with FastAPI, React, Keycloak, Nango, Temporal, Stripe, LangChain, and Haystack. Features agentic AI orchestration with automatic failure recovery."
    },
    {
      "name": "Pay As You Go",
      "description": "SaaS-based microservice architecture project, developed in Kotlin Spring Boot, MongoDB, RabbitMQ, Keycloak for authentication, also with OAuth2.0 for social media accounts, RBAC authorization, Stripe for payments, and React for the frontend with three backend microservices."
    },
    {
      "name": "Multi-Agent AI Configuration System",
      "description": "LangFlow-based agents generating and validating config changes between releases based on CPI documentation, NIR reports, and past release templates."
    },
    {
      "name": "Autonomous AI Software Engineering Platform",
      "description": "Developed a pipeline-driven platform with tools and AI components to develop, test, containerize, and deploy applications to a Kubernetes cluster based on a prompt."
    },
    {
      "name": "GenAI RAG Chatbot",
      "description": "Retrieval-augmented generation system for book-based question answering. Created RAG on the Alkafi book."
    },
    {
      "name": "Intelligent IoT Digital Assistant",
      "description": "NLP-based conversational agent using TensorFlow, RASA, MongoDB."
    },
    {
      "name": "X-Ray Pneumonia Detection",
      "description": "Deep learning model using TensorFlow and Keras."
    }
  ],
  "achievements": [
    {
      "title": "Ericsson Innovation Day",
      "description": "Exhibited MVP Digital Assistant for IoT Accelerator with Ericsson Customers"
    },
    {
      "title": "Google Hashcode",
      "description": "1st in ELTE, 20th in Hungary"
    },
    {
      "title": "CodeX Hackathon",
      "description": "Audience Award"
    }
  ],
  "workAuthorization": "Hungarian Permanent Residence (Nemzeti Tartózkodási Kártya). Eligible to work without sponsorship."
};

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
