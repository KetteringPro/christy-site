"use client";
import { useState, useEffect, useRef } from "react";

export default function CommonSensePage() {
  const [activeDrill, setActiveDrill] = useState<string | null>(null);

  function showDrill(id: string) {
    setActiveDrill(id);
    setTimeout(() => {
      document.getElementById("drill-content")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  function hideDrill() {
    setActiveDrill(null);
    setTimeout(() => {
      document.getElementById("cards")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <>
      <style jsx global>{`
        :root{--bg:#0d0d1a;--bg2:#111125;--card:#161630;--card-h:#1c1c3d;--bdr:rgba(200,120,220,.12);--bdr-h:rgba(233,30,99,.35);--pink:#E91E63;--pink-lt:#F48FB1;--purp:#9C27B0;--purp-lt:#CE93D8;--mag:#C2185B;--txt:#EEEEF2;--txt2:#9999B0;--txt3:#666680;--warn:#FF9800;--warn-bg:rgba(255,152,0,.08);--grd:linear-gradient(135deg,#E91E63,#9C27B0);--shadow:0 4px 30px rgba(0,0,0,.3);--glow:0 0 40px rgba(233,30,99,.06)}
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        .csp-page{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--txt);line-height:1.75;min-height:100vh}
        .csp-page *{box-sizing:border-box}

        .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:60px 24px;position:relative}
        .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 40%,rgba(233,30,99,.06) 0%,transparent 55%),radial-gradient(ellipse at 70% 60%,rgba(156,39,176,.05) 0%,transparent 55%);pointer-events:none}
        .hero-tag{font-family:'DM Sans',sans-serif;font-size:.85rem;letter-spacing:3px;text-transform:uppercase;background:var(--grd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:20px;font-weight:600}
        .hero h1{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,6vw,4.5rem);font-weight:900;line-height:1.1;margin-bottom:16px;background:linear-gradient(135deg,#F48FB1,#CE93D8,#F48FB1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .hero-sub{font-size:1.15rem;color:var(--txt2);max-width:600px;margin-bottom:40px;font-style:italic}
        .hero-principle{font-size:.95rem;color:var(--txt3);letter-spacing:1px;max-width:700px}
        .hero-principle strong{color:var(--pink-lt);font-weight:600}
        .scroll-hint{margin-top:50px;color:var(--txt3);font-size:.8rem;letter-spacing:2px;text-transform:uppercase;animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:.4}50%{opacity:1}}

        .origin{max-width:800px;margin:0 auto;padding:40px 24px 80px;text-align:center}
        .origin h2{font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:24px;color:var(--pink-lt)}
        .origin p{color:var(--txt2);margin-bottom:16px;font-size:1rem;text-align:left}
        .camp{background:var(--card);border:1px solid var(--bdr);border-radius:12px;padding:16px 20px;margin:12px 0;text-align:left;color:var(--txt2)}
        .camp strong{color:var(--pink)}
        .punchline{color:var(--txt)!important;font-weight:600;font-size:1.1rem;margin-top:24px;text-align:center!important}

        .grid-section{max-width:1100px;margin:0 auto;padding:20px 24px 80px}
        .grid-section h2{font-family:'Playfair Display',serif;font-size:1.6rem;text-align:center;margin-bottom:40px;color:var(--txt2)}
        .card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px}
        .card{background:var(--card);border:1px solid var(--bdr);border-radius:16px;padding:28px 24px;cursor:pointer;transition:all .3s ease;position:relative;overflow:hidden}
        .card:hover{background:var(--card-h);border-color:var(--bdr-h);transform:translateY(-3px);box-shadow:var(--glow)}
        .card-icon{font-size:2rem;margin-bottom:12px;display:block}
        .card h3{font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:8px;color:var(--pink-lt)}
        .card p{font-size:.9rem;color:var(--txt2);line-height:1.6}
        .card-arrow{position:absolute;top:24px;right:20px;color:var(--txt3);font-size:1.2rem;transition:all .3s}
        .card:hover .card-arrow{color:var(--pink);transform:translateX(3px)}

        .drill{max-width:800px;margin:0 auto;padding:40px 24px 80px;animation:fadeUp .4s ease}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .drill-back{display:inline-flex;align-items:center;gap:8px;color:var(--pink);font-size:.9rem;cursor:pointer;margin-bottom:30px;border:none;background:none;font-family:'DM Sans',sans-serif;letter-spacing:1px;text-transform:uppercase;font-weight:600;transition:color .2s}
        .drill-back:hover{color:var(--pink-lt)}
        .drill h2{font-family:'Playfair Display',serif;font-size:2rem;margin-bottom:8px;background:var(--grd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .drill h3{font-family:'Playfair Display',serif;font-size:1.3rem;color:var(--pink-lt);margin:32px 0 12px;padding-top:20px;border-top:1px solid var(--bdr)}
        .drill h3:first-of-type{border-top:none;padding-top:0}
        .drill p{color:var(--txt2);margin-bottom:14px;font-size:.95rem}
        .position{background:var(--card);border-left:3px solid var(--pink);padding:16px 20px;border-radius:0 10px 10px 0;margin:16px 0;color:var(--txt2)}
        .position strong{color:var(--pink-lt)}
        .warn-box{background:var(--warn-bg);border-left:3px solid var(--warn);padding:14px 18px;border-radius:0 10px 10px 0;margin:16px 0;font-size:.88rem;color:var(--warn)}
        .drill ul{margin:12px 0 12px 20px;color:var(--txt2);font-size:.95rem}
        .drill li{margin-bottom:8px}

        .closing{text-align:center;padding:80px 24px;max-width:700px;margin:0 auto}
        .principle{font-family:'Playfair Display',serif;font-size:1.15rem;color:var(--txt2);margin:8px 0}
        .principle.last{color:var(--pink);font-size:1.3rem;font-weight:700;margin-top:16px}
        .tree{display:flex;flex-direction:column;align-items:center;gap:4px;margin-bottom:50px}
        .closing hr{border:none;border-top:1px solid var(--bdr);margin:40px 0}
        .footnote{font-size:.85rem;color:var(--txt3);font-style:italic}
        .footnote.warn-note{color:var(--warn)}

        .author{max-width:700px;margin:0 auto;padding:0 24px 80px;text-align:center}
        .author h2{font-family:'Playfair Display',serif;font-size:1.5rem;color:var(--pink-lt);margin-bottom:20px}
        .author p{color:var(--txt2);font-size:.93rem;margin-bottom:14px;text-align:left}
        .sign-off{font-style:italic;color:var(--txt3);margin-top:24px;text-align:center!important}

        @media(max-width:640px){
          .card-grid{grid-template-columns:1fr}
          .hero h1{font-size:2rem}
          .drill h2{font-size:1.5rem}
        }
      `}</style>

      <div className="csp-page">
        {/* HERO */}
        <section className="hero">
          <div className="hero-tag">The Common Sense Party</div>
          <h1>&ldquo;We Actually Looked Into It.&rdquo;</h1>
          <p className="hero-sub">Platform &amp; Founding Principles · Draft v1.0 — February 10, 2026</p>
          <p className="hero-principle">
            <strong>Data over emotion.</strong> · <strong>Metrics over feelings.</strong> · <strong>Critical thinking over tribalism.</strong>
          </p>
          <div className="scroll-hint">↓ Scroll to explore</div>
        </section>

        {/* ORIGIN STORY */}
        <section className="origin">
          <h2>Origin Story</h2>
          <p>On February 9, 2026, Bad Bunny headlined the Super Bowl LX halftime show — the first Latin artist to perform primarily in Spanish on that stage. The country divided into two camps:</p>
          <div className="camp"><strong>Camp 1 (The Right):</strong> Outraged that a man sang in Spanish at the Super Bowl. Didn&rsquo;t know Puerto Rico is a U.S. territory. Didn&rsquo;t research. Just felt angry.</div>
          <div className="camp"><strong>Camp 2 (The Left):</strong> Defended the performance as a cultural victory. Called critics racist. Posted flags. Went to war for this man. Didn&rsquo;t bother to Google the lyrics of the opening song.</div>
          <p>Neither camp did the work. The opening song, &ldquo;Tití Me Preguntó,&rdquo; is about a man collecting women as objects and parading them into VIP. It&rsquo;s blatant misogyny — and nobody knew because nobody understood the language and nobody bothered to translate it.</p>
          <p className="punchline">Nobody is paying attention.</p>
          <p style={{ textAlign: "center", color: "var(--txt2)" }}>Both parties have abandoned critical thinking for emotional manipulation. The right uses fear. The left uses guilt. Neither uses data. Neither asks &ldquo;does this actually work?&rdquo;</p>
          <p style={{ textAlign: "center", color: "var(--txt2)" }}>This platform exists for the millions of Americans sitting at home thinking &ldquo;both of these sides are insane&rdquo; — people who have nowhere to go because there is no party for people who actually think.</p>
        </section>

        {/* CARD GRID */}
        {!activeDrill && (
          <section className="grid-section" id="cards">
            <h2>Explore the Platform</h2>
            <div className="card-grid">
              <div className="card" onClick={() => showDrill("economics")}>
                <span className="card-icon">💰</span>
                <span className="card-arrow">→</span>
                <h3>I. Economic Policy</h3>
                <p>$100K isn&rsquo;t &ldquo;making it&rdquo; anymore. Flat tax with a floor, EIC reform using Germany&rsquo;s Kindergeld model, and why the government should send YOU a tax bill.</p>
              </div>
              <div className="card" onClick={() => showDrill("healthcare")}>
                <span className="card-icon">🏥</span>
                <span className="card-arrow">→</span>
                <h3>II. Healthcare</h3>
                <p>Universal healthcare isn&rsquo;t the answer — it just shifts who pays the inflated bill. Fix the cost. Expose the insurance pricing shell game. Cap pharma.</p>
              </div>
              <div className="card" onClick={() => showDrill("social")}>
                <span className="card-icon">⚖️</span>
                <span className="card-arrow">→</span>
                <h3>III. Social Issues</h3>
                <p>Equal, not special. Legal abortion with limits. Legalize &amp; tax drugs and sex work. Borders exist for a reason. Protect gun ownership.</p>
              </div>
              <div className="card" onClick={() => showDrill("government")}>
                <span className="card-icon">🏛️</span>
                <span className="card-arrow">→</span>
                <h3>IV. Government Structure</h3>
                <p>Term limits for everyone. Modernize everything. Stop running 18th century software on a 21st century world. Show the receipts.</p>
              </div>
              <div className="card" onClick={() => showDrill("education")}>
                <span className="card-icon">🎓</span>
                <span className="card-arrow">→</span>
                <h3>V. Education, Energy &amp; Other</h3>
                <p>Student debt is predatory lending with a graduation ceremony. Elevate trades. Military as career path. Homelessness is three problems, not one.</p>
              </div>
              <div className="card" onClick={() => showDrill("culture")}>
                <span className="card-icon">🌍</span>
                <span className="card-arrow">→</span>
                <h3>VI. Religion, Culture &amp; Public Life</h3>
                <p>Don&rsquo;t subtract Christmas — ADD Diwali, Eid, and Kwanzaa. They removed the Native woman but kept the land. Little Debbie is still smiling.</p>
              </div>
              <div className="card" onClick={() => showDrill("food")}>
                <span className="card-icon">🍔</span>
                <span className="card-arrow">→</span>
                <h3>VII. Food Safety &amp; Public Health</h3>
                <p>Europe banned hundreds of additives we eat daily. The CDC lost trust for a reason. Vaccines don&rsquo;t cause autism. Better detection ≠ epidemic.</p>
              </div>
              <div className="card" onClick={() => showDrill("partnership")}>
                <span className="card-icon">📋</span>
                <span className="card-arrow">→</span>
                <h3>VIII. Partnership Reform</h3>
                <p>Abolish legal marriage. Replace it with the Legal Partnership Contract — one federal standard, every structure recognized, no one protected by less than a zip code. Two adults, no contract? Roommates. Full stop.</p>
              </div>
              <div className="card" onClick={() => showDrill("parenting")}>
                <span className="card-icon">👨‍👩‍👦</span>
                <span className="card-arrow">→</span>
                <h3>IX. Parenting</h3>
                <p>Children have a fundamental right to both parents. Two names on a birth certificate triggers equal legal standing — automatic, simultaneous, non-negotiable. Default custody is shared. The burden of proof is on limiting access, not maintaining it.</p>
              </div>
            </div>
          </section>
        )}

        {/* DRILL: ECONOMICS */}
        {activeDrill === "economics" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>I. Economic Policy</h2>
            <p>Before we talk about any economic policy, we need to recalibrate what income actually means in modern America. We still use &ldquo;six figures&rdquo; as a measure of success. It&rsquo;s not. $100,000 in 1980 is equivalent to approximately $380,000 today. A family earning $100K in 2026 is paying rent or mortgage, groceries, car payments, insurance, maybe childcare — and there&rsquo;s nothing left. Six figures isn&rsquo;t rich. It&rsquo;s getting by.</p>

            <h3>1. Taxes — Flat Tax with a Floor</h3>
            <p>Flat tax so everyone pays the same percentage — simple, fair, no loopholes, no gaming the system. Combined with a no-tax threshold under a certain income level so people who are genuinely struggling get relief.</p>
            <p>Before we even talk about credits and deductions, let&rsquo;s address the bigger absurdity: why is the American government putting the burden of tax calculation on its citizens in the first place? Other countries send their people a tax bill. You review it, you pay it, you&rsquo;re done. The U.S. makes you figure it out yourself, charges you penalties if you get it wrong, and then an entire industry — TurboTax, H&amp;R Block — profits from keeping the process confusing.</p>
            <div className="position"><strong>Proposed framework:</strong> For W-2 employees, the government should provide a pre-filled return based on the data it already has. The taxpayer reviews it, applies any deductions or adjustments, and confirms or disputes. Most people could complete their taxes in 20 minutes.</div>
            <p>Now, the Earned Income Credit. The EIC was originally created in 1975 as a TEMPORARY credit to offset payroll taxes for low-income workers. That concept was sound. But it&rsquo;s ballooned into a $59 billion annual wealth redistribution program that was never supposed to be permanent. Today families can receive up to $8,000+ and one-third of payments are improper.</p>
            <p>But here&rsquo;s the thing — the answer isn&rsquo;t &ldquo;screw poor people.&rdquo; The spirit of helping working families was right. The delivery mechanism is what&rsquo;s broken. An $8,000 balloon payment once a year doesn&rsquo;t actually help a family that can&rsquo;t make rent in March.</p>
            <p>Look at what Germany does with Kindergeld — steady monthly payments to ALL families regardless of income. €259 per child, every month, deposited automatically. No complicated application, no income phase-outs that punish advancement.</p>
            <div className="position"><strong>Position:</strong> Explore replacing or restructuring the EIC into a monthly support model. Steady, predictable payments that actually stabilize family budgets — not an annual windfall that creates a boom-bust cycle.</div>
            <div className="warn-box">⚠ NEEDS DEVELOPMENT: Tax simplification framework needs further research, particularly around self-employed reporting, deduction structures, and overcoming the tax prep industry lobby. EIC-to-monthly-payment transition needs modeling.</div>

            <h3>2. Government Spending — Oversight with Integrity</h3>
            <p>The federal government&rsquo;s spending is out of control and lacks accountability. The concept of auditing where taxpayer money goes is right — but the execution matters.</p>
            <div className="position"><strong>Position:</strong> Independent, transparent auditing with no political agenda. Show the receipts.</div>

            <h3>3. Minimum Wage — Entry Level Means Entry Level</h3>
            <p>Minimum wage is a starting point, not a destination. It exists for teenagers and first jobs — your foot in the door. The goal is to build skills and move up, not to stay at minimum wage forever.</p>
            <p>The answer isn&rsquo;t endlessly raising the floor. It&rsquo;s creating pathways for people to grow beyond it — education, training, apprenticeships, opportunity.</p>

            <h3>4. Trade &amp; Tariffs — Reciprocal and Fair</h3>
            <p>If other countries are taxing our goods, we should be doing the same. Level playing field.</p>
            <div className="warn-box">⚠ NEEDS MORE RESEARCH: Deeper understanding of specific tariff impacts and trade dynamics required before finalizing this position.</div>

            <h3>5. Social Security — Protect It. Period.</h3>
            <p>Non-negotiable. People paid into this system their entire working lives. That is THEIR money. The government made a commitment and it needs to honor it.</p>
          </section>
        )}

        {/* DRILL: HEALTHCARE */}
        {activeDrill === "healthcare" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>II. Healthcare</h2>
            <p>Let&rsquo;s address the elephant in the room first: universal healthcare is not the answer. Government-run healthcare doesn&rsquo;t fix the problem — it just shifts who&rsquo;s paying the inflated bill from you to the taxpayer, which is also you. A $30 Tylenol in a hospital doesn&rsquo;t cost less because the government is writing the check. And if you go universal, you&rsquo;re inflating the tax burden on every working American to fund a system that STILL hasn&rsquo;t fixed why everything costs so much.</p>
            <div className="position"><strong>Position:</strong> Affordable healthcare and accessible insurance, not government-run healthcare. Fix the cost of medical services first.</div>

            <h3>1. Insurance System &amp; Costs — Transparency First</h3>
            <p>The entire healthcare system is built on intentional complexity. Insurance companies and medical providers collude to make pricing as opaque as possible. That&rsquo;s not a bug — it&rsquo;s the business model.</p>
            <p>Here&rsquo;s the dirty secret most people don&rsquo;t realize: hospitals and providers charge insured patients HIGHER rates than self-pay patients. Then insurance &ldquo;negotiates&rdquo; a discount, and after your deductible and copay, your out-of-pocket cost ends up roughly similar to what the self-pay patient paid at the lower rate. The only winner in this shell game is the insurance company, which gets to look like it saved you money when it didn&rsquo;t. Most people never notice because they&rsquo;ve always had insurance and think this is just how it works.</p>
            <ul>
              <li>Transparent pricing for every procedure, visit, and test — one price, regardless of insurance status</li>
              <li>Reasonable copays, deductibles, and out-of-pocket maximums</li>
              <li>Insurance reform is downstream of pricing reform — fix the cost of services first</li>
            </ul>

            <h3>2. Pharmaceutical Pricing — Cap, Monitor &amp; Incentivize Cures Over Treatment</h3>
            <p>There is zero financial motivation to cure diseases when treatment is a recurring revenue stream. Cancer, diabetes, autoimmune conditions — the maintenance drugs and ongoing treatments are cash cows.</p>
            <p>Drug pricing needs to be capped and actively monitored. The same drug that costs $300 in the U.S. costs $30 in Canada. Pharma companies tweak a molecule, file a new patent, and reset the clock on pricing — it&rsquo;s called &ldquo;evergreening&rdquo; and it&rsquo;s legal extortion.</p>
            <div className="position"><strong>Position:</strong> Both levers, not just one. Cap what they can charge AND make curing diseases more profitable than managing them. The goal is an industry that makes money by making people well, not by keeping them sick on a subscription plan.</div>

            <h3>3. Medicare/Medicaid — Safety Net, Not Lifestyle</h3>
            <p>Medicare (elderly) and Medicaid (low-income) are necessary programs. They should exist. But like all safety net programs, they should be a bridge, not a permanent address.</p>

            <h3>4. Mental Health — The Backbone of Everything</h3>
            <p>This is the sleeper issue that connects ALL of it. Political division, blind tribalism, inability to think critically, broken relationships, social dysfunction — so much traces back to a nation of people who are not emotionally well.</p>
            <ul>
              <li>Destigmatize mental health care</li>
              <li>Fund it and make it accessible and affordable</li>
              <li>Prioritize it as a national health priority</li>
            </ul>
            <p>You can&rsquo;t fix the country&rsquo;s politics if you don&rsquo;t fix the country&rsquo;s mental health first.</p>
          </section>
        )}

        {/* DRILL: SOCIAL ISSUES */}
        {activeDrill === "social" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>III. Social Issues</h2>

            <h3>1. LGBTQ+ Rights — Equal, Not Special</h3>
            <p>Same rights, same access, same opportunities as everyone else. Full stop.</p>
            <div className="position"><strong>Position:</strong> Equality means EQUAL. Not more, not less. The goal is a world where nobody cares — and we don&rsquo;t.</div>

            <h3>2. Abortion — Legal with Limits</h3>
            <p>Pro-legalization because the alternative is people doing dangerous things out of desperation. Access to healthcare shouldn&rsquo;t depend on your zip code.</p>
            <div className="position"><strong>Position:</strong> Federal baseline ensuring access. Maximum 14 weeks — a reasonable and generous window. Exceptions must exist when the mother&rsquo;s life is in jeopardy.</div>
            <p>Clinic protesters must go. Protesting outside abortion clinics is inhumane. Nobody knows another person&rsquo;s circumstances.</p>
            <div className="warn-box">⚠ TENSION WITH FREE SPEECH: Does banning clinic protests violate the First Amendment? Genuine conflict between free speech principles and basic human decency that needs legal analysis.</div>

            <h3>3a. Drugs — Legalize, Tax, Bank</h3>
            <p>Legalize marijuana federally. Get it out of the cash-only shadow economy and into the banking system where it can be taxed, regulated, and profitable.</p>
            <p>For harder drugs, legalization would make them SAFER — regulated purity, no fentanyl surprises. But it also makes them more accessible.</p>
            <div className="warn-box">⚠ NEEDS MORE RESEARCH: Need data from decriminalization models (Portugal, Oregon, etc.) to evaluate outcomes.</div>

            <h3>3b. Prostitution — Legalize and Regulate</h3>
            <p>Your body, your choice. We use that phrase for abortion — so why doesn&rsquo;t it apply to sexual activity between consenting adults?</p>
            <div className="position"><strong>Position:</strong> Legalize and create safe, regulated environments. Protect the workers. Criminal laws against trafficking, coercion, and underage involvement remain fully enforced.</div>

            <h3>4. Immigration — Borders Exist for a Reason</h3>
            <p>You wouldn&rsquo;t let a stranger squat in your house. A country has the same right to control who enters.</p>
            <div className="position"><strong>Position:</strong> Every country on earth has immigration enforcement. This shouldn&rsquo;t be controversial. Stop making it emotional and start treating it like policy.</div>

            <h3>5. Gun Rights — Protect Ownership</h3>
            <p>Gun control doesn&rsquo;t stop criminals. Law-abiding citizens shouldn&rsquo;t be punished for what criminals do.</p>
            <div className="warn-box">⚠ CONTROVERSIAL PLANK: Many will disagree. Need to compile studies on armed communities vs. gun-free zones and crime rates.</div>
          </section>
        )}

        {/* DRILL: GOVERNMENT */}
        {activeDrill === "government" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>IV. Government Structure</h2>

            <h3>1. Term Limits — The Foundation</h3>
            <p>Congress is not a lifelong assignment. Public service is not a career path to becoming a billionaire.</p>
            <p>If you enter Congress at one income level and leave as a hundred-times-wealthier person, something went very wrong. Insider trading in government must end.</p>

            <h3>2. Government Modernization — Full Overhaul</h3>
            <p>The entire federal structure was designed for a different era. Lifetime appointments made sense when people died at 60. Now we have 80-year-old Supreme Court justices ruling on AI and data privacy they don&rsquo;t understand.</p>
            <div className="position"><strong>Position:</strong> Term limits for SCOTUS, Congress, and every position of power. We&rsquo;re running 18th century software on a 21st century world.</div>
            <div className="warn-box">⚠ NEEDS DEEPER ANALYSIS: The entire structure of House vs. Senate and how Congress operates needs critical examination.</div>

            <h3>3. States vs. Federal — Case by Case</h3>
            <p>No blanket ideology. Common sense applied issue by issue:</p>
            <ul>
              <li><strong>Federalize:</strong> Issues where inconsistency between states causes harm</li>
              <li><strong>State level:</strong> Issues where local context genuinely matters</li>
            </ul>

            <h3>4. Military Spending — America First (Actually)</h3>
            <p>Military spending should directly benefit U.S. security and interests. We are not the world&rsquo;s police force. Stop bankrolling conflicts with no clear strategic benefit. Bring that money home.</p>

            <h3>5. Police &amp; Criminal Justice Reform</h3>
            <p>Federal baseline STANDARDS without federal CONTROL. Set the floor. Let states build above it.</p>
            <ul>
              <li>Domestic violence consequences need serious reform</li>
              <li>Family court, custody, and divorce proceedings are wildly inconsistent</li>
              <li>Better training and accountability for law enforcement</li>
            </ul>
          </section>
        )}

        {/* DRILL: EDUCATION */}
        {activeDrill === "education" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>V. Education, Energy &amp; Other</h2>

            <h3>1. Education — Modernize Everything</h3>
            <p>We&rsquo;re teaching kids in 2026 the same way we taught them in 1975. Kids have AI in their pockets and we&rsquo;re running curricula designed for the industrial era.</p>
            <div className="position"><strong>Position:</strong> Educators and technologists working together to redesign education. Federal standards for consistency. State implementation for flexibility.</div>

            <h3>2. Higher Education &amp; Student Debt</h3>
            <p>We&rsquo;ve spent decades funneling every 18-year-old toward a four-year university. Meanwhile, the trades are desperate for workers earning competitive wages, without debt.</p>
            <p>Most jobs don&rsquo;t need four years of college. And we&rsquo;re letting teenagers take out six-figure loans for degrees with no market value. It&rsquo;s predatory lending with a graduation ceremony.</p>
            <p>Forgiving student loans without fixing why college costs $200K is just paying off one round and letting the next generation drown the same way.</p>
            <div className="position"><strong>Position:</strong> Stop treating college as the default path. Elevate trades as equally valid. Reform lending practices.</div>
            <p>And reframe military service as what it actually is — one of the most comprehensive career development programs in the country. Cybersecurity, aviation mechanics, medical, logistics, IT, intelligence. Come out with certifications, experience, often security clearance, zero debt.</p>
            <div className="position"><strong>Position:</strong> Integrate military career paths into the same career guidance pipeline as college and trades. Not a last resort — an equally viable option.</div>

            <h3>3. Homelessness — It&rsquo;s Not One Problem</h3>
            <p><strong>Group 1 — Economic:</strong> Lost a job, couldn&rsquo;t make rent. Need a bridge — temporary housing, job placement, short-term support.</p>
            <p><strong>Group 2 — Mental health/addiction:</strong> The bulk of chronic homelessness. Need treatment, not a tent city and a sandwich.</p>
            <p><strong>Group 3 — Voluntary opt-out:</strong> People who have chosen to live outside the system. Can&rsquo;t force someone to accept help.</p>
            <div className="position"><strong>Position:</strong> Address each group with targeted solutions instead of one blanket approach.</div>

            <h3>4. Climate &amp; Energy — Analytical, Not Emotional</h3>
            <div className="position"><strong>Position:</strong> Stop making climate policy based on feelings. Fund what the data says works. Cut what doesn&rsquo;t.</div>

            <h3>5. Free Speech — With Accountability</h3>
            <div className="position"><strong>Position:</strong> The answer isn&rsquo;t censorship. It&rsquo;s education and mental health. Teach people to think critically.</div>

            <h3>6. Housing Affordability</h3>
            <p>Housing costs have dramatically outpaced wages. Zoning reform, building incentives, foreign investment restrictions, first-time buyer programs.</p>
            <div className="warn-box">⚠ NEEDS SOLUTIONS: Flagged as a priority. Requires research and the right people at the table.</div>

            <h3>7. Childcare — Make Work Possible</h3>
            <p>If childcare costs more than a second income, you&rsquo;ve effectively told one parent they can&rsquo;t work. That&rsquo;s a labor force issue.</p>
            <p>Germany pays Kindergeld — €259 per child per month to ALL families. Finland gives every expectant parent a baby box with essentials.</p>
            <div className="position"><strong>Position:</strong> This isn&rsquo;t &ldquo;free stuff.&rdquo; It&rsquo;s infrastructure investment in human capital. That&rsquo;s not socialism. That&rsquo;s business logic.</div>
          </section>
        )}

        {/* DRILL: CULTURE */}
        {activeDrill === "culture" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>VI. Religion, Culture &amp; Public Life</h2>

            <h3>1. Religion in Government — Keep It Out</h3>
            <p>Separation of church and state exists for a reason. You don&rsquo;t get to impose your faith on 330 million people through law.</p>
            <div className="position"><strong>Position:</strong> Worship whoever you want. But your religion ends where other people&rsquo;s rights begin. Policy should be driven by data, not doctrine.</div>

            <h3>2. Cultural Traditions — Include, Don&rsquo;t Erase</h3>
            <p>We&rsquo;ve stripped holiday parties, Christmas concerts, Halloween parades out of schools to avoid offending anyone. But in doing so, we&rsquo;ve removed cultural traditions that kids of ALL backgrounds enjoyed.</p>
            <div className="position"><strong>Position:</strong> Don&rsquo;t subtract — ADD. Instead of removing Christmas, also celebrate Hanukkah, Diwali, Eid, Lunar New Year, Kwanzaa, and whatever traditions the kids bring to the table.</div>
            <p>A kid who&rsquo;s been to a Diwali celebration at school, eaten mooncakes during Lunar New Year, and lit a menorah isn&rsquo;t going to grow up afraid of people who are different from them.</p>

            <h3>3. Cultural Representation — Stop Erasing in the Name of Progress</h3>
            <p>In 2020, a wave of corporate panic scrubbed recognizable brand icons in the name of fighting racism. Aunt Jemima — a 130-year icon — gone. Uncle Ben — gone. Land O&rsquo;Lakes&rsquo; Native American woman — gone.</p>
            <p>The result: In the name of fighting racism, they literally erased people of color from consumer visibility and replaced them with nothing.</p>
            <p>And the Land O&rsquo;Lakes situation is particularly telling — they removed the Native American woman but kept the land. They literally removed the Native person and kept the land.</p>
            <p>Meanwhile, Little Debbie is still smiling on every snack cake box. Colonel Sanders still sells fried chicken. The Wendy&rsquo;s girl is still on every restaurant sign. All white faces. Nobody demanded they be removed.</p>
            <div className="position"><strong>Position:</strong> Stop erasing cultural representation in the name of protecting the cultures you&rsquo;re erasing. If an image is genuinely offensive and the community says so — have the conversation. But don&rsquo;t panic-scrub because a hashtag trended.</div>
          </section>
        )}

        {/* DRILL: FOOD SAFETY */}
        {activeDrill === "food" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>VII. Food Safety, Agriculture &amp; Public Health</h2>

            <h3>1. Food Safety — Follow Europe&rsquo;s Lead</h3>
            <p>The United States allows hundreds of food additives banned in Europe, Canada, and other developed nations. Titanium dioxide, brominated vegetable oil, potassium bromate, artificial dyes, growth hormones.</p>
            <p>Why? The GRAS loophole — &ldquo;Generally Recognized as Safe.&rdquo; Food manufacturers self-certify their own ingredients without FDA review. The company selling you the food decides if it&rsquo;s safe to eat.</p>
            <p>Europe: prove it&rsquo;s safe BEFORE it goes on the market. The U.S.: put it on the market and wait until people get sick. The EU re-evaluates regularly. The U.S. hasn&rsquo;t reviewed some additives since the 1960s.</p>
            <p>The food industry spends billions on lobbying. Pepsi alone spends over $9 million per year. The American Dietetic Association is partially funded by Coca-Cola, Mars, and other junk food manufacturers.</p>
            <div className="position"><strong>Position:</strong> Adopt the European precautionary model. Require additives to be proven safe before reaching consumers. Eliminate the GRAS self-certification loophole. Remove lobbying influence from food safety oversight.</div>

            <h3>2. The CDC — Rebuild Credibility</h3>
            <p>Public confidence dropped from 82% (2020) to 56% (2022). The agency&rsquo;s own director admitted: &ldquo;In our big moment, our performance did not reliably meet expectations.&rdquo;</p>
            <p>The core problem is mission creep. The CDC went from focused infectious disease response to a sprawling bureaucracy. Only about half the budget supports infectious disease. Less than 1 in 10 employees are epidemiologists.</p>
            <div className="position"><strong>Position:</strong> Earn back trust through transparency, accountability, and refocus on core mission. Show the data. Acknowledge uncertainty. Admit mistakes quickly.</div>

            <h3>3. Public Health Literacy — Better Detection Is Not an Epidemic</h3>
            <p>Many &ldquo;epidemics&rdquo; people panic about aren&rsquo;t epidemics at all — they&rsquo;re better diagnostic tools, broader definitions, and increased awareness.</p>
            <p><strong>Autism:</strong> 1 in 150 (2000) to 1 in 36 (2023). But in 2013 the DSM broadened the definition by folding Asperger&rsquo;s into the spectrum. Widened net, caught more fish. Autism always existed — 100 years ago that kid was &ldquo;quirky&rdquo; or &ldquo;difficult.&rdquo;</p>
            <p><strong>Cancer:</strong> More diagnosed because MRIs, CT scans, and blood markers exist now. Prostate cancer &ldquo;skyrocketed&rdquo; after the PSA test. In 1920 people died of &ldquo;old age&rdquo; — they died of cancer, they just didn&rsquo;t know it.</p>
            <p><strong>ADHD:</strong> Diagnoses doubled in 20 years. Medication market exploded. Some is better identification. Some is a system with a pill for every problem.</p>
            <p><strong>Vaccines and autism:</strong> Vaccines do NOT cause autism. The original study was retracted for fraud. The author lost his medical license. The timing coincides because developmental differences become noticeable at the same age vaccinations happen. Correlation is not causation.</p>
            <div className="position"><strong>Position:</strong> Trust science, not conspiracy theories. Reject anti-vaxxer mythology. But maintain healthy skepticism of a system that profits from diagnosis and treatment. Better detection explains rising numbers. Fund research into WHY conditions exist.</div>
          </section>
        )}

        {/* DRILL: PARENTING */}
        {activeDrill === "parenting" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>IX. Parenting</h2>

            <h3>Love Your Kids — With Clear Boundaries</h3>
            <p>Love your kids no matter what. If they&rsquo;re gay, if they&rsquo;re trans, if they choose a different path than you planned — they&rsquo;re still your kid. That&rsquo;s unconditional love for WHO THEY ARE.</p>
            <p>But love doesn&rsquo;t mean no structure. The goal of parenting is to launch fully functioning adults into society. Set expectations. Build accountability. Give them skills, direction, and purpose.</p>
            <p>We need to reframe the conversation: the job isn&rsquo;t to protect your kids from the world forever. It&rsquo;s to prepare them to thrive in it.</p>
            <p>And for adult children: you can love them AND say no. You can support them AND stop subsidizing them. Love with clear boundaries isn&rsquo;t less love. It&rsquo;s better love.</p>

            <h3>Children Have a Fundamental Right to Both Parents</h3>
            <p>The current system treats parental access as a privilege awarded by a court after a fight. It isn&rsquo;t. It is a default right — for the child AND for both parents — that requires documented cause to modify. Equal, simultaneous, automatic. That is the starting point. Not something either parent has to win.</p>
            <div className="position"><strong>Position:</strong> Default custody is shared. Equally. From the moment two parents are legally established. Modification requires documented cause — not better attorneys, not strategic filing location, not who got to the courthouse first. The burden of proof is on limiting access, not on maintaining it.</div>
            <p>This reframes the entire custody conversation. Current language awards custody to someone. The LPC framework starts from shared and modifies only when the child&rsquo;s welfare requires it. That single reframe eliminates the adversarial filing race, jurisdiction shopping, strategic relocation before filing, and the financial incentive to maximize custody percentage for support calculation purposes.</p>
            <div className="position"><strong>Support calculated on income and child needs — not custody percentage.</strong> When custody is equal by default, the financial incentive to fight over parenting time disappears. Support reflects what the child actually requires, proportional to what each parent actually earns. Not a leverage instrument. Not a negotiating chip.</div>

            <h3>The Birth Certificate Is a De Facto Contract — Give It Terms</h3>
            <p>When two parents are named on a birth certificate, they have created a co-parenting relationship with financial and legal implications. Right now that relationship has no accompanying framework unless the parents were already married. The BC is doing legal work with no legal structure behind it.</p>
            <div className="position"><strong>Two names on a birth certificate triggers an automatic default parental Legal Partnership Contract.</strong> Equal legal standing. Equal financial responsibility. Equal parental rights. You cannot carry the obligation without the rights. You cannot claim the rights without the obligation. Parenthood is both, simultaneously, from the moment that document is filed.</div>
            <p>This is the clearest expression of the dependency principle: the child did not choose this arrangement. They cannot advocate for themselves. The state&rsquo;s only legitimate interest in private relationships is protecting dependents who can&rsquo;t protect themselves — and a child with two named parents deserves the legal framework that makes both of those parents real.</p>

            <h3>BC Naming — Consent or Established Fact. Nothing Else.</h3>
            <p>You cannot be named as a legal parent on a federal document without your verified consent or court-established paternity. Full stop. Currently some states require a signed Acknowledgment of Paternity before a father&rsquo;s name appears. Others let a parent write in whoever they choose — leaving the named party to hire an attorney and prove a negative to be removed. That is backwards. It ends under federal standardization.</p>
            <div className="position"><strong>Two paths to BC naming:</strong> Voluntary consent — both parties sign the Acknowledgment of Paternity at filing. Or court-established paternity via a simple, defined administrative process. No other mechanism. One federal standard. Every state.</div>

            <h3>The Paternity Process — Simple, Fast, Controlled</h3>
            <p>For cases where paternity is disputed or unknown, the process must be accessible without being a weapon.</p>
            <div className="position"><strong>Just cause required to trigger a court-ordered test:</strong> documented relationship or contact during the conception window, specific credible basis for the claim, filed under the filer&rsquo;s own verified identity. No anonymous filings. A magistrate reviews within 30 days — not a full court proceeding, not attorneys required. A straightforward administrative review with a defined timeline and a defined answer.</div>
            <p>One negative result is the answer. That individual cannot be named in a subsequent filing without new material evidence. The process is not a tool for cycling through a list of names until someone accepts responsibility.</p>
            <div className="position"><strong>Cost accountability:</strong> Filing without just cause and receiving a negative result means the filing party bears the full cost. The process exists to establish parenthood — not to harass, leverage, or create legal pressure. File against ten men without cause, nine come back negative — you are receiving nine bills.</div>
            <div className="position"><strong>Refusal of a court-ordered test = default judgment of paternity.</strong> You had the opportunity to establish the truth. You declined. The court draws the only reasonable conclusion. The BC is filed accordingly.</div>

            <h3>False Naming — Accountability in Both Directions</h3>
            <p>A parent who deliberately names a false father — omitting the biological parent or substituting a preferred name — is filing a fraudulent federal document. The child, once of age, or any party with credible documented cause, can trigger the correction process. The fraudulent filing party bears all associated costs.</p>
            <p>Protecting individuals from being falsely named and protecting children from having their biological parentage concealed are not competing interests. They are the same interest in accurate legal records — served by the same accountability standard applied equally in both directions.</p>

            <h3>No More Windows — Unauthorized Removal Is a Federal Violation</h3>
            <p>Right now there is a gap between &ldquo;we just had a baby&rdquo; and &ldquo;a custody order exists.&rdquo; In that gap, one parent can take a child across state lines and the other parent hears &ldquo;it&rsquo;s a civil matter&rdquo; when they call for help. That gap closes the moment the BC is filed.</p>
            <div className="position"><strong>When both parents have equal legal standing from BC filing, there is no window.</strong> Unauthorized removal of a child from a legal parent&rsquo;s access is not a custody dispute waiting to be resolved. It is a violation of an established federal parental contract — enforceable immediately, across every state line, because the LPC is a federal instrument. Interstate enforcement is federal by definition.</div>

            <h3>Relocation — Plan First. Move Second.</h3>
            <p>Relocation is not prohibited. Life moves. People move. What is prohibited is leaving without a plan. The other parent&rsquo;s legal rights do not pause while you figure out the logistics. Most people don&rsquo;t relocate maliciously — they do it because the current system has never given them a clear process. This is that process.</p>
            <div className="position"><strong>Step 1 — Notice.</strong> Mandatory advance notice to the other legal parent. Minimum 90 days wherever possible. Not a courtesy — a legal requirement. Emergency situations have an expedited process but notice still happens. Same day the need to relocate is established.</div>
            <div className="position"><strong>Step 2 — Negotiated Relocation Agreement.</strong> Before anyone moves: where is the child&rsquo;s primary residence, what does the non-relocating parent&rsquo;s access look like, who bears travel costs, what does virtual contact look like in the interim, what happens if the relocating parent moves again. All of it enumerated. All of it agreed.</div>
            <div className="position"><strong>Step 3 — Filed and Approved.</strong> The agreement is filed with the federal LPC system. Magistrate review — not a full court proceeding. Confirmed against the child&rsquo;s best interest standard. Approved. Everyone moves forward with clarity and legal standing.</div>
            <p>If the other parent won&rsquo;t negotiate in good faith, there is a court process with a defined timeline. The relocating parent is not held hostage indefinitely. But negotiation comes first.</p>
            <p>Military transfer orders are federal. A legal parental contract is federal. One does not supersede the other. Orders move the service member. They do not move someone else&rsquo;s parental rights. The relocation framework runs concurrently with PCS preparation — the lead time that comes with most orders is the notice period.</p>
            <p>A third party who knowingly assists in a relocation that has not followed this process is not a bystander. They are a participant in the violation of an established federal parental contract. Liability attaches from the moment they had knowledge of the existing LPC and assisted anyway.</p>

            <h3>The Age-Based Parenting Framework</h3>
            <p>A parenting plan that works for a newborn is the wrong plan for a five-year-old. The wrong plan for a five-year-old is the wrong plan for a twelve-year-old. The framework grows with the child — because that&rsquo;s what the child actually needs. Mutual discretion governs the specifics within each stage. The floor is access for both parents. Everything above that is negotiable and expected to evolve.</p>

            <div className="position"><strong>Birth — 2 years:</strong> Access is non-negotiable for both parents. Structure reflects developmental reality — a breastfeeding infant has different needs than a toddler. Overnight frequency, duration, and scheduling are negotiable within a defined minimum floor. Neither parent can use infancy as a permanent exclusion tool. The agreement is written to evolve as the child develops — reducing future court involvement by building in the transitions upfront.</div>

            <div className="position"><strong>3 — 11 years:</strong> Full shared framework. Overnights, holidays, school year splits, summers — all enumerated. Travel protocols defined. Virtual contact minimums established for periods when physical access isn&rsquo;t possible. Both parents present and consulted for major medical and educational decisions.</div>

            <div className="position"><strong>12 — 14 years — The Influence Window Opens:</strong> The child begins to have a documented voice in their own arrangement. Not a veto. A voice. A structured conversation with a single neutral child advocate — not a courtroom, not choosing between parents in a traumatic setting — whose job is to represent the child&rsquo;s stated interests independently. That input is formally considered in any modification proceeding.</div>

            <div className="position"><strong>14 — 16 years — Stronger Weight:</strong> The child&rsquo;s preference carries increased legal weight. The neutral advocate distinguishes between preference and welfare — a teenager who wants to live with the more permissive parent because of a later curfew is exercising different judgment than one documenting a genuinely unsafe environment. Both are heard. Both are evaluated on their actual merits.</div>

            <div className="position"><strong>16 — 17 years — Presumptive Weight:</strong> The documented preference of a 16-year-old carries presumptive weight in any modification proceeding. A teenager who has lived this arrangement for years has information a judge doesn&rsquo;t. The framework listens to them. Welfare override remains available — presumptive is not absolute.</div>

            <h3>Parental Alienation — Documented Breach</h3>
            <p>Using your parenting time to systematically undermine the child&rsquo;s relationship with the other parent — coaching, badmouthing, manufacturing fear or negative association — is a breach of the parental LPC. Documented alienation shifts the custody arrangement against the alienating parent. The child&rsquo;s voice matters. Manufacturing that voice is fraud against the child and against the other parent simultaneously.</p>
            <p>The single neutral advocate model exists specifically to surface this. One advocate. Not one per side. A child who reports entirely different preferences to different interviewers is a child being coached. The process is designed to catch it.</p>

            <div className="warn-box">⚠ CARVE-OUTS REQUIRED: Sexual assault survivors must not be compelled into a parental LPC with their attacker. Documented assault — established through criminal OR civil standard — exempts the survivor from automatic contract initiation with that individual. Sperm donor agreements and third-party reproduction arrangements require clear declaration instruments that precede BC filing and establish non-parental status by mutual agreement. These frameworks require dedicated legal development before implementation.</div>

            <p style={{marginTop:"24px",color:"var(--txt3)",fontStyle:"italic",fontSize:".9rem"}}>→ See Card VIII: Partnership Reform for the complete Legal Partnership Contract framework that underlies this section.</p>
          </section>
        )}

        {/* DRILL: PARTNERSHIP REFORM */}
        {activeDrill === "partnership" && (
          <section className="drill" id="drill-content">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>VIII. Partnership Reform — Abolish Legal Marriage</h2>
            <p>Marriage is a legal contract. We&rsquo;ve spent two centuries pretending it&rsquo;s primarily a romantic or religious one. It&rsquo;s not. It&rsquo;s a binding legal agreement with financial, parental, civil, and tax implications — and we currently treat it with less rigor than a car lease and more baggage than any single institution deserves to carry.</p>
            <p>The word &ldquo;marriage&rdquo; carries 2,000 years of religious weight, gender role assumptions, cultural expectation, and legal precedent written for a completely different world. We are not reforming marriage. We are replacing the legal instrument entirely — with something that actually works.</p>

            <div className="position"><strong>Position:</strong> Legal marriage as a government category is abolished. Common law marriage is abolished. Domestic partnerships are abolished. They are all replaced by a single federal instrument: the <strong>Legal Partnership Contract (LPC)</strong>. One standard. Federally recognized. Administered by states. Every relationship structure eligible. No exceptions based on number of parties, gender, or configuration.</div>

            <h3>The Ceremony Is Yours. The Contract Is the Law.</h3>
            <p>Want a church wedding? Beautiful. Get married in your place of worship, by your tradition, with your community. That is between you, your partner, and whatever you believe in. It has zero legal weight — and that&rsquo;s not a demotion. That&rsquo;s the separation of church and state actually functioning as intended.</p>
            <p>The government&rsquo;s job is the contract. Your community&rsquo;s job is the ceremony. They have been co-signing each other&rsquo;s work for 200 years and it has served neither institution well. This ends that arrangement cleanly — and actually <em>protects</em> religious institutions from government interference in their sacraments.</p>

            <h3>The Ketubah Model — 2,000 Years Ahead of Us</h3>
            <p>Jewish marriage law has had a version of this figured out since antiquity. The Ketubah is a prenuptial contract that enumerates the obligations of each party — financial responsibilities, how partners are to be treated, what happens in dissolution. Explicit terms. Agreed upfront. Signed before witnesses.</p>
            <p>That is not unromantic. That is what respect actually looks like. You are declaring, in writing, exactly what you are committing to. The LPC operates on the same principle: a base legal framework with default federal terms, fully amendable by mutual agreement before signing.</p>

            <h3>Who Can File an LPC</h3>
            <p>Any configuration of consenting adults. Two people. Three. More. The personal choices of adults about who they build a life with are not the government&rsquo;s business. What IS the government&rsquo;s business is ensuring that every person in that arrangement has legal protection — and right now, for anyone outside a two-person opposite-sex marriage, that protection is inconsistent at best and nonexistent at worst.</p>
            <div className="position"><strong>Adding a party requires a full contract renegotiation.</strong> New terms. Every current party signs. Roles, financial responsibilities, and parental obligations defined for all parties including the new one. No one can unilaterally restructure a family unit that other people have built their lives around.</div>
            <p>Sister Wives illustrated exactly what happens without this framework. When one partner legally restructured the family to benefit a newly added member — divorcing his original legal spouse to secure adoption rights for the newest — the women who had contributed financially and raised children for decades had no legal recourse. The religious structure that bound them morally had no legal teeth. The legal structure refused to recognize them at all. They fell through the gap between church and state, protected by neither. That is not a polygamy argument. That is a contract failure argument.</p>

            <h3>No Contract — No Legal Standing</h3>
            <p>Two adults cohabitating without an LPC are legally roommates. The government has no opinion on their personal arrangement. What consenting adults do in their private lives is not the state&rsquo;s business.</p>
            <p>This eliminates common law marriage entirely — and that&rsquo;s a feature, not a loss. Common law marriage was a patch for a broken system: courts trying to determine whether two people were &ldquo;really&rdquo; married based on how long they lived together, whether they introduced each other as spouses at parties, whether other people thought they seemed married. That is not law. That is speculation with legal consequences. The absence of a contract IS the answer. Adults made a choice. The state respects it.</p>
            <p>The line changes the moment a dependent enters the picture.</p>
            <div className="position"><strong>No LPC + child exists:</strong> The state imposes a minimum parental framework automatically. The child did not choose this arrangement. They cannot advocate for themselves. Default terms covering custody, financial responsibility, and medical decision rights are assigned and negotiable from there — but there IS a framework whether the parties wanted one or not. You do not get to opt out of responsibility for a dependent human by declining to file paperwork.</div>

            <h3>The LPC Is In Force Until Dissolved or Death</h3>
            <p>No automatic expiration. A missed renewal date should not accidentally dissolve someone&rsquo;s parental rights or insurance coverage. The contract remains in force until one of three things happens: mutual dissolution, breach dissolution, or death — same as any serious legal agreement.</p>
            <p>Optional renewal checkpoints can be built into the contract itself by the parties who want them. Not an expiration — a voluntary check-in. Both parties actively reaffirm or renegotiate. That is a completely different psychological and legal instrument than an expiration date, and it serves the people who want intentionality without the risk of accidental dissolution.</p>

            <h3>Two-Track Dissolution</h3>
            <p>The current no-fault model treats every dissolution identically regardless of what happened. The spouse who honored every term of the agreement and the one who abandoned, cheated, or abused are processed through the same system with roughly equivalent outcomes. That is not justice. That is not logic.</p>
            <div className="position"><strong>Track 1 — Mutual Dissolution:</strong> Both parties agree the contract has run its course. Clean split per the pre-agreed terms. Equitable distribution as defined upfront. No blame, no penalty beyond the contract&rsquo;s own dissolution terms.</div>
            <div className="position"><strong>Track 2 — Breach Dissolution:</strong> One party violated enumerated contract terms. The breaching party bears consequences — financial, custody-weighting, support obligations — as defined in the agreement. Breach is documented, dated, and sequenced. You broke the contract. The dissolution reflects that.</div>
            <p>Sequencing matters and the current system ignores it entirely. A party who breaches first — refusing to fulfill a material obligation — cannot then file claims against the consequences of their own breach and have those claims treated as equivalent to the original grievance. Timeline is evidence. When claims first appear in dissolution proceedings, after breach has already been established, they carry a different evidentiary burden than claims with years of documented history behind them.</p>
            <p>Consider an active duty service member who receives transfer orders — a material condition of military life that any spouse of a service member understands before the commitment is made. The relocating spouse fulfills their obligations and moves. The non-relocating spouse refuses, remains in the marital home, and continues receiving the financial benefits of the partnership while the service member carries the cost of two households. Under the current system: years of spousal support, extended timelines to refinance the marital asset, no mechanism to recognize who actually breached. Under breach dissolution: the refusal to relocate is documented non-compliance with a material contract term. Expedited dissolution track. Support obligations recalibrated to reflect who honored the agreement.</p>

            <h3>Breach Dissolution — Expedited Track</h3>
            <p>When breach is documented and confirmed, the non-breaching party should not be forced through the same multi-year process as a mutual dissolution. That extended timeline is itself a tool the breaching party can weaponize — draining assets, accumulating costs, delaying resolution while continuing to receive partnership benefits.</p>
            <div className="position"><strong>Breach confirmed:</strong> Expedited dissolution timeline. Hard deadlines on asset refinancing and division — defined, court-enforced, non-negotiable. Support obligations flow toward the party who honored the agreement, not the one who didn&rsquo;t. Non-compliance is not a negotiating strategy. It is evidence.</div>
            <p>A documented abuse survivor with a court-issued restraining order — a document that represents a judicial determination that abuse occurred — should not be ordered to subsidize their abuser&rsquo;s legal fees. That outcome is not a malfunction of the current system. It is the system operating as designed, without a breach framework to distinguish between parties. The LPC changes that calculus entirely.</p>

            <h3>On Emotional Abuse — Evidentiary Standards Matter</h3>
            <p>Emotional abuse is real. It causes documented, lasting harm. It also happens to be the most difficult category of abuse to verify and the easiest to manufacture in a contested dissolution. The answer is not to dismiss it. The answer is to require the same evidentiary rigor applied to any serious legal claim: timeline, documented pattern, corroboration.</p>
            <p>A claim that surfaces for the first time in dissolution paperwork — after breach has already been established by the opposing party — is not equivalent to a claim with years of therapy records, communications, and witness corroboration behind it. Courts must evaluate when claims emerge and in what context. Retaliatory filings are a documented pattern in family court. Protecting real survivors requires distinguishing them from strategic ones — and the current system has no mechanism to do that.</p>
            <div className="warn-box">⚠ CRITICAL BALANCE: Any retaliatory claim framework must be constructed with extreme care. The same evidentiary standards that protect against manufactured allegations cannot become a barrier that silences legitimate abuse survivors. Mandatory legal representation for abuse claimants regardless of financial means, and independent evidentiary review, are essential components of getting this right.</div>

            <h3>Existing Marriages — Automatic Conversion</h3>
            <p>Every legally recognized marriage, domestic partnership, and civil union existing at implementation automatically converts to an LPC. Original filing date preserved. Seniority preserved. Social Security calculations, inheritance timelines, and legal standing all carry forward intact. No ceremony required. No re-filing required. Parties receive notification and have a defined window — 24 months — to elect amended terms under the new framework or remain on converted default terms.</p>
            <div className="position"><strong>Federal management, state administration.</strong> The LPC is a federal legal standard — one set of rules, recognized in every state, no ambiguity when people move across state lines. A legal partnership formed in Vermont is a legal partnership in Mississippi. States administer the filing infrastructure, the record-keeping, the processing. The law is uniform. The patchwork of 50 different marriage codes, domestic partnership statutes, and common law recognition standards is retired.</div>

            <h3>Insurance &amp; Benefits</h3>
            <p>Corporate benefits currently recognize domestic partnerships inconsistently because there is no federal standard defining what one is. HR departments are making individual judgment calls. Under the LPC: a filed, witnessed, legal contract is the credential. It exists or it doesn&rsquo;t. Coverage eligibility is binary and employer policy becomes simple: LPC on file, eligible. No contract, not eligible. No case-by-case determinations. No gaming the system by adding uncounted parties — you cannot add someone to a family benefits plan without them being a named signatory on the filed contract.</p>
            <div className="warn-box">⚠ NEEDS LEGAL ARCHITECTURE: Multi-party tax filing status, Social Security survivor benefits across 3+ party contracts, inheritance law for non-binary family structures, and custody frameworks in multi-parent dissolutions all require significant legal development. The positions are clear. The implementation infrastructure is complex and requires the right legal minds at the table.</div>

            <h3>The Birth Certificate Bridge — Where Partnership Law Meets Parental Rights</h3>
            <p>The LPC framework and children&rsquo;s right to access both parents are not separate issues. They are the same issue viewed from two angles. The LPC establishes that two names on a birth certificate creates equal, simultaneous, automatic legal parenthood for both parties. Children&rsquo;s right to access both parents establishes that equal legal parenthood means equal default access — for the child and for each parent.</p>
            <div className="position"><strong>These two principles meet at the same point:</strong> Equal standing is the default. Limiting it requires cause. Not paperwork. Not geography. Not who filed first. A child&rsquo;s right to both parents and a parent&rsquo;s right to their child are not competing interests — they are the same right, recognized simultaneously, from the moment two names appear on that birth certificate.</div>
            <p style={{marginTop:"24px",color:"var(--txt3)",fontStyle:"italic",fontSize:".9rem"}}>→ See Card IX: Parenting for the complete birth certificate, paternity process, and default custody framework.</p>
          </section>
        )}

        {/* CLOSING PRINCIPLES */}
        <section className="closing">
          <div className="tree">
            <div className="principle">Data over emotion.</div>
            <div className="principle">Metrics over feelings.</div>
            <div className="principle">Critical thinking over tribalism.</div>
            <div className="principle">Equal treatment, not special treatment.</div>
            <div className="principle">Personal freedom with personal responsibility.</div>
            <div className="principle">Modern solutions for modern problems.</div>
            <div className="principle">Pay attention.</div>
            <div className="principle last">Don&rsquo;t be a fucking idiot.</div>
          </div>
          <hr />
          <p className="footnote warn-note">⚠ = Gaps acknowledged. Positions held but more research needed.</p>
          <p className="footnote" style={{ marginTop: "12px" }}>This is a living document. Built at 2am on a Tuesday because someone bothered to Google the lyrics.</p>
        </section>

        {/* AUTHOR */}
        <section className="author">
          <h2>About the Author</h2>
          <p>This platform wasn&rsquo;t written by a politician, a think tank, or a political science major. It was written by someone who has lived across nearly every topic it covers.</p>
          <p>U.S. Air Force veteran. The military career path section? Lived it. Started in the USAF after a year of traditional college with no real direction, learned IT, and built a career from that foundation — real skills, real trajectory.</p>
          <p>Former insurance professional at Liberty Mutual, where she wrote the formulas for calculating workers&rsquo; compensation policies and then the same for personal auto insurance pricing. The healthcare section about fixing underlying costs instead of shuffling who pays? That comes from understanding how risk is actually calculated and priced.</p>
          <p>Undergraduate degree in business. MBA with a specialization in marketing, including an international residency in Shanghai. Three years living in Germany, where she experienced firsthand how a country can invest in its citizens through programs like Kindergeld and accessible post-secondary education. 75% of a master&rsquo;s degree in communications — which is journalism, which is fact-checking, which is everything the modern media has abandoned.</p>
          <p>Corporate career spanning VF Corp, L.L.Bean, Hitachi Vantara, and Capri Holdings. Currently CEO of KetteringPro Enterprise, managing a portfolio of technology companies. Mother of three boys in Maine.</p>
          <p>Every section of this document is informed by real experience, not theory. The military plank comes from serving. The insurance critique comes from writing the formulas. The business positions come from running businesses. The parenting plank comes from raising kids. The cultural observations come from living in Germany, studying in Shanghai, traveling, and actually paying attention.</p>
          <p className="sign-off">This isn&rsquo;t ideology. It&rsquo;s lived experience with a search engine and an inability to sleep.</p>
        </section>
      </div>
    </>
  );
}