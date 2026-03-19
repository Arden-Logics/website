"use client";

import { useState } from "react";

export default function VoIPSolutionsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollToConsultation = () => {
    const el = document.getElementById("consultation");
    if (el) {
      const headerOffset = 120;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "VoIP Landing Page - Advocare" }),
      });
    } catch {}
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .voip-page { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f2f5f9; color: #1a202c; min-height: 100vh; padding-top: 80px; }

        .hero { background: linear-gradient(155deg, #061420 0%, #0a1e35 50%, #0e2d50 100%); position: relative; overflow: hidden; padding: 200px 24px 130px; margin-top: 0; z-index: 1; }
        .hero::before { content: ''; position: absolute; top: -15%; right: -5%; width: 800px; height: 800px; background: radial-gradient(ellipse, rgba(26,127,212,0.08) 0%, transparent 65%); pointer-events: none; }
        .hero::after { content: ''; position: absolute; bottom: -20%; left: -8%; width: 600px; height: 600px; background: radial-gradient(ellipse, rgba(26,127,212,0.04) 0%, transparent 65%); pointer-events: none; }
        .hero-inner { max-width: 1160px; margin: 0 auto; display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 72px; align-items: center; position: relative; z-index: 1; }
        @media (max-width: 960px) { .hero { padding: 180px 20px 90px; } .hero-inner { grid-template-columns: 1fr; gap: 52px; } }

        .preferred-tag { display: inline-flex; align-items: center; gap: 10px; background: rgba(26,127,212,0.12); border: 1px solid rgba(26,127,212,0.35); color: #5aabef; padding: 8px 18px; border-radius: 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 28px; }
        .preferred-dot { width: 6px; height: 6px; background: #5aabef; border-radius: 50%; animation: blink 2s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        .hero h1 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(38px, 4.5vw, 58px); font-weight: 700; color: #ffffff; line-height: 1.1; margin-bottom: 22px; letter-spacing: -0.02em; }
        .hero h1 strong { color: #4da6e8; }
        .hero-sub { font-size: 17px; color: rgba(255,255,255,0.62); line-height: 1.75; margin-bottom: 40px; font-weight: 400; max-width: 490px; }

        .pain-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px; }
        .pain-item { display: flex; align-items: flex-start; gap: 14px; padding: 15px 18px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-left: 3px solid #1a7fd4; border-radius: 4px; }
        .pain-check { width: 20px; height: 20px; background: rgba(26,127,212,0.2); border: 1px solid rgba(26,127,212,0.45); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
        .pain-check svg { width: 10px; height: 10px; stroke: #5aabef; stroke-width: 2.5; fill: none; }
        .pain-text strong { display: block; color: #fff; font-size: 14px; font-weight: 600; margin-bottom: 3px; letter-spacing: -0.01em; }
        .pain-text span { color: rgba(255,255,255,0.48); font-size: 13px; line-height: 1.55; }

        .hero-cta { display: inline-flex; align-items: center; gap: 10px; background: #1a7fd4; color: #ffffff; font-weight: 700; font-size: 14px; padding: 16px 32px; border-radius: 4px; text-decoration: none; transition: all 0.2s; letter-spacing: 0.04em; text-transform: uppercase; font-family: 'Inter', sans-serif; cursor: pointer; border: none; }
        .hero-cta:hover { background: #2d8fdb; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(26,127,212,0.4); }
        .hero-cta svg { width: 15px; height: 15px; stroke: currentColor; stroke-width: 2.5; fill: none; transition: transform 0.2s; }
        .hero-cta:hover svg { transform: translateX(4px); }

        .form-card { background: #ffffff; border-radius: 8px; padding: 40px 36px; box-shadow: 0 32px 80px rgba(0,0,0,0.38); }
        .form-eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #1a7fd4; margin-bottom: 8px; }
        .form-title { font-family: 'Playfair Display', Georgia, serif; font-size: 22px; color: #0a1e35; margin-bottom: 6px; font-weight: 700; line-height: 1.2; }
        .form-sub { font-size: 13.5px; color: #94a3b8; margin-bottom: 24px; line-height: 1.5; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } .form-card { padding: 28px 22px; } }
        .form-group { margin-bottom: 12px; }
        .form-group label { display: block; font-size: 11px; font-weight: 600; color: #475569; margin-bottom: 6px; letter-spacing: 0.07em; text-transform: uppercase; }
        .form-group input, .form-group textarea { width: 100%; padding: 11px 14px; border: 1.5px solid #e2e8f0; border-radius: 5px; font-size: 14px; font-family: 'Inter', sans-serif; color: #1a202c; transition: border-color 0.18s, box-shadow 0.18s; outline: none; background: #f8fafc; }
        .form-group input:focus, .form-group textarea:focus { border-color: #1a7fd4; background: #fff; box-shadow: 0 0 0 3px rgba(26,127,212,0.1); }
        .form-group textarea { resize: vertical; min-height: 76px; }
        .form-submit { width: 100%; background: #1a7fd4; color: #ffffff; border: none; padding: 15px; border-radius: 5px; font-size: 13px; font-weight: 700; font-family: 'Inter', sans-serif; cursor: pointer; transition: all 0.2s; margin-top: 6px; letter-spacing: 0.07em; text-transform: uppercase; }
        .form-submit:hover { background: #2d8fdb; transform: translateY(-1px); box-shadow: 0 8px 20px rgba(26,127,212,0.35); }
        .form-footer { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; margin-top: 14px; }
        .form-footer-item { font-size: 11.5px; color: #94a3b8; font-weight: 500; }
        .form-footer-dot { width: 3px; height: 3px; background: #cbd5e1; border-radius: 50%; display: inline-block; flex-shrink: 0; }

        .success-state { text-align: center; padding: 28px 0; }
        .success-check { width: 68px; height: 68px; background: #e8f3fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; }
        .success-check svg { width: 30px; height: 30px; stroke: #1a7fd4; stroke-width: 2.5; fill: none; }
        .success-state h3 { font-family: 'Playfair Display', Georgia, serif; font-size: 24px; color: #0a1e35; margin-bottom: 10px; }
        .success-state p { color: #64748b; font-size: 14.5px; line-height: 1.65; }

        .metrics-bar { background: #ffffff; border-bottom: 1px solid #e4eaf2; padding: 0 24px; }
        .metrics-inner { max-width: 1160px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 768px) { .metrics-inner { grid-template-columns: repeat(2,1fr); } }
        .metric { padding: 32px 20px; border-right: 1px solid #f0f4f9; text-align: center; }
        .metric:last-child { border-right: none; }
        .metric-number { font-family: 'Playfair Display', Georgia, serif; font-size: 38px; font-weight: 700; color: #0a1e35; line-height: 1; margin-bottom: 8px; letter-spacing: -0.02em; }
        .metric-number sup { font-size: 18px; color: #1a7fd4; vertical-align: super; }
        .metric-label { font-size: 12.5px; color: #94a3b8; font-weight: 500; }

        .testimonial-section { background: #ffffff; border-top: 1px solid #e8eef5; border-bottom: 1px solid #e8eef5; padding: 72px 24px; }
        .testimonial-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .quote-mark { font-family: 'Playfair Display', Georgia, serif; font-size: 80px; color: #1a7fd4; line-height: 0.5; margin-bottom: 32px; display: block; opacity: 0.25; }
        .testimonial-text { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(19px, 2.5vw, 25px); color: #0a1e35; line-height: 1.55; font-weight: 600; font-style: italic; margin-bottom: 28px; }
        .testimonial-attribution { display: flex; align-items: center; justify-content: center; gap: 16px; }
        .attribution-line { width: 36px; height: 1px; background: #cbd5e1; flex-shrink: 0; }
        .attribution-name { font-size: 12px; color: #1a7fd4; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
        .attribution-practice { font-size: 12px; color: #94a3b8; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; margin-top: 4px; }

        .objections-section { padding: 96px 24px; max-width: 1160px; margin: 0 auto; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #1a7fd4; margin-bottom: 12px; }
        .section-headline { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(28px, 3.2vw, 42px); color: #0a1e35; margin-bottom: 14px; line-height: 1.15; max-width: 580px; }
        .section-body { font-size: 16px; color: #64748b; max-width: 500px; margin-bottom: 48px; line-height: 1.75; }

        .objection-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 768px) { .objection-grid { grid-template-columns: 1fr; } }
        .objection-card { background: #ffffff; border: 1px solid #e4eaf2; border-radius: 8px; padding: 36px 32px; position: relative; overflow: hidden; transition: box-shadow 0.2s; }
        .objection-card:hover { box-shadow: 0 8px 32px rgba(26,127,212,0.09); }
        .objection-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #1a7fd4, #4da6e8); }
        .objection-q { font-size: 11px; font-weight: 700; color: #94a3b8; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; }
        .objection-h { font-family: 'Playfair Display', Georgia, serif; font-size: 20px; color: #0a1e35; font-weight: 700; margin-bottom: 16px; line-height: 1.3; font-style: italic; }
        .objection-body { font-size: 14.5px; color: #64748b; line-height: 1.75; }

        .value-section { padding: 0 24px 96px; max-width: 1160px; margin: 0 auto; }
        .value-section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #1a7fd4; margin-bottom: 12px; }
        .value-section-headline { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(28px, 3.2vw, 42px); color: #0a1e35; margin-bottom: 14px; line-height: 1.15; max-width: 560px; }
        .value-section-body { font-size: 16px; color: #64748b; max-width: 500px; margin-bottom: 48px; line-height: 1.75; }
        .value-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: #cdd8e6; border: 2px solid #cdd8e6; border-radius: 8px; overflow: hidden; }
        @media (max-width: 900px) { .value-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .value-grid { grid-template-columns: 1fr; } }
        .value-card { background: #ffffff; padding: 32px 28px; transition: background 0.18s; position: relative; }
        .value-card:hover { background: #f6f9fd; }
        .value-card::after { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: linear-gradient(180deg, #1a7fd4, #4da6e8); opacity: 0; transition: opacity 0.18s; }
        .value-card:hover::after { opacity: 1; }
        .value-number { font-family: 'Playfair Display', serif; font-size: 12px; color: #c2d3e3; margin-bottom: 18px; }
        .value-card h4 { font-weight: 700; font-size: 16px; color: #0a1e35; margin-bottom: 9px; letter-spacing: -0.01em; line-height: 1.3; }
        .value-card p { font-size: 13.5px; color: #64748b; line-height: 1.7; }

        .advocare-section { background: linear-gradient(155deg, #061420 0%, #0a1e35 60%, #0e2d50 100%); padding: 88px 24px; position: relative; overflow: hidden; }
        .advocare-section::before { content: ''; position: absolute; right: -5%; top: -20%; width: 700px; height: 700px; background: radial-gradient(ellipse, rgba(26,127,212,0.07) 0%, transparent 65%); pointer-events: none; }
        .advocare-inner { max-width: 740px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
        .advocare-tag { display: inline-block; background: rgba(26,127,212,0.1); border: 1px solid rgba(26,127,212,0.25); color: #5aabef; padding: 7px 18px; border-radius: 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 28px; }
        .advocare-section h2 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(28px, 3.8vw, 44px); color: #ffffff; margin-bottom: 18px; line-height: 1.15; letter-spacing: -0.01em; }
        .advocare-section p { color: rgba(255,255,255,0.52); font-size: 16.5px; line-height: 1.78; margin-bottom: 36px; font-weight: 400; max-width: 540px; margin-left: auto; margin-right: auto; }
        .advocare-cta { display: inline-flex; align-items: center; gap: 10px; background: #1a7fd4; color: #ffffff; font-weight: 700; font-size: 13.5px; padding: 16px 32px; border-radius: 4px; text-decoration: none; transition: all 0.2s; letter-spacing: 0.06em; text-transform: uppercase; font-family: 'Inter', sans-serif; cursor: pointer; border: none; }
        .advocare-cta:hover { background: #2d8fdb; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(26,127,212,0.35); }
        .advocare-cta svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2.5; fill: none; transition: transform 0.2s; }
        .advocare-cta:hover svg { transform: translateX(4px); }
      `}</style>

      <div className="voip-page">

        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="preferred-tag">
                <span className="preferred-dot"></span>
                Advocare Preferred Vendor
              </div>
              <h1>
                The Phone System<br />
                Your Practice <strong>Deserves</strong><br />
                to Run On
              </h1>
              <p className="hero-sub">
                85 Advocare practices across New Jersey already trust us with their phones. Crystal-clear calls, zero disruption during the switch, and a team that handles everything for you.
              </p>
              <div className="pain-list">
                <div className="pain-item">
                  <span className="pain-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>
                  <div className="pain-text">
                    <strong>We manage the entire system for you</strong>
                    <span>Setup, maintenance, number porting, and 24/7 support. One call to us handles everything.</span>
                  </div>
                </div>
                <div className="pain-item">
                  <span className="pain-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>
                  <div className="pain-text">
                    <strong>HD voice quality your staff will notice immediately</strong>
                    <span>Enterprise-grade infrastructure with 99.9% uptime. Patients always get through.</span>
                  </div>
                </div>
                <div className="pain-item">
                  <span className="pain-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></span>
                  <div className="pain-text">
                    <strong>The switch is easier than you think</strong>
                    <span>We port your numbers, train your staff, and go live with zero downtime. Most practices are fully up in two weeks.</span>
                  </div>
                </div>
              </div>
              <button type="button" onClick={scrollToConsultation} className="hero-cta">
                Book a Free Consultation
                <svg viewBox="0 0 16 16"><line x1="2" y1="8" x2="14" y2="8"/><polyline points="9,3 14,8 9,13"/></svg>
              </button>
            </div>

            <div id="consultation" style={{ scrollMarginTop: "120px" }}>
              <div className="form-card">
                {submitted ? (
                  <div className="success-state">
                    <div className="success-check"><svg viewBox="0 0 32 32"><polyline points="6,16 13,23 26,9" /></svg></div>
                    <h3>We will be in touch shortly.</h3>
                    <p>A member of our team will reach out within one business day to schedule your consultation.</p>
                  </div>
                ) : (
                  <>
                    <div className="form-eyebrow">Advocare Network</div>
                    <h2 className="form-title">See What a Better System Looks Like</h2>
                    <p className="form-sub">No commitment. We assess your current setup and show you exactly what changes.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Your Name</label>
                          <input type="text" placeholder="Jane Smith" required value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input type="tel" placeholder="(856) 000-0000" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Practice Name</label>
                        <input type="text" placeholder="Advocare Family Medicine" required value={formData.companyName} onChange={e => setFormData({ ...formData, companyName: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label>Work Email</label>
                        <input type="email" placeholder="you@yourpractice.com" required value={formData.workEmail} onChange={e => setFormData({ ...formData, workEmail: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label>Current Phone Provider (optional)</label>
                        <textarea placeholder="e.g. Comcast Business, 3 locations, 12 lines..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                      </div>
                      <button type="submit" className="form-submit">Request My Free Consultation</button>
                      <div className="form-footer">
                        <span className="form-footer-item">HIPAA Compliant</span>
                        <span className="form-footer-dot"></span>
                        <span className="form-footer-item">No Commitment</span>
                        <span className="form-footer-dot"></span>
                        <span className="form-footer-item">Responds Within 1 Business Day</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-bar">
          <div className="metrics-inner">
            {[
              { num: "85", sup: "+", label: "Advocare Practices Onboarded" },
              { num: "99.9", sup: "%", label: "Guaranteed Uptime" },
              { num: "2", sup: " Wk", label: "Average Time to Go Live" },
              { num: "24", sup: "/7", label: "Dedicated Support" },
            ].map((m, i) => (
              <div className="metric" key={i}>
                <div className="metric-number">{m.num}<sup>{m.sup}</sup></div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-inner">
            <span className="quote-mark">"</span>
            <p className="testimonial-text">
              Arden 360 made the whole process easy. The savings were real and the support has been outstanding.
            </p>
            <div className="testimonial-attribution">
              <span className="attribution-line"></span>
              <div>
                <div className="attribution-name">Dr. Tai</div>
                <div className="attribution-practice">Advocare ENT Specialty Center</div>
              </div>
              <span className="attribution-line"></span>
            </div>
          </div>
        </section>

        <section className="objections-section">
          <div className="section-label">Real Questions, Real Answers</div>
          <h2 className="section-headline">The Two Things Every Office Manager Asks Before Switching</h2>
          <p className="section-body">We hear these from every practice. Here is exactly what to expect.</p>
          <div className="objection-grid">
            <div className="objection-card">
              <div className="objection-q">On Call Quality</div>
              <h3 className="objection-h">"Will the call quality actually be better than what we have now?"</h3>
              <p className="objection-body">
                Yes — and your staff will feel the difference on day one. We run enterprise-grade VoIP infrastructure with HD voice and redundant connections, the same technology used by major hospital networks. Our 99.9% uptime is backed by an SLA. If your location has unstable internet, we diagnose that during the consultation and solve it before we ever go live. You will not be trading one problem for another.
              </p>
            </div>
            <div className="objection-card">
              <div className="objection-q">On Switching</div>
              <h3 className="objection-h">"How disruptive is the transition going to be for our office?"</h3>
              <p className="objection-body">
                Far less than you expect. We have onboarded 85 Advocare practices without a single day of downtime. We port your existing numbers, pre-configure everything off-site, and train your staff on-site before go-live. Most practices are fully live within two weeks. Your front desk will not miss a patient call during the process. That is not a best case — it is our standard.
              </p>
            </div>
          </div>
        </section>

        <section className="value-section">
          <div className="value-section-label">What You Get</div>
          <h2 className="value-section-headline">Built for the Person Running the Practice</h2>
          <p className="value-section-body">Every feature is designed to reduce what you have to manage, not add to it.</p>
          <div className="value-grid">
            {[
              { n: "01", title: "Fully Managed From Day One", body: "We handle the entire implementation — every detail from setup through go-live, including on-site staff training." },
              { n: "02", title: "Staff Learns It in One Session", body: "An intuitive interface your front desk, nursing staff, and administrators will be comfortable with after a single walkthrough." },
              { n: "03", title: "Every Call Connects", body: "Enterprise HD voice with redundant infrastructure and a 99.9% uptime SLA. Patient calls always reach your team." },
              { n: "04", title: "Routing That Matches How You Work", body: "After-hours coverage, on-call forwarding, department routing, and auto-attendant flows built to your exact operations." },
              { n: "05", title: "One System Across Every Device", body: "Desk phones, mobile app, and desktop stay synchronized. Staff handles calls professionally from anywhere." },
              { n: "06", title: "HIPAA Compliance Built In", body: "Encrypted voice, compliant voicemail, and full call logging are standard. No add-ons, no gaps." },
            ].map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-number">{v.n}</div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="advocare-section">
          <div className="advocare-inner">
            <div className="advocare-tag">Advocare Preferred Vendor</div>
            <h2>85 Practices Have Already Made the Switch. You Are Next.</h2>
            <p>Arden 360 is the preferred VoIP provider for the Advocare network. Your peers are already running on our system every day. Let us show you what that looks like for your practice.</p>
            <button type="button" onClick={scrollToConsultation} className="advocare-cta">
              Schedule Your Consultation
              <svg viewBox="0 0 16 16"><line x1="2" y1="8" x2="14" y2="8"/><polyline points="9,3 14,8 9,13"/></svg>
            </button>
          </div>
        </section>

      </div>
    </>
  );
}
