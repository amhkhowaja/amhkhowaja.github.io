import { createElement, useState } from 'react';
import { cv } from '../data/cv';
import {
  SiPython, SiGo, SiKotlin, SiCplusplus, SiJavascript, SiGnubash,
  SiDocker, SiKubernetes, SiHelm, SiJenkins, SiReact, SiFlask,
  SiFastapi, SiSpringboot, SiPostgresql, SiMongodb, SiRedis,
  SiApachekafka, SiRabbitmq, SiTensorflow, SiGrafana, SiPrometheus,
  SiGit, SiGithub, SiGitlab, SiJira, SiConfluence, SiOpensearch,
  SiStreamlit, SiSelenium, SiOpenjdk, SiOpenapiinitiative,
  SiLangchaincorporate, SiKeycloak, SiKeras, SiInfluxdb, SiGradio, SiEtcd,
  SiGooglecloud, SiRobotframework, SiApacheairflow,
  SiVictoriametrics, SiCrewai, SiRasa, SiHtml5, SiTypescript, SiCss, SiBootstrap,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { VscTerminalPowershell } from 'react-icons/vsc';
import {
  TbApi, TbBrain, TbPlugConnected, TbServer,
  TbShieldLock, TbRobot, TbRefresh, TbBolt,
  TbMessageChatbot, TbTopologyStarRing, TbDatabase,
} from 'react-icons/tb';
import Globe from './Globe';
import './Skills.css';

const iconMap: Record<string, { icon: any; color: string }> = {
  // Programming Languages
  'Python': { icon: SiPython, color: '#3776AB' },
  'Go': { icon: SiGo, color: '#00ADD8' },
  'Java': { icon: FaJava, color: '#ED8B00' },
  'Kotlin': { icon: SiKotlin, color: '#7F52FF' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Bash': { icon: SiGnubash, color: '#4EAA25' },
  'PowerShell': { icon: VscTerminalPowershell, color: '#5391FE' },

  // Backend & Distributed Systems
  'Microservices': { icon: TbTopologyStarRing, color: '#5fd1a3' },
  'REST APIs': { icon: TbApi, color: '#5fd1a3' },
  'Event-Driven Architecture': { icon: TbPlugConnected, color: '#5fd1a3' },
  'Java Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
  'Kotlin Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
  'Apache Kafka': { icon: SiApachekafka, color: '#FFFFFF' },
  'RabbitMQ': { icon: SiRabbitmq, color: '#FF6600' },
  'OpenAPI': { icon: SiOpenapiinitiative, color: '#6BA539' },
  'Release Upgrades & Rollbacks': { icon: TbRefresh, color: '#5fd1a3' },
  'Schema/Data Migrations': { icon: TbDatabase, color: '#5fd1a3' },

  // Frontend
  'React': { icon: SiReact, color: '#61DAFB' },
  'Streamlit': { icon: SiStreamlit, color: '#FF4B4B' },
  'Gradio': { icon: SiGradio, color: '#F97316' },
  'HTML': { icon: SiHtml5, color: '#E34F26' },
  'CSS': { icon: SiCss, color: '#1572B6' },
  'Bootstrap': { icon: SiBootstrap, color: '#7952B3' },

  // Web Frameworks
  'Flask': { icon: SiFlask, color: '#FFFFFF' },
  'FastAPI': { icon: SiFastapi, color: '#009688' },
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },

  // Cloud & DevOps
  'AWS (EKS, IAM, S3)': { icon: FaAws, color: '#FF9900' },
  'GCP (GKE)': { icon: SiGooglecloud, color: '#4285F4' },
  'Kubernetes': { icon: SiKubernetes, color: '#326CE5' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Helm': { icon: SiHelm, color: '#277A9F' },
  'Jenkins': { icon: SiJenkins, color: '#D24939' },
  'Apache Airflow': { icon: SiApacheairflow, color: '#017CEE' },
  'CI/CD': { icon: TbBolt, color: '#5fd1a3' },

  // AI / ML / GenAI
  'LangChain': { icon: SiLangchaincorporate, color: '#65B741' },
  'LangFlow': { icon: SiLangchaincorporate, color: '#3B82F6' },
  'LangGraph': { icon: SiLangchaincorporate, color: '#10B981' },
  'CrewAI': { icon: SiCrewai, color: '#FF4500' },
  'Instructor': { icon: TbBrain, color: '#A855F7' },
  'LiteLLM': { icon: TbBrain, color: '#F59E0B' },
  'DeepEval': { icon: TbBrain, color: '#EF4444' },
  'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },
  'Keras': { icon: SiKeras, color: '#D00000' },
  'RASA': { icon: SiRasa, color: '#5A17EE' },
  'NLP': { icon: TbMessageChatbot, color: '#8B5CF6' },
  'RAG': { icon: TbDatabase, color: '#8B5CF6' },
  'Kiro CLI (AI coding agent)': { icon: TbRobot, color: '#e8a33d' },
  'Multi-Agent AI Systems': { icon: TbRobot, color: '#8B5CF6' },
  'Agentic AI Architecture': { icon: TbRobot, color: '#EC4899' },
  'Multi-Agent Orchestration': { icon: TbRobot, color: '#6366F1' },

  // Databases
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'InfluxDB': { icon: SiInfluxdb, color: '#22ADF6' },
  'ETCD': { icon: SiEtcd, color: '#419EDA' },
  'OpenSearch': { icon: SiOpensearch, color: '#005EB8' },

  // Observability & Security
  'Prometheus': { icon: SiPrometheus, color: '#E6522C' },
  'Grafana': { icon: SiGrafana, color: '#F46800' },
  'VictoriaMetrics': { icon: SiVictoriametrics, color: '#621773' },
  'OAuth 2.0': { icon: TbShieldLock, color: '#5fd1a3' },
  'RBAC': { icon: TbShieldLock, color: '#5fd1a3' },
  'Keycloak': { icon: SiKeycloak, color: '#6CB4EE' },
  'SCA': { icon: TbShieldLock, color: '#E6522C' },
  'SonarQube': { icon: SiOpenjdk, color: '#4E9BCD' },
  'SecretOps': { icon: TbShieldLock, color: '#e8a33d' },

  // Testing
  'Robot Framework': { icon: SiRobotframework, color: '#FFFFFF' },
  'Selenium': { icon: SiSelenium, color: '#43B02A' },

  // Version Control
  'Git': { icon: SiGit, color: '#F05032' },
  'GitHub': { icon: SiGithub, color: '#FFFFFF' },
  'GitLab': { icon: SiGitlab, color: '#FC6D26' },
  'Gerrit': { icon: SiGit, color: '#F05032' },
  'Jira': { icon: SiJira, color: '#0052CC' },
  'Confluence': { icon: SiConfluence, color: '#2684FF' },
};

function Skills() {
  const categories = Object.keys(cv.skills);
  const [activeTab, setActiveTab] = useState<string>(categories[0]);

  return (
    <section id="skills">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/skills</p>
        <h2 data-aos="fade-up" data-aos-delay="80">Technical Expertise</h2>

        <div className="skills-layout" data-aos="fade-up" data-aos-delay="120">
          <div className="skills-panel">
            {/* Category tabs */}
            <div className="skills-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`skills-tab ${activeTab === cat ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills for active category */}
            <div className="skills-content">
              {(cv.skills as Record<string, string[]>)[activeTab]?.map((skill, i) => {
                const entry = iconMap[skill];
                return (
                  <div key={i} className="skill-item">
                    {entry && createElement(entry.icon as any, {
                      style: { color: entry.color },
                      className: 'skill-icon-lg',
                    })}
                    <span className="skill-name">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills-globe">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
