import type { PodcastQuote, ProposalSlug } from "@/lib/types";

/**
 * What people said about each proposal on podcasts, found through Particle's
 * transcript search (particle.pro). Quotes are verbatim apart from removed
 * filler words ("uh", repeated words), cuts marked with an ellipsis, and
 * bracketed corrections where the transcript misspelled a name. Each url opens
 * the moment on Particle Radar. Proposals with no strong coverage are absent.
 */
export const podcastQuotes: Partial<Record<ProposalSlug, PodcastQuote[]>> = {
  "wh-framework": [
    {
      quote: "I would say devote zero dollars of your resources to preparing for this because it is not going to pass. … I interpret this as sort of a statement that they're not trying to actually pass something, right?",
      speaker: "Charlie Bullock",
      speakerDescription: "Senior Policy Director, Institute for Law & AI",
      stance: "critical",
      podcast: "Consumer Finance Monitor",
      episode: "The White House AI Framework: Ambition, Preemption, and Uncertainty Ahead",
      date: "2026-04-30",
      url: "https://radar.particle.pro/podcasts/consumer-finance-monitor/episodes/the-white-house-ai-framework-ambition-preemption-and-uncertainty-ahead?t=2997.5"
    },
    {
      quote: "Although I am very glad to see this included as a key part of the legislative framework, it is very clear that they have absolutely no idea what this actually is going to mean in practice. It's basically a few hand-wavy bullet points.",
      speaker: "Nathaniel Whittemore",
      speakerDescription: "Host of The AI Daily Brief",
      stance: "critical",
      podcast: "The AI Daily Brief",
      episode: "The Coming AI Rules Battle",
      date: "2026-03-23",
      url: "https://radar.particle.pro/podcasts/the-ai-daily-brief/episodes/the-coming-ai-rules-battle?t=1313.4"
    },
    {
      quote: "What we're seeing in this draft is it says that generally applicable state laws on protecting kids from AI will not be preempted. But what child safety advocates are worried about is that this is too general and could give the White House license to preempt some state AI laws which actually do not create an undue burden.",
      speaker: "Elizabeth Troutman Mitchell",
      speakerDescription: "White House correspondent, The Daily Signal",
      stance: "analytical",
      podcast: "Bannon's War Room",
      episode: "Episode 5233: Fighting AI Mandates In The States; Islam Is Creeping Into Texas Schools",
      date: "2026-03-20",
      url: "https://radar.particle.pro/podcasts/bannons-war-room/episodes/episode-5233-fighting-ai-mandates-in-the-states-islam-is-creeping-into-texas?t=1370.8"
    }
  ],
  "wh-ai-eo": [
    {
      quote: "The biggest concern is that that process of coming up with a threshold is going to be classified and likely out of public scrutiny … And so the risk is that you really have something that maybe sounds good on paper, but isn't useful in practice.",
      speaker: "Daniel Castro",
      speakerDescription: "President of the Information Technology and Innovation Foundation",
      stance: "critical",
      podcast: "AI Security and the Law",
      episode: "The Executive Order on Advanced AI Innovation and Security: What Businesses Need to Know",
      date: "2026-06-12",
      url: "https://radar.particle.pro/podcasts/ai-security-and-the-law/episodes/the-executive-order-on-advanced-ai-innovation-and-security-what-businesses-need?t=1153.2"
    },
    {
      quote: "The challenge is that visibility and control are not the same thing. The government is signaling concern about the cybersecurity implications of frontier AI while stopping well short of imposing any meaningful oversight.",
      speaker: "Jim Love",
      speakerDescription: "Host of Cybersecurity Today, tech journalist",
      stance: "critical",
      podcast: "Cybersecurity Today",
      episode: "New HTTP/2 Bomb Attack, Trump's AI Security Reviews, Android Zero-Day  & The Patching Crisis",
      date: "2026-06-05",
      url: "https://radar.particle.pro/podcasts/cybersecurity-today/episodes/new-http2-bomb-attack-trumps-ai-security-reviews-android-zero-day-the-patching?t=309.4"
    },
    {
      quote: "This current executive order asks these companies to give these models to the government 30 days before. The earlier draft I saw asked for a 90-day pre-release period. So it is notable that that leans more towards what the industry wanted.",
      speaker: "Hadas Gold",
      speakerDescription: "CNN correspondent",
      stance: "analytical",
      podcast: "CNN 5 Things",
      episode: "Israel-Lebanon Talks, Press Dinner Rescheduled, Trump’s AI Order and more",
      date: "2026-06-02",
      url: "https://radar.particle.pro/podcasts/cnn-5-things/episodes/israel-lebanon-talks-press-dinner-rescheduled-trumps-ai-order-and-more?t=315.4"
    }
  ],
  "wh-si-accord": [
    {
      quote: "Trump called this morally binding and almost like a constitution. I mean, the page itself says the exact opposite of a constitution. So it's like a promise the companies wrote for themselves with no fine, no shutdown power, no duty to tell the government when something goes wrong.",
      speaker: "Michael Zafiris",
      speakerDescription: "Co-host of AI risk podcast Warning Shots",
      stance: "critical",
      podcast: "Warning Shots",
      episode: "Claude Used to Cheat on This Test Half the Time. Now It Almost Never Does.",
      date: "2026-10-04",
      url: "https://radar.particle.pro/podcasts/warning-shots/episodes/claude-used-to-cheat-on-this-test-half-the-time-now-it-almost-never-does?t=555.8"
    },
    {
      quote: "My gut take is setting up a government authority that has to kind of imbue law upon AI labs will only slow down the entire industry, and we'll end up in a situation where China takes the lead. Where the compromise is is exactly what we're seeing on the screen here, which is the Superintelligence Accord.",
      speaker: "Ejaaz Ahamadeen",
      speakerDescription: "Host of In The Loop on Yahoo Finance",
      stance: "supportive",
      podcast: "In The Loop",
      episode: "OpenAI Fired the People It Needed Most",
      date: "2026-10-05",
      url: "https://radar.particle.pro/podcasts/in-the-loop-14/episodes/openai-fired-the-people-it-needed-most?t=1805.4"
    },
    {
      quote: "In the research world, superintelligence usually means something beyond human ability. That isn't what's in your students' hands, and I'd be wary of any planning document that blurs the two.",
      speaker: "Dan Fitzpatrick",
      speakerDescription: "AI education author and host",
      stance: "critical",
      podcast: "AI for Educators Daily with Dan Fitzpatrick",
      episode: "Always-On AI Agents: What Schools Need to Know",
      date: "2026-09-30",
      url: "https://radar.particle.pro/podcasts/ai-for-educators-daily/episodes/always-on-ai-agents-what-schools-need-to-know?t=933.2"
    }
  ],
  blackburn: [
    {
      quote: "I worked with a broad coalition to draft this legislation after President Trump handed me the pen and said, go to it.",
      speaker: "Marsha Blackburn",
      speakerDescription: "U.S. Senator (R-TN), bill sponsor",
      stance: "supportive",
      podcast: "Real America’s Voice",
      episode: "AMERICA'S VOICE LIVE WITH STEVE GRUBER - APRIL 29th, 2026",
      date: "2026-04-29",
      url: "https://radar.particle.pro/podcasts/real-americas-voice/episodes/americas-voice-live-with-steve-gruber-april-29th-2026?t=946.7"
    },
    {
      quote: "And its branding is very Trump-oriented. That is true. But the bill itself has a lot of substantive provisions over its 300 pages that are very good. Mandatory evaluations, which I spoke of, is in some ways the holy grail of what people like me want.",
      speaker: "Brad Carson",
      speakerDescription: "President, Americans for Responsible Innovation; former congressman",
      stance: "supportive",
      podcast: "The Politics Guys",
      episode: "Who Controls AI—and Who Pays When It Goes Wrong?",
      date: "2026-07-22",
      url: "https://radar.particle.pro/podcasts/the-politics-guys/episodes/who-controls-aiand-who-pays-when-it-goes-wrong?t=1295.7"
    },
    {
      quote: "When I look at what is involved in things like the Trump America AI Act, we see over and over again the idea that we're going to protect children. … They seem to take it in a direction always that takes us to digital ID, … to knowing and tracking everything that everybody does, taking us to a surveillance state.",
      speaker: "David Knight",
      speakerDescription: "Host of The David Knight Show",
      stance: "critical",
      podcast: "The REAL David Knight Show",
      episode: "Interview: Marsha Blackburn’s AI Agenda Sparks Constitutional Revolt",
      date: "2026-05-22",
      url: "https://radar.particle.pro/podcasts/the-real-david-knight-show/episodes/interview-marsha-blackburns-ai-agenda-sparks-constitutional-revolt?t=233.0"
    }
  ],
  "openai-lehane": [
    {
      quote: "A16Z, Chris Lehane, and Leading the Future have, at least until recently, consistently followed the standard industry lobbyist playbook. You try to kill all the bills, then if you cannot kill the bill you claim to support the bill … then turn around and say you supported the bill all along, which they are now trying at the federal level.",
      speaker: "Zvi Mowshowitz",
      speakerDescription: "AI writer, Don't Worry About the Vase",
      stance: "critical",
      podcast: "Don't Worry About the Vase Podcast",
      episode: "Trump Goes Full Hoax on AI Existential Risk",
      date: "2026-09-16",
      url: "https://radar.particle.pro/podcasts/dont-worry-about-the-vase/episodes/trump-goes-full-hoax-on-ai-existential-risk?t=2269.3"
    }
  ],
  "openai-industrial": [
    {
      quote: "If you read through the document, it's, like, all the right sounds. … You name it, it could've been written by a progressive. What it does very cannily is none of that responsibility falls on OpenAI.",
      speaker: "Sarah Myers West",
      speakerDescription: "Co-Executive Director, AI Now Institute",
      stance: "critical",
      podcast: "The Nation Podcasts",
      episode: "Down with the AI Overlords w/ Sarah Myers West / Fighting Fascism",
      date: "2026-05-11",
      url: "https://radar.particle.pro/podcasts/the-nation/episodes/down-with-the-ai-overlords-w-sarah-myers-west-fighting-fascism?t=2398.7"
    },
    {
      quote: "It exists in this strange uncanny valley where it is so technocratic, down to the narcolepsy-inducing name, … that it is inevitably going to fail in any sort of PR goal, but at the same time, not robust enough from a policy perspective that it feels likely to do a particularly good job at advancing any of these policies.",
      speaker: "Nathaniel Whittemore",
      speakerDescription: "Host of The AI Daily Brief",
      stance: "critical",
      podcast: "The AI Daily Brief",
      episode: "OpenAI's New Deal",
      date: "2026-04-08",
      url: "https://radar.particle.pro/podcasts/the-ai-daily-brief/episodes/openais-new-deal?t=1137.5"
    },
    {
      quote: "I think it's not much different than what they've been advocating from the very beginning, which is like, you know, AI should be democratized … It should be like electricity, where everyone sort of has access to this technology.",
      speaker: "Reed Albergotti",
      speakerDescription: "Technology editor, Semafor",
      stance: "analytical",
      podcast: "TechStuff",
      episode: "OpenAI's Sam Altman: Philosopher King Or Sociopath? - Week in Tech",
      date: "2026-04-10",
      url: "https://radar.particle.pro/podcasts/techstuff/episodes/openais-sam-altman-philosopher-king-or-sociopath-week-in-tech?t=715.7"
    }
  ],
  "openai-blueprint": [
    {
      quote: "OpenAI praises democracy, notes the United States is in a unique position, and calls for transparency and state capacity … Implementation details matter a lot, but this document exceeds expectations a lot.",
      speaker: "Zvi Mowshowitz",
      speakerDescription: "AI writer, Don't Worry About the Vase",
      stance: "supportive",
      podcast: "Don't Worry About the Vase Podcast",
      episode: "OpenAI Offers A New Policy Blueprint",
      date: "2026-06-05",
      url: "https://radar.particle.pro/podcasts/dont-worry-about-the-vase/episodes/openai-offers-a-new-policy-blueprint?t=57.3"
    },
    {
      quote: "I think the difference is that OpenAI's blueprint in specific reads that policymakers should preempt state laws that seek to regulate the same frontier safety risks. And so I interpret that as them being in favor of a more narrow preemption.",
      speaker: "Aalok Mehta",
      speakerDescription: "Director, Wadhwani AI Center at CSIS",
      stance: "analytical",
      podcast: "The AI Policy Podcast",
      episode: "Trump Signs Mythos-Inspired Executive Order After Delay and Reps. Obernolte and Trahan Release Draft Federal Framework for AI",
      date: "2026-06-11",
      url: "https://radar.particle.pro/podcasts/the-ai-policy/episodes/trump-signs-mythos-inspired-executive-order-after-delay-and-reps-obernolte-and?t=1342.7"
    },
    {
      quote: "The thing that was most interesting to me is that literally the next day, OpenAI came out and said, \"Actually, we think these assessments should be mandatory. We'd go even farther. We don't think the government should block a release, but we'd even go farther than that.\"",
      speaker: "Ben Brody",
      speakerDescription: "Tech reporter, Punchbowl News",
      stance: "analytical",
      podcast: "The Daily Punch",
      episode: "Readback: A big moment for AI",
      date: "2026-06-06",
      url: "https://radar.particle.pro/podcasts/the-daily-punch/episodes/readback-a-big-moment-for-ai?t=567.5"
    }
  ],
  gaaia: [
    {
      quote: "I think AI is going to be the most consequential technology of our generation. And I don't think that's an exaggeration. There's still time to govern it democratically before we cede the future entirely to the private sector or to our foreign adversaries. And that is the bet that we're making with this bill.",
      speaker: "Lori Trahan",
      speakerDescription: "U.S. Representative (D-MA), GAAIA co-author",
      stance: "supportive",
      podcast: "The Tech Policy Press Podcast",
      episode: "Unpacking the Great American Artificial Intelligence Act of 2026",
      date: "2026-06-14",
      url: "https://radar.particle.pro/podcasts/the-tech-policy-press/episodes/unpacking-the-great-american-artificial-intelligence-act-of-2026?t=384.7"
    },
    {
      quote: "They say, \"We are preempting laws on model development,\" what kinds of safeguards you have to put in basically as you're developing the system. There's gonna be a huge debate on that. A lot of people would say the guardrails go in in the development, and so you are preempting that.",
      speaker: "Ben Brody",
      speakerDescription: "Punchbowl News tech and AI policy reporter",
      stance: "analytical",
      podcast: "The Daily Punch",
      episode: "Readback: A big moment for AI",
      date: "2026-06-06",
      url: "https://radar.particle.pro/podcasts/the-daily-punch/episodes/readback-a-big-moment-for-ai?t=181.9"
    },
    {
      quote: "But this Obernolte-Trahan bill is facing huge, huge headwinds. It has five committees of jurisdiction… All of those committee chairs are like, \"Eh, we'll take a look at it.\"",
      speaker: "Jake Sherman",
      speakerDescription: "Punchbowl News co-founder",
      stance: "analytical",
      podcast: "The Daily Punch",
      episode: "Inside Trump's self-inflicted FISA crisis",
      date: "2026-06-09",
      url: "https://radar.particle.pro/podcasts/the-daily-punch/episodes/inside-trumps-self-inflicted-fisa-crisis?t=522.7"
    }
  ],
  "anthropic-aaif": [
    {
      quote: "Meanwhile, Dario Amodei keeps playing the please regulate us card.",
      speaker: "Brian McCullough",
      speakerDescription: "Host of Tech Brew Ride Home",
      stance: "critical",
      podcast: "Tech Brew Ride Home",
      episode: "A Claude Clawback",
      date: "2026-06-11",
      url: "https://radar.particle.pro/podcasts/tech-brew-ride-home/episodes/a-claude-clawback?t=714.1"
    }
  ],
  "anthropic-draft": [
    {
      quote: "This reads as intentional, that Anthropic is more afraid that the government might enforce rules against Anthropic than they are worried about the ability of the government to enforce rules against everyone.",
      speaker: "Zvi Mowshowitz",
      speakerDescription: "Writer, Don't Worry About the Vase",
      stance: "critical",
      podcast: "Don't Worry About the Vase Podcast",
      episode: "Leaked Anthropic Draft AI Regulatory Bill Is Unacceptable and Troubling",
      date: "2026-10-17",
      url: "https://radar.particle.pro/podcasts/dont-worry-about-the-vase/episodes/leaked-anthropic-draft-ai-regulatory-bill-is-unacceptable-and-troubling?t=59.1"
    },
    {
      quote: "Anthropic deserves some credit for actually proposing a pretty reasonable AI safety bill. That's more than other frontier labs have done. But they don't deserve too much credit, IMO. This bill is weaker than the Trahan-Obernolte Frontier Act in some key ways.",
      speaker: "Charlie Bullock",
      speakerDescription: "AI governance lawyer, Institute for Law & AI (written commentary, read on air)",
      stance: "analytical",
      podcast: "Don't Worry About the Vase Podcast",
      episode: "Leaked Anthropic Draft AI Regulatory Bill Is Unacceptable and Troubling",
      date: "2026-10-17",
      url: "https://radar.particle.pro/podcasts/dont-worry-about-the-vase/episodes/leaked-anthropic-draft-ai-regulatory-bill-is-unacceptable-and-troubling?t=181.6"
    },
    {
      quote: "The proposal also includes independent evaluators registered with the Commerce Department. Labs could pay them subject to safeguards of their independence. I have a problem with how easy it is to remain independent when you're being paid by the company you're assessing.",
      speaker: "Jim Love",
      speakerDescription: "Tech journalist, host of Hashtag Trending",
      stance: "critical",
      podcast: "Hashtag Trending",
      episode: "Rogue AI Agents Answer Investigator's Emails:  Hashtag Trending",
      date: "2026-10-19",
      url: "https://radar.particle.pro/podcasts/hashtag-trending/episodes/rogue-ai-agents-answer-investigators-emails-hashtag-trending?t=461.6"
    }
  ],
  "frontier-act": [
    {
      quote: "Today, the only thing we have in place is the honor system. And just think about that for a second. The most powerful technology in human history is being regulated by the people who are developing it. … We need to put proper guardrails in place, which is what the Frontier Act sets out to do.",
      speaker: "Lori Trahan",
      speakerDescription: "U.S. Representative (D-MA), FRONTIER Act co-author",
      stance: "supportive",
      podcast: "The Situation Room with Wolf Blitzer and Pamela Brown",
      episode: "9/11, 25 Years Later",
      date: "2026-09-11",
      url: "https://radar.particle.pro/podcasts/the-situation-room/episodes/911-25-years-later-2?t=5144.9"
    },
    {
      quote: "There is a new emergency shutdown authority, and enforcement is shifted to an undersecretary of commerce for AI security appointed by the secretary, with [CAISI] shut out, and if that person is not interested in enforcement or the enforcement mechanisms are not yet in place, then no one can enforce, including the states which get preempted permanently.",
      speaker: "Zvi Mowshowitz",
      speakerDescription: "AI writer, Don't Worry About the Vase",
      stance: "critical",
      podcast: "Don't Worry About the Vase Podcast",
      episode: "AI #179 Part 2: Hearing The Fire Alarm",
      date: "2026-07-31",
      url: "https://radar.particle.pro/podcasts/dont-worry-about-the-vase/episodes/ai-179-part-2-hearing-the-fire-alarm?t=116.1"
    },
    {
      quote: "The main places where this bill is significantly weaker than Frontier are, A, rulemaking, very strong in Frontier, almost non-existent in Anthropic's bill, and B, the emergency shutdown authority. … Those are the easiest provisions for a hypothetical president who hypothetically might not like a certain frontier AI company to abuse.",
      speaker: "Charlie Bullock",
      speakerDescription: "Senior Policy Director, Institute for Law & AI (written commentary, read on air)",
      stance: "analytical",
      podcast: "Don't Worry About the Vase Podcast",
      episode: "Leaked Anthropic Draft AI Regulatory Bill Is Unacceptable and Troubling",
      date: "2026-10-17",
      url: "https://radar.particle.pro/podcasts/dont-worry-about-the-vase/episodes/leaked-anthropic-draft-ai-regulatory-bill-is-unacceptable-and-troubling?t=212.4"
    }
  ],
  "cht-roadmap": [
    {
      quote: "On Center for Humane Technology's website, we have [an] AI roadmap document that's sort of a solutions report of various policy interventions that can happen. They're much smaller relative to the problems we've been talking about so far. But basic things like AI is a product, not a legal person.",
      speaker: "Tristan Harris",
      speakerDescription: "Co-founder and president, Center for Humane Technology",
      stance: "supportive",
      podcast: "Making Sense with Sam Harris",
      episode: "#469 — Escaping an Anti-Human Future",
      date: "2026-04-10",
      url: "https://radar.particle.pro/podcasts/making-sense/episodes/469-escaping-an-anti-human-future?t=3456.8"
    },
    {
      quote: "So we have to win that legal battle, that AI is a product and should have basic product safety standards and product defect standards… There's currently more regulation on making a sandwich in New York City than there is on building potentially world-shaping artificial general intelligence.",
      speaker: "Tristan Harris",
      speakerDescription: "Co-founder and president, Center for Humane Technology",
      stance: "supportive",
      podcast: "Front Burner",
      episode: "The perils of unregulated AI",
      date: "2026-05-11",
      url: "https://radar.particle.pro/podcasts/front-burner/episodes/the-perils-of-unregulated-ai?t=1663.8"
    }
  ],
  warner: [
    {
      quote: "They're not perfect by any means, but we gotta have this debate because if Congress takes its normal timeline, this'll be game over. This will all be decided in the next year or two.",
      speaker: "Mark Warner",
      speakerDescription: "U.S. Senator (D-VA), Senate Intelligence Committee",
      stance: "supportive",
      podcast: "Morning Joe",
      episode: "Democrats look to stage comeback in deep-red Iowa",
      date: "2026-07-21",
      url: "https://radar.particle.pro/podcasts/morning-joe/episodes/democrats-look-to-stage-comeback-in-deep-red-iowa?t=2768.2"
    },
    {
      quote: "I think I'm one of the first people to lay out at least a framework of what duty of care ought to be around agentic AI agents. They are going to be more and more the way we… interact with the markets, with the finance system. Let's have some standard of care.",
      speaker: "Mark Warner",
      speakerDescription: "U.S. Senator (D-VA), Senate Intelligence Committee",
      stance: "supportive",
      podcast: "Bloomberg Talks",
      episode: "Virginia Senator Mark Warner (D) Talks Risk of AI Taking Jobs",
      date: "2026-07-21",
      url: "https://radar.particle.pro/podcasts/bloomberg-talks/episodes/virginia-senator-mark-warner-d-talks-risk-of-ai-taking-jobs?t=531.7"
    },
    {
      quote: "Senator Mark Warner did come out with a… wide-ranging package of AI legislation. This includes pre-testing for some certain models. Warner said that he and Jensen Huang had a conversation about that, that got spirited.",
      speaker: "Emily Wilkins",
      speakerDescription: "CNBC Washington correspondent",
      stance: "analytical",
      podcast: "The Exchange",
      episode: "Zelenskyy and Netanyahu in DC, A Memory Shift, and a Stealth AI MVP?   7/28/26",
      date: "2026-07-28",
      url: "https://radar.particle.pro/podcasts/the-exchange/episodes/zelenskyy-and-netanyahu-in-dc-a-memory-shift-and-a-stealth-ai-mvp-72826?t=1611.9"
    }
  ],
  "warner-s5576": [
    {
      quote: "There seems to be more incidents every day of these AI models going beyond their skis… We need to take a pause and just say we gotta have safety protocols. So I've got a basic piece of legislation with Brian Schatz and Andy Kim… to say, before these models are released, let's do safety testing.",
      speaker: "Mark Warner",
      speakerDescription: "U.S. Senator (D-VA), Senate Intelligence Committee",
      stance: "supportive",
      podcast: "Morning Joe",
      episode: "War with Iran is entering its eighth month",
      date: "2026-09-29",
      url: "https://radar.particle.pro/podcasts/morning-joe/episodes/war-with-iran-is-entering-its-eighth-month?t=2010.8"
    }
  ],
  "thune-klobuchar": [
    {
      quote: "I'm working across the aisle with the majority leader, Senator Thune, with Ted Cruz, with Senator Cantwell, on actually putting guardrails, major guardrails into law… And my hope is, given the House went home, that we will get this done, and we must by the end of the year.",
      speaker: "Amy Klobuchar",
      speakerDescription: "Senior U.S. Senator from Minnesota (D-MN)",
      stance: "supportive",
      podcast: "State of Play with Peter Alexander",
      episode: "Sen. Amy Klobuchar & Cornell investigation",
      date: "2026-09-30",
      url: "https://radar.particle.pro/podcasts/state-of-play-4/episodes/sen-amy-klobuchar-cornell-investigation?t=689.1"
    },
    {
      quote: "And that, of course, puts Klobuchar, a Democrat from Minnesota, in a really tough position. How can she kind of sign off on something that the top Democrat on this committee [Cantwell] doesn't believe in?",
      speaker: "Ben Brody",
      speakerDescription: "Tech reporter, Punchbowl News",
      stance: "analytical",
      podcast: "Bits to Bricks with Amira Valliani",
      episode: "How AI Is Changing the Political Conversation with Ben Brody from Punchbowl News",
      date: "2026-09-28",
      url: "https://radar.particle.pro/podcasts/bits-to-bricks/episodes/how-ai-is-changing-the-political-conversation-with-ben-brody-from-punchbowl?t=736.7"
    },
    {
      quote: "Preemption on catastrophic and existential risks and ensuring the safety of frontier models is a very bad idea. In theory, preemption could be the correct move if it was part of a sufficiently robust and trustworthy federal response on such matters, with expectation of real enforcement…",
      speaker: "Zvi Mowshowitz",
      speakerDescription: "Writer, Don't Worry About the Vase",
      stance: "critical",
      podcast: "Don't Worry About the Vase Podcast",
      episode: "A ‘Morally Binding’ White House Accord on AI Safety",
      date: "2026-09-30",
      url: "https://radar.particle.pro/podcasts/dont-worry-about-the-vase/episodes/a-morally-binding-white-house-accord-on-ai-safety?t=1223.8"
    }
  ],
  "bores-dividend": [
    {
      quote: "Right now, our tax structure actually incentivizes laying people off to invest in AI. We put huge taxes on hiring a human or keeping a human hired. We have employment taxes. We have payroll taxes. We have requirements for benefits. And we put huge discounts on using AI.",
      speaker: "Alex Bores",
      speakerDescription: "NY Assemblymember, congressional candidate, AI Dividend author",
      stance: "supportive",
      podcast: "The Indicator from Planet Money",
      episode: "Should we tax AI?",
      date: "2026-06-10",
      url: "https://radar.particle.pro/podcasts/the-indicator-from-planet-money/episodes/should-we-tax-ai?t=164.6"
    },
    {
      quote: "[Bores'] proposal takes the company seriously 'cause the companies are saying AI is gonna replace jobs, it's gonna concentrate the gains. So [Bores'] proposal is like, \"So let's share them\"… which is also why… these firms are trying to crush him.",
      speaker: "Edward Ongweso Jr.",
      speakerDescription: "Writer; co-host of This Machine Kills",
      stance: "analytical",
      podcast: "This Machine Kills",
      episode: "461. The Book of Ludd",
      date: "2026-06-12",
      url: "https://radar.particle.pro/podcasts/this-machine-kills/episodes/461-the-book-of-ludd?t=1902.9"
    }
  ],
  kelly: [
    {
      quote: "I wrote a paper called AI for America, and what I'd like to do is form this thing called the AI Horizon Fund, where these corporations that are building this artificial intelligence, these systems are contributing money into this fund. There's ways we can do this. I've talked to the companies about it. Some of them are supportive because they understand some of the challenges that we're going to face as a nation.",
      speaker: "Mark Kelly",
      speakerDescription: "U.S. Senator (D-AZ), AI for America author",
      stance: "supportive",
      podcast: "The Nicole Sandler Show",
      episode: "Sen. Mark Kelly Changed My Mind, Something I Didn't Expect",
      date: "2026-06-08",
      url: "https://radar.particle.pro/podcasts/the-nicole-sandler-show/episodes/sen-mark-kelly-changed-my-mind-something-i-didnt-expect?t=4091.6"
    },
    {
      quote: "Senator Mark Kelly has been interesting… he has taken a little more of a middle ground approach of sort of embracing the technology while making sure it can still empower Americans.",
      speaker: "Ashley Gold",
      speakerDescription: "Semafor senior technology correspondent",
      stance: "analytical",
      podcast: "The Odd Years",
      episode: "Both parties' voters are freaked out by AI. So what is Congress going to do about it?",
      date: "2026-06-16",
      url: "https://radar.particle.pro/podcasts/the-odd-years/episodes/both-parties-voters-are-freaked-out-by-ai-so-what-is-congress-going-to-do-about?t=944.9"
    },
    {
      quote: "What I'm torn about with this is every other government program that's supposed to be helping people doesn't. Look at the waste and the fraud and the abuse and the red tape and the nonsense… I think there's probably a better way of doing this than having some kind of a fund.",
      speaker: "Mike Broomhead",
      speakerDescription: "KTAR News Phoenix radio host",
      stance: "critical",
      podcast: "The Mike Broomhead Show",
      episode: "Hour 4: Golden Ticket",
      date: "2026-09-23",
      url: "https://radar.particle.pro/podcasts/the-mike-broomhead-show/episodes/hour-4-golden-ticket?t=1012.8"
    }
  ],
  sanders: [
    {
      quote: "I don't think a moratorium is the solution to all the problems. I think it's the right thing to do now… I talk to mostly working class audiences, and they say, \"Bernie, we are really, really concerned.\" Come back to Capitol Hill, United States Senate, you know what? Hardly anything is being done about it… So the disconnect is five miles wide.",
      speaker: "Bernie Sanders",
      speakerDescription: "U.S. Senator from Vermont",
      stance: "supportive",
      podcast: "Today, Explained",
      episode: "Bernie vs. the billionaires",
      date: "2026-03-14",
      url: "https://radar.particle.pro/podcasts/today-explained/episodes/bernie-vs-the-billionaires?t=750.3"
    },
    {
      quote: "What's a robot is a challenging question, so there's an implementation question there, and I think ultimately you pass a robot tax and everything will start to count as a robot. So maybe that's just the way politically you get it done.",
      speaker: "Betsey Stevenson",
      speakerDescription: "University of Michigan economics professor",
      stance: "analytical",
      podcast: "On with Kara Swisher",
      episode: "Are You Replaceable? How AI Will Impact the Future of Work",
      date: "2025-10-16",
      url: "https://radar.particle.pro/podcasts/on/episodes/are-you-replaceable-how-ai-will-impact-the-future-of-work?t=1925.4"
    },
    {
      quote: "But since Senator Sanders has so much confidence in ChatGPT to create this analysis, I decided to ask ChatGPT if the report's methodology was sound. And it said that the report's methodology was not sound. Maybe one of the biggest errors is the report seemed to confuse the ability of AI to automate particular parts of a job with automating the entire job.",
      speaker: "Jimmy Pethokoukis",
      speakerDescription: "American Enterprise Institute senior fellow",
      stance: "critical",
      podcast: "Power Lunch",
      episode: "S&P paces for first down day in last eight 10/7/25",
      date: "2025-10-07",
      url: "https://radar.particle.pro/podcasts/power-lunch/episodes/sp-paces-for-first-down-day-in-last-eight10725?t=264.0"
    }
  ],
  "khanna-dc-rights": [
    {
      quote: "We need a Data Center Bill of Rights. Look, these companies are in my district, Nvidia, AMD, that are building the chips and the servers, but we can't be putting data centers in residential communities. We can't be putting data centers in farmland. You can't shove a data center down the throats of a local community without any say that that community has.",
      speaker: "Ro Khanna",
      speakerDescription: "U.S. Representative (D-CA), Silicon Valley",
      stance: "supportive",
      podcast: "NBC Meet the Press",
      episode: "Aug. 16  — AG Todd Blanche, Rep. Hakeem Jeffries and Rep. Ro Khanna",
      date: "2026-08-16",
      url: "https://radar.particle.pro/podcasts/nbc-meet-the-press/episodes/aug-16-ag-todd-blanche-rep-hakeem-jeffries-and-rep-ro-khanna?t=2397.2"
    },
    {
      quote: "Ro Khanna hands communities a weapon against the data center boom… The AI boom is coming for your water, your power grid, and your farmland. The only question is whether or not you get a vote.",
      speaker: "Thom Hartmann",
      speakerDescription: "Progressive radio host and commentator",
      stance: "supportive",
      podcast: "The Hartmann Report",
      episode: "Commonwealth Report: Trump’s Fake Watchdog Takes Over Interior",
      date: "2026-08-06",
      url: "https://radar.particle.pro/podcasts/the-hartmann-report/episodes/commonwealth-report-trumps-fake-watchdog-takes-over-interior?t=241.7"
    },
    {
      quote: "Rep Ro Khanna said he will introduce a data center bill of rights that will give local communities the right to say no to AI data centers. Yes, you go, Rep Ro Khanna. That's exactly what Xi Jinping is gonna say.",
      speaker: "Harry Stebbings",
      speakerDescription: "Venture capitalist, host of 20VC",
      stance: "critical",
      podcast: "The Twenty Minute VC (20VC)",
      episode: "20VC: Canva Slashes Growth: How Much is it Really Worth | Demis Hassabis and Jeff Dean: Talent Exodus at Google | Revolut's $50BN CEO Pay Package | Elon Musk's $55BN Terrafab",
      date: "2026-08-13",
      url: "https://radar.particle.pro/podcasts/the-twenty-minute-vc/episodes/20vc-canva-slashes-growth-how-much-is-it-really-worth-demis-hassabis-and-jeff?t=2968.8"
    }
  ],
  "casar-ai-tax": [
    {
      quote: "We need a tax on AI to, one, disincentivize the current model, where these AI companies and big corporations essentially get a tax break for automating your job… we've structured this tax so that it's very low right now, when we aren't facing a mass unemployment crisis, but then would scale up.",
      speaker: "Greg Casar",
      speakerDescription: "U.S. Representative (D-TX), bill co-author",
      stance: "supportive",
      podcast: "Squawk Pod",
      episode: "AI-Made Viruses, A July Jobs Report, & Meta’s Child Harms Case 8/7/26",
      date: "2026-08-07",
      url: "https://radar.particle.pro/podcasts/squawk-pod/episodes/ai-made-viruses-a-july-jobs-report-metas-child-harms-case-8726?t=937.5"
    },
    {
      quote: "Because if you tax it, you'll get less of it, and if we tax it and China doesn't, obviously we're gonna be trailing China eventually.",
      speaker: "Joe Kernen",
      speakerDescription: "CNBC Squawk Box co-anchor",
      stance: "critical",
      podcast: "Squawk Pod",
      episode: "AI-Made Viruses, A July Jobs Report, & Meta’s Child Harms Case 8/7/26",
      date: "2026-08-07",
      url: "https://radar.particle.pro/podcasts/squawk-pod/episodes/ai-made-viruses-a-july-jobs-report-metas-child-harms-case-8726?t=1183.8"
    }
  ],
  gallego: [
    {
      quote: "Just as interesting to me were some of the folks that he was talking to as he was pulling this thing together. One was Alex [Bores], who's the AI safety advocate and New York State legislator. The other that was really striking to me was Bridgewater's co-CIO.",
      speaker: "Sam Sutton",
      speakerDescription: "POLITICO senior reporter",
      stance: "analytical",
      podcast: "POLITICO Tech",
      episode: "Inside AI safety's hottest club",
      date: "2026-10-07",
      url: "https://radar.particle.pro/podcasts/politico-tech/episodes/inside-ai-safetys-hottest-club?t=330.6"
    },
    {
      quote: "You have to have a vision for a world where the economy could lead to great concentration of wealth and people feeling even more economically precarious than they are… Gallego with, I think, a pretty impressive plan here.",
      speaker: "Rob Flaherty",
      speakerDescription: "Democratic strategist, former Biden-Harris deputy campaign manager",
      stance: "supportive",
      podcast: "Nobody Knows Anything",
      episode: "Our Official Midterm Predictions And Why JD Vance Might Not Run For President",
      date: "2026-10-15",
      url: "https://radar.particle.pro/podcasts/nobody-knows-anything/episodes/our-official-midterm-predictions-and-why-jd-vance-might-not-run-for-president?t=2987.2"
    },
    {
      quote: "The way that we have our tax system, it actually costs more to employ a human because you have to pay payroll taxes, and then that does include maybe health insurance and other kind of benefits. So we don't want to have a tax system that is designed to actually encourage automation.",
      speaker: "Ruben Gallego",
      speakerDescription: "U.S. Senator (D-AZ)",
      stance: "supportive",
      podcast: "KJZZ's Sun Up",
      episode: "KJZZ's Sun Up for Oct. 16, 2026",
      date: "2026-10-16",
      url: "https://radar.particle.pro/podcasts/kjzzs-sun-up/episodes/kjzzs-sun-up-for-oct-16-2026?t=204.3"
    }
  ],
  "ca-sb53": [
    {
      quote: "I think that SB 53 probably is the strongest possible thing that could have passed at that particular time and that would've been signed by the governor at that particular time.",
      speaker: "Sneha Revanur",
      speakerDescription: "Encode AI founder; Encode co-sponsored SB 53",
      stance: "supportive",
      podcast: "80,000 Hours Podcast",
      episode: "How a small team of activists helped pass America's landmark AI safety laws | Sneha Revanur, Encode AI",
      date: "2026-07-08",
      url: "https://radar.particle.pro/podcasts/80000-hours/episodes/how-a-small-team-of-activists-helped-pass-americas-landmark-ai-safety-laws?t=1549.7"
    },
    {
      quote: "SB 53, which there was a real fight over… the law covers large frontier developers and requires them to report serious incidents within 15 days but excludes evaluations, right? So… the craziest moment that we've had so far in frontier AI safety is one that is not even covered by probably the landmark frontier AI safety law.",
      speaker: "Gregory C. Allen",
      speakerDescription: "AI Power co-host; ex-CSIS Wadhwani AI Center director",
      stance: "critical",
      podcast: "The AI Power Podcast",
      episode: "OpenAI hack changes state AI regulation debate + Chinese AI running on Chinese chips?",
      date: "2026-08-28",
      url: "https://radar.particle.pro/podcasts/the-ai-power/episodes/openai-hack-changes-state-ai-regulation-debate-chinese-ai-running-on-chinese?t=1352.5"
    },
    {
      quote: "I hope it's not a replacement because I think the structure of SB 53 has caught on, and I wouldn't wanna start over from scratch with an entirely new model. SB 53 is basically trust but verify, requiring a whole bunch of disclosure and then testing that disclosure to make sure that it's valid.",
      speaker: "Jason Elliott",
      speakerDescription: "Former Deputy Chief of Staff to Gov. Newsom",
      stance: "analytical",
      podcast: "The AI Policy Podcast",
      episode: "Decoding State-Level Regulation with Jason Elliott",
      date: "2026-09-10",
      url: "https://radar.particle.pro/podcasts/the-ai-policy/episodes/decoding-state-level-regulation-with-jason-elliott?t=2895.1"
    }
  ],
  "ca-newsom-eo": [
    {
      quote: "It dramatically speeds up our new law, creating a framework for truly independent safety checks, independent verification organizations, as well as moving the timeline up for oversight of AI auditors up by a full year. California wants to create the standards in this space.",
      speaker: "Gavin Newsom",
      speakerDescription: "Governor of California",
      stance: "supportive",
      podcast: "Bloomberg News Now",
      episode: "Newsom AI Order, RFK-Linked Group Offered Access for Money, More",
      date: "2026-09-18",
      url: "https://radar.particle.pro/podcasts/bloomberg-news-now/episodes/newsom-ai-order-rfk-linked-group-offered-access-for-money-more?t=53.2"
    },
    {
      quote: "Newsom is, if nothing else, going to be a useful bellwether for understanding AI politics for the Democratic Party… he has in the past vetoed AI safety legislation. Meaning that shifts in tone in the way that he justifies things are going to provide some interesting signal about where the winds are blowing.",
      speaker: "Nathaniel Whittemore",
      speakerDescription: "Host of The AI Daily Brief",
      stance: "analytical",
      podcast: "The AI Daily Brief (Formerly The AI Breakdown): Artificial Intelligence News and Analysis",
      episode: "The State of the AI Debate",
      date: "2026-09-21",
      url: "https://radar.particle.pro/podcasts/the-ai-daily-brief/episodes/the-state-of-the-ai-debate?t=1083.3"
    },
    {
      quote: "AI systems pose dangers that you must prevent, not undo… safety isn't as simple as flipping a switch. Frontier AI systems aren't like the power grid, which doesn't fight its operator.",
      speaker: "Tango Botelli",
      speakerDescription: "Co-host of the AI StopWatch podcast",
      stance: "critical",
      podcast: "AI StopWatch Podcast",
      episode: "Podcast: Walkabout",
      date: "2026-09-24",
      url: "https://radar.particle.pro/podcasts/ai-stopwatch/episodes/podcast-walkabout?t=892.8"
    }
  ],
  "il-sb315": [
    {
      quote: "Rather than sitting back and waiting for those [risks] to emerge, our legislation proactively seeks to find risk to embed safety and accountability into the industry and to promote public trust.",
      speaker: "J.B. Pritzker",
      speakerDescription: "Governor of Illinois",
      stance: "supportive",
      podcast: "iHeartRadio 24/7 News: The Latest",
      episode: "The Latest: 07/07/2026 09:59am ET",
      date: "2026-07-07",
      url: "https://radar.particle.pro/podcasts/iheartradio-247-news/episodes/the-latest-07072026-0959am-et?t=201.8"
    },
    {
      quote: "California and New York now, and Illinois, the three of them together, they represent forty percent of the American AI market. Which means three governors in three state houses have effectively written an AI standard, while Congress never even voted on it.",
      speaker: "Michael Smerconish",
      speakerDescription: "SiriusXM radio host and TV presenter",
      stance: "analytical",
      podcast: "The Smerconish Podcast",
      episode: "Today's Poll Question: What do you fear more — AI, or the government that would regulate it?",
      date: "2026-07-10",
      url: "https://radar.particle.pro/podcasts/the-smerconish/episodes/todays-poll-question-what-do-you-fear-more-ai-or-the-government-that-would?t=644.0"
    },
    {
      quote: "Illinois just passed a bill requiring massive tech companies to audit their AI safety because apparently politicians think they can put a digital leash on a Terminator. If you think a $3 million fine is going to stop Meta, you probably still believe in the Tooth Fairy.",
      speaker: "Rich Rockwell",
      speakerDescription: "Co-host of the talk show Rich and the People",
      stance: "critical",
      podcast: "Rich and the People",
      episode: "Rich and the People Episode 362",
      date: "2026-10-08",
      url: "https://radar.particle.pro/podcasts/rich-and-the-people/episodes/rich-and-the-people-episode-362?t=796.0"
    }
  ],
  "ny-raise": [
    {
      quote: "The RAISE Act, when passed, was the strongest AI safety law in the country. But it didn't actually put that many demands. It applies to probably five companies by its thresholds…",
      speaker: "Alex Bores",
      speakerDescription: "NY Assemblymember and RAISE Act sponsor",
      stance: "supportive",
      podcast: "GD POLITICS",
      episode: "Alex Bores Puts The Odds Of AI Doom At 20%",
      date: "2026-10-12",
      url: "https://radar.particle.pro/podcasts/gd-politics/episodes/alex-bores-puts-the-odds-of-ai-doom-at-20?t=953.4"
    },
    {
      quote: "I think what was striking to me was sort of how much mythology was baked into what was happening in terms of the notion that the RAISE Act itself was going to have a massive impact on the industry, which I do not think it will…",
      speaker: "Micah Lasher",
      speakerDescription: "NY Assemblymember; Democratic nominee for NY-12",
      stance: "critical",
      podcast: "Firewall with Bradley Tusk",
      episode: "Micah Wins!",
      date: "2026-07-02",
      url: "https://radar.particle.pro/podcasts/firewall/episodes/micah-wins?t=244.6"
    },
    {
      quote: "You had this super PAC where Greg Brockman, the president of OpenAI, is a very influential character, prominently opposing the RAISE Act. And then you have OpenAI's chief global affairs officer basically praising the outcome as we got it.",
      speaker: "Gregory C. Allen",
      speakerDescription: "Decision Tree Research CEO; ex-CSIS AI director",
      stance: "analytical",
      podcast: "The AI Policy Podcast",
      episode: "xAI's Latest Controversy and New York's New AI Safety Bill",
      date: "2026-01-09",
      url: "https://radar.particle.pro/podcasts/the-ai-policy/episodes/xais-latest-controversy-and-new-yorks-new-ai-safety-bill?t=2381.8"
    }
  ],
  "pa-shapiro-eo": [
    {
      quote: "In this executive order, I'm making clear that non-disclosure agreements will not be permissible for data center projects. It is important that developers understand they need to be open on every single detail with our communities. And if they won't be, well, they are not welcome to do business in Pennsylvania.",
      speaker: "Josh Shapiro",
      speakerDescription: "Governor of Pennsylvania",
      stance: "supportive",
      podcast: "The Morning Agenda",
      episode: "Crash injures two state police troopers, kills a pilot.",
      date: "2026-08-20",
      url: "https://radar.particle.pro/podcasts/the-morning-agenda/episodes/crash-injures-two-state-police-troopers-kills-a-pilot?t=210.0"
    },
    {
      quote: "Josh Shapiro, if you looked at the spectrum of the field, was probably the most overtly pro data center… and pro AI investment and all that kind of stuff. He was out really early on this stuff. And now you see him implementing really strict restrictions.",
      speaker: "Rob Flaherty",
      speakerDescription: "Democratic strategist; ex-Biden deputy campaign manager",
      stance: "analytical",
      podcast: "Nobody Knows Anything",
      episode: "The Rise of Socialism, Data Center Backlash & the 2028 Democratic Race",
      date: "2026-08-20",
      url: "https://radar.particle.pro/podcasts/nobody-knows-anything/episodes/the-rise-of-socialism-data-center-backlash-the-2028-democratic-race?t=1448.0"
    },
    {
      quote: "He did not go through the legislature on this. So for all his talk about Trump being a dictator and bypassing the norms, there is a bill in the Pennsylvania legislature which would regulate data centers. Shapiro, he's got no time for that.",
      speaker: "Rich Zeoli",
      speakerDescription: "Conservative talk host, 1210 WPHT Philadelphia",
      stance: "critical",
      podcast: "The Rich Zeoli Podcast: Daily Politics, Culture & Chaos",
      episode: "Shapiro Eyes 2028 and Caves to Progressives on Data Centers PLUS Florida Finds the Next DSA Nut Job",
      date: "2026-08-19",
      url: "https://radar.particle.pro/podcasts/the-rich-zeoli/episodes/shapiro-eyes-2028-and-caves-to-progressives-on-data-centers-plus-florida-finds?t=112.2"
    }
  ],
  "tx-abbott-audit": [
    {
      quote: "At this time last year, Abbott… was one of sort of the politicians who was sort of most full-throatedly endorsing data centers in Texas and the rapid development thereof. It's only with the shifting sentiment and the sort of the growing backlash that he's been forced to respond.",
      speaker: "Brian Merchant",
      speakerDescription: "Tech journalist, author of Blood in the Machine",
      stance: "analytical",
      podcast: "The Tech Report",
      episode: "Data center developers have ‘dug their own graves’ | Brian Merchant",
      date: "2026-08-25",
      url: "https://radar.particle.pro/podcasts/the-tech-report/episodes/data-center-developers-have-dug-their-own-graves-brian-merchant?t=133.3"
    },
    {
      quote: "We'll also be able to have essentially a report card where we think that there are deficiencies and responses and be able to make that public as well.",
      speaker: "Chad Seely",
      speakerDescription: "ERCOT senior vice president",
      stance: "analytical",
      podcast: "Houston Public Media Newscasts",
      episode: "7am Newscast September, 14, 2026",
      date: "2026-09-14",
      url: "https://radar.particle.pro/podcasts/houston-public-media-newscasts/episodes/7am-newscast-september-14-2026?t=36.1"
    },
    {
      quote: "How does a data center prove that they're going to lower power bills for households? In other words, they can't prove that, which means this is just a ban on data centers.",
      speaker: "Jack Gamble",
      speakerDescription: "Host of Nobody Special Finance",
      stance: "critical",
      podcast: "Nobody Special Finance",
      episode: "Oil Falls Again on Diplomatic Hopium",
      date: "2026-09-22",
      url: "https://radar.particle.pro/podcasts/nobody-special-finance/episodes/oil-falls-again-on-diplomatic-hopium?t=2185.0"
    }
  ],
  "lieu-kill-switch": [
    {
      quote: "Look, when you put a brake in a car, that enabled the car, frankly, for you to drive it faster because without a brake… it can't go near as fast. So if you want to innovate…, you have to have a built-in brake that can slow the car down or stop it altogether when necessary.",
      speaker: "Nathaniel Moran",
      speakerDescription: "U.S. Representative (R-TX), bill co-sponsor",
      stance: "supportive",
      podcast: "Guardrails: The AI Watchdog Pod",
      episode: "EP. 001 | Rep. Nathaniel Moran: Why AI Needs a Kill Switch",
      date: "2026-09-18",
      url: "https://radar.particle.pro/podcasts/guardrails/episodes/ep-001-rep-nathaniel-moran-why-ai-needs-a-kill-switch?t=271.8"
    },
    {
      quote: "Some people regard the idea of a kill switch as being not enough. Others believe that it's too much of a government intervention. … And then more worrying is that the proposed bill says that it's Homeland Security who can flick that switch rather than it being a technical agency that does this.",
      speaker: "Alan Smeaton",
      speakerDescription: "Emeritus Professor of Computing, Dublin City University",
      stance: "critical",
      podcast: "Drivetime",
      episode: "AI Series - Should we be worried about it going rogue?",
      date: "2026-07-24",
      url: "https://radar.particle.pro/podcasts/drivetime/episodes/ai-series-should-we-be-worried-about-it-going-rogue?t=264.9"
    },
    {
      quote: "I have particular views on kill switches, which is that they're actually incredibly hard to implement because there are so many different models.",
      speaker: "Katherine Forrest",
      speakerDescription: "Paul, Weiss AI practice co-chair; former federal judge",
      stance: "analytical",
      podcast: "Paul, Weiss Waking Up With AI",
      episode: "Recursive Self-Improvement and the Road to Superintelligence",
      date: "2026-08-13",
      url: "https://radar.particle.pro/podcasts/paul-weiss-waking-up/episodes/recursive-self-improvement-and-the-road-to-superintelligence?t=781.8"
    }
  ],
  "hawley-murphy": [
    {
      quote: "If they break something, they ought to pay for it. If their agents cause the collapse of hospitals, people's bank accounts, they can't get in and get their cash, they ought to be on the hook for that.",
      speaker: "Josh Hawley",
      speakerDescription: "U.S. Senator (R-MO), bill co-sponsor",
      stance: "supportive",
      podcast: "EWTN News Nightly",
      episode: "EWTN News Nightly | Friday, October 2, 2026",
      date: "2026-10-02",
      url: "https://radar.particle.pro/podcasts/ewtn-news-nightly/episodes/ewtn-news-nightly-friday-october-2-2026?t=402.2"
    },
    {
      quote: "That's more of a narrow piece of legislation. It's great that it has bipartisan support, but it doesn't go as far as this legislation because that only applies to hacking-related violations under CFAA.",
      speaker: "Ben Yelin",
      speakerDescription: "University of Maryland cyber law and policy director",
      stance: "analytical",
      podcast: "Caveat",
      episode: "Who's liable when AI goes rogue?",
      date: "2026-10-15",
      url: "https://radar.particle.pro/podcasts/caveat/episodes/whos-liable-when-ai-goes-rogue?t=984.9"
    },
    {
      quote: "Look at Senator Josh Hawley of Missouri. He's not even up for re-election. He just partnered with Chris Murphy, a Democrat of Connecticut, on an AI bill that would put liability, legal liability, on companies… So there are a lot of Republicans who are pushing for regulations, those who have no real personal stake in what happens with this election.",
      speaker: "Ahtra Elnashar",
      speakerDescription: "Sinclair national correspondent covering Capitol Hill",
      stance: "analytical",
      podcast: "The National Press",
      episode: "How Young Is Too Young for Life in Prison? And When Is It Too Late to Regulate AI? - 10-7-2026",
      date: "2026-10-07",
      url: "https://radar.particle.pro/podcasts/the-national-press/episodes/how-young-is-too-young-for-life-in-prison-and-when-is-it-too-late-to-regulate?t=1444.2"
    }
  ],
  "trahan-claim": [
    {
      quote: "Look, a company says we couldn't have seen it coming and we did everything right. The person who got hurt walks away with nothing. So the CLAIM Act says you don't have to prove that the company was careless about building the AI. You have to show that the AI itself acted carelessly. And that's a fair standard…",
      speaker: "Lori Trahan",
      speakerDescription: "U.S. Representative (D-MA), CLAIM Act sponsor",
      stance: "supportive",
      podcast: "The Mark And Melynda Show",
      episode: "10-13-26 Mark and Melynda",
      date: "2026-10-13",
      url: "https://radar.particle.pro/podcasts/the-mark-and-melynda-show/episodes/10-13-26-mark-and-melynda?t=3875.7"
    },
    {
      quote: "So I think this is just kind of the opening bid, kind of the maximalist position on regulating these AI agents. And it can be a jumping off point for negotiations.",
      speaker: "Ben Yelin",
      speakerDescription: "University of Maryland cyber law and policy director",
      stance: "analytical",
      podcast: "Caveat",
      episode: "Who's liable when AI goes rogue?",
      date: "2026-10-15",
      url: "https://radar.particle.pro/podcasts/caveat/episodes/whos-liable-when-ai-goes-rogue?t=1002.9"
    }
  ],
  "jayapal-charter": [
    {
      quote: "What my bill does is it structurally separates these big tech companies. … And if you do that, if you structurally separate, you take away the profit incentive for these companies to prioritize engagement over safety on the social media side.",
      speaker: "Pramila Jayapal",
      speakerDescription: "U.S. Representative (D-WA), framework author",
      stance: "supportive",
      podcast: "The Hartmann Report",
      episode: "Will Democrats Enforce the Law?",
      date: "2026-10-13",
      url: "https://radar.particle.pro/podcasts/the-hartmann-report/episodes/will-democrats-enforce-the-law?t=1662.1"
    },
    {
      quote: "You have a proposal that the AI charter authority would be funded by charter fees from the companies themselves, and that makes me think of the patent office… Critics have said that that's part of why the patent office hands out too many low-quality patents because they are incentivized to issue patents.",
      speaker: "Matt Stoller",
      speakerDescription: "Research director, American Economic Liberties Project",
      stance: "analytical",
      podcast: "Organized Money",
      episode: "Charting A New Course On AI Regulation (With Rep. Pramila Jayapal)",
      date: "2026-10-13",
      url: "https://radar.particle.pro/podcasts/organized-money/episodes/charting-a-new-course-on-ai-regulation-with-rep-pramila-jayapal?t=1559.2"
    },
    {
      quote: "I do think there's some sense in making it a federal AI charter. This is such a big part of our economy right now. It's propping up the whole economy, and there's so much anxiety about how this will transform things that, yeah, we should get in on the ground floor…",
      speaker: "David Dayen",
      speakerDescription: "Executive editor, The American Prospect",
      stance: "supportive",
      podcast: "Organized Money",
      episode: "Charting A New Course On AI Regulation (With Rep. Pramila Jayapal)",
      date: "2026-10-13",
      url: "https://radar.particle.pro/podcasts/organized-money/episodes/charting-a-new-course-on-ai-regulation-with-rep-pramila-jayapal?t=3199.6"
    }
  ]
};
