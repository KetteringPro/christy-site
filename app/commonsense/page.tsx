"use client";
import { useState, useEffect, useRef } from "react";

export default function CommonSensePage() {
  const [activeDrill, setActiveDrill] = useState<string | null>(null);

  function showDrill(id: string) {
    setActiveDrill(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              <div className="card" onClick={() => showDrill("parenting")}>
                <span className="card-icon">👨‍👩‍👦</span>
                <span className="card-arrow">→</span>
                <h3>VIII. Parenting</h3>
                <p>Love your kids no matter what. But the job is to launch functioning adults — not protect them from the world forever. Love with clear boundaries.</p>
              </div>
            </div>
          </section>
        )}

        {/* DRILL: ECONOMICS */}
        {activeDrill === "economics" && (
          <section className="drill">
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
          <section className="drill">
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
          <section className="drill">
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
          <section className="drill">
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
          <section className="drill">
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
          <section className="drill">
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
          <section className="drill">
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
          <section className="drill">
            <button className="drill-back" onClick={hideDrill}>← Back to all topics</button>
            <h2>VIII. Bonus Plank: Parenting</h2>

            <h3>Love Your Kids — With Clear Boundaries</h3>
            <p>Love your kids no matter what. If they&rsquo;re gay, if they&rsquo;re trans, if they choose a different path than you planned — they&rsquo;re still your kid. That&rsquo;s unconditional love for WHO THEY ARE.</p>
            <p>But love doesn&rsquo;t mean no structure. The goal of parenting is to launch fully functioning adults into society. Set expectations. Build accountability. Give them skills, direction, and purpose.</p>
            <p>We need to reframe the conversation: the job isn&rsquo;t to protect your kids from the world forever. It&rsquo;s to prepare them to thrive in it.</p>
            <p>And for adult children: you can love them AND say no. You can support them AND stop subsidizing them. Love with clear boundaries isn&rsquo;t less love. It&rsquo;s better love.</p>
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
