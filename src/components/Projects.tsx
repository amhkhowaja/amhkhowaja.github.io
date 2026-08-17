import { cv } from '../data/cv';
import './Projects.css';

interface ProjectMeta {
  tags: string[];
  repo?: string;
  website?: string;
  private?: boolean;
}

const projectMeta: Record<string, ProjectMeta> = {
  'AI Auto Improver': {
    tags: ['FastAPI', 'LiteLLM', 'Pydantic', 'Docker', 'Gradio', 'Mistral AI', 'asyncio'],
    repo: 'github.com/amhkhowaja/ai-auto-improvement',
  },
  'AWS ETL and ML pipeline Serverless': {
    tags: ['AWS Lambda', 'S3', 'CloudWatch', 'SQS', 'Terraform', 'sklearn', 'Serverless'],
    repo: 'github.com/amhkhowaja/aws-terraform-serverless-etl-pipeline',
  },
  'Archloop.io': {
    tags: ['FastAPI', 'React', 'Keycloak', 'LangChain', 'Haystack', 'Temporal', 'Stripe', 'Nango', 'Supabase'],
    website: 'https://archloop.io',
  },
  'Pay As You Go': {
    tags: ['Kotlin', 'Spring Boot', 'MongoDB', 'RabbitMQ', 'Keycloak', 'Stripe', 'React', 'OAuth2.0'],
    repo: 'github.com/amhkhowaja/Pay-as-you-go',
  },
  'Multi-Agent AI Configuration System': {
    tags: ['LangFlow', 'Multi-Agent', 'Kubernetes', 'CPI', 'Config Generation'],
    private: true,
  },
  'Autonomous AI Software Engineering Platform': {
    tags: ['AI', 'Kubernetes', 'Docker', 'CI/CD', 'Pipeline', 'Agents'],
    private: true,
  },
  'GenAI RAG Chatbot': {
    tags: ['RAG', 'LangChain', 'Python', 'LLM', 'Embeddings', 'Vector DB'],
    private: true,
  },
  'Intelligent IoT Digital Assistant': {
    tags: ['RASA', 'TensorFlow', 'MongoDB', 'NLP', 'SpaCy', 'GCP', 'RabbitMQ'],
    repo: 'github.com/amhkhowaja/IoT-Digital-Assistant',
  },
};

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <p className="route-label" data-aos="fade-up">/projects</p>
        <h2 data-aos="fade-up" data-aos-delay="80">Things I've shipped</h2>

        <div className="project-list">
          {cv.projects.map((p, i) => {
            const meta = projectMeta[p.name];
            const cardUrl = meta?.website || (meta?.repo ? `https://${meta.repo}` : undefined);

            const CardWrapper = ({ children }: { children: React.ReactNode }) =>
              cardUrl ? (
                <a href={cardUrl} target="_blank" rel="noreferrer" className="project-card project-card-link" key={i} data-aos="fade-up" data-aos-delay={120 + i * 60}>
                  {children}
                </a>
              ) : (
                <div className="project-card" key={i} data-aos="fade-up" data-aos-delay={120 + i * 60}>
                  {children}
                </div>
              );

            return (
              <CardWrapper key={i}>
                <div className="project-head">
                  <h3>{p.name}</h3>
                  <span className="status status-live">shipped</span>
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-repo">
                  {meta?.website ? (
                    <span className="repo-link">
                      <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <span className="status-dot dot-green" />
                      <span className="status-code code-green">200</span>
                      <span className="repo-verb">GET</span> {meta.website.replace('https://', '')}
                    </span>
                  ) : meta?.private ? (
                    <span className="repo-private">
                      <svg className="github-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      <span className="status-dot dot-red" />
                      <span className="status-code code-red">403</span>
                      <span className="repo-verb">GET</span> /private/repository
                    </span>
                  ) : meta?.repo ? (
                    <span className="repo-link">
                      <svg className="github-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      <span className="status-dot dot-green" />
                      <span className="status-code code-green">200</span>
                      <span className="repo-verb">GET</span> {meta.repo}
                    </span>
                  ) : null}
                </div>
                <div className="project-tags">
                  {(meta?.tags || []).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
