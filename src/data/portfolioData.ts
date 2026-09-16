import { SkillItem, ExperienceRole, ChronologyStage, AcademicRecord, MilestoneItem, NeuralNode } from '../types';

export const PERSONAL_INFO = {
  name: "Tesia Srivastava",
  title: "B.Tech - Artificial Intelligence & Data Science",
  institution: "REVA University, Bangalore",
  status: "SYSTEM OPERATIONAL // AI & DATA SCIENCE SPECIALIST",
  location: "BANGALORE // 13.0827°N",
  nodeId: "REVA.AI.DS_v29",
  sysId: "SYS.ID // TS_2029",
  email: "tessiaasrivastava1661@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/tesia-srivastava-893098798498",
  githubUrl: "https://github.com/tesia-srivastava",
  summary:
    "B.Tech student specializing in Artificial Intelligence and Data Science with hands-on experience in web development, IoT projects, business development, and practical technology solutions.",
  identityStatement:
    "I am an aspiring technologist and analytical thinker driven by curiosity at the intersection of applied artificial intelligence, connected devices, and agile product development. Guided by systematic curiosity, I focus on turning theoretical frameworks into functional prototypes and measurable real-world solutions.",
  metrics: [
    { label: "FIELD OF STUDY", value: "B.Tech AI & Data Science", sub: "Undergraduate Program", highlight: false },
    { label: "INSTITUTION", value: "REVA University", sub: "Bangalore, India", highlight: false },
    { label: "TIMELINE", value: "Class of 2029", sub: "Expected July 2029", highlight: false },
    { label: "YEAR 1 PERFORMANCE", value: "8.2 CGPA", sub: "Academic Excellence", highlight: true },
    { label: "ENGINEERING ROLE", value: "Web Dev Trainee", sub: "Venturing Digitally", highlight: false },
    { label: "BUSINESS ROLE", value: "Business Dev Intern", sub: "Consulting Lead", highlight: false }
  ]
};

export const NEURAL_NODES: NeuralNode[] = [
  {
    id: "data",
    label: "DATA",
    x: 60,
    y: 95,
    type: "input",
    color: "#0284c7",
    description: "Multi-modal input streams & statistical data pipelines.",
    telemetry: { weights: 1024, latency: "0.4ms", state: "STREAMING" }
  },
  {
    id: "n1",
    label: "N1.AI",
    x: 130,
    y: 35,
    type: "hidden",
    color: "#7c3aed",
    description: "Neural inference core & applied predictive models.",
    telemetry: { weights: 24500, latency: "1.2ms", state: "CONVERGED" }
  },
  {
    id: "n2",
    label: "N2.IOT",
    x: 145,
    y: 110,
    type: "hidden",
    color: "#059669",
    description: "Hardware micro-controller interfaces & environmental sensors.",
    telemetry: { weights: 512, latency: "2.1ms", state: "POLLED" }
  },
  {
    id: "n3",
    label: "N3.DEV",
    x: 215,
    y: 40,
    type: "hidden",
    color: "#0284c7",
    description: "Full-stack client architectures & responsive visual interfaces.",
    telemetry: { weights: 8200, latency: "0.8ms", state: "MOUNTED" }
  },
  {
    id: "n4",
    label: "N4.STRAT",
    x: 220,
    y: 115,
    type: "hidden",
    color: "#7c3aed",
    description: "Business analytics, market research & strategic roadmapping.",
    telemetry: { weights: 4096, latency: "1.5ms", state: "OPTIMIZED" }
  },
  {
    id: "synthesis",
    label: "SYNTHESIS",
    x: 285,
    y: 95,
    type: "output",
    color: "#10b981",
    description: "Unified production solution delivering measurable value.",
    telemetry: { weights: 38240, latency: "0.2ms", state: "VALIDATED" }
  }
];

export const SKILLS: SkillItem[] = [
  // Programming & Hardware Systems
  {
    id: "html5",
    name: "HTML5",
    subtitle: "Frontend Core",
    category: "engineering",
    iconType: "html5",
    description: "Semantic web structuring, accessible document hierarchies, modern HTML5 API standards."
  },
  {
    id: "css3",
    name: "CSS3",
    subtitle: "Responsive Styling",
    category: "engineering",
    iconType: "css3",
    description: "Fluid grid systems, flexbox mechanics, responsive layouts, CSS keyframe animations."
  },
  {
    id: "javascript",
    name: "JavaScript",
    subtitle: "Client Logic",
    category: "engineering",
    iconType: "javascript",
    description: "Modern ES6+ syntax, asynchronous event loop, DOM manipulation, client-side routing."
  },
  {
    id: "iot",
    name: "IoT Architecture",
    subtitle: "Embedded Sensors",
    category: "hardware",
    iconType: "iot",
    description: "Sensor telemetry acquisition, analog-to-digital signal processing, I2C/SPI protocols."
  },
  {
    id: "nodemcu",
    name: "NodeMCU ESP8266",
    subtitle: "Wi-Fi Microcontroller & Hardware Interfacing",
    category: "hardware",
    iconType: "nodemcu",
    description: "Firmware flashing, embedded C/C++, Wi-Fi station mode, TCP socket transmission."
  },
  // Professional & Operational Skills
  {
    id: "teamwork",
    name: "Teamwork",
    subtitle: "Cross-functional synergy",
    category: "operational",
    iconType: "teamwork",
    description: "Collaborating across diverse developer, design, and operations teams to align on deliverables."
  },
  {
    id: "leadership",
    name: "Leadership",
    subtitle: "Club & team leads",
    category: "leadership",
    iconType: "leadership",
    description: "Leading campus music club initiatives, directing logistics, and empowering peers."
  },
  {
    id: "time_mgmt",
    name: "Time Mgmt",
    subtitle: "Sprint adherence",
    category: "operational",
    iconType: "time",
    description: "Prioritizing high-leverage milestones, managing concurrent academic & development sprints."
  },
  {
    id: "organization",
    name: "Organization",
    subtitle: "Structured registers",
    category: "operational",
    iconType: "org",
    description: "Designing systematic databases, lead tracking pipelines, and structured project repos."
  },
  {
    id: "detail_focus",
    name: "Detail Focus",
    subtitle: "Lead qualification",
    category: "operational",
    iconType: "detail",
    description: "High-precision analysis, prospecting data verification, and rigorous code reviews."
  },
  {
    id: "adaptability",
    name: "Adaptability",
    subtitle: "Tech & strategy agile",
    category: "leadership",
    iconType: "adapt",
    description: "Rapidly mastering emerging frameworks, evolving toolsets, and fast-paced client needs."
  }
];

export const EXPERIENCE: ExperienceRole[] = [
  {
    id: "role_01",
    roleNumber: "ROLE // 01",
    title: "Business Development Intern",
    organization: "Independent Consultant - Strategy & Transformation Consulting",
    status: "PRESENT",
    location: "Bangalore | Remote",
    timeline: "2026 - Present",
    bullets: [
      "Conducted LinkedIn research to identify relevant prospects, companies, and decision-makers.",
      "Built and maintained Excel-based lead databases.",
      "Supported targeted email outreach campaigns.",
      "Researched companies and hiring requirements.",
      "Assisted with lead generation, prospect research, and outreach activities."
    ]
  },
  {
    id: "role_02",
    roleNumber: "ROLE // 02",
    title: "Web Development Trainee",
    organization: "Venturing Digitally",
    status: "COMPLETED",
    location: "Jamshedpur, India",
    timeline: "July 2025 - August 2025",
    bullets: [
      "Gained hands-on experience in HTML, CSS, and JavaScript.",
      "Developed basic responsive website frontends.",
      "Created and customized webpages focusing on layout, navigation, styling, and UI design.",
      "Built functional front-end prototypes."
    ]
  }
];

export const CHRONOLOGY_STAGES: ChronologyStage[] = [
  {
    id: "stage_01",
    number: "01",
    title: "School Foundation",
    subtitle: "Riverdale International Residential School, Pune",
    period: "Completed 2025",
    details: [
      "Completed Indian School Certificate (ISC) Higher Secondary education with 84% aggregate score.",
      "Built strong foundational analytical, mathematical, and computational thinking skills.",
      "Actively engaged in inter-school science symposiums, cultural activities, and collaborative campus initiatives."
    ],
    tags: ["ISC Board", "Mathematics", "Foundational Computing", "84% Aggregate"]
  },
  {
    id: "stage_02",
    number: "02",
    title: "B.Tech in AI & Data Science",
    subtitle: "REVA University, Bangalore",
    period: "2025 - Expected July 2029",
    details: [
      "Secured 8.2 CGPA in foundational Year 1 coursework, demonstrating academic consistency.",
      "Core coursework in Data Structures, Applied Statistics, Discrete Mathematics, Object-Oriented Programming, and Machine Learning Fundamentals.",
      "Active participant in technical student communities, research hackathons, and laboratory practicals."
    ],
    tags: ["8.2 CGPA", "Data Structures", "Statistics", "Machine Learning", "REVA Univ"]
  },
  {
    id: "stage_03",
    number: "03",
    title: "Web Development Trainee",
    subtitle: "Venturing Digitally, Jamshedpur",
    period: "July 2025 - August 2025",
    details: [
      "Trained in modern web standards, HTML5 semantic layout, CSS3 responsive grid frameworks, and vanilla JavaScript.",
      "Implemented mobile-responsive prototype designs with cross-browser compatibility testing.",
      "Authored clean, documented client-side code and integrated interactive interface components."
    ],
    tags: ["Frontend", "HTML5/CSS3", "JavaScript Logic", "Responsive UI"]
  },
  {
    id: "stage_04",
    number: "04",
    title: "Applied Engineering Projects",
    subtitle: "ProfAlert & IoT Noise Level Indicator",
    period: "2025 - 2026",
    details: [
      "Conceptualized, prototyped, and validated ProfAlert — a campus professor availability and appointment system with verified student feedback.",
      "Engineered the IoT-Based Noise Level Indicator using NodeMCU ESP8266, KY-037 Sound Sensor, and an I2C 16x2 LCD display.",
      "Bridged hardware telemetry acquisition with visual status monitoring and threshold alerting."
    ],
    tags: ["Hardware IoT", "ESP8266", "Embedded Sensors", "Product Validation"]
  },
  {
    id: "stage_05",
    number: "05",
    title: "Business Development Intern",
    subtitle: "Independent Strategy & Transformation Consulting",
    period: "2026 - Present",
    details: [
      "Spearheading strategic B2B research, prospecting enterprise decision-makers across targeted verticals.",
      "Managing structured lead databases and supporting multichannel communication workflows.",
      "Synthesizing qualitative company hiring reports to inform high-conversion client proposals."
    ],
    tags: ["Market Strategy", "Lead Qualification", "Data Analytics", "B2B Research"]
  },
  {
    id: "stage_06",
    number: "06",
    title: "Leadership & Volunteering",
    subtitle: "The Rhythm & Red Pawz",
    period: "Ongoing",
    details: [
      "Serving as Club Co-Lead for 'The Rhythm' music club, orchestrating campus showcase events and rehearsals.",
      "Contributing actively as animal welfare volunteer with Red Pawz, assisting in rescue, care routines, and adoption drives."
    ],
    tags: ["Community Leadership", "Animal Welfare", "Event Management", "Peer Mentorship"]
  }
];

export const ACADEMICS: AcademicRecord[] = [
  {
    level: "UNDERGRADUATE",
    badge: "8.2 CGPA",
    badgeType: "cgpa",
    institution: "REVA University, Bangalore",
    program: "B.Tech in Artificial Intelligence & Data Science",
    meta: "First-Year CGPA: 8.2",
    expectedOrCompleted: "Expected: July 2029"
  },
  {
    level: "HIGHER SECONDARY (12TH)",
    badge: "84%",
    badgeType: "percentage",
    institution: "Riverdale International Residential School, Pune",
    program: "Indian School Certificate (ISC)",
    meta: "Board: ISC",
    expectedOrCompleted: "Completion: 2025"
  }
];

export const MILESTONES: MilestoneItem[] = [
  {
    title: "First-Year Academic Excellence: 8.2 CGPA",
    description: "Consistent academic achievement in foundational Artificial Intelligence curriculum at REVA.",
    icon: "star"
  },
  {
    title: "Campus MVP Validation: ProfAlert",
    description: "Tested and gathered tangible student feedback on university faculty appointment system.",
    icon: "shield"
  },
  {
    title: "Club Co-Leadership: The Rhythm",
    description: "Driving rehearsals, stage logistics, and community musical showcases.",
    icon: "users"
  }
];

export const FACULTY_MEMBERS = [
  {
    id: "1",
    name: "Prof. Sharma",
    avatar: "PS",
    dept: "Dept. of Computer Science & Engineering",
    room: "Room 304",
    status: "Available",
    timing: "10:00 AM - 1:00 PM",
    officeHours: "Mon, Wed, Fri"
  },
  {
    id: "2",
    name: "Dr. K. Rao",
    avatar: "KR",
    dept: "Dept. of Artificial Intelligence & Data Science",
    room: "Lab AI-2",
    status: "In Lecture",
    timing: "Available after 2:30 PM",
    officeHours: "Tue, Thu"
  },
  {
    id: "3",
    name: "Prof. Anita Verma",
    avatar: "AV",
    dept: "School of Applied Electronics & IoT",
    room: "Room 112",
    status: "Available",
    timing: "9:30 AM - 12:00 PM",
    officeHours: "Mon - Thu"
  }
];
