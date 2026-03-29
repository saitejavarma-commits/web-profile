import React, { useEffect, useState } from 'react';
import { 
  Cloud, 
  Database, 
  Settings, 
  Mail, 
  Linkedin,
  Award,
  Terminal,
  Server,
  GitBranch,
  PlayCircle,
  CheckCircle2,
  Activity,
  Cpu
} from 'lucide-react';

function App() {
  const [activeStage, setActiveStage] = useState('init');

  useEffect(() => {
    // Add simple intersection observer to activate pipeline stages
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          setActiveStage(entry.target.id);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.pipeline-stage').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Helper to determine node status
  const getNodeClass = (stageId) => {
    // Just a visual hack for the demo; in reality we'd have a strictly ordered pipeline state
    return 'stage-node'; // Base class
  };

  return (
    <div className="app-container">
      {/* The Global CI/CD Pipeline Tracking Line */}
      <div className="pipeline-track"></div>

      {/* Main Container */}
      <div className="content-area">
        
        {/* Top Navbar Area */}
        <nav className="navbar">
          <div className="logo-text">
            <Terminal size={24} color="var(--status-running)" /> 
            saiteja-devops <span style={{ color: 'var(--status-success)' }}>~</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#init">[1] Init</a></li>
            <li><a href="#build">[2] Build</a></li>
            <li><a href="#provision">[3] Provision</a></li>
            <li><a href="#trigger">[4] Trigger</a></li>
          </ul>
        </nav>

        {/* STAGE 1: HERO / INIT */}
        <section id="init" className="hero pipeline-stage">
          <div className={getNodeClass('init')}></div>
          
          <div className="hero-layout">
            <div className="hero-left">
              <div className="terminal-header">
                <PlayCircle size={16} className="terminal-command" />
                <span>Job: Initialize_Profile_v1.0.sh</span>
              </div>

              <div className="typing-container">
                <div className="typing-text">$ whoami && describe --role "DevOps"</div>
              </div>

              <div className="name-line">Sai Teja</div>
              <div className="name-line">Varma</div>
              
              <h2 className="role-title">
                Senior DevOps & Cloud
              </h2>
              
              <p className="bio-text">
                I architect, orchestrate, and automate resilient cloud infrastructure and high-velocity CI/CD pipelines. Core strengths include <strong>AWS CloudFormation/Terraform</strong>, scalable <strong>Kubernetes</strong> clusters, and monitoring via <strong>Prometheus & Grafana</strong>.
              </p>

              <div className="hero-status-badges" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="status-badge">
                  <CheckCircle2 size={14} /> Pipeline State: PASSING
                </span>
                <span className="status-badge running">
                  <Activity size={14} /> Available For Work
                </span>
              </div>
            </div>

            <div className="hero-right">
              <div className="devops-anim-container">
                {/* Cloud Hub */}
                <div className="anim-cloud">
                  <Cloud size={64} className="cloud-icon" />
                  <div className="cloud-pulse"></div>
                  <div className="cloud-pulse delay-pulse"></div>
                </div>

                {/* Connecting Laser Beams (Data stream) */}
                <div className="anim-data-stream">
                  <div className="laser-packet p1"></div>
                  <div className="laser-packet p2"></div>
                  <div className="laser-packet p3"></div>
                </div>

                {/* Server Stack */}
                <div className="server-stack">
                  <div className="server-blade">
                    <div className="blade-lights">
                      <div className="led led-green blink-fast"></div>
                      <div className="led led-blue"></div>
                    </div>
                    <div className="server-lines">
                      <div className="s-line full"></div>
                      <div className="s-line half"></div>
                    </div>
                  </div>
                  <div className="server-blade">
                    <div className="blade-lights">
                      <div className="led led-green"></div>
                      <div className="led led-warning blink-slow"></div>
                    </div>
                    <div className="server-lines">
                      <div className="s-line full"></div>
                      <div className="s-line short"></div>
                    </div>
                  </div>
                  <div className="server-blade">
                    <div className="blade-lights">
                      <div className="led led-green blink-random"></div>
                      <div className="led led-blue"></div>
                    </div>
                    <div className="server-lines">
                      <div className="s-line full"></div>
                      <div className="s-line full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Orbit Widgets */}
                <div className="floating-widget widget-k8s">
                  <Settings size={28} className="spin-slow" />
                </div>
                <div className="floating-widget widget-db">
                  <Database size={28} className="pulse-slow" />
                </div>
                <div className="floating-widget widget-branch">
                  <GitBranch size={28} className="float-tilt" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STAGE 2: BUILD & DEPLOY (Experience) */}
        <section id="build" className="pipeline-stage">
          <div className={getNodeClass('build')}></div>
          
          <h2 className="stage-title">
            <span className="st-text">Stage 2:</span> Build & Deploy Infrastructure
          </h2>
          
          <div className="experience-list">
            
            {/* TCS Exp 1 */}
            <div className="devops-card">
              <h3>TCS - DBT Developer, NDL Team</h3>
              <h4>CalHEERS Project Architect</h4>
              <span className="date">2022 – Present | Status: RUNNING</span>
              <ul>
                <li>Developed and maintained Terraform modules to provision robust cloud infrastructure across dev, qa, and prod environments.</li>
                <li>Implemented policy checks and guardrails using Sentinel/OPA to strictly enforce cost controls and compliance standards.</li>
                <li>Managed remote state using Terraform Cloud and S3, ensuring data integrity with DynamoDB state locking.</li>
                <li>Architected CI/CD pipelines via Jenkins and Git, transforming manual deployment into a fully automated build-test-deploy lifecycle.</li>
                <li>Dockerized critical applications and wrote precise Kubernetes deployment specifications (YAML) for effortless scaling.</li>
                <li>Configured custom Prometheus metrics and Grafana dashboards for proactive comprehensive system monitoring.</li>
              </ul>
            </div>

            {/* TCS Exp 2 */}
            <div className="devops-card">
              <h3>TCS - DBT Developer, NDL Team</h3>
              <h4>Telefonica Germany & Network Data Lake</h4>
              <span className="date">2022 – Present | Status: SUCCESS</span>
              <ul>
                <li>Utilized Apache Airflow DAGs to deeply schedule and automate dbt jobs for uninterrupted data workflows.</li>
                <li>Operated highly scalable data transformations employing dbt integrated with Google BigQuery.</li>
                <li>Successfully transitioned from manual Testing paradigms (Excel, DBeaver) into a complete GitOps and DevOps role.</li>
                <li>Built automated jobs to process data streams from various sources into Google Cloud Platform (GCP) via Talend.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* STAGE 3: PROVISION PIPELINE TOOLING (Skills) */}
        <section id="provision" className="pipeline-stage">
          <div className={getNodeClass('provision')}></div>
          
          <h2 className="stage-title">
            <span className="st-text">Stage 3:</span> Provision Pipeline Tooling
          </h2>
          
          <div className="skills-grid">
            
            <div className="skill-box">
              <div className="skill-header">
                <Cloud size={20} /> IAC & Cloud Providers
              </div>
              <div className="skill-tags">
                <span className="tag">AWS (EC2, S3, IAM)</span>
                <span className="tag">Terraform</span>
                <span className="tag">Google Cloud (GCP)</span>
                <span className="tag">AWS CloudFormation</span>
                <span className="tag">Ansible</span>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-header">
                <GitBranch size={20} /> CI/CD & Orchestration
              </div>
              <div className="skill-tags">
                <span className="tag">Jenkins Pipeline</span>
                <span className="tag">Git & GitHub Actions</span>
                <span className="tag">Docker Containers</span>
                <span className="tag">Kubernetes (K8s)</span>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-header">
                <Activity size={20} /> Monitoring & Scripting
              </div>
              <div className="skill-tags">
                <span className="tag">Bash / Shell Scripting</span>
                <span className="tag">Prometheus</span>
                <span className="tag">Grafana</span>
                <span className="tag">Apache Airflow</span>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-header">
                <Cpu size={20} /> Data Engineering
              </div>
              <div className="skill-tags">
                <span className="tag">dbt (Data Build Tool)</span>
                <span className="tag">Google BigQuery</span>
                <span className="tag">Talend</span>
                <span className="tag">DBeaver</span>
              </div>
            </div>

            {/* Certs grouped into skills grid for clean pipeline flow */}
            <div className="skill-box" style={{ gridColumn: '1 / -1' }}>
               <div className="skill-header">
                <Award size={20} /> Certified Accreditations
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                <span className="status-badge"><CheckCircle2 size={14}/> AWS Certified: Cloud Practitioner</span>
                <span className="status-badge"><CheckCircle2 size={14}/> AWS Certified: Developer Associate</span>
              </div>
            </div>

          </div>
        </section>

        {/* STAGE 4: POST-DEPLOYMENT TRIGGERS (Contact) */}
        <section id="trigger" className="pipeline-stage" style={{ paddingBottom: '3rem' }}>
          <div className={getNodeClass('trigger')}></div>
          
          <h2 className="stage-title">
            <span className="st-text">Stage 4:</span> Post-Deployment Triggers
          </h2>
          
          <p className="bio-text">
            Pipeline execution completed successfully. Ready to trigger new workflows for scalable infrastructure and automated systems. Awaiting your Webhook.
          </p>
          
          <div className="contact-actions">
            <a href="mailto:saitejavarma555@gmail.com" className="btn-trigger">
              <Mail size={18} /> Trigger email_alert.sh
            </a>

            <a href="https://www.linkedin.com/in/saiteja-varma-27711b218" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin size={18} /> Connect API (LinkedIn)
            </a>
          </div>
        </section>

        <footer>
          <p>&copy; {new Date().getFullYear()} Sai Teja Varma Veepuri.</p>
          <p style={{ marginTop: '0.5rem', color: 'var(--status-success)' }}>
            <Terminal size={12} style={{ display: 'inline', marginRight: '4px' }}/> 
            Pipeline parsed and executed cleanly.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
