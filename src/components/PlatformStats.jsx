import React, { useEffect, useState } from 'react';
import { Code2, Cpu, Trophy, Activity, GitCommit, Users } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './PlatformStats.css';

const PlatformStats = () => {
  const [stats, setStats] = useState({
    leetcode: { solved: 0, ranking: 0, loading: true },
    codechef: { rating: 1400, stars: '2★', loading: false }, // Mocked since API is down
    github: { repos: 0, followers: 0, loading: true }
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch GitHub Stats
        const ghResponse = await fetch('https://api.github.com/users/shivaansh0610-LUFFY');
        const ghData = await ghResponse.json();
        
        // Fetch LeetCode Stats
        const lcProfile = await fetch('https://alfa-leetcode-api.onrender.com/NGqjeVnlE3');
        const lcProfileData = await lcProfile.json();
        
        const lcSolved = await fetch('https://alfa-leetcode-api.onrender.com/NGqjeVnlE3/solved');
        const lcSolvedData = await lcSolved.json();

        setStats(prev => ({
          ...prev,
          leetcode: { 
            solved: lcSolvedData.solvedProblem || 107, 
            ranking: lcProfileData.ranking || 1420385, 
            loading: false 
          },
          github: { 
            repos: ghData.public_repos || 34, 
            followers: ghData.followers || 2, 
            loading: false 
          }
        }));
      } catch (error) {
        console.error("Error fetching live stats:", error);
        // Fallback data
        setStats(prev => ({
          ...prev,
          leetcode: { solved: 107, ranking: 1420385, loading: false },
          github: { repos: 34, followers: 2, loading: false }
        }));
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Live Processes</h2>
          <p className="section-subtitle">Real-time stats from my coding profiles.</p>
        </div>

        <div className="stats-grid">
          {/* Leetcode Card */}
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon leetcode-bg">
                <Code2 size={24} color="#ffa116" />
              </div>
              <h3 className="stat-name">LeetCode</h3>
            </div>
            <div className="stat-body">
              <div className="stat-item">
                <Trophy size={18} className="stat-item-icon" />
                <div className="stat-details">
                  <span className="stat-label">Problems Solved</span>
                  <span className="stat-value">
                    {stats.leetcode.loading ? <span className="skeleton"></span> : stats.leetcode.solved}
                  </span>
                </div>
              </div>
              <div className="stat-item">
                <Activity size={18} className="stat-item-icon" />
                <div className="stat-details">
                  <span className="stat-label">Global Rank</span>
                  <span className="stat-value">
                    {stats.leetcode.loading ? <span className="skeleton"></span> : stats.leetcode.ranking.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CodeChef Card */}
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon codechef-bg" style={{ backgroundColor: 'rgba(91, 70, 56, 0.1)' }}>
                <Cpu size={24} color="#5B4638" />
              </div>
              <h3 className="stat-name">CodeChef</h3>
            </div>
            <div className="stat-body">
              <div className="stat-item">
                <Activity size={18} className="stat-item-icon" />
                <div className="stat-details">
                  <span className="stat-label">Rating</span>
                  <span className="stat-value">
                    {stats.codechef.loading ? <span className="skeleton"></span> : stats.codechef.rating}
                  </span>
                </div>
              </div>
              <div className="stat-item">
                <Trophy size={18} className="stat-item-icon" />
                <div className="stat-details">
                  <span className="stat-label">Stars</span>
                  <span className="stat-value" style={{ color: '#10B981' }}>
                    {stats.codechef.loading ? <span className="skeleton"></span> : stats.codechef.stars}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Github Card */}
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon github-bg">
                <FaGithub size={24} color="#24292e" />
              </div>
              <h3 className="stat-name">GitHub</h3>
            </div>
            <div className="stat-body">
              <div className="stat-item">
                <GitCommit size={18} className="stat-item-icon" />
                <div className="stat-details">
                  <span className="stat-label">Public Repos</span>
                  <span className="stat-value">
                    {stats.github.loading ? <span className="skeleton"></span> : stats.github.repos}
                  </span>
                </div>
              </div>
              <div className="stat-item">
                <Users size={18} className="stat-item-icon" />
                <div className="stat-details">
                  <span className="stat-label">Followers</span>
                  <span className="stat-value">
                    {stats.github.loading ? <span className="skeleton"></span> : stats.github.followers}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;
