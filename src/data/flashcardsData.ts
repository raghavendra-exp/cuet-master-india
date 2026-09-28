import { Flashcard } from '../types';

export const flashcardsData: Flashcard[] = [
  {
    id: "FC-ECO-01",
    subject: "Economics",
    chapter: "National Income",
    topic: "Aggregates",
    category: "Formula",
    front: "What is the formula converting Gross Domestic Product (GDP) to National Income (NNP_FC)?",
    back: "NNP_FC = GDP_MP - Depreciation + Net Factor Income from Abroad (NFIA) - Net Indirect Taxes (NIT)",
    hindiFront: "सकल घरेलू उत्पाद (GDP) को राष्ट्रीय आय (NNP_FC) में बदलने का क्या सूत्र है?",
    hindiBack: "NNP_FC = GDP_MP - मूल्यह्रास + विदेशों से शुद्ध साधन आय (NFIA) - शुद्ध अप्रत्यक्ष कर (NIT)"
  },
  {
    id: "FC-ECO-02",
    subject: "Economics",
    chapter: "Money & Banking",
    topic: "Credit Creation",
    category: "Formula",
    front: "What is the relationship between Legal Reserve Ratio (LRR) and Credit Multiplier (k)?",
    back: "Credit Multiplier (k) = 1 / LRR. If LRR is 10%, k = 1 / 0.10 = 10.",
    hindiFront: "वैधानिक आरक्षित अनुपात (LRR) और साख गुणक (k) के बीच क्या संबंध है?",
    hindiBack: "साख गुणक (k) = 1 / LRR. यदि LRR 10% है, तो k = 1 / 0.10 = 10."
  },
  {
    id: "FC-PHY-01",
    subject: "Physics",
    chapter: "Electrostatics",
    topic: "Capacitance",
    category: "Formula",
    front: "What is the energy stored in a charged capacitor of capacitance C and potential difference V?",
    back: "U = (1/2) * C * V² = Q² / (2C) = (1/2) * Q * V",
    hindiFront: "धारिता C और विभवांतर V वाले एक आवेशित संधारित्र में संचित ऊर्जा क्या है?",
    hindiBack: "U = (1/2) * C * V² = Q² / (2C) = (1/2) * Q * V"
  },
  {
    id: "FC-PHY-02",
    subject: "Physics",
    chapter: "Optics",
    topic: "Wave Optics",
    category: "Formula",
    front: "What is the fringe width (β) formula in Young's Double Slit Experiment?",
    back: "β = (λ * D) / d, where λ = wavelength, D = distance from slits to screen, d = slit separation.",
    hindiFront: "यंग के द्वि-स्लिट प्रयोग में फ्रिंज चौड़ाई (β) का सूत्र क्या है?",
    hindiBack: "β = (λ * D) / d, जहाँ λ = तरंगदैर्घ्य, D = पर्दे की दूरी, d = स्लिटों के बीच की दूरी।"
  },
  {
    id: "FC-MATH-01",
    subject: "Mathematics",
    chapter: "Matrices & Determinants",
    topic: "Adjoint Matrix",
    category: "Formula",
    front: "If A is an n x n square matrix, what is |adj(A)| equal to?",
    back: "|adj(A)| = |A|^(n - 1)",
    hindiFront: "यदि A एक n x n वर्ग आव्यूह है, तो |adj(A)| किसके बराबर होता है?",
    hindiBack: "|adj(A)| = |A|^(n - 1)"
  },
  {
    id: "FC-POL-01",
    subject: "Political Science",
    chapter: "The End of Bipolarity",
    topic: "Disintegration of USSR",
    category: "Fact",
    front: "In which year and month did the Soviet Union formally dissolve, and who was the last Soviet leader?",
    back: "December 1991; Mikhail Gorbachev resigned on 25 December 1991.",
    hindiFront: "सोवियत संघ औपचारिक रूप से किस वर्ष और महीने में विघटित हुआ, और अंतिम सोवियत नेता कौन थे?",
    hindiBack: "दिसंबर 1991; मिखाइल गोर्बाचेव ने 25 दिसंबर 1991 को इस्तीफा दिया था।"
  },
  {
    id: "FC-GAT-01",
    subject: "General Test",
    chapter: "Indian Polity",
    topic: "Constitutional Articles",
    category: "Fact",
    front: "Which article of the Indian Constitution is regarded by Dr. B.R. Ambedkar as the 'Heart and Soul' of the Constitution?",
    back: "Article 32 - Right to Constitutional Remedies (Writs: Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari).",
    hindiFront: "डॉ. बी.आर. अम्बेडकर द्वारा भारतीय संविधान के किस अनुच्छेद को संविधान का 'हृदय और आत्मा' माना गया है?",
    hindiBack: "अनुच्छेद 32 - संवैधानिक उपचारों का अधिकार (रिट: बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, अधिकार पृच्छा, उत्प्रेषण)।"
  },
  {
    id: "FC-ENG-01",
    subject: "English",
    chapter: "Vocabulary",
    topic: "Root Words",
    category: "Vocabulary",
    front: "What does the Latin root 'BELL' mean in words like 'Belligerent', 'Bellicose', and 'Rebellion'?",
    back: "War or fighting (Latin 'bellum' = war).",
    hindiFront: "'Belligerent', 'Bellicose' जैसे शब्दों में लैटिन मूल 'BELL' का क्या अर्थ है?",
    hindiBack: "युद्ध या लड़ाई (लैटिन 'bellum' = युद्ध)।"
  },
  {
    id: "FC-COQP11-01",
    subject: "COQP11 General Paper",
    chapter: "Legal Awareness",
    topic: "Legal Maxims",
    category: "Definition",
    front: "What is the legal meaning of 'Res Judicata'?",
    back: "A matter that has been adjudicated by a competent court and may not be pursued further by the same parties.",
    hindiFront: "'रेस जुडिकाटा' (Res Judicata) का विधिक अर्थ क्या है?",
    hindiBack: "प्रांग्न्याय / पूर्व न्याय: ऐसा मामला जिस पर किसी सक्षम अदालत द्वारा अंतिम निर्णय दिया जा चुका है, उस पर उन्हीं पक्षों द्वारा पुनः मुकदमा नहीं चलाया जा सकता।"
  }
];
