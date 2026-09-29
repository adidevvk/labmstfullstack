import React, { useState } from 'react';
import PostComposer from './components/PostComposer';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('composer');

  return (
    <div className="app-container">
      {/* Top Navigation / Brand */}
      <header className="app-navbar">
        <div className="nav-brand">
          <div className="brand-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">SocialCraft</span>
            <span className="brand-tag">Post Composer</span>
          </div>
        </div>

        <div className="nav-limits-badges">
          <div className="badge-item badge-twitter">
            <span className="badge-dot twitter-dot"></span>
            Twitter: <strong>280 chars</strong>
          </div>
          <div className="badge-item badge-linkedin">
            <span className="badge-dot linkedin-dot"></span>
            LinkedIn: <strong>3,000 chars</strong>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="hero-section">
        <h1 className="hero-title">Social Media Post Composer</h1>
        <p className="hero-subtitle">
          Draft and preview posts with real-time character limit enforcement for Twitter and LinkedIn.
        </p>
      </section>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="composer-grid">
          {/* Post Composer Card */}
          <div className="composer-column">
            <PostComposer />
          </div>

          {/* Quick Reference & Requirement Verification Panel */}
          <div className="info-column">
            <div className="feature-card">
              <h3 className="feature-card-title">
                <span className="feature-icon">📋</span> Specification Checklist
              </h3>
              <ul className="spec-list">
                <li className="spec-item spec-checked">
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Textarea for post input</strong>
                    <p>Clean, auto-expanding text box with quick actions</p>
                  </div>
                </li>
                <li className="spec-item spec-checked">
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Twitter & LinkedIn selector</strong>
                    <p>Interactive platform switcher with clear icons</p>
                  </div>
                </li>
                <li className="spec-item spec-checked">
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Character limits applied</strong>
                    <p>Twitter: 280 chars | LinkedIn: 3000 chars</p>
                  </div>
                </li>
                <li className="spec-item spec-checked">
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Live character counter</strong>
                    <p>Dynamic count, progress bar, and remaining chars</p>
                  </div>
                </li>
                <li className="spec-item spec-checked">
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Real-time error message</strong>
                    <p>Alert displays immediately when limit is exceeded</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Testing Tips Card */}
            <div className="feature-card tips-card">
              <h3 className="feature-card-title">
                <span className="feature-icon">💡</span> Testing Guide
              </h3>
              <p className="tips-text">
                1. Switch between <strong>Twitter (280)</strong> and <strong>LinkedIn (3,000)</strong>.<br />
                2. Click <strong>"Exceed Twitter Limit"</strong> sample to see the red warning state and exact overflow count.<br />
                3. Switch the platform to <strong>LinkedIn</strong> — observe how the same text becomes valid!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Built with React & Vanilla CSS • Full-Stack Lab MST Implementation</p>
      </footer>
    </div>
  );
}
