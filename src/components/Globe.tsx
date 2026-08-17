import { useRef, useEffect, createElement } from 'react';
import GlobeGL from 'react-globe.gl';
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
  SiTerraform,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { VscTerminalPowershell } from 'react-icons/vsc';
import {
  TbApi, TbBrain, TbPlugConnected,
  TbShieldLock, TbRobot, TbRefresh, TbBolt,
  TbMessageChatbot, TbTopologyStarRing, TbDatabase,
} from 'react-icons/tb';
import { renderToString } from 'react-dom/server';
import './Globe.css';

// Icon + color registry — add new skills here and they auto-appear on globe
const skillRegistry: Record<string, { icon: any; color: string; group: string }> = {
  'Python': { icon: SiPython, color: '#3776AB', group: 'backend' },
  'Go': { icon: SiGo, color: '#00ADD8', group: 'backend' },
  'Java': { icon: FaJava, color: '#ED8B00', group: 'backend' },
  'Kotlin': { icon: SiKotlin, color: '#7F52FF', group: 'backend' },
  'C++': { icon: SiCplusplus, color: '#00599C', group: 'backend' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E', group: 'frontend' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6', group: 'frontend' },
  'Bash': { icon: SiGnubash, color: '#4EAA25', group: 'infra' },
  'PowerShell': { icon: VscTerminalPowershell, color: '#5391FE', group: 'infra' },
  'Docker': { icon: SiDocker, color: '#2496ED', group: 'infra' },
  'Kubernetes': { icon: SiKubernetes, color: '#326CE5', group: 'infra' },
  'Helm': { icon: SiHelm, color: '#277A9F', group: 'infra' },
  'Jenkins': { icon: SiJenkins, color: '#D24939', group: 'infra' },
  'Apache Airflow': { icon: SiApacheairflow, color: '#017CEE', group: 'infra' },
  'React': { icon: SiReact, color: '#61DAFB', group: 'frontend' },
  'Streamlit': { icon: SiStreamlit, color: '#FF4B4B', group: 'frontend' },
  'Gradio': { icon: SiGradio, color: '#F97316', group: 'frontend' },
  'HTML': { icon: SiHtml5, color: '#E34F26', group: 'frontend' },
  'CSS': { icon: SiCss, color: '#1572B6', group: 'frontend' },
  'Bootstrap': { icon: SiBootstrap, color: '#7952B3', group: 'frontend' },
  'Flask': { icon: SiFlask, color: '#FFFFFF', group: 'backend' },
  'FastAPI': { icon: SiFastapi, color: '#009688', group: 'backend' },
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F', group: 'backend' },
  'AWS (EC2, EKS, IAM, S3, Lambda, CloudWatch, SQS)': { icon: FaAws, color: '#FF9900', group: 'infra' },
  'Terraform': { icon: SiTerraform, color: '#7B42BC', group: 'infra' },
  'GCP (GKE)': { icon: SiGooglecloud, color: '#4285F4', group: 'infra' },
  'LangChain': { icon: SiLangchaincorporate, color: '#65B741', group: 'ai' },
  'LangFlow': { icon: SiLangchaincorporate, color: '#3B82F6', group: 'ai' },
  'LangGraph': { icon: SiLangchaincorporate, color: '#10B981', group: 'ai' },
  'CrewAI': { icon: SiCrewai, color: '#FF4500', group: 'ai' },
  'TensorFlow': { icon: SiTensorflow, color: '#FF6F00', group: 'ai' },
  'Keras': { icon: SiKeras, color: '#D00000', group: 'ai' },
  'RASA': { icon: SiRasa, color: '#5A17EE', group: 'ai' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1', group: 'data' },
  'MongoDB': { icon: SiMongodb, color: '#47A248', group: 'data' },
  'Redis': { icon: SiRedis, color: '#DC382D', group: 'data' },
  'InfluxDB': { icon: SiInfluxdb, color: '#22ADF6', group: 'data' },
  'ETCD': { icon: SiEtcd, color: '#419EDA', group: 'data' },
  'OpenSearch': { icon: SiOpensearch, color: '#005EB8', group: 'data' },
  'Apache Kafka': { icon: SiApachekafka, color: '#FFFFFF', group: 'data' },
  'RabbitMQ': { icon: SiRabbitmq, color: '#FF6600', group: 'data' },
  'Prometheus': { icon: SiPrometheus, color: '#E6522C', group: 'observability' },
  'Grafana': { icon: SiGrafana, color: '#F46800', group: 'observability' },
  'VictoriaMetrics': { icon: SiVictoriametrics, color: '#621773', group: 'observability' },
  'Keycloak': { icon: SiKeycloak, color: '#6CB4EE', group: 'observability' },
  'Git': { icon: SiGit, color: '#F05032', group: 'tools' },
  'GitHub': { icon: SiGithub, color: '#FFFFFF', group: 'tools' },
  'GitLab': { icon: SiGitlab, color: '#FC6D26', group: 'tools' },
  'Jira': { icon: SiJira, color: '#0052CC', group: 'tools' },
  'Selenium': { icon: SiSelenium, color: '#43B02A', group: 'tools' },
  'Robot Framework': { icon: SiRobotframework, color: '#FFFFFF', group: 'tools' },
};

// Group → region on globe (lat/lng centers with spread)
const groupRegions: Record<string, { lat: number; lng: number }> = {
  backend: { lat: 50, lng: 10 },       // Europe
  infra: { lat: 45, lng: -100 },       // North America
  data: { lat: 30, lng: 100 },         // Asia
  ai: { lat: -10, lng: -50 },          // South America
  frontend: { lat: -30, lng: 140 },    // Oceania
  observability: { lat: 10, lng: 40 }, // Africa/Middle East
  tools: { lat: 60, lng: -60 },        // Canada/Northern
};

// Auto-generate markers from cv.ts skills
function generateMarkers() {
  const allSkills = Object.values(cv.skills).flat();
  const markers: any[] = [];
  const groupCounts: Record<string, number> = {};

  allSkills.forEach((skill) => {
    const entry = skillRegistry[skill];
    if (!entry) return;

    const group = entry.group;
    if (!groupCounts[group]) groupCounts[group] = 0;
    const idx = groupCounts[group]++;

    const region = groupRegions[group] || { lat: 0, lng: 0 };
    // Spread skills within their region
    const angle = (idx / 6) * 2 * Math.PI;
    const spread = 12 + idx * 3;
    const lat = region.lat + spread * Math.sin(angle);
    const lng = region.lng + spread * Math.cos(angle);

    markers.push({ lat, lng, name: skill, icon: entry.icon, color: entry.color, group });
  });

  return markers;
}

// Auto-generate arcs between skills in the same group
function generateArcs(markers: any[]) {
  const arcs: any[] = [];
  const groups: Record<string, any[]> = {};

  markers.forEach((m) => {
    if (!groups[m.group]) groups[m.group] = [];
    groups[m.group].push(m);
  });

  // Connect consecutive skills within each group
  Object.values(groups).forEach((members) => {
    for (let i = 0; i < members.length - 1; i++) {
      arcs.push({
        startLat: members[i].lat,
        startLng: members[i].lng,
        endLat: members[i + 1].lat,
        endLng: members[i + 1].lng,
      });
    }
  });

  // Add a few cross-group connections
  const crossConnections = [
    ['Python', 'TensorFlow'],
    ['Python', 'FastAPI'],
    ['Docker', 'Kubernetes'],
    ['FastAPI', 'PostgreSQL'],
    ['React', 'TypeScript'],
    ['Grafana', 'Kubernetes'],
    ['Git', 'GitHub'],
    ['LangChain', 'Python'],
    ['Kafka', 'Spring Boot'],
  ];

  crossConnections.forEach(([from, to]) => {
    const fromM = markers.find((m) => m.name === from);
    const toM = markers.find((m) => m.name === to);
    if (fromM && toM) {
      arcs.push({
        startLat: fromM.lat,
        startLng: fromM.lng,
        endLat: toM.lat,
        endLng: toM.lng,
      });
    }
  });

  return arcs;
}

const skillMarkers = generateMarkers();
const arcsData = generateArcs(skillMarkers);

function Globe() {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
      globe.controls().enableZoom = true;
      globe.controls().minDistance = 200;
      globe.controls().maxDistance = 500;
      globe.pointOfView({ lat: 20, lng: 30, altitude: 2.0 });
    }
  }, []);

  return (
    <div className="globe-container">
      <GlobeGL
        ref={globeRef}
        width={500}
        height={500}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl=""
        showGlobe={false}
        showGraticules={true}
        atmosphereColor="#e8a33d"
        atmosphereAltitude={0.12}
        arcsData={arcsData}
        arcStartLat={(d: any) => d.startLat}
        arcStartLng={(d: any) => d.startLng}
        arcEndLat={(d: any) => d.endLat}
        arcEndLng={(d: any) => d.endLng}
        arcColor={() => 'rgba(232, 163, 61, 0.15)'}
        arcStroke={0.3}
        arcDashLength={0.5}
        arcDashGap={0.3}
        arcDashAnimateTime={4000}
        htmlElementsData={skillMarkers}
        htmlLat={(d: any) => d.lat}
        htmlLng={(d: any) => d.lng}
        htmlElement={(d: any) => {
          const el = document.createElement('div');
          el.className = 'globe-marker';
          el.innerHTML = `
            <span style="color: ${d.color}; font-size: 16px; display: flex; align-items: center; gap: 4px;">
              ${renderToString(createElement(d.icon))}
              <span class="globe-marker-label">${d.name}</span>
            </span>
          `;
          return el;
        }}
      />
    </div>
  );
}

export default Globe;
