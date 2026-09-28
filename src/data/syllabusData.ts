import { SyllabusSubject } from '../types';

export const syllabusData: SyllabusSubject[] = [
  // -----------------------------------------------------------
  // CUET-UG SECTION IA: ENGLISH
  // -----------------------------------------------------------
  {
    id: "SYLL-UG-ENG",
    exam: "CUET-UG",
    category: "Language",
    code: "101",
    name: "English",
    hindiName: "अंग्रेज़ी",
    description: "Questions from the Language Section will be from the following topics but not limited to: Reading Comprehension (factual, narrative, literary), Verbal Ability, Rearranging the parts, Choosing the correct word, Synonyms and Antonyms, Vocabulary.",
    officialPdfUrl: "https://exams.nta.ac.in/CUET-UG/syllabus/english.pdf",
    lastVerified: "2026-03-15",
    topics: [
      {
        id: "ENG-T1",
        name: "Reading Comprehension",
        hindiName: "पठन बोध",
        classLinkage: "General",
        pyqFrequency: "High",
        subtopics: ["Factual Passages", "Narrative Passages", "Literary Passages", "Contextual Vocabulary", "Tone and Theme Identification"],
        concepts: [
          {
            id: "ENG-C1-1",
            name: "Central Idea and Inference",
            hindiName: "केंद्रीय विचार और निष्कर्ष",
            summary: "Deducing authorial stance, tone (analytical, critical, laudatory, satirical), and deriving logical inferences not directly stated.",
            importantFormulasOrFacts: ["Passages usually range from 300 to 450 words in length.", "Eliminate extreme option choices containing words like 'never', 'always', 'solely'."],
            ncertReference: "Class 11/12 Core English Reading Skills",
            pyqFrequency: "High"
          },
          {
            id: "ENG-C1-2",
            name: "Vocabulary in Context",
            hindiName: "संदर्भ में शब्दावली",
            summary: "Determining the contextual meaning of words or figurative phrases as used specifically in the passage.",
            importantFormulasOrFacts: ["Contextual usage often differs from literal dictionary definition."],
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "ENG-T2",
        name: "Verbal Ability & Grammar",
        hindiName: "मौखिक योग्यता और व्याकरण",
        classLinkage: "General",
        pyqFrequency: "High",
        subtopics: ["Subject-Verb Agreement", "Tenses", "Prepositions & Phrasal Verbs", "Active & Passive Voice", "Direct & Indirect Speech"],
        concepts: [
          {
            id: "ENG-C2-1",
            name: "Error Spotting and Sentence Correction",
            hindiName: "त्रुटि पहचान और वाक्य सुधार",
            summary: "Rules of parallelism, pronoun antecedents, misplaced modifiers, and conditional clauses.",
            importantFormulasOrFacts: ["Either/Neither followed by singular verb unless closest subject is plural.", "Subjunctive mood rules ('If I were...')"],
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "ENG-T3",
        name: "Para Jumbles & Rearranging",
        hindiName: "वाक्य पुनर्व्यवस्था",
        classLinkage: "General",
        pyqFrequency: "High",
        subtopics: ["Opening Sentence Detection", "Mandatory Pairs", "Chronological Ordering", "Concluding Statement"],
        concepts: [
          {
            id: "ENG-C3-1",
            name: "Mandatory Linking Pairs",
            hindiName: "अनिवार्य युग्म सूत्र",
            summary: "Technique of identifying noun-pronoun links, cause-and-effect transitions (Hence, Therefore), and time markers.",
            importantFormulasOrFacts: ["Independent opening sentences introduce the subject without prior referring pronouns."],
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "ENG-T4",
        name: "Vocabulary, Synonyms, Antonyms & Idioms",
        hindiName: "शब्दावली, समानार्थी, विलोम और मुहावरे",
        classLinkage: "General",
        pyqFrequency: "High",
        subtopics: ["High-Frequency CUET Words", "Root Words (Latin/Greek)", "Foreign Expressions", "Idioms and Phrases", "One Word Substitution"],
        concepts: [
          {
            id: "ENG-C4-1",
            name: "Etymological Roots & Affixes",
            hindiName: "शब्द मूल और प्रत्यय",
            summary: "Deconstructing unfamiliar words using prefixes (bene-, mal-, ante-) and suffixes (-phobia, -cide, -logy).",
            importantFormulasOrFacts: ["Root 'chron' = time; 'bene' = good; 'mal' = bad; 'greg' = flock/group."],
            pyqFrequency: "High"
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------
  // CUET-UG SECTION II: ECONOMICS / BUSINESS ECONOMICS
  // -----------------------------------------------------------
  {
    id: "SYLL-UG-ECO",
    exam: "CUET-UG",
    category: "Domain",
    code: "309",
    name: "Economics / Business Economics",
    hindiName: "अर्थशास्त्र / व्यावसायिक अर्थशास्त्र",
    description: "Covers Microeconomics (Consumer Behaviour, Producer Behaviour, Market Forms) and Macroeconomics (National Income, Money and Banking, Government Budget, Balance of Payments, Indian Economic Development).",
    officialPdfUrl: "https://exams.nta.ac.in/CUET-UG/syllabus/economics.pdf",
    lastVerified: "2026-03-15",
    topics: [
      {
        id: "ECO-T1",
        name: "Consumer Behaviour and Demand",
        hindiName: "उपभोक्ता व्यवहार और मांग",
        classLinkage: "Class 12",
        ncertChapter: "Introductory Microeconomics - Chapter 2",
        pyqFrequency: "High",
        subtopics: ["Utility Approach", "Indifference Curve Analysis", "Budget Line & Set", "Law of Demand", "Price Elasticity of Demand (Ed)"],
        concepts: [
          {
            id: "ECO-C1-1",
            name: "Consumer Equilibrium (Indifference Curve)",
            hindiName: "उपभोक्ता संतुलन (अनाधिमान वक्र)",
            summary: "Consumer equilibrium is achieved where the Indifference Curve is tangent to the Budget Line, i.e., MRSxy = Px / Py, and MRS is diminishing.",
            importantFormulasOrFacts: ["Condition: MRSxy = Px/Py", "Slope of Budget Line = - Px / Py", "Higher indifference curve represents higher satisfaction (monotonic preferences)."],
            ncertReference: "NCERT Class 12 Microeconomics Ch 2",
            pyqFrequency: "High"
          },
          {
            id: "ECO-C1-2",
            name: "Price Elasticity of Demand (Ed)",
            hindiName: "मांग की कीमत लोच",
            summary: "Measurement of responsiveness of quantity demanded to changes in price using percentage and geometric methods.",
            importantFormulasOrFacts: ["Ed = (% ΔQ) / (% ΔP) = (ΔQ / ΔP) * (P / Q)", "|Ed| > 1: Elastic; |Ed| = 1: Unitary; |Ed| < 1: Inelastic."],
            ncertReference: "NCERT Class 12 Microeconomics Ch 2",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "ECO-T2",
        name: "National Income and Related Aggregates",
        hindiName: "राष्ट्रीय आय और संबंधित समुच्चय",
        classLinkage: "Class 12",
        ncertChapter: "Introductory Macroeconomics - Chapter 2",
        pyqFrequency: "High",
        subtopics: ["Circular Flow of Income", "GDP, GNP, NDP, NNP at Market Price & Factor Cost", "Value Added Method", "Income Method", "Expenditure Method", "Real vs Nominal GDP"],
        concepts: [
          {
            id: "ECO-C2-1",
            name: "Aggregates Conversion Rules",
            hindiName: "राष्ट्रीय आय समुच्चय रूपांतरण नियम",
            summary: "Fundamental equations connecting Gross/Net, Domestic/National, and Market Price/Factor Cost.",
            importantFormulasOrFacts: [
              "Net = Gross - Depreciation (Consumption of Fixed Capital)",
              "National = Domestic + NFIA (Net Factor Income from Abroad)",
              "Factor Cost (FC) = Market Price (MP) - NIT (Net Indirect Taxes = Indirect Taxes - Subsidies)",
              "National Income = NNP at Factor Cost (NNP_FC)"
            ],
            ncertReference: "NCERT Class 12 Macroeconomics Ch 2",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "ECO-T3",
        name: "Money and Banking",
        hindiName: "मुद्रा और बैंकिंग",
        classLinkage: "Class 12",
        ncertChapter: "Introductory Macroeconomics - Chapter 3",
        pyqFrequency: "High",
        subtopics: ["Money Supply Measures (M1, M2, M3, M4)", "Credit Creation by Commercial Banks", "Central Bank Functions", "Quantitative & Qualitative Monetary Tools"],
        concepts: [
          {
            id: "ECO-C3-1",
            name: "Money Multiplier & Credit Creation",
            hindiName: "मुद्रा गुणक और साख निर्माण",
            summary: "Commercial banks create demand deposits on the basis of primary deposits and Legal Reserve Ratio (LRR).",
            importantFormulasOrFacts: ["Money Multiplier (k) = 1 / LRR", "Total Credit Creation = Initial Primary Deposit * (1 / LRR)"],
            ncertReference: "NCERT Class 12 Macroeconomics Ch 3",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "ECO-T4",
        name: "Government Budget & Balance of Payments",
        hindiName: "सरकारी बजट और भुगतान संतुलन",
        classLinkage: "Class 12",
        ncertChapter: "Introductory Macroeconomics - Chapters 4 & 6",
        pyqFrequency: "High",
        subtopics: ["Revenue vs Capital Receipts", "Revenue vs Capital Expenditure", "Fiscal Deficit & Primary Deficit", "Current Account vs Capital Account BOP", "Foreign Exchange Regimes"],
        concepts: [
          {
            id: "ECO-C4-1",
            name: "Budget Deficits Formulae",
            hindiName: "बजट घाटे के सूत्र",
            summary: "Measures of budgetary deficits and borrowing implications.",
            importantFormulasOrFacts: [
              "Revenue Deficit = Revenue Expenditure - Revenue Receipts",
              "Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts)",
              "Primary Deficit = Fiscal Deficit - Interest Payments"
            ],
            ncertReference: "NCERT Class 12 Macroeconomics Ch 4",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "ECO-T5",
        name: "Indian Economic Development",
        hindiName: "भारतीय आर्थिक विकास",
        classLinkage: "Class 12",
        ncertChapter: "Indian Economic Development - NCERT",
        pyqFrequency: "High",
        subtopics: ["Eve of Independence", "1950-1990 Planning Era", "1991 LPG Reforms", "Poverty & Human Capital Formation", "Rural Development", "Comparative Development India-China-Pakistan"],
        concepts: [
          {
            id: "ECO-C5-1",
            name: "1991 Economic Reforms (LPG)",
            hindiName: "1991 के आर्थिक सुधार (LPG)",
            summary: "Liberalisation, Privatisation, and Globalisation crisis response to balance of payments crisis.",
            importantFormulasOrFacts: ["Abolition of industrial licensing (except 6 hazardous sectors).", "Fiscal crisis led to devaluation of rupee in July 1991."],
            ncertReference: "NCERT Class 12 IED Ch 3",
            pyqFrequency: "High"
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------
  // CUET-UG SECTION II: PHYSICS
  // -----------------------------------------------------------
  {
    id: "SYLL-UG-PHY",
    exam: "CUET-UG",
    category: "Domain",
    code: "322",
    name: "Physics",
    hindiName: "भौतिक विज्ञान",
    description: "Strictly aligned with Class 12 syllabus: Electrostatics, Current Electricity, Magnetic Effects, Optics, Dual Nature of Matter, Atoms and Nuclei, Electronic Devices.",
    officialPdfUrl: "https://exams.nta.ac.in/CUET-UG/syllabus/physics.pdf",
    lastVerified: "2026-03-15",
    topics: [
      {
        id: "PHY-T1",
        name: "Electrostatics",
        hindiName: "स्थिरवैद्युतिकी",
        classLinkage: "Class 12",
        ncertChapter: "Class 12 Physics Part 1 - Chapters 1 & 2",
        pyqFrequency: "High",
        subtopics: ["Coulomb's Law", "Electric Field & Dipole", "Gauss's Theorem and Applications", "Electric Potential", "Capacitors and Dielectrics"],
        concepts: [
          {
            id: "PHY-C1-1",
            name: "Gauss's Law and Flux",
            hindiName: "गाउस का नियम और फ्लक्स",
            summary: "Total electric flux through any closed surface is equal to 1/ε₀ times the total charge enclosed.",
            importantFormulasOrFacts: ["Φ = ∮ E · dA = q_enclosed / ε₀", "Electric field due to infinitely long thin charged wire: E = λ / (2πε₀r)", "Field due to infinite plane sheet: E = σ / (2ε₀)"],
            ncertReference: "NCERT Class 12 Physics Ch 1",
            pyqFrequency: "High"
          },
          {
            id: "PHY-C1-2",
            name: "Capacitance & Dielectrics",
            hindiName: "धारिता और परावैद्युत",
            summary: "Parallel plate capacitor with and without dielectric slabs; series and parallel grouping; energy stored.",
            importantFormulasOrFacts: ["C₀ = ε₀A / d; with dielectric: C = K ε₀A / d", "Energy Stored: U = (1/2)CV² = Q² / (2C)", "Energy Density = (1/2)ε₀E²"],
            ncertReference: "NCERT Class 12 Physics Ch 2",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "PHY-T2",
        name: "Current Electricity",
        hindiName: "धारा विद्युत",
        classLinkage: "Class 12",
        ncertChapter: "Class 12 Physics Part 1 - Chapter 3",
        pyqFrequency: "High",
        subtopics: ["Drift Velocity & Ohm's Law", "Temperature Dependence of Resistance", "Kirchhoff's Laws", "Wheatstone Bridge", "Potentiometer & Meter Bridge"],
        concepts: [
          {
            id: "PHY-C2-1",
            name: "Drift Velocity & Mobility",
            hindiName: "अपवाह वेग और गतिशीलता",
            summary: "Relating microscopic charge transport to macroscopic electric current.",
            importantFormulasOrFacts: ["v_d = - e E τ / m", "I = n e A v_d", "Mobility μ = |v_d| / E = e τ / m", "Resistivity ρ = m / (n e² τ)"],
            ncertReference: "NCERT Class 12 Physics Ch 3",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "PHY-T3",
        name: "Optics (Wave & Ray Optics)",
        hindiName: "प्रकाशिकी (किरण और तरंग प्रकाशिकी)",
        classLinkage: "Class 12",
        ncertChapter: "Class 12 Physics Part 2 - Chapters 9 & 10",
        pyqFrequency: "High",
        subtopics: ["Refraction at Spherical Surfaces", "Lens Maker's Formula", "Prism Dispersion", "Optical Instruments", "Huygens' Principle", "Young's Double Slit Experiment (YDSE)"],
        concepts: [
          {
            id: "PHY-C3-1",
            name: "Lens Maker's Formula & Optical Instruments",
            hindiName: "लेंस निर्माता सूत्र और प्रकाशिक यंत्र",
            summary: "Focal length relation to refractive index and radii of curvature; Compound Microscope and Astronomical Telescope magnification.",
            importantFormulasOrFacts: [
              "1/f = (μ - 1) [ (1/R₁) - (1/R₂) ]",
              "Microscope Magnification (normal adjustment): m = (L / f_o) * (D / f_e)",
              "Telescope: m = - f_o / f_e; Length of tube = f_o + f_e"
            ],
            ncertReference: "NCERT Class 12 Physics Ch 9",
            pyqFrequency: "High"
          },
          {
            id: "PHY-C3-2",
            name: "Young's Double Slit Experiment (YDSE)",
            hindiName: "यंग का द्वि-स्लिट प्रयोग",
            summary: "Condition for constructive and destructive interference, fringe width calculation.",
            importantFormulasOrFacts: [
              "Path Difference: Δx = d sin θ ≈ yd / D",
              "Bright fringe (Maxima): y_n = n λ D / d",
              "Dark fringe (Minima): y_n = (2n - 1) λ D / (2d)",
              "Fringe width β = λ D / d"
            ],
            ncertReference: "NCERT Class 12 Physics Ch 10",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "PHY-T4",
        name: "Modern Physics (Dual Nature, Atoms, Nuclei)",
        hindiName: "आधुनिक भौतिकी",
        classLinkage: "Class 12",
        ncertChapter: "Class 12 Physics Part 2 - Chapters 11, 12, 13",
        pyqFrequency: "High",
        subtopics: ["Photoelectric Effect", "Einstein's Equation", "de Broglie Wavelength", "Bohr Model of Hydrogen Atom", "Nuclear Binding Energy & Decay"],
        concepts: [
          {
            id: "PHY-C4-1",
            name: "Einstein's Photoelectric Equation",
            hindiName: "आइंस्टीन का प्रकाशवैद्युत समीकरण",
            summary: "Energy conservation in photon-electron interaction; stopping potential and threshold frequency.",
            importantFormulasOrFacts: [
              "K_max = hν - Φ₀ = e V₀",
              "de Broglie wavelength: λ = h / p = h / √(2mE)",
              "For electron: λ = 1.227 / √V nm"
            ],
            ncertReference: "NCERT Class 12 Physics Ch 11",
            pyqFrequency: "High"
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------
  // CUET-UG SECTION II: MATHEMATICS / APPLIED MATHEMATICS
  // -----------------------------------------------------------
  {
    id: "SYLL-UG-MATH",
    exam: "CUET-UG",
    category: "Domain",
    code: "319",
    name: "Mathematics / Applied Mathematics",
    hindiName: "गणित / अनुप्रयुक्त गणित",
    description: "Paper consists of Section A (15 compulsory questions covering both Pure & Applied Maths) and Section B1 (Pure Mathematics) or Section B2 (Applied Mathematics).",
    officialPdfUrl: "https://exams.nta.ac.in/CUET-UG/syllabus/mathematics.pdf",
    lastVerified: "2026-03-15",
    topics: [
      {
        id: "MATH-T1",
        name: "Matrices and Determinants",
        hindiName: "आव्यूह और सारणिक",
        classLinkage: "Class 12",
        ncertChapter: "Class 12 NCERT Mathematics Part 1 - Chapters 3 & 4",
        pyqFrequency: "High",
        subtopics: ["Matrix Operations", "Inverse of a Matrix", "Properties of Determinants", "Adjoint Matrix", "Solving Linear Equations using Matrix Method"],
        concepts: [
          {
            id: "MATH-C1-1",
            name: "Adjoint and Inverse Properties",
            hindiName: "सहखंडज और व्युत्क्रम के गुणधर्म",
            summary: "Essential determinant relationships frequently tested in CUET MCQs.",
            importantFormulasOrFacts: [
              "A * adj(A) = |A| * I",
              "|adj(A)| = |A|^(n - 1) for n x n matrix",
              "|A * B| = |A| * |B|",
              "A^(-1) = (1 / |A|) * adj(A), provided |A| ≠ 0"
            ],
            ncertReference: "NCERT Class 12 Maths Part 1 Ch 4",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "MATH-T2",
        name: "Calculus (Differentiation & Applications)",
        hindiName: "कलन (अवकलन और अनुप्रयोग)",
        classLinkage: "Class 12",
        ncertChapter: "Class 12 NCERT Mathematics Part 1 - Chapters 5 & 6",
        pyqFrequency: "High",
        subtopics: ["Continuity & Differentiability", "Chain Rule", "Logarithmic Differentiation", "Rate of Change", "Increasing and Decreasing Functions", "Maxima and Minima"],
        concepts: [
          {
            id: "MATH-C2-1",
            name: "First and Second Derivative Tests for Extrema",
            hindiName: "उच्चिष्ठ और निम्निष्ठ के लिए परीक्षण",
            summary: "Finding local/absolute maxima and minima using critical points f'(x) = 0 and f''(x) concavity.",
            importantFormulasOrFacts: [
              "f'(c) = 0 and f''(c) < 0 => Local Maximum at c",
              "f'(c) = 0 and f''(c) > 0 => Local Minimum at c",
              "f'(x) > 0 for all x in (a, b) => Strictly increasing"
            ],
            ncertReference: "NCERT Class 12 Maths Part 1 Ch 6",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "MATH-T3",
        name: "Integrals and Differential Equations",
        hindiName: "समाकलन और अवकल समीकरण",
        classLinkage: "Class 12",
        ncertChapter: "Class 12 NCERT Mathematics Part 2 - Chapters 7, 8 & 9",
        pyqFrequency: "High",
        subtopics: ["Definite Integrals Properties", "Area under Curves", "Order and Degree of Differential Equations", "Separation of Variables", "Linear Differential Equations"],
        concepts: [
          {
            id: "MATH-C3-1",
            name: "Definite Integral King's Property",
            hindiName: "निश्चित समाकलन का मुख्य गुणधर्म",
            summary: "∫[a to b] f(x) dx = ∫[a to b] f(a + b - x) dx; key shortcut for CUET integration questions.",
            importantFormulasOrFacts: [
              "∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx",
              "Linear DE form: dy/dx + P(x)y = Q(x); Integrating Factor (IF) = e^(∫P dx)",
              "Solution: y * (IF) = ∫(Q * IF) dx + C"
            ],
            ncertReference: "NCERT Class 12 Maths Part 2 Ch 7 & 9",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "MATH-T4",
        name: "Vectors and 3-Dimensional Geometry",
        hindiName: "सदिश और त्रिविमीय ज्यामिति",
        classLinkage: "Class 12",
        ncertChapter: "Class 12 NCERT Mathematics Part 2 - Chapters 10 & 11",
        pyqFrequency: "High",
        subtopics: ["Dot and Cross Products", "Direction Cosines & Ratios", "Equation of Lines in Space", "Shortest Distance Between Skew Lines", "Planes"],
        concepts: [
          {
            id: "MATH-C4-1",
            name: "Shortest Distance Between Skew Lines",
            hindiName: "विषमतलीय रेखाओं के बीच न्यूनतम दूरी",
            summary: "Calculating shortest distance d between lines r = a1 + λb1 and r = a2 + μb2.",
            importantFormulasOrFacts: [
              "d = | (a2 - a1) · (b1 × b2) | / | b1 × b2 |",
              "If lines intersect, (a2 - a1) · (b1 × b2) = 0"
            ],
            ncertReference: "NCERT Class 12 Maths Part 2 Ch 11",
            pyqFrequency: "High"
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------
  // CUET-UG SECTION II: POLITICAL SCIENCE
  // -----------------------------------------------------------
  {
    id: "SYLL-UG-POL",
    exam: "CUET-UG",
    category: "Domain",
    code: "323",
    name: "Political Science",
    hindiName: "राजनीति विज्ञान",
    description: "Syllabus divided into Contemporary World Politics (Cold War, Bipolarity, US Hegemony, Alternative Centres of Power, South Asia, International Organisations) and Politics in India Since Independence (Nation-Building, Planned Development, India's External Relations, Crisis of Democratic Order, Recent Developments).",
    officialPdfUrl: "https://exams.nta.ac.in/CUET-UG/syllabus/political_science.pdf",
    lastVerified: "2026-03-15",
    topics: [
      {
        id: "POL-T1",
        name: "The End of Bipolarity & Contemporary World",
        hindiName: "दो ध्रुवीयता का अंत और समकालीन विश्व",
        classLinkage: "Class 12",
        ncertChapter: "Contemporary World Politics - Chapter 1 & 2",
        pyqFrequency: "High",
        subtopics: ["Soviet System & Crisis", "Gorbachev's Glasnost & Perestroika", "Disintegration of USSR (1991)", "Shock Therapy and Its Consequences", "Democratic Upsurges & CIS"],
        concepts: [
          {
            id: "POL-C1-1",
            name: "Disintegration of Soviet Union & Shock Therapy",
            hindiName: "सोवियत संघ का विघटन और शॉक थेरेपी",
            summary: "Factors leading to the collapse in Dec 1991 under Boris Yeltsin; consequences of the painful transition to capitalism termed 'Shock Therapy'.",
            importantFormulasOrFacts: [
              "USSR dissolved in December 1991 by Russia, Ukraine, and Belarus.",
              "Shock Therapy resulted in the 'largest garage sale in history' destroying 90% of state industries.",
              "Russia became the successor state inheriting USSR's permanent UN Security Council seat."
            ],
            ncertReference: "NCERT Class 12 Contemporary World Politics Ch 2",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "POL-T2",
        name: "Challenges of Nation-Building (India)",
        hindiName: "राष्ट्र-निर्माण की चुनौतियाँ",
        classLinkage: "Class 12",
        ncertChapter: "Politics in India Since Independence - Chapter 1",
        pyqFrequency: "High",
        subtopics: ["Three Challenges of Nation-Building", "Partition Consequences", "Integration of Princely States (Sardar Patel)", "Integration of Hyderabad & Manipur", "States Reorganisation Commission 1953/1956"],
        concepts: [
          {
            id: "POL-C2-1",
            name: "Integration of Princely States & SRC",
            hindiName: "रियासतों का एकीकरण और राज्य पुनर्गठन",
            summary: "Sardar Patel's diplomatic role using the Instrument of Accession; creation of linguistic states post Potti Sreeramulu's hunger strike.",
            importantFormulasOrFacts: [
              "565 Princely states were integrated.",
              "Operation Polo in September 1948 integrated Hyderabad.",
              "States Reorganisation Act passed in 1956 creating 14 states and 6 union territories based on linguistic lines."
            ],
            ncertReference: "NCERT Class 12 Politics in India Ch 1",
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "POL-T3",
        name: "India's External Relations & Foreign Policy",
        hindiName: "भारत के विदेश संबंध",
        classLinkage: "Class 12",
        ncertChapter: "Politics in India Since Independence - Chapter 4",
        pyqFrequency: "High",
        subtopics: ["Nehru's Foreign Policy Objectives", "Non-Aligned Movement (NAM)", "Panchsheel Agreement 1954", "Sino-Indian War of 1962", "Wars with Pakistan (1965, 1971)", "India's Nuclear Policy"],
        concepts: [
          {
            id: "POL-C3-1",
            name: "Non-Aligned Movement & Panchsheel",
            hindiName: "गुटनिरपेक्ष आंदोलन और पंचशील",
            summary: "Principles of peaceful coexistence signed between Jawaharlal Nehru and Zhou Enlai on 29 April 1954; founding principles of NAM at Belgrade 1961.",
            importantFormulasOrFacts: [
              "Five Principles of Panchsheel: Mutual respect for territorial integrity, non-aggression, non-interference, equality, and peaceful coexistence.",
              "NAM First Summit held in Belgrade in 1961 with 25 member states."
            ],
            ncertReference: "NCERT Class 12 Politics in India Ch 4",
            pyqFrequency: "High"
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------
  // CUET-UG SECTION III: GENERAL APTITUDE TEST (GAT)
  // -----------------------------------------------------------
  {
    id: "SYLL-UG-GAT",
    exam: "CUET-UG",
    category: "General Test",
    code: "501",
    name: "General Test (GAT)",
    hindiName: "सामान्य परीक्षा (GAT)",
    description: "Question paper will contain 60 questions, out of which 50 questions need to be attempted. Covers General Knowledge, Current Affairs, General Mental Ability, Numerical Ability, Quantitative Reasoning, Logical and Analytical Reasoning.",
    officialPdfUrl: "https://exams.nta.ac.in/CUET-UG/syllabus/general_test.pdf",
    lastVerified: "2026-03-15",
    topics: [
      {
        id: "GAT-T1",
        name: "General Knowledge & Static GK",
        hindiName: "सामान्य ज्ञान (स्थैतिक GK)",
        classLinkage: "General",
        pyqFrequency: "High",
        subtopics: ["Indian Constitution & Polity", "Indian History & Freedom Struggle", "Indian Geography & River Systems", "General Science Concepts", "National Symbols & Heritage"],
        concepts: [
          {
            id: "GAT-C1-1",
            name: "Key Constitutional Articles & Amendments",
            hindiName: "प्रमुख संवैधानिक अनुच्छेद और संशोधन",
            summary: "Fundamental Rights (Articles 14-32), Directive Principles (Part IV), Fundamental Duties (Article 51A), Emergency Provisions (352, 356, 360).",
            importantFormulasOrFacts: [
              "42nd Amendment Act 1976 added 'Socialist, Secular, Integrity' to Preamble and Fundamental Duties.",
              "Article 21A: Right to Free and Compulsory Education (86th Amendment 2002).",
              "Article 32 is called the 'Heart and Soul of the Constitution' by Dr. B.R. Ambedkar."
            ],
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "GAT-T2",
        name: "Numerical Ability & Quantitative Reasoning",
        hindiName: "संख्यात्मक योग्यता और अंकगणित",
        classLinkage: "General",
        pyqFrequency: "High",
        subtopics: ["Percentages & Profit/Loss", "Ratio, Proportion & Partnerships", "Simple & Compound Interest", "Time, Speed and Distance", "Time and Work", "Average and Mixtures", "Mensuration (2D/3D)"],
        concepts: [
          {
            id: "GAT-C2-1",
            name: "Profit, Loss & Discount Shortcuts",
            hindiName: "लाभ, हानि और छूट के सूत्र",
            summary: "Cost Price, Selling Price, Marked Price relationships and successive discounts.",
            importantFormulasOrFacts: [
              "Profit % = (Profit / CP) * 100",
              "SP = CP * (100 + P%) / 100",
              "Successive Discounts d1% and d2%: Net Discount = d1 + d2 - (d1 * d2 / 100)"
            ],
            pyqFrequency: "High"
          },
          {
            id: "GAT-C2-2",
            name: "Time, Speed & Relative Velocity",
            hindiName: "समय, गति और सापेक्ष चाल",
            summary: "Problems on trains, circular motion, average speed.",
            importantFormulasOrFacts: [
              "Average Speed for equal distance = 2xy / (x + y)",
              "1 km/h = 5/18 m/s; 1 m/s = 18/5 km/h",
              "Opposite direction speeds add: (u + v); Same direction speeds subtract: |u - v|"
            ],
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "GAT-T3",
        name: "Logical and Analytical Reasoning",
        hindiName: "तार्किक और विश्लेषणात्मक तर्क",
        classLinkage: "General",
        pyqFrequency: "High",
        subtopics: ["Number & Alphabet Series", "Coding-Decoding", "Blood Relations", "Direction Sense Test", "Syllogisms", "Venn Diagrams", "Seating Arrangement", "Clocks & Calendars"],
        concepts: [
          {
            id: "GAT-C3-1",
            name: "Coding-Decoding & Alphabet Positions",
            hindiName: "कोडिंग-डिकोडिंग और वर्णमाला क्रम",
            summary: "Forward (1 to 26) and reverse (27 - n) alphabet numbering tricks (EJOTY rule: 5, 10, 15, 20, 25).",
            importantFormulasOrFacts: ["Opposite letters sum to 27: A(1)+Z(26)=27, B(2)+Y(25)=27, C(3)+X(24)=27."],
            pyqFrequency: "High"
          },
          {
            id: "GAT-C3-2",
            name: "Blood Relations & Family Tree Notation",
            hindiName: "रक्त संबंध और आरेख तकनीक",
            summary: "Standard diagrammatic representations (+ for male, - for female, = for spouse, vertical line for generation).",
            importantFormulasOrFacts: ["Paternal = Father's side; Maternal = Mother's side."],
            pyqFrequency: "High"
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------
  // CUET-PG PAPER: COQP11 (GENERAL PAPER / LLB / B.ED)
  // -----------------------------------------------------------
  {
    id: "SYLL-PG-COQP11",
    exam: "CUET-PG",
    category: "PG Paper",
    code: "COQP11",
    name: "General Paper (LLB, B.Ed, Mass Comm)",
    hindiName: "सामान्य प्रश्नपत्र (एलएल.बी., बी.एड., जनसंचार)",
    description: "75 questions covering English Comprehension, General Knowledge/Awareness, Computer Basics, General Aptitude and Logical Reasoning. Mandatory for DU LLB, BHU LLB, and many central university professional courses.",
    officialPdfUrl: "https://exams.nta.ac.in/CUET-PG/syllabus/coqp11.pdf",
    lastVerified: "2026-03-15",
    topics: [
      {
        id: "COQP11-T1",
        name: "Language Comprehension (English)",
        hindiName: "भाषा बोध (अंग्रेज़ी)",
        classLinkage: "UG Degree",
        pyqFrequency: "High",
        subtopics: ["Passage Comprehension", "Synonyms/Antonyms", "Idioms and Phrases", "One Word Substitution", "Sentence Correction"],
        concepts: [
          {
            id: "COQP11-C1-1",
            name: "Legal Maxims & Legal Vocabulary",
            hindiName: "विधिक सूक्तियाँ और विधिक शब्दावली",
            summary: "Crucial for law entrance aspirants: Mens Rea, Actus Reus, Quid Pro Quo, Ultra Vires, Habeas Corpus, Res Judicata.",
            importantFormulasOrFacts: [
              "Mens Rea: Guilty mind/criminal intention.",
              "Actus Reus: The guilty act or physical deed.",
              "Ultra Vires: Beyond legal powers or authority."
            ],
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "COQP11-T2",
        name: "Computer Basics & IT Awareness",
        hindiName: "कंप्यूटर का मूल ज्ञान",
        classLinkage: "UG Degree",
        pyqFrequency: "High",
        subtopics: ["Computer Fundamentals", "Hardware & Memory Units", "Operating Systems", "Networking & Internet Protocols", "Cyber Security Basics", "Shortcuts & File Formats"],
        concepts: [
          {
            id: "COQP11-C2-1",
            name: "Memory Hierarchy & Storage Units",
            hindiName: "मेमोरी पदानुक्रम और भंडारण इकाइयाँ",
            summary: "Registers -> Cache -> RAM/ROM -> SSD/HDD; byte conversions.",
            importantFormulasOrFacts: [
              "1 Byte = 8 Bits; 1 Nibble = 4 Bits",
              "1 KB = 1024 Bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB"
            ],
            pyqFrequency: "High"
          }
        ]
      }
    ]
  },

  // -----------------------------------------------------------
  // CUET-PG PAPER: SCQP09 (COMPUTER SCIENCE / MCA)
  // -----------------------------------------------------------
  {
    id: "SYLL-PG-SCQP09",
    exam: "CUET-PG",
    category: "PG Paper",
    code: "SCQP09",
    name: "Computer Science and Information Technology",
    hindiName: "कंप्यूटर विज्ञान और सूचना प्रौद्योगिकी",
    description: "75 questions covering Discrete Mathematics, Data Structures, Operating Systems, Computer Networks, Database Management Systems (DBMS), and Programming in C/C++.",
    officialPdfUrl: "https://exams.nta.ac.in/CUET-PG/syllabus/scqp09.pdf",
    lastVerified: "2026-03-15",
    topics: [
      {
        id: "SCQP09-T1",
        name: "Data Structures & Algorithms",
        hindiName: "डेटा संरचनाएँ और एल्गोरिदम",
        classLinkage: "UG Degree",
        pyqFrequency: "High",
        subtopics: ["Arrays, Stacks and Queues", "Linked Lists", "Binary Trees & BST", "Searching and Sorting Complexities", "Graph Traversals (BFS, DFS)"],
        concepts: [
          {
            id: "SCQP09-C1-1",
            name: "Asymptotic Notations & Sorting Complexities",
            hindiName: "समय जटिलता और सॉर्टिंग एल्गोरिदम",
            summary: "Time and space complexities of Merge Sort, Quick Sort, Heap Sort, and Binary Search.",
            importantFormulasOrFacts: [
              "Merge Sort: O(n log n) Best, Average, and Worst case; Stable.",
              "Quick Sort: O(n log n) Average, O(n²) Worst case (when pivot is extremum).",
              "Binary Search: O(log n) on sorted array."
            ],
            pyqFrequency: "High"
          }
        ]
      },
      {
        id: "SCQP09-T2",
        name: "Database Management Systems (DBMS)",
        hindiName: "डेटाबेस प्रबंधन प्रणाली",
        classLinkage: "UG Degree",
        pyqFrequency: "High",
        subtopics: ["ER Model", "Relational Algebra", "SQL Queries", "Normalisation (1NF, 2NF, 3NF, BCNF)", "Transactions and ACID Properties"],
        concepts: [
          {
            id: "SCQP09-C2-1",
            name: "Normal Forms and Functional Dependencies",
            hindiName: "सामान्यीकरण रूप (नॉर्मलाइजेशन)",
            summary: "Rules for eliminating redundancy and anomalies in relational tables.",
            importantFormulasOrFacts: [
              "1NF: Atomic attribute values.",
              "2NF: 1NF + no partial dependency on candidate key.",
              "3NF: 2NF + no transitive dependency (if X->A, X is superkey or A is prime).",
              "BCNF: If X->A, X must be a superkey."
            ],
            pyqFrequency: "High"
          }
        ]
      }
    ]
  }
];
