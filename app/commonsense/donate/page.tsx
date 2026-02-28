"use client";
import { useState, useEffect } from "react";

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
      <style jsx global>{`
        :root{--bg:#0d0d1a;--bg2:#111125;--card:#161630;--card-h:#1c1c3d;--bdr:rgba(200,120,220,.12);--bdr-h:rgba(233,30,99,.35);--pink:#E91E63;--pink-lt:#F48FB1;--purp:#9C27B0;--purp-lt:#CE93D8;--mag:#C2185B;--txt:#EEEEF2;--txt2:#9999B0;--txt3:#666680;--warn:#FF9800;--warn-bg:rgba(255,152,0,.08);--green:#4CAF50;--green-bg:rgba(76,175,80,.08);--red:#ef5350;--red-bg:rgba(239,83,80,.08);--grd:linear-gradient(135deg,#E91E63,#9C27B0);--shadow:0 4px 30px rgba(0,0,0,.3);--glow:0 0 40px rgba(233,30,99,.06)}
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .donate-page{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--txt);line-height:1.75;min-height:100vh}
        .donate-page *{box-sizing:border-box}

        .donate-hero{text-align:center;padding:80px 24px 40px;position:relative;max-width:900px;margin:0 auto}
        .donate-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 40%,rgba(233,30,99,.06) 0%,transparent 55%),radial-gradient(ellipse at 70% 60%,rgba(156,39,176,.05) 0%,transparent 55%);pointer-events:none}
        .donate-tag{font-family:'DM Sans',sans-serif;font-size:.85rem;letter-spacing:3px;text-transform:uppercase;background:var(--grd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:20px;font-weight:600}
        .donate-hero h1{font-family:'Playfair Display',serif;font-size:clamp(2rem,5vw,3.2rem);font-weight:900;line-height:1.15;margin-bottom:24px;background:linear-gradient(135deg,#F48FB1,#CE93D8,#F48FB1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .donate-quote{font-size:1rem;color:var(--txt2);max-width:700px;margin:0 auto 32px;font-style:italic;line-height:1.8}
        .donate-quote strong{color:var(--pink-lt);font-style:normal}
        .donate-cta-row{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}
        .donate-btn{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;border:none;text-decoration:none}
        .donate-btn.primary{background:var(--grd);color:#fff}
        .donate-btn.primary:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(233,30,99,.3)}
        .donate-btn.secondary{background:transparent;color:var(--pink-lt);border:1px solid var(--bdr-h)}
        .donate-btn.secondary:hover{background:rgba(233,30,99,.08);transform:translateY(-2px)}
        .donate-fine{font-size:.8rem;color:var(--txt3);margin-top:8px}

        .scoreboard{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;max-width:900px;margin:40px auto;padding:0 24px}
        .score-card{background:var(--card);border:1px solid var(--bdr);border-radius:16px;padding:24px;text-align:center}
        .score-label{font-size:.8rem;letter-spacing:2px;text-transform:uppercase;color:var(--txt3);margin-bottom:8px}
        .score-value{font-family:'JetBrains Mono',monospace;font-size:1.8rem;font-weight:600}
        .score-value.green{color:var(--green)}
        .score-value.red{color:var(--red)}
        .score-value.balance{color:var(--warn)}

        .ledger-section{max-width:1200px;margin:40px auto;padding:0 24px 80px}
        .ledger-header{text-align:center;margin-bottom:40px}
        .ledger-header h2{font-family:'Playfair Display',serif;font-size:1.6rem;color:var(--txt2);margin-bottom:8px}
        .ledger-header p{color:var(--txt3);font-size:.9rem}
        .ledger-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px}
        .ledger-col h3{font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:20px;padding-bottom:12px;display:flex;align-items:center;gap:10px}
        .ledger-col.inbound h3{color:var(--green);border-bottom:2px solid var(--green)}
        .ledger-col.outbound h3{color:var(--red);border-bottom:2px solid var(--red)}
        .ledger-entry{background:var(--card);border:1px solid var(--bdr);border-radius:12px;padding:16px 20px;margin-bottom:12px;transition:all .2s ease}
        .ledger-entry:hover{border-color:var(--bdr-h);background:var(--card-h)}
        .ledger-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
        .ledger-date{font-family:'JetBrains Mono',monospace;font-size:.75rem;color:var(--txt3);min-width:50px}
        .ledger-detail{flex:1}
        .ledger-name{font-weight:600;color:var(--txt);font-size:.9rem}
        .ledger-location{color:var(--txt3);font-size:.8rem}
        .ledger-desc{color:var(--txt2);font-size:.82rem;margin-top:4px;line-height:1.5}
        .ledger-cat{display:inline-block;font-size:.7rem;letter-spacing:1px;text-transform:uppercase;color:var(--pink);background:rgba(233,30,99,.08);padding:2px 8px;border-radius:4px;margin-top:6px}
        .ledger-amount{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:.95rem;white-space:nowrap}
        .ledger-amount.in{color:var(--green)}
        .ledger-amount.out{color:var(--red)}

        .empty-state{background:var(--card);border:1px dashed var(--bdr);border-radius:12px;padding:40px 24px;text-align:center;color:var(--txt3);font-style:italic}
        .empty-state span{display:block;font-size:2rem;margin-bottom:12px}

        .principles-bar{max-width:900px;margin:0 auto;padding:40px 24px;text-align:center}
        .principles-bar blockquote{font-family:'Playfair Display',serif;font-size:1.1rem;color:var(--txt2);font-style:italic;border-left:3px solid var(--pink);padding-left:20px;text-align:left;max-width:700px;margin:0 auto 24px}
        .principles-bar .attrib{color:var(--txt3);font-size:.85rem;text-align:right;max-width:700px;margin:0 auto}

        .contrast{max-width:900px;margin:0 auto;padding:40px 24px 80px}
        .contrast h2{font-family:'Playfair Display',serif;font-size:1.4rem;color:var(--pink-lt);text-align:center;margin-bottom:32px}
        .contrast-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .contrast-card{background:var(--card);border:1px solid var(--bdr);border-radius:16px;padding:24px;position:relative;overflow:hidden}
        .contrast-card.them{opacity:.6}
        .contrast-card.them::after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(239,83,80,.03) 10px,rgba(239,83,80,.03) 20px);pointer-events:none}
        .contrast-card h3{font-family:'Playfair Display',serif;font-size:1rem;margin-bottom:12px}
        .contrast-card.us h3{color:var(--green)}
        .contrast-card.them h3{color:var(--red)}
        .contrast-card p{font-size:.85rem;color:var(--txt2);margin-bottom:8px}
        .contrast-card p:last-child{margin-bottom:0}

        .closing-donate{text-align:center;padding:60px 24px 80px;max-width:700px;margin:0 auto}
        .closing-donate p{color:var(--txt2);font-size:.95rem;margin-bottom:16px}
        .closing-donate .punchline{color:var(--txt);font-weight:700;font-size:1.2rem;font-family:'Playfair Display',serif}
        .closing-donate .footnote{font-size:.82rem;color:var(--txt3);font-style:italic;margin-top:32px}

        @media(max-width:768px){
          .scoreboard{grid-template-columns:1fr}
          .ledger-grid{grid-template-columns:1fr}
          .contrast-grid{grid-template-columns:1fr}
          .score-value{font-size:1.4rem}
        }
      `}</style>

      <div className="donate-page">

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