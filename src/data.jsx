export default {
  subjects: [
    {
      title: "EE Core",
      url: "ee-core"
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
      ]
    },
    {
      course: "Math 242/252",
      desc: "Calc 2",
      pre: "MATH 241/251A",
      resources: [
        "http://ocw.uci.edu/courses/math_2a_calculus_i.html",
        "http://ocw.uci.edu/courses/math_2b_calculus.html",
        "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/"
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
      course: "EE 315",
      desc: "Signals and systems ",
      pre: "EE 213, MATH 244/253A",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-003-signals-and-systems-fall-2011/",
        "https://www.khanacademy.org/science/electrical-engineering/ee-signals"
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
      course: "EE 371",
      desc: "Electromagnetics 1",
      pre: "EE 213",
      resources: [
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-013-electromagnetics-and-applications-spring-2009/",
        "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-013-electromagnetics-and-applications-fall-2005/index.htm"
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
  ]
};
