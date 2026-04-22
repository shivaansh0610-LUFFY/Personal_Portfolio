import React, { useRef } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Video play prevented:', e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-media">
        {project.video ? (
          <video 
            ref={videoRef}
            src={project.video}
            className="project-video"
            muted
            loop
            playsInline
            poster={project.image}
          />
        ) : (
          <img src={project.image} alt={project.title} className="project-image" />
        )}
        
        {project.video && (
          <div className="video-indicator">
            <Play size={16} />
            <span>Hover to play</span>
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-links" style={{ display: 'flex', gap: '0.5rem' }}>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                <FaGithub size={20} />
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Site">
                <ArrowUpRight size={20} />
              </a>
            )}
            {project.link && !project.liveLink && !project.githubLink && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'DevInsight V2 Platform',
      description: 'A comprehensive dashboard for evaluating developer authenticity and growth through behavioral analysis.',
      tags: ['React', 'Data Viz', 'Vite'],
      image: 'https://via.placeholder.com/600x400/1E293B/FFFFFF?text=DevInsight',
      video: '/DevInsight_video.mp4',
      githubLink: 'https://github.com/shivaansh0610-LUFFY/DevInsight-v2',
      liveLink: 'https://dev-insight-v2.vercel.app/'
    },
    {
      id: 2,
      title: 'TaxiPulse Analytics',
      description: 'Interactive dashboard analyzing NYC TLC taxi trip data using raw Parquet files and modern React features.',
      tags: ['Python Backend', 'React', 'Parquet'],
      image: 'https://via.placeholder.com/600x400/0F172A/FFFFFF?text=TaxiPulse',
      video: '/UrbanTaxi_video.mp4',
      githubLink: 'https://github.com/Prantik-07/URBAN-TAXI-DEMAND-PATTERN-F',
      liveLink: 'https://urban-taxi-demand-pattern-nn7zolfvs.vercel.app/'
    },
    {
      id: 3,
      title: 'PitchForge AI',
      description: 'Viral-ready startup tool featuring unique AI persona-based feedback (Coach, Shark, Grandma) to help founders refine their pitches.',
      tags: ['AI/LLM', 'React', 'Startup Tool'],
      image: 'https://via.placeholder.com/600x400/334155/FFFFFF?text=PitchForge',
      video: '/PitchForge.mp4', 
      githubLink: 'https://github.com/shivaansh0610-LUFFY/PitchForge',
      liveLink: 'https://pitch-forge-ecru.vercel.app/'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected Works</h2>
          <p className="section-subtitle">A showcase of my recent coding projects and UI explorations.</p>
        </div>

        <div className="projects-grid">
          {projectsList.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
