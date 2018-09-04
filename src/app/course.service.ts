import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
"data" = [{
      "name": 'Computer Application',
      "cards" : [{
            "title":'Computer Application',
            "list": [
                  {"name": 'Diploma in Computer Application'},
                  {"name": 'Bachelors Program in Computer Application'},
                  {"name": 'Master in Computer Application'}
            ],
            "table" :[ {
                  "name": 'Diploma in Computer Application',
                  "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '4 Months – 11 Months',
                  "fees" : 'RS. 17,500/-',
                  "syllabus" : [{
                        "data":[
                              {"name" : '"data" Structures & Algorithm.'},
                              {"name" : 'Programming in C, C++.'},
                              {"name" : 'Operating System.'},
                              {"name" : 'Software Engg.'},
                        ]
                  }]
            },{
                  "name": 'Bachelors Program in Computer Application',
                  "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '1 Year – 3 Year',
                  "fees" : 'RS. 37,500/',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data" : [
                              {"name" : 'Digital Electronics'},
                              {"name" : 'Business Systems & Applications'},
                              {"name" : 'Introduction to Programming'},
                              {"name" : 'Mathematics'},
                              {"name" : 'PC Software'}
                        ]
                  },{
                        "part" : "SEM - II",
                        "data" : [
                              {"name" : 'Computer Architecture & System Software'},
                              {"name" : 'Information Systems Analysis & Design'},
                              {"name" : 'Computer Programming'},
                              {"name" : 'Mathematics'},
                              {"name" : 'English Language & Communication'}
                        ]
                  },{
                        "part" : "SEM - III",
                        "data" : [
                              {"name" : 'Operating Systems'},
                              {"name" : '"data" Structure with C'},
                              {"name" : 'Graphics & Internet'},
                              {"name" : 'Mathematics for Computing'},
                              {"name" : 'Management & Accounting'}
                        ]
                  },{
                        "part" : "SEM - IV",
                        "data" : [
                              {"name" : '"data" Base Management  System'},
                              {"name" : 'Object Oriented Programming with C++'},
                              {"name" : 'Software Project Management & Quality Assurance'},
                              {"name" : 'Statistics, Numerical Methods & Algorithms'},
                              {"name" : 'Environment & Ecology'}
                        ]
                  },{
                        "part" : "SEM - V",
                        "data" : [
                              {"name" : '"data" Communication & Computer Networks'},
                              {"name" : 'Unix & Shell Programming'},
                              {"name" : 'Windows Programming'},
                              {"name" : 'Values & Ethics of Profession'},
                              {"name" : 'Human Computer Interaction'}
                        ]
                  },{
                        "part" : "SEM - VI",
                        "data" : [
                              {"name" : 'Advanced Unix & Shell Programming'},
                              {"name" : 'Multimedia & E-commerce'},
                              {"name" : 'Intelligent Systems'},
                              {"name" : 'Image Processing'},
                              {"name" : 'Software Engineering'}
                        ]
                  }]
            },{
                  "name": 'Master in Computer Application',
                  "eligibility" : 'Graduate or Diploma with 5 years Work Experience.',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 34,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'Accounting and Financial management'},
                              {"name" : 'Digital Electronics and Computer Organization'},
                              {"name" : 'Discrete Mathematics Structure'},
                              {"name" : 'Computer Oriented Statistical Methods'},
                              {"name" : 'C and C++ Programming'},
                        ]
                  },{
                        "part" : "Sem - II",
                        "data" : [
                              {"name" : 'Computer Oriented Numerical Methods'},
                              {"name" : 'Operating System Principles'},
                              {"name" : 'System Software & Compiler Design'},
                              {"name" : '"data"base Management System'},
                              {"name" : '"data" Structure Using C++'},
                        ]
                  },{
                        "part" : "Sem - III",
                        "data" : [
                              {"name" : 'Software Engineering'},
                              {"name" : '"data" Communication & Computer Networks'},
                              {"name" : 'Computer Graphics'},
                              {"name" : 'Design & Analysis of Algorithms'},
                              {"name" : 'Visual Programming'},
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Programming In JAVA'},
                              {"name" : 'Object Oriented Analysis & Design using UML'},
                              {"name" : 'Optimization Techniques'},
                              {"name" : 'Internet Working & Web Design'},
                              {"name" : 'Modeling & Simulation'},
                        ]
                  }]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/ce.jpg'
      }]
  },{
      "name": 'Engineering',
      "cards": [{
            "title":'Mechanical Engineering',
            "list": [
                  {"name": 'Diploma in Mechanical Engineering'},
                  {"name": 'Bachelors Program in Mechanical Engineering'},
                  {"name": 'Master in Mechanical Engineering'}
            ],
            "table" : [{
                  "name": 'Diploma in Mechanical Engineering',
                  "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 - 3 Years',
                  "fees" : 'RS. 27,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'English Communication'},
                              {"name" : 'Applied Mathematics-I.'},
                              {"name" : 'Basic Electrical & Electronics Engg'},
                              {"name" : 'Engg.  Graphics '},
                              {"name" : 'Basic Electrical & Electronics  Lab'},
                        ]
                  },{
                        "part" : "Sem - II",
                        "data" : [
                              {"name" : 'Applied Mathematics-II'},
                              {"name" : 'Applied Science'},
                              {"name" : 'Mechanical Engg Science'},
                              {"name" : 'Computer aided Engineering '},
                              {"name" : 'Applied Science Lab'},
                        ]
                  },{
                        "part" : "Sem - III",
                        "data" : [
                              {"name" : 'Engineering Mechanics'},
                              {"name" : 'Strength of Materials'},
                              {"name" : 'Fluid Mechanics'},
                              {"name" : 'Manufacturing Technology-I'},
                              {"name" : 'Mechanical  Measurements '},
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Theory of Machines'},
                              {"name" : 'Thermal Engineering-I'},
                              {"name" : 'Manufacturing Technology-II'},
                              {"name" : 'Fluid Power Engineering'},
                              {"name" : 'Modeling & SimulationFluid Power '},
                        ]
                  },{
                        "part" : "SEM– V",
                        "data" : [
                              {"name" : 'Basic Management Skills'},
                              {"name" : 'Thermal Engineering-II'},
                              {"name" : 'Design of machine elements'},
                              {"name" : 'Mechatronics'},
                              {"name" : 'C-Programming'},
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Estimating and costing'},
                              {"name" : 'Automobile Engineering'},
                              {"name" : 'Computer integrated manufacturing'},
                              {"name" : 'Thermal Engineering'},
                              {"name" : 'Power plant engineering'},
                        ]
                  }]
            },{
                  "name": 'Bachelors Program in Mechanical Engineering',
                  "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience',
                  "duration" : '1 - 4 Year',
                  "fees" : 'RS. 37,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'Applied Mathematics - I'},
                              {"name" : 'Applied Physics - I'},
                              {"name" : 'Applied Chemistry - I'},
                              {"name" : 'Manufacturing Process'},
                              {"name" : 'Introduction to Computers & Auto CAD'},
                              {"name" : 'Communication Skills - I'}
                        ]
                  },{
                        "part" : "Sem - II",
                        "data" : [
                              {"name" : 'Communication Skills - II'},
                              {"name" : 'Applied Physics - II'},
                              {"name" : 'Applied Chemistry - II'},
                              {"name" : 'Introduction to Programming'},
                              {"name" : 'Engineering Mechanics'},
                              {"name" : 'Electrical Science'}
                        ]
                  },{
                        "part" : "Sem - III",
                        "data" : [
                              {"name" : 'Applied Maths'},
                              {"name" : 'Thermodynamics'},
                              {"name" : 'Strength of Material'},
                              {"name" : 'Production Process - I'},
                              {"name" : 'Computer Aided Machine Drawing'},
                              {"name" : '"data"base Information Retrieval System'}
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Applied Maths IV'},
                              {"name" : 'Fluid Mechanics'},
                              {"name" : 'Theory of Machines'},
                              {"name" : 'Production Process - II'},
                              {"name" : 'Material Technology'},
                              {"name" : 'Industrial Electronics'}
                        ]
                  },{
                        "part" : "SEM– V",
                        "data" : [
                              {"name" : 'Business Communication & Ethics'},
                              {"name" : 'Heat Transfer'},
                              {"name" : 'Internal Combustion Machine'},
                              {"name" : 'Mechanical Measurement & Conrol'},
                              {"name" : 'Production Process III'},
                              {"name" : 'Theory of Machine II'}
                        ]
                  },{
                        "part" : "SEM – VI",
                        "data" : [
                              {"name" : 'Mechatronics'},
                              {"name" : 'Hydraulic Machinery'},
                              {"name" : 'Mechanical Vibrations '},
                              {"name" : ' I.C. Engine'},
                              {"name" : 'Machine Design I'},
                              {"name": 'Heat and Mass Transfer'}
                        ]
                  },{
                        "part" : "SEM -VII",
                        "data" : [
                              {"name" : 'Machine Design II'},
                              {"name" : 'CAD/CAM /CAE'},
                              {"name" : 'Industrial  Robotics '},
                              {"name" : 'Cryogentic Engineerin'},
                              {"name" : 'Dynamic System Modeling  & Analysi'},
                              {"name": 'Nuclear Technology'}
                        ]
                  },{
                        "part" : "SEM – VIII",
                        "data" : [
                              {"name" : 'Automobile  Engineering'},
                              {"name" : 'Finite Element Analysis'},
                              {"name" : 'Artificial and Machine Intelligenc '},
                              {"name" : 'Mechanical System Design'},
                              {"name" : 'Business Process Reengineering'},
                              {"name": 'Process Equipment Design'}
                        ]
                  }]
            },{
                  "name": 'Master in Mechanical Engineering',
                  "eligibility" : 'Graduate or Diploma with 5 years of Work Experience',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 34,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'Manufacturing Process & Analysis'},
                              {"name" : 'Advanced Kinematics & Dynamics of Machines'},
                              {"name" : 'Advanced Machin Design - I'},
                              {"name" : 'Finite Element Analysis'},
                              {"name" : 'Robotics & Manufacturing Automation'},
                              {"name" : 'Advanced Machine Design - II'},
                              {"name" : 'Research Methodology'}
                        ]
                  },{
                        "part" : "Sem - II",
                        "data" : [
                              {"name" : 'Computer Aided Design'},
                              {"name" : 'Stress Analysis'},
                              {"name" : 'Mechanical Design - I'},
                              {"name" : 'Applied Dynemics & Vibrations'},
                              {"name" : 'Cyber Security'},
                              {"name" : 'Optimization Methods in Engineering Design'},
                              {"name" : 'Finite Element & Boundary Element Methods'}
                        ]
                  },{
                        "part" : "Sem - III",
                        "data" : [
                              {"name" : 'Design of Mechanisms & Manipulators'},
                              {"name" : 'Mechanical Design - II'},
                              {"name" : 'Manufacturing Technology'},
                              {"name" : 'Modelling of Thermal System'},
                              {"name" : 'Viscous Fluid Flow'},
                              {"name" : 'Advanced Heat Transfer'},
                              {"name" : 'Gas Dynamics'}
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Design of Heat Exchangers'},
                              {"name" : 'Energy Analysis of Thermal System'},
                              {"name" : 'Computational Fluid Dynamics'},
                              {"name" : 'Energy Economics & Management'},
                              {"name" : 'Mechanical Engineering'},
                              {"name" : 'Hydraulics & Pnematics'},
                              {"name" : 'Specialization/ Optional Subject'}
                        ]
                  }]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/me.jpg',
      },{
            "title":'Electronics & Telecommunication Engineering',
            "list": [
                  {"name": 'Diploma in Electronics & Telecommunication Engineering'},
                  {"name": 'Bachelors Program in Electronics & Telecommunication Engineering'},
                  {"name": 'Master in Electronics & Telecommunication Engineering'}
            ],
            "table" : [{
                  "name": 'Diploma in Electronics & Telecommunication Engineering',
                  "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 - 3 Years',
                  "fees" : 'RS. 27,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'Basic Physics'},
                              {"name" : 'Basic Chemistry'},
                              {"name" : ' Basic Mathematics'},
                              {"name" : 'English'},
                              {"name" : 'Engineering Graphics'},
                        ]
                  },{
            "part" : "Sem - II",
            "data" : [
            {"name" : ' Applied Science ( Electonics)'},
            {"name" : ' Engineering Mathematics'},
            {"name" : 'Electronic Components & Application'},
            {"name" : 'Electronics Engineering '},
            {"name" : 'Communication Skills'},
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Applied mathematics'},
            {"name" : 'Basic Electronics'},
            {"name" : ' Electrical Engineering'},
            {"name" : 'Principles of Digital Techniques'},
            {"name" : ' Industrial Measurements'},
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : 'Applied Electronics'},
            {"name" : ' Linear Integrated Circuits'},
            {"name" : ' Digital Techniques & Microprocessor'},
            {"name" : ' Electronic Instruments & Measurements'},
            {"name" : 'Analogue Communication'},
            ]
            },
            {
            "part" : "SEM– V",
            "data" : [
            {"name" : ' Principles of Computer Architecture & Maintenance'},
            {"name" : '  Microcontrollers'},
            {"name" : 'Digital Communication'},
            {"name" : '  Industrial Electronics'},
            {"name" : 'Maintenance of Electronic Equipments'},
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : 'Audio Video Engineering'},
            {"name" : 'Control Systems'},
            {"name" : ' Advance Communication System'},
            {"name" : ' Mobile Communnication'},
            {"name" : ' Embedded System'},
            ]
            }
            ]
            },
            {
                  "name": 'Bachelors Program in Electronics & Telecommunication Engineering',
            "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience',
            "duration" : '1 - 4 Year',
            "fees" : 'RS. 37,500/-',
            "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Calculus'},
            {"name" : 'Physics'},
            {"name" : 'Mechanics of Solids'},
            {"name" : 'Engineering Graphics'},
            {"name" : 'English'},
            {"name" : 'Linear Algebra'}
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Chemistry'},
            {"name" : 'Environment & Energy Studies'},
            {"name" : 'Art of Programming'},
            {"name" : 'Elements of Electrical Engineering'},
            {"name" : 'Communication Skills'},
            {"name" : 'Electronics Devices & Circuits - I'}
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Digital Circuits'},
            {"name" : 'Network Analysis'},
            {"name" : 'Linear Control System'},
            {"name" : 'Vector Calcilus, Complex Variables & Differential Equations'},
            {"name" : 'Economics For Engineers'},
            {"name" : 'Ethics & Values'}
            
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : 'Probability Distributions & Numerical Methods'},
            {"name" : 'Signals & Systems'},
            {"name" : 'Electronics Devices & Circuits - II'},
            {"name" : 'Elecrical Machines & Drives'},
            {"name" : 'Communication Systems'},
            {"name" : 'Electronics Design, Tools and Packages'}
            ]
            },
            {
            "part" : "SEM– V",
            "data" : [
            {"name" : 'Electromagnetics Engineering'},
            {"name" : 'Integrated Circuits and Applications'},
            {"name" : 'Microprocessor & Computer Architecture'},
            {"name" : 'Modern Measurement & Instrumentation'},
            {"name" : 'Digital Communication'},
            {"name" : 'Digital Signal Processing'}
            ]
            },
            {
            "part" : "SEM – VI",
            "data" : [
            {"name" : 'Microprocessor & Microcontroller'},
            {"name" : 'Law for Engineers'},
            {"name" : 'Digital System design'},
            {"name" : ' Fiber Optic Communication'},
            {"name" : 'Antenna & Wave Propagation'},
                {"name": 'Digital Integrated Circuit Design'}
            ]
            },
            {
            "part" : "SEM -VII",
            "data" : [
            {"name" : ' System Modeling & Design'},
            {"name" : 'Estimation & Detection Theory'},
            {"name" : 'Telecom Networks'},
            {"name" : 'Analog Integrated Circuit Design'},
            {"name" : 'Modern Processor Architecture'},
                {"name": 'Error Control Coding'}
            ]
            },
            {
            "part" : "SEM – VIII",
            "data" : [
            {"name" : 'Satellite Communication'},
            {"name" : '"data" Communication & Networking'},
            {"name" : 'Embedded Systems'},
            {"name" : 'Microwave Engineering'},
            {"name" : 'Wireless Communications'},
            {"name": 'Wireless Sensor Networks'}
            ]
            }
            ]
            },
            {
                  "name": 'Master in Electronics & Telecommunication Engineering',
            "eligibility" : 'Graduate or Diploma with 5 years of Work Experience',
            "duration" : '1 - 2 Year',
            "fees" : 'RS. 34,500/-',
            "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Digital Communication Techniques'},
            {"name" : 'Adaptive Signal Processing'},
            {"name" : 'Antenna System Design'},
            {"name" : 'Wireless Networks'},
            {"name" : 'Statistical Signal Processing'},
            {"name" : '"data" Compression & Standards'},
            {"name" : 'Research Methodology'}
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Embedded System Design'},
            {"name" : 'Information & Coding Theory'},
            {"name" : 'Satelite Communication'},
            {"name" : 'Telecom Network & Traffic Engineering'},
            {"name" : 'Speech & Image Procesing'},
            {"name" : 'Wireless Sensor Networks & Protocols'},
            {"name" : 'RF IC Design'}
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Analytical & Computational Electromagnetic'},
            {"name" : 'VLSI Signal Processing'},
            {"name" : 'Radar & Navigation Systems'},
            {"name" : 'RF Circuit Design'},
            {"name" : 'Wireless Communication'},
            {"name" : 'Optical Communication & Networks'},
            {"name" : 'DSP System & Architecture'}
            
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : 'Semiconductor Devices Physics & Modelling'},
            {"name" : 'Digital VLSI Design'},
            {"name" : 'Applied Algorithms for VLSI CAD'},
            {"name" : 'IC Fabrication Technology'},
            {"name" : 'Micro Electro - Mechanical System Design'},
            {"name" : 'Embedded Processor Design'},
            {"name" : 'Specialization'}
            ]
            }
            ]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/etc.jpg',
            },{
                  "title":'Electrical Engineering',
                  "list": [
                        {"name": 'Diploma in Electrical Engineering'},
                        {"name": 'Bachelors Program in Electrical Engineering'},
                        {"name": 'Master in Electrical Engineering'}
                  ],
            "table" : [{
                  "name": 'Diploma in Electrical Engineering',
            "eligibility" : 'S.S.C with Work Experience.',
            "duration" : '1 - 3 Years',
            "fees" : 'RS. 27,500/-',
            "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Applied Science'},
            {"name" : 'Applied Mathematics - I'},
            {"name" : 'Elements of Electrical Engineering'},
            {"name" : 'Mechanical Engineering sciences'},
            {"name" : 'Electrical Wiring'},
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Applied Mathematics - II'},
            {"name" : 'English Communication'},
            {"name" : 'Electrical Circuit'},
            {"name" : 'Electronics - I'},
            {"name" : 'Computer Aided Engineering Drawing '},
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Electrical Machines - I'},
            {"name" : ' Communication & Computer Networks'},
            {"name" : '  Electrical & Electronics Measurements'},
            {"name" : 'Electronics - II'},
            {"name" : ' Computer Aided Electrical Drawing'},
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : ' Electrical Machines - II'},
            {"name" : ' Electrical Power Generation'},
            {"name" : 'Transmission & Distribution'},
            {"name" : 'Power Elecronics'},
            {"name" : ' C - Programming'},
            ]
            },
            {
            "part" : "SEM– V",
            "data" : [
            {"name" : ' Estimation & Specification'},
            {"name" : ' Switchgear & Protection'},
            {"name" : 'Embadded System'},
            {"name" : ' Electrical Installation Design'},
            {"name" : 'CASP'},
            ]
            },
            {
            "part" : "SEM - VI",
            "data" : [
            {"name" : 'Industrial Drives & Control'},
            {"name" : ' Utilization of electrical Energy & Management'},
            {"name" : ' Basic Management Skill & Indian Constitution'},
            {"name" : ' Electrical Motor Control'},
            {"name" : '  PLC & HDL'},
            ]
            }
            ]
            },
            {
                  "name": 'Bachelors Program in Electrical Engineering',
            "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience',
            "duration" : '1 - 4 Year',
            "fees" : 'RS. 37,500/-',
             "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Calculus'},
            {"name" : 'Physics'},
            {"name" : 'Mechanics of Solids'},
            {"name" : 'Engineering Graphics'},
            {"name" : 'English'},
            {"name" : 'Linear Algebra'}
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Chemistry'},
            {"name" : 'Environment & Energy Studies'},
            {"name" : 'Art of Programming'},
            {"name" : 'Elements of Electrical Engineering'},
            {"name" : 'Communication Skills'},
            {"name" : 'Mathematics of Electrical Engineers'}
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Thermal & Hydraulics Prime Movers'},
            {"name" : 'Analogue Electronic Circuits'},
            {"name" : 'Network Analysis & Synthesis'},
            {"name" : 'Electrical Engineering Materials'},
            {"name" : 'Electrical Transducer & Measurements'},
            {"name" : 'ICT Tools & Security'}
            
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : 'Fundamentals of Electrical Power Systems'},
            {"name" : 'DC Machines & Transformers'},
            {"name" : 'Digital Electronic Circuits'},
            {"name" : 'Fundamentals of Power Electronics'},
            {"name" : 'Control System Engineeing'},
            {"name" : 'Engineering Electromagnetics'}
            ]
            },
            {
            "part" : "SEM– V",
            "data" : [
            {"name" : 'Economics for Engineers'},
            {"name" : 'Ethics & Values'},
            {"name" : 'Analysis of Electrical Power Systems'},
            {"name" : 'Rotating AC Machines'},
            {"name" : 'High Voltage Engineering'},
            {"name" : 'Power Electronic Converters'}
            ]
            },
            {
            "part" : "SEM – VI",
            "data" : [
            {"name" : 'Microprocessor & Microcontroller'},
            {"name" : 'Law for Engineers'},
            {"name" : 'Digital System design'},
            {"name" : ' Fiber Optic Communication'},
            {"name" : 'Antenna & Wave Propagation'},
                {"name": 'Digital Integrated Circuit Design'}
            ]
            },
            {
            "part" : "SEM -VII",
            "data" : [
            {"name" : ' Permanent Magnet Brushless & Reluctance Motors'},
            {"name" : 'Renewable Energy Sources'},
            {"name" : 'Advanced Microprocessors & Microcontrollers'},
            {"name" : 'Signals & Systems'},
            {"name" : 'Dynamics & Modelling of Electrical machines'},
                {"name": 'Extra High Voltage Transmission'}
            ]
            },
            {
            "part" : "SEM – VIII",
            "data" : [
            {"name" : 'Electrical Machine Design'},
            {"name" : 'Digital Signal Processors for Electrical Engineering'},
            {"name" : 'Power System Protection & Switchgear'},
            {"name" : 'Organizational Behavior'},
            {"name" : 'Applications of Power Electronics in Power System'},
                {"name": 'Computer Techniques in Power System'}
            ]
            }
            ]
            },
            {
                  "name": 'Master in Electrical Engineering',
            "eligibility" : 'Graduate or Diploma with 5 years of Work Experience',
            "duration" : '1 - 2 Year',
            "fees" : 'RS. 34,500/-',
            "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Field Computation of Electromagnetic devices'},
            {"name" : 'Modelling & Simulation of Dynamic Systems'},
            {"name" : 'Advanced Instrumentation Techniques'},
            {"name" : 'Special Purpose Electrical Machines'},
            {"name" : 'Control System Engineering'},
            {"name" : 'Advanced Power System Principles'},
            {"name" : 'Lighting Design & Calculation'}
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Static Converters in Electric Drives'},
            {"name" : 'Digital Control Theory'},
            {"name" : 'Elements of High Voltage Engineering'},
            {"name" : 'Material Technology'},
            {"name" : 'Active Circuits & Systems'},
            {"name" : 'Optimization Techniques'},
            {"name" : 'Solid State Power Supplies'}
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Modelling & Analysis of Electrical machines & Drives'},
            {"name" : 'Transducer Technology'},
            {"name" : 'Power System Analysis'},
            {"name" : 'High Voltage Fields'},
            {"name" : 'Optimal & Robust Control'},
            {"name" : 'Computer Control of Industrial Processes'},
            {"name" : 'Small Machines, Incremental Motion Devices'}
            
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : ' Computer Application in Instrumentation'},
            {"name" : 'Power System Operation'},
            {"name" : 'Dielectric Engineering'},
            {"name" : 'Real Time Systems'},
            {"name" : 'Nonlinear & Adaptive Control'},
            {"name" : 'Specialization/ Optional subject'},
            {"name" : 'High Voltage Equipment'}
            ]
            }
            ]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/ee.jpg',
      },{
            "title":'Electrical & Electronics Engineering',
            "list": [
                  {"name": 'Diploma in Electrical & Electronics Engineering'},
                  {"name": 'Bachelors Program in Electrical & Electronics Engineering'},
                  {"name": 'Master in Electrical & Electronics Engineering'}
            ],
            "table" : [{
                  "name": 'Diploma in Electrical & Electronics Engineering',
                  "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 - 3 Years',
                  "fees" : 'RS. 27,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'Communication English I'},
                              {"name" : 'Engineering Mathematics I'},
                              {"name" : 'Engineering Physics I'},
                              {"name" : 'Engineering Chemistry I'},
                              {"name" : 'Engineering Graphics I'},
                        ]
                  },{
                        "part" : "Sem - II",
                        "data" : [
                              {"name" : 'Communication English II'},
                              {"name" : 'Engineering Mathematics II'},
                              {"name" : 'Engineering Physics II'},
                              {"name" : 'Engineering Chemistry II'},
                              {"name" : 'Engineering Graphics II'},
                        ]
                  },{
                        "part" : "Sem - III",
                        "data" : [
                              {"name" : 'Electrical Circuit Theory'},
                              {"name" : 'Electrical Machines I'},
                              {"name" : 'Electronic Devices & Circuit'},
                              {"name" : 'Electrical Circuit & Machines'},
                              {"name" : 'Measurements & Instruments'},
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Electrical Machines II'},
                              {"name" : 'Digital Electronics'},
                              {"name" : 'Transducer & Single Conditioners'},
                              {"name" : 'Electrical Machines Instrumentations'},
                              {"name" : 'Digital Electronics & Linear Integrated Circuits'},
                        ]
                  },{
                        "part" : "SEM– V",
                        "data" : [
                              {"name" : 'Power System I'},
                              {"name" : 'Microcontrollers'},
                              {"name" : 'Digital Communication'},
                              {"name" : 'Special Electrical machines'},
                              {"name" : 'Electrical Circuit Simulation'},
                              {"name" : 'Control of Electrical Machines'}
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Programmable Logic Controller'},
                              {"name" : 'Electrical Machine Design'},
                              {"name" : 'Electrical Estimation & Energy Auditing'},
                              {"name" : 'Power System II'},
                              {"name" : 'Power Electronics'},
                        ]
                  }]
            },{
                  "name": 'Bachelor Program in Electrical & Electronics Engineering',
                  "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience',
                  "duration" : '1 - 4 Year',
                  "fees" : 'RS. 37,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'Calculus'},
                              {"name" : 'Physics'},
                              {"name" : 'Mechanics of Solids'},
                              {"name" : 'Engineering Graphics'},
                              {"name" : 'English'},
                              {"name" : 'Linear Algebra'}
                        ]
                  },{
                        "part" : "Sem - II",
                        "data" : [
                              {"name" : 'Chemistry'},
                              {"name" : 'Environment & Energy Studies'},
                              {"name" : 'Art of Programming'},
                              {"name" : 'Elements of Electrical Engineering'},
                              {"name" : 'Communication Skills'},
                              {"name" : 'Electronics Devices & Circuit'}
                        ]
                  },{
                        "part" : "Sem - III",
                        "data" : [
                              {"name" : 'Basic Electronics'},
                              {"name" : 'Digital System'},
                              {"name" : 'Object Oriented Programming'},
                              {"name" : 'Mathematical Foundation of Computer Science'},
                              {"name" : 'Applied Mathematics'},
                              {"name" : 'ICT Tools & Security'} 
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Communication Engineering'},
                              {"name" : 'Computer Organization'},
                              {"name" : '"data" Structure'},
                              {"name" : 'Probability Statistics & Numerical Analysis'},
                              {"name" : 'Computer Peripherals'},
                              {"name" : 'Economics For Engineers'}
                        ]
                  },{
                        "part" : "SEM– V",
                        "data" : [
                              {"name" : 'Theory of Computation'},
                              {"name" : '"data"base Management Systems'},
                              {"name" : '"data" Communication Networks'},
                              {"name" : 'Operating Systems'},
                              {"name" : 'Web Designing'},
                              {"name" : 'Law For Engineers'}
                        ]
                  },{
                        "part" : "SEM – VI",
                        "data" : [
                              {"name" : 'Software Engineering'},
                              {"name" : 'Capstone Course'},
                              {"name" : 'Creativity & Innovation'},
                              {"name" : 'Design & Analysis of Algorithms'},
                              {"name" : '.net Technologies'},
                              {"name" : 'Java Technologies'}
                        ]
                  },{
                        "part" : "SEM -VII",
                        "data" : [
                              {"name" : 'Objective C Programming'},
                              {"name" : 'Embedded Programming'},
                              {"name" : 'LAMP Technology'},
                              {"name" : 'Mobile Applications Development Technologies'},
                              {"name" : 'Advanced Computer Networks'},
                              {"name" : 'Machine Human Interface'}
                        ]
                  },{
                        "part" : "SEM – VIII",
                        "data" : [
                              {"name" : 'Computer Graphics & Visualization'},
                              {"name" : 'Main Frame Systems'},
                              {"name" : 'Network Security & Encryption'},
                              {"name" : 'Cloud Computing'},
                              {"name" : 'Software Testing'},
                              {"name" : 'Business Analysis & Optimization'}
                        ]
                  }]
            },{
                  "name": 'Master Program in Electrical & Electronics Engineering',
                  "eligibility" : 'Graduate or Diploma with 5 years of Work Experience',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 34,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'Probing at the Nan Scale'},
                              {"name" : '"data" Networks'},
                              {"name" : 'Digital Communication'},
                              {"name" : 'Energy Efficient Electronics Technology'},
                              {"name" : 'Advanced Power Electronics & Drives'},
                              {"name" : 'Modern Control Systems'},
                              {"name" : 'Wide Band Gap Electronics'}
                        ]
                  },{
                        "part" : "Sem - II",
                        "data" : [
                              {"name" : 'Power Generation Systems'},
                              {"name" : 'Network QoS & Control'},
                              {"name" : 'RF & Microwave'},
                              {"name" : 'Signal Analysis & Modeling '},
                              {"name" : 'Digital Signal Processing & Communication'},
                              {"name" : 'Lasers'},
                              {"name" : 'Project Planning'}
                        ]
                  },{
                        "part" : "Sem - III",
                        "data" : [
                              {"name" : 'Circuit Theory & Networks'},
                              {"name" : 'Materials Science'},
                              {"name" : 'Electromagnetic Theory'},
                              {"name" : 'Electric Drives'},
                              {"name" : 'Active & Passive Network Synthesis'},
                              {"name" : 'Heat Power Engineering'},
                              {"name" : 'Multimedia Systems'}
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Industrial Management'},
                              {"name" : 'Microprocessor Based System'},
                              {"name" : 'Advanced Numerical Computation'},
                              {"name" : 'Remote Control & Telemetry'},
                              {"name" : 'AI & Neural Networks'},
                              {"name" : 'Optimal Control System'},
                              {"name" : 'Specialization'}
                        ]
                  }]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/etc.jpg',
      },{
                  "title":'Automobile Engineering',
                  "list": [
                        {"name": 'Diploma in Automobile Engineering'},
                        {"name": 'Bachelors Program in Automobile Engineering'},
                        {"name": 'Master in Automobile Engineering'},
                        {"name": 'test'}
                  ],
           "table" : [{
            "name": 'Diploma in Automobile Engineering',
            "eligibility" : 'S.S.C with Work Experience.',
            "duration" : '1 - 3 Years',
            "fees" : 'RS. 27,500/-',
          "syllabus" : [
            {
            "part" : "part - I",
            "data" : [
            {"name" : 'Engg. Mechanics'},
            {"name" : 'Engg. Graphics & Designs'},
            {"name" : 'Refrigeration & Air Conditioning'}
            ]
            },
            {
            "part" : "part - II",
            "data" : [
            {"name" : 'Theory of Machines'},
            {"name" : 'Machine Design'},
            {"name" : 'CAD / CAM'}
            ]
            },
              {
            "part" : "part – III",
            "data" : [
            {"name" : 'Hydraulic & Pneumatic Systems'},
            {"name" : 'Applied Thermodynamics'},
            {"name" : 'Manufacturing Technology- I'}
            ]
            }
            ]
            },
            {
                  "name": 'Bachelors Program in Automobile Engineering',
            "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
            "duration" : '1 - 4 Year',
            "fees" : 'RS. 37,500/-',
            "syllabus" : [
            {
            "part" : "part - I",
            "data" : [
            {"name" : 'Engg. Mechanics'},
            {"name" : 'Engg. Graphics & Designs'},
            {"name" : 'Refrigeration & Air Conditioning'},
            {"name" : 'Engg. Drawing'},
            ]
            },
            {
            "part" : "part - II",
            "data" : [
            {"name" : 'Theory of Machines'},
            {"name" : 'Automotive Engines'},
            {"name" : 'CAD / CAM'},
            {"name" : 'Machine Designs'},
            ]
            },
            {
            "part" : "part – III",
            "data" : [
            {"name" : 'Applied Thermodynamics'},
            {"name" : 'Automotive Transmission'},
            {"name" : 'Production Technology'},
            {"name" : 'Manufacturing Technology- I'},
            ]
            },
                {
            "part" : "part – IV",
            "data" : [
            {"name" : 'Maintenance Management'},
            {"name" : 'Hydraulic & Pneumatic Systems'},
            {"name" : 'Advanced Computer -Architecture'},
            {"name" : 'Manufacturing Technology- II'},
            ]
            }
            ]
            },
            {
            "name": 'Master in Automobile Engineering',
            "eligibility" : 'Graduate or Diploma with 5 years Work Experience.',
            "duration" : '1 - 2 Year',
            "fees" : 'RS. 34,500/-',
            "syllabus" : [
            {
            "part" : "part – I",
            "data" : [
            {"name" : 'Engg. Mechanics'},
            {"name" : 'Engg. Graphics & Designs'},
            {"name" : 'CAD / CAM'},
            {"name" : 'Machine Design'},
            {"name" : 'Applied Thermodynamics'},
            {"name" : 'Manufacturing Technology- I'}
            ]
            },
            {
            "part" : "part – II",
            "data" : [
            {"name" : 'Manufacturing Technology - II'},
            {"name" : 'Automotive Transmission'},
            {"name" : 'Production Technology'},
            {"name" : 'Maintenance Management'},
            {"name" : 'Refrigeration & Air Conditioning'},
            {"name" : 'Advanced Computer -Architecture'},
            {"name" : 'Specialization'}
            ]
            }
            ]
            }],
                  "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
                  "img":'assets/images/ae.jpg',
            },{
                  "title":'Civil Engineering',
                  "list": [
                        {"name": 'Diploma in Civil Engineering'},
                        {"name": 'Bachelors Program in Civil Engineering'},
                        {"name": 'Master in Civil Engineering'},
                        {"name": 'Diploma in Survey Engineering'}
                  ],
            "table" : [{
                  "name": 'Diploma in Civil Engineering',
            "eligibility" : 'S.S.C with Work Experience.',
            "duration" : '1 - 3 Years',
            "fees" : 'RS. 27,500/-',
            "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Finite Element Analysis'},
            {"name" : 'Engineering Drawing'},
            {"name" : 'Surveying - I'},
            {"name" : 'Theory of Structure'},
            {"name" : ' Strength of Material'},
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Surveying - II'},
            {"name" : 'Foundation Engineering'},
            {"name" : 'Geotechnical Engineering'},
            {"name" : 'Design of Structure - I'},
            {"name" : ' Concrete Technology'},
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Inelastic Analysis of Plates'},
            {"name" : ' Engineering Mathematics - I'},
            {"name" : 'Surveying - III'},
            {"name" : 'Structural Mechanics'},
            {"name" : 'Fluid Mechanics - I'},
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : 'Fluid Mechanics - II'},
            {"name" : 'Architectural Planning & Design of Building'},
            {"name" : 'Structural Analysis - I'},
            {"name" : 'Engineering Geology'},
            {"name" : ' Advanced Design of Concrete Structure'},
            ]
            },
            {
            "part" : "SEM– V",
            "data" : [
            {"name" : 'Building Planning & Design'},
            {"name" : 'Construction Management'},
            {"name" : 'Neumerical methods'},
            {"name" : ' Structural Analysis - II'},
            {"name" : 'Theory of Elasticity & Plasticity'},
            ]
            },
            {
            "part" : "SEM - VI",
            "data" : [
            {"name" : 'Transportation Engineering - I'},
            {"name" : 'Water Resource Engineering - I'},
            {"name" : 'Structural Dynamic & Earthquake Engineering'},
            {"name" : ' Structural Design '},
            {"name" : 'Environmental Engineering'},
            ]
            }
            ]
            },
            {
            "name": 'Bachelors Program in Civil Engineering',
            "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience',
            "duration" : '1 - 4 Year',
            "fees" : 'RS. 37,500/-',
            "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Calculus'},
            {"name" : 'Physics'},
            {"name" : 'Mechanics of Solids'},
            {"name" : 'Engineering Graphics'},
            {"name" : 'English'},
            {"name" : 'Linear Algebra'}
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Chemistry'},
            {"name" : 'Environment & Energy Studies'},
            {"name" : 'Art of Programming'},
            {"name" : 'Elements of Electrical Engineering'},
            {"name" : 'Communication Skills'},
            {"name" : 'Engineering Mathematics - II'}
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Building Technology & Material'},
            {"name" : ' Engineering Mathematics - III'},
            {"name" : 'Surveyin'},
            {"name" : 'Strength of Material'},
            {"name" : 'Geotechnical Engineering'},
            {"name" : 'Control & Planning'}
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : 'Fluid Mechanics - I'},
            {"name" : 'Architectural Planning & Design of Building'},
            {"name" : 'Structural Analysis - I'},
            {"name" : 'Engineering Geology'},
            {"name" : 'Concrete Technology'},
            {"name" : 'Engineering Graphics - III'}
            ]
            },
            {
            "part" : "SEM– V",
            "data" : [
            {"name" : 'Infrastructure Engineering'},
            {"name" : 'Construction Techniques'},
            {"name" : 'Structural Design - I'},
            {"name" : 'Structural Analysis - II'},
            {"name" : 'Fluid Mechanics - II'},
            {"name" : 'Water Power Engineering'}
            ]
            },
            {
            "part" : "SEM – VI",
            "data" : [
            {"name" : 'Advanced Surveying'},
            {"name" : 'Project Management'},
            {"name" : 'Digital System design'},
            {"name" : ' Foundation Engineering'},
            {"name" : 'Structural Design - II'},
                {"name": 'Environmental Engineering'},
            {"name" : 'Concrete Technology - II'}
            ]
            },
            {
            "part" : "SEM -VII",
            "data" : [
            {"name" : 'Plane Surveying'},
            {"name" : 'Structural Analysis - III'},
            {"name" : 'Finite Element Analysis'},
            {"name" : 'Estimating & Costing'},
            {"name" : 'Steel Structures'},
                {"name": 'Elements of Transportation Engineering'}
            ]
            },
            {
            "part" : "SEM – VIII",
            "data" : [
            {"name" : 'Computer Application in Civil Engineering'},
            {"name" : 'Elements of Environmental Engineering'},
            {"name" : 'Air Pollution & Control'},
            {"name" : 'Soil Dynamics'},
            {"name" : 'Construction Management'},
                {"name": 'Transportation Engineering'}
            ]
            }
            ]
            },
            {
            "name": 'Master in Civil Engineering',
            "eligibility" : 'Graduate or Diploma with 5 years of Work Experience',
            "duration" : '1 - 2 Year',
            "fees" : 'RS. 34,500/-',
            "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Advanced Structural Mechanics - I'},
            {"name" : 'Advanced Design of Concrete Structure'},
            {"name" : 'Structural Dynamics'},
            {"name" : 'Foundation Engineering'},
            {"name" : 'Advanced Materials'},
            {"name" : 'Numerical Methods in Engineering'},
            {"name" : 'Communication Skills for Engineers'}
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Advanced Structural Mechanics - II'},
            {"name" : 'Advanced Design of Steel Structure'},
            {"name" : 'Earthquake Engineeing'},
            {"name" : 'Building Environment & Services'},
            {"name" : 'Construction & Project Management'},
            {"name" : 'Operation Research'},
            {"name" : 'Environmental Risk Assessment & Hazard Management'}
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Construction Techniques & Equipment'},
            {"name" : 'Low Cost Housing'},
            {"name" : 'Construction Cost Dynamics'},
            {"name" : 'Probability, Statistics & Optimization Techniques'},
            {"name" : 'Architecture & Town Planning'},
            {"name" : 'Environment Impact Assessment'},
            {"name" : 'Bridge Engineering'}
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
            {"name" : ' Transportation Economics'},
            {"name" : 'Soil Mechanics'},
            {"name" : 'Water Power Engineering'},
            {"name" : 'Technologies for Rural Development'},
            {"name" : 'Fundamental Specifications for Steel Construction'},
            {"name" : 'House Construction'},
            {"name" : 'Specialization'}
            ]
            }
            ]
            },{
            "name": 'Diploma in Survey Engineering',
            "eligibility" : 'S.S.C with Work Experience',
            "duration" : '1 - 3 Year',
            "fees" : 'Rs. 27,500/-',
            "syllabus" : [
            {
            "part" : "Sem - I",
            "data" : [
            {"name" : 'Communication Skills'},
            {"name" : 'Physics - I'},
            {"name" : 'Chemistry - I'},
            {"name" : 'Mathematics'},
            {"name" : 'Engineering Mechanics'},
            ]
            },
            {
            "part" : "Sem - II",
            "data" : [
            {"name" : 'Business Economics & Accountancy'},
            {"name" : 'Physics - II'},
            {"name" : 'Chemistry - II'},
            {"name" : 'Engineering Mathematics'},
            {"name" : 'Strength of Material'},
            ]
            },
            {
            "part" : "Sem - III",
            "data" : [
            {"name" : 'Engineering Drawing'},
            {"name" : 'Environmental Engineering'},
            {"name" : 'Basic Electronics'},
            {"name" : 'Chain & Compass Survey'},
            {"name" : 'Lelelling & Plane "table" Surveying'},
            ]
            },
            {
            "part" : "Sem - IV",
            "data" : [
                  {"name" : 'Cartography'},
                  {"name" : 'Geodesy & Astronomy'},
                  {"name" : 'Tachometry & Cadastrial Survey'},
                  {"name" : 'Theodolite Survey'},
                  {"name" : 'Materials & Construction Practice'},
            ]
            },
            {
            "part" : "Sem - V",
            "data" : [
                  {"name" : 'Industrial Management'},
                  {"name" : 'Curve & Triangulation'},
                  {"name" : 'Topography & Hydrography'},
                  {"name" : 'Tunnel & Mine Surveying'},
                  {"name" : 'Town & Country Planning'},
            ]
            },
            {
            "part" : "Sem - VI",
            "data" : [
                  {"name" : 'Land Laws & Land Records'},
                  {"name" : 'Photogrammetry & Remote Sensing'},
                  {"name" : 'Estimation, Valuation & Control'},
                  {"name" : 'Design of RCC Structure'},
                  {"name" : 'Mining Technology'},
            ]
            }
            ]
            }],
                  "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
                  "img":'assets/images/cv.jpg',
            },{
                  "title":'Instrumentation & Control Engineering',
                  "list": [
                        {"name": 'Diploma in Instrumentation & Control Engineering'},
                        {"name": 'Bachelors Program in Instrumentation & Control Engineering'},
                        {"name": 'Master in Instrumentation & Control Engineering'}
                  ],
            "table" : [{
            "name": 'Diploma in Instrumentation & Control Engineering',
            "eligibility" : 'S.S.C with Work Experience.',
            "duration" : '1 - 3 Years',
            "fees" : 'RS. 27,500/-',
            "syllabus" : [
            {
            "part" : "part - I",
            "data":[
            {"name" : 'Engg. Mathematics'},
            {"name" : ' Programmable Logic Design'},
            {"name" : 'Signals & Systems'}
            ]
            },
            {
            "part" : "part - II",
            "data":[
            {"name" : 'Communication Systems'},
            {"name" : 'Introduction to Computer Science'},
            {"name" : 'Fundamentals of Computers'}
            ]
            },
                {
            "part" : "part - III",
            "data":[
            {"name" : ' Introduction to Engg.'},
            {"name" : 'Engg. Principles & Techniques'},
            {"name" : 'Linear Electronic Circuits'}
            ]
            }
            ]
            },
            {
            "name": 'Bachelors Program in Instrumentation & Control Engineering',
            "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
            "duration" : '1 - 4 Year',
            "fees" : 'RS. 37,500/-',
            "syllabus" : [
            {
            "part" : "part - I",
            "data" : [
            {"name" : 'Engg. Mathematics'},
            {"name" : 'Engg. Drawings'},
            {"name" : 'Electronic Circuits'},
            {"name" : 'Communication System'}
            ]
            },
            {
            "part" : "part - II",
            "data" : [
            {"name" : 'Introduction to Computer Science'},
            {"name" : 'Programmable Logic Design'},
            {"name" : 'Signals & Systems'},
            {"name" : 'Fundamentals of Computers'}
            ]
            },
                {
            "part" : "part - III",
            "data" : [
            {"name" : 'Introduction to Engg'},
            {"name" : 'Engg, Principles & Techniques'},
            {"name" : ' Linear Electronic Circuits'},
            {"name" : 'Digital Communications'}
            ]
            },
                {
            "part" : "part - IV",
            "data" : [
            {"name" : 'Electronic Device & Circuits'},
            {"name" : 'High Speed Computation'},
            {"name" : 'Electronic Measurements & Instrumentations'},
            {"name" : 'System Design &Engg.'}
            ]
            }
            ]
            },
            {
                  "name": 'Master in Instrumentation & Control Engineering',
            "eligibility" : 'Graduate or Diploma with 5 years Work Experience.',
            "duration" : '1 - 2 Year',
            "fees" : 'RS. 34,500/-',
            "syllabus" : [
            {
            "part" : "part - I",
            "data" : [
            {"name" : 'Engg. Mathematics'},
            {"name" : 'Engg. Drawing'},
            {"name" : 'Electronic Circuits'},
            {"name" : 'Communication System'},
            {"name" : 'Introduction to Computer Science'},
                {"name" : 'Programmable Logic Design'}
            ]
            },
            {
            "part" : "part - II",
            "data" : [
                  {"name" : 'Linear Electronic Circuits'},
                  {"name" : 'Digital Communications'},
                  {"name" : 'Electronic Device & Circuits'},
                  {"name" : 'Electronic Measurements & Instrumentations'},
                  {"name" : 'System Design & Engg.'},
                  {"name" : 'High Speed Computation'},
                  {"name" : 'Specialization'}
            ]
            }
            ]
            }],
                  "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
                  "img":'assets/images/ie.jpg',
            },{
                  "title":'Chemical Engineering',
                  "list": [
                        {"name": 'Diploma in Chemical Engineering'},
                        {"name": 'Bachelors Program in Chemical Engineering'},
                        {"name": 'Master in Chemical Engineering'},
                        {"name": 'Diploma in Polymer Science Engineering'}
                  ],
                  "table" : [{
                        "name": 'Diploma in Chemical Engineering',
                        "eligibility" : 'S.S.C with Work Experience.',
                        "duration" : '1 - 3 Years',
                        "fees" : 'RS. 27,500/-',
                        "syllabus" : [{
                              "part" : "SEM - I",
                              "data":[
                                    {"name" : 'Applied Mathematics – I'},
                                    {"name" : 'English Communication'},
                                    {"name" : 'Basic Electrical & Electronics Engineering'},
                                    {"name" : 'Inorganic Chemistry'},
                                    {"name" : 'Applied Chemistry – I'}
                              ]
                        },{
                              "part" : "SEM - II",
                              "data":[
                                    {"name" : 'Communication Skills'},
                                    {"name" : 'Engineering  Mechanics'},
                                    {"name" : 'Engineering Drawing'},
                                    {"name" : 'Fundamentals of Chemical Engineering'},
                                    {"name" : 'Engineering Mathematics'}
                              ]
                        },{
                              "part" : "SEM - III",
                              "data":[
                                    {"name" : 'Applied Mathematics – II'},
                                    {"name" : 'Industrial Chemistry'},
                                    {"name" : 'Mechanical Operation'},
                                    {"name" : 'Chemical Process Technology – I'},
                                    {"name" : 'Stoichiometry'}
                              ]
                        },{
                              "part" : "SEM - IV",
                              "data":[
                                    {"name" : 'Physical Chemistry & Materials of Construction'},
                                    {"name" : 'Electrical & Electronics'},
                                    {"name" : 'Plant Utility'},
                                    {"name" : 'Fluid Flow Operation'},
                                    {"name" : 'Chemical Process Technology – II'}
                              ]
                        },{
                              "part" : "SEM - V",
                              "data":[
                                    {"name" : 'Plant Safety & Maintenance'},
                                    {"name" : 'Energy Management'},
                                    {"name" : 'Heat Transfer Operation'},
                                    {"name" : 'Chemical Process Instrumentation & Control'},
                                    {"name" : 'Chemical Reaction Engineering'}
                              ]
                        },{
                              "part" : "SEM - VI",
                              "data":[
                                    {"name" : 'Environmental Technology'},
                                    {"name" : 'Chemical Engineering Drawing'},
                                    {"name" : 'Mass Transfer Operation'},
                                    {"name" : 'Petro Chemical Engineering'},
                                    {"name" : 'Alcohol Technology'}
                              ]
                        }]
                  },{
                        "name": 'Bachelors Program in Chemical Engineering',
                        "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                        "duration" : '1 - 4 Year',
                        "fees" : 'RS. 37,500/-',
                        "syllabus" : [{
                              "part" : "SEM - I",
                              "data" : [
                                    {"name" : 'Calculus'},
                                    {"name" : 'Physics'},
                                    {"name" : 'Mechanics of Solids'},
                                    {"name" : 'Engineering Graphics'},
                                    {"name" : 'English '},
                                    {"name" : 'Linear Algebra'}
                              ]
                        },{
                              "part" : "SEM - II",
                              "data" : [
                                    {"name" : 'Chemistry'},
                                    {"name" : 'Environment & Energy Studies'},
                                    {"name" : 'Art of Programming'},
                                    {"name" : 'Elements of Electrical Engineering'},
                                    {"name" : 'Communication Skills'},
                                    {"name" : 'Electronic Devices & Circuit'}
                              ]
                        },{
                              "part" : "SEM - III",
                              "data" : [
                                    {"name" : 'Chemical Engineering Thermodynamics'},
                                    {"name" : 'Chemical Engineering Calculation'},
                                    {"name" : 'Process Information & Analysis'},
                                    {"name" : 'Mathematics – III'},
                                    {"name" : 'Basic Electronic Engineering'},
                                    {"name" : 'Production Engineering'}
                              ]
                        },{
                              "part" : "SEM - IV",
                              "data" : [
                                    {"name" : 'Fluid Mechanics'},
                                    {"name" : 'Mechanical Operation'},
                                    {"name" : 'Organic Chemical Technology'},
                                    {"name" : 'Chemical Engineering Thermodynamics – II'},
                                    {"name" : 'Strength of Materials'},
                                    {"name" : 'Basic Electronic Engineering'}
                              ]
                        },{
                              "part" : "SEM - V",
                              "data" : [
                                    {"name" : 'Heat Transfer'},
                                    {"name" : 'Mass Transfer – I'},
                                    {"name" : 'Process Equipment Design (Mechanical) – I'},
                                    {"name" : 'Inorganic Chemical Technology'},
                                    {"name" : 'Numerical Analysis & Computer Application'},
                                    {"name" : 'Chemical Process Instrumentation & Control'}
                              ]
                        },{
                              "part" : "SEM - VI",
                              "data" : [
                                    {"name" : 'Mass Transfer – II'},
                                    {"name" : 'Process Equipment Design – II'},
                                    {"name" : 'Process Dynamics & Control'},
                                    {"name" : 'Chemical Reaction Engineering'},
                                    {"name" : 'Engineering Materials'},
                                    {"name" : 'Petro Chemical Engineering'}
                              ]
                        },{
                              "part" : "SEM - VII",
                              "data" : [
                                    {"name" : 'Project Engineering, Economics & Management'},
                                    {"name" : 'Process Equipment Design – III'},
                                    {"name" : 'Fuel Combustion Energy Technology'},
                                    {"name" : 'Transport Phenomena'},
                                    {"name" : 'Petroleum Refinery Engineering'},
                                    {"name" : 'Polymer Technology – I'}
                              ]
                        },{
                              "part" : "SEM - VIII",
                              "data" : [
                                    {"name" : 'Process Utilities & Safety'},
                                    {"name" : 'Optimization Techniques in Chemical Engineering'},
                                    {"name" : 'Environmental Pollution Control Engineering'},
                                    {"name" : 'Process Modeling & Simulation'},
                                    {"name" : 'Polymer Technology – II'},
                                    {"name" : 'Polymer Technology – III'}
                              ]
                        }]
                  },{
                        "name": 'Master in Chemical Engineering',
                        "eligibility" : 'Graduate or Diploma with 5 years Work Experience.',
                        "duration" : '1 - 2 Year',
                        "fees" : 'RS. 34,500/-',
                        "syllabus" : [{
                              "part" : "SEM - I",
                                    "data" : [
                                    {"name" : 'Mathematical Methods in Chemical'},
                                    {"name" : 'Advanced Fluid Mechanics Engineering'},
                                    {"name" : 'Advanced Mass Transfer'},
                                    {"name" : 'Chemical Engineering Thermodynamics'},
                                    {"name" : 'Advanced Transport Phenomena'},
                                    {"name" : 'Advanced Heat Transfer'},
                                    {"name" : 'Distillation'}
                              ]
                        },{
                              "part" : "SEM - II",
                              "data" : [
                                    {"name" : 'Chemical Reaction Engineering'},
                                    {"name" : 'Advanced Process Dynamics & Control'},
                                    {"name" : 'Process Modeling & Simulation'},
                                    {"name" : 'Research Methodology'},
                                    {"name" : 'Project Management'},
                                    {"name" : 'Optimization Techniques'},
                                    {"name" : 'Safety & Hazards'}
                              ]
                        },{
                              "part" : "SEM - III",
                                    "data" : [
                                    {"name" : 'Analytical Techniques'},
                                    {"name" : 'Composite Materials'},
                                    {"name" : 'Nuclear Fuel Cycles'},
                                    {"name" : 'Bio-fuels'},
                                    {"name" : 'Biomedical Engineering & Engineering Health Care'},
                                    {"name" : 'Health Physics'},
                                    {"name" : 'Power Plant Design'}
                              ]
                        },{
                              "part" : "SEM - IV",
                              "data" : [
                                    {"name" : 'Renewable Energy Engineering'},
                                    {"name" : 'Biochemical Process Design'},
                                    {"name" : 'Enzyme Engineering & Technology'},
                                    {"name" : 'Bioreactor Analysis'},
                                    {"name" : 'Food Technology'},
                                    {"name" : 'Chemical Plant Safety & Occupational Hazards'},
                                    {"name" : 'Specialization'}
                              ]
                        }]
            },{
                  "name": 'Diploma in Polymer Science Engineering',
                  "eligibility" : 'S.S.C with Work Experience',
                  "duration" : '1 - 3 Years',
                  "fees" : 'RS. 27,500/-',
                  "syllabus" : [{
                        "part" : "part - I",
                        "data":[
                              {"name" : 'Polymer Chemistry - II'},
                              {"name" : 'Unit Operation in Chemical Engineering'},
                              {"name" : 'Polymer in Environment, Rheology & Processing of Polymers'},
                              {"name" : 'Mould & Die Designing'}
                        ]
                  },{
                        "part" : "part - II",
                        "data":[
                              {"name" : 'Introduction to Fiber Science & Rubber Technology'},
                              {"name" : 'Polymer Blends & Composites'},
                              {"name" : 'Plastics & Composite Application'},
                              {"name" : 'Polymer Testing & Specifications'}
                        ]
                  },{
                        "part" : "Final Year",
                        "data":[
                              {"name" : 'Engineering & Specialty Polymers'},
                              {"name" : 'Paints – Coating & Adhesives'},
                              {"name" : 'Elastic – Plastic fracture'},
                              {"name" : 'Polymer Product Design'}
                        ]
                  }]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/ch.jpg',
      },{
            "title":'Information Technology',
            "list": [
                  {"name": 'Diploma in Information Technology'},
                  {"name": 'Bachelors Program in Information Tech'},
                  {"name": 'Master in Information Technology'}
            ],
            "table" : [{
                  "name": 'Diploma in Information Technology',
                  "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 - 3 Years',
                  "fees" : 'RS. 27,500/-',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data":[
                              {"name" : 'English'},
                              {"name" : 'Basic Science'},
                              {"name" : 'Basic Mathematics'},
                              {"name" : 'Engineering Graphics'},
                              {"name" : 'Computer Fundamentals'}
                        ]
                  },{
                        "part" : "SEM - II",
                        "data":[
                              {"name" : 'Communication Skills'},
                              {"name" : 'Applied Science'},
                              {"name" : 'Programming in C'},
                              {"name" : 'Basic Electronics'},
                              {"name" : 'Engineering Mathematics'}
                        ]
                  },{
                        "part" : "SEM - III",
                        "data":[
                              {"name" : 'Applied Mathematics '},
                              {"name" : '"data" Structure Using C'},
                              {"name" : 'Electrical Technology'},
                              {"name" : 'Relational "data"base Management System'},
                              {"name" : 'Digital Techniques'}
                        ]
                  },{
                        "part" : "SEM - IV",
                        "data":[
                              {"name" : 'Environmental Studies'},
                              {"name" : 'Computer Hardware & Maintenance'},
                              {"name" : '"data" Communication & Networking'},
                              {"name" : 'Microprocessor & Programming'},
                              {"name" : 'Object Oriented Programming'}
                        ]
                  },{
                        "part" : "SEM - V",
                        "data":[
                              {"name" : 'Applied Multimedia Technology'},
                              {"name" : 'Software Engineering'},
                              {"name" : 'Java Programming'},
                              {"name" : 'Operating System'},
                              {"name" : 'Communication System'}
                        ]
                  },{
                        "part" : "SEM - VI",
                        "data":[
                              {"name" : 'Advanced Java Programming'},
                              {"name" : '"data" Communication & Networking'},
                              {"name" : 'Entrepreneurship Development'},
                              {"name" : 'Industrial Projects'},
                              {"name" : 'Advanced Web Technology'}
                        ]
                  }]
            },{
                  "name": 'Bachelors Program in Information Technology',
                  "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '1 - 4 Year',
                  "fees" : 'RS. 37,500/-',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data" : [
                              {"name" : 'Calculus'},
                              {"name" : 'Physics'},
                              {"name" : 'Mechanics of Solids'},
                              {"name" : 'Engineering Graphics'},
                              {"name" : 'English '},
                              {"name" : 'Linear Algebra'}
                        ]
                  },{
                        "part" : "SEM - II",
                        "data" : [
                              {"name" : 'Chemistry'},
                              {"name" : 'Environment & Energy Studies'},
                              {"name" : 'Art of Programming'},
                              {"name" : 'Elements of Electrical Engineering'},
                              {"name" : 'Communication Skills'},
                              {"name" : 'Electronic Devices & Circuit'}
                        ]
                  },{
                        "part" : "SEM - III",
                        "data" : [
                              {"name" : 'Basic Electronics'},
                              {"name" : 'Digital System'},
                              {"name" : 'Object Oriented Programming'},
                              {"name" : 'Mathematical Foundation of Computer Science'},
                              {"name" : 'Applied Mathematics'},
                              {"name" : 'ICT Tools & Security'}
                        ]
                  },{
                        "part" : "SEM - IV",
                        "data" : [
                              {"name" : 'Communication Engineering'},
                              {"name" : 'Computer Organization'},
                              {"name" : '"data" Structure'},
                              {"name" : 'Probability Statistics & Numerical Analysis'},
                              {"name" : 'Computer Peripherals'},
                              {"name" : 'Economics For Engineers'}
                        ]
                  },{
                        "part" : "SEM - V",
                        "data" : [
                              {"name" : 'Theory of Computation'},
                              {"name" : '"data"base Management Systems'},
                              {"name" : '"data" Communication Networks'},
                              {"name" : 'Operating Systems'},
                              {"name" : 'Web Designing'},
                              {"name" : 'Law For Engineers'}
                        ]
                  },{
                        "part" : "SEM - VI",
                        "data" : [
                              {"name" : 'Software Engineering'},
                              {"name" : 'Capstone Course'},
                              {"name" : 'Creativity & Innovation'},
                              {"name" : 'Design & Analysis of Algorithms'},
                              {"name" : '.net Technologies'},
                              {"name" : 'Java Technologies'}
                        ]
                  },{
                        "part" : "SEM - VII",
                        "data" : [
                              {"name" : 'Objective C Programming'},
                              {"name" : 'Embedded Programming'},
                              {"name" : 'LAMP Technology'},
                              {"name" : 'Mobile Applications Development Technologies'},
                              {"name" : 'Advanced Computer Networks'},
                              {"name" : 'Machine Human Interface'}
                        ]
                  },{
                        "part" : "SEM - VIII",
                        "data" : [
                              {"name" : 'Computer Graphics & Visualization'},
                              {"name" : 'Main Frame Systems'},
                              {"name" : 'Network Security & Encryption'},
                              {"name" : 'Cloud Computing'},
                              {"name" : 'Software Testing'},
                              {"name" : 'Business Analysis & Optimization'}
                        ]
                  }]
            },{
                  "name": 'Master in Information Technology',
                  "eligibility" : 'Graduate or Diploma with 5 years Work Experience.',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 34,500/-',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data" : [
                              {"name" : '"data" Structure & Algorithms'},
                              {"name" : 'Communication Techniques'},
                              {"name" : 'High Speed Networks'},
                              {"name" : 'Advance Computing Systems'},
                              {"name" : 'Information & Network Security'},
                              {"name" : 'Communication Skills for Engineers'},
                              {"name" : 'Comprehensive Assessment - I'}
                        ]
                  },{
                        "part" : "SEM - II",
                        "data" : [
                              {"name" : 'Network Embedded Systems'},
                              {"name" : 'Information & Retrieval Systems'},
                              {"name" : 'Wireless Networks'},
                              {"name" : 'Software Engineering'},
                              {"name" : 'Software Testing & Quality Assurance'},
                              {"name" : 'Modern "data"base'},
                              {"name" : 'Machine Learning'}
                        ]
                  },{
                        "part" : "SEM - III",
                        "data" : [
                              {"name" : '"data" Warehousing & Mining'},
                              {"name" : 'Artificial Intelligence'},
                              {"name" : 'Comprehensive Assessment  - II'},
                              {"name" : 'Cyber Security'},
                              {"name" : 'Huffman Coding'},
                              {"name" : 'Arithmetic Coding'},
                              {"name" : 'Wavelet Based Compression'}
                        ]
                  },{
                        "part" : "SEM - VI",
                        "data" : [
                              {"name" : 'Proxy Servers & Firewalls'},
                              {"name" : 'Electronic Payment Systems'},
                              {"name" : 'Malware Analysis'},
                              {"name" : 'Security Audit & Standards'},
                              {"name" : 'Malicious Software'},
                              {"name" : 'Buffer Overflow'},
                              {"name" : 'Specialization'}
                        ]
                  }]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/it.jpg',
      },{
            "title":'Computer Science Engineering',
            "list": [
                  {"name": 'Diploma in Computer Science Engineering'},
                  {"name": 'Bachelors Program in Computer Science Engineering'},
                  {"name": 'Master in Computer Science Engineering'}
            ],
            "table" : [{
                  "name": 'Diploma in Computer Science Engineering',
                  "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 - 3 Years',
                  "fees" : 'RS. 27,500/-',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data":[
                              {"name" : 'Applied Mathematics I'},
                              {"name" : 'Applied Science'},
                              {"name" : 'Concept of Electrical & Electronics Engineering'},
                              {"name" : 'Introduction to Computer Concepts'},
                              {"name" : 'Basic Electronics'}
                        ]
                  },{
                        "part" : "SEM - II",
                        "data":[
                              {"name" : 'Basic Computer Skills'},
                              {"name" : 'Engineering Mathematics II'},
                              {"name" : 'English Communication'},
                              {"name" : 'Digital Electronics'},
                              {"name" : 'Programming with C'}
                        ]
                  },{
                        "part" : "SEM - III",
                        "data":[
                              {"name" : 'Computer Organization'},
                              {"name" : '"data" Structure Using C'},
                              {"name" : 'Computer Networks'},
                              {"name" : 'PC Hardware & Networking'},
                              {"name" : 'Graphical User Interface'}
                        ]
                  },{
                        "part" : "SEM - IV",
                        "data":[
                              {"name" : 'Web Designing'},
                              {"name" : 'OOP with C++'},
                              {"name" : '"data"base Management Systems'},
                              {"name" : 'Operating System'},
                              {"name" : 'Software Engineering'}
                        ]
                  },{
                        "part" : "SEM - V",
                        "data":[
                              {"name" : 'Basic Management Skills & Indian Constitution'},
                              {"name" : 'Programming With Java'},
                              {"name" : 'Web Programming'},
                              {"name" : 'Network Security Management'},
                              {"name" : 'App Development'}
                        ]
                  },{
                        "part" : "SEM - VI",
                        "data":[
                              {"name" : 'Mobile Computing'},
                              {"name" : 'Computer Architecture'},
                              {"name" : 'Operating System'},
                              {"name" : 'Computer Networking'},
                              {"name" : 'Hardware Technology'}
                        ]
                  }]
            },{
                  "name": 'Bachelors Program in Information Technology',
                  "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '1 - 4 Year',
                  "fees" : 'RS. 37,500/-',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data" : [
                              {"name" : 'Calculus'},
                              {"name" : 'Physics'},
                              {"name" : 'Mechanics of Solids'},
                              {"name" : 'Engineering Graphics'},
                              {"name" : 'English '},
                              {"name" : 'Linear Algebra'}
                        ]
                  },{
                        "part" : "SEM - II",
                        "data" : [
                              {"name" : 'Chemistry'},
                              {"name" : 'Environment & Energy Studies'},
                              {"name" : 'Art of Programming'},
                              {"name" : 'Elements of Electrical Engineering'},
                              {"name" : 'Communication Skills'},
                              {"name" : 'Engineering Mathematics II'}
                        ]
                  },{
                        "part" : "SEM - III",
                        "data" : [
                              {"name" : 'Matrices'},
                              {"name" : 'Three Dimensional Analytical Geometry'},
                              {"name" : 'Geometrical Applications of Differential Calculus'},
                              {"name" : 'Functions of Several Variables'},
                              {"name" : 'Ordinary Differential Equations'},
                              {"name" : 'Fundamentals of Computers & Operating Systems'}
                        ]
                  },{
                        "part" : "SEM - IV",
                        "data" : [
                              {"name" : 'Program Development'},
                              {"name" : 'C Language'},
                              {"name" : 'Linear "data" Structures'},
                              {"name" : 'Non Linear "data" Structures'},
                              {"name" : 'Searching Sorting & Files'},
                              {"name" : 'Inheritance & Polymorphism'}
                        ]
                  },{
                        "part" : "SEM - V",
                        "data" : [
                              {"name" : 'Templates'},
                              {"name" : 'Java Programming'},
                              {"name" : 'Arithmetic & Logic Unit'},
                              {"name" : 'Processor Unit'},
                              {"name" : 'Memory System'},
                              {"name" : 'Input/ Output & Peripherals'}
                        ]
                  },{
                        "part" : "SEM - VI",
                        "data" : [
                              {"name" : 'Curves, Surfaces & Solids'},
                              {"name" : 'Transformations'},
                              {"name" : 'Hidden Surface Elimination'},
                              {"name" : 'Color Models'},
                              {"name" : 'Logic & Reasoning'},
                              {"name" : 'Theory of Computation'}
                        ]
                  },{
                        "part" : "SEM - VII",
                        "data" : [
                              {"name" : 'Design & Analysis of Algorithms'},
                              {"name" : 'Software Engineering'},
                              {"name" : '.net Technologies '},
                              {"name" : 'Java Technologies'},
                              {"name" : 'Objective C Programming'},
                              {"name" : 'Embedded C Programming'}
                        ]
                  },{
                        "part" : "SEM - VIII",
                        "data" : [
                              {"name" : 'System Software'},
                              {"name" : 'Creativity & Innovation'},
                              {"name" : 'Capstone Course'},
                              {"name" : 'LAMP Technologies'},
                              {"name" : 'Advanced Computer Networks'},
                              {"name" : 'Mobile Application Development Technologies'}
                        ]
                  }]
            },{
                  "name": 'Master in Computer Science Engineering',
                  "eligibility" : 'Graduate or Diploma with 5 years Work Experience.',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 34,500/-',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data" : [
                              {"name" : 'Computer Graphics & Visualization'},
                              {"name" : 'Main Frame System'},
                              {"name" : 'Network Security Encryption'},
                              {"name" : 'Cloud Computing'},
                              {"name" : 'IT Industry Management'},
                              {"name" : 'Parallel & Distributed Computing'},
                              {"name" : 'Advanced "data" Structure'}
                        ]
                  },{
                        "part" : "SEM - II",
                        "data" : [
                              {"name" : 'Natural Language Processing'},
                              {"name" : 'High Speed Networks'},
                              {"name" : 'Computer Architecture'},
                              {"name" : 'Comprehensive Assessment  I'},
                              {"name" : 'Computer Design'},
                              {"name" : 'Distributed & Parallel Systems'},
                              {"name" : 'Software Testing & Quality Assurance'}
                        ]
                  },{
                        "part" : "SEM - III",
                        "data" : [
                              {"name" : 'Modern "data"base'},
                              {"name" : '"data" Warehousing & Mining'},
                              {"name" : 'Web Search & Mining'},
                              {"name" : 'Computer Security'},
                              {"name" : 'Comprehensive Assessment II'},
                              {"name" : 'Cyber Security'},
                              {"name" : 'Wireless Sensor Networks'}
                        ]
                  },{
                        "part" : "SEM - VI",
                        "data" : [
                              {"name" : 'Ethical Hacking'},
                              {"name" : 'Cyber Laws'},
                              {"name" : 'Intrusions Detection Systems'},
                              {"name" : 'Research Methodology'},
                              {"name" : 'Artificial Intelligence'},
                              {"name" : 'Securing Interconnecting Systems'},
                              {"name" : 'Specialization'}
                        ]
                  }]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/it.jpg',
      }]
  },{
      "name": 'Textile Engineering',
      "cards" : [{
            "title":'Textile Engineering',
            "list": [
                  {"name": 'Diploma in Textile Engineering'},
                  {"name": 'Bachelors Program in Textile Engineering'},
                  {"name": 'Master in Textile Engineering'}
            ],
            "table" : [{
                  "name": 'Diploma in Textile Engineering',
                  "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 - 3 Years',
                  "fees" : 'RS. 27,500/-',
                  "syllabus" : [{
                        "part": "Sem - I",
                        "data":[
                              {"name" : 'Introduction to Textile Fibres - I'},
                              {"name" : 'Basic Mathematics'},
                              {"name" : 'Applied Chemistry'},
                              {"name" : 'Applied Physics'},
                              {"name" : 'Computer Fundamentals'}
                        ]
                  },{
                        "part": "Sem - II",
                        "data":[
                              {"name" : 'Electronic Circuit Technology of Bleaching & Dying'},
                              {"name" : 'Fabric Manufacturing Technology'},
                              {"name" : 'Fabric Structure & Design'},
                              {"name" : 'Introduction to Textile Fibres - II'},
                              {"name" : 'Yarn Testing'}
                        ]
                  },{
                        "part": "Sem - III",
                        "data":[
                              {"name" : 'In-plant Training'},
                              {"name" : 'Advanced Knitting Technology'},
                              {"name" : 'Technical Textile'},
                              {"name" : 'Process Control in Fabric Manufacturing'},
                              {"name" : 'Spinning Preparatory'}
                        ]
                  },{
                        "part": "Sem - IV",
                        "data":[
                              {"name" : 'Advanced Fabric Manufacturing'},
                              {"name" : 'Textronics'},
                              {"name" : 'Quality Management'},
                              {"name" : 'Yarn Technology'},
                              {"name" : 'Textile Design & Color'}
                        ]
                  },{
                        "part": "Sem - V",
                        "data":[
                              {"name" : 'Textile Fibres'},
                              {"name" : 'Chemical Processing & Finishing'},
                              {"name" : 'Textile Finishing'},
                              {"name" : 'Spinning'},
                              {"name" : 'Weaving'}
                        ]
                  },{
                        "part": "Sem - VI",
                        "data":[
                              {"name" : 'Textile Machines & Maintanance'},
                              {"name" : 'Modern Yarn Technology'},
                              {"name" : 'Textile Mill Planning & Organization'},
                              {"name" : 'Quality Control in Textile'},
                              {"name" : 'Engineering Designs & Textile Structures'}
                        ]
                  }]
            },{
                  "name": 'Bachelors Program in Textile Engineering',
                  "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '1 - 4 Year',
                  "fees" : 'RS. 37,500/-',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data" : [
                              {"name" : 'Engineering Mathematics'},
                              {"name" : 'Engineering Physics'},
                              {"name" : 'Engineering Chemistry'},
                              {"name" : 'Basics of Civil & Mechanical Engineering'},
                              {"name" : 'Fundamental of Computer Programming'},
                              {"name" : 'Engineering Graphics'},
                        ]
                  },{
                        "part" : "SEM - II",
                        "data" : [
                              {"name" : 'Engineering Mathematics II'},
                              {"name" : 'Environmental Science'},
                              {"name" : 'Basics of Electrical & Electronics Engineering'},
                              {"name" : 'Polymer Science'},
                              {"name" : 'Basics of Mechanics'},
                              {"name" : 'Engineering Chemistry'},
                        ]
                  },{
                        "part" : "SEM - III",
                        "data" : [
                              {"name" : 'Engineering Mathematics III'},
                              {"name" : 'Applied Mechanics'},
                              {"name" : 'Spinning Technology'},
                              {"name" : 'Engineering Design Concepts'},
                              {"name" : 'Textile Fibres'},
                              {"name" : 'Textile Machine Drawing'},
                        ]
                  },{
                        "part" : "SEM - IV",
                        "data" : [
                              {"name" : 'Probability & Statistics'},
                              {"name" : 'Spinning Technology II'},
                              {"name" : 'Weaving Technology I'},
                              {"name" : 'Textile Chemical Processing'},
                              {"name" : 'Manmade Fibres'},
                              {"name" : 'Theory of Machines'},
                        ]
                  },{
                        "part" : "SEM - V",
                        "data" : [
                              {"name" : 'Structure & Properties of Textile Fibres'},
                              {"name" : 'Weaving Technology II'},
                              {"name" : 'Knitting Technology'},
                              {"name" : 'Textile Chemical'},
                              {"name" : 'Dying & Printing'},
                              {"name" : 'Textile Testing'},
                        ]
                  },{
                        "part" : "SEM - VI",
                        "data" : [
                              {"name" : 'Maintenance Management'},
                              {"name" : 'Quantitative Methods in Textiles'},
                              {"name" : 'Garment Technology'},
                              {"name" : 'Nonwoven Technology'},
                              {"name" : 'Fabric Structure & Design'},
                              {"name" : 'Pattern Making & Garment Construction'},
                        ]
                  },{
                        "part" : "SEM - VII",
                        "data" : [
                              {"name" : 'Engineering Economics'},
                              {"name" : 'Technical Textile I'},
                              {"name" : 'Process & Quality Control in Spinning & Weaving'},
                              {"name" : 'Textile Industry & Mill Management'},
                              {"name" : 'Textile Product Development'},
                              {"name" : 'Post Spinning Operation'},
                        ]
                  },{
                        "part" : "SEM - VIII",
                        "data" : [
                              {"name" : 'Texturing Technology'},
                              {"name" : 'Advance Theory of Textile Structure'},
                              {"name" : 'Technical Textile II'},
                              {"name" : 'High Performance & Speciality Fibre'},
                              {"name" : 'Mill Management, Layout & Economics'},
                              {"name" : 'Advance Dying & Printing Technology'},
                        ]
                  }]
            },{
                  "name": 'Master in Textile Engineering',
                  "eligibility" : 'Graduate or Diploma with 5 years of Work Experience',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 34,500/-',
                  "syllabus" : [{
                        "part" : "Sem - I",
                        "data" : [
                              {"name" : 'Elements of Material Science'},
                              {"name" : 'Textile Fibers'},
                              {"name" : 'Introduction to Textile - I'},
                              {"name" : 'Theory of Textile Structure - I'},
                              {"name" : 'Mixing & Blow-Room'},
                              {"name" : 'Weaving'},
                              {"name" : 'Textile for Interiors'},
                        ]
                  },{
                        "part" : "Sem - II",
                        "data" : [
                              {"name" : 'Draw Frame & Comber'},
                              {"name" : 'Introduction to Textile - II'},
                              {"name" : 'Engineering Chemistry'},
                              {"name" : 'Textile Finishing'},
                              {"name" : 'Roving, Ring Frame & Spinning of Manmade Fibers'},
                              {"name" : 'Textured Yarn Technology'},
                              {"name" : 'Theory & Design of Weaving Machinery'},
                        ]
                  },{
                        "part" : "Sem - III",
                        "data" : [
                              {"name" : 'The Textile Industry'},
                              {"name" : 'Natural Fibres'},
                              {"name" : 'Fibre Characteristics'},
                              {"name" : 'Yarn & Sewing Threads'},
                              {"name" : 'Woven Fabrics'},
                              {"name" : 'Knitted Fabrics'},
                              {"name" : 'Textile Dying'},
                        ]
                  },{
                        "part" : "Sem - IV",
                        "data" : [
                              {"name" : 'Textile Printing'},
                              {"name" : 'Textiles & Design'},
                              {"name" : 'Unconventional Weaving'},
                              {"name" : 'Engineering Properties of Textile Materials'},
                              {"name" : 'Theory of Textile Structure - II'},
                              {"name" : 'Carding'},
                              {"name" : 'Specialization'},
                        ]
                  }]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/ce.jpg',
      }]
  },{
      "name": 'Textile Management ',
      "cards" : [{
            "title":'Textile Management ',
            "list": [
                  {"name": 'Diploma in Textile Management '},
                  {"name": 'Bachelors Program in Textile Management '},
                  {"name": 'Master in Textile Management '}
            ],
            "table" : [{
                  "name": 'Diploma in Textile Management ',
                  "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '4 Months - 11 Months',
                  "fees" : 'RS. 17,500/-',
                  "syllabus" : [{
                        // "part" : "",
                        "data":[
                              {"name" : 'Principle of Management'},
                              {"name" : 'Textile Fibers'},
                              {"name" : 'Principles of Spinning'},
                              {"name" : 'Principles of Weaving'},
                              {"name" : 'Principles of Processing'}
                        ]
                  }]
            },{
                  "name": 'Bachelors Program in Textile Management ',
                  "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '1 Year - 3 Year',
                  "fees" : 'RS. 30,500/-',
                  "syllabus" : [{
                        "part" : "part – I",
                        "data" : [
                              {"name" : 'Principle of Management'},
                              {"name" : 'Textile Fibers'},
                              {"name" : 'Spinning'},
                              {"name" : 'Weaving'},
                              {"name" : 'Processing'}
                        ]
                  },{
                        "part" : "part - II",
                        "data" : [
                              {"name" : 'Fibers Manufacturing & Designing'},
                              {"name" : 'Engineering Design & Textile structure'},
                              {"name" : 'Modern yarn prod. & Control System'},
                              {"name" : 'Dying & Printing'}
                        ]
                  },{
                        "part" : "part - III",
                        "data" : [
                              {"name" : 'Textile Machine & Maintenance'},
                              {"name" : 'Adv. Chem. Processing & Finishing'},
                              {"name" : 'Spinning Technology'},
                              {"name" : 'Energy & Environmental control'},
                              {"name" : 'Production & Planning Control'},
                              {"name" : 'Processing'}
                        ]
                  }]
            },{
                  "name": 'Master in Textile Management ',
                  "eligibility" : 'Graduate or Diploma with 5 years of Work Experience',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 35,500/-',
                  "syllabus" : [{
                        "part" : "part - I",
                        "data" : [
                              {"name" : 'Principal of Management'},
                              {"name" : 'Adv. Fabric Manufacturing & Designing'},
                              {"name" : 'Production Planning & control'},
                              {"name" : 'Garment Technology'},
                              {"name" : 'Adv. Chemical Processing & Finishing'},
                        ]
                  },{
                        "part" : "part - II",
                        "data" : [
                              {"name" : 'Textile Mill Planning & Organization'},
                              {"name" : 'Engineering Management'},
                              {"name" : 'Chem. & Tech. of Manmade Fibers'},
                              {"name" : 'Technical Textile'},
                              {"name" : 'Operation Management'}
                        ]
                  }]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/ce.jpg',
      }]
  },{
      "name": 'Management Programs',
      "cards" : [{
            "title":'Management Programs',
            "list": [
                  {"name": 'Bachelors Program in Bussiness Administration'},
                  {"name": 'Masters in Bussiness Administration (Dual Electives)'},
                  {"name": 'Doctorate in Management Studies'}
            ],
            "table" : [{
                  "name": 'Bachelors Program in Bussiness Administration',
                  "eligibility" : 'H.S.C or Diploma Holder with 3 years Work Experience',
                  "duration" : '1-3 years',
                  "fees" : '30,500/-',
                  "syllabus" : [{
                        "part": "part - I",
                        "data":[
                              {"name" : 'Principle Of Management-I'},
                              {"name" : 'Accountancy'},
                              {"name" : 'Business Communication'},
                              {"name" : 'Personal Management'},
                              {"name" : 'Consumer Behavior'}
                        ]
                  },{
                        "part": "part - II",
                        "data":[
                              {"name" : 'Principle Of Management-II'},
                              {"name" : 'E-Commerce'},
                              {"name" : 'Orgnization Behavior'},
                              {"name" : 'Corporate Law'},
                              {"name" : 'International Law'}
                        ]
                  },{
                        "part": "part - III",
                        "data":[
                              {"name" : 'Principle Of Management-III'},
                              {"name" : 'Business Management'},
                              {"name" : 'Business Ethics'},
                              {"name" : 'International Marketing'},
                              {"name" : 'Operation Management/(Specialization)'}
                        ]
                  }]
            },{
                  "name": 'Masters in Bussiness Administration (Dual Electives)',
                  "eligibility" : 'Graduate or Diploma with 3 years of Work Experience',
                  "duration" : '1 - 2 Years',
                  "fees" : 'RS. 50,500/-',
                  "syllabus" : [{
                        "part" : "SEM - I",
                        "data" : [
                              {"name" : 'Principles Of Management'},
                              {"name" : 'Consumer Behavior'},
                              {"name" : 'Business Communication'},
                              {"name" : 'Orgnization Behavior'}
                        ]
                  },{
                        "part" : "SEM - II",
                        "data" : [
                              {"name" : 'Business Ethics'},
                              {"name" : 'Managerial Accounting'},
                              {"name" : 'Corporate Law'},
                              {"name" : 'International Law'}
                        ]
                  },{
                        "part" : "SEM - III",
                        "data" : [
                              {"name" : 'Export Management'},
                              {"name" : 'E-Commerce'},
                              {"name" : 'Advertising Management'},
                              {"name" : 'Marketing Management'}
                        ]
                  },{
                        "part" : "SEM - IV",
                        "data" : [
                              {"name" : 'International Business '},
                              {"name" : 'Specializaion I'},
                              {"name" : 'Specializaion II'},
                              {"name" : 'Project Study'}
                        ]
                  }]
            },{
                  "name": 'Doctorate in Management Studies',
                  "eligibility" : 'Post Graduate or Graduate with 5 years of Work Experience',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 62,500/-',
                  "syllabus" : [{
                        "part" : "Business Management",
                        "data" : [
                        ]
                  },{
                        "part" : "Consumer Behavior",
                        "data" : []
                  },{
                        "part" : "Orgnization Behavior",
                        "data" : []
                  },{
                        "part" : "Business Communication",
                        "data" : []
                  },{
                        "part" : "Business Ethics",
                        "data" : []
                  },{
                        "part" : "Human Resource Management",
                        "data" : []
                  },{
                        "part" : "Marketing Management",
                        "data" : []
                  },{
                        "part" : "International Management",
                        "data" : []
                  },{
                        "part" : "Corporate Law",
                        "data" : []
                  },{
                        "part" : "Operations Management/(Optional Subject)",
                        "data" : []
                  },{
                        "part" : "Project Study",
                        "data" : []
                  }]
            }],
            "desc":'Management courses that we offer are highly compatible with International standards. It has been our constant endeavour to provide the best possible study material for the students. The International curricula added in our "syllabus" are an effort to make this possible. We want our students to excel in what they are doing; creating a Manager is not the aim for us, its making a Manager who can really take its organization on a high.',
            "img":'assets/images/ce.jpg',
      },{
            "title":'Professional Management Programs',
            "list": [
                  {"name": 'Diploma in Business Management'},
                  {"name": 'Executive Program Master’s in Business Administration'},
                  {"name": 'Chartered Finance Planner'}
            ],
            "table" : [{
                  "name": 'Diploma in Business Management',
                  "eligibility" : 'HSSC Or 2 Year Diploma with Experience',
                  "duration" : '6 Months - 1 Year',
                  "fees" : 'RS. 10,500/-',
                  "syllabus" : [{
                        // "part": "",
                        "data" : [
                              {"name": "Principles Of Management-I"},
                              {"name": "Business Ethics"},
                              {"name": "Specialization-I"}
                        ]
                  }]
            },{
                  "name": 'Executive Program Master’s in Business Administration',
                  "eligibility" : 'Graduate Or Diploma with +3 years experience',
                  "duration" : '1 - 2 Years',
                  "fees" : 'RS. 35,500/-',
                  "syllabus" : [{
                        // "part" : "",
                        "data" : [
                              {"name" : 'Management Principles & Practices'},
                              {"name" : 'Marketing Management'},
                              {"name" : 'Human Resource Management'},
                              {"name" : 'Corporate Law'},
                              {"name" : 'Managerial Economics'},
                              {"name" : 'Foreign Trade Management'},
                              {"name" : 'Operation Management (Optional)'},
                              {"name" : '(Project) on Specialization'}
                        ]
                  }]
            },{
                  "name": 'Chartered Finance Planner',
                  "eligibility" : 'Graduate or MBA with 2+ yrs work experience',
                  "duration" : '1 - 2 Year',
                  "fees" : 'RS. 32,500/-',
                  "syllabus" : [{
                        "part" : "Principles of Accountancy",
                        "data" : [
                        ]
                  },{
                        "part" : "Cost & Management Accountancy",
                        "data" : []
                  },{
                        "part" : "Audit Management",
                        "data" : []
                  },{
                        "part" : "Corporate Finance & Laws",
                        "data" : []
                  },{
                        "part" : "Take Over & Merger",
                        "data" : []
                  },{
                        "part" : "Financial Organization Management",
                        "data" : []
                  },{
                        "part" : "Banking & Investment",
                        "data" : []
                  },{
                        "part" : "International Finance Management",
                        "data" : []
                  }]
            }],
            "desc":'Professional courses that we offer come with a real & ho"list"ic approach for the professionals already working in the',
            "img":'assets/images/ce.jpg',
      },{
            "title":'Executive Management Programs',
            "list": [
                  {"name": 'Post Graduate Diploma in Business Management'},
                  {"name": 'Post Graduate Diploma in Finance Management'},
                  {"name": 'Post Graduate Diploma in International Business'}
            ],
            "table" : [{
                  "name": 'Post Graduate Diploma in Business Management',
                  "eligibility" : 'Graduate or Diploma with +3yrs Work Experience',
                  "duration" : '6 Months - 1 Year',
                  "fees" : 'RS. 32,500/-',
                  "syllabus" : [{
                        // "part": "",
                        "data" : [
                              {"name": "Management Principles & Practices"},
                              {"name": "Management Economics"},
                              {"name": "Consumer Behavior"},
                              {"name": "International Finance"},
                              {"name": "Marketing Management"},
                              {"name": "Corporate Law"},
                              {"name": "Business Management (Optional)"}
                        ]
                  }]
            },{
                  "name": 'Post Graduate Diploma in Finance Management',
                  "eligibility" : 'Graduate or Diploma with +3yrs Work Experience',
                  "duration" : '6 Months - 2 Year',
                  "fees" : 'RS. 32,500/-',
                  "syllabus" : [{
                        // "part" : "",
                        "data" : [
                              {"name" : 'Management Principles & Practices'},
                              {"name" : 'Finance Management'},
                              {"name" : 'International Finance'},
                              {"name" : 'Corporate Finance Management'},
                              {"name" : 'Corporate Law'},
                              {"name" : 'Banking & Investment Management'},
                        ]
                  }]
            },{
                  "name": 'Post Graduate Diploma in International Business',
                  "eligibility" : 'Graduate or Diploma with +3yrs Work Experience',
                  "duration" : '6 Months - 2 Year',
                  "fees" : 'RS. 32,500/-',
                  "syllabus" : [{
                        // "part" : "",
                        "data" : [
                              {"name" : 'Management Principles & Practices'},
                              {"name" : 'International Marketing'},
                              {"name" : 'International Finance'},
                              {"name" : 'Indian Foreign Trade'},
                              {"name" : 'International Business Laws'},
                              {"name" : 'Export Planning & Procedure'}
                        ]
                  }]
            }],
            "desc":'Executive Management courses come with a specific approach towards the professionals who are working with a specific sector in the market. These courses help the professionals to gain more knowledge in their respective sector so as to fly high in their career.',
            "img":'assets/images/ce.jpg'
      }]
  },{
      "name": 'DIPLOMA/SPECIALIZATION',
      "cards" : [{
            "title":'Diploma programs (Six Months Diploma Courses)',
            "list": [
                  {"name": 'Diploma In Bussiness Management'},
                  {"name": 'Diploma In Bussiness Orgaization & Management'},
                  {"name": 'Diploma In Office Administration'},
                  {"name": 'Diploma In Sales & Marketing Management'},
                  {"name": 'Diploma In Industrial Relations & Personal Management'},
                  {"name": 'Diploma In Industrial Security Management'},
                  {"name": 'Diploma In Dairy Management'},
                  {"name": 'Diploma In International Business'},
                  {"name": 'Diploma In International Marketing Management'},
                  {"name": 'Diploma In Hotel Management'},
                  {"name": 'Diploma In Hospital Administration'},
                  {"name": 'Diploma In Cyber-Law'},
                  {"name": 'Diploma In Internet & Intranet Security'},
                  {"name": 'Diploma In Logistics & Supply Chain Management'},
                  {"name": 'Diploma In Fire & Safety'},
                  {"name": 'Diploma In Retail Management'},
                  {"name": 'Diploma In Construction/ Construction Safety'},
                  {"name": 'Diploma In Agriculture Management'},
                  {"name": 'Diploma In Mining Management'},
                  {"name": 'Diploma In Human Resources Development'},
                  {"name": 'Diploma In Human Resources Management'},
                  {"name": 'Diploma In Labour Laws'},
                  {"name": 'Diploma In Financial Management'},
                  {"name": 'Diploma In Production Management'},
                  {"name": 'Diploma In Material Management'},
                  {"name": 'Diploma In Export & Import Management'},
                  {"name": 'Diploma In Industrial Safety'},
                  {"name": 'Diploma In Research & Development'},
                  {"name": 'Diploma In Advertising & Public Relations'},
                  {"name": 'Diploma In Mass Communication'},
                  {"name": 'Diploma In Automobile'},
                  {"name": 'Diploma In Food Technology'},
                  {"name": 'Diploma In Environment Management'},
                  {"name": 'Diploma in Store Management'},
                  {"name": 'Diploma in Customer Care Management'},
                  {"name": 'Diploma in HR Analytics'},
                  {"name": 'Diploma in Teacher Training'},
                  {"name": 'Diploma in Education Management'}
            ],
            "table" :[ {
                  "name": 'Diploma In Bussiness Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : 'Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Office Administration-Methods And Systems'},
                        {"name" : 'Financial Managements'},
                        {"name" : ' Marketing Management'}
                  ]
            },{
                  "name": 'Diploma In Bussiness Orgaization & Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Organization Behavior'},
                        {"name" : 'Fundamental Of Mgt. Information System'},
                        {"name" : 'Basics Of Accounts Of Finance'}
                  ]
            },{
                  "name": 'Diploma In Office Administration',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Organization Behavior'},
                        {"name" : 'Fundamental Of Mgt. Information System'},
                        {"name" : 'Basics Of Accounts Of Finance'}
                  ]
            },{
                  "name": 'Diploma In Sales & Marketing Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Sales Management'},
                        {"name" : 'Marketing Research'},
                        {"name" : 'Marketing Management'}
                  ]
            },{
                  "name": 'Diploma In Industrial Relations & Personal Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Labour Welfare Law'},
                        {"name" : 'Industrial Relations & Legislations'},
                        {"name" : 'Personnel Management'}
                  ]
            },{
                  "name": 'Diploma In Industrial Security Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Environment and Industrial Security'},
                        {"name" : 'Security Survey, Inspection & Investigation'},
                        {"name" : 'Industrial Security Management'}
                  ]
            },{
                  "name": 'Diploma In Dairy Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Dairy Promotion Program'},
                        {"name" : 'Dairy Management'},
                        {"name" : 'Dairy Herd Management'}
                  ]
            },{
                  "name": 'Diploma In International Business',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Guidance & Counseling'},
                        {"name" : 'Teaching learning Transaction'},
                        {"name" : 'Education For National Development'}
                  ]
            },{
                  "name": 'Diploma In Hotel Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Hotel Front Office Operation'},
                        {"name" : 'Hospitality Management'},
                        {"name" : 'Hotel Management'}
                  ]
            },{
                  "name": 'Diploma In Hospital Administration',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Hospital Planning & Classifications'},
                        {"name" : 'Hospital Functions & Services'},
                        {"name" : 'Hospital Administration & General Management'}
                  ]
            },{
                  "name": 'Diploma In Cyber-Law',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Basics Of Computer'},
                        {"name" : 'Introduction to Internet & Intranet Security'},
                        {"name" : 'Cyber-Law 1'}
                  ]
            },{
                  "name": 'Diploma In Internet & Intranet Security',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Computer Networking Concepts'},
                        {"name" : 'Internet Application & Web Pages'},
                        {"name" : 'E-Commerce'}
                  ]
            },{
                  "name": 'Diploma In Logistics & Supply Chain Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Logistics'},
                        {"name" : 'Supply Chain Management'},
                        {"name" : 'Warehouse Management'}
                  ]
            },{
                  "name": 'Diploma In Fire & Safety',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Environmental & Industrial Safety'},
                        {"name" : 'Fire & Safety'},
                        {"name" : 'Industrail Fire & Safety'}
                  ]
            },{
                  "name": 'Diploma In Retail Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Retail Management'},
                        {"name" : 'Operation Management'},
                        {"name" : 'Organization & Operating Of Retailing'}
                  ]
            },{
                  "name": 'Diploma In Construction/ Construction Safety',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Constructions Management'},
                        {"name" : 'Material Management'},
                        {"name" : 'Basics Of Safety Management'}
                  ]
            },{
                  "name": 'Diploma In Agriculture Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Agriculture Management'},
                        {"name" : 'Crop Production & Protection'},
                        {"name" : 'Post Harvest Technique'}
                  ]
            },{
                  "name": 'Diploma In Mining Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Introduction to Mining Engineering'},
                        {"name" : 'Surface & Underground Mining'},
                        {"name" : 'Basics Of Safety Management'}
                  ]
            },{
                  "name": 'Diploma In Human Resources Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Organization Behavior'},
                        {"name" : 'Training Methodology & Evaluation'},
                        {"name" : 'Human Resources Management'}
                  ]
            },{
                  "name": 'Diploma In Labour Laws',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Labour Laws Relating To Labour Welfare'},
                        {"name" : 'Labour Laws Re"list"ing To Industrial Relations'},
                        {"name" : 'Organizational Behavior'}
                  ]
            },{
                  "name": 'Diploma In Financial Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Management Accounting'},
                        {"name" : 'Indian Financial System'},
                        {"name" : 'Financial Management'}
                  ]
            },{
                  "name": 'Diploma In Production Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Organization Behavior'},
                        {"name" : 'Production Management'},
                        {"name" : 'Quantitative Technique-1'}
                  ]
            },{
                  "name": 'Diploma In Material Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Purchasing Management'},
                        {"name" : 'Stores & Materials Management'},
                        {"name" : 'Inventory Management'}
                  ]
            },{
                  "name": 'Diploma In Export & Import Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Organization Behavior'},
                        {"name" : 'Export & Import Documentation'},
                        {"name" : 'International Economics & Foreign Trade'}
                  ]
            },{
                  "name": 'Diploma In Industrial Safety',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Environment & Industrial Safety'},
                        {"name" : 'Industrial Safety-1 (Health & Safety)'},
                        {"name" : 'Industrial Safety-11 (Engg.& Management)'}
                  ]
            },{
                  "name": 'Diploma In Research & Development',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Organization Behavior'},
                        {"name" : 'Research Methodology'},
                        {"name" : 'Marketing Research'}
                  ]
            },{
                  "name": 'Diploma In Advertising & Public Relations',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Public Relations'},
                        {"name" : 'Advertising'},
                        {"name" : 'Consumer Behavior'}
                  ]
            },{
                  "name": 'Diploma In Mass Communication',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Public Relations'},
                        {"name" : 'Journalism'},
                        {"name" : 'Mass Communications Media'}
                  ]
            },{
                  "name": 'Diploma In Automobile',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Engineering of Mechanics'},
                        {"name" : 'Tool Design'},
                        {"name" : 'Theory of Machines'}
                  ]
            },{
                  "name": 'Diploma In Food Technology',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Food Sciences & Technologies'},
                        {"name" : 'Food Science Research'},
                        {"name" : 'Food Texture'}
                  ]
            },{
                  "name": 'Diploma In Environment Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements Of Management'},
                        {"name" : 'Climatology'},
                        {"name" : 'Environmental Science'},
                        {"name" : 'Environmental Law'}
                  ]
            },{
                  "name": 'Diploma In Store Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Stores Identification System'},
                        {"name" : 'Storage and Preservation'},
                        {"name" : 'Material Handling'},
                        {"name" : 'Inventory Control'}
                  ]
            },{
                  "name": 'Diploma In Customer Care Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Principles of Management'},
                        {"name" : 'Customer Care Management'},
                        {"name" : 'Customer Relationship Management'},
                        {"name" : 'Customer Service'}
                  ]
            },{
                  "name": 'Diploma in HR Analytics',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements of Management'},
                        {"name" : 'Evolution of HR Analytics'},
                        {"name" : 'Analytics in Talent Management'},
                        {"name" : 'Implementation'}
                  ]
            },{
                  "name": 'Diploma in Teacher Training',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements of Management'},
                        {"name" : 'Guidance & Counseling'},
                        {"name" : 'School Organization & Management'},
                        {"name" : 'Teaching Methods & Evaluation'}
                  ]
            },{
                  "name": 'Diploma in Education Management',
                  // "eligibility" : '3 Years Diploma or HSC with 3 years Work Experience.',
                  "duration" : '6 Months – 1 year',
                  "fees" : ' Rs. 11,500/-',
                  "syllabus" : [
                        {"name" : 'Elements of Management'},
                        {"name" : 'Guidance & Counseling'},
                        {"name" : 'Teaching Learning Transaction'},
                        {"name" : 'Education for National Development'}
                  ]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/ce.jpg'
      },{
            "title":'SPECIALIZATION "list"',
            "list": [
                  {"name": 'Finance Management'},
                  {"name": 'Information Technology'},
                  {"name": 'Customer Care Management'},
                  {"name": 'International Trade'},
                  {"name": 'Aviation And Transport'},
                  {"name": 'Agriculture & Rular'},
                  {"name": 'Safety Management'},
                  {"name": 'Risk & Equity'},
                  {"name": 'Marketing & Sales Management'},
                  {"name": 'Health Care & Hospital Management'},
                  {"name": 'Industrial Management'},
                  {"name": 'Operations Management'},
                  {"name": 'Law & Property Rights Management'},
                  {"name": 'Construction & Architectural Management'},
                  {"name": 'Some More…'}
            ],
            "table" :[ {
                  "name": 'Finance Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Finance Management'},
                        {"name" : 'Banking Management'},
                        {"name" : 'International Finance Management'},
                        {"name" : 'Corporate Finance Management'},
                        {"name" : 'Chartered Finance Management'},
                        {"name" : 'Cost And Accounting Management'},
                        {"name" : 'Audit Management'},
                        {"name" : 'Taxation Management'},
                        {"name" : 'E-Commerce'}
                  ]
            },{
                  "name": 'Information Technology',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Information Technology'},
                        {"name" : 'E Business systems Management'},
                        {"name" : 'Hardware Management'},
                        {"name" : 'Networking Management'},
                        {"name" : 'Project Management'},
                        {"name" : 'Software Management'},
                        {"name" : 'Software Project Management'}
                  ]
            },{
                  "name": 'Customer Care Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Customer Care Management'},
                        {"name" : 'Hospitality Management'},
                        {"name" : 'Public Relationship Management'},
                        {"name" : 'Public Administration Management'}
                  ]
            },{
                  "name": 'International Trade',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Retail Management'},
                        {"name" : 'Foreign Trade Management'},
                        {"name" : 'Foreign Exchange Management'},
                        {"name" : 'International Trade Management'},
                        {"name" : 'Supply Chain Management'}
                  ]
            },{
                  "name": 'Aviation And Transport',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Transport Management'},
                        {"name" : 'Logistic And Cargo Management'},
                        {"name" : 'Air Transport Management'},
                        {"name" : 'Shipping Management'},
                        {"name" : 'Travel And Tourism Management'},
                        {"name" : 'Export and Import Management'}
                  ]
            },{
                  "name": 'Agriculture & Rular',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Rural Management'},
                        {"name" : 'Agriculture Management'}
                  ]
            },{
                  "name": 'Safety Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Safety Management'},
                        {"name" : 'Total Safety Management'},
                        {"name" : 'Total Quality Management'},
                        {"name" : 'Packaging Management'},
                        {"name" : 'Warehouse Management'}
                  ]
            },{
                  "name": 'Risk & Equity',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Risk and Insurance Management'},
                        {"name" : 'Portfolio Management'},
                        {"name" : 'Asset Management'},
                        {"name" : 'Equity Management'},
                        {"name" : 'Investment Management'},
                        {"name" : 'Investment Analysis Management'},
                        {"name" : 'Market Risk Management'},
                        {"name" : 'Mutual funds Management'},
                        {"name" : 'Take over and Acquisition Management'}
                  ]
            },{
                  "name": 'Marketing & Sales Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Marketing Management'},
                        {"name" : 'Sales and Distribution Management'},
                        {"name" : 'Sales Management'},
                        {"name" : 'Purchasing Management'}
                  ]
            },{
                  "name": 'Industrial Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Industrial Management'},
                        {"name" : 'Energy and Power Management'},
                        {"name" : 'Industrial Marketing Management'},
                        {"name" : 'Production Planning Management'},
                        {"name" : 'Industrial Project'},
                        {"name" : 'Textile Management'}
                  ]
            },{
                  "name": 'Operations Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Human Resource Management'},
                        {"name" : 'Operation Management'},
                        {"name" : 'Business Administration'},
                        {"name" : 'Consumer Behavior'},
                        {"name" : 'Corporate Training'},
                        {"name" : 'General Management'}
                  ]
            },{
                  "name": 'Law & Property Rights Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Corporate Law Management'},
                        {"name" : 'Labour Law Management'},
                        {"name" : 'Cyber Law Management'},
                        {"name" : 'Intellectual Property Rights'}
                  ]
            },{
                  "name": 'Construction & Architectural Management',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Construction Management'},
                        {"name" : 'Civil Management'},
                        {"name" : 'Material Management'},
                        {"name" : 'Architectural Management'},
                        {"name" : 'Interior Management'}
                  ]
            },{
                  "name": 'Some More…',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : ' ',
                  "fees" : ' ',
                  "syllabus" : [
                        {"name" : 'Media Management'},
                        {"name" : 'Dairy Management'},
                        {"name" : 'Telecom Management'},
                        {"name" : 'Event Management'},
                        {"name" : 'Entrepreneur Management'},
                        {"name" : 'Mass Communication'},
                        {"name" : 'Call Center Management'},
                        {"name" : 'Advertising Management'},
                        {"name" : 'Hotel Management'},
                        {"name" : 'Environment Studies'},
                        {"name" : 'Fashion & Designing Management'}
                  ]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/ce.jpg'
      },{
            "title":'Diploma Program (One Year Diploma Course)',
            "list": [
                  {"name": 'Diploma in Mechanical Engineering'},
                  {"name": 'Diploma in Electronics Engineering'},
                  {"name": 'Diploma in Electrical Engineering'},
                  {"name": 'Diploma in Civil Engineering'},
                  {"name": 'Diploma in Chemical Engineering'},
                  {"name": 'Diploma in Information Technology'},
                  {"name": 'Diploma in Survey Engineering'},
                  {"name": 'Diploma in Polymer Science Engineering'},
                  {"name": 'Diploma in Industrial Automation Engineering'},
                  {"name": 'Diploma in Web Designing'}
            ],
            "table" :[ {
                  "name": 'Diploma In Mechanical Engineering',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Basics of Mechanical Engineering'},
                        {"name" : 'Engineering Mechanics'},
                        {"name" : 'Theory of Machines'},
                        {"name" : 'Applied Thermodynamics'},
                        {"name" : 'Strength of Materials'}
                  ]
            },{
                  "name": 'Diploma In Electronics Engineering',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Basic Electronics'},
                        {"name" : 'Elements of Electronics Engineering'},
                        {"name" : 'Electronic Devices & Circuits'},
                        {"name" : 'Digital Integrated Circuits'},
                        {"name" : 'Signals & Systems'}
                  ]
            },{
                  "name": 'Diploma In Electrical Engineering',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Basic Electronics'},
                        {"name" : 'Elements of Electrical Engineering'},
                        {"name" : 'Digital Signal Processing'},
                        {"name" : 'Electronic Instrumentation'},
                        {"name" : 'Digital & Analogue Techniques'}
                  ]
            },{
                  "name": 'Diploma In Civil Engineering',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Basic Civil Engineering'},
                        {"name" : 'Surveying'},
                        {"name" : 'Theory of Structures'},
                        {"name" : 'Mechanics of Materials'},
                        {"name" : 'Building Construction'}
                  ]
            },{
                  "name": 'Diploma In Chemical Engineering',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Introduction to Chemical Engineering'},
                        {"name" : 'Thermodynamics of Chemical Engineering'},
                        {"name" : 'Strength of Materials'},
                        {"name" : 'Mass & Heat Transfer'},
                        {"name" : 'Bio Chemical Engineering'}
                  ]
            },{
                  "name": 'Diploma In Information Technology',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Foundation of Information Tech.'},
                        {"name" : '"data" Structures & Algorithms'},
                        {"name" : 'Operating Systems'},
                        {"name" : 'Network & Systems'},
                        {"name" : '"data"base Management'}
                  ]
            },{
                  "name": 'Diploma In Survey Engineering',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Basics of Surveying'},
                        {"name" : 'Angles and Directions'},
                        {"name" : 'Public Land Surveys'},
                        {"name" : 'Advanced Surveying'},
                        {"name" : 'Ethics for the Professional Surveyor'}
                  ]
            },{
                  "name": 'Diploma In Polymer Science Engineering',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Introduction to Polymer Science'},
                        {"name" : 'Polymer Chemistry – I'},
                        {"name" : 'Plastics Processing'},
                        {"name" : 'Polymer Additive & Compounding'},
                        {"name" : 'Polymer Blends & Composites'}
                  ]
            },{
                  "name": 'Diploma In Industrial Automation Engineering',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Fundamentals of Industrial Automation'},
                        {"name" : 'Automation & Controllers'},
                        {"name" : 'System Calibration'},
                        {"name" : 'Robotics'},
                        {"name" : 'Automated Components'}
                  ]
            },{
                  "name": 'Diploma In Web Designing',
                  // "eligibility" : 'S.S.C with Work Experience.',
                  "duration" : '1 Year',
                  "fees" : '17,500/-',
                  "syllabus" : [
                        {"name" : 'Applied Communication'},
                        {"name" : 'Wireless Security'},
                        {"name" : 'Introductory Computer Forensics'},
                        {"name" : '"data"base Security'},
                        {"name" : 'Network Security Fundamentals'}
                  ]
            }],
            "desc":'These programs are meant for basically those professionals who are already working in technical de"part"ments of the corporate sector. These courses enable our students to go ahead and achieve the higher profiles in their respective organizations through a high profile curriculum.',
            "img":'assets/images/ce.jpg'
      }]
  }];
  constructor() { }
  getCourses() {
  	return this.data;
  }
}