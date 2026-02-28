"use client";

// ── SAMPLE DATA — replace with real data source / API ──
const DONATIONS = [
  { date: "2026-02-10", name: "Christy K.", location: "ME", amount: 0, note: "Founded the platform. Donated sleep." },
];

const EXPENDITURES = [
  { date: "2026-02-10", vendor: "KetteringPro Enterprise", category: "Web Development", description: "Platform design, development & deployment — Common Sense Party site v1.0", amount: 4500.00 },
  { date: "2026-02-10", vendor: "KetteringPro Enterprise", category: "Content & Research", description: "Policy research, writing & editing — 12 platform sections, 8,000+ words of original content", amount: 3500.00 },
  { date: "2026-02-12", vendor: "Vercel / Hosting", category: "Infrastructure", description: "Domain registration & web hosting", amount: 240.00 },
  { date: "2026-02-15", vendor: "KetteringPro Enterprise", category: "Content & Research", description: "Partnership Reform deep-dive — constitutional framework, legal research, LPC model", amount: 2000.00 },
  { date: "2026-02-22", vendor: "KetteringPro Enterprise", category: "Content & Research", description: "Marriage modernization policy development — federal standardization framework", amount: 1500.00 },
  { date: "2026-02-28", vendor: "KetteringPro Enterprise", category: "Web Development", description: "Platform restructure — 12-card categorized grid, 3 new sections (Congressional Accountability, Foreign Policy, Media & Information Integrity)", amount: 2500.00 },
  { date: "2026-02-28", vendor: "Coffee", category: "Fuel", description: "Estimated caffeine investment — 2am writing sessions", amount: 47.50 },
];

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function formatDate(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function DonatePage() {
  const totalIn = DONATIONS.reduce((s, d) => s + d.amount, 0);
  const totalOut = EXPENDITURES.reduce((s, e) => s + e.amount, 0);
  const balance = totalIn - totalOut;

  return (
    <>
      <div className="donate-page">

        <a href="/commonsense" style={{
          display:"inline-flex",
          alignItems:"center",
          gap:"8px",
          color:"var(--pink)",
          fontSize:".9rem",
          cursor:"pointer",
          padding:"24px 24px 0",
          maxWidth:"900px",
          margin:"0 auto",
          fontFamily:"'DM Sans',sans-serif",
          letterSpacing:"1px",
          textTransform:"uppercase",
          fontWeight:600,
          textDecoration:"none"
        }}>← Back to Platform</a>

        {/* HERO */}
        <section className="donate-hero">
          <div className="donate-tag">The Common Sense Party</div>
          <h1>Show the Receipts.</h1>
          <p className="donate-quote">
            &ldquo;This platform was built by one person with no funding, no staff, no PAC, and no lobbyist connections. Every dollar donated goes directly to expanding research, legal analysis, and infrastructure — and you can see exactly where it went because we practice what we preach. <strong>Unlike Congress.</strong>&rdquo;
          </p>
          <div className="donate-cta-row">
            <a className="donate-btn primary" onClick={(e) => { e.preventDefault(); document.getElementById('donate-form')?.scrollIntoView({ behavior: 'smooth' }); }} href="#donate-form" style={{cursor:"pointer"}}>Support the Platform</a>
            <a className="donate-btn secondary" href="#ledger">View the Ledger</a>
          </div>
          <p className="donate-fine">Every donor. Every dollar. Every expenditure. Public. Always.</p>
        </section>

        {/* SCOREBOARD */}
        <section className="scoreboard">
          <div className="score-card">
            <div className="score-label">Total Donated</div>
            <div className="score-value green">{formatCurrency(totalIn)}</div>
          </div>
          <div className="score-card">
            <div className="score-label">Total Spent</div>
            <div className="score-value red">{formatCurrency(totalOut)}</div>
          </div>
          <div className="score-card">
            <div className="score-label">Balance</div>
            <div className={`score-value ${balance >= 0 ? "green" : "balance"}`}>{formatCurrency(balance)}</div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section style={{maxWidth:"900px",margin:"0 auto",padding:"0 24px"}}>
          <div style={{background:"var(--warn-bg)",border:"1px solid var(--warn)",borderRadius:"16px",padding:"24px 28px",textAlign:"center"}}>
            <p style={{color:"var(--warn)",fontSize:".85rem",letterSpacing:"2px",textTransform:"uppercase",fontWeight:600,marginBottom:"12px"}}>⚠ Founder&rsquo;s Note — February 2026</p>
            <p style={{color:"var(--txt)",fontSize:"1rem",lineHeight:1.8,marginBottom:"12px"}}>Based on what I have been seeing in the news, I have determined the fastest way to raise capital is political donations. Please help me spread the word for the Common Sense Party and your donations are very much appreciated!!</p>
            <p style={{color:"var(--pink-lt)",fontSize:"1.1rem",fontWeight:700,fontFamily:"'Playfair Display',serif"}}>I got you BABES! 💋</p>
            <p style={{color:"var(--txt3)",fontSize:".78rem",fontStyle:"italic",marginTop:"12px"}}>The ledger below is for visual &amp; proof-of-concept purposes. The transparency model is real — and so are the Venmo and Cash App links.<br/>Every donation received will be added to the public ledger.</p>
          </div>
        </section>

        {/* LEDGER */}
        <section className="ledger-section" id="ledger">
          <div className="ledger-header">
            <h2>The Public Ledger</h2>
            <p>Real-time transparency. Every transaction, every dollar, every receipt. This is what accountability looks like.</p>
          </div>

          <div className="ledger-grid">
            {/* INBOUND */}
            <div className="ledger-col inbound">
              <h3>↓ Donations In</h3>
              {DONATIONS.length === 0 || (DONATIONS.length === 1 && DONATIONS[0].amount === 0) ? (
                <div className="empty-state">
                  <span>🫠</span>
                  Currently running on caffeine and conviction.<br />Be the first donor.
                </div>
              ) : (
                DONATIONS.filter(d => d.amount > 0).map((d, i) => (
                  <div className="ledger-entry" key={i}>
                    <div className="ledger-row">
                      <div className="ledger-date">{formatDate(d.date)}</div>
                      <div className="ledger-detail">
                        <div className="ledger-name">{d.name}</div>
                        {d.location && <div className="ledger-location">{d.location}</div>}
                        {d.note && <div className="ledger-desc">{d.note}</div>}
                      </div>
                      <div className="ledger-amount in">+{formatCurrency(d.amount)}</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* OUTBOUND */}
            <div className="ledger-col outbound">
              <h3>↑ Expenditures Out</h3>
              {EXPENDITURES.map((e, i) => (
                <div className="ledger-entry" key={i}>
                  <div className="ledger-row">
                    <div className="ledger-date">{formatDate(e.date)}</div>
                    <div className="ledger-detail">
                      <div className="ledger-name">{e.vendor}</div>
                      <div className="ledger-desc">{e.description}</div>
                      <div className="ledger-cat">{e.category}</div>
                    </div>
                    <div className="ledger-amount out">-{formatCurrency(e.amount)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLE QUOTE */}
        <section className="principles-bar">
          <blockquote>
            If a woman in Maine can publish every dollar from her laptop at 2am, Congress can do it with a $6 billion operating budget. They don&rsquo;t lack the tools. They lack the will.
          </blockquote>
          <p className="attrib">— The Common Sense Party, Section III: Congressional Accountability</p>
        </section>

        {/* CONTRAST: US vs THEM */}
        <section className="contrast">
          <h2>How Political Money Usually Works vs. How This Works</h2>
          <div className="contrast-grid">
            <div className="contrast-card us">
              <h3>✓ The Common Sense Party</h3>
              <p>Every donor listed publicly with amount</p>
              <p>Every expenditure itemized with vendor and description</p>
              <p>Real-time balance visible to anyone</p>
              <p>Vendor relationships disclosed (yes, the founder&rsquo;s company built the site — here&rsquo;s the invoice)</p>
              <p>$47.50 on coffee? It&rsquo;s on the ledger.</p>
            </div>
            <div className="contrast-card them">
              <h3>✗ How Congress Does It</h3>
              <p>Dark money PACs with untraceable donors</p>
              <p>Assets reported in brackets: &ldquo;$5M to $25M&rdquo;</p>
              <p>Spouse&rsquo;s consulting firm → LLC → venture fund → winery → ???</p>
              <p>$42 in the bank becomes $25 million. No questions asked.</p>
              <p>Ethics Committee investigates itself. Finds nothing. Shocking.</p>
            </div>
          </div>
        </section>

        {/* DONATE */}
        <section className="closing-donate" id="donate-form">
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.6rem",color:"var(--pink-lt)",marginBottom:"24px"}}>Support the Platform</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",maxWidth:"500px",margin:"0 auto 32px"}}>
            <a href="https://venmo.com/Christy-Hashey" target="_blank" rel="noopener noreferrer" style={{background:"var(--card)",border:"1px solid var(--bdr)",borderRadius:"16px",padding:"24px",textAlign:"center",textDecoration:"none",transition:"all .3s ease",cursor:"pointer",display:"block"}}>
              <span style={{fontSize:"2rem",display:"block",marginBottom:"8px"}}>💸</span>
              <span style={{color:"var(--pink-lt)",fontWeight:700,fontSize:"1.1rem",display:"block"}}>Venmo</span>
              <span style={{color:"var(--txt2)",fontSize:".85rem"}}>@Christy-Hashey</span>
            </a>
            <a href="https://cash.app/$ChristyHashey" target="_blank" rel="noopener noreferrer" style={{background:"var(--card)",border:"1px solid var(--bdr)",borderRadius:"16px",padding:"24px",textAlign:"center",textDecoration:"none",transition:"all .3s ease",cursor:"pointer",display:"block"}}>
              <span style={{fontSize:"2rem",display:"block",marginBottom:"8px"}}>💵</span>
              <span style={{color:"var(--pink-lt)",fontWeight:700,fontSize:"1.1rem",display:"block"}}>Cash App</span>
              <span style={{color:"var(--txt2)",fontSize:".85rem"}}>$ChristyHashey</span>
            </a>
          </div>
          <p style={{color:"var(--txt3)",fontSize:".78rem",fontStyle:"italic",marginBottom:"24px"}}>Donations are personal contributions to support platform development. Not a registered PAC or political committee. Every dollar received will be added to the public ledger above.</p>
          <p className="punchline">Practice what you preach. Show the receipts.<br />Don&rsquo;t be a fucking idiot.</p>
          <p className="footnote">This page — like the platform — was built at 2am because someone believes transparency shouldn&rsquo;t be revolutionary. It should be the default.</p>
        </section>

      </div>
    </>
  );
}