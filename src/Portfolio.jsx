import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [expandedWork, setExpandedWork] = useState(null);

  const workExperience = [
    {
      id: 1,
      company: "St. Olaf College",
      role: "Information Security Analyst",
      period: "Sep 2025 - Present",
      location: "Northfield, MN",
      description: "• Reduced critical security vulnerabilities by 40% through targeted remediation based on Nessus scans\n\n• Improved incident detection efficiency by 30% by monitoring and analyzing Splunk Enterprise Security logs\n\n• Supported security governance and incident response efforts aligned with the NIST IR framework",
      logo: "/logos/olaf.png",
      link: "https://wp.stolaf.edu/"
    },
    {
      id: 2,
      company: "Tapay",
      role: "Software Engineering Intern",
      period: "June - Sept 2025",
      location: "Remote",
      description: "• Built and maintained an NFC-based payment dashboard using React, Next.js, and TailwindCSS, supporting real-time transaction tracking and billing for 1,000+ merchants\n\n• Designed backend APIs with Node.js, Express, and PostgreSQL to handle user accounts, billing logic, and transaction logs at scale\n\n• Containerized services with Docker and deployed on AWS, improving uptime and reducing deployment time by ~30%",
      logo: "/logos/Tapay.png",
      link: "https://tapay.com/"
    },
    {
      id: 3,
      company: "Whitman College",
      role: "Research Assistant",
      period: "Jun 2025 - Aug 2025",
      location: "Walla Walla, WA",
      description: "• Built an ML-based perceptual sound classifier using MFCC features and an MLP model to analyze emotional characteristics of audio\n\n• Developed SoundDrop, a full-stack web app enabling real-time audio sharing and collaboration for 50+ users\n\n• Designed data pipelines and led workshops introducing audio-based HCI tools to student researchers",
      logo: "/logos/whitman.png",
      link: "https://whitman.edu/"
    },
    {
      id: 4,
      company: "Whitman Health and Counseling Center",
      role: "Data Intern",
      period: "Apr 2025 - May 2025",
      location: "Walla Walla, WA",
      description: "As a Data Intern at the Whitman Health and Counseling Center during Summer 2025, I was responsible for analyzing large-scale student health survey datasets using Python in Google Colab. I worked with 50,000+ multi-year records to clean, process, and ensure 99% data accuracy, while developing demographic-based visualizations to identify key mental health and academic well-being trends. I also collaborated with health administrators to translate findings into actionable insights, improving service targeting for the entire student population by 35%.",
      logo: "/logos/whitman.png",
      link: "https://whitman.edu/"
    },
    {
      id: 5,
      company: "PwC",
      role: "Nonprofit Consulting Extern",
      period: "May 2025",
      location: "Remote",
      description: "• Conducted data-driven donor research to support nonprofit fundraising strategy",
      logo: "/logos/pwc.png",
      link: "https://www.extern.com/"
    },
    {
      id: 6,
      company: "Computing Research Association",
      role: "UR2PhD Research Training Program",
      period: "April 2025 – May 2025",
      location: "Remote",
      description: "Participated in the UR2PhD Undergraduate Research Training Course, a national program designed to prepare undergraduates for graduate studies in computer science by providing high-quality research experience and mentorship. As part of a small research team consisting of three peers and a faculty mentor, I actively engaged in a semester-long research project focused on computing-related topics.Through this program, I gained foundational skills in research methodologies, academic writing, and literature reviews. I learned how to analyze and interpret data, create effective visualizations, and present findings clearly to both technical and non-technical audiences. We were trained on how to structure and write formal research papers and practiced communicating our work through poster sessions and oral presentations.",
      logo: "/logos/CRA.jpeg",
      link: "https://www.cra.org/"
    },
    {
      id: 7,
      company: "HeadStarter AI",
      role: "Software Engineering Fellow",
      period: "May 2024 - Aug 2024",
      location: "San Francisco, California",
      description: "Accepted into the prestigious Headstarter AI Software Engineering Fellowship. Over the course of 7 weeks, I am engaged in creating 5 innovative AI applications and participating in weekly hackathons. This fellowship provides an opportunity to expand and refine my portfolio while collaborating with engineers from top companies such as Google, Apple, Bloomberg, Citadel, Two Sigma, Meta, and other leading startups. Through this intensive program, I am enhancing my software engineering skills and gaining valuable experience in AI application development.",
      logo: "/logos/Headstarter.jpg",
      link: "https://headstarter.co/"
    },

  ];

  const education = [
    {
      id: 1,
      institution: "St. Olaf College",
      degree: "Bachelor of Science, Computer Science, Statistics and Data Science",
      period: "2025 - 2028",
      location: "Northfield, MN",
      description: "Transferred from Whitman College. Coursework: Data Structure and Algorithm, Calculus 1, Intro to Data Science, Computational Exercises, Intro to Human-Centered Design, Software Design, Linear Algebra",
      logo: "/logos/olaf.png",
      link: "https://wp.stolaf.edu/"
    },
    {
      id: 2,
      institution: "Whitman College",
      degree: "Bachelor of Science, Computer Science and Data Science",
      period: "2024 - 2025",
      location: "Walla Walla, WA",
      description: "First year before transferring to St. Olaf College. Strong foundation in computer science and data science fundamentals.",
      logo: "/logos/whitman.png",
      link: "https://whitman.edu/"
    },
    {
      id: 3,
      institution: "UWC Thailand International School",
      degree: "International Baccalaureate (IB) Diploma",
      period: "2022 - 2024",
      location: "Phuket, Thailand",
      description: "Completed the final two years of high school in the International Baccalaureate program. Focused on rigorous academic coursework with emphasis on global citizenship and cross-cultural understanding.",
      logo: "/logos/thailand.jpeg",
      link: "https://www.uwcthailand.ac.th/"
    },
    {
      id: 4,
      institution: "Abaarso School of Science and Technology",
      degree: "High School Diploma",
      period: "2020 - 2022",
      location: "Hargeisa, Somaliland",
      description: "Completed the first two years of high school with a focus on science and technology. Strong foundation in mathematics, sciences, and English language preparation for international education.",
      logo: "/logos/abaarso.png",
      link: "https://www.abaarsoschool.org/"
    }
  ];

  const projects = [
    {
      title: "SoundDrop — Real-Time Audio Research Platform",
      description: "• Built a full-stack Flask + JavaScript platform enabling real-time audio collaboration and cross-device synchronization\n\n• Implemented automated audio processing pipelines (MP3/WAV conversion, MongoDB archiving, analytics)\n\n• Used in ongoing HCI research and workshops with 50+ participants",
      tech: ["Flask", "JavaScript", "MongoDB", "Audio Processing", "Real-time Sync", "HCI"],
      link: "https://sound-drop-nkps.vercel.app/",
      github: "https://github.com/Keysej/SoundDrop",
      period: "Jun 2025 - Aug 2025",
      location: "Walla Walla, WA"
    },
    {
      title: "Mental Health Data Analytics Dashboard",
      description: "• Analyzed 50,000+ student health records using Python and Google Colab\n\n• Built automated ETL pipelines and demographic visualizations to uncover trends in mental health and academic well-being\n\n• Insights improved outreach targeting by ~35%",
      tech: ["Python", "Google Colab", "ETL Pipelines", "Pandas", "NumPy", "Matplotlib", "Data Visualization"],
      link: "https://github.com/Keysej",
      period: "July 2025 - Aug 2025",
      location: "Walla Walla, WA"
    },
    {
      title: "Personal Stress Meter",
      description: "• Built a real-time wellness tool using OpenCV and MediaPipe to estimate stress from eye-blink patterns\n\n• Implemented EAR (Eye Aspect Ratio) metrics with live visualization and historical trend tracking\n\n• Designed with privacy-first principles for biometric data",
      tech: ["Python", "OpenCV", "MediaPipe", "Streamlit", "Computer Vision", "Privacy Engineering"],
      link: "https://github.com/Keysej/Personal-Stress-Meter",
      period: "June 2025 - July 2025",
      location: "Remote"
    },
    {
      title: "Native Plants AI Support",
      description: "• Developed a GenAI-powered assistant for the Walla Walla Native Plant Society using Next.js and OpenAI API\n\n• Integrated local plant guides and deployed to Vercel for real-time gardening questions\n\n• Increased access to drought-tolerant and region-specific plant info by 55%",
      tech: ["Next.js", "OpenAI API", "JavaScript", "MUI", "Vercel"],
      link: "https://walla-walla-native-plant-support.vercel.app/",
      period: "Apr 2025",
      location: "Walla Walla, WA"
    }
  ];

  const skillsRow1 = [
    { name: "Python", icon: "🐍" },
    { name: "Next.js", icon: "⚡" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "Docker", icon: "🐳" },
    { name: "Splunk", icon: "📊" },
    { name: "C++", icon: "⚙️" },
    { name: "Flask", icon: "🌶️" },
    { name: "Pandas", icon: "🐼" },
    { name: "AWS", icon: "☁️" },
    { name: "Nessus", icon: "🔍" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "NumPy", icon: "🔢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Wireshark", icon: "🦈" }
  ];
  
  const skillsRow2 = [
    { name: "TypeScript", icon: "🔷" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "OpenCV", icon: "👁️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Stripe API", icon: "💳" },
    { name: "PyTorch", icon: "🔥" },
    { name: "MediaPipe", icon: "📹" },
    { name: "BigQuery", icon: "📈" },
    { name: "Firebase", icon: "🔥" },
    { name: "Python", icon: "🐍" },
    { name: "Next.js", icon: "⚡" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "Docker", icon: "🐳" },
    { name: "Splunk", icon: "📊" }
  ];

  const experiments = [
    {
      id: 1,
      title: "Kaggle Playground Series",
      period: "Ongoing",
      description: "• Built and iterated on ML pipelines for tabular prediction problems\n• Practiced feature engineering, model tuning, and validation strategies\n• Explored LightGBM, XGBoost, and neural baselines with leaderboard feedback"
    },
    {
      id: 2,
      title: "NVIDIA Deep Learning Institute — Fundamentals of Deep Learning",
      period: "March 2024",
      description: "• Completed hands-on training covering CNNs, transfer learning, and NLP\n• Applied concepts directly to academic and personal ML projects"
    }
  ];



  return (
    <main className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} font-sans min-h-screen transition-colors duration-500`}>
      <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full px-2"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Hero Section */}
        <section id="hero" className="mb-16">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    Software Engineer & Data Scientist
                  </motion.span>
                </div>
                <div className="flex">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block max-w-[600px] md:text-xl"
                  >
                    CS @ St. Olaf College · Building SoundDrop · Applied ML & AI Systems
                  </motion.span>
                </div>
                <div className="flex mt-2">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block text-sm text-gray-400"
                  >
                    Northfield, MN 55057 | jimalekeyse@gmail.com
                  </motion.span>
                </div>
                <div className="flex gap-3 mt-4">
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Me
                  </motion.a>
                  <motion.a
                    href="https://github.com/Keysej"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="/Jimale Keyse-2028 copy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    View Resume
                  </motion.a>
                </div>
              </div>
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative flex shrink-0 overflow-hidden rounded-full size-28 border"
                >
                  <img 
                    src="/logos/jimale.jpg" 
                    alt="Jimale Keyse profile"
                    className="flex h-full w-full items-center justify-center rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted" style={{display: 'none'}}>JK</span>
                </motion.span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">About</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              <p>
                Computer Science student at St. Olaf College with hands-on experience in cybersecurity, machine learning, and full-stack development. Currently reducing security vulnerabilities by 40% as an Information Security Analyst while building scalable payment systems at Tapay. I develop AI-powered applications and data analytics platforms that solve real-world problems for 50+ users and organizations.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="mb-16">
          <div className="flex min-h-0 flex-col gap-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <h2 className="text-xl font-bold">Work Experience</h2>
            </motion.div>
            
            {workExperience.map((work, index) => (
              <motion.div 
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <a 
                  className="block cursor-pointer" 
                  href={work.link}
                  onClick={(e) => {
                    e.preventDefault();
                    setExpandedWork(expandedWork === work.id ? null : work.id);
                  }}
                >
                  <div className="rounded-lg bg-card text-card-foreground flex hover:bg-gray-800 transition-colors">
                    <div className="flex-none">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <img 
                          src={work.logo} 
                          alt={`${work.company} logo`}
                          className="flex h-full w-full items-center justify-center rounded-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted" style={{display: 'none'}}>
                          {work.company.charAt(0)}
                        </span>
                      </span>
                    </div>
                    <div className="flex-grow ml-4 items-center flex-col group">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                            {work.company}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </h3>
                          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{work.period}</div>
                        </div>
                        <div className="font-sans text-xs">{work.role}</div>
                        <div className="font-sans text-xs text-gray-400">{work.location}</div>
                      </div>
                      <div 
                        className={`mt-2 text-xs sm:text-sm transition-all duration-300 ${
                          expandedWork === work.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                        }`}
                      >
                        {work.description}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <div className="flex min-h-0 flex-col gap-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
            >
              <h2 className="text-xl font-bold">Education</h2>
            </motion.div>
            
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4 + index * 0.1 }}
              >
                <a className="block cursor-pointer" href={edu.link} target="_blank" rel="noopener noreferrer">
                  <div className="rounded-lg bg-card text-card-foreground flex hover:bg-gray-800 transition-colors">
                    <div className="flex-none">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="flex h-full w-full items-center justify-center rounded-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted" style={{display: 'none'}}>
                          {edu.institution.charAt(0)}
                        </span>
                      </span>
                    </div>
                    <div className="flex-grow ml-4 items-center flex-col group">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                            {edu.institution}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </h3>
                          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{edu.period}</div>
                        </div>
                        <div className="font-sans text-xs">{edu.degree}</div>
                        <div className="font-sans text-xs text-gray-400">{edu.location}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="flex min-h-0 flex-col gap-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
            >
              <h2 className="text-xl font-bold">Skills</h2>
            </motion.div>
            <div className="space-y-4 overflow-hidden">
              {/* First Row - Moving Right */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="relative overflow-hidden"
              >
                <div className="flex animate-scroll-right gap-3 whitespace-nowrap">
                  {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                    <div 
                      key={`row1-${index}`}
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 flex-shrink-0"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Second Row - Moving Left */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0 }}
                className="relative overflow-hidden"
              >
                <div className="flex animate-scroll-left gap-3 whitespace-nowrap">
                  {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                    <div 
                      key={`row2-${index}`}
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 border-transparent bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl hover:scale-105 flex-shrink-0"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <div className="space-y-12 w-full py-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4 }}
            >
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I've worked on a variety of projects, from machine learning models to AI-powered applications. Here are some of my favorites.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.6 + index * 0.1 }}
                >
                                      <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                      <div className="flex flex-col px-3 py-3 flex-1">
                        <div className="space-y-2 flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold tracking-tight text-sm leading-tight">{project.title}</h3>
                            <time className="font-sans text-xs text-gray-400 ml-2 flex-shrink-0">{project.period}</time>
                          </div>
                          <p className="font-sans text-xs text-gray-400">{project.location}</p>
                          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                            <p className="text-xs leading-relaxed">{project.description}</p>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <div key={tech} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1.5 py-0.5 text-xs">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 mt-auto">
                          <a target="_blank" href={project.link} rel="noopener noreferrer">
                            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-xs">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                              </svg>
                              Website
                            </div>
                          </a>
                          <a target="_blank" href={project.github || project.link} rel="noopener noreferrer">
                            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 flex gap-2 px-2 py-1 text-xs">
                              <svg viewBox="0 0 438.549 438.549" className="w-3.5 h-3.5">
                                <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                              </svg>
                              Source
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiments & Competitions Section */}
        <section id="experiments" className="mb-16">
          <div className="space-y-8 w-full py-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8 }}
            >
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Experiments & Competitions</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ongoing Work</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Alongside coursework and internships, I actively experiment with machine learning systems, data pipelines, and competitive modeling to sharpen my applied skills.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.0 }}
            >
              <div className="space-y-6">
                {experiments.map((experiment, index) => (
                  <motion.div 
                    key={experiment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4.2 + index * 0.1 }}
                    className="rounded-lg bg-card text-card-foreground p-6 border"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{experiment.title}</h3>
                      <span className="text-sm text-muted-foreground">{experiment.period}</span>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-pre-line">
                      {experiment.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.8 }}
            >
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Feel free to reach out via email at jimalekeyse@gmail.com or connect with me on LinkedIn and GitHub.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
            <a className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home size-4">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </a>
          </div>
          <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] h-full"></div>
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
            <a className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12" href="https://github.com/Keysej" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 438.549 438.549" className="size-4">
                <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
              </svg>
            </a>
          </div>
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
            <a className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12" href="https://www.linkedin.com/in/jimale-keyse-314258266/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4">
                <title>LinkedIn</title>
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 