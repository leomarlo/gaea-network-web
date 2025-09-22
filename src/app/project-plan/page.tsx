export default function ProjectPlan() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen forest-texture theme-bg-primary">
      {/* Forest texture overlay */}
      <div className="absolute inset-0 bg-gray-900/90 theme-bg-overlay"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4 theme-text-primary">Project Plan</h1>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-gray-800 rounded-xl border border-gray-700 shadow-lg theme-card theme-border-card">
            <div className="prose prose-invert max-w-none theme-prose">
              <div className="text-gray-300 space-y-6 leading-relaxed theme-text-content">
                
                {/* Patton Quote */}
                <div className="text-center mb-8">
                  <p className="text-lg italic text-green-300 mb-2">
                    "A good plan today is better than a perfect plan tomorrow."
                  </p>
                  <p className="text-sm text-gray-400">
                    (General George S. Patton)
                  </p>
                </div>

                {/* Phase 0 */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 theme-text-primary">Phase 0: Concept and Core Team</h2>
                  <p>
                    The foundation of Project Gaea begins with a rigorous definition of the tokenomics and legal framework to ensure the project's viability and long-term success. Tokenomics will be designed to create a stable, asset-backed cryptocurrency that reflects the real-world value of preserved nature reserves. This involves determining the mechanisms for minting, distributing, and regulating the supply of GaeaCoin, ensuring that its value remains tied to the ecological integrity of tokenized land. A precise valuation model will be developed, incorporating factors such as biodiversity, carbon sequestration potential, and conservation urgency. Simultaneously, we will establish a clear legal structure to ensure compliance with international financial and environmental regulations. This includes securing legal mechanisms for land acquisitions, defining the rights and responsibilities of token holders, and aligning the project with regulatory standards for asset-backed cryptocurrencies. By consulting legal experts in blockchain, finance, and environmental law, we aim to build a legally sound framework that ensures transparency, protects investors, and safeguards the underlying ecological assets.
                  </p>
                  <p>
                    Assembling the right team is critical to turning this ambitious vision into reality. We will prioritize bringing together a multidisciplinary team of experts who share a deep commitment to both blockchain innovation and environmental conservation. The core team will consist of blockchain developers, financial analysts, ecologists, legal advisors, and sustainability strategists, each contributing essential expertise to different facets of the project. To attract top talent, we will leverage our network within the cryptocurrency, environmental, and legal sectors, ensuring that we onboard individuals who possess not only technical competence but also a passion for the mission. Collaboration and alignment will be fostered through regular strategy sessions, a dedicated onboarding retreat, and an open governance structure that allows for decentralized decision-making. By curating a team that blends technological prowess with environmental stewardship, we will create a strong foundation for Project Gaea, ensuring its success from conception through execution.
                  </p>
                </section>

                {/* Phase 1 */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 theme-text-primary">Phase 1: Development of an MVP</h2>
                  <p>
                    To launch this ambitious initiative, we will leverage crowdfunding to raise €160,000, which will fund the development of a Minimum Viable Product (MVP). This initial phase will establish the technical, legal, and operational foundation for GaeaCoin, ensuring a functional and transparent asset-backed cryptocurrency. The MVP will include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Blockchain Token Development</strong> – Creation of a ERC-20 standard token, designed for security, transparency, and scalability, serving as the primary medium for the asset-backed cryptocurrency.</li>
                    <li><strong>Smart Contract Implementation</strong> – Development of automated smart contracts to manage tokenisation, asset registration, and investor transactions, ensuring a trustless and fully transparent system.</li>
                    <li><strong>Website & Mobile App</strong> – A user-friendly platform for seamless token transactions, investor engagement, and project updates, allowing backers to track progress and interact with the community.</li>
                    <li><strong>Legal Framework Drafting</strong> – Establishing a comprehensive legal structure to ensure regulatory compliance, protect investors, and define clear ownership rights for tokenised assets.</li>
                  </ul>
                  <p>
                    This phase lays the groundwork for the full-scale implementation of GaeaCoin, ensuring that both technical innovation and legal security are in place before moving to the next development stage.
                  </p>
                </section>

                {/* Phase 2 */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 theme-text-primary">Phase 2: Delivering a Proof-of-Concept</h2>
                  <p>
                    In Phase 2, we will acquire the first asset, tokenise it, and generate revenue through carbon credit sales, effectively demonstrating the viability of our economic and technological model. This proof-of-concept will serve as a validation of our strategy and provide real-world data to refine the system before scaling further. Key tasks in this phase include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>First Asset Acquisition & Tokenisation</strong> – Purchasing and registering the first nature reserve, tokenising it on the blockchain, and establishing transparent ownership records.</li>
                    <li><strong>Carbon Credit Generation & Sales</strong> – Issuing and verifying carbon credits based on the acquired land's sequestration potential and preparing them for sale on a recognized carbon trading platform to generate initial revenue.</li>
                    <li><strong>Software Development & User Testing</strong> – Iterating on the MVP based on feedback from early adopters, refining the blockchain token, smart contracts, and user interfaces to improve usability and security.</li>
                    <li><strong>Habitat Pricing Formula Development</strong> – Collaborating with ecologists and economists to establish a scientific pricing model for natural assets, incorporating factors such as biodiversity, carbon sequestration potential, and conservation value to ensure fair and accurate valuations.</li>
                    <li><strong>Automated Anomaly Detection for Asset Monitoring</strong> – Developing a machine learning model to analyse satellite images from the Copernicus program, allowing automated detection of ecological disturbances to protect tokenised assets.</li>
                    <li><strong>Core Team Assembly & Kick-Off Retreat</strong> – Organising a 3-day retreat to bring together key developers, ecologists, legal experts, and strategists, aligning the team on goals, fostering collaboration, and reinforcing the project's vision and mission.</li>
                  </ul>
                  <p>
                    By the end of this phase, we will have real-world validation of GaeaCoin's model, including a successfully tokenised nature reserve, generated revenue from carbon credit sales, and a refined technical and operational foundation. This will set the stage for scaling the project and attracting further investment.
                  </p>
                </section>

                {/* Phase 3 */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 theme-text-primary">Phase 3: Scale-Up</h2>
                  <p>
                    With a successful proof-of-concept in place, Phase 3 focuses on expanding the Gaea ecosystem, growing the user base, tokenised land portfolio, and financial sustainability. Over 24 months, we will scale operations, enhance liquidity, and establish GaeaCoin as a widely recognised currency for conservation-driven finance. Key objectives include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Recruit Key Personnel</strong> – Assemble a highly skilled core team, including blockchain developers, an ecologist, a lawyer, a project manager, and marketing specialists. These professionals will ensure technical development, legal compliance, and effective outreach, forming the backbone of the project's expansion.</li>
                    <li><strong>Define Roles and Processes</strong> – Establish clear roles, responsibilities, and workflows within the team, ensuring structured coordination, accountability, and efficiency as the organisation scales.</li>
                    <li><strong>Launch Platform and Mobile App</strong> – Fully deploy the Gaea platform and mobile app for public use, ensuring it is technically robust, scalable, and user-friendly to facilitate seamless transactions and investor engagement.</li>
                    <li><strong>Execute Marketing Campaigns</strong> – Implement targeted marketing initiatives to raise awareness, drive adoption, and highlight the ethical and financial benefits of GaeaCoin. These efforts will attract eco-conscious investors, businesses, and conservation organisations, positioning GaeaCoin as a trusted and impactful project.</li>
                    <li><strong>Expand Portfolio of Tokenised Nature Reserves</strong> – Partner with conservation groups and landowners to purchase and tokenise additional nature reserves, increasing the number of available tokens and proving the scalability of the model.</li>
                    <li><strong>Build Community Engagement</strong> – Foster a thriving, engaged community of users and investors through webinars, newsletters, social media interaction, and transparent project updates. Active engagement will strengthen trust, advocacy, and long-term participation.</li>
                    <li><strong>Ensure Liquidity of Tokens</strong> – Increase token liquidity by generating a sufficient supply to support an active trading market. List GaeaCoin on major cryptocurrency exchanges, improving accessibility, visibility, and adoption.</li>
                  </ul>
                  <p>
                    By the end of Phase 3, GaeaCoin will have established itself as a sustainable, functional financial system, with a growing portfolio of protected nature reserves, a vibrant global user base, and a stable market for trading and investment. This momentum will set the stage for the final phase: achieving full self-sustainability.
                  </p>
                </section>

                {/* Phase 4 */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 theme-text-primary">Phase 4: Sustainability and Revenue Growth</h2>
                  <p>
                    With a strong foundation established, Phase 4 focuses on long-term sustainability and financial self-sufficiency. The goal is to transition Gaea into a fully independent ecosystem, where carbon credit revenue and corporate partnerships provide stable funding for ongoing operations, expansions, and conservation efforts. This phase ensures that GaeaCoin remains a viable financial instrument while actively driving large-scale ecological preservation.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Build a Professional Sales Team</strong> – Recruit and train a dedicated sales team to focus on selling GaeaCoin tokens and carbon credits to corporations looking to offset their emissions. This team will play a crucial role in scaling revenue generation and increasing adoption among institutional investors.</li>
                    <li><strong>Engage Corporate Partners</strong> – Establish strategic partnerships with corporations committed to sustainability, ESG goals, and carbon neutrality. By emphasising the CSR (Corporate Social Responsibility) benefits of GaeaCoin, we will position it as a powerful tool for ethical investment and environmental impact.</li>
                    <li><strong>Expand Property Acquisitions</strong> – Reinvest revenue into purchasing and tokenising additional nature reserves, increasing the volume of protected land. Strengthen monitoring systems to ensure the integrity and longevity of acquired assets, reinforcing investor confidence.</li>
                    <li><strong>Enhance Carbon Credit Sales</strong> – Scale up carbon credit generation and sales, creating a steady revenue stream that funds future acquisitions, operational costs, and platform improvements. This will solidify Gaea's position in the global carbon market.</li>
                    <li><strong>Diversify Revenue Streams</strong> – Explore additional revenue opportunities, such as licensing the GaeaCoin tokenisation model to other conservation projects, developing consulting services in sustainable finance, and integrating new market mechanisms to expand Gaea's impact and reach.</li>
                  </ul>
                  <p>
                    By the end of Phase 4, Gaea will have achieved financial sustainability, securing long-term conservation funding while continuing to scale operations.
                  </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
