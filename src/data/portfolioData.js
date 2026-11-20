export const personalInfo = {
  name: "Katta Mahima Vara Kumari",
  brandName: "Katta Mahima",
  roleHeadline: "Software Engineer | Backend Developer | AI/ML Enthusiast",
  badge: "COMPUTER SCIENCE STUDENT · IIIT PUNE",
  university: "Indian Institute of Information Technology, Pune",
  degree: "B.Tech in Computer Science and Engineering",
  period: "2024–2028",
  location: "India",
  github: "https://github.com/KattaMahimaVaraKumari",
  linkedin: "https://www.linkedin.com/in/mahima-vara-kumari-katta-251262323/",
  aboutParagraphs: [
    "I'm a Computer Science undergraduate at IIIT Pune who enjoys turning ideas into working software.",
    "My interests lie in backend engineering, API development, machine learning and AI-powered applications. I enjoy understanding how systems work behind the scenes, building reliable APIs and integrating intelligent features into practical products.",
    "I'm continuously learning, experimenting and improving through projects, problem-solving and hands-on development."
  ]
};

export const featuredProjects = [
  {
    id: "monitorly",
    tag: "FEATURED PROJECT 01",
    title: "Monitorly – API Monitoring & Incident Management",
    shortTitle: "Monitorly",
    subtitle: "Production API Health & Incident Reliability Platform",
    description: "A full-stack API monitoring platform that helps developers track endpoint availability, detect failures and manage incidents with automated cron scheduling and robust auth.",
    github: "https://github.com/KattaMahimaVaraKumari/api-monitoring-system",
    liveDemo: "https://api-monitoring-sy-git-6fd773-katta-mahima-vara-kumaris-projects.vercel.app/",
    techStack: [
      "React", "Vite", "JavaScript", "Node.js", "Express.js", 
      "MongoDB", "Mongoose", "JWT", "Zod", "node-cron"
    ],
    features: [
      "Configurable API endpoint monitoring with customized ping frequencies and tolerance levels.",
      "Automated scheduled health checks executed via background node-cron workers.",
      "Real-time failure detection, response latency metrics, and automated incident tracking.",
      "Secure JWT authentication using HTTP-only cookies and role-based permissions.",
      "Strict schema validation powered by Zod for both ingress payloads and query params.",
      "Comprehensive backend test suite for authentication flows and authorization barriers.",
      "Fully deployed architecture spanning Vite frontend, Express backend, and MongoDB Atlas."
    ],
    accentColor: "from-violet-500/20 via-indigo-500/10 to-transparent",
    borderHover: "hover:border-violet-500/40",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    previewType: "monitorly"
  },
  {
    id: "cognivault",
    tag: "FEATURED PROJECT 02",
    title: "Cognivault – Student Burnout Risk Prediction System",
    shortTitle: "Cognivault",
    subtitle: "Explainable Machine Learning Workload & Wellness Analytics",
    description: "An explainable machine learning application that analyzes academic workload and lifestyle factors to estimate student burnout risk, serving real-time inferences via FastAPI.",
    github: "https://github.com/KattaMahimaVaraKumari/Cognivault",
    liveDemo: null,
    techStack: [
      "Python", "FastAPI", "Pandas", "NumPy", "Scikit-learn", "Joblib", "SQLite", "Pydantic"
    ],
    features: [
      "Multiclass risk prediction across 4 defined tiers: Low, Moderate, High, and Critical risk.",
      "Evaluates 9 academic workload & lifestyle signals (study hours, sleep, stress scores, extracurriculars).",
      "Rigorous data pipeline cleaning 2,000 raw student records into 1,900 standardized samples.",
      "Benchmarked Logistic Regression vs Random Forest classifiers for optimal explainability.",
      "Achieved 84.0% test accuracy and 83.6% test macro F1-score.",
      "Validated with 86.1% macro F1-score across 5-fold cross-validation.",
      "Production-ready deployment pipeline packaging StandardScaler and LogisticRegression via Joblib.",
      "FastAPI inference server with Pydantic type validation and SQLite historical logging."
    ],
    disclaimer: "Educational burnout-risk awareness prototype; does not constitute clinical or medical diagnosis.",
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderHover: "hover:border-emerald-500/40",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    previewType: "cognivault"
  },
  {
    id: "docappointix",
    tag: "FEATURED PROJECT 03",
    title: "DocAppointix – AI-Enabled Healthcare Platform",
    shortTitle: "DocAppointix",
    subtitle: "Intelligent Triage, Appointment Scheduling & Telehealth Platform",
    description: "Full-stack MERN healthcare ecosystem featuring Gemini-powered symptom triage, specialty recommendations, automated clinical notes, and WebRTC video consultations.",
    github: "https://github.com/KattaMahimaVaraKumari/DocAppointix",
    liveDemo: "https://docappointix-frontend.onrender.com/",
    techStack: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API",
      "ZEGOCLOUD", "Socket.io", "Cloudinary", "Razorpay"
    ],
    features: [
      "Multi-tenant architecture with tailored dashboards for Patients, Doctors, and Hospital Admins.",
      "Gemini-powered natural language symptom analysis with Red, Yellow, and Green triage classifications.",
      "Specialty-based doctor matching and intelligent appointment slot scheduling.",
      "Automated AI-assisted clinical consultation note generation for physicians.",
      "Integrated real-time HD video consultations powered by ZEGOCLOUD and Socket.io.",
      "End-to-end digital prescriptions, post-visit recovery tracking, and medication reminders.",
      "Secure digital payment gateway integration via Razorpay with instant receipt dispatch."
    ],
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderHover: "hover:border-cyan-500/40",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    previewType: "docappointix"
  }
];

export const additionalProjects = [
  {
    title: "KhetiLabel Saathi (AGRISAFE)",
    subtitle: "Multimodal Agricultural Safety & Label Comprehension",
    description: "An AI-powered agricultural safety assistant that extracts, verifies, and simplifies complex pesticide label instructions into grounded vernacular guidance (Hindi, Marathi, English) with image quality checks and voice interaction.",
    github: "https://github.com/KattaMahimaVaraKumari/AGRISAFE",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Sarvam AI", "Sharp", "Zod", "Docker"],
    highlights: [
      "Multi-language OCR extraction & Safety Passport verification schema",
      "Grounded answers backed strictly by label evidence coordinates",
      "Voice-first interaction via Sarvam AI speech models"
    ],
    badge: "AI & Full-Stack System"
  },
  {
    title: "Focusile – Smart Study Companion",
    subtitle: "Intelligent Study Analytics & Learning Insights Backend",
    description: "A full-stack learning management application designed to track revision intervals, generate automated study insights, and manage authenticated study sessions with robust data validation.",
    github: "https://github.com/KattaMahimaVaraKumari/Focusile",
    techStack: ["React", "Node.js", "Express 5", "MongoDB", "Mongoose", "JWT", "Express-Validator"],
    highlights: [
      "RESTful API architecture built on Express 5 with robust middleware pipelines",
      "Secure user auth featuring bcryptjs password hashing and JWT sessions",
      "Modular schema architecture for tracking revision intervals and session metrics"
    ],
    badge: "Full-Stack Web App"
  }
];

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: ["Python", "C++", "JavaScript", "Java"]
  },
  {
    category: "Backend & API Engineering",
    icon: "server",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication"]
  },
  {
    category: "Frontend Development",
    icon: "layout",
    skills: ["React.js", "HTML5", "CSS3 / Modern CSS", "Vite", "Tailwind CSS"]
  },
  {
    category: "Databases & Storage",
    icon: "database",
    skills: ["MongoDB", "MySQL", "SQLite", "Mongoose"]
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    skills: ["Google Gemini API", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"]
  },
  {
    category: "Developer Tools & Cloud",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Postman"]
  }
];

export const experienceData = [
  {
    role: "Ethical Hacking & Penetration Testing Intern",
    organization: "CDAC Noida",
    period: "June – July 2025",
    location: "Noida, India",
    type: "Internship",
    description: "Gained practical exposure to network scanning, traffic analysis and vulnerability assessment through the Cyber Gyan Project, using Nmap and Wireshark.",
    tags: ["Network Security", "Vulnerability Assessment", "Nmap", "Wireshark", "Traffic Analysis", "Cyber Gyan Project"]
  }
];

export const achievementsData = [
  {
    title: "Claude 101",
    issuer: "Claude Academy",
    category: "AI Certification",
    icon: "award",
    description: "Certified completion covering prompt engineering principles, system architectures, and agentic workflows."
  },
  {
    title: "Creating Responsive Web Pages using Bootstrap 4",
    issuer: "Infosys",
    category: "Web Engineering",
    icon: "code",
    description: "Formal certification on mobile-first responsive design paradigms, fluid grid systems, and component architecture."
  },
  {
    title: "Rajya Puraskar Award",
    issuer: "The Bharat Scouts and Guides",
    category: "Leadership & Civic Honor",
    icon: "shield",
    description: "Prestigious Governor's Award recognizing distinguished leadership, community service, and disciplined teamwork."
  }
];
