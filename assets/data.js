/*
  All content on the site lives in this file. Edit the text here; the page rebuilds itself.

  Notes
  - Dates are "YYYY-MM". An end of null means "present".
  - themes: ids from THEMES below. They drive the filter chips.
  - Anything with draft: true is hidden until you remove that line.
  - Contact details: only filled-in values are shown. Phone and address are deliberately not on the site.
*/

window.THEMES = [
  { id: "circular", label: "Circular economy" },
  { id: "crm", label: "Critical raw materials" },
  { id: "ghg", label: "GHG accounting & MRV" },
  { id: "policy", label: "Climate & EU policy" },
  { id: "finance", label: "Climate & green finance" },
  { id: "textiles", label: "Textiles" },
  { id: "innovation", label: "Innovation & startups" }
];

window.PROFILE = {
  name: "Kristiina Martin",
  headline: "Circular economy, critical raw materials and climate policy",
  intro:
    "I work on circular economy and climate policy, with about nine years of experience in EU project management, greenhouse gas accounting and stakeholder work across Europe, Asia, Africa and the MENA region. Today I evaluate innovation projects for EIT RawMaterials, manage two Horizon Europe projects and lead industry working groups on metals. Before that I advised governments, development banks and companies on climate policy, supply chains and textile circularity.",
  location: "Berlin, Germany",
  facts: [
    { label: "Current role", value: "Project Officer, Innovation Team, EIT RawMaterials" },
    { label: "Experience and base", value: "About 9 years. Based in Berlin, originally from Estonia." },
    { label: "Languages", value: "Estonian, Russian (native); English (full professional); German (professional working); Swedish (elementary)" }
  ],
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kristiinamartin" }
  ],
  email: "" // add a public address here to show it in the contact section
};

/* ---------- Experience ---------- */

window.ROLES = [
  {
    id: "eitrm",
    short: "EIT RawMaterials",
    kind: "current",
    org: "EIT RawMaterials",
    title: "Project Officer, Innovation Team",
    location: "Berlin",
    periods: [["2026-06", null]],
    themes: ["innovation", "crm", "circular"],
    summary:
      "Evaluates the innovation and business potential of consortium projects in innovation calls, manages EIT RawMaterials' contribution to two Horizon Europe projects, and leads working groups with industry in the Green and Circular Metals network.",
    bullets: [
      "Lead technical evaluation of innovation funding applications of up to €2.5M, scoring the innovativeness and business potential of consortium projects. 18 projects evaluated across the last two call cut-offs.",
      "Manage EIT RawMaterials' contribution to two Horizon Europe projects, RISERS and the CCRI Community of Practice for Critical Raw Materials, including direct management of the subcontractors who deliver project work.",
      "Lead the working groups on greenhouse gas assessments and on CO2 costs and savings for the Green and Circular Metal Strategic Impact Group Network (SIGN), with around 20 industry members and web meetings every five weeks.",
      "Establishing and leading a further SIGN working group on e-waste recycling.",
      "Co-organise the SIGN Expert Forum and work with the communications team on conference messaging and delivery."
    ],
    projects: [
      {
        title: "Innovation call evaluations",
        client: "EIT RawMaterials innovation calls, funding up to €2.5M per project",
        themes: ["innovation", "crm", "circular"],
        text:
          "Applicants are consortia of startups, SMEs, large industry and research organisations, and each must represent the knowledge triangle of higher education, research and industry. I score the innovativeness and business potential of each application. My score is combined with the business development team's score, who examine the business case and financial mechanisms, and with the consensus score of external evaluators. Management and the access to finance team review the top-ranked projects and decide who is funded. In return EIT RawMaterials receives revenue sharing or an equity stake. Critical raw materials innovation and circular economy projects are routed to me."
      },
      {
        title: "RISERS",
        client: "Horizon Europe, regulatory and standards barriers to industrial symbiosis",
        themes: ["circular", "policy"],
        text:
          "EIT RawMaterials is a contributing partner to several work streams, with a budget of around €200,000. I took part in a webinar and the technical committee, revised the roadmap, and supported the final conference and final partner meeting. I wrote an article on regulatory barriers to industrial symbiosis in the steel and cement sectors, reviewed by an external expert, and prepared the Steel chapter presentation for the WP7 Technical Committee."
      },
      {
        title: "Circular Cities and Regions Initiative (CCRI), Community of Practice for Critical Raw Materials",
        client: "Horizon Europe coordination and support action, runs to March 2027",
        themes: ["crm", "circular", "policy"],
        text:
          "EIT RawMaterials leads the community of practice (budget around €200K), which engaged 15 cities from across Europe. I supported two meetings and webinars, with a capacity-building meeting planned for 2027, contributed to a case study, a policy brief and a white paper, and directly manage the subcontractors working for EIT RawMaterials in the project."
      },
      {
        title: "Green and Circular Metal Strategic Impact Group Network (SIGN)",
        client: "Industry working groups and Expert Forum",
        themes: ["ghg", "circular", "crm"],
        text:
          "I lead the working groups on greenhouse gas assessments and on CO2 costs and savings, with around 20 industry members meeting every five weeks, and I am establishing an e-waste recycling working group. I also co-organise the SIGN Expert Forum."
      }
    ]
  },

  {
    id: "adelphi-mgr",
    short: "adelphi, Manager",
    kind: "consulting",
    org: "adelphi",
    title: "Manager, Climate Policy",
    location: "Berlin",
    periods: [["2025-04", "2026-01"]],
    themes: ["policy", "ghg", "finance"],
    summary:
      "Technical and strategic work on climate policy, GHG accounting, MRV and climate finance for governments and international organisations, with a focus on industrial decarbonisation and carbon management. Clients included UBA, GIZ, PwC and the Global Center on Adaptation.",
    bullets: [
      "Provided strategic consulting on climate and energy transition policy, with a focus on industrial decarbonisation and carbon management.",
      "Assessed and revised national climate strategies (NDCs), translating targets into pathways with policy and investment implications.",
      "Analysed mitigation options in hard-to-abate sectors and energy-intensive industries and advised on competitiveness and transition strategies.",
      "Developed knowledge products and governance frameworks for monitoring and reporting industrial emissions.",
      "Reviewed colleagues' deliverables as part of internal quality assurance, and supported workshop agendas, marketing materials and policy research, for example on CBAM."
    ],
    projects: [
      {
        title: "CBAM: advice on the design and implementation of the MRV mechanism",
        client: "Umweltbundesamt (UBA)",
        themes: ["ghg", "policy"],
        text:
          "Researched the production stages and value chains of key CBAM-relevant products (iron and steel, fertilisers) and analysed system boundary definitions and the implementation challenges producers face."
      },
      {
        title: "Empowering Partner Countries to Engage in the NDC Partnership",
        client: "GIZ, Small Island Developing States (Seychelles, Mauritius)",
        themes: ["policy"],
        text:
          "Led the NDC roadmap analysis. Evaluated national mitigation policies in energy, transport, waste and industry against climate targets, reviewed national strategy documents for policy gaps, and recommended ways to raise ambition in the industrial and energy sectors for revised NDCs."
      },
      {
        title: "Support Project for the Implementation of the Paris Agreement (SPA)",
        client: "GIZ, three assignments",
        themes: ["finance", "ghg", "policy"],
        text: "Three assignments for GIZ:",
        points: [
          "Uganda, climate finance access: led the analysis of barriers faced by SMEs and MSMEs, with a focus on youth- and women-led enterprises in agriculture, energy and transport. Assessed the policy landscape, wrote the report with recommendations for the Government of Uganda, and managed engagement with the Climate Finance Unit.",
          "Nigeria, climate finance MRV: researched global best practice and developed an MRV roadmap feeding into Nigeria's Net Zero Investment Plan.",
          "GHG inventory compilation for industry: analysed the IPCC 2006 Guidelines and best practice for metals, and condensed them into an accessible GHG accounting guide and a methodology and governance framework for monitoring, reporting and verifying industrial process emissions."
        ]
      },
      {
        title: "Sarawak Net Zero Strategy and Carbon Plan",
        client: "PwC Advisory Services for the Ministry of Energy and Environmental Sustainability, Malaysia",
        themes: ["ghg", "policy"],
        text:
          "Technical consultancy on GHG accounting for the Sarawak region applying the IPCC Guidelines and the GPC. Reviewed calculations, built bespoke Excel tools, gave expert input on uncertainty quantification, and contributed to integrating sectoral mitigation options into long-term planning."
      },
      {
        title: "Scaling Adaptation Finance Through Banks and the Private Sector",
        client: "Global Center on Adaptation, Cooperative Rural Development Bank Tanzania",
        themes: ["finance", "ghg"],
        text:
          "Facilitated stakeholder meetings for data collection and validation, adapted the data collection framework, ran end-to-end emission calculations in Excel using the UNFCCC framework, and authored the final report with recommendations."
      }
    ]
  },

  {
    id: "adelphi-cons",
    short: "adelphi, Consultant",
    kind: "consulting",
    org: "adelphi",
    title: "Consultant, Green and Circular Economy",
    location: "Berlin",
    periods: [["2023-02", "2025-02"]],
    themes: ["circular", "textiles", "crm", "policy"],
    summary:
      "Project and content work on circular economy, sustainable supply chains and green industry, with responsibility for work planning, budgets and client communication. Clients included GIZ, UBA, BMWK, BMUV, ADB, IFC and the European Commission (SWITCH-Asia).",
    bullets: [
      "Managed international consulting projects in circular economy and sustainable industry, including work and time planning, reporting and budget adherence (GIZ Jordan projects).",
      "Ran regulatory analyses (CEAP, WFD, CSDDD, EU Taxonomy, CSRD) and derived actionable recommendations.",
      "Wrote policy briefs, reports and decision papers for ministries and international clients; co-authored 8 publications, listed below.",
      "Contributed to proposals and took responsibility for delivery of won projects.",
      "Conducted site visits and stakeholder consultations in Jordan, Tajikistan, Uzbekistan and the British Virgin Islands.",
      "Led the internal Textile Cluster (business development, project ideas, new client opportunities) and contributed to the internal AI Working Group, designing use cases and training materials.",
      "Mentored junior colleagues on live project work."
    ],
    projects: [
      {
        title: "Multi-stakeholder projects for sustainable textile supply chains in Jordan",
        client: "GIZ",
        themes: ["textiles", "circular"],
        text: "Project management covering work and time planning, reporting and budget."
      },
      {
        title: "Capacity-building training for public stakeholders on green industry",
        client: "GIZ, Jordan",
        themes: ["circular", "policy"],
        text:
          "Project management, and workshop materials on digital product passports for Jordanian public stakeholders."
      },
      {
        title: "GAIN: Strengthening Green Economy in Jordan",
        client: "GIZ, policy advisory and green business development",
        themes: ["textiles", "circular"],
        text:
          "Project management, and a contribution to the work package on circularity in the Jordanian ready-made garment industry. Held online and in-person consultations with garment companies, textile recyclers, international investors and the chamber of industry, made site visits in Jordanian industrial zones to assess circular practices, and led the writing of the textile waste sorting and collection guideline. Facilitated a dialogue between local stakeholders and investors on a national recycling plant."
      },
      {
        title: "Cost allocation and incentives for sustainable supply chains",
        client: "Umweltbundesamt (UBA)",
        themes: ["circular", "policy"],
        text:
          "Led the research on global tin supply chains and co-authored four UBA publications on stakeholder power relations, business approaches and incentive mechanisms. Included industry interviews and consultations, three online advisory board sessions and two online workshops."
      },
      {
        title: "Study on the role of critical raw materials in the energy transition, Japan and Germany",
        client: "BMWK",
        themes: ["crm", "circular", "policy"],
        text:
          "Researched the critical raw materials landscape, circular economy solutions and supply-security policy gaps, and recommended opportunities for German-Japanese cooperation."
      },
      {
        title: "Feasibility study for textile waste recycling in Vietnam",
        client: "IFC",
        themes: ["textiles", "circular", "policy"],
        text:
          "Researched recycling technologies for apparel and footwear waste, engaged technology providers, and analysed EU policies (CEAP, WFD, CSDDD, EU Taxonomy) and their impact on Vietnamese producers."
      },
      {
        title: "Prevention of marine litter in the Caribbean Sea (PROMAR)",
        client: "BMUV, British Virgin Islands",
        themes: ["policy", "circular"],
        text: "Analysed waste management policy gaps, including marine plastic, and developed strategic recommendations."
      },
      {
        title: "Resource Efficiency in Agri-food Production and Processing (REAP)",
        client: "European Commission, SWITCH-Asia, Tajikistan and Uzbekistan",
        themes: ["finance", "policy"],
        text:
          "Researched sustainable consumption and production policies and gaps, with recommendations, and interviewed stakeholders on MSME access to green and clean finance."
      },
      {
        title: "Accelerating Gender Equality in East Asia for an Inclusive and Green Recovery",
        client: "Asian Development Bank, Mongolia and China",
        themes: ["policy", "finance"],
        text:
          "Contributed to the comprehensive assessment report, the MSME needs assessment and the project summary report, collected training materials, and supported a mentoring session and a national policy dialogue."
      }
    ]
  },

  {
    id: "freelance",
    short: "Freelance",
    kind: "consulting",
    org: "Freelance sustainability consultant",
    title: "Self-employed",
    location: "Stockholm, Sweden",
    periods: [["2022-06", "2023-02"]],
    themes: ["innovation", "ghg", "textiles", "circular"],
    summary: "Advice to sustainable-fashion startups and a GHG tool for a startup client.",
    bullets: [
      "Mentored and consulted 8 sustainable-fashion startup teams in the Fashion for Change accelerator on EU sustainability and circularity policies, circular business models, circular product design, sustainable material sourcing and sustainability claims in marketing.",
      "Developed a bespoke GHG emissions calculation and tracking tool for a startup client to quantify, monitor and report its carbon footprint over time."
    ],
    projects: []
  },

  {
    id: "sei",
    short: "SEI Tallinn",
    kind: "research",
    org: "Stockholm Environment Institute (SEI), Tallinn Centre",
    title: "Environmental Management, Circular Economy Expert",
    location: "Tallinn, Estonia",
    periods: [["2019-02", "2022-06"]],
    themes: ["circular", "ghg", "textiles", "finance"],
    summary:
      "Managed project development and delivery end to end, from grant applications through partner coordination to reporting, across circular economy, GHG accounting and environmental management. Clients included the Estonian Ministry of Environment, the National Defence Investment Centre, Tallinn Airport, the Nordic Council of Ministers and Elron.",
    bullets: [
      "Led grant applications, coordinated partner contributions and managed reporting for initiatives funded by Horizon Europe, LIFE, the Estonian Environmental Investment Fund and the Nordic Council of Ministers.",
      "Delivered GHG calculations, environmental impact assessments and circular economy strategies for clients including the Estonian defence sector and Tallinn Airport.",
      "Developed GHG calculation tools, emission factors and techno-economic analyses in line with the GHG Protocol and IPCC guidelines for industrial and public-sector use.",
      "Designed and delivered training sessions, workshops, conferences and policy consultations to build capacity and foster dialogue on sustainability.",
      "Advised companies on business transformation using circular models and resource efficiency.",
      "Mentored and directed junior colleagues on live project work."
    ],
    projects: [
      {
        title: "Towards a Nordic-Baltic circular textile system",
        client: "Nordic Council of Ministers",
        themes: ["textiles", "circular"],
        text:
          "Led the project on textile circularity in the Baltic countries, managing budget, fundraising and reporting. Oversaw an 8-member distributed team across Estonia, Latvia, Lithuania and Denmark, organised three local dialogue events, and supported conferences in Latvia and Lithuania. Researched textile flows in Estonia and co-authored two reports."
      },
      {
        title: "GHG Calculation Tool for Businesses",
        client: "Estonian Ministry of Environment",
        themes: ["ghg", "finance"],
        text:
          "An Excel-based tool built on the GHG Protocol that lets Estonian businesses calculate their emissions and show how much CO2 the climate initiatives they finance will save. One of the main contributors within the consortium. Led the collection and calculation of emission factors for Estonian district heating systems and consumption-based electricity, and engaged stakeholders across several industries to support adoption."
      },
      {
        title: "Environmental impact assessment of the Estonian defence sector",
        client: "National Defence Investment Centre",
        themes: ["ghg", "policy"],
        text:
          "Leading analyst. Collected and analysed data and calculated the environmental footprint: GHG emissions from energy use, waste and water consumption. Translated climate, energy and waste policies into a format organisation representatives could use, developed Scope 1 and 2 reduction measures with cost analysis in an Excel tool with localised emission factors, and facilitated stakeholder interviews."
      },
      {
        title: "Comparative LCA tool for GHG emissions in Estonian rail transport",
        client: "Elron, Estonia's government-owned passenger train operator",
        themes: ["ghg"],
        text:
          "Contributed to a GHG calculation tool for a simplified comparative life cycle assessment. Led the calculation of emission factors for diesel and electric trains in the Estonian context, including the CO2 emission factor of the Estonian electricity mix, for comparison with diesel buses."
      },
      {
        title: "Green Bond Framework second opinion",
        client: "Arion Bank (Iceland), with CICERO",
        themes: ["finance"],
        text: "Second-opinion consultation that led to stricter investment criteria aligned with the sustainability recommendations."
      },
      {
        title: "Circular economy and circular design capacity building",
        client: "Estonian companies",
        themes: ["circular", "innovation"],
        text: "Designed and delivered workshops on circular economy and circular design."
      },
      {
        title: "Sustainable garment manufacturing supply chains",
        client: "India and Europe collaboration",
        themes: ["textiles", "circular"],
        text: "Co-led research on sustainable garment manufacturing supply chains."
      }
    ]
  },

  {
    id: "pioneers",
    short: "Pioneers",
    kind: "venture",
    org: "Climate-KIC, Pioneers into Practice",
    title: "Pioneer",
    location: "Portugal",
    periods: [["2018-06", "2018-11"]],
    themes: ["innovation", "textiles", "circular"],
    summary: "Professional mobility programme for environmental experts, with systems thinking and systems innovation courses, a team assignment and a placement at an international organisation.",
    bullets: [
      "Created a white paper on textile circularity in Estonia, focused on innovative technologies for sorting post-consumer textile waste to increase recycling.",
      "Spent six weeks at the startup Sensefinity, ideating new business models for textile supply chains using its sensors."
    ],
    projects: []
  },

  {
    id: "textileinventory",
    short: "Textileinventory",
    kind: "venture",
    org: "Textileinventory",
    title: "Founder and General Manager",
    location: "Estonia",
    periods: [["2017-02", "2019-02"]],
    themes: ["innovation", "textiles", "circular"],
    summary:
      "Founded a social enterprise that helps businesses reduce their environmental impact by increasing the reuse of textile waste.",
    bullets: [
      "Collected 7 tonnes of post-industrial textile waste from local manufacturers and passed it to local artisans and designers for upcycling.",
      "Completed Climate-KIC's four-month startup accelerator in Estonia and secured initial Climate-KIC funding to test and validate the business idea.",
      "Co-organised the \"Handmade Circular Economy\" hackathon, which generated 7 new business ideas.",
      "Analysed Estonian textile waste policy, identified gaps and business opportunities, and engaged policymakers and industry to advocate for waste reduction and recycling.",
      "Managed a team of 2 as founder and CEO."
    ],
    projects: []
  },

  {
    id: "gaasivorgud",
    short: "Gaasivõrgud",
    kind: "industry",
    org: "AS Gaasivõrgud",
    title: "Data Acquisition Specialist",
    location: "Tallinn, Estonia",
    periods: [["2013-08", "2015-02"], ["2017-03", "2018-07"]],
    themes: ["ghg"],
    summary:
      "Energy data work at Estonia's largest gas distribution network, which has more than 1,500 km of pipeline and over 45,000 consumption points.",
    bullets: [
      "2017 to 2018: managed the Energy Information System and supported the move from an old metering system to smart metering.",
      "2013 to 2015: managed an online system for the natural gas distribution network.",
      "Analysed gas consumption data to improve efficiency and planning, and acted as the interface between engineering, data management and regulatory requirements."
    ],
    projects: []
  },

  {
    id: "skeleton",
    short: "Skeleton",
    kind: "industry",
    org: "Skeleton Technologies",
    title: "Sales Engineer",
    location: "Tallinn, Estonia",
    periods: [["2015-11", "2016-05"]],
    themes: [],
    summary:
      "Technical sales at a European manufacturer of ultracapacitors, selling ultracapacitor-based engine start modules.",
    bullets: [],
    projects: []
  }
];

/* ---------- Publications ---------- */
// "Martin, K." is highlighted automatically. Add link: "https://..." to show a Read link.

window.PUBLICATION_GROUPS = [
  {
    label: "2026",
    items: [
      {
        authors: ["Essers, L.", "Trescher, S.", "Hausotter, T.", "Cengiz Durmus, C.", "Martin, K."],
        title:
          "Identification of possibilities to prove the origin of a product from a specific installation. Carbon Border Adjustment Mechanism (CBAM): Advice on the design and implementation of the monitoring, reporting and verification mechanism",
        publisher: "Dessau-Roßlau: Umweltbundesamt (UBA)",
        forthcoming: true
      },
      {
        authors: ["Cengiz Durmus, C.", "Martin, K.", "Werner, U."],
        title:
          "Harnessing Transparency for Industry Decarbonisation: Good Practices in Greenhouse Gas Inventory Compilation for the Industry Sector",
        publisher: "",
        forthcoming: true
      }
    ]
  },
  {
    label: "2025",
    items: [
      {
        authors: ["Martin, K."],
        title: "Policy Brief: The Virgin Islands, Prevention of Marine Litter in the Caribbean Sea (PROMAR)",
        publisher: "Berlin: adelphi",
        forthcoming: true,
        draft: true // author role still to be confirmed; remove this line once checked
      },
      {
        authors: ["Martin, K.", "Ulutas Isevi, F."],
        title: "Textile Waste Sorting and Collection Guideline for the Jordanian Ready-Made Garment Industry",
        publisher: "",
        forthcoming: true
      },
      {
        authors: ["Strasser, J.", "Grüning, C.", "Martin, K.", "Tran, C.", "Jüde, J."],
        title:
          "Cost allocation and incentive mechanisms for the environment, climate protection and resource conservation along global supply chains: Recommendations for selected incentive mechanisms",
        publisher: "Dessau-Roßlau: Umweltbundesamt (UBA)"
      },
      {
        authors: ["Grüning, C.", "Jüde, J.", "Martin, K.", "Strasser, J.", "Tran, C.", "Grabs, J."],
        title:
          "Cost allocation and incentive mechanisms for the environment, climate protection and resource conservation along global supply chains: Roadmaps for the implementation of sustainable supply chain management approaches and instruments",
        publisher: "Dessau-Roßlau: Umweltbundesamt (UBA)"
      }
    ]
  },
  {
    label: "2024",
    items: [
      {
        authors: ["Grüning, C.", "Martin, K.", "Ruthner, L.", "Beier, J.", "Berner, R."],
        title:
          "Circular economy solutions for critical raw materials for the energy transition: Opportunities for German-Japanese cooperation",
        publisher: "Berlin: adelphi"
      },
      {
        authors: ["Grüning, C.", "Jüde, J.", "Martin, K.", "Strasser, J.", "Tran, C.", "Hofstetter, J."],
        title:
          "Cost allocation and incentive mechanisms for the environment, climate protection and resource conservation along global supply chains: Business approaches and instruments of sustainable supply chain management",
        publisher: "Dessau-Roßlau: Umweltbundesamt (UBA)"
      },
      {
        authors: ["Strasser, J.", "Garcia, B.", "Grüning, C.", "Tran, C.", "Martin, K.", "Hannak, J.", "Jüde, J.", "Becker, M.", "Grabs, J.", "Hofstetter, J."],
        title:
          "Cost allocation and incentive mechanisms for environmental, climate protection and resource conservation along global supply chains: Analysis of the cotton, tin, natural rubber, coffee and iron ore supply chains",
        publisher: "Dessau-Roßlau: Umweltbundesamt (UBA)"
      },
      {
        authors: ["Munnolimath, A.", "Martin, K."],
        title: "Outcome and Lessons Learned Report on Access to Cleantech Finance Activities in Tajikistan and Uzbekistan",
        publisher: "REAP"
      },
      {
        authors: ["Munnolimath, A.", "Martin, K.", "Orolbaeva, A."],
        title:
          "Understanding the Sustainable Consumption and Production (SCP) Policy Ecosystem Regionally for Tajikistan and Uzbekistan",
        publisher: "REAP"
      }
    ]
  },
  {
    label: "2023 and earlier",
    items: [
      {
        authors: ["Jordan Strategy Forum", "Tuncer, B.", "Bauer, T.", "Martin, K."],
        title: "Circularity: Jordan's Opportunity to Promote Economic Growth",
        publisher: "Amman: Jordan Strategy Forum (JSF)",
        year: 2023
      },
      {
        authors: [],
        title: "Post-consumer textile circularity in the Baltic countries: Current status and recommendations for the future",
        publisher: "SEI, Nordic-Baltic circular textile system study for the Nordic Council of Ministers. Co-author, with a second report on Estonia",
        link: "https://www.norden.org/en/publication/post-consumer-textile-circularity-baltic-countries"
      }
    ]
  }
];

/* ---------- Skills, geographies, clients ---------- */

window.SKILLS = [
  { area: "Circular economy", items: ["Circular design and business models", "Textile value chains and waste", "Supply chains", "Industrial symbiosis", "Critical raw materials circularity", "Waste policy", "Digital product passports"] },
  { area: "Climate and GHG", items: ["GHG accounting and inventories (GHG Protocol, IPCC 2006, GPC, UNFCCC)", "Emission factors and uncertainty quantification", "MRV systems, including industrial process emissions", "NDC roadmaps", "Climate finance", "CBAM", "LCA comparisons"] },
  { area: "Policy and regulation", items: ["EU policy analysis (CEAP, WFD, CSRD, CSDDD, EU Taxonomy, CBAM)", "Policy gap analysis", "Policy briefs", "Strategy development"] },
  { area: "Project and programme management", items: ["End-to-end project management", "Proposals and acquisition", "Horizon Europe project management", "Managing hired experts and subcontractors", "Stakeholder and client management", "Quality assurance of deliverables"] },
  { area: "Innovation", items: ["Evaluating innovation and business potential of funding applications", "Startup advice and mentoring"] },
  { area: "Energy systems and modelling", items: ["Balmorel and LEAP", "Techno-economic analysis", "Energy market analysis", "Power and thermal engineering"] },
  { area: "Stakeholder work", items: ["Interviews and consultations", "Advisory boards", "Workshops and trainings", "Policy dialogues", "Site visits", "Conference organisation"] },
  { area: "Tools", items: ["Excel: bespoke calculation tools and models", "AI tools such as ChatGPT: use-case design and training"] }
];

window.GEOGRAPHIES = [
  { region: "Europe", places: ["EU", "Germany", "Estonia", "Nordic-Baltic", "Portugal"] },
  { region: "MENA", places: ["Jordan"] },
  { region: "Africa", places: ["Uganda", "Nigeria", "Tanzania"] },
  { region: "Asia", places: ["Vietnam", "Malaysia (Sarawak)", "Tajikistan", "Uzbekistan", "Mongolia", "China", "Japan", "India"] },
  { region: "Islands", places: ["Mauritius", "Seychelles", "British Virgin Islands"] }
];

window.CLIENTS = [
  "European Commission (Horizon Europe, SWITCH-Asia)", "GIZ", "Umweltbundesamt (UBA)", "BMWK", "BMUV",
  "Asian Development Bank", "IFC", "Nordic Council of Ministers", "Global Center on Adaptation", "PwC",
  "Estonian Ministry of Environment", "Arion Bank", "Elron", "Tallinn Airport", "Jordan Strategy Forum", "Climate-KIC"
];

/* ---------- Education ---------- */

window.EDUCATION = [
  {
    title: "MSc Electrical Power Engineering",
    where: "Tallinn University of Technology (TalTech)",
    years: "2014 to 2020",
    text:
      "Thesis: Investment Needs to Achieve Climate Neutrality in the Estonian Energy Sector. Modelled the Estonian energy system in Balmorel under three carbon price scenarios for climate neutrality by 2050."
  },
  {
    title: "BSc Thermal Power Engineering",
    where: "Tallinn University of Technology (TalTech)",
    years: "2011 to 2014",
    text:
      "Thesis: Cost-Saving Opportunities in Transition from Electric Heating to District Heating."
  },
  {
    title: "Exchange studies",
    where: "Kyungpook National University, South Korea",
    years: "2015",
    text: ""
  }
];

window.CERTIFICATES = [
  "CSRD Fundamentals, CSRD Institute (2025)",
  "Introduction to the EU Taxonomy and Sustainable Finance, Greenomy Academy (2025)",
  "Jaan Poska Scholarship"
];
