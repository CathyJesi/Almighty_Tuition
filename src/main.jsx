import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const PHONE = '919840410393';
const DISPLAY_PHONE = '95665 53999';
const EMAIL = 'gladysgunalan@yahoo.co.in';

const sections = [
  { id: 'home', label: 'Home', short: '01' },
  { id: 'about', label: 'Educator', short: '02' },
  { id: 'courses', label: 'Courses', short: '03' },
  { id: 'approach', label: 'Approach', short: '04' },
  { id: 'learning', label: 'Learning Modes', short: '05' },
  { id: 'contact', label: 'Enquire', short: '06' },
];

function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      'Hello Almighty Tuition Centre,',
      '',
      `Parent/Guardian: ${form.get('parent')}`,
      `Student: ${form.get('student')}`,
      `Class: ${form.get('class')}`,
      `Board: ${form.get('board')}`,
      `Subject: ${form.get('subject')}`,
      `Mode: ${form.get('mode')}`,
      `Phone: ${form.get('phone')}`,
      `Message: ${form.get('message') || 'I would like to know more about the tuition batches.'}`,
    ].join('\n');
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="mobile-header">
        <button className="brand-mini" onClick={() => goTo('home')} aria-label="Go to home">
          <span className="brand-mark">A</span>
          <span><b>ALMIGHTY</b><small>TUITION CENTRE</small></span>
        </button>
        <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
      </header>

      <aside className={`side-nav ${menuOpen ? 'open' : ''}`}>
        <button className="brand" onClick={() => goTo('home')} aria-label="Almighty Tuition Centre home">
          <span className="brand-mark">A</span>
          <span className="brand-copy"><b>ALMIGHTY</b><small>TUITION CENTRE</small></span>
        </button>

        <nav>
          {sections.map((section) => (
            <button
              key={section.id}
              className={active === section.id ? 'nav-link active' : 'nav-link'}
              onClick={() => goTo(section.id)}
            >
              <span>{section.short}</span>{section.label}
            </button>
          ))}
        </nav>

        <div className="side-bottom">
          <span className="location-dot" />
          <div><strong>Tirunelveli</strong><small>Online & Offline</small></div>
        </div>
      </aside>

      <main>
        <section id="home" className="hero section-pad">
          <div className="physics-grid" aria-hidden="true">
            <div className="orbit orbit-a"><i /></div>
            <div className="orbit orbit-b"><i /></div>
            <div className="equation">F = ma</div>
            <div className="formula formula-a">v = u + at</div>
            <div className="formula formula-b">E = mc²</div>
          </div>

          <div className="hero-copy">
            <div className="eyebrow"><span /> PHYSICS • CLASSES 9–12</div>
            <h1>Learn deeply.<br /><em>Excel confidently.</em></h1>
            <p className="hero-lead">Focused academic guidance for CBSE and State Board students, led by an experienced Physics educator in Tirunelveli.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goTo('contact')}>Enquire Now <span>↗</span></button>
              <button className="btn btn-ghost" onClick={() => goTo('courses')}>Explore Classes <span>↓</span></button>
            </div>
            <div className="hero-meta">
              <div><strong>9–12</strong><span>Physics</span></div>
              <div><strong>2</strong><span>Learning modes</span></div>
            </div>
          </div>

          <div className="hero-credential">
            <div className="credential-card">
              <div className="portrait-placeholder"><span>Dr.</span><b>GV</b></div>
              <div className="credential-text">
                <span className="mini-label">FOUNDED & LED BY</span>
                <h3>Dr. T. Gladys Vimala</h3>
                <p>Ph.D. in Physics · Educator · Mentor</p>
              </div>
              <div className="credential-badge">Ph.D.</div>
            </div>
            <p className="credential-note">A strong academic foundation, built through understanding — not memorisation.</p>
          </div>
        </section>

        <section id="about" className="section section-pad about-section">
          <div className="section-heading">
            <div><span className="section-number">02</span><span className="eyebrow">MEET YOUR EDUCATOR</span></div>
            <h2>Experience that makes<br /><em>concepts clearer.</em></h2>
          </div>
          <div className="about-layout">
            <div className="about-statement">
              <span className="quote-mark">“</span>
              <p>My goal is to help students understand what they learn, build confidence and develop a strong academic foundation.</p>
              <span className="statement-line" />
              <small>Teaching philosophy</small>
            </div>
            <div className="about-content">
              <h3>Dr. T. Gladys Vimala</h3>
              <p>With a Ph.D. in Physics and experience across school and higher education, Dr. Gladys brings a structured, student-centred approach to classroom learning.</p>
              <div className="qualification-grid">
                <div><strong>Ph.D.</strong><span>Physics</span><small>Manonmaniam Sundaranar University.  Tirunelveli</small></div>
                <div><strong>M.Phil.</strong><span>Physics</span><small>Manonmaniam Sundaranar University.  Tirunelveli</small></div>
                <div><strong>M.Sc.</strong><span>Physics</span><small>Sarah Tucker College.  Tirunelveli</small></div>
              </div>
              <div className="experience-strip">
                <span>Teaching experience</span>
                <strong>School · College · Abu Dhabi</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="section section-pad courses-section">
          <div className="section-heading compact">
            <div><span className="section-number">03</span><span className="eyebrow">WHAT WE TEACH</span></div>
            <h2>Two subjects.<br /><em>One strong foundation.</em></h2>
          </div>
          <div className="course-grid">
            <article className="course-card physics-card">
              <div className="card-top"><span className="course-icon">⚛</span><span>01</span></div>
              <h3>Physics</h3>
              <p>Build intuition for the laws, ideas and problem-solving methods behind the subject.</p>
              <div className="course-details"><span>Classes 9–12</span><span>CBSE + State Board</span></div>
              <ul><li>Concept-focused lessons</li><li>Problem-solving practice</li><li>Exam preparation</li><li>Regular assessment</li></ul>
            </article>
          </div>
          <div className="class-band">
            <span>CLASSES</span>
            {[9, 10, 11, 12].map((n) => <b key={n}>{n}</b>)}
            <span>CBSE · STATE BOARD</span>
          </div>
        </section>

        <section id="approach" className="section section-pad approach-section">
          <div className="section-heading">
            <div><span className="section-number">04</span><span className="eyebrow">OUR APPROACH</span></div>
            <h2>Understand first.<br /><em>Then achieve.</em></h2>
          </div>
          <div className="approach-grid">
            {[
              ['01', 'Concept', 'Build a clear understanding of the fundamentals before moving ahead.'],
              ['02', 'Practice', 'Apply what you learn through guided examples and problem-solving.'],
              ['03', 'Assess', 'Use regular tests and evaluation to understand progress and gaps.'],
              ['04', 'Improve', 'Use focused guidance and mentoring to strengthen weak areas.'],
            ].map(([n, title, text]) => (
              <article className="approach-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="approach-callout"><span>✦</span><p>“More than completing the syllabus, the aim is to help students become confident learners.”</p></div>
        </section>

        <section id="learning" className="section section-pad learning-section">
          <div className="learning-copy">
            <div className="section-heading compact"><div><span className="section-number">05</span><span className="eyebrow">LEARNING MODES</span></div><h2>Learn where<br /><em>you learn best.</em></h2></div>
            <p>Choose the learning mode that works best for your child. Batch-based tuition is available both offline in Tirunelveli and online.</p>
          </div>
          <div className="mode-grid">
            <div className="mode-card"><span className="mode-icon">⌂</span><div><span className="mini-label">IN PERSON</span><h3>Offline Batches</h3><p>Focused classroom learning in Tirunelveli with a structured batch environment.</p></div></div>
            <div className="mode-card"><span className="mode-icon">◉</span><div><span className="mini-label">FROM HOME</span><h3>Online Batches</h3><p>Join classes remotely while continuing with guided academic support.</p></div></div>
          </div>
          <div className="timing-note"><span>◷</span><div><strong>Batch timings coming soon</strong><small>Contact us to enquire about upcoming batches.</small></div></div>
        </section>

        <section id="contact" className="section section-pad contact-section">
          <div className="contact-intro">
            <div className="section-heading compact"><div><span className="section-number">06</span><span className="eyebrow">START AN ENQUIRY</span></div><h2>Let's make learning<br /><em>easier.</em></h2></div>
            <p>Tell us a little about the student and we'll help you find the right tuition batch.</p>
            <div className="contact-details">
              <a href={`tel:+91${PHONE.slice(2)}`}><span>☎</span><div><small>CALL</small><strong>{DISPLAY_PHONE}</strong></div></a>
              <a href={`mailto:${EMAIL}`}><span>✉</span><div><small>EMAIL</small><strong>{EMAIL}</strong></div></a>
              <div><span>⌖</span><div><small>LOCATION</small><strong>Tirunelveli, Tamil Nadu</strong></div></div>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-row"><label>Parent / Guardian<input name="parent" required placeholder="Your name" /></label><label>Student<input name="student" required placeholder="Student name" /></label></div>
            <div className="form-row"><label>Class<select name="class" required defaultValue=""><option value="" disabled>Select class</option>{[9, 10, 11, 12].map((n) => <option key={n}>{n}</option>)}</select></label><label>Board<select name="board" required defaultValue=""><option value="" disabled>Select board</option><option>CBSE</option><option>State Board</option></select></label></div>
            <div className="form-row"><label>Subject<select name="subject" required defaultValue=""><option value="" disabled>Select subject</option><option>Physics</option></select></label><label>Preferred mode<select name="mode" required defaultValue=""><option value="" disabled>Select mode</option><option>Offline</option><option>Online</option></select></label></div>
            <label>Phone number<input name="phone" required type="tel" placeholder="10-digit phone number" /></label>
            <label>Message<textarea name="message" rows="4" placeholder="Any questions or requirements?" /></label>
            <button className="btn btn-primary submit-btn" type="submit">Send Enquiry via WhatsApp <span>↗</span></button>
            {submitted && <p className="success-note">Your enquiry details have been prepared in WhatsApp. Please send the message to complete the enquiry.</p>}
          </form>
        </section>

        <footer className="footer">
          <div><strong>ALMIGHTY</strong><span>TUITION CENTRE</span></div>
          <p>Concepts. Confidence. Excellence.</p>
          <small>© {new Date().getFullYear()} Almighty Tuition Centre · Tirunelveli</small>
        </footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
