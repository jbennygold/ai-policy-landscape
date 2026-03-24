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
    chartPositions: {
      "enforcement-scope": { x: 20, y: 25 },
      "prevention-authority": { x: 75, y: 25 },
      "innovation-worker": { x: 20, y: 85 },
      "preemption-obligations": { x: 20, y: 90 },
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
    chartPositions: {
      "enforcement-scope": { x: 25, y: 30 },
      "prevention-authority": { x: 80, y: 90 },
      "innovation-worker": { x: 20, y: 80 },
      "preemption-obligations": { x: 30, y: 35 },
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
    chartPositions: {
      "enforcement-scope": { x: 80, y: 75 },
      "prevention-authority": { x: 30, y: 30 },
      "innovation-worker": { x: 85, y: 15 },
      "preemption-obligations": { x: 80, y: 15 },
    },
  },
  {
    slug: "khanna",
    name: "Rep. Ro Khanna — Seven Principles for Democratic AI",
    shortName: "Khanna",
    sponsor: "Rep. Ro Khanna",
    year: "2026",
    color: "#d97706",
    primaryFrame: "Worker empowerment",
    summary:
      "Khanna articulates a middle path between Silicon Valley optimism and progressive structural critique through seven principles for democratic AI. As a representative of a Silicon Valley district, his position carries particular weight. He explicitly rejects Luddism while insisting on structural mechanisms that embed worker and community interests into AI governance.",
    keyProvisions: [
      "Protections against mass displacement with humans kept in the loop",
      "Tax credits for companies giving employees a stake in AI-generated profits",
      "Worker representation on AI company boards, rank-and-file consulted on deployment",
      "Community benefit requirements for areas hosting data centers",
      "Worker input required before AI tools are deployed in workplaces",
      "Mandatory third-party verification of advanced AI models",
    ],
    regulatoryPhilosophy:
      "Worker-centered with market-compatible mechanisms. Khanna explicitly rejects Luddism while insisting on structural mechanisms -- board representation, tax incentives, mandatory verification -- that embed worker and community interests into AI governance. His approach is more market-compatible than Sanders' but more structurally interventionist than Kelly's.",
    chartPositions: {
      "enforcement-scope": { x: 75, y: 80 },
      "prevention-authority": { x: 35, y: 40 },
      "innovation-worker": { x: 80, y: 25 },
      "preemption-obligations": { x: 75, y: 20 },
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
    chartPositions: {
      "enforcement-scope": { x: 35, y: 80 },
      "prevention-authority": { x: 25, y: 25 },
      "innovation-worker": { x: 30, y: 35 },
      "preemption-obligations": { x: 80, y: 15 },
    },
  },
];
