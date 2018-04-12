export default {
  subjects: [
    {
      title: "EE Core",
      url: "eecore"
    },
    {
      title: "Computer Engineering",
      url: "computer"
    },
    {
      title: "Electrophysics",
      url: "ep"
    },
    {
      title: "Systems",
      url: "system"
    },
    {
      title: "Math",
      url: "math"
    },
    {
      title: "Physics",
      url: "physics"
    },
    {
      title: "Chemistry",
      url: "chemistry"
    },
    {
      title: "x96",
      url: "x96"
    },
  ],
  math: [
    {
      course: "Math 241/251",
      desc: "Calc 1",
      pre: "Placement Exam or MATH 140",
      resources: [
        "http://ocw.uci.edu/courses/math_2a_calculus_i.html",
        "http://ocw.uci.edu/courses/math_2b_calculus.html",
        "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/"
      ],
      description: [
        "UC Irvine Calc 2A OCW",
        "UC Irvine Calc 2B OCW",
        "MIT OCW Single Variable Calculus"
      ],
    },
    {
      course: "Math 242/252",
      desc: "Calc 2",
      pre: "MATH 241/251A",
      resources: [
        "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/"
      ],
      description: [
        "MIT OCW Single Variable Calculus"
      ]
    },
    {
      course: "Math 243/253A",
      desc: "Calc 3",
      pre: "MATH 242/252A",
      resources: [
        "http://ocw.uci.edu/courses/math_2a_calculus_i.html",
        "http://ocw.uci.edu/courses/math_2b_calculus.html",
        "https://ocw.mit.edu/courses/mathematics/18-02-multivariable-calculus-fall-2007/"
      ]
    },
    {
      course: "Math 244/253A",
      desc: "Calc 4",
      pre: "MATH 243/252A",
      resources: [
        "http://ocw.uci.edu/courses/math_2a_calculus_i.html",
        "http://ocw.uci.edu/courses/math_2b_calculus.html",
        "https://ocw.mit.edu/courses/mathematics/18-02-multivariable-calculus-fall-2007/"
      ]
    },
    {
      course: "Math 307",
      desc: "Linear Algebra",
      pre: "MATH 243/253A (concurr.)",
      resources: [
        "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/",
        "https://www.youtube.com/watch?v=kjBOesZCoqc&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
        "https://www.khanacademy.org/math/linear-algebra",
        "https://www.khanacademy.org/math/differential-equations"
      ]
    },
  ],
  physics: [
    {
      course: "Phys 170",
      desc: "Mechanics/kinematics",
      pre: "MATH 242/252A (concurr.)",
      resources: [
        "http://ocw.uci.edu/courses/physics_3a_basic_physics.html",
        "https://www.khanacademy.org/science/physics"
      ]
    },
    {
      course: "Phys 272",
      desc: "Electromagnetics/geometric optics",
      pre: "PHYS 170, MATH 242/252A",
      resources: [
        "http://ocw.uci.edu/courses/physics_3b_basic_physics_ii.html",
        "https://www.khanacademy.org/science/physics"
      ]
    },
    {
      course: "Phys 274",
      desc: "Qunatum mechanics",
      pre: "PHYS 272, MATH 243/253A (concurr.)",
      resources: [
        "http://ocw.uci.edu/courses/physics_3c_basic_physics_iii.html",
        "https://www.khanacademy.org/science/physics"
      ]
    },
  ],
  chemistry: [
    {
      course: "CHEM 161",
      desc: "Gen Chem 1",
      pre: "Placement Exam",
      resources: [
        "http://ocw.uci.edu/courses/chem_1a_general_chemistry.html",
        "http://ocw.uci.edu/courses/chem_1b_general_chemistry.html",
        "https://www.khanacademy.org/science/chemistry"
      ]
    },
    {
      course: "CHEM 162",
      desc: "Gen Ghem 2",
      pre: "CHEM 161",
      resources: [
        "http://ocw.uci.edu/courses/chem_1c_general_chemistry.html",
        "https://www.khanacademy.org/science/chemistry"
      ]
    },
  ],
  eecore: [
    {
      course: "EE 160",
      desc: "C Programming",
      pre: "MATH 241/251A (concurr.)",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-087-practical-programming-in-c-january-iap-2010/lecture-notes/",
        "https://www.cs.fsu.edu/~myers/c++/notes/references.html",
        "https://www.youtube.com/watch?v=ASVB8KAFypk"
      ]
    },
    {
      course: "EE 211",
      desc: "Basic circuit analysis 1",
      pre: "MATH 243/252A (concurr.), PHYS 272 (concurr.)",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/",
        "https://www.youtube.com/watch?v=fHaqiX3DJwQ&list=PL1-PpkqcSWX4qNiSxizLIZK_hogj34UxX",
        "https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic",
        "https://www.youtube.com/watch?v=vOFeSu6Zr94",
        "http://www.falstad.com/circuit/"
      ]
    },
    {
      course: "EE 213",
      desc: "Basic circuit analysis 2",
      pre: "EE 211, MATH 244/253A (concurr.)",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/",
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-094-introduction-to-matlab-january-iap-2010/",
        "http://www.falstad.com/circuit/"
      ]
    },
    {
      course: "EE 260",
      desc: "Intro to digital design",
      pre: "EE 160",
      resources: [
        "http://www.robotroom.com/NumberSystems2.html",
        "https://www.youtube.com/watch?v=ChtmE09BSy0&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm&index=78",
        "https://www.youtube.com/watch?v=t5Bco6PSAkM",
        "https://www.youtube.com/watch?v=vOFeSu6Zr94",
        "https://allaboutfpga.com/vhdl-component-port-map-tutorial/"
      ]
    },
    {
      course: "EE 315",
      desc: "Signals and systems ",
      pre: "EE 213, MATH 244/253A",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-003-signals-and-systems-fall-2011/",
        "https://www.khanacademy.org/science/electrical-engineering/ee-signals"
      ]
    },
    {
      course: "EE 323",
      desc: "Microelectronic circuits 1",
      pre: "EE 213",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-012-microelectronic-devices-and-circuits-spring-2009/",
        "https://www.youtube.com/channel/UCtWjkj7Vk5aN1V78lqYZ8Vw",
        "http://www.falstad.com/circuit/",
        "http://www.linear.com/designtools/software/"
      ]
    },
    {
      course: "EE 324",
      desc: "Semiconductor physics",
      pre: "MATH 243/253A, PHYS 274",
      resources: [
        "https://ocw.mit.edu/courses/materials-science-and-engineering/3-225-electronic-and-mechanical-properties-of-materials-fall-2007/lecture-notes/"
      ]
    },
    {
      course: "EE 342",
      desc: "Probability and statistics ",
      pre: "EE 315 (concurr.), MATH 244/253A",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/"
      ]
    },
    {
      course: "EE 371",
      desc: "Electromagnetics 1",
      pre: "EE 213",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-013-electromagnetics-and-applications-spring-2009/",
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-013-electromagnetics-and-applications-fall-2005/index.htm"
      ]
    },
  ],
  computer: [
    {
      course: "EE 205",
      desc: "Object-oriented programming (C++)",
      pre: "EE 160",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-096-introduction-to-c-january-iap-2011/index.htm"
      ]
    },
    {
      course: "EE 361",
      desc: "Computer architecture",
      pre: "EE 260",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-823-computer-system-architecture-fall-2005/index.htm"
      ]
    },
    {
      course: "EE 362",
      desc: "Discrete math",
      pre: "EE 160, EE 260, MATH 242",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/"
      ]
    },
    {
      course: "EE 367",
      desc: "Algorithms",
      pre: "EE 205, ICS 141",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/"
      ]
    },
    {
      course: "EE 468",
      desc: "Operating systems",
      pre: "EE 361 (concurr.), EE 367",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-828-operating-system-engineering-fall-2012/"
      ]
    }
  ],
  ep: [
    {
      course: "EE 326",
      desc: "Microelectronic circuits II",
      pre: "EE 323",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-012-microelectronic-devices-and-circuits-spring-2009/"
      ]
    },
    {
      course: "EE 327",
      desc: "Physics of semiconductor devices ",
      pre: "EE 324, MATH 243/253A",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-720j-integrated-microelectronic-devices-spring-2007/",
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-701-introduction-to-nanoelectronics-spring-2010/",
        "https://www.youtube.com/channel/UCqeE_BjU_kkJ1m8-tCsZ9MA"
      ]
    },
    {
      course: "EE 328",
      desc: "Microcircuit fabrication",
      pre: "EE 327",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-152j-micro-nano-processing-technology-fall-2005/index.htm"
      ]
    },
    {
      course: "EE 372",
      desc: "Electromagnetics 2",
      pre: "EE 371, PHYS 274",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-013-electromagnetics-and-applications-spring-2009/",
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-013-electromagnetics-and-applications-fall-2005/index.htm"
      ]
    },
    {
      course: "EE 426",
      desc: "Advanced Si IC and solid state devices",
      pre: "EE 327, MATH 243/253A",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-730-physics-for-solid-state-applications-spring-2003/index.htm"
      ]
    },
    {
      course: "EE 435",
      desc: "Electric power systems",
      pre: "MATH 243/253A (concurr.)",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-061-introduction-to-electric-power-systems-spring-2011/"
      ]
    },
    {
      course: "EE 438",
      desc: "Renewable energy",
      pre: "EE 213",
      resources: [
        "https://ocw.mit.edu/courses/nuclear-engineering/22-081j-introduction-to-sustainable-energy-fall-2010/index.htm"
      ]
    },
    {
      course: "EE 470",
      desc: "Physical optics",
      pre: "EE 342 or PHYS 450 (concurr)",
      resources: [
        "https://ocw.mit.edu/courses/mechanical-engineering/2-71-optics-spring-2014/lecture-notes/"
      ]
    },
    {
      course: "EE 471",
      desc: "Computational electromagnetics",
      pre: "EE 371",
      resources: [
        ""
      ]
    },
    {
      course: "EE 473",
      desc: "Microwave engineering",
      pre: "EE 371",
      resources: [
        "https://web.stanford.edu/class/ee246/links/links.html"
      ]
    },
    {
      course: "EE 474",
      desc: "Antennas",
      pre: "EE 371",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-661-receivers-antennas-and-signals-spring-2003/index.htm"
      ]
    },
    {
      course: "EE 475",
      desc: "Optical communications",
      pre: "EE 372",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-453-quantum-optical-communication-fall-2016/index.htm"
      ]
    },
    {
      course: "EE 477",
      desc: "Fundamentals of radar, sonar, and navigation systems",
      pre: "EE 371",
      resources: [
        "https://ocw.mit.edu/resources/res-ll-001-introduction-to-radar-systems-spring-2007/"
      ]
    },
    {
      course: "EE 480",
      desc: "Biomedical engineering ",
      pre: "EE 213, MATH 244/253A",
      resources: [
        "https://oyc.yale.edu/NODE/61"
      ]
    }
  ],
  system: [
    {
      course: "EE 343",
      desc: "Communication systems ",
      pre: "EE 342, EE 315",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-011-introduction-to-communication-control-and-signal-processing-spring-2010/"
      ]
    },
    {
      course: "EE 344",
      desc: "Networking I",
      pre: "EE 160 or consent",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-829-computer-networks-fall-2002/"
      ]
    },
    {
      course: "EE 351",
      desc: "Feedback control systems",
      pre: "EE 315, ME 375 or consent",
      resources: [
        "https://ocw.mit.edu/courses/mechanical-engineering/2-14-analysis-and-design-of-feedback-control-systems-spring-2014/"
      ]
    },
    {
      course: "EE 415",
      desc: "Digital image processing",
      pre: "EE 315, EE342 (or concurrent) or consent",
      resources: [
        "https://ocw.mit.edu/resources/res-6-008-digital-signal-processing-spring-2011/"
      ]
    },
    {
      course: "EE 416",
      desc: "Introduction to digital image processing",
      pre: "EE 315 or equivalent or consent",
      resources: [
        "https://ocw.mit.edu/resources/res-6-008-digital-signal-processing-spring-2011/introduction/"
      ]
    },
    {
      course: "EE 417",
      desc: "Optimization",
      pre: "MATH 307",
      resources: [
        "https://ocw.mit.edu/courses/sloan-school-of-management/15-093j-optimization-methods-fall-2009/index.htm"
      ]
    },
    {
      course: "EE 435",
      desc: "Electric power systems",
      pre: "MATH 243 or concurrent, or MATH 253A or concurrent",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-061-introduction-to-electric-power-systems-spring-2011/"
      ]
    },
    {
      course: "EE 442",
      desc: "Digital communications",
      pre: "EE 342, EE 343, or consent",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-450-principles-of-digital-communications-i-fall-2006/"
      ]
    },
    {
      course: "EE 445",
      desc: "Introduction to machine learning",
      pre: "EE 342, MATH 307 or equivalent",
      resources: [
        "https://ocw.mit.edu/courses/mathematics/18-657-mathematics-of-machine-learning-fall-2015/"
      ]
    },
    {
      course: "EE 446",
      desc: "Information theory and coding",
      pre: "EE 342, EE 343, or consent",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-441-information-theory-spring-2010/"
      ]
    },
    {
      course: "EE 449",
      desc: "Computer communication networks",
      pre: "EE 315 and one of EE 342, or MATH 371 or MATH 471; or consent.",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-263j-data-communication-networks-fall-2002/"
      ]
    },
    {
      course: "EE 452",
      desc: "Digital control systems",
      pre: "EE 315 and EE 351, or consent.",
      resources: [
        "https://ocw.mit.edu/courses/mechanical-engineering/2-171-analysis-and-design-of-digital-control-systems-fall-2006/"
      ]
    },
    {
      course: "EE 453",
      desc: "Modern control theory",
      pre: "EE 351",
      resources: [
        "https://web.stanford.edu/class/archive/ee/ee392m/ee392m.1034/"
      ]
    }
  ],
  x96: [
    {
      course: "EE X96",
      desc: "Graphene Photodetector",
      adv: "David Garmire",
      resources: [
        "https://hndlab.wixsite.com/hndlab"
      ]
    },
    {
      course: "EE X96",
      desc: "Micromouse",
      adv: "Tep Dobry",
      resources: [
        ""
      ]
    },
    {
      course: "EE X96",
      desc: "Liquid Metal",
      adv: "Aaron Ohta, Wayne Shiroma",
      resources: [
        "https://sites.google.com/a/hawaii.edu/uh-mnm-lab/"
      ]
    },
    {
      course: "EE X96",
      desc: "SCEL",
      adv: "Anthony Kuh",
      resources: [
        "http://scel-hawaii.org/"
      ]
    },
    {
      course: "EE X96",
      desc: "Microrobotics",
      adv: "Aaron Ohta",
      resources: [
        "https://sites.google.com/a/hawaii.edu/uh-vip/teams/micro"
      ]
    },
    {
      course: "VIP projects",
      desc: "General",
      adv: "",
      resources: [
        "https://sites.google.com/a/hawaii.edu/uh-vip/teams"
      ]
    }
  ]
};
