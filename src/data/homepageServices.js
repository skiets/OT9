import {
  IconRadar,
  IconShield,
  IconSwords,
  IconTarget,
  IconUserShield,
} from "@tabler/icons-vue";

export const services = [
  {
    slug: "ciso-as-a-service",
    number: "01",
    title: "CISO AS A SERVICE",
    headline: "Executive Cybersecurity Leadership—Without the Full-Time Cost",
    summary:
      "Experienced cybersecurity leadership to establish strategy, governance, risk management, and accountability without a full-time CISO.",
    intro:
      "Not every organization needs a full-time CISO. Every organization needs CISO-level leadership.",
    description:
      "OT9 Labs provides experienced cybersecurity leadership on demand, helping organizations establish the strategy, governance, risk management, and accountability required to build a mature security program. We work alongside executive leadership, technology teams, and boards to transform cybersecurity from a technical concern into a business priority.",
    icon: IconShield,
    sections: [
      {
        label: "WHAT WE DELIVER",
        items: [
          "Cybersecurity Strategy and Roadmaps",
          "Security Governance and Policy Development",
          "Risk Assessments and Risk Management",
          "Board and Executive Advisory",
          "Incident Response Planning",
          "Security Architecture Oversight",
          "Regulatory and Compliance Readiness",
          "Third-Party and Supply-Chain Risk Management",
          "Security Program Development",
          "Fractional CISO Leadership and Advisory",
        ],
      },
    ],
    outcome: "Stronger security. Better decisions. Clearer accountability.",
  },
  {
    slug: "red-team-operations",
    number: "02",
    title: "RED TEAM OPERATIONS",
    headline: "Think Like an Adversary. Find the Weakness First.",
    summary:
      "Intelligence-driven operations reveal weaknesses across people, technology, processes, and physical environments.",
    intro:
      "The best way to understand your defenses is to test them from an adversary’s perspective.",
    description:
      "OT9 Labs conducts realistic, intelligence-driven red team operations designed to uncover weaknesses across people, technology, processes, and physical environments. We simulate how a determined adversary could identify an opportunity, gain access, exploit weaknesses, move through an environment, and achieve an objective. We combine human expertise, automation, threat intelligence, and AI-assisted techniques to challenge defensive capabilities and identify attack paths before they can be exploited.",
    icon: IconTarget,
    sections: [
      {
        label: "OUR APPROACH",
        flow: [
          "RECONNAISSANCE",
          "INITIAL ACCESS",
          "EXPLOITATION",
          "LATERAL MOVEMENT",
          "OBJECTIVE",
          "REPORT",
        ],
      },
      {
        label: "AREAS WE TEST",
        items: [
          "External Attack Surfaces",
          "Web Applications and Digital Services",
          "Identity and Access Controls",
          "Cloud Environments",
          "Social Engineering Resilience",
          "Physical Security Controls",
          "Detection and Response Capabilities",
          "Attack Paths and Lateral Movement",
          "Executive and High-Value Target Exposure",
        ],
      },
    ],
    outcome:
      "Understand how you could be breached before an adversary shows you.",
  },
  {
    slug: "digital-risk-protection",
    number: "03",
    title: "DIGITAL RISK PROTECTION",
    headline: "Your Attack Surface Doesn’t End at the Firewall.",
    summary:
      "Identify exposed data, impersonation, malicious infrastructure, and emerging attack paths beyond your perimeter.",
    intro:
      "Your organization’s digital footprint is constantly changing—and much of it exists outside your direct control.",
    description:
      "Exposed credentials, leaked information, impersonation, malicious domains, fraudulent profiles, forgotten assets, and executive exposure can all create opportunities for attackers. OT9 Labs monitors your external digital environment to identify, validate, and prioritize risks before they become incidents.",
    icon: IconRadar,
    sections: [
      {
        label: "WE MONITOR FOR",
        items: [
          "Exposed Credentials",
          "Data Leaks",
          "Dark Web Exposure",
          "Domain and Brand Impersonation",
          "Phishing Infrastructure",
          "Executive and Key-Person Exposure",
          "Rogue Websites and Applications",
          "Social Media Impersonation",
          "Exposed Infrastructure",
          "External Attack Surface Changes",
          "Third-Party Digital Risks",
        ],
      },
      {
        label: "FROM DISCOVERY TO ACTION",
        intro:
          "We don’t simply generate alerts. Our objective is straightforward: reduce exposure and disrupt opportunities before an adversary can exploit them.",
        flow: ["WE IDENTIFY", "WE VALIDATE", "WE PRIORITIZE", "WE RESPOND"],
      },
    ],
    outcome: "Less exposure. Fewer surprises. Faster response.",
  },
  {
    slug: "vip-protection",
    number: "04",
    title: "VIP PROTECTION",
    headline: "Protecting the People Behind the Organization.",
    summary:
      "Protect executives, high-value individuals, families, identities, and the organizations around them.",
    intro:
      "Executives, founders, public figures, family offices, and high-net-worth individuals are increasingly targeted across both digital and physical environments.",
    description:
      "A compromised executive can become a pathway into an organization. An exposed family member, leaked credential, impersonated identity, or predictable pattern of activity can create risks that traditional enterprise security programs may never see. OT9 Labs brings cybersecurity, threat intelligence, and protective intelligence together to protect high-value individuals, their families, their identities, and the organizations around them.",
    icon: IconUserShield,
    sections: [
      {
        label: "PROTECTION INCLUDES",
        items: [
          "Executive Cyber Risk Assessments",
          "Digital Footprint and Exposure Assessments",
          "Continuous Online Exposure Monitoring",
          "Executive Impersonation Detection",
          "Credential and Data Exposure Monitoring",
          "Threat and Protective Intelligence",
          "Travel and Location Risk Intelligence",
          "Social Engineering Risk Assessments",
          "Family and Household Digital Security",
          "Incident Response Support",
          "Coordination with Physical Protection Teams",
        ],
      },
    ],
    outcome:
      "Protect the person. Protect the identity. Protect the organization.",
  },
  {
    slug: "operational-readiness-and-small-unit-tactics",
    number: "05",
    title: "OPERATIONAL READINESS & SMALL UNIT TACTICS",
    headline: "Coordinated Teams. Clear Decisions. Controlled Response.",
    summary:
      "Build team capabilities to communicate, coordinate, and act effectively in complex, rapidly changing environments.",
    intro: "Security incidents rarely unfold according to plan.",
    description:
      "When conditions change quickly, technology and intelligence alone are not enough. People must be able to communicate, coordinate, make sound decisions, and act effectively under pressure. OT9 Labs develops small-team operational capabilities for organizations and protective teams that require disciplined coordination in complex, rapidly changing environments. Our programs emphasize situational awareness, communication, leadership, protective movement, contingency planning, incident coordination, and scenario-based decision-making.",
    icon: IconSwords,
    sections: [
      {
        label: "TRAINING AREAS",
        items: [
          "Team Coordination and Communication",
          "Situational Awareness",
          "Threat Recognition and Assessment",
          "Protective Movement and Formations",
          "Site and Venue Security",
          "Emergency Response",
          "Incident Command and Coordination",
          "Contingency Planning",
          "Team Leadership Under Pressure",
          "Scenario-Based Exercises",
        ],
      },
      {
        label: "THE OT9 APPROACH",
        flow: ["ASSESS", "PLAN", "COORDINATE", "RESPOND", "ADAPT", "RECOVER"],
        intro:
          "We develop teams that can maintain awareness, communicate clearly, and make disciplined decisions when conditions are uncertain and time is limited.",
      },
    ],
    outcome: "Better coordination. Faster decisions. More resilient teams.",
  },
];

export const securityPositioning = {
  title: "SECURITY IS A TEAM SPORT.",
  paragraphs: [
    "Technology can detect a threat.",
    "Intelligence can identify and contextualize it.",
    "Leadership can make the decision.",
    "But when a situation changes in real time, people must know how to work together.",
    "OT9 Labs bridges the gap between intelligence, cybersecurity, leadership, and action—giving organizations the capabilities to anticipate threats, expose weaknesses, protect people, and respond effectively when it matters most.",
  ],
};

export const securityLayers = [
  {
    dimension: "LEADERSHIP",
    service: "CISO AS A SERVICE",
    description:
      "Build the strategy, governance, and executive accountability required to manage cyber risk.",
  },
  {
    dimension: "OFFENSE",
    service: "RED TEAM OPERATIONS",
    description:
      "Challenge defenses from an adversary’s perspective and uncover weaknesses before they are exploited.",
  },
  {
    dimension: "EXPOSURE",
    service: "DIGITAL RISK PROTECTION",
    description:
      "Identify external threats, exposed assets, impersonation, leaked information, and emerging attack paths.",
  },
  {
    dimension: "PEOPLE",
    service: "VIP PROTECTION",
    description:
      "Protect executives, high-value individuals, families, and digital identities from targeted threats.",
  },
  {
    dimension: "READINESS",
    service: "OPERATIONAL READINESS & SMALL UNIT TACTICS",
    description:
      "Prepare teams to coordinate, decide, and respond effectively when security situations move from intelligence to action.",
  },
];

export const securityLayersConclusion =
  "Together, these capabilities create a security model built for the reality of modern threats—where cyber, physical, human, and organizational risks increasingly intersect.";
