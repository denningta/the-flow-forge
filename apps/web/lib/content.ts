import {
  Activity,
  ClipboardList,
  Cog,
  Factory,
  GitCompareArrows,
  Layers,
  LineChart,
  Map,
  Plug,
  Repeat,
  Search,
  Workflow,
  type LucideIcon,
} from "lucide-react"

/** Page copy lives here so sections stay presentational and edits stay in one file. */

export const PAINS: readonly string[] = [
  "Production status lives in spreadsheets.",
  "Leadership meetings are spent gathering information instead of solving problems.",
  "Engineering, quality, and production all have different versions of reality.",
  "Operators spend more time updating systems than building products.",
  "Critical metrics are manually assembled every week.",
  "Problems are discovered days after they occur.",
]

export type Capability = {
  readonly icon: LucideIcon
  readonly title: string
  readonly description: string
}

export const CAPABILITIES: readonly Capability[] = [
  {
    icon: Activity,
    title: "Operational Visibility",
    description:
      "Know what is happening across production, quality, engineering, and delivery in real time — not at the end of the week.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description:
      "Eliminate manual updates, duplicate data entry, and the spreadsheet-driven workflows holding your operation together.",
  },
  {
    icon: Repeat,
    title: "Daily Management Systems",
    description:
      "Create a structured operating cadence that turns data into decisions and decisions into action on the floor.",
  },
  {
    icon: Plug,
    title: "Digital Integration",
    description:
      "Connect ERP, MES, QMS, PDM, spreadsheets, and custom systems — without replacing the software you already run.",
  },
]

export const INDUSTRIES: readonly string[] = [
  "Aerospace",
  "Defense",
  "Precision Machining",
  "Contract Manufacturing",
  "Industrial Equipment",
  "Build-to-Print Fabrication",
]

export type Differentiator = {
  readonly icon: LucideIcon
  readonly label: string
}

export const DIFFERENTIATORS: readonly Differentiator[] = [
  { icon: Factory, label: "Aerospace manufacturing experience" },
  { icon: Workflow, label: "Lean manufacturing systems" },
  { icon: ClipboardList, label: "Quality systems expertise" },
  { icon: Layers, label: "Software development" },
  { icon: GitCompareArrows, label: "Data integration" },
]

export type ProcessStep = {
  readonly icon: LucideIcon
  readonly title: string
  readonly description: string
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    icon: Search,
    title: "Assess",
    description:
      "We walk the floor, sit in your meetings, and trace how information actually moves — not how the org chart says it should.",
  },
  {
    icon: Map,
    title: "Map",
    description:
      "Current-state process and information flow, with every handoff, spreadsheet, and re-keyed field made visible in one picture.",
  },
  {
    icon: Plug,
    title: "Integrate",
    description:
      "We connect the systems you already own so data flows once, automatically, into a single source of truth.",
  },
  {
    icon: LineChart,
    title: "Operate",
    description:
      "A daily management cadence built on live data, so your team runs the system instead of assembling it.",
  },
]

export const ASSESSMENT_DELIVERABLES: readonly string[] = [
  "Current-state process map",
  "Information flow analysis",
  "Bottleneck identification",
  "Spreadsheet dependency assessment",
  "Leadership system review",
  "Prioritized improvement roadmap",
]

export const CASE_STUDY = {
  problem:
    "Production status required three separate meetings and half a dozen spreadsheets every week. By the time leadership saw a number, it was already four days old.",
  solution:
    "Connected ERP, quality, and production data into a single real-time operations dashboard, and rebuilt the weekly review around it as a 15-minute daily standup.",
  result:
    "Status meeting time dropped by 75%, and production risks surfaced days earlier — while the team was still able to do something about them.",
} as const

export type Faq = {
  readonly question: string
  readonly answer: string
}

export const FAQS: readonly Faq[] = [
  {
    question: "Do we have to replace our ERP?",
    answer:
      "No. Replacing an ERP is expensive, slow, and rarely the actual problem. We integrate the systems you already own — ERP, MES, QMS, PDM, and yes, the spreadsheets — so information moves between them automatically.",
  },
  {
    question: "How long does the Factory Flow Assessment take?",
    answer:
      "Typically two to three weeks end to end, including one to two days on site. You get the full findings package and roadmap at the end — whether or not you engage us for the work that follows.",
  },
  {
    question: "Are we too small for this?",
    answer:
      "Small and mid-size manufacturers are exactly who this is built for. If you have 25 to 500 people, more systems than you have people to maintain them, and a leadership team that spends its meetings assembling data, you are the right fit.",
  },
  {
    question: "Who from our team needs to be involved?",
    answer:
      "Operations leadership, plus whoever actually touches the data day to day — a production planner, a quality lead, and your ERP administrator. Roughly four to six hours of their time across the engagement.",
  },
  {
    question: "What happens after the assessment?",
    answer:
      "You own the roadmap either way. Most clients pick the top one or two items and have us implement them; some take it in house. There is no obligation to continue, and the assessment is priced so it stands on its own.",
  },
]

export const TRUST_POINTS: readonly string[] = [
  "Aerospace & industrial focus",
  "Works with your existing systems",
  "Fixed-fee first engagement",
]
