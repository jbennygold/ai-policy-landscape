import type { Dimension } from "@/lib/types";

export const dimensions: Dimension[] = [
  {
    slug: "governance-structure",
    title: "Governance Structure",
    subtitle:
      "Who regulates AI, through what institutions, and with what enforcement tools",
    content: `The proposals diverge sharply on who should regulate AI and through what mechanisms. The White House framework and Blackburn bill rely primarily on existing agencies (FTC, NIST, DOL). Kelly proposes a new funding mechanism (AI Horizon Fund) but not a new regulatory body. Sanders implicitly calls for new authority through moratorium power. OpenAI advocates for CAISI as a quasi-new federal institution with pre-deployment testing authority.

The White House leans voluntary with targeted mandates. Blackburn, despite deregulatory framing, creates substantial mandatory obligations. OpenAI endorses mandatory federal testing. State laws (CA, NY) create mandatory disclosure and reporting. Sanders and Khanna both call for mandatory mechanisms.

The Blackburn bill is the most enforcement-dense, creating overlapping FTC, state AG, and private right of action pathways. New York's RAISE Act has specific monetary penalties. California's SB 53 relies more on transparency pressure than punitive enforcement.`,
    keyQuestions: [
      "Should the U.S. create a new federal AI regulatory body, or distribute authority across existing agencies?",
      "What role should state attorneys general play in enforcement when federal preemption is on the table?",
      "Can voluntary commitments and transparency requirements substitute for mandatory compliance regimes?",
    ],
  },
  {
    slug: "scope-and-application",
    title: "Scope and Application",
    subtitle:
      "What gets regulated, how thresholds are defined, and when intervention occurs",
    content: `All proposals focus on "frontier" or advanced AI systems, but define the threshold differently. California and New York both use $500M revenue thresholds. The Blackburn bill uses FTC-established thresholds ($500M revenue or 1M+ individuals' data processed). Sanders' moratorium applies to infrastructure rather than models.

The pre-deployment vs. post-deployment question is one of the sharpest divides. OpenAI advocates pre-deployment testing (prevention model). California SB 1047 attempted this but was vetoed; SB 53 retreated to post-deployment transparency. The Blackburn bill creates an evaluation program but the mandatory testing scope is ambiguous. Sanders' moratorium is the most aggressive pre-deployment intervention, stopping the infrastructure itself. The White House framework leans post-deployment (enforcement of existing laws).

Most proposals are horizontal, applying across sectors. Kelly's NDAA provisions are a notable exception, targeting military AI specifically. The Blackburn bill includes sector-specific provisions for children's platforms alongside horizontal obligations.`,
    keyQuestions: [
      "Is a revenue-based threshold (like $500M) the right way to identify which AI systems require governance, or does it miss important risks?",
      "Should regulation focus on pre-deployment prevention or post-deployment accountability?",
    ],
  },
  {
    slug: "political-positioning",
    title: "Political Positioning",
    subtitle:
      "Partisan dynamics, coalition possibilities, and competing theories of the problem",
    content: `The White House and OpenAI positions are explicitly innovation-friendly, though both support some safety requirements. Sanders is the most precautionary. Khanna occupies a middle ground, and Kelly tilts toward managed innovation with redistribution. OpenAI's position is the most explicit industry voice, while the White House framework aligns closely with industry preferences on preemption and light regulation. Sanders and Khanna represent civil-society and labor perspectives. Kelly bridges these, proposing industry-funded mechanisms.

The deepest divide is on preemption scope. The White House and Blackburn want broad preemption of state AI development regulation. OpenAI supports preemption but with a stronger federal framework as precondition. California and New York are asserting state authority while signaling willingness to defer to adequate federal standards. Sanders and Khanna have not made preemption a central focus.

Despite sharp disagreements, areas of convergence exist across the political spectrum. Every proposal treats the most powerful AI systems as requiring distinct governance. Child safety is the area of greatest bipartisan alignment and the most likely candidate for near-term legislation. Transparency and disclosure have value across even the lightest-touch proposals. All acknowledge AI-driven workforce disruption, though they disagree on mechanism: reporting vs. redistribution vs. structural intervention.`,
    keyQuestions: [
      "Can a bipartisan coalition form around child safety and transparency while deferring harder questions about preemption and liability?",
      "Does the Blackburn bill's combination of deregulatory branding and regulatory density represent a viable political template?",
      "Is industry-funded redistribution (Kelly's Horizon Fund model) a politically feasible alternative to both laissez-faire and structural intervention?",
    ],
  },
];
