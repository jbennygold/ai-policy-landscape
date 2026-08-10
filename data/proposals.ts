import { Proposal } from "../lib/types";

export const proposals: Proposal[] = [
  {
    slug: "wh-framework",
    name: "White House AI Legislative Framework",
    shortName: "WH Framework",
    sponsor: "White House",
    year: "2026",
    color: "#6366f1",
    primaryFrame: "Innovation and competitiveness",
    summary:
      "The White House released legislative recommendations outlining a National Policy Framework for Artificial Intelligence, structured around seven pillars addressed to Congress. The framework covers child safety, community protection, intellectual property, anti-censorship, innovation, workforce, and federal preemption. It positions state regulation as the primary threat to U.S. competitiveness and frames preemption as the central legislative priority.",
    keyProvisions: [
      "Commercially reasonable age-assurance requirements and child safety protections",
      "Residential ratepayers must not bear increased electricity costs from data centers",
      "Regulatory sandboxes and federal datasets made AI-ready for startups",
      "Preemption of state AI laws that impose undue burdens on AI development",
      "Non-regulatory workforce training and education incorporation",
      "Federal digital replica protection framework and collective licensing support",
    ],
    regulatoryPhilosophy:
      "Light-touch, innovation-first. The framework explicitly avoids creating a new regulatory body or mandatory compliance regime for AI developers. Enforcement of existing laws, not new AI-specific mandates, is the preferred mechanism.",
    strengths: [
      "Protects residential ratepayers from bearing data center electricity costs, addressing a concrete consumer harm that other proposals ignore",
      "Regulatory sandboxes and AI-ready federal datasets give startups access to compute and data resources otherwise monopolized by large incumbents",
      "Preserves state police powers for fraud, child protection, and consumer protection, maintaining proven enforcement mechanisms",
      "Federal digital replica protection and collective licensing support address creator concerns without imposing rigid copyright mandates",
      "Clarity on preemption reduces compliance fragmentation for companies operating across multiple states",
    ],
    weaknesses: [
      "Amounts to a regulatory blank check for the AI industry — no new mandatory obligations, no new enforcement authority, and no accountability mechanisms for harms that existing laws were never designed to address",
      "Preemption of state laws strips the only governments actually regulating AI of their authority, while offering nothing meaningful in return at the federal level",
      "Conspicuously silent on worker displacement — offering only 'non-regulatory' training suggestions while entire job categories face elimination",
      "Defers copyright questions to courts, effectively stalling protections for creators whose work is already being used to train models without compensation",
      "The 'innovation-first' framing is indistinguishable from the lobbying position of the companies it would regulate, raising serious questions about regulatory capture",
    ],
    layers: {
      incidence: {
        frontier: "none",
        apps: "indirect",
        hyperscalers: "secondary",
        chips: "none",
      },
      base:
        "Data center electricity cost allocation; age assurance",
      note:
        "A framework whose net effect is to remove cost rather than impose it. Preemption and regulatory sandboxes are transfers toward the frontier and app layers. The only genuine burden is on the hyperscalers, through the requirement that residential ratepayers not absorb data center electricity costs, which converts a cost the buildout currently externalizes into one the builder carries. Age assurance reaches consumer-facing apps as a compliance cost.",
    },
    chartPositions: {
      "enforcement-scope": { x: 20, y: 25 },
      "prevention-authority": { x: 75, y: 25 },
      "innovation-worker": { x: 20, y: 85 },
      "preemption-obligations": { x: 20, y: 90 },
    },
  },
  {
    slug: "wh-ai-eo",
    name: "Promoting Advanced AI Innovation and Security (Executive Order)",
    shortName: "WH AI EO",
    sponsor: "President Trump (Executive Order)",
    year: "2026",
    color: "#475569",
    primaryFrame: "Deregulation + national-security cyber",
    summary:
      "A signed executive order (June 2, 2026) directing the federal government to deploy advanced AI for cyber defense while explicitly disclaiming any authority to regulate private AI development — framing deregulation itself as innovation policy. Operationally it is a cybersecurity-and-national-security instrument: it orders agencies (Defense, DHS/CISA, Treasury, NSA, OMB) to harden federal and critical-infrastructure systems within 30–60 days, creates an interagency AI Cybersecurity Clearinghouse for vulnerability scanning and patch coordination, and establishes classified NSA-led benchmarking to designate 'covered frontier models' by their cyber capabilities. It invites developers into a voluntary framework offering 30-day pre-release federal access to frontier models (with IP and confidentiality protections), but states emphatically that nothing in it authorizes any 'mandatory governmental licensing, preclearance, or permitting' for AI development or release. The Attorney General is directed to prioritize prosecution of AI-enabled computer crimes under existing statutes. Unlike the White House's legislative framework, it is operative now — but as an executive order it can be undone by a future president.",
    keyProvisions: [
      "Orders Defense, DHS/CISA, Treasury, NSA, and OMB to prioritize federal and critical-infrastructure cyber defense within 30–60 days, including AI-enabled defensive tools for rural hospitals, community banks, and local utilities",
      "Creates an interagency AI Cybersecurity Clearinghouse (Treasury/NSA/CISA) for voluntary vulnerability scanning, discovery, and patch coordination with the AI industry",
      "Establishes classified, NSA-led benchmarking to assess models' cyber capabilities and designate 'covered frontier models'",
      "Offers a voluntary framework for developers to give the government 30-day pre-release access to frontier models, with IP and confidentiality protections",
      "Explicitly prohibits any mandatory licensing, preclearance, or permitting requirement for AI model development or release",
      "Directs the Attorney General to prioritize criminal enforcement (18 U.S.C. §§ 1028, 1030, 1343) against AI-enabled unauthorized access, data theft, and fraud",
    ],
    regulatoryPhilosophy:
      "Deregulation as innovation policy, executed through national-security channels. The order treats burdensome regulation — not AI risk — as the primary threat to American leadership, and deliberately forecloses the licensing and preclearance regimes that safety advocates favor. Where it does engage frontier models, it does so through voluntary collaboration and classified cyber benchmarking aimed at national defense, not mandatory safety evaluation. It is an executive instrument: immediate and operative, but narrower and less durable than legislation, and confined largely to cyber defense and criminal enforcement rather than broad AI governance.",
    strengths: [
      "Concretely hardens federal and critical-infrastructure cybersecurity — including under-resourced targets like rural hospitals, community banks, and local utilities — against AI-enabled attacks",
      "The AI Cybersecurity Clearinghouse creates real interagency machinery for vulnerability discovery and coordinated patching, a tangible defensive capability",
      "Classified NSA benchmarking of frontier models' cyber capabilities gives the government genuine, security-grade visibility that private audits cannot replicate",
      "The voluntary 30-day pre-release access program offers a low-friction path for early government insight into frontier models without a heavy compliance regime",
      "Directing criminal enforcement against AI-enabled computer crime applies existing, proven statutes to new misuse rather than waiting for novel legislation",
    ],
    weaknesses: [
      "It is deregulation dressed as security — its central legal move is to foreclose mandatory licensing, preclearance, or permitting, ruling out the very tools that could prevent unsafe frontier deployment",
      "Everything aimed at developers is voluntary: a 30-day access 'invitation' with no obligation, no enforcement, and no consequence for declining",
      "The frontier-model lens is narrowly cyber — it benchmarks cyber capabilities for national defense while ignoring CBRN, loss-of-control, misalignment, consumer fraud, and labor impacts",
      "As an executive order it is inherently fragile: it creates no statutory institutions, is 'subject to available appropriations,' and can be rescinded by the next administration with a signature",
      "Routing frontier-model access through classified national-security channels concentrates early capability and trust among incumbents and the government, with little transparency or public accountability",
    ],
    layers: {
      incidence: {
        frontier: "indirect",
        apps: "none",
        hyperscalers: "none",
        chips: "none",
      },
      base:
        "None — the order forecloses mandatory obligations",
      note:
        "The order is unique on this map for assessing nothing on anyone. Its central legal move is to prohibit mandatory licensing, preclearance, or permitting, and its only contact with the frontier layer is a voluntary invitation to share pre-release access. No layer bears a cost it did not agree to, which is precisely the design.",
    },
    chartPositions: {
      "enforcement-scope": { x: 25, y: 15 },
      "prevention-authority": { x: 75, y: 30 },
      "innovation-worker": { x: 12, y: 88 },
      "preemption-obligations": { x: 15, y: 15 },
    },
  },
  {
    slug: "blackburn",
    name: "Blackburn TRUMP AMERICA AI Act",
    shortName: "Blackburn",
    sponsor: "Sen. Marsha Blackburn",
    year: "2026",
    color: "#dc2626",
    primaryFrame: "Comprehensive federal regulation",
    summary:
      "The most comprehensive federal AI bill to date, spanning 17 titles and hundreds of pages. Despite being framed as implementing the White House's deregulatory vision, the bill contains significantly more regulatory density than the White House framework suggests. It creates multiple enforcement pathways, mandatory reporting obligations, and a risk-based evaluation program.",
    keyProvisions: [
      "Duty of care requiring AI chatbot developers to exercise reasonable care in design and operation",
      "Quarterly AI-related workforce change disclosures to the Bureau of Labor Statistics",
      "Full repeal of Section 230 of the Communications Act",
      "Risk-based advanced AI evaluation program with penalties for non-participation",
      "Developer and deployer liability with a federal cause of action",
      "Federal preemption of state laws governing frontier AI risk management",
    ],
    regulatoryPhilosophy:
      "Comprehensive and interventionist, despite the deregulatory framing. The bill creates multiple enforcement pathways (FTC, state AGs, private right of action), mandatory reporting obligations, and a risk-based evaluation program. The tension between its stated purpose and its actual scope is one of its most notable features.",
    strengths: [
      "Creates a duty of care for AI chatbot developers, establishing a legal standard that does not currently exist in federal law",
      "Quarterly workforce change disclosures to BLS would generate the first systematic national data on AI-driven job displacement",
      "Multiple overlapping enforcement pathways — FTC, state AGs, and private right of action — ensure accountability cannot be blocked by a single captured regulator",
      "Risk-based evaluation program establishes pre-deployment accountability for the most dangerous systems",
      "Content provenance requirements and the NO FAKES Act address deepfakes and digital replicas with specific enforceable standards",
    ],
    weaknesses: [
      "A 17-title, hundreds-of-pages bill branded as 'deregulation' is an exercise in doublespeak — the gap between its stated purpose and actual scope undermines trust in the legislative process",
      "Full repeal of Section 230 would devastate small platforms and startups while doing nothing to address AI-specific harms, a reckless giveaway to trial lawyers",
      "The bill's sheer complexity makes it a lobbyist's playground — by the time it passes committee, industry carve-outs will render the strongest provisions toothless",
      "Aggressive federal preemption wipes out state laws that are already working, replacing democratic experimentation with a one-size-fits-all federal mandate",
      "Developer and deployer liability frameworks are so broadly drawn that they will chill open-source development and academic research, concentrating AI power further among deep-pocketed incumbents",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "primary",
        hyperscalers: "indirect",
        chips: "none",
      },
      base:
        "Developer and deployer conduct; Section 230 repeal",
      note:
        "The only proposal that names developers and deployers as separate liable parties, which lands it squarely on the frontier and app layers at once. Section 230 repeal is an app-layer event above all — it reaches every platform that hosts or surfaces AI output, not the labs that trained the model. Hyperscalers are touched only as pass-through, and the chip layer not at all.",
    },
    chartPositions: {
      "enforcement-scope": { x: 80, y: 85 },
      "prevention-authority": { x: 70, y: 70 },
      "innovation-worker": { x: 45, y: 50 },
      "preemption-obligations": { x: 85, y: 90 },
    },
  },
  {
    slug: "openai-lehane",
    name: "OpenAI / Chris Lehane Policy Position",
    shortName: "OpenAI/Lehane",
    sponsor: "OpenAI (Chris Lehane, Sasha Baker)",
    year: "2026",
    color: "#0891b2",
    primaryFrame: "Prevention-first safety",
    summary:
      "OpenAI advocates for a specific sequencing of governance: federal framework first, state alignment second, federal incentive third. The position endorses mandatory federal testing of frontier systems using classified government capabilities before deployment. CAISI would serve as the primary evaluative institution.",
    keyProvisions: [
      "Legislation requiring frontier labs to test systems using classified government capabilities",
      "National safety standards addressing catastrophic risks and child protection",
      "Targeted preemption contingent on a meaningful federal framework",
      "CAISI as the primary evaluative institution for pre-deployment testing",
      "State laws should include mechanisms recognizing federal testing satisfies state requirements",
      "Global AI Safety Institute network for coordinated evaluation methods",
    ],
    regulatoryPhilosophy:
      "Prevention-first with strong federal institutional capacity. OpenAI endorses a meaningful federal testing regime, not merely voluntary commitments, while arguing that only the federal government has the capabilities to implement effective pre-deployment evaluation. This positions them to the left of the White House on federal oversight while supporting preemption of state regulation.",
    strengths: [
      "Endorses mandatory federal pre-deployment testing, not just voluntary commitments — a stronger safety stance than most industry players",
      "Leveraging classified government capabilities for testing frontier systems would identify national security risks that private audits cannot",
      "The sequenced approach — federal framework first, then state alignment — offers a coherent path out of regulatory fragmentation",
      "CAISI as a cornerstone institution would create durable, non-partisan technical evaluation capacity",
      "Global AI Safety Institute network proposal addresses the international coordination gap that most domestic proposals ignore entirely",
    ],
    weaknesses: [
      "This is the fox designing the henhouse — an AI company writing the rules for its own industry, then positioning that as public safety leadership",
      "Conditional preemption is a Trojan horse: once states lose regulatory authority, the 'meaningful federal framework' it depends on may never materialize or may be gutted by industry lobbying",
      "Conspicuously silent on worker displacement, economic concentration, and distributional impacts — the issues that actually affect most Americans",
      "Classified testing creates an opaque system where the public has no way to verify that safety evaluations are rigorous or independent",
      "The position conveniently ensures that only the largest, best-resourced companies can navigate federal compliance, locking out smaller competitors and open-source alternatives",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "none",
        hyperscalers: "none",
        chips: "none",
      },
      base:
        "Frontier model developers, via mandatory pre-deployment testing",
      note:
        "Nominally the most burdensome proposal for the frontier layer, and proposed by a member of it. Mandatory classified testing is a fixed compliance cost, which is regressive across firm size: it is an annoyance at OpenAI's scale and a barrier at a startup's. This is the layer's characteristic move — accept regulation that raises the cost of entry — and no other layer pays anything.",
    },
    chartPositions: {
      "enforcement-scope": { x: 25, y: 30 },
      "prevention-authority": { x: 80, y: 90 },
      "innovation-worker": { x: 20, y: 80 },
      "preemption-obligations": { x: 30, y: 35 },
    },
  },
  {
    slug: "openai-industrial",
    name: "OpenAI — Industrial Policy for the Intelligence Age",
    shortName: "OpenAI Industrial",
    sponsor: "OpenAI",
    year: "2026",
    color: "#10b981",
    primaryFrame: "Industrial policy and shared prosperity",
    summary:
      "OpenAI's most expansive policy document to date, moving well beyond its earlier safety-focused position to propose a comprehensive industrial policy agenda for the transition to superintelligence. The document is organized around two pillars: building an open economy with broad participation and shared prosperity, and building a resilient society through safety systems, alignment, and governance. It proposes a Public Wealth Fund giving every citizen a stake in AI-driven growth, portable benefits decoupled from employers, adaptive safety nets with automatic triggers, a 32-hour workweek pilot, modernized taxation of capital over labor, and a global network of AI Safety Institutes. The framing explicitly invokes the Progressive Era and the New Deal as precedents for the scale of institutional response required.",
    keyProvisions: [
      "Public Wealth Fund providing every citizen a direct stake in AI-driven economic growth",
      "Adaptive safety nets that automatically scale up when displacement metrics exceed pre-defined thresholds",
      "32-hour / four-day workweek pilots with no loss in pay, converting AI efficiency gains into worker time",
      "Modernized tax base shifting from labor/payroll taxes toward capital gains, corporate income, and automated labor taxes",
      "Portable benefits (healthcare, retirement, training) decoupled from any single employer",
      "Pre- and post-deployment auditing of frontier models for CBRN risks, with CAISI as the anchor institution",
      "Global network of AI Safety Institutes for international information-sharing and coordinated evaluation",
      "Worker voice mechanisms giving employees formal input on workplace AI deployment",
    ],
    regulatoryPhilosophy:
      "Ambitious public-private industrial policy modeled on the Progressive Era and New Deal. The document treats AI not as a narrow technology policy problem but as a civilizational transition requiring new social contracts. It endorses market mechanisms but argues markets alone are insufficient, calling for government to shape incentives, build institutions, and redistribute gains. Notably, it couples strong safety and alignment proposals with equally strong economic redistribution mechanisms — a broader scope than any other industry position in the current debate.",
    strengths: [
      "The Public Wealth Fund is the most concrete mechanism proposed by any actor in this debate for ensuring citizens directly share in AI-driven economic growth, not just benefit indirectly through lower prices",
      "Adaptive safety nets with automatic triggers avoid the political paralysis of waiting for Congress to act during each wave of disruption — a genuinely novel institutional design",
      "Explicitly names OpenAI itself as a potential vector for wealth concentration, a rare instance of corporate self-awareness in a policy document",
      "The 32-hour workweek pilot and efficiency dividend proposals directly translate productivity gains into worker benefits, addressing the core 'who captures the surplus' question",
      "International coordination through a global AI Safety Institute network addresses the governance gap that purely domestic proposals cannot reach",
    ],
    weaknesses: [
      "This is the single most ambitious lobbying document in history disguised as progressive policy — OpenAI is writing the rules for the entire economy while positioning itself as the public's champion",
      "The Public Wealth Fund is deliberately vague on funding: 'policymakers and AI companies should work together to determine how to best seed the Fund' is a commitment to nothing",
      "Conspicuously avoids any mention of antitrust, corporate breakup, or structural limits on AI company power — the one intervention that would actually threaten OpenAI's market position",
      "The document calls for 'mission-aligned corporate governance' while OpenAI itself just completed a controversial conversion from nonprofit to capped-profit, undermining its credibility as a governance model",
      "Every proposal that could constrain OpenAI (auditing, testing) is scoped to 'a small number of companies and the most advanced models' — conveniently the regulatory moat that protects incumbents from competition",
    ],
    layers: {
      incidence: {
        frontier: "secondary",
        apps: "indirect",
        hyperscalers: "primary",
        chips: "secondary",
      },
      base:
        "Capital ownership, via modernized taxation of capital over labor",
      note:
        "The document's tax proposal is the tell. A frontier lab proposing to shift the burden from labor toward capital is proposing to tax the layers that own physical assets more heavily than the one that increasingly rents them. Incidence lands on the hyperscalers and, through them, on the chip layer that sells the assets. CBRN auditing is a real but narrow frontier cost, scoped to a small number of companies and models.",
    },
    chartPositions: {
      "enforcement-scope": { x: 60, y: 55 },
      "prevention-authority": { x: 70, y: 75 },
      "innovation-worker": { x: 70, y: 70 },
      "preemption-obligations": { x: 55, y: 45 },
    },
  },
  {
    slug: "openai-blueprint",
    name: "OpenAI — Democratic Governance of Frontier AI: A Blueprint for a Federal Framework",
    shortName: "OpenAI Blueprint",
    sponsor: "OpenAI",
    year: "2026",
    color: "#0e7490",
    primaryFrame: "Reverse federalism + frontier safety",
    summary:
      "OpenAI's June 2026 blueprint for federal frontier-AI governance, framed around 'democratic governance' — the principle that democratic governments, not private companies, should set the rules. It advances a three-part strategy. First, 'reverse federalism': Congress should codify the emerging consensus from state frontier-safety laws (California's SB 53, New York's RAISE Act, Illinois's SB 315) into a national framework — severe-risk evaluations (cyber, CBRN, loss-of-control, misalignment, and recursive self-improvement), public safety frameworks and transparency reports, annual third-party audits, critical-incident reporting, model-weight security, and whistleblower protections — and then preempt state laws covering the same frontier-safety risks, while leaving states authority over youth protection, energy and environment, and AI literacy. Second, build CAISI into the premier federal institution for frontier evaluation, with statutory authority, CHIPS-style hiring, classified compute, and a mandatory pre-release evaluation of the most capable models — though CAISI would only evaluate and recommend, never approve or block deployment, and developers could ship if CAISI misses a statutory deadline. Third, a whole-of-government resilience strategy: international safety coordination, compute-advantage protection via export controls, a ban on government use of unevaluated frontier systems, and biodefense and cyber investment so defense outpaces offense. Recursive self-improvement (RSI) is treated as the defining governance challenge of the decade.",
    keyProvisions: [
      "'Reverse federalism': codify the state frontier-safety consensus (SB 53, RAISE, Illinois SB 315) into a federal framework, then preempt state laws covering the same frontier-safety risks",
      "Mandatory severe-risk evaluations and mitigations for cyber, CBRN, loss-of-control, misalignment, and recursive self-improvement (RSI), plus public frontier-safety frameworks and transparency reports",
      "Annual independent third-party audits of large frontier developers, critical safety-incident reporting, model-weight security, and whistleblower protections",
      "Build CAISI into the premier federal frontier institution — statutory authority, CHIPS-style hiring, classified compute, and national-security data access",
      "Mandatory CAISI pre-release evaluation of the most capable models, but CAISI only evaluates and recommends (never approves or blocks); developers may deploy if CAISI misses a statutory deadline",
      "Whole-of-government resilience: international safety coordination, export controls to protect the compute advantage, a ban on government use of unevaluated frontier systems, and defense-outpaces-offense investment",
    ],
    regulatoryPhilosophy:
      "Prevention-first frontier safety delivered through federal institutions and 'democratic governance' rhetoric. The blueprint accepts mandatory pre-release evaluation, third-party audits, and incident reporting — a genuine regulatory regime — but deliberately caps the state's hand: CAISI advises rather than gatekeeps, deployment decisions stay with developers, and missed deadlines default to release. It is the most detailed industry articulation yet of how to convert the state-law consensus into a single federal standard, paired with conditional preemption. Compared to OpenAI's earlier Lehane position it is more institutionally specific and RSI-focused; compared to its Industrial Policy document it drops the economic-redistribution agenda and narrows to catastrophic national-security risk.",
    strengths: [
      "The most concrete industry roadmap to date for turning the SB 53 / RAISE / SB 315 state consensus into durable federal law, with specific institutional design for CAISI",
      "Endorses genuinely mandatory measures — pre-release evaluation, annual third-party audits, incident reporting, model-weight security, and whistleblower protections — not merely voluntary commitments",
      "Foregrounds recursive self-improvement (RSI) and loss-of-control as first-order governance problems, pushing measurement and monitoring that the rest of the debate largely ignores",
      "Explicitly rejects blanket liability safe harbors and insists accountability survive for severe harms — a notable concession from a frontier developer",
      "The resilience pillar — biodefense, cybersecurity, export controls, and a multi-source evaluation ecosystem rather than a single gatekeeper — addresses national-security gaps most domestic proposals skip",
    ],
    weaknesses: [
      "It is still the regulated industry drafting its own rulebook — and the design conveniently routes oversight through evaluation and disclosure rather than any authority that could actually stop OpenAI from shipping a model",
      "CAISI 'evaluates and recommends' but cannot approve or block, and developers may deploy if CAISI misses a deadline — a safety regime with the brakes deliberately disconnected",
      "Preemption is the payoff: states surrender authority over frontier-safety risks in exchange for a federal framework whose stringency OpenAI is simultaneously lobbying to shape — the same conditional-preemption Trojan horse as its earlier position",
      "The narrow CBRN / cyber / RSI catastrophic-risk framing sidelines the harms people actually experience — discrimination, fraud, labor displacement, deepfakes — and drops the worker and redistribution agenda OpenAI itself championed in its Industrial Policy document",
      "Heavy reliance on classified evaluation and trade-secret redactions leaves the public unable to verify whether any of this 'democratic governance' is actually rigorous or independent",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "none",
        hyperscalers: "none",
        chips: "secondary",
      },
      base:
        "Frontier developers above a capability threshold; export controls",
      note:
        "Evaluations, third-party audits, incident reporting, and weight security all assess the frontier layer, and the blueprint accepts them in exchange for preemption. The overlooked line item is export controls to protect the compute advantage: it is the only instrument anywhere on this map that reaches the chip layer, and it arrives framed as national security rather than as revenue, which is why the chip layer opposes it using the same patriotic vocabulary as its proponents.",
    },
    chartPositions: {
      "enforcement-scope": { x: 22, y: 62 },
      "prevention-authority": { x: 82, y: 82 },
      "innovation-worker": { x: 15, y: 82 },
      "preemption-obligations": { x: 58, y: 60 },
    },
    contrast: {
      slug: "gaaia",
      title: "OpenAI Blueprint vs. GAAIA",
      body: "The Blueprint and Rep. Obernolte's GAAIA draft share an architecture — a statutory CAISI, the SB 53 / RAISE transparency model, and third-party verification (the Blueprint's certified assessors mirror GAAIA's licensed IVOs). They diverge on teeth and scope. The Blueprint adds a mandatory CAISI pre-release evaluation of the most capable models — but one that only recommends, never blocks — and confines itself to catastrophic CBRN, cyber, and recursive-self-improvement risk. GAAIA has no evaluation gate at all, yet enforces disclosure with hard tools ($1M/day fines, federal and state AG injunctions) and spans a far wider surface, including the workforce and fraud provisions the Blueprint omits. And where the Blueprint is industry advocacy, GAAIA is operative legislative text.",
    },
  },
  {
    slug: "cht-roadmap",
    name: "Center for Humane Technology — The AI Roadmap",
    shortName: "CHT Roadmap",
    sponsor: "Center for Humane Technology",
    year: "2026",
    color: "#9333ea",
    primaryFrame: "Humane technology and public interest",
    summary:
      "The Center for Humane Technology's most comprehensive AI policy document, structured around seven principles for how AI should be built, deployed, and governed. The Roadmap operates across three intervention domains -- norms, laws, and product design -- arguing that no single reform is sufficient and that change requires layered, simultaneous pressure on the AI development paradigm. CHT explicitly draws parallels to the Big Tobacco and nuclear weapons movements, framing its theory of change as identifying high-leverage intervention points and applying coordinated civil society pressure across them. Unlike industry or legislative proposals, this is a civil society document setting expectations for what governance should look like rather than introducing bills.",
    keyProvisions: [
      "Mandatory pre-deployment testing and risk management for AI systems with standardized reporting",
      "Federal whistleblower protections for all AI employees and contractors (not just catastrophic risk)",
      "Statutory clarification that AI is a product subject to product liability, not a service or legal person",
      "Federal chatbot design standards focused on psychosocial harms, with enhanced protections for minors",
      "Tax incentives flipping the current capital-over-labor bias to reward worker retention and upskilling",
      "Right to cognitive liberty, expanded publicity rights, and firm limits on biometric surveillance",
      "International red lines on recursive self-improvement and autonomous weapons, with technical verification",
      "Upgraded antitrust enforcement targeting AI consolidation, lobbying transparency, and democratic ownership models",
    ],
    regulatoryPhilosophy:
      "Civil-society systems-change approach combining norms, laws, and product design. CHT explicitly rejects the framing that any single intervention can fix AI, arguing instead for layered pressure modeled on the campaigns against Big Tobacco and nuclear weapons. The philosophy treats the AI race itself -- the 'if I don't build it, someone else will' incentive structure -- as the root problem, and seeks to change the underlying paradigm rather than negotiate within it. Notably ecumenical: it endorses product liability (a market mechanism), antitrust reform (a structural mechanism), and international red lines (a treaty mechanism) as complementary rather than competing approaches.",
    strengths: [
      "The only proposal that explicitly addresses anthropomorphic chatbot design and psychosocial harms with concrete product-design standards, an area every legislative proposal sidesteps",
      "Treating AI as a product subject to product liability is a legally elegant solution that leverages centuries of common-law accountability without requiring a new regulatory regime",
      "The norms-laws-design framework recognizes that legislation alone cannot move a multi-trillion-dollar industry, building in cultural and technical change as parallel levers",
      "Advances cognitive liberty and a right to think free from surveillance as a new constitutional category — the most ambitious rights framework in any AI proposal",
      "Whistleblower protections extending to all AI employees (not just those working on catastrophic risk) acknowledges that the people closest to harm have the greatest knowledge to surface it",
    ],
    weaknesses: [
      "A 36-page roadmap of principles is not legislation — CHT names dozens of bills it supports without committing to a single legislative vehicle, hedging on every hard tradeoff",
      "The 'AI is a product' framing collapses when applied to general-purpose foundation models — strict product liability would functionally ban open-source release and end academic research",
      "Calls for international red lines on recursive self-improvement while offering no enforcement mechanism beyond moral suasion — the same mechanism that has failed to constrain frontier labs domestically",
      "The norms-laws-design theory of change is vague enough to be unfalsifiable — every advocacy outcome can be claimed as progress while the AI race accelerates regardless",
      "Sidesteps the question of who decides what 'humane' means — by substituting CHT's editorial judgment for democratic process, it risks the same paternalism it accuses tech companies of",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "primary",
        hyperscalers: "secondary",
        chips: "indirect",
      },
      base:
        "Product liability; engagement-driven design; capital expenditure",
      note:
        "Reaches the frontier through product liability and mandatory testing, and the app layer through design standards and duty of care for chatbots — the app layer is arguably the real target, since CHT's core objection is to engagement optimization rather than to model capability. The proposed tax flip, rewarding labor retention over capital expenditure, is a hyperscaler-incidence instrument attached to a consumer-protection agenda.",
    },
    chartPositions: {
      "enforcement-scope": { x: 75, y: 80 },
      "prevention-authority": { x: 50, y: 75 },
      "innovation-worker": { x: 75, y: 30 },
      "preemption-obligations": { x: 75, y: 25 },
    },
  },
  {
    slug: "warner",
    name: "Sen. Mark Warner — Comprehensive AI Legislative Agenda",
    shortName: "Warner",
    sponsor:
      "Sen. Mark Warner, Vice Chairman of the Senate Intelligence Committee (with Sens. Hawley, Rounds, Young, and others)",
    year: "2026",
    color: "#0284c7",
    primaryFrame: "Responsible innovation across four pillars",
    summary:
      "Rolled out July 21, 2026, Warner's agenda is the most legislatively dense package any single member of Congress has put behind AI — seven bills organized around four stated priorities: building AI infrastructure responsibly, promoting competition and safety, preparing workers for economic disruption, and strengthening America's national security advantage. The framing is explicitly anti-tradeoff: \"Artificial intelligence will reshape nearly every aspect of our economy and society. The only question is whether Congress is going to help shape that future or spend the next decade scrambling to catch up.\" On infrastructure, the Data Center Tax Accountability and Disclosure Act forces large AI data centers to publish energy, water, emissions, and backup generation data, and conditions federal bonus depreciation on meeting efficiency standards — with the revenue from limiting that depreciation dedicated to a National Workforce Transition Fund. On competition and safety, the AI AGENT Act builds a rights-and-duties regime for consumer-facing AI agents accessing major platforms, and the SAFE AI Act bans federal procurement of models that generate CSAM or non-consensual intimate imagery while creating private remedies for survivors. On national security, the Secure AI Development Act mandates secure testing environments for advanced models before deployment and imports aviation-style voluntary incident reporting into AI. The agenda builds on Warner's earlier workforce measures — the AI-Related Job Impacts Clarity Act with Sen. Hawley, the Economy of the Future Commission with Sen. Rounds, and the Investing in American Workers Act — converting what had been a data-and-commission strategy into a full regulatory program.",
    keyProvisions: [
      "Data Center Tax Accountability and Disclosure Act: mandatory public disclosure of energy consumption, water usage, emissions, and backup generation by large AI data centers, with federal bonus depreciation benefits conditioned on meeting efficiency and sustainability standards (backed by the Chesapeake Bay Foundation, Sierra Club, and Virginia League of Conservation Voters)",
      "National Workforce Transition Fund: dedicates the revenue from limiting data center bonus depreciation to worker retraining, individual training accounts, employer retention grants, tuition assistance, workforce data modernization, and pilot programs — an explicit pay-for linking AI infrastructure subsidies to AI displacement",
      "AI AGENT Act (Artificial Intelligence Access, Gatekeeper Exchange, and Nondiscriminatory Transfer Act): establishes rights and responsibilities for consumer-facing AI agents, permitting trusted agents to access major platforms while requiring them to act in the user's interest, secure personal data, and meet privacy and cybersecurity standards; directs NIST to write the technical standards and creates an FTC registry",
      "SAFE AI Act (Safeguarding Against Fabricated Exploitation Through Artificial Intelligence Act): NIST-led testing of AI models, a ban on federal procurement of systems that generate child sexual abuse material or non-consensual intimate images, prohibition of circumvention software, and private legal remedies for survivors",
      "Secure AI Development Act: mandatory secure testing environments for advanced models before deployment, modernized federal cybersecurity vulnerability identification, structured government–developer information sharing, voluntary safety incident reporting modeled on aviation protocols, and hardened protections against foreign adversaries targeting AI technologies and supply chains",
      "Financial Artificial Intelligence Risk Reduction Act (bipartisan, to be reintroduced): requires financial regulators to address the risk that AI-generated content disrupts markets",
      "PHD Talent Act: expands undergraduate-to-doctoral pathways in AI, cybersecurity, semiconductors, and quantum computing (endorsed by Virginia Tech, Purdue, UVA, and the Southeastern Universities Research Association)",
      "AI-Related Job Impacts Clarity Act (with Sen. Hawley): quarterly disclosures from publicly traded companies and federal agencies to the Bureau of Labor Statistics on AI-driven layoffs, hires, unfilled positions, and retraining, each tagged with NAICS codes, with rulemaking authority to extend reporting to large private companies",
      "Economy of the Future Commission Act (S.4046, with Sen. Rounds): a 10-member bipartisan legislative commission with subpoena power, required to deliver 5- and 10-year AI employment projections by 6-digit NAICS code within 7 months and consensus legislative recommendations within 13 months",
      "Investing in American Workers Act: employer tax credits for worker training",
      "Bipartisan letter (Warner, Hawley, Banks, Hassan, Kelly, Kaine, Hickenlooper, Young, Rounds) directing BLS and Census to add AI questions to the CPS, JOLTS, and the National Longitudinal Survey",
    ],
    regulatoryPhilosophy:
      "Regulate the seams, not the models. Warner's agenda conspicuously declines the two positions that dominate the federal debate — it neither imposes a licensing or liability regime on frontier developers nor endorses preemption of the states. Instead it attaches obligations at the points where AI touches something Congress already regulates: the tax code (bonus depreciation for data centers), federal procurement (the CSAM and NCII ban), platform access (the agent registry), financial market integrity, immigration and education pipelines, and classified national security infrastructure. The pay-for structure is the tell — the same provision that limits a tax subsidy for AI infrastructure funds the retraining of the workers that infrastructure displaces, making the agenda internally financed rather than dependent on new revenue. As Vice Chairman of the Intelligence Committee, Warner also treats AI security as a supply chain and counterintelligence problem rather than an alignment problem, which is why the Secure AI Development Act reaches for aviation's incident-reporting model instead of a safety regulator.",
    strengths: [
      "Seven bills spanning tax, procurement, competition, workforce, education, financial regulation, and national security make this the broadest legislative agenda from any single member — it addresses infrastructure, environment, and security gaps that most AI proposals in this landscape leave entirely blank",
      "Conditioning bonus depreciation on efficiency standards and dedicating the recovered revenue to worker transition is the rare AI worker proposal that identifies its own funding source, avoiding the unfunded-aspiration problem that afflicts the Kelly Horizon Fund and most commission-based approaches",
      "Mandatory data center disclosure of energy, water, and emissions is the most concrete response yet to the environmental footprint of AI infrastructure, an area this landscape otherwise treats only glancingly",
      "The AI AGENT Act anticipates a market structure problem before it hardens — whether platforms can exclude third-party agents — rather than litigating it a decade later, and pairs it with NIST standards and an FTC registry instead of a new regulator",
      "The procurement lever in the SAFE AI Act is enforceable without new regulatory machinery: the federal government simply declines to buy, which sidesteps the constitutional and administrative fights that a content mandate would trigger",
      "Warner's Intelligence Committee position gives the Secure AI Development Act credibility on classified testing environments and adversary supply chain threats that a non-committee sponsor could not claim, and the aviation incident-reporting model is a proven design for surfacing near-misses without punitive exposure",
    ],
    weaknesses: [
      "Seven separate bills across at least five committees of jurisdiction is a strategy for producing press releases, not laws — the agenda has no vehicle, no floor path, and no named Republican co-sponsors on the new measures, and its most substantive pieces will die in committee separately",
      "Regulating at the seams means never regulating the thing itself: nothing in the agenda constrains what a frontier model may do once it is deployed commercially, so the entire question of catastrophic capability is handed to a voluntary reporting scheme",
      "Voluntary safety incident reporting modeled on aviation misreads the analogy — aviation's system works because the NTSB has subpoena power, mandatory accident reporting, and grounding authority, none of which this bill provides",
      "Conditioning tax benefits on efficiency standards invites exactly the compliance theater the data center industry has already perfected with renewable energy credits and water-use accounting, letting firms claim standards while shifting environmental costs onto host communities and ratepayers",
      "The agenda is silent on federal preemption, the deepest fault line in AI policy, which is a choice that allows Warner to avoid alienating either state attorneys general or the industry but leaves the central jurisdictional question unresolved",
      "Warner's earlier workforce package remains what it always was — a commission that will spend 13 months studying displacement while it happens, and quarterly corporate self-reports that companies will game by classifying AI-driven layoffs as ordinary restructuring",
      "For a package built on disclosure and accountability, exempting the Economy of the Future Commission from FACA and FOIA is a conspicuous carve-out from the transparency the agenda demands of everyone else",
    ],
    layers: {
      incidence: {
        frontier: "secondary",
        apps: "secondary",
        hyperscalers: "primary",
        chips: "none",
      },
      base:
        "Data center bonus depreciation, conditioned on efficiency standards",
      note:
        "The clearest hyperscaler-incidence proposal in the landscape, and the only one that names its base precisely. Conditioning bonus depreciation on efficiency standards and dedicating the recovered revenue to worker transition assesses the layer that owns the buildings and the machines. The AI AGENT Act reaches the app and platform layer through gatekeeper access rules, and secure testing environments reach the frontier, but the money comes from capacity.",
    },
    chartPositions: {
      "enforcement-scope": { x: 72, y: 68 },
      "prevention-authority": { x: 80, y: 58 },
      "innovation-worker": { x: 70, y: 65 },
      "preemption-obligations": { x: 65, y: 28 },
    },
  },
  {
    slug: "bores-dividend",
    name: "Alex Bores — The AI Dividend",
    shortName: "Bores AI Dividend",
    sponsor: "NY Assemblymember Alex Bores",
    year: "2026",
    color: "#f97316",
    primaryFrame: "Contingency-based economic insurance",
    summary:
      "A federal policy proposal from the New York Assemblymember who authored the RAISE Act, now pitching a contingency-based direct payment program designed to activate automatically if AI meaningfully displaces American workers. The AI Dividend is explicitly framed as 'fire insurance' — not a prediction that mass unemployment will occur, but preparation in case it does. The proposal is notable for three novel funding mechanisms: a token tax on AI computation, federal equity warrants in frontier AI companies (out-of-the-money, exercisable only if companies multiply dramatically in value), and tax reform eliminating the accelerated depreciation subsidy for AI capital that currently makes automation cheaper than hiring. Revenue flows to three buckets: direct payments to Americans, workforce transition and education investment, and public AI safety/oversight infrastructure. Bores frames the timing urgency around a closing political window — demanding equity stakes in AI companies after they have already captured the value is far harder than structuring it now.",
    keyProvisions: [
      "Direct payments to Americans triggered by economic conditions — sustained labor force participation declines, wage compression, or AI-driven productivity gains without corresponding job growth",
      "Token tax: a per-unit tax on AI computation (tokens) that scales automatically as AI adoption scales",
      "Federal equity warrants in frontier AI firms — out-of-the-money, exercisable only if companies multiply dramatically, creating a windfall for the public precisely when displacement is worst",
      "Tax reform eliminating accelerated depreciation for AI capital investment that displaces labor — fixing the current ~5% tax on robots vs. ~30% on hiring humans",
      "Revenue allocated three ways: direct payments, workforce transition/education, and public AI safety and oversight infrastructure",
      "Activation tied to clear economic triggers rather than political discretion, ensuring the program responds to real-world conditions",
    ],
    regulatoryPhilosophy:
      "Contingency-based economic insurance with automatic triggers. Bores explicitly avoids both the accelerationist claim that AI will only create jobs and the doomer claim that mass unemployment is certain. Instead, the framing is risk management: if there is even a meaningful probability of large-scale displacement, responsible governance requires preparation now while the political window is open and AI companies are still in early growth. The philosophy is closer to options pricing than traditional regulation — the equity warrants pay off precisely in the scenario where the dividend is most needed. Notable for treating the tax code as the primary policy lever: if AI substitutes for labor rather than complementing it, the current tax system is actively subsidizing job elimination.",
    strengths: [
      "The equity warrant structure is genuinely novel — it creates automatic fiscal alignment where the government's windfall is largest exactly when displacement is worst, without diluting AI company shares unless they succeed enormously",
      "The token tax is the first concrete proposal to tax AI at the unit of computation rather than the corporate level, creating a funding mechanism that scales automatically with adoption without requiring new legislation each cycle",
      "Framing as 'insurance, not punishment' is politically deft — it sidesteps the innovation-vs-regulation frame that paralyzes most AI policy debates and makes the proposal legible to both business and labor audiences",
      "The closing-window timing argument is substantively correct: structuring equity participation in AI companies is orders of magnitude easier before they reach $10T valuations than after",
      "Bores has actual legislative credibility on AI — he authored the RAISE Act that passed in New York, giving this proposal a concrete track record to point to rather than being purely aspirational",
    ],
    weaknesses: [
      "A state assemblymember's policy paper for a congressional race is not legislation — there are no bill numbers, no committee referrals, no CBO score, and no co-sponsors; this is a campaign document dressed up as policy",
      "The token tax is trivially evadable: AI companies would simply restructure computation to minimize taxable units, move inference offshore, or redefine what constitutes a 'token' — the analog of the carried-interest loophole for compute",
      "Federal equity warrants in private companies have no legal precedent and would face immediate Fifth Amendment takings challenges — the government cannot compel private equity participation without triggering constitutional litigation that would delay implementation by years",
      "Economic triggers sound precise but are politically manipulable in both directions — administrations hostile to the program can redefine thresholds to prevent activation, while sympathetic ones can cherry-pick metrics to trigger it prematurely",
      "The proposal is silent on how direct payments interact with existing safety net programs (SNAP, Medicaid, unemployment insurance, SSDI) — layering a new cash benefit on top of a patchwork system without addressing integration creates administrative chaos and potential benefit cliffs",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "primary",
        hyperscalers: "primary",
        chips: "indirect",
      },
      base:
        "Tokens consumed; AI capital depreciation; frontier enterprise value",
      note:
        "Three instruments, three different layers, which is why this proposal is hard to place and easy to misread as a single tax on AI. The token tax sounds like a tax on AI companies but is a tax on AI buyers, so its incidence is on the app layer and its enterprise customers. Eliminating accelerated depreciation for AI capital assesses whoever owns the machines, which is the hyperscalers. The equity warrants are the only instrument in this landscape aimed squarely and exclusively at the frontier layer.",
    },
    chartPositions: {
      "enforcement-scope": { x: 55, y: 40 },
      "prevention-authority": { x: 60, y: 20 },
      "innovation-worker": { x: 65, y: 50 },
      "preemption-obligations": { x: 50, y: 30 },
    },
  },
  {
    slug: "kelly",
    name: 'Sen. Mark Kelly — "AI for America" Roadmap',
    shortName: "Kelly",
    sponsor: "Sen. Mark Kelly",
    year: "2025",
    color: "#059669",
    primaryFrame: "Economic redistribution",
    summary:
      "The most developed Democratic proposal for AI governance, focusing on worker protection and economic redistribution alongside safety and competitiveness. Kelly treats AI primarily as an economic disruption problem requiring institutional investment, proposing an industry-funded AI Horizon Fund for worker retraining and infrastructure.",
    keyProvisions: [
      "AI Horizon Fund financed by leading AI companies for worker reinvestment and infrastructure",
      "Advance notice requirements for AI-driven workforce changes",
      "Strengthened safety nets including enhanced unemployment aid",
      "BLS data collection expansion on retraining outcomes and deployment patterns",
      "Advanced AI Security Readiness Act for security standards (bipartisan with Sen. Young)",
      "Guidance on AI use in NDAA for Pentagon-AI company relationships",
    ],
    regulatoryPhilosophy:
      "Government-facilitated redistribution and proactive workforce adjustment. Kelly's approach treats AI primarily as an economic disruption problem requiring institutional investment, not just a safety or innovation problem. His emphasis on industry-funded transition mechanisms rather than taxpayer-funded programs distinguishes him from both the White House and progressive approaches.",
    strengths: [
      "The AI Horizon Fund creates a concrete, industry-funded mechanism for worker transition rather than leaving displaced workers to fend for themselves",
      "Advance notice requirements for AI-driven workforce changes give workers and communities time to prepare, modeled on proven WARN Act principles",
      "BLS data collection expansion would finally give policymakers real numbers on AI-driven job creation, displacement, and retraining outcomes",
      "Bipartisan security provisions with Sen. Young demonstrate the proposal can attract cross-aisle support",
      "Industry-funded rather than taxpayer-funded transition mechanisms place costs on the companies profiting from disruption",
    ],
    weaknesses: [
      "The Horizon Fund is a slush fund with no teeth — voluntary industry 'contributions' to worker retraining is the same failed corporate social responsibility model that has never delivered meaningful results",
      "Completely ignores AI safety, pre-deployment testing, and catastrophic risk — as if the only problem with AI is that it costs jobs",
      "No enforcement mechanism for workforce change notifications — companies can simply ignore advance notice requirements the way they routinely ignore existing labor protections",
      "Frames AI disruption as a manageable adjustment problem when the scale of displacement could be civilizational, offering band-aids for bullet wounds",
      "The bipartisan framing is a way to avoid taking hard positions on preemption, liability, or any issue where industry might push back",
    ],
    layers: {
      incidence: {
        frontier: "unspecified",
        apps: "unspecified",
        hyperscalers: "unspecified",
        chips: "unspecified",
      },
      base:
        "Undefined — the Horizon Fund names a payer but not a base",
      note:
        "The Horizon Fund is described as financed by leading AI companies, which names a payer without naming a base. Assessed on revenue, it lands on the frontier. Assessed on compute consumed, it lands on the app layer and passes to the hyperscalers. Assessed on headcount displaced, it lands on enterprise adopters and reaches no AI company at all. The base is the whole policy, and it is currently blank — which makes this the proposal most worth pressing a sponsor on.",
    },
    chartPositions: {
      "enforcement-scope": { x: 65, y: 25 },
      "prevention-authority": { x: 65, y: 25 },
      "innovation-worker": { x: 80, y: 75 },
      "preemption-obligations": { x: 55, y: 30 },
    },
  },
  {
    slug: "sanders",
    name: "Sen. Bernie Sanders — AI Policy Proposals",
    shortName: "Sanders",
    sponsor: "Sen. Bernie Sanders",
    year: "2025",
    color: "#7c3aed",
    primaryFrame: "Democratic control",
    summary:
      "The most interventionist and structurally critical position in the current debate, treating AI governance as inseparable from questions of corporate power and wealth inequality. Sanders' proposals include a national data center moratorium, a robot tax, and calls to break up major AI companies.",
    keyProvisions: [
      "National moratorium on new data center construction",
      "Robot tax on corporations replacing workers with machines, revenue directed to displaced workers",
      "Break up OpenAI and other major AI companies as antidemocratic concentrations of power",
      "Increased employee ownership of AI companies",
      "Reduced workweek to distribute AI productivity gains",
      "Report warning AI could eliminate nearly 100 million U.S. jobs in a decade",
    ],
    regulatoryPhilosophy:
      "Structural intervention and democratic control. Sanders views AI not as a technology policy problem but as a power and inequality problem. His proposals -- moratoriums, breakups, robot taxes -- are tools of political economy, not technical governance. He is the only major voice calling for a pause in AI infrastructure buildout.",
    strengths: [
      "The only proposal that addresses concentration of corporate power in AI — breaking up dominant companies would restore competitive dynamics",
      "A robot tax directly links automation profits to displaced worker support, creating an automatic funding mechanism that scales with disruption",
      "The data center moratorium is the only proposal that takes environmental costs of AI infrastructure seriously",
      "Employee ownership provisions would distribute AI wealth gains more broadly rather than concentrating them among shareholders and executives",
      "Sanders' 100-million-jobs report forces an honest conversation about displacement scale that other proposals carefully avoid",
    ],
    weaknesses: [
      "A national data center moratorium would hand AI leadership to China on a silver platter — unilateral disarmament in the most consequential technology race of the century",
      "Breaking up AI companies shows a fundamental misunderstanding of how AI development works — scale and compute concentration are technical requirements, not just corporate choices",
      "The robot tax would drive AI investment offshore and punish companies for improving productivity, the engine of economic growth that has raised living standards for centuries",
      "None of these proposals have any realistic path to passage — they are messaging documents for a presidential campaign, not serious legislative efforts",
      "A reduced workweek mandate ignores that many AI-augmented workers are more productive and want to work more, not less — this is paternalism dressed up as solidarity",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "indirect",
        hyperscalers: "primary",
        chips: "secondary",
      },
      base:
        "Frontier development and data center buildout, via moratorium",
      note:
        "A moratorium aimed at infrastructure rather than models splits its incidence between the frontier layer, whose development it halts, and the hyperscalers, who carry nearly all of the physical exposure and hold the lease commitments. Antitrust breakups target frontier and platform concentration. The chip layer is the quiet loser: a pause collapses the demand curve it sells into, which is why it is the one layer that will say so out loud.",
    },
    chartPositions: {
      "enforcement-scope": { x: 80, y: 75 },
      "prevention-authority": { x: 30, y: 30 },
      "innovation-worker": { x: 85, y: 15 },
      "preemption-obligations": { x: 80, y: 15 },
    },
  },
  {
    slug: "khanna",
    name: 'Rep. Ro Khanna — "AI for the People" Manifesto',
    shortName: "Khanna",
    sponsor: "Rep. Ro Khanna",
    year: "2026",
    color: "#d97706",
    primaryFrame: "AI democratism and economic redistribution",
    summary:
      "Khanna's April 2026 manifesto in The Nation, building on his earlier Seven Principles but substantially more developed and politically explicit. Self-identifying as an 'AI democratist' (neither accelerationist nor doomer), Khanna frames AI policy as inseparable from the broader fight against billionaire wealth concentration in a 'new Gilded Age.' Notably published as a Silicon Valley representative who has co-hosted town halls with Sen. Bernie Sanders on AI oligarchy, the piece invokes FDR's New Deal as the template for the scale of response required and proposes a Future Workforce Administration funded by a wealth tax. Khanna explicitly attacks Trump's December 2025 executive order authorizing the DOJ to sue states over AI safety regulations.",
    keyProvisions: [
      "Keep humans in the loop — explicit protections for the 3.6M truck drivers facing autonomous vehicle displacement, modeled on aviation pilot requirements",
      "Mandatory collective bargaining at large companies on AI deployment, profit-sharing, and shorter workweeks",
      "Fix the tax code's anti-human bias — robots get accelerated depreciation (~5% effective rate) while hiring humans triggers 30% payroll taxes; flip the incentive",
      "Annual data dividend paying every American for the data they generate for both private business and government use",
      "Future Workforce Administration — FDR-style jobs program funded by wealth tax + tax on labor-displacing AI; 1,000 new trade schools and tech institutes",
      "Data centers must serve host communities — local jobs, computer resources for schools/libraries, dry-cooling, full electricity bills paid (no cost-shifting to ratepayers)",
      "Eliminate Section 230 to enable regulation of engagement-driven amplification of violent content; mandate platform interoperability",
      "Stand up a new federal AI regulator on par with nuclear (NRC) or aviation (FAA), with mandatory third-party verification of advanced models — explicitly more than CAISI's voluntary collaboration",
      "Federal wealth tax on billionaires ($4.7T revenue) and corporate tax reform ($2T) to fund the agenda",
    ],
    regulatoryPhilosophy:
      "AI democratism: rejects both Silicon Valley accelerationism and AI-doom precaution in favor of treating AI governance as a question of political economy and democratic control. Khanna's framework explicitly couples AI policy to wealth taxation, antitrust pressure, and a New Deal–scale public jobs program. Notably more interventionist than the earlier Seven Principles document — the manifesto calls for a brand-new federal AI agency (not CAISI expansion), full Section 230 repeal (aligning with Blackburn), and structural anti-oligarchy measures. Distinctive in pairing a strong stance against federal preemption (defending state AGs against Trump's December executive order) with strong new federal obligations.",
    strengths: [
      "The Future Workforce Administration is the only proposal that attempts to match the scale of expected AI displacement with a public jobs response, drawing the explicit FDR/New Deal parallel that the moment requires",
      "Calling for a new federal AI agency on par with the NRC or FAA finally treats AI as the systemic risk technology its developers claim it is, rather than splitting authority across captured agencies",
      "The annual data dividend operationalizes the 'you built this on our data' argument with a concrete mechanism every American can understand and benefit from",
      "Coupling AI policy to wealth taxation breaks the false separation between technology policy and political economy — billionaire concentration is the structural condition AI is being built within",
      "As a Silicon Valley representative explicitly attacking the tech oligarchy and co-hosting Sanders town halls, Khanna provides political cover for more cautious Democrats to take stronger positions",
    ],
    weaknesses: [
      "A magazine manifesto in The Nation is not legislation — Khanna lists ambitious mechanisms (data dividend, FWA, new federal AI agency) without introducing the bills that would create any of them",
      "Mandating human drivers in trucks 'even as self-driving improves safety and efficiency' is a make-work requirement that deliberately blocks proven safety gains — exactly the kind of Luddism Khanna claims to reject",
      "Full Section 230 repeal would devastate small platforms and open-source forums while doing little to constrain frontier AI labs — and Khanna offers no carve-out for non-amplified speech",
      "Standing up a new federal AI agency on the NRC model would take a decade Congress doesn't have, and would calcify AI regulation around whatever frontier capabilities exist on day one",
      "The wealth-tax funding mechanism has failed politically every time it has been proposed and faces serious constitutional challenges — pinning a generational jobs program to it is wishful budgeting",
    ],
    layers: {
      incidence: {
        frontier: "secondary",
        apps: "primary",
        hyperscalers: "primary",
        chips: "indirect",
      },
      base:
        "Labor-displacing token use; AI capital; data generation; wealth",
      note:
        "Four instruments that look like one agenda. The token tax on labor-displacing AI use is a tax on buyers, landing on the app layer and enterprise adopters. The data dividend attaches to data generation, which means it lands on the consumer platforms and passes over the labs and the clouds entirely — AI policy that taxes the app layer's oldest business. The tax flip and the data center community obligations assess the hyperscalers. Only the wealth tax reaches frontier owners, and it reaches them as individuals rather than as a layer.",
    },
    chartPositions: {
      "enforcement-scope": { x: 80, y: 85 },
      "prevention-authority": { x: 55, y: 55 },
      "innovation-worker": { x: 85, y: 30 },
      "preemption-obligations": { x: 80, y: 20 },
    },
  },
  {
    slug: "casar-ai-tax",
    name: "Rep. Greg Casar — AI Tax and Work Protection Act (H.R. 10044)",
    shortName: "Casar AI Tax",
    sponsor:
      "Rep. Greg Casar (D-TX), with Reps. Valerie Foushee (D-NC) and Sara Jacobs (D-CA)",
    year: "2026",
    color: "#a21caf",
    primaryFrame: "Automation tax funding public employment",
    summary:
      "Introduced August 6, 2026 and referred jointly to Education and Workforce and to Ways and Means, this is the first bill to put actual statutory text behind the idea of taxing AI computation and routing the proceeds into public jobs. Title I adds a new subchapter to the Internal Revenue Code imposing an excise tax on foundation model developers, calculated as the greater of a percentage of the fair market value of tokens processed or a percentage of revenue from AI services — with rates that automatically escalate as unemployment rises. Titles II through IV take 100 percent of that revenue into a trust fund and spend it through a Work Protection Administration inside the Department of Labor, whose acronym is a deliberate echo of the New Deal's Works Progress Administration. The WPA awards competitive grants to states, localities, tribes, school districts, universities, and nonprofits to hire people directly into 17 enumerated categories of public work — child care, education, health, elder and disability care, housing, homelessness services, violence prevention, scientific research, infrastructure, arts and libraries, conservation, wildfire and disaster preparedness, facility repair, parks, local journalism, and WIOA training. The bill is unusual in coupling the tax trigger to the labor market it is meant to protect: the levy is imposed only on models used commercially or used to shrink a workforce, and its rate is indexed to the U-4 unemployment measure.",
    keyProvisions: [
      "New IRC §4491 excise tax on 'covered persons' — anyone who develops a foundation model, sells access to one, or modifies an open-weight model, and who either earns revenue from it or uses it to reduce their own workforce",
      "Tax equals the greater of (a) fair market value of tokens processed × the applicable token percentage, or (b) AI service revenue plus related-party transaction value × the applicable transaction percentage — a belt-and-suspenders design to stop firms from shifting value between the two bases",
      "Rates indexed to unemployment: 2% on tokens / 3% on transactions when U-4 is at or below 5%, rising point-for-point between 5% and 7%, and at double rate above 7% — so the tax hits hardest exactly when displacement is worst",
      "Foundation model defined by a 10^25 FLOP training-compute threshold, with authority for the Secretary to reset the threshold annually to track comparable capability",
      "Covered transactions include internal use: a company that runs a model on its own workers' jobs owes the tax even if it never sells access",
      "R&D carve-out for governments, institutions of higher education, FFRDCs, and 501(c)(3) organizations; Treasury may discount unemployment attributable to war, pandemic, or other shocks unrelated to AI",
      "Trust fund capturing 100% of the tax from FY2027 onward, spendable only on the jobs program and the administering office; up to 20% may be routed to WIOA programs",
      "Work Protection Administration established within DOL within 90 days, awarding competitive grants that prioritize permanent, full-time jobs and state or local governments for governmental functions",
      "17 categories of grant-funded public work, from child care and school staffing to wildfire fuel reduction, broadband construction, and local news and journalism capacity",
      "Job quality floor: prevailing wage (or the higher of federal, state, or local minimum), FEHB-comparable health coverage, 12 weeks of paid family and medical leave at full pay, and one hour of paid any-purpose leave per 30 hours worked",
      "Labor conditions on every grant: NLRA §7 protections, posted rights notices, majority-sign-up union recognition, and local hiring preference — with tribal governments exempt",
      "Nondisplacement rules barring grant-funded hires that cause layoffs or partial displacement, that take over the duties of striking workers, or that replace laid-off workers who have not been offered restoration",
      "Advisory committee spanning Labor, Commerce, Education, the Federal Reserve, the NLRB, NSF, CEA, OSTP, every state governor, large-union representatives, and two labor economists — exempted from the Federal Advisory Committee Act",
      "$20M per year for FY2027–2031 for the Bureau of Labor Statistics to measure not just AI-driven job loss but job degradation — falling pay, reduced hours, and conversion of permanent roles to temporary ones",
      "Tax applies only to covered transactions occurring more than one year after enactment",
    ],
    regulatoryPhilosophy:
      "Tax the substitution, then buy back the jobs. Casar's bill declines to regulate AI as a safety problem at all — there is no testing regime, no licensing, no liability framework, and no preemption language anywhere in the text. It treats AI purely as an economic event in which capital is being substituted for labor, and it responds with the two most conventional tools in the fiscal toolkit: an excise tax on the substituting technology and a direct federal employment program funded by the proceeds. The design embeds a countercyclical automatic stabilizer — because rates rise with unemployment, the revenue and the jobs program both expand precisely when the labor market deteriorates, without requiring Congress to act again. The job quality conditions reveal the second half of the theory: the bill is not only replacing lost employment but attempting to set a floor on what replacement employment looks like, using federal grant conditions to spread prevailing wages, paid leave, and union access into sectors where they are rare.",
    strengths: [
      "This is legislative text, not a white paper — a scored, referred bill with a section-by-section tax mechanism, which puts it ahead of every other AI tax proposal in the landscape, including the Bores AI Dividend and Khanna's Future Workforce Administration",
      "Indexing the rate to U-4 unemployment makes the tax a genuine automatic stabilizer: it stays modest while AI is complementing labor and escalates sharply only if the displacement thesis actually materializes, which answers the standard objection that automation taxes penalize productivity growth",
      "The dual tax base — tokens or revenue, whichever is greater — anticipates the obvious avoidance strategy of giving inference away cheaply while monetizing elsewhere, and the internal-use trigger closes the loophole that would let firms self-host models to escape a sales-based tax entirely",
      "Funding public goods that are chronically understaffed and structurally resistant to automation — child care, elder care, home health, wildfire mitigation, local journalism — is a coherent match of revenue source to spending target, moving labor toward work AI cannot do rather than subsidizing competition with it",
      "The nondisplacement and prevailing wage conditions are drawn from decades of experience with federal jobs programs and directly address the standard critique that public employment schemes undercut existing workers and depress wages",
      "The BLS mandate to measure job degradation, not just job loss, targets the most likely real-world outcome of AI adoption — hours cut, pay reduced, permanent roles made contingent — which current statistics do not capture",
    ],
    weaknesses: [
      "Taxing tokens is taxing an accounting fiction — 'fair market value of tokens processed' has no established measure, tokenization schemes are chosen by the developer, and a company can restructure batching, context windows, or model architecture to shrink its taxable unit count without changing a thing about what the model does",
      "The 10^25 FLOP threshold and the internal-use trigger together create a large avoidance surface: train just under the line, fine-tune abroad, buy inference from a foreign provider outside U.S. taxing jurisdiction, or characterize a workforce reduction as a reorganization unrelated to the model that quietly performs the work",
      "Escalating the tax as unemployment rises is procyclical in the wrong direction — it raises the cost of the most productive technology in the economy exactly when the economy is weakest, and the war-and-pandemic escape hatch gives Treasury broad discretion to gut the escalator whenever it becomes politically inconvenient",
      "A new federal agency standing up a competitive grant program across 17 program areas and hiring at prevailing wage with federal-grade health benefits will spend years on rulemaking and application review before the first worker is hired, while the displacement it responds to would already have occurred",
      "The bill is silent on every AI governance question other than money — no safety testing, no transparency, no liability, no child protection, no preemption stance — so a Congress that passed it would have taxed frontier AI without having regulated it in any respect",
      "The drafting is visibly unfinished: Title III is captioned 'Office of Job Creation' while its operative text creates a 'Work Protection Administration,' the definitions section defines a Director of an office the bill never establishes, the effective-date clause cross-references a subsection that does not contain the definition it cites, and the rate-suspension sentence in §4491(c) is grammatically incoherent",
      "Exempting the advisory committee from FACA while seating every governor, federal agency designees, and large-union representatives creates a closed body allocating billions in employment grants with no open-meeting or public-record obligations",
    ],
    contrast: {
      slug: "bores-dividend",
      title: "Two token taxes, two theories of what to do with the money",
      body: "Casar and Bores converge on the same novel tax base — computation measured in tokens — and diverge completely on what it buys. Bores routes revenue to direct payments, treating displacement as an income problem to be solved with cash, and pairs the token tax with federal equity warrants so the public captures upside from the firms doing the displacing. Casar routes every dollar to wages for public work, treating displacement as an employment problem to be solved with jobs, and adds no equity claim at all. The rate structures encode the same split: Bores triggers payments on economic conditions after the fact, while Casar's rate schedule escalates continuously with U-4 unemployment so the tax itself is the trigger. Casar also has what Bores does not — an actual bill number, committee referrals, and statutory text defining the tax base, which is where the token-tax concept has always been most vulnerable.",
    },
    layers: {
      incidence: {
        frontier: "primary",
        apps: "secondary",
        hyperscalers: "indirect",
        chips: "indirect",
      },
      base:
        "Tokens processed and AI service revenue, assessed on the model developer",
      note:
        "The distinction that separates this from the Bores and Khanna token taxes is who the statute names. Section 4491 assesses the covered person — whoever develops a foundation model, sells access to one, or modifies an open-weight model — rather than the buyer, which makes it the closest thing in this landscape to a tax whose legal incidence sits on the frontier layer itself. Economic incidence still passes to the app layer through inference prices, and the internal-use trigger pulls in any enterprise that self-hosts a model to cut headcount, making it a covered person in its own right. Training compute remains untaxed.",
    },
    chartPositions: {
      "enforcement-scope": { x: 88, y: 95 },
      "prevention-authority": { x: 85, y: 8 },
      "innovation-worker": { x: 95, y: 12 },
      "preemption-obligations": { x: 88, y: 10 },
    },
  },
  {
    slug: "ca-sb53",
    name: "California SB 53 — Transparency in Frontier AI Act",
    shortName: "CA SB 53",
    sponsor: "California Legislature",
    year: "2025",
    color: "#2563eb",
    primaryFrame: "Transparency",
    summary:
      "California's evolution from the vetoed SB 1047 to SB 53 illustrates the real-time negotiation between ambition and political feasibility in AI governance. SB 53 targets large frontier developers with over $500M annual revenue and requires transparency reports on safety testing, with critical safety incident reporting within 15 days standard or 24 hours if imminent harm.",
    keyProvisions: [
      "Targets large frontier developers with >$500M annual revenue above certain computational thresholds",
      "Requires transparency reports on safety testing and precautions",
      "Critical safety incident reporting: 15 days standard, 24 hours if imminent harm",
      "No kill switch requirement or rigid pre-deployment testing regime",
      "Transparency-first rather than compliance-first approach",
      "Beginning to incorporate CAISI-aligned standards",
    ],
    regulatoryPhilosophy:
      "Iterative, transparency-driven, with voluntary alignment toward federal standards. California's shift from SB 1047's mandate-heavy approach to SB 53's transparency-first model reflects the political difficulty of imposing pre-deployment requirements on frontier developers headquartered in the state. Disclosure over prohibition is the guiding principle.",
    strengths: [
      "Transparency-first approach is politically achievable where SB 1047's mandate-heavy predecessor was not — iterative governance that can actually be implemented",
      "The $500M revenue threshold targets only the largest frontier developers, avoiding burdens on startups and academic researchers",
      "Critical safety incident reporting with a 24-hour window for imminent harm creates real accountability for the most dangerous failures",
      "Alignment toward CAISI standards signals willingness to harmonize with federal frameworks, reducing fragmentation risk",
      "Demonstrates that state-level AI governance can evolve in response to industry and political feedback without abandoning the regulatory project",
    ],
    weaknesses: [
      "SB 53 is the tombstone of SB 1047 — California had the chance to set a real safety standard and instead caved to industry lobbying, producing a disclosure regime with no enforcement teeth",
      "Transparency reports are a compliance theater — companies will disclose what makes them look good and obscure what does not, and there is no mechanism to verify accuracy",
      "No pre-deployment testing, no kill switch, no liability — SB 53 asks companies to tell us about dangerous AI after they have already released it to the public",
      "The $500M threshold conveniently exempts every AI startup in the state, creating a loophole large enough to drive a frontier model through",
      "By retreating from SB 1047, California signaled to every other state that industry pressure works — making meaningful state-level regulation harder everywhere",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "none",
        hyperscalers: "none",
        chips: "none",
      },
      base:
        "Frontier developers above a $500M revenue threshold",
      note:
        "A revenue threshold is a layer selector. At $500M it reaches the frontier layer and nothing else, and because the obligation is disclosure rather than assessment, the cost is compliance overhead rather than a transfer. No other layer is touched.",
    },
    chartPositions: {
      "enforcement-scope": { x: 30, y: 75 },
      "prevention-authority": { x: 20, y: 30 },
      "innovation-worker": { x: 25, y: 70 },
      "preemption-obligations": { x: 65, y: 15 },
    },
  },
  {
    slug: "ny-raise",
    name: "New York RAISE Act",
    shortName: "NY RAISE",
    sponsor: "New York Legislature / Gov. Hochul",
    year: "2025",
    color: "#be185d",
    primaryFrame: "Compliance",
    summary:
      "New York's Responsible AI Safety and Education Act establishes reporting and safety governance for frontier AI developers. It covers companies with over $500M in revenue developing frontier models and requires publicly disclosed safety and security protocols. The act includes civil penalties of $1M for initial violations, escalating to $3M for repeat offenses.",
    keyProvisions: [
      "Covers companies with >$500M in revenue developing frontier models",
      "Developers must create and publicly disclose comprehensive safety and security protocols",
      "Administrative, technical, and physical cybersecurity protections required",
      "Incident reporting to the State within 72 hours",
      "Civil penalties: $1M for initial violations, escalating to $3M for repeat offenses",
      "Effective March 19, 2026 with alignment toward CAISI standards",
    ],
    regulatoryPhilosophy:
      "Compliance-oriented with meaningful penalties. New York's approach is notably more enforcement-heavy than California's SB 53, with specific dollar penalties and shorter reporting windows. The RAISE Act's alignment with CAISI standards signals willingness to harmonize with federal frameworks.",
    strengths: [
      "Specific dollar penalties ($1M initial, $3M repeat) create real financial consequences rather than relying on transparency alone",
      "72-hour incident reporting window is tighter than California's 15-day standard, creating faster public awareness of safety failures",
      "Mandatory public disclosure of safety protocols lets independent researchers and journalists hold companies accountable",
      "Administrative, technical, and physical cybersecurity protections address the full spectrum of AI system vulnerabilities",
      "CAISI alignment signals readiness to harmonize with federal standards, positioning New York as a constructive partner rather than a rogue regulator",
    ],
    weaknesses: [
      "$1M penalties are a rounding error for companies with $500M+ in revenue — this is the appearance of enforcement without the substance, a parking ticket for a corporation",
      "No pre-deployment testing means New York waits for harm to occur before acting — a fundamentally reactive framework that treats the public as guinea pigs",
      "Zero worker protection provisions in a state where AI is already displacing financial services, media, and legal workers by the thousands",
      "The $500M revenue threshold means this law applies to roughly five companies — it is a symbolic gesture, not comprehensive governance",
      "Compliance-oriented regulation favors companies with large legal departments over innovative competitors, further entrenching incumbent dominance",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "none",
        hyperscalers: "none",
        chips: "none",
      },
      base:
        "Frontier developers above a $500M revenue threshold",
      note:
        "Same selector as SB 53 and the same result: the frontier layer alone, reached through reporting obligations backed by monetary penalties. The app, hyperscaler, and chip layers have no exposure, which is why neither state law drew organized opposition from them.",
    },
    chartPositions: {
      "enforcement-scope": { x: 35, y: 80 },
      "prevention-authority": { x: 25, y: 25 },
      "innovation-worker": { x: 30, y: 35 },
      "preemption-obligations": { x: 80, y: 15 },
    },
  },
  {
    slug: "gaaia",
    name: "Great American Artificial Intelligence Act (GAAIA)",
    shortName: "GAAIA",
    sponsor: "Rep. Jay Obernolte (House discussion draft)",
    year: "2026",
    color: "#0d9488",
    primaryFrame: "Federal transparency + workforce data",
    summary:
      "A House discussion draft from Rep. Jay Obernolte organized into four titles: frontier AI governance, workforce, cybersecurity, and research and international cooperation. It federalizes the SB 53 / RAISE-style transparency model — large frontier developers (>$500M revenue) must write and publicly post a frontier AI framework, file pre-deployment reports, and report critical safety incidents to CAISI within 15 days (or 24 hours if there is an imminent risk of death or serious injury), backed by fines of up to $1M per day and federal and state AG injunctions. CAISI is established in statute within the Department of Commerce to set voluntary security standards and to license Independent Verification Organizations (IVOs) that audit developer frameworks. Its preemption clause is deliberately narrow: it bars only state laws specifically targeting AI model development, expressly preserves laws of general applicability, common law remedies, and regulation of AI use and deployment, and sunsets three years after enactment. Title II builds the most elaborate AI workforce-data apparatus of any proposal — WARN Act layoff disclosures, AI-sensitive occupation forecasts, an AI Workforce Research Hub, and a study of a Rapid AI Adjustment Assistance Program.",
    keyProvisions: [
      "CAISI established in statute within Commerce, setting voluntary AI security standards and licensing Independent Verification Organizations (IVOs) to audit frontier developers",
      "Large frontier developers (>$500M revenue) must publish a frontier AI framework, file pre-deployment reports, and report critical safety incidents (15 days, or 24 hours if imminent), with fines up to $1M/day",
      "Narrow, three-year-sunsetting preemption of state laws targeting AI model development only — preserving common law and regulation of AI use and deployment",
      "WARN Act amended to require disclosure when AI is a 'substantial factor' in a qualifying mass layoff, including the share of job losses attributable to AI",
      "AI Workforce Research Hub, prediction-interval forecasts for AI-sensitive occupations, and a study of a Rapid AI Adjustment Assistance Program modeled on trade adjustment assistance",
      "Whistleblower anti-retaliation protections, increased AI fraud penalties, statutory NAIRR, and international standards coalitions that exclude China absent WTO certification",
    ],
    regulatoryPhilosophy:
      "Structured but light-touch federalism that codifies the emerging transparency consensus rather than imposing pre-deployment gates. Obernolte's draft accepts a real federal disclosure-and-audit regime for the largest frontier developers while keeping CAISI's technical standards voluntary, and pairs it with an unusually deep investment in measuring AI's labor-market impact. Its preemption is narrow and time-limited — confined to model development and sunsetting in three years — a marked departure from the broad, permanent preemption sought by the White House and the Blackburn bill.",
    strengths: [
      "Federalizes the SB 53 / RAISE transparency model with real teeth — $1M/day fines, federal and state AG injunctions, and licensed third-party IVO audits of developer frameworks",
      "Preemption is narrow and self-sunsetting (three years, model development only), preserving common law remedies and states' authority over AI use and deployment — a far lighter touch than the White House or Blackburn",
      "Title II is the most serious workforce effort in the landscape: WARN Act AI-layoff disclosures, AI-sensitive occupation forecasts, and a research hub that would finally generate systematic evidence on displacement",
      "Strong whistleblower protections — reinstatement, double back pay with interest, and attorney's fees — give insiders a safe channel to report frontier-AI violations",
      "Pragmatic, bipartisan-flavored construction that codifies CAISI and NAIRR and funds open-source security and testbeds, giving it a more plausible path to passage than messaging-oriented bills",
    ],
    weaknesses: [
      "Transparency and framework audits are not pre-deployment gates — like SB 53 and RAISE, it lets companies ship frontier models first and disclose risks after, with no authority to stop a dangerous release",
      "CAISI's core standards remain voluntary, and the binding obligations reach only a handful of >$500M developers, leaving the vast majority of AI systems untouched",
      "The workforce title is overwhelmingly studies, forecasts, reports, and pilots — it measures displacement meticulously but creates no benefits, no redistribution, and only a study of an adjustment program rather than the program itself",
      "It is silent on the harms states have actually legislated against — child safety, algorithmic discrimination, deepfakes, and copyright — even while preempting a slice of state authority over development",
      "IVO immunity from loss claims, combined with broad trade-secret and security redactions, could hollow out accountability by letting developers and their paid auditors control what the public and regulators ever see",
      "The preemption line itself is contestable: it bars only state laws 'specifically targeting' model development while preserving deployment and use regulation, but the development/deployment boundary blurs at exactly the points that matter — pre-deployment safety testing and substantial fine-tuning — inviting years of characterization litigation over which state laws actually survive",
    ],
    layers: {
      incidence: {
        frontier: "primary",
        apps: "secondary",
        hyperscalers: "none",
        chips: "none",
      },
      base:
        "Frontier developers above $500M; employers conducting AI-driven layoffs",
      note:
        "The frontier-governance title uses the same $500M selector as the state laws it federalizes, so its transparency and audit obligations land on the frontier layer. Title II is the interesting part: amending the WARN Act to require disclosure when AI is a substantial factor in a mass layoff assesses the employer doing the deploying, not the developer selling the model, which reaches the app layer and enterprise adopters. Two titles, two different layers.",
    },
    chartPositions: {
      "enforcement-scope": { x: 42, y: 65 },
      "prevention-authority": { x: 70, y: 35 },
      "innovation-worker": { x: 55, y: 70 },
      "preemption-obligations": { x: 55, y: 35 },
    },
    contrast: {
      slug: "openai-blueprint",
      title: "GAAIA vs. the OpenAI Blueprint",
      body: "GAAIA and OpenAI's Blueprint share an architecture — a statutory CAISI, the SB 53 / RAISE transparency model, and third-party verification (GAAIA's licensed IVOs mirror the Blueprint's certified assessors). They diverge on teeth and scope. GAAIA pairs a soft trigger (disclosure, with no government evaluation gate) with hard enforcement — $1M/day fines and federal and state AG injunctions — and ranges across workforce data, fraud, and education. The Blueprint inverts this: a mandatory CAISI pre-release evaluation (a harder trigger) that is purely advisory, since CAISI can recommend but never block, paired with a single-minded focus on catastrophic CBRN, cyber, and recursive-self-improvement risk that brackets workers entirely. And where GAAIA is operative legislative text, the Blueprint is industry advocacy.",
    },
  },
];
