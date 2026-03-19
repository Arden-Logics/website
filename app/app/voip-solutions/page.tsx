"use client";

import { useState } from "react";

export default function VoIPSolutionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "VoIP Landing Page" }),
      });
    } catch {}
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .voip-page {
          font-family: 'DM Sans', sans-serif;
          background: #f8f7f4;
          color: #1a1a2e;
          min-height: 100vh;
        }

        .hero {
          background: linear-gradient(135deg, #0a1628 0%, #0d2444 60%, #0f3460 100%);
          position: relative;
          overflow: hidden;
          padding: 80px 24px 100px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -40%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 168, 150, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 120, 212, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 168, 150, 0.15);
          border: 1px solid rgba(0, 168, 150, 0.4);
          color: #00c9b1;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #00c9b1;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .hero h1 span {
          color: #00c9b1;
        }

        .hero p {
          font-size: 17px;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          margin-bottom: 36px;
          font-weight: 300;
        }

        .pain-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
        }

        .pain-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.85);
          font-size: 15px;
        }

        .pain-icon {
          width: 28px;
          height: 28px;
          background: rgba(0, 201, 177, 0.15);
          border: 1px solid rgba(0, 201, 177, 0.3);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 14px;
        }

        .cta-btn {
          display: inline-block;
          background: #00c9b1;
          color: #0a1628;
          font-weight: 600;
          font-size: 16px;
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          font-family: 'DM Sans', sans-serif;
        }

        .cta-btn:hover {
          background: #00e5cc;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0, 201, 177, 0.3);
        }

        /* Form Card */
        .form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px 36px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.3);
        }

        .form-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: #1a1a2e;
          margin-bottom: 6px;
        }

        .form-card p {
          font-size: 14px;
          color: #666;
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #444;
          margin-bottom: 6px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #e0e0e0;
          border-radius: 8px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          color: #1a1a2e;
          transition: border-color 0.2s;
          outline: none;
          background: #fafafa;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #00c9b1;
          background: #fff;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-submit {
          width: 100%;
          background: #0a1628;
          color: #fff;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 8px;
        }

        .form-submit:hover {
          background: #0d2444;
          transform: translateY(-1px);
        }

        .form-note {
          text-align: center;
          font-size: 12px;
          color: #999;
          margin-top: 12px;
        }

        /* Success State */
        .success-state {
          text-align: center;
          padding: 20px 0;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          background: #e8faf8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 28px;
        }

        .success-state h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .success-state p {
          color: #666;
          font-size: 15px;
          margin-bottom: 0;
        }

        /* Stats Section */
        .stats-section {
          background: #ffffff;
          border-bottom: 1px solid #ece9e3;
          padding: 40px 24px;
        }

        .stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: #0d2444;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 14px;
          color: #888;
          font-weight: 400;
        }

        /* Features Section */
        .features-section {
          padding: 80px 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00a896;
          margin-bottom: 12px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 40px);
          color: #1a1a2e;
          margin-bottom: 48px;
          max-width: 520px;
          line-height: 1.25;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr; }
        }

        .feature-card {
          background: #fff;
          border: 1px solid #ece9e3;
          border-radius: 12px;
          padding: 28px;
          transition: all 0.2s;
        }

        .feature-card:hover {
          border-color: #00c9b1;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.06);
        }

        .feature-emoji {
          font-size: 28px;
          margin-bottom: 14px;
          display: block;
        }

        .feature-card h4 {
          font-weight: 600;
          font-size: 17px;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .feature-card p {
          font-size: 14px;
          color: #777;
          line-height: 1.6;
        }

        /* Advocare Section */
        .advocare-section {
          background: linear-gradient(135deg, #0a1628 0%, #0d2444 100%);
          padding: 64px 24px;
          text-align: center;
        }

        .advocare-inner {
          max-width: 640px;
          margin: 0 auto;
        }

        .advocare-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .check {
          width: 20px;
          height: 20px;
          background: #00c9b1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #fff;
          flex-shrink: 0;
        }

        .advocare-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 4vw, 38px);
          color: #fff;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .advocare-section p {
          color: rgba(255,255,255,0.65);
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 32px;
          font-weight: 300;
        }

        /* Footer */
        .page-footer {
          background: #f0ede8;
          padding: 32px 24px;
          text-align: center;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-brand {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
        }

        .footer-contact {
          font-size: 14px;
          color: #666;
        }

        .footer-contact a {
          color: #00a896;
          text-decoration: none;
          font-weight: 500;
        }
      `}</style>

      <div className="voip-page">

        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="badge">
                <span className="badge-dot"></span>
                Advocare Preferred VoIP Provider
              </div>
              <h1>
                Your Phone System<br />
                Should Work <span>As Hard</span><br />
                As You Do
              </h1>
              <p>
                Designed for medical practices that can't afford dropped calls, 
                surprise bills, or outdated systems that slow patient care.
              </p>
              <div className="pain-points">
                <div className="pain-item">
                  <div className="pain-icon">💸</div>
                  <span>Overpaying for a system that underdelivers?</span>
                </div>
                <div className="pain-item">
                  <div className="pain-icon">📵</div>
                  <span>Dropped calls and unreliable lines costing you patients?</span>
                </div>
                <div className="pain-item">
                  <div className="pain-icon">🏥</div>
                  <span>Need a HIPAA-compliant solution your staff will actually use?</span>
                </div>
              </div>
              <a href="#consultation" className="cta-btn">Schedule a Free Consultation →</a>
            </div>

            {/* Form */}
            <div id="consultation">
              <div className="form-card">
                {submitted ? (
                  <div className="success-state">
                    <div className="success-icon">✓</div>
                    <h3>You're all set!</h3>
                    <p>A member of our team will reach out within one business day to schedule your consultation.</p>
                  </div>
                ) : (
                  <>
                    <h3>Book Your Free Consultation</h3>
                    <p>No commitment. We'll assess your current setup and show you what's possible.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          placeholder="Dr. Jane Smith"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Practice Name</label>
                        <input
                          type="text"
                          placeholder="Advocare Pediatric Group"
                          required
                          value={formData.practice}
                          onChange={e => setFormData({ ...formData, practice: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="you@yourpractice.com"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>Current Phone Setup (optional)</label>
                        <textarea
                          placeholder="e.g. Using Comcast, 3 locations, 12 lines..."
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <button type="submit" className="form-submit">
                        Request My Free Consultation
                      </button>
                      <p className="form-note">Typically responds within 1 business day · No spam, ever</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section">
          <div className="stats-inner">
            <div>
              <div className="stat-num">200+</div>
              <div className="stat-label">Healthcare clients served</div>
            </div>
            <div>
              <div className="stat-num">99.9%</div>
              <div className="stat-label">Uptime guaranteed</div>
            </div>
            <div>
              <div className="stat-num">~30%</div>
              <div className="stat-label">Avg. cost reduction</div>
            </div>
            <div>
              <div className="stat-num">24/7</div>
              <div className="stat-label">Support & monitoring</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="section-label">What We Deliver</div>
          <h2 className="section-title">Built for the Demands of a Medical Practice</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-emoji">📞</span>
              <h4>Crystal-Clear Calls</h4>
              <p>HD voice quality with redundant connections so calls never drop during critical patient conversations.</p>
            </div>
            <div className="feature-card">
              <span className="feature-emoji">💰</span>
              <h4>Transparent, Predictable Billing</h4>
              <p>Flat monthly rates with no hidden fees. Most practices save 25–35% compared to traditional phone carriers.</p>
            </div>
            <div className="feature-card">
              <span className="feature-emoji">🔒</span>
              <h4>HIPAA-Compliant by Design</h4>
              <p>Encrypted communications, compliant voicemail, and audit-ready call logs built in from day one.</p>
            </div>
            <div className="feature-card">
              <span className="feature-emoji">🔄</span>
              <h4>Easy Call Routing</h4>
              <p>Auto-attendants, after-hours routing, and on-call forwarding — configured to match how your practice actually operates.</p>
            </div>
            <div className="feature-card">
              <span className="feature-emoji">📱</span>
              <h4>Works on Any Device</h4>
              <p>Desk phones, mobile app, or desktop softphone. Staff can handle calls from anywhere without sacrificing professionalism.</p>
            </div>
            <div className="feature-card">
              <span className="feature-emoji">⚡</span>
              <h4>Fast, Managed Onboarding</h4>
              <p>We handle the migration, number porting, and staff training. Most practices are fully live within 2 weeks.</p>
            </div>
          </div>
        </section>

        {/* Advocare Trust Section */}
        <section className="advocare-section">
          <div className="advocare-inner">
            <div className="advocare-badge">
              <span className="check">✓</span>
              Advocare Preferred Partner
            </div>
            <h2>Trusted by Advocare Practices Across New Jersey</h2>
            <p>
              As an Advocare preferred vendor, Arden 360 has been vetted and trusted to 
              serve their network of 50+ affiliated practices. Your peers already rely on 
              us — let's show you why.
            </p>
            <a href="#consultation" className="cta-btn">Get Started Today →</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="page-footer">
          <div className="footer-inner">
            <div className="footer-brand">Arden 360</div>
            <div className="footer-contact">
              Questions? Call us at <a href="tel:+18562345678">(856) 234-5678</a> or email <a href="mailto:info@arden360.com">info@arden360.com</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
