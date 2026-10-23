"use strict";
/* ============================================================
   Plantolex — Encyclopedia Taxonomy & Categories Directory
   File: categories.js
   Academic and Professional Agricultural Taxonomy (Arabic / English / Latin Terms)
   ============================================================ */

const ICONS = {
  leaf: "M5 19c0-8 5-14 14-14 0 9-6 14-14 14zM5 19l8-8",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z",
  bug: "M12 8a4 5 0 0 1 4 5 4 5 0 0 1-8 0 4 5 0 0 1 4-5zM9 5l2 3M15 5l-2 3M4 12h4M16 12h4M5 19l4-3M19 19l-4-3",
  microbe: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M9.5 9.5h.01M14.5 13h.01M12.5 8.5h.01M10 14h.01",
  target: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
  predator: "M12 7a4 4 0 0 1 4 4v3a4 4 0 0 1-8 0v-3a4 4 0 0 1 4-4M12 7V4M9 5L7 3M15 5l2-2M8 12H4M20 12h-4M8 17l-3 3M16 17l3 3",
  layers: "M3 7h18M3 12h18M3 17h18",
  drop: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  sprout: "M12 21v-9M12 12c0-4-3-6-7-6 0 4 3 6 7 6zM12 15c0-3 2-5 6-5 0 3-2 5-6 5z",
  waves: "M3 9c3-2 6-2 9 0s6 2 9 0M3 15c3-2 6-2 9 0s6 2 9 0",
  seed: "M12 4c3.5 3 5 6 5 9a5 5 0 0 1-10 0c0-3 1.5-6 5-9M12 21v-4",
  flask: "M9 3h6M10 3v6l-5.2 9.3A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.7L14 9V3",
  greenhouse: "M3 10l9-6 9 6M5 10v10h14V10M9 20v-6h6v6",
  box: "M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v9",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M3.5 9h17M3.5 15h17M12 3c2.8 3.4 2.8 14.6 0 18M12 3c-2.8 3.4-2.8 14.6 0 18"
};

const CATEGORIES = [
  {
    id: "crop-science", icon: "leaf", status: "structure",
    ar: { name: "علوم المحاصيل والإنتاج الزراعي", summary: "دراسة إنتاج المحاصيل الحقلية والبساتين من الزراعة حتى الحصاد، مع التركيز على المعاملات الزراعية والدورات المحصولية." },
    en: { name: "Crop Science & Agronomy", summary: "Study of field crops and horticultural production from planting to harvest, focusing on agronomic practices and cropping systems." },
    kw: "crop crops production agronomy field crops vegetables orchards محاصيل إنتاج زراعة حقلية خضار بساتين",
    subs: [
      ["field-crops", "المحاصيل الحقلية", "Field crops"],
      ["vegetables", "إنتاج الخضروات", "Vegetable production"],
      ["fruits-orchards", "فاكهة وبساتين الفاكهة", "Fruit crops and orchards"],
      ["medicinal-aromatic", "النباتات الطبية والعطرية", "Medicinal and aromatic plants"],
      ["ornamental", "نباتات الزينة والمسطحات الخضراء", "Ornamental plants and turfgrass"],
      ["forage-fodder", "محاصيل العلف والمرعى", "Forage and fodder crops"],
      ["greenhouse-crops", "محاصيل البيوت المحمية", "Greenhouse crop production"],
      ["growth-stages", "مراحل نمو وتطور النبات", "Crop phenology and growth stages"],
      ["planting-harvesting", "مواعيد الزراعة والمعاملات الحصادية", "Planting and harvesting management"],
      ["rotation-systems", "الدورات الزراعية وأنظمة الزراعة", "Crop rotation and cropping systems"],
      ["seed-selection", "إنتاج واختبار تقاوي وبذور المحاصيل", "Seed selection and quality testing"],
      ["postharvest-storage", "معاملات ما بعد الحصاد والتخزين", "Post-harvest handling and storage"]
    ]
  },
  {
    id: "plant-health", icon: "shield", status: "structure",
    ar: { name: "صحة النبات والتشخيص الميداني", summary: "تشخيص اضطرابات النبات الفسيولوجية والبيئية، والتمييز بين الإجهادات الحيوية وغير الحيوية ومتابعة الحالة الصحية." },
    en: { name: "Plant Health & Diagnostics", summary: "Diagnosing physiological and environmental disorders, differentiating biotic from abiotic stresses, and health monitoring." },
    kw: "plant health symptoms diagnosis physiology disorders صحة نبات أعراض تشخيص فسيولوجيا اضطرابات",
    subs: [
      ["anatomy-physiology", "تشريح وفسيولوجيا النبات", "Plant anatomy and physiology"],
      ["nutrition-disorders", "اختلالات العناصر الغذائية", "Plant nutritional disorders"],
      ["biotic-abiotic", "الإجهادات الحيوية وغير الحيوية", "Biotic and abiotic stresses"],
      ["symptom-identification", "توصيف العلامات والأعراض النباتية", "Symptom identification and description"],
      ["diagnostic-methods", "طرق وأساليب التشخيص المعملي والميداني", "Diagnostic methods and techniques"],
      ["disease-prevention", "الاستراتيجيات الوقائية لصحة النبات", "Plant disease prevention strategies"],
      ["disease-management", "إدارة الأمراض والآفات النباتية", "Plant disease management"],
      ["pest-damage", "تقدير الأضرار الناجمة عن الآفات", "Pest-induced plant damage assessment"],
      ["environmental-stress", "الإجهاد البيئي والمناخي", "Environmental and climatic stress"],
      ["health-monitoring", "أنظمة المراقبة والإنذار المبكر", "Plant health monitoring systems"]
    ]
  },
  {
    id: "pests", icon: "bug", status: "structure",
    ar: { name: "الآفات الزراعية والحشرية (الحشرات والعث)", summary: "تصنيف الحشرات الاقتصادية، دراسة بيولوجيتها ودورات حياتها، العثات الضارة، النيماتودا، ومراقبة التعداد." },
    en: { name: "Agricultural Entomology & Pests", summary: "Classification of economic insects, biology and life cycles, harmful mites, nematodes, and population monitoring." },
    kw: "pest pests insect mites nematodes entomology حشرات عث نيماتودا آفات زراعية",
    subs: [
      ["insect-identification", "تصنيف وتعرّف الحشرات الاقتصادية", "Insect taxonomy and identification"],
      ["life-cycles", "بيولوجيا الآفات ودورات حياتها", "Pest biology and life cycles"],
      ["mites", "العثّات والآفات العنكبوتية", "Phytophagous mites"],
      ["nematodes", "النيماتودا المتطفلة على النبات", "Plant-parasitic nematodes"],
      ["mollusks", "القواقع والرخويات الزراعية", "Agricultural mollusks and snails"],
      ["monitoring-scouting", "الرصد الحشري والمسح الميداني", "Pest monitoring and field scouting"],
      ["economic-injury", "مستويات الضرر الاقتصادي وعتبات الحرارة", "Economic injury levels and thresholds"],
      ["pest-ecology", "بيئة وتراجع حشرات الآفات", "Pest ecology and population dynamics"],
      ["pest-resistance", "مقاومة المبيدات وإدارة المظهر الوراثي", "Pesticide resistance management"],
      ["crop-pest-guides", "الأدلة التخصصية لآفات المحاصيل", "Crop-specific pest guides"]
    ]
  },
  {
    id: "diseases", icon: "microbe", status: "structure",
    ar: { name: "أمراض النبات والممرضات النباتية (الفيزياء المرضية)", summary: "دراسة الفطريات، البكتيريا، الفيروسات، والفيتوبلازما الممرضة، أوبئة الأمراض وطرق الوقاية والمكافحة." },
    en: { name: "Plant Pathology & Pathogens", summary: "Study of fungal, bacterial, viral, and phytoplasmal plant pathogens, disease epidemiology, and management." },
    kw: "disease fungi bacteria virus phytoplasma pathology أمراض نبات فطر بكتيريا فيروس فيتوبلازما",
    subs: [
      ["fungal-diseases", "الأمراض الفطرية النباتية", "Fungal plant diseases"],
      ["bacterial-diseases", "الأمراض البكتيرية النباتية", "Bacterial plant diseases"],
      ["viral-diseases", "الأمراض الفيروسية والتشوهات", "Viral plant diseases and disorders"],
      ["phytoplasmas", "الفيتوبلازما والسبيروبلازما", "Phytoplasmas and spiroplasmas"],
      ["soil-borne", "أمراض التربة والجذور المحمولة", "Soil-borne plant diseases"],
      ["seed-borne", "الأمراض المنقولة عبر التقاوي والبذور", "Seed-borne plant diseases"],
      ["epidemiology", "وبائية الأمراض النباتية وتطورها", "Plant disease epidemiology"],
      ["diagnostic-principles", "المبادئ الأساسية لأمراض النبات", "Principles of plant pathology"],
      ["prevention-management", "إدارة ومكافحة أمراض النبات", "Disease prevention and management"]
    ]
  },
  {
    id: "ipm", icon: "target", status: "structure",
    ar: { name: "الإدارة المتكاملة للآفات (IPM)", summary: "تطبيق الأساليب المتكاملة للرصد والوقاية والمكافحة الزراعية والميكانيكية والحيوية والكيميائية الرشيدة." },
    en: { name: "Integrated Pest Management (IPM)", summary: "Applying integrated tactics for monitoring, prevention, cultural, mechanical, biological, and rational chemical control." },
    kw: "ipm integrated pest management إدارة متكاملة مكافحة عتبات اقتصادية مبيدات",
    subs: [
      ["ipm-principles", "مبادئ وفلسفة الإدارة المتكاملة", "Principles of IPM"],
      ["pest-monitoring", "برامج المراقبة والإنذار المبكر للآفات", "Pest monitoring and early warning"],
      ["identification-diagnosis", "التشخيص الدقيق والتعرّف على مسببات الضرر", "Accurate identification and diagnosis"],
      ["cultural-practices", "العمليات الزراعية والوقاية الثقافية", "Cultural practices and prevention"],
      ["mechanical-physical", "المكافحة الميكانيكية والفيزيائية", "Mechanical and physical control methods"],
      ["biological-control", "استخدام الأعداء الحيوية في المكافحة", "Biological control integration"],
      ["chemical-control", "المكافحة الكيميائية الرشيدة والآمنة", "Rational and safe chemical control"],
      ["action-thresholds", "عتبات التدخل والمكافحة الاقتصادية", "Action and economic thresholds"],
      ["resistance-management", "إدارة مقاومة الآفات للمبيدات", "Pesticide resistance management (PRM)"],
      ["mode-of-action", "مجموعات مبيدات حسب ميكانيكية التأثير", "Pesticide mode of action (MoA) groups"],
      ["safety-label", "سلامة تداول المبيدات والالتزام بالبطاقة الاستدلالية", "Pesticide safety and label compliance"],
      ["crop-plans", "خطط IPM التخصصية للمحاصيل", "Crop-specific IPM management plans"]
    ]
  },
  {
    id: "biocontrol", icon: "predator", status: "structure",
    ar: { name: "المكافحة الحيوية والأعداء الطبيعيين", summary: "المفترسات، الطفيليات، مسببات الأمراض الميكروبية (فطريات وبكتيريا وبيروسات)، وتطبيقات المكافحة التطبيقية." },
    en: { name: "Biological Control & Natural Enemies", summary: "Predators, parasitoids, microbial pathogens (fungi, bacteria, viruses), and augmentative biocontrol applications." },
    kw: "biocontrol natural enemies parasitoids predators pathogens مكافحة حيوية أعداء طبيعية مفترسات طفيليات",
    subs: [
      ["parasitoids", "الحشرات المتطفلة (أشباه الطفيليات)", "Insect parasitoids"],
      ["predators", "الحشرات والعثّات المفترسة", "Predatory insects and mites"],
      ["entomopathogenic-fungi", "الفطريات الممرضة للحشرات", "Entomopathogenic fungi"],
      ["entomopathogenic-bacteria", "البكتيريا الممرضة للحشرات (مثل Bt)", "Entomopathogenic bacteria"],
      ["baculoviruses", "الفيروسات الباقولية وممرضات الحشرات", "Baculoviruses and insect pathogens"],
      ["bacteriophages", "العاثيات البكتيرية وتطبيقاتها الزراعية", "Agricultural bacteriophages"],
      ["microbial-biopesticides", "المبيدات الحيوية ومستحضراتها", "Microbial biopesticides"],
      ["conservation", "المكافحة الحيوية الحافظة", "Conservation biological control"],
      ["augmentative", "المكافحة الحيوية الإطلاقية والتكاثرية", "Augmentative biological control"],
      ["mass-rearing", "تربية وإنتاج الأعداء الحيوية معملياً", "Mass rearing of beneficial organisms"],
      ["ipm-compatibility", "توافق الأعداء الحيوية مع معاملات IPM", "Compatibility of biocontrol with IPM"],
      ["limitations-quality", "معايير الجودة ومحددات المكافحة الحيوية", "Quality control and limitations in biocontrol"]
    ]
  },
  {
    id: "soil", icon: "layers", status: "structure",
    ar: { name: "علوم التربة وصحة الأراضي الزراعية", summary: "دراسة الخصائص الفيزيائية والكيميائية والحيوية للتربة، حموضتها وملوحتها، الخصوبة، وإدارة الأسمدة العضوية." },
    en: { name: "Soil Science & Soil Health", summary: "Study of soil physical, chemical, and biological properties, pH, salinity, fertility, and organic matter management." },
    kw: "soil science fertility salinity organic matter soil health علوم تربة خصوبة ملوحة حموضة مادة عضوية",
    subs: [
      ["physical-properties", "الخواص الفيزيائية للتربة", "Soil physical properties"],
      ["chemical-properties", "الخواص الكيميائية للتربة", "Soil chemical properties"],
      ["biology-microbiology", "أحياء وميكروبيولوجيا التربة", "Soil biology and microbiology"],
      ["texture-structure", "نسيج وبنية التربة", "Soil texture and structure"],
      ["ph-salinity", "تفاعلات الحموضة (pH) والملوحة (EC)", "Soil pH and salinity management"],
      ["organic-matter", "إدارة المادة العضوية في التربة", "Soil organic matter management"],
      ["fertility", "خصوبة التربة وتقييم المغذيات", "Soil fertility assessment"],
      ["sampling-testing", "أخذ عينات التربة والتحليل المعملي", "Soil sampling and laboratory testing"],
      ["amendments", "محسّنات ومصلحات التربة", "Soil amendments"],
      ["degradation-conservation", "مقاومة تدهور التربة وصيانتها", "Soil degradation and conservation"],
      ["compost-inputs", "الكمبوست والمدخلات العضوية", "Compost and organic soil inputs"]
    ]
  },
  {
    id: "irrigation", icon: "drop", status: "structure",
    ar: { name: "الري وإدارة المياه الزراعية", summary: "أنظمة الري الحديثة (التنقيط والرش)، جدول الري، كفاءة الاستخدام، جودة المياه، وإدارة الملوحة والصرف." },
    en: { name: "Irrigation & Water Management", summary: "Modern irrigation systems (drip, sprinkler), scheduling, water-use efficiency, water quality, and drainage." },
    kw: "irrigation drip sprinkler water management ري تنقيط رش إدارة مياه كفاءة الصرف",
    subs: [
      ["irrigation-methods", "أنظمة وطرق الري المختلفة", "Irrigation methods and systems"],
      ["drip-irrigation", "أنظمة الري بالتنقيط", "Drip irrigation systems"],
      ["sprinkler-irrigation", "أنظمة الري بالرش", "Sprinkler irrigation systems"],
      ["scheduling", "جدولة واحتياجات الري للمحاصيل", "Crop irrigation scheduling"],
      ["water-quality", "تقييم جودة المياه للري الزراعي", "Agricultural water quality assessment"],
      ["use-efficiency", "رفع كفاءة استخدام المياه", "Water-use efficiency (WUE)"],
      ["drainage", "الصرف الزراعي وإدارة المياه الأرضية", "Agricultural drainage and water table management"],
      ["salinity-management", "إدارة ملوحة مياه الري والتربة", "Salinity management in irrigation"],
      ["fertigation", "التسميد مع مياه الري (التسميد الحقلي)", "Fertigation principles and practices"],
      ["water-conservation", "تقنيات ترشيد استهلاك المياه", "Water conservation technologies"]
    ]
  },
  {
    id: "nutrition", icon: "sprout", status: "structure",
    ar: { name: "تغذية النبات والتسميد المعدني والعضوي", summary: "العناصر الغذائية الكبرى والصغرى، أعراض النقص والسمية، حسابات الأسمدة، التفاعلات والتسميد المدار." },
    en: { name: "Plant Nutrition & Fertilization", summary: "Macronutrients and micronutrients, deficiency/toxicity symptoms, fertilizer calculations, and nutrient management." },
    kw: "plant nutrition fertilizers macronutrients micronutrients deficiency تغذية نبات أسمدة عناصر كبرى صغرى نقص",
    subs: [
      ["essential-nutrients", "العناصر الغذائية الضرورية للنبات", "Essential plant nutrients"],
      ["macro-micro", "العناصر الكبرى والصغرى والنادرة", "Macronutrients and micronutrients"],
      ["deficiency-toxicity", "أعراض نقص وسُمية العناصر الغذائية", "Nutrient deficiency and toxicity symptoms"],
      ["fertilizer-types", "أنواع الأسمدة التجارية والمحلية", "Commercial fertilizer types"],
      ["fertilizer-calculations", "حسابات المقررات السمادية والتركيزات", "Fertilizer calculations and formulations"],
      ["fertigation", "تطبيق التسميد عبر شبكات الري", "Fertigation management"],
      ["nutrient-interactions", "التفاعلات والتضاد والتآزر بين العناصر", "Nutrient interactions and antagonism"],
      ["use-efficiency", "كفاءة الاستفادة السمادية (FUE)", "Fertilizer-use efficiency (FUE)"],
      ["management-plans", "خطط وبرامج التسميد المتكاملة", "Integrated nutrient management plans"],
      ["interpreting-analyses", "تفسير تحليلات الأنسجة النباتية والتربة", "Interpreting plant tissue and soil analyses"]
    ]
  },
  {
    id: "hydroponics", icon: "waves", status: "structure",
    ar: { name: "الزراعة المائية والأنظمة بدون تربة (Hydroponics)", summary: "أنظمة الزراعة بدون تربة (NFT, DWC، الأوساط الصلبة)، تحضير المحاليل المغذية، التحكم في pH وEC وتهوية الجذور." },
    en: { name: "Hydroponics & Soilless Culture", summary: "Soilless systems (NFT, DWC, substrates), nutrient solution formulation, pH and EC control, and root aeration." },
    kw: "hydroponics soilless nft dwc nutrient solution ec ph زراعة مائية محلول مغذي بدون تربة",
    subs: [
      ["hydroponic-systems", "تصميم وتشغيل أنظمة الزراعة المائية", "Design and operation of hydroponic systems"],
      ["nft", "تقنية الغشاء المغذّي (NFT)", "Nutrient Film Technique (NFT)"],
      ["dwc", "أنظمة المياه العميقة وطوافة الجذور (DWC)", "Deep Water Culture (DWC)"],
      ["substrate-systems", "أنظمة الزراعة في الأوساط الصلبة", "Substrate-based soilless systems"],
      ["growing-media", "وسائط الزراعة والبيئات المختلفة", "Soilless growing media and substrates"],
      ["solution-preparation", "تركيب وتحضير المحاليل المغذية المركزة", "Nutrient solution preparation and formulation"],
      ["ph-ec", "التحكم في التوصيل الكهربائي والأس الهيدروجيني", "pH and electrical conductivity (EC) control"],
      ["water-quality", "إدارة ونقاوة مياه الزراعة المائية", "Water quality management in hydroponics"],
      ["root-zone", "إدارة حرارة وأكسجين منطقة الجذور", "Root-zone temperature and oxygen management"],
      ["irrigation-fertigation", "إدارة الري والتحكم الآلي في المحلول", "Automated irrigation and fertigation control"],
      ["greenhouse-environment", "التحكم البيئي داخل البيوت المحمية المائية", "Greenhouse microclimate management"],
      ["sanitation", "برامج التعقيم والنظافة للأنظمة", "System sanitation and hygiene protocols"],
      ["troubleshooting", "استكشاف أخطاء واختلالات المحاليل", "Troubleshooting hydroponic disorders"],
      ["resource-efficiency", "كفاءة واستدامة استهلاك الموارد المائية", "Resource efficiency and sustainability in soilless systems"]
    ]
  },
  {
    id: "seeds", icon: "seed", status: "structure",
    ar: { name: "البذور، علم الوراثة، والتربية النباتية", summary: "بيولوجيا البذور والإنبات، الوراثة النباتية، برامج تربية المحاصيل، الأصناف الهجينة، والتقانة الحيوية." },
    en: { name: "Seeds, Genetics & Plant Breeding", summary: "Seed biology and germination, plant genetics, crop breeding programs, hybrid varieties, and biotechnology." },
    kw: "seeds germination genetics plant breeding hybrids biotechnology بذور إنبات وراثة تربية نبات هجين تقانة حيوية",
    subs: [
      ["seed-biology", "بيولوجيا وتطور البذور", "Seed biology and development"],
      ["germination", "فسيولوجيا واختبارات الإنبات", "Seed germination physiology and testing"],
      ["seed-quality", "معايير واختبارات جودة التقاوي", "Seed quality assurance and testing"],
      ["genetics", "مبادئ الوراثة النباتية", "Plant genetics principles"],
      ["breeding", "طلارق وأساليب التربية النباتية", "Plant breeding methods"],
      ["hybrid-varieties", "إنتاج وتربية الأصناف الهجينة", "Hybrid variety production and breeding"],
      ["variety-selection", "تقييم واختيار الأصناف الملائمة", "Variety evaluation and selection"],
      ["genetic-resistance", "تربية النبات للمقاومة الوراثية للآفات", "Breeding for genetic pest and disease resistance"],
      ["biotechnology", "التقانات الحيوية الحديثة في الزراعة", "Agricultural biotechnology and applications"]
    ]
  },
  {
    id: "microbiology", icon: "flask", status: "structure",
    ar: { name: "الميكروبيولوجيا والأحياء الدقيقة الزراعية", summary: "دور الأحياء الدقيقة النافعة والممرضة، تفاعلات الريزوسفير، الأسمدة الحيوية والمبيدات الميكروبية." },
    en: { name: "Agricultural Microbiology", summary: "Role of beneficial and pathogenic microbes, rhizosphere interactions, biofertilizers, and microbial pesticides." },
    kw: "agricultural microbiology rhizosphere biofertilizers biocontrol ميكروبيولوجيا زراعية ريزوسفير أسمدة حيوية ميكروبات",
    subs: [
      ["beneficial-microbes", "الأحياء الدقيقة النافعة في البيئة الزراعية", "Beneficial soil and plant microorganisms"],
      ["growth-promoting", "البكتيريا المحفزة لنمو النبات (PGPR)", "Plant Growth-Promoting Rhizobacteria (PGPR)"],
      ["rhizosphere", "تفاعلات منطقة الريزوسفير والجذور", "Rhizosphere ecology and interactions"],
      ["plant-pathogens", "الكائنات الدقيقة الممرضة للنبات", "Plant pathogenic microorganisms"],
      ["biofertilizers", "تكنولوجيا الأسمدة واللقاحات الحيوية", "Biofertilizers and microbial inoculants"],
      ["biopesticides", "المستحضرات والمبيدات الميكروبية", "Microbial biopesticides and formulations"],
      ["microbial-ecology", "علم بيئة المجتمعات الميكروبية", "Microbial ecology and diversity"],
      ["bacteriophages", "تطبيقات العاثيات في مكافحة أمراض النبات", "Bacteriophages in plant disease control"],
      ["research-methods", "مناهج وتقنيات البحث الميكروبيولوجي", "Microbiological research methods and limitations"]
    ]
  },
  {
    id: "greenhouses", icon: "greenhouse", status: "structure",
    ar: { name: "الصوب الزراعية والزراعة المحمية", summary: "تصميم الهياكل والمحميات، التحكم بالحرارة والرطوبة والتهوية، الإضاءة الصناعية، والتنظيم الإنتاجي." },
    en: { name: "Greenhouses & Protected Cultivation", summary: "Greenhouse structures and design, climate control (temperature, humidity, ventilation), lighting, and planning." },
    kw: "greenhouses protected cultivation microclimate ventilation صوابع زراعة محمية تحكم بيئي تهوية",
    subs: [
      ["structures", "هياكل وتصميم البيوت المحمية", "Greenhouse structures and engineering"],
      ["temperature-humidity", "إدارة الحرارة والرطوبة النسبية", "Temperature and relative humidity management"],
      ["ventilation", "أنظمة التهوية الطبيعية والميكانيكية", "Greenhouse ventilation systems"],
      ["light-management", "إدارة الإضاءة والتحكم بالفترات الضوئية", "Light management and photoperiod control"],
      ["crop-monitoring", "الرصد والمتابعة الدورية للمحاصيل المحمية", "Protected crop monitoring"],
      ["protected-ipm", "الإدارة المتكاملة للآفات داخل الصوب", "IPM in protected cultivation"],
      ["fertigation-systems", "أنظمة التسميد والري الآلي المعززة", "Advanced fertigation systems for greenhouses"],
      ["sanitation", "إجراءات التطهير والنظافة الحيوية", "Greenhouse sanitation and hygiene"],
      ["production-planning", "التخطيط الاقتصادي والإنتاجي للموسم", "Protected crop production planning"]
    ]
  },
  {
    id: "postharvest", icon: "box", status: "structure",
    ar: { name: "الجودة، سلامة الغذاء، وما بعد الحصاد", summary: "تقييم نضج الثمار، التدريج والفرز، تقليل الفقد والتلف، التبريد والتخزين، وتطبيقات الممارسات الزراعية الجيدة (GAP)." },
    en: { name: "Food Safety, Quality & Post-Harvest", summary: "Maturity indices, grading and sorting, loss reduction, storage, transport, traceability, and GAP." },
    kw: "postharvest food safety quality storage gap ما بعد الحصاد سلامة الغذاء جودة تخزين ممارسات جيدة",
    subs: [
      ["product-quality", "معايير جودة الحاصلات الزراعية", "Agricultural product quality standards"],
      ["harvest-maturity", "علامات ومقاييس نضج الحصاد", "Harvest maturity indices"],
      ["grading-sorting", "فرز وتدريج وتعبئة المنتجات", "Grading, sorting, and packaging"],
      ["postharvest-losses", "أساليب تقليل الفقد والتلف بعد الحصاد", "Post-harvest loss reduction strategies"],
      ["storage-transport", "التبريد، التخزين البارد، والنقل المبرد", "Cold storage, refrigeration, and transport"],
      ["traceability", "أنظمة تتبع المنتجات الزراعية", "Agricultural product traceability"],
      ["gap", "الممارسات الزراعية الجيدة (GAP)", "Good Agricultural Practices (GAP)"],
      ["food-safety", "مبادئ واشتراطات سلامة الغذاء", "Food safety principles and fundamentals"],
      ["residue-awareness", "الوعي ببقايا المبيدات والحدود الآمنة", "Pesticide residue awareness and MRLs"],
      ["qa-qc", "أنظمة ضبط وضمان الجودة (QA/QC)", "Quality Assurance and Quality Control (QA/QC)"]
    ]
  },
  {
    id: "sustainability", icon: "globe", status: "structure",
    ar: { name: "الاستدامة الزراعية والمناخ", summary: "الزراعة الذكية مناخياً، صيانة الموارد الطبيعية، التنوع البيولوجي، حماية الملقحات، وتطبيقات الإيكولوجيا الزراعية." },
    en: { name: "Sustainable Agriculture & Climate", summary: "Climate-smart agriculture, natural resource conservation, biodiversity, pollinator protection, and agroecology." },
    kw: "sustainable agriculture climate smart biodiversity pollinators agroecology استدامة مناخ تنوع بيولوجي ملقحات",
    subs: [
      ["climate-smart", "ممارسات الزراعة الذكية مناخياً", "Climate-smart agricultural practices"],
      ["sustainable-production", "أنظمة الإنتاج الزراعي المستدام", "Sustainable agricultural production systems"],
      ["soil-water-conservation", "صيانة وإدارة الموارد المائية والتربة", "Soil and water resource conservation"],
      ["biodiversity", "الحفاظ على التنوع البيولوجي الزراعي", "Agricultural biodiversity conservation"],
      ["pollinators", "حماية وإدارة الحشرات الملقحة (النحل)", "Pollinator protection and management"],
      ["agroecology", "مبادئ وتطبيقات الإيكولوجيا الزراعية", "Agroecology principles and applications"],
      ["resource-efficiency", "كفاءة استخدام الموارد الطبيعية", "Natural resource-use efficiency"],
      ["climate-risks", "إدارة المخاطر المناخية في الزراعة", "Agricultural climate risk management"],
      ["integrated-farming", "أنظمة المزارع المتكاملة والمستدامة", "Integrated farming systems"]
    ]
  }
];

globalThis.PLEX_CATEGORIES = CATEGORIES;
globalThis.PLEX_ICONS = ICONS;
