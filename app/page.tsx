"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    if (!email || !email.includes("@")) return;
    const res = await fetch("https://formspree.io/f/mkgvergo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <>
      {/* NAV */}
      <nav className={`vb-nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="vb-nav-logo">
          <img src="/veribite-icon.svg" alt="" className="vb-nav-icon" />
          veribite
        </a>
        <a href="#waitlist" className="vb-nav-cta">Join waitlist</a>
      </nav>

      {/* HERO */}
      <section className="vb-hero">
        <div className="vb-hero-glow" />
        <div className="vb-badge">
          <span className="badge-dot" />
          Now in testing with real UK shoppers
        </div>
        <h1 className="vb-h1">
          Verify every<br /><span className="accent">bite.</span>
        </h1>
        <p className="vb-hero-sub">
          Scan a product&apos;s barcode and instantly know if it&apos;s safe for you.
          Personalised allergen warnings, a clear Go/No-Go verdict, and healthier swaps in seconds.
        </p>
        <div className="vb-hero-actions">
          <a href="#waitlist" className="vb-btn-primary">
            Get early access
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#how" className="vb-btn-ghost">
            See how it works
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Phone mockup */}
        <div className="vb-phone-wrap">
          <div className="vb-phone">
            <div className="vb-phone-notch" />
            <div className="vb-phone-screen">
              <div className="vb-phone-topbar">
                <div className="vb-phone-back">←</div>
                <div className="vb-phone-title">Scan Result</div>
              </div>
              <div className="vb-phone-product">Dr. Will&apos;s Olive Oil Mayo</div>
              <div className="vb-phone-brand">Dr Will&apos;s · 175g</div>
              <div className="vb-verdict-circle safe">
                <span className="vb-verdict-icon">✓</span>
              </div>
              <div className="vb-verdict-label safe">Safe for you</div>
              <div className="vb-verdict-sub">No conflicts with your preferences</div>
              <div className="vb-phone-divider" />
              <div className="vb-phone-action">See safe alternatives</div>
              <div className="vb-phone-link">
                <span>🧪</span> View full ingredients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="vb-stats reveal">
        <div className="vb-stats-inner">
          {[
            { num: "70k+", label: "UK products\nin our database" },
            { num: "14", label: "EU allergens\ntracked" },
            { num: "<1s", label: "Verdict time\nvia barcode" },
            { num: "100%", label: "Works offline\nin store" },
          ].map((s) => (
            <div key={s.num} className="vb-stat">
              <div className="vb-stat-number">{s.num}</div>
              <div className="vb-stat-label" style={{ whiteSpace: "pre-line" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PAIN SECTION */}
      <section className="vb-section">
        <span className="vb-section-tag reveal">The problem</span>
        <h2 className="vb-h2 reveal">Labels are compliant.<br />Not decision-ready.</h2>
        <p className="vb-section-sub reveal">
          Allergy sufferers spend minutes decoding ingredient lists under time pressure — in supermarket aisles with poor signal and no clear answers.
        </p>
        <div className="vb-pain-grid reveal">
          <div className="vb-pain-card">
            <p className="vb-pain-quote">&ldquo;Looking through all of these hidden gluten names is horrible while shopping.&rdquo;</p>
            <span className="vb-pain-source">r/Celiac</span>
          </div>
          <div className="vb-pain-card">
            <p className="vb-pain-quote">&ldquo;I am SO. FRICKING. SICK. of &lsquo;natural flavors.&rsquo; Any time I see it I have to go down a google rabbit hole.&rdquo;</p>
            <span className="vb-pain-source">r/FoodAllergies</span>
          </div>
          <div className="vb-pain-card">
            <p className="vb-pain-quote">&ldquo;My kiddo has dairy, egg, peanut, tree nut, pea, lentil — making it nearly impossible to find safe products manually.&rdquo;</p>
            <span className="vb-pain-source">r/FoodAllergies</span>
          </div>
          <div className="vb-pain-card">
            <p className="vb-pain-quote">&ldquo;I usually don&rsquo;t take my chances unless it&rsquo;s labeled gluten free — but even then I&rsquo;m not sure.&rdquo;</p>
            <span className="vb-pain-source">r/glutenfree</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="vb-how-section" id="how">
        <div className="vb-how-inner">
          <span className="vb-section-tag reveal">How it works</span>
          <h2 className="vb-h2 reveal">Three steps.<br />One verdict.</h2>
          <div className="vb-steps">
            <div className="reveal">
              <div className="vb-step-num">01</div>
              <h3 className="vb-step-h3">Set your profile</h3>
              <p className="vb-step-p">Tell Veribite your allergens and dietary requirements once. It remembers them permanently and re-evaluates every past scan if you update them.</p>
            </div>
            <div className="reveal">
              <div className="vb-step-num">02</div>
              <h3 className="vb-step-h3">Scan the product</h3>
              <p className="vb-step-p">Point at the barcode for an instant lookup. Works fully offline in store — no signal required.</p>
            </div>
            <div className="reveal">
              <div className="vb-step-num">03</div>
              <h3 className="vb-step-h3">Get your verdict</h3>
              <p className="vb-step-p">Safe or Avoid — with a plain-language explanation of exactly why. If it&apos;s a No-Go, see safe alternatives instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VERDICT SHOWCASE */}
      <section className="vb-verdicts-section">
        <span className="vb-section-tag reveal">The verdict system</span>
        <h2 className="vb-h2 reveal">Clear answers.<br />No guessing.</h2>
        <p className="vb-section-sub reveal">Every verdict is personalised to your allergen profile. No generic warnings — just a direct answer for you.</p>
        <div className="vb-verdict-cards reveal">
          <div className="vb-verdict-card v-safe">
            <div className="vb-vc-badge safe">✓ Safe for you</div>
            <div className="vb-vc-product">Dr. Will&apos;s Olive Oil Mayo</div>
            <div className="vb-vc-reason">No conflicts found with your allergen profile. Ingredients verified against your preferences.</div>
          </div>
          <div className="vb-verdict-card v-avoid">
            <div className="vb-vc-badge avoid">✕ Not recommended</div>
            <div className="vb-vc-product">Hovis Granary Bread 800g</div>
            <div className="vb-vc-reason">Contains 2 ingredients from your avoid list.</div>
            <span className="vb-vc-allergen">Contains: Wheat, Gluten</span>
          </div>
          <div className="vb-verdict-card v-caution">
            <div className="vb-vc-badge caution">⚠ Check label</div>
            <div className="vb-vc-product">Tesco Finest Granola</div>
            <div className="vb-vc-reason">May contain traces of nuts. Always verify the physical label for may contain warnings.</div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="vb-problems-section">
        <div className="vb-problems-inner">
          <span className="vb-section-tag reveal">Why Veribite exists</span>
          <h2 className="vb-h2 reveal">Four problems.<br />One platform.</h2>
          <p className="vb-section-sub reveal">What started as an allergen scanner turned into something much bigger.</p>
          <div className="vb-problems-grid reveal">
            <div className="vb-problem-card">
              <span className="vb-problem-icon">🎯</span>
              <h3 className="vb-problem-h3">The verdict problem</h3>
              <p className="vb-problem-p">People with allergies can&apos;t quickly determine if a product is safe in store. Veribite solves this with instant, personalised Safe or Avoid verdicts at the shelf.</p>
            </div>
            <div className="vb-problem-card">
              <span className="vb-problem-icon">⚠️</span>
              <h3 className="vb-problem-h3">The &ldquo;may contain&rdquo; problem</h3>
              <p className="vb-problem-p">&ldquo;May contain&rdquo; warnings are legally meaningless and inconsistently applied. No one has real-world data on actual reaction rates — until now.</p>
            </div>
            <div className="vb-problem-card">
              <span className="vb-problem-icon">🔍</span>
              <h3 className="vb-problem-h3">The label trust problem</h3>
              <p className="vb-problem-p">Manufacturers self-report allergen data. There is no independent verification layer between what&apos;s printed and what&apos;s actually in the product.</p>
            </div>
            <div className="vb-problem-card">
              <span className="vb-problem-icon">🏗️</span>
              <h3 className="vb-problem-h3">The data infrastructure problem</h3>
              <p className="vb-problem-p">There is no single reliable, standardised source of UK food allergen data. Veribite is building it — verified across retailers, updated by the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / WAITLIST */}
      <section className="vb-cta-section" id="waitlist">
        <h2 className="vb-cta-h2 reveal">Shop with confidence.<br />Finally.</h2>
        <p className="vb-cta-sub reveal">Join the waitlist and be first to know when Veribite is ready for you.</p>
        {submitted ? (
          <div className="vb-success reveal">
            <div className="vb-success-icon">✓</div>
            <p className="vb-success-text">You&apos;re on the list. We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form className="vb-email-form reveal" onSubmit={handleSubmit}>
            <input
              ref={emailRef}
              type="email"
              required
              placeholder="you@email.com"
              className="vb-email-input"
            />
            <button type="submit" className="vb-btn-primary">Join</button>
          </form>
        )}
        <p className="vb-cta-note reveal">
          We&apos;ll invite you as soon as Veribite is ready. No spam, ever.
          By joining, you agree to our{" "}
          <a href="/privacy" style={{ textDecoration: "underline", color: "inherit" }}>Privacy Policy</a>.
        </p>
      </section>

      <footer className="vb-footer">
        <div className="vb-footer-logo">veribite</div>
        <div className="vb-footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="mailto:hello@veribite.com">Contact</a>
        </div>
      </footer>
    </>
  );
}
