export interface QuickNote {
  id: string;
  subject: string;
  title: string;
  hindiTitle: string;
  category: 'One-Page Revision' | 'Formula Sheet' | 'Fact Sheet' | 'Last-Minute Tips';
  exam: 'CUET-UG' | 'CUET-PG' | 'Both';
  content: string;
  hindiContent: string;
  tags: string[];
}

export const quickNotesData: QuickNote[] = [
  {
    id: "NOTE-ECO-01",
    subject: "Economics",
    title: "National Income Macro Aggregates Cheatsheet",
    hindiTitle: "राष्ट्रीय आय समष्टि समुच्चय चीटशीट",
    category: "Formula Sheet",
    exam: "CUET-UG",
    content: `### National Income Key Equations:
1. **Net Factor Income from Abroad (NFIA)** = Factor income earned from abroad - Factor income paid abroad.
2. **Net Indirect Taxes (NIT)** = Indirect Taxes - Subsidies.
3. **Depreciation** = Consumption of Fixed Capital.
4. **Domestic to National**: National = Domestic + NFIA.
5. **Gross to Net**: Net = Gross - Depreciation.
6. **Factor Cost to Market Price**: MP = FC + NIT.
7. **Nominal GDP to Real GDP**: Real GDP = (Nominal GDP / Price Index) * 100.
8. **GDP Deflator** = (Nominal GDP / Real GDP) * 100.`,
    hindiContent: `### राष्ट्रीय आय के मुख्य समीकरण:
1. **विदेशों से शुद्ध साधन आय (NFIA)** = विदेशों से प्राप्त साधन आय - विदेशों को भुगतान की गई साधन आय।
2. **शुद्ध अप्रत्यक्ष कर (NIT)** = अप्रत्यक्ष कर - आर्थिक सहायता (सब्सिडी)।
3. **मूल्यह्रास** = स्थिर पूंजी का उपभोग।
4. **घरेलू से राष्ट्रीय**: राष्ट्रीय = घरेलू + NFIA।
5. **सकल से शुद्ध**: शुद्ध = सकल - मूल्यह्रास।
6. **साधन लागत से बाजार मूल्य**: MP = FC + NIT।
7. **वास्तविक जीडीपी** = (नाममात्र जीडीपी / मूल्य सूचकांक) * 100।`,
    tags: ["Economics", "National Income", "Macroeconomics"]
  },
  {
    id: "NOTE-PHY-01",
    subject: "Physics",
    title: "Electrostatics & Magnetism High-Yield Formula Sheet",
    hindiTitle: "स्थिरवैद्युतिकी और चुंबकत्व उच्च-प्राथमिकता सूत्र पत्र",
    category: "Formula Sheet",
    exam: "CUET-UG",
    content: `### High-Frequency Physics Formulas:
1. **Coulomb's Law**: F = (1 / 4πε₀) * (|q₁ q₂| / r²)
2. **Electric Field due to Dipole**:
   - Axial line: E_axial = 2kp / r³
   - Equatorial line: E_equatorial = kp / r³
3. **Gauss Law**: Φ = ∮ E · dA = q_in / ε₀
4. **Capacitance with Dielectric**: C = K * (ε₀ A / d)
5. **Drift Velocity**: v_d = eEτ / m; Current I = n e A v_d
6. **Wheatstone Bridge Balance**: P / Q = R / S
7. **Biot-Savart Law**: dB = (μ₀ / 4π) * (I dl sin θ / r²)
8. **Force on moving charge in magnetic field**: F = q (v × B)`,
    hindiContent: `### भौतिकी के महत्वपूर्ण सूत्र:
1. **कूलॉम का नियम**: F = (1 / 4πε₀) * (|q₁ q₂| / r²)
2. **द्विध्रुव के कारण विद्युत क्षेत्र**:
   - अक्षीय रेखा: E_axial = 2kp / r³
   - निरक्षीय रेखा: E_equatorial = kp / r³
3. **गाउस का नियम**: Φ = ∮ E · dA = q_in / ε₀
4. **परावैद्युत युक्त संधारित्र**: C = K * (ε₀ A / d)
5. **अपवाह वेग**: v_d = eEτ / m; धारा I = n e A v_d`,
    tags: ["Physics", "Electrostatics", "Formulas"]
  },
  {
    id: "NOTE-GAT-01",
    subject: "General Test",
    title: "General Test: Quant & Reasoning Shortcuts & Rules",
    hindiTitle: "सामान्य परीक्षा: गणित और तर्कशक्ति शॉर्टकट और नियम",
    category: "Last-Minute Tips",
    exam: "CUET-UG",
    content: `### Quick Solving Techniques for GAT:
1. **EJOTY Rule**: E(5), J(10), O(15), T(20), Y(25) for fast alphabet position decoding.
2. **Opposite Alphabet Letters**: Letters whose numeric positions sum to 27 (A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N).
3. **Successive Percentages**: A + B + (A * B / 100).
4. **Time & Work**: If A completes in x days, B in y days, together they take (x * y) / (x + y) days.
5. **Clock Angle Formula**: θ = |30H - (11/2)M| degrees.
6. **Leap Year Concept**: Normal year = 1 odd day; Leap year = 2 odd days. Century year must be divisible by 400.`,
    hindiContent: `### सामान्य परीक्षा के लिए त्वरित तकनीक:
1. **EJOTY नियम**: त्वरित वर्णमाला स्थिति कोडिंग के लिए E(5), J(10), O(15), T(20), Y(25)।
2. **विपरीत अक्षर**: जिन अक्षरों के स्थान मानों का योग 27 होता है (A-Z, B-Y, C-X, D-W, E-V, आदि)।
3. **क्रमिक प्रतिशत परिवर्तन**: A + B + (A * B / 100)।
4. **समय और कार्य**: मिलकर किया गया समय = (x * y) / (x + y) दिन।
5. **घड़ी की सुइयों के बीच कोण**: θ = |30H - (11/2)M| डिग्री।`,
    tags: ["GAT", "Quantitative Aptitude", "Reasoning"]
  },
  {
    id: "NOTE-POL-01",
    subject: "Political Science",
    title: "Key Constitutional Amendments & Eras in Indian Politics",
    hindiTitle: "प्रमुख संविधान संशोधन और भारतीय राजनीति के महत्वपूर्ण पड़ाव",
    category: "Fact Sheet",
    exam: "CUET-UG",
    content: `### Crucial Facts for CUET Political Science:
- **States Reorganisation Commission (SRC)**: Formed in 1953 (Fazal Ali Chairman, KM Panikkar, HN Kunzru); Act enacted in 1956 (14 States & 6 UTs).
- **First General Election**: 1951-1952; First Election Commissioner was Sukumar Sen.
- **Panchsheel Agreement**: Signed 29 April 1954 between PM Jawaharlal Nehru and Premier Zhou Enlai.
- **National Emergency**: Proclaimed on 25 June 1975 under Article 352 by President Fakhruddin Ali Ahmed on advice of PM Indira Gandhi.
- **Mandal Commission**: Appointed in 1979 by Janata Party Government; headed by B.P. Mandal; recommended 27% reservation for OBCs; implemented in 1990 by VP Singh government.`,
    hindiContent: `### राजनीति विज्ञान के महत्वपूर्ण तथ्य:
- **राज्य पुनर्गठन आयोग (SRC)**: 1953 में गठित; 1956 में अधिनियम पारित (14 राज्य और 6 केंद्र शासित प्रदेश)।
- **पहला आम चुनाव**: 1951-1952; प्रथम मुख्य चुनाव आयुक्त सुकुमार सेन थे।
- **पंचशील समझौता**: 29 अप्रैल 1954 को नेहरू और चाउ एन-लाई के बीच हस्ताक्षरित।
- **राष्ट्रीय आपातकाल**: 25 जून 1975 को अनुच्छेद 352 के तहत घोषित।
- **मंडल आयोग**: 1979 में नियुक्त; ओबीसी के लिए 27% आरक्षण की सिफारिश; 1990 में लागू।`,
    tags: ["Political Science", "Constitutional History"]
  }
];
