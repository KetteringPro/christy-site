'use client'

export default function StrategyContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold">ketteringPro Enterprise</h1>
          <p className="text-gray-400 mt-1">Strategic Plan 2025-2035</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Executive Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Executive Summary</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              ketteringPro Enterprise is building the operating system for service industries through a portfolio approach to vertical SaaS. By 2035, we aim to be a $10B-50B public company serving 500,000-1M businesses globally across 40-50+ industry verticals.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our unique advantage: AI-assisted development enables rapid platform builds (1-2 months per MVP), authentic industry insights from founder's direct experience, and a diversified portfolio that mitigates single-platform risk while capturing economies of scale.
            </p>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Highlights</h3>
              <ul className="space-y-2 text-gray-300">
                <li><strong>Target Market:</strong> $5T-10T global service industries</li>
                <li><strong>Initial Platforms:</strong> 8 verticals (2025-2028)</li>
                <li><strong>Revenue Model:</strong> SaaS subscriptions + transaction fees + financial services</li>
                <li><strong>10-Year Goal:</strong> $500M-1B ARR, $10B-50B valuation</li>
                <li><strong>Capital Strategy:</strong> Bootstrap first, raise late (if at all)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Market Opportunity</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Service industries represent $5T-10T in global economic activity, yet remain severely underserved by software. Most small service businesses operate manually with spreadsheets, paper invoices, and disjointed communication tools.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Proven Model</h3>
                <p className="text-gray-400 text-sm">Vertical SaaS companies like Toast ($13B), ServiceTitan ($18B), and Procore ($9B) validate the market</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Fragmented</h3>
                <p className="text-gray-400 text-sm">Millions of small service businesses with no good software options or using legacy solutions</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">High Switching Costs</h3>
                <p className="text-gray-400 text-sm">Once integrated for payments and operations, customers rarely leave (95%+ retention)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Portfolio Strategy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Rather than building a single vertical SaaS platform, KPE operates a portfolio of platforms across multiple service industries. This approach provides diversification, faster learning, and the ability to build shared infrastructure that benefits all platforms.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Initial Platform Portfolio (2025-2028)</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">1. Swipe-A-Shift</h4>
                    <p className="text-gray-400 text-sm">Hospitality staffing marketplace | Launch: Nov 2025</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">2. Oravella</h4>
                    <p className="text-gray-400 text-sm">Beauty/salon/spa operations | Launch: Feb 2026</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">3. Marina Platform</h4>
                    <p className="text-gray-400 text-sm">Boatyard/marina operations + seasonal storage | Launch: Sept 2026</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">4. Construction Connector</h4>
                    <p className="text-gray-400 text-sm">GC-tradesman marketplace + integrated payments | Launch: Dec 2026</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">5. Cannabis Platform</h4>
                    <p className="text-gray-400 text-sm">Dispensary/cultivation operations + compliance | Launch: Q1 2027</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">6. Automotive Services</h4>
                    <p className="text-gray-400 text-sm">PDR, wheel repair, mobile auto services | Launch: 2027</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">7. Home Services</h4>
                    <p className="text-gray-400 text-sm">Multi-trade home repair operations | Launch: 2027</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">8. DHI/AuthYou</h4>
                    <p className="text-gray-400 text-sm">Creator spoof account protection | Launch: 2027-2028</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">Shared Infrastructure</h3>
            <p className="text-gray-300 mb-4">
              All platforms share core components: work order management, customer database, scheduling/dispatch, mobile apps, payment processing, automated communication, and analytics. Industry-specific customization happens at the UI/workflow layer.
            </p>
          </div>
        </section>

        {/* 10-Year Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">10-Year Roadmap</h2>
          
          {/* Phase 1 */}
          <div className="mb-8 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Phase 1: Launch & Validation (2025-2027)</h3>
            <p className="text-gray-400 mb-4">Ages 52-54 | Goal: Launch 6-7 MVPs, prove portfolio model</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">2025-2026 (Year 1)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Swipe-A-Shift launches November 2025</li>
                  <li>Oravella launches February 2026</li>
                  <li>House sells, move to boat (living expenses drop to $2-2.5K/month)</li>
                  <li>Launch 2-3 additional platforms (Marina, Construction, Home Services)</li>
                  <li>Target: $500K-1M ARR, 500-800 customers</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">2027 (Year 2)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Cannabis Platform launches Q1, Automotive and Home Services launch throughout year</li>
                  <li>Scale best-performing 2-3 platforms from Year 1</li>
                  <li>First small acquisitions ($50K-200K) of competitors</li>
                  <li>Hire first executives: CTO, VP Revenue</li>
                  <li>Target: $3M-5M ARR, 1,500-2,500 customers, 7-8 platforms live</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="mb-8 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Phase 2: Scale Winners (2028-2032)</h3>
            <p className="text-gray-400 mb-4">Ages 55-59 | Goal: Market leadership in 5-10 verticals, $50M-100M ARR</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">2028 (Year 3)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Identify top 3-5 platforms by traction, double down with features and marketing</li>
                  <li>Add 3-5 new verticals (build or acquire)</li>
                  <li>Decision point: Bootstrap vs. raise Series A ($20M-50M)</li>
                  <li>Target: $10M-20M ARR, 5,000-8,000 customers, 50-100 employees</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">2029-2030 (Years 4-5)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Add 5-10 new verticals through builds + acquisitions</li>
                  <li>Each winning platform targets $3M-8M ARR individually</li>
                  <li>Acquire 5-10 small competitors ($500K-5M deals)</li>
                  <li>Geographic expansion: National coverage in all verticals</li>
                  <li>Target: $50M-100M ARR, 20,000-40,000 customers, 150-200 employees</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">2031-2032 (Years 6-7)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Platform technical unification (all verticals on common infrastructure)</li>
                  <li>Add financial services layer (integrated lending, payroll, insurance)</li>
                  <li>Hire professional CEO (founder transitions to Executive Chairman)</li>
                  <li>Corporate governance for IPO (independent board, audits, compliance)</li>
                  <li>Target: $150M-300M ARR, 80,000-150,000 customers, 500-800 employees</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="mb-8 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Phase 3: IPO & Public Company (2033-2035)</h3>
            <p className="text-gray-400 mb-4">Ages 60-62 | Goal: Public offering, international expansion</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">2033 (Year 8 - IPO Year)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Public offering: Target $3B-10B valuation, raise $500M-1B</li>
                  <li>Founder ownership post-IPO: 35-50% ($1B-5B net worth)</li>
                  <li>Role: Executive Chairman (25-30 hours/week)</li>
                  <li>Use IPO capital for aggressive M&A (10-20 acquisitions)</li>
                  <li>International expansion (UK, Canada, Australia)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">2034-2035 (Years 9-10)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Revenue: $500M-1B ARR</li>
                  <li>Market cap: $10B-50B</li>
                  <li>Customers: 300,000-1M businesses globally</li>
                  <li>Employees: 2,000-5,000</li>
                  <li>Founder role: Chairman (10-20 hours/week) or Board Observer</li>
                  <li>Passive income: $60M-450M/year</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Projections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Financial Projections</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-gray-400 font-semibold">Year</th>
                  <th className="py-3 px-4 text-gray-400 font-semibold">Age</th>
                  <th className="py-3 px-4 text-gray-400 font-semibold">Phase</th>
                  <th className="py-3 px-4 text-gray-400 font-semibold">Platforms</th>
                  <th className="py-3 px-4 text-gray-400 font-semibold">ARR</th>
                  <th className="py-3 px-4 text-gray-400 font-semibold">Net Worth</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">2025</td>
                  <td className="py-3 px-4">52</td>
                  <td className="py-3 px-4">Launch</td>
                  <td className="py-3 px-4">1-2</td>
                  <td className="py-3 px-4">$200K-500K</td>
                  <td className="py-3 px-4">$100K-500K</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">2026</td>
                  <td className="py-3 px-4">53</td>
                  <td className="py-3 px-4">Launch</td>
                  <td className="py-3 px-4">4-5</td>
                  <td className="py-3 px-4">$500K-1M</td>
                  <td className="py-3 px-4">$500K-2M</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">2027</td>
                  <td className="py-3 px-4">54</td>
                  <td className="py-3 px-4">Validation</td>
                  <td className="py-3 px-4">6-7</td>
                  <td className="py-3 px-4">$3M-5M</td>
                  <td className="py-3 px-4">$2M-10M</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">2028</td>
                  <td className="py-3 px-4">55</td>
                  <td className="py-3 px-4">Scale</td>
                  <td className="py-3 px-4">10-12</td>
                  <td className="py-3 px-4">$10M-20M</td>
                  <td className="py-3 px-4">$10M-50M</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">2030</td>
                  <td className="py-3 px-4">57</td>
                  <td className="py-3 px-4">Expansion</td>
                  <td className="py-3 px-4">20-25</td>
                  <td className="py-3 px-4">$50M-100M</td>
                  <td className="py-3 px-4">$50M-300M</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">2032</td>
                  <td className="py-3 px-4">59</td>
                  <td className="py-3 px-4">Pre-IPO</td>
                  <td className="py-3 px-4">25-30</td>
                  <td className="py-3 px-4">$150M-300M</td>
                  <td className="py-3 px-4">$300M-2B</td>
                </tr>
                <tr className="border-b border-gray-800 bg-blue-900/20">
                  <td className="py-3 px-4 font-bold">2033</td>
                  <td className="py-3 px-4 font-bold">60</td>
                  <td className="py-3 px-4 font-bold">IPO</td>
                  <td className="py-3 px-4">30-35</td>
                  <td className="py-3 px-4">$200M-400M</td>
                  <td className="py-3 px-4 font-bold text-green-400">$1B-5B</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">2035</td>
                  <td className="py-3 px-4">62</td>
                  <td className="py-3 px-4">Public Co</td>
                  <td className="py-3 px-4">40-50</td>
                  <td className="py-3 px-4">$500M-1B</td>
                  <td className="py-3 px-4 text-green-400">$3B-25B+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Revenue Model</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Subscription</p>
                <p className="text-2xl font-bold text-white">40%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Transaction Fees</p>
                <p className="text-2xl font-bold text-white">40%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Financial Services</p>
                <p className="text-2xl font-bold text-white">15%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Data/AI Services</p>
                <p className="text-2xl font-bold text-white">5%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capital Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Capital Strategy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              KPE's capital strategy prioritizes maintaining strategic control and direction while remaining flexible based on actual results and market conditions.
            </p>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Flexible Approach</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">2025-2027: Bootstrap First</h4>
                  <p className="text-gray-300">Build with founder capital ($100K from house sale) + platform revenue. Prove the portfolio model works before considering external capital.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">2027 Decision Point</h4>
                  <p className="text-gray-300">Based on traction:</p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 ml-4 space-y-1">
                    <li>If $5M+ ARR: Consider Series A ($30M-50M) to accelerate</li>
                    <li>If $10M+ ARR: Continue bootstrapping OR raise on better terms</li>
                    <li>If struggling: Raise to course-correct OR pivot</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">2030-2031: Optional Late-Stage Raise</h4>
                  <p className="text-gray-300">If at $50M-100M ARR, optional Series A/B ($100M-200M at $500M-1B valuation) for pre-IPO acceleration. Only 5-10% dilution vs. 30-40% if raised earlier.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Use of Funds (If Capital Raised)</h3>
              <ul className="space-y-2 text-gray-300">
                <li><strong>M&A (40%):</strong> Acquire 15-25 competitors across verticals</li>
                <li><strong>Team (20%):</strong> Hire A-level executives and scale engineering</li>
                <li><strong>Product (15%):</strong> Accelerate development & AI features</li>
                <li><strong>Marketing (15%):</strong> Aggressive customer acquisition</li>
                <li><strong>International (10%):</strong> Launch UK/Canada/Australia</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Competitive Advantages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Authentic Industry Insights</h3>
              <p className="text-gray-300">Founder has direct operational experience in PDR business management, marine sales/service, and exposure to multiple service industries. This isn't theoretical—it's lived experience.</p>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">AI-Accelerated Development</h3>
              <p className="text-gray-300">Using AI tools for development enables 1-2 month MVP builds vs. traditional 6-12 months, allowing rapid portfolio expansion and iteration.</p>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Portfolio Diversification</h3>
              <p className="text-gray-300">Unlike single-vertical SaaS companies, KPE's portfolio approach spreads risk across multiple industries while sharing infrastructure costs.</p>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Network Effects</h3>
              <p className="text-gray-300">More customers = more data = better AI features = more value. Each vertical's learnings improve all other platforms.</p>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">High Switching Costs</h3>
              <p className="text-gray-300">Once businesses integrate payments, customer data, and daily operations, switching becomes nearly impossible. 95%+ retention expected.</p>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Scale Economies</h3>
              <p className="text-gray-300">Shared infrastructure, centralized engineering, and unified go-to-market across 40-50 platforms creates massive efficiency advantages.</p>
            </div>
          </div>
        </section>

        {/* Team & Execution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Team & Execution</h2>
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Founder Background</h3>
              <ul className="space-y-2 text-gray-300">
                <li><strong>Corporate Technology:</strong> 25+ years in tech, fashion, and luxury brands including Hitachi and other Fortune 500 companies</li>
                <li><strong>Restaurant Owner/Operator:</strong> Direct experience running hospitality operations, understanding staffing and service industry challenges</li>
                <li><strong>Marine Industry:</strong> Sales & service experience, boat owner, current liveaboard lifestyle</li>
                <li><strong>Business Operations:</strong> Managed PDR business operations for 2 years (invoicing, collections, revenue tracking)</li>
                <li><strong>Multi-Industry Exposure:</strong> Direct experience across hospitality, construction, cannabis, automotive, marine, beauty industries</li>
                <li><strong>Technical:</strong> AI-assisted development, modern tech stack implementation</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Hiring Roadmap</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">2027 (First Executives)</h4>
                  <p className="text-gray-300">CTO (technical leadership), VP Revenue (sales/CS), 5-10 engineers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">2028-2030 (Scale Team)</h4>
                  <p className="text-gray-300">CFO, COO, Vertical GMs (1 per major platform), 50-200 employees</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">2031-2032 (Pre-IPO)</h4>
                  <p className="text-gray-300">Professional CEO hired, founder transitions to Executive Chairman. Independent board, 500-800 employees</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exit Scenarios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Exit Scenarios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">IPO (Primary Path)</h3>
              <p className="text-gray-300 mb-4">2033 public offering at $3B-10B valuation. Founder retains 35-50% ownership ($1B-5B). Continue as public company CEO.</p>
              <p className="text-sm text-gray-400">Expected outcome</p>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Strategic Acquisition</h3>
              <p className="text-gray-300 mb-4">Salesforce, Microsoft, or Vista Equity acquires at $2B-5B (2030-2032). Founder cashes out, potentially stays on as GM.</p>
              <p className="text-sm text-gray-400">Alternative path</p>
            </div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Stay Private</h3>
              <p className="text-gray-300 mb-4">Continue building, pay dividends, maintain control indefinitely. Generational wealth company.</p>
              <p className="text-sm text-gray-400">Optionality path</p>
            </div>
          </div>
        </section>

        {/* Critical Success Factors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Critical Success Factors</h2>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Swipe-A-Shift generates revenue in Q1 2026:</strong> Proves the model works and validates portfolio approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>House sells by Q2 2026:</strong> Provides $100K operating capital for platform development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>2-3 platforms show clear traction by end 2027:</strong> Validates specific verticals and informs scale decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Reach $10M ARR by 2028:</strong> Proves scalability and attracts top executive talent</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Hire strong executive team by 2029:</strong> Enables founder transition from operator to strategist</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span><strong>Achieve $50M-100M ARR by 2030:</strong> IPO-ready metrics and market validation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Bottom Line */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">The Vision</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              By 2035, ketteringPro Enterprise will be the leading vertical SaaS portfolio company, operating 40-50+ platforms across service industries, serving 500,000-1M businesses globally, generating $500M-1B annual revenue, and valued at $10B-50B in public markets.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The founder will be worth $3B-25B, living on a boat, working 10-20 hours/week, producing content, mentoring entrepreneurs, and proving that starting at 52 can build a generational empire.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>ketteringPro Enterprise Strategic Plan 2025-2035</p>
          <p className="mt-2">Confidential - For Authorized Viewers Only</p>
          <p className="mt-4 text-xs">Document Version 1.0 | November 17, 2025</p>
        </div>
      </footer>
    </div>
  )
}