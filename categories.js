"use strict";
/* ============================================================
   Plantolex — encyclopedia directory (15 categories)
   File: content/categories.js

   Format of one category:
   {
     id: "slug-used-in-URLs-and-search",
     icon: "key from ICONS below",
     status: "structure"  (directory complete; article texts arrive later),
     ar: { name, summary },
     en: { name, summary },
     kw: "extra Arabic + English search words, space separated",
     subs: [ ["sub-id", "Arabic name", "English name"], ... ]
   }

   To add a category later: copy a block, keep the quotes and commas.
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
    ar: { name: "علوم المحاصيل والإنتاج الزراعي", summary: "إنتاج المحاصيل من الزرع إلى الحصاد: الحقلية والخضار والبساتين وأنظمة الدورات." },
    en: { name: "Crop Science & Production", summary: "Crop production from planting to harvest: field crops, vegetables, orchards, and cropping systems." },
    kw: "crop crops production wheat maize rice tomato محاصيل إنتاج محصول حقلية خضار بساتين",
    subs: [
      ["field-crops", "المحاصيل الحقلية", "Field crops"],
      ["vegetables", "الخضروات", "Vegetables"],
      ["fruits-orchards", "الفواكه والبساتين", "Fruits and orchards"],
      ["medicinal-aromatic", "النباتات الطبية والعطرية", "Medicinal and aromatic plants"],
      ["ornamental", "النباتات الزخرفية", "Ornamental plants"],
      ["forage-fodder", "محاصيل العلف والمرعى", "Forage and fodder crops"],
      ["greenhouse-crops", "محاصيل الصوب", "Greenhouse crops"],
      ["growth-stages", "مراحل نمو النبات", "Crop growth stages"],
      ["planting-harvesting", "الزرع والحصاد", "Planting and harvesting"],
      ["rotation-systems", "الدورات الزراعية وأنظمة المحاصيل", "Crop rotation and cropping systems"],
      ["seed-selection", "اختيار البذور وجودتها", "Seed selection and seed quality"],
      ["postharvest-storage", "ما بعد الحصاد والتخزين", "Post-harvest handling and storage"]
    ]
  },
  {
    id: "plant-health", icon: "shield", status: "structure",
    ar: { name: "صحة النبات", summary: "فهم الأعراض وأسبابها، والتمييز بين الأسباب الحيوية وغير الحيوية، ومناهج المراقبة والتشخيص." },
    en: { name: "Plant Health", summary: "Understanding symptoms and their causes, separating biotic from abiotic factors, and monitoring and diagnostic methods." },
    kw: "plant health symptoms diagnosis أعراض صحة نبات تشخيص إجهاد تغذية",
    subs: [
      ["anatomy-physiology", "تشريح النبات ووظائف أعضائه", "Plant anatomy and physiology"],
      ["nutrition-disorders", "اضطرابات التغذية النباتية", "Plant nutrition disorders"],
      ["biotic-abiotic", "الاضطرابات الحيوية وغير الحيوية", "Biotic and abiotic disorders"],
      ["symptom-identification", "التعرّف على الأعراض", "Symptom identification"],
      ["diagnostic-methods", "مناهج التشخيص", "Diagnostic methods"],
      ["disease-prevention", "الوقاية من أمراض النبات", "Plant disease prevention"],
      ["disease-management", "إدارة الأمراض", "Disease management"],
      ["pest-damage", "الأضرار الناتجة عن الآفات", "Pest-related plant damage"],
      ["environmental-stress", "الإجهاد البيئي", "Environmental stress"],
      ["health-monitoring", "مراقبة صحة النبات", "Plant-health monitoring"]
    ]
  },
  {
    id: "pests", icon: "bug", status: "structure",
    ar: { name: "الآفات الحشرية والآفات الزراعية الأخرى", summary: "تعريف الحشرات ودورة حياتها، والعثّات والديدان والرخويات، والرصد والمفاهيم الاقتصادية." },
    en: { name: "Agricultural Pests", summary: "Insect identification and life cycles, mites, nematodes and mollusks, monitoring, and economic concepts." },
    kw: "pest pests insect mites nematodes آفة حشرات عثّات ديدان رخويات مبيد",
    subs: [
      ["insect-identification", "التعرّف على الحشرات", "Insect identification"],
      ["life-cycles", "دورات حياة الآفات وبيولوجيتها", "Pest life cycles and biology"],
      ["mites", "العثّات", "Mites"],
      ["nematodes", "الديدان الخيطية", "Nematodes"],
      ["mollusks", "الرخويات والآفات الزراعية الأخرى", "Mollusks and other agricultural pests"],
      ["monitoring-scouting", "الرصد والتقصي", "Pest monitoring and scouting"],
      ["economic-injury", "مفاهيم الأثر الاقتصادي", "Economic injury concepts"],
      ["pest-ecology", "بيئة الآفات", "Pest ecology"],
      ["pest-resistance", "مقاومة الآفات", "Pest resistance"],
      ["crop-pest-guides", "أدلة الآفات حسب المحصول", "Crop-specific pest guides"]
    ]
  },
  {
    id: "diseases", icon: "microbe", status: "structure",
    ar: { name: "أمراض النبات والممرضات", summary: "الفطرية والبكتيرية والفيروسية والبلازميدات، والأمراض المنقولة بالتربة والبذور ومبادئ انتشارها." },
    en: { name: "Plant Diseases & Pathogens", summary: "Fungal, bacterial and viral diseases, phytoplasmas, soil-borne and seed-borne diseases, and epidemiology." },
    kw: "disease fungi bacteria virus phytoplasma مرض أمراض فطر بكتيريا فيروس",
    subs: [
      ["fungal-diseases", "الأمراض الفطرية", "Fungal diseases"],
      ["bacterial-diseases", "الأمراض البكتيرية", "Bacterial diseases"],
      ["viral-diseases", "الأمراض الفيروسية", "Viral diseases"],
      ["phytoplasmas", "الفيتوبلازما وممرضات أخرى", "Phytoplasmas and other pathogens"],
      ["soil-borne", "الأمراض المنقولة بالتربة", "Soil-borne diseases"],
      ["seed-borne", "الأمراض المنقولة بالبذور", "Seed-borne diseases"],
      ["epidemiology", "علم انتشار الأمراض", "Disease epidemiology"],
      ["diagnostic-principles", "مبادئ التشخيص", "Diagnostic principles"],
      ["prevention-management", "الوقاية وإدارة الأمراض", "Disease prevention and management"]
    ]
  },
  {
    id: "ipm", icon: "target", status: "structure",
    ar: { name: "الإدارة المتكاملة للآفات (IPM)", summary: "الرصد والوقاية والأساليب المتكاملة، وعتبات التدخل ومقاومة المبيدات وسلامة الاستخدام." },
    en: { name: "Integrated Pest Management (IPM)", summary: "Monitoring, prevention and integrated tactics, action thresholds, resistance management, and safe use." },
    kw: "ipm integrated pest management مكافحة متكاملة رصد عتبات مقاومة مبيد",
    subs: [
      ["ipm-principles", "مبادئ IPM", "IPM principles"],
      ["pest-monitoring", "رصد الآفات", "Pest monitoring"],
      ["identification-diagnosis", "التعرّف والتشخيص", "Identification and diagnosis"],
      ["cultural-practices", "الوقاية والممارسات الثقافية", "Prevention and cultural practices"],
      ["mechanical-physical", "المكافحة الميكانيكية والفيزيائية", "Mechanical and physical control"],
      ["biological-control", "المكافحة الحيوية", "Biological control"],
      ["chemical-control", "المكافحة الكيميائية المسؤولة", "Responsible chemical control"],
      ["action-thresholds", "عتبات التدخل", "Action thresholds"],
      ["resistance-management", "إدارة المقاومة", "Resistance management"],
      ["mode-of-action", "مجموعات آليات أثر المبيدات", "Pesticide mode-of-action groups"],
      ["safety-label", "سلامة المبيدات والالتزام بالملصق", "Pesticide safety and label compliance"],
      ["crop-plans", "خطط الإدارة المتكاملة حسب المحصول", "Integrated crop-specific management plans"]
    ]
  },
  {
    id: "biocontrol", icon: "predator", status: "structure",
    ar: { name: "المكافحة الحيوية", summary: "المفترسات والطفيليات والفطريات والبكتيريا الممرضة، وأنواع الإكثار والحدود والجودة." },
    en: { name: "Biological Control", summary: "Predators, parasitoids, entomopathogenic fungi and bacteria, augmentation approaches, limits and quality." },
    kw: "biocontrol biological control natural enemies مكافحة حيوية مفترسات طفيليات فطر ممرض",
    subs: [
      ["parasitoids", "أشباه الطفيليات (Parasitoids)", "Parasitoids"],
      ["predators", "الحشرات والعثّات المفترسة", "Predatory insects and mites"],
      ["entomopathogenic-fungi", "الفطريات الممرضة للحشرات", "Entomopathogenic fungi"],
      ["entomopathogenic-bacteria", "البكتيريا الممرضة للحشرات", "Entomopathogenic bacteria"],
      ["baculoviruses", "الباكولوفيروسات وممرضات الحشرات الأخرى", "Baculoviruses and other insect pathogens"],
      ["bacteriophages", "العاثيات البكتيرية والبحث الزراعي", "Bacteriophages and agricultural research"],
      ["microbial-biopesticides", "المبيدات الحيوية الدقيقة", "Microbial biopesticides"],
      ["conservation", "المكافحة الحيوية الحافظة", "Conservation biological control"],
      ["augmentative", "المكافحة الحيوية التكاثرية", "Augmentative biological control"],
      ["mass-rearing", "إكثار الحشرات النافعة وإطلاقها", "Mass rearing and release concepts"],
      ["ipm-compatibility", "التوافق مع أساليب IPM الأخرى", "Compatibility with other IPM methods"],
      ["limitations-quality", "القيود واعتبارات الجودة", "Limitations and quality considerations"]
    ]
  },
  {
    id: "soil", icon: "layers", status: "structure",
    ar: { name: "علم التربة وصحة التربة", summary: "الخصائص الفيزيائية والكيميائية والحيوية، والحموضة والملوحة والعناصر والسماد العضوي." },
    en: { name: "Soil Science & Soil Health", summary: "Physical, chemical and biological properties; pH and salinity; fertility, testing, and organic inputs." },
    kw: "soil ph salinity organic matter تربة حموضة ملوحة عضوية خصوبة تحليل",
    subs: [
      ["physical-properties", "الخصائص الفيزيائية للتربة", "Soil physical properties"],
      ["chemical-properties", "الخصائص الكيميائية للتربة", "Soil chemical properties"],
      ["biology-microbiology", "أحياء التربة والنشاط الميكروبي", "Soil biology and microbiology"],
      ["texture-structure", "نسيج التربة وبنية التربة", "Soil texture and structure"],
      ["ph-salinity", "حموضة التربة والملوحة", "Soil pH and salinity"],
      ["organic-matter", "المادة العضوية", "Organic matter"],
      ["fertility", "خصوبة التربة", "Soil fertility"],
      ["sampling-testing", "أخذ العينات واختبار التربة", "Soil sampling and testing"],
      ["amendments", "محسّنات التربة", "Soil amendments"],
      ["degradation-conservation", "تدهور التربة والمحافظة عليها", "Soil degradation and conservation"],
      ["compost-inputs", "السماد العضوي والمدخلات العضوية", "Compost and organic inputs"]
    ]
  },
  {
    id: "irrigation", icon: "drop", status: "structure",
    ar: { name: "الري وإدارة المياه", summary: "طرق الري والجدولة وكفاءة الاستخدام وجودة المياه والتصريف وإدارة الملوحة." },
    en: { name: "Irrigation & Water Management", summary: "Irrigation methods, scheduling, water-use efficiency and quality, drainage, and salinity management." },
    kw: "irrigation drip sprinkler water ري تنقيط رش جدولة مياه كفاءة",
    subs: [
      ["irrigation-methods", "طرق الري", "Irrigation methods"],
      ["drip-irrigation", "الري بالتنقيط", "Drip irrigation"],
      ["sprinkler-irrigation", "الري بالرش", "Sprinkler irrigation"],
      ["scheduling", "جدولة الري", "Irrigation scheduling"],
      ["water-quality", "جودة المياه", "Water quality"],
      ["use-efficiency", "كفاءة استخدام المياه", "Water-use efficiency"],
      ["drainage", "التصريف", "Drainage"],
      ["salinity-management", "إدارة الملوحة", "Salinity management"],
      ["fertigation", "التسميد مع الري", "Fertigation"],
      ["water-conservation", "ترشيد استهلاك المياه", "Water conservation"]
    ]
  },
  {
    id: "nutrition", icon: "sprout", status: "structure",
    ar: { name: "تغذية النبات والتسميد", summary: "العناصر الأساسية ونقصها، وأنواع الأسمدة وحساباتها، والتفاعل بين العناصر وكفاءة الاستخدام." },
    en: { name: "Plant Nutrition & Fertilizers", summary: "Essential nutrients and deficiencies, fertilizer types and calculations, interactions, and use efficiency." },
    kw: "nutrition fertilizer npk deficiency micronutrient تغذية تسميد سماد عناصر نقص",
    subs: [
      ["essential-nutrients", "العناصر الغذائية الأساسية", "Essential plant nutrients"],
      ["macro-micro", "العناصر الكبرى والصغرى", "Macronutrients and micronutrients"],
      ["deficiency-toxicity", "نقص العناصر وسميتها", "Nutrient deficiency and toxicity"],
      ["fertilizer-types", "أنواع الأسمدة", "Fertilizer types"],
      ["fertilizer-calculations", "حسابات الأسمدة", "Fertilizer calculations"],
      ["fertigation", "التسميد مع الري", "Fertigation"],
      ["nutrient-interactions", "تفاعلات العناصر الغذائية", "Nutrient interactions"],
      ["use-efficiency", "كفاءة استخدام الأسمدة", "Fertilizer-use efficiency"],
      ["management-plans", "خطط إدارة التغذية", "Nutrient management plans"],
      ["interpreting-analyses", "تفسير تحليلات التربة والماء", "Interpreting soil and water analyses"]
    ]
  },
  {
    id: "hydroponics", icon: "waves", status: "structure",
    ar: { name: "الزراعة المائية والزراعة دون تربة", summary: "الأنظمة والمحلول المغذي وpH وEC وجودة الماء وأكسدة الجذور والتعقيم واستكشاف الأخطاء." },
    en: { name: "Hydroponics & Soilless Agriculture", summary: "Systems and nutrient solution, pH and EC, water quality, root-zone oxygen, sanitation, troubleshooting." },
    kw: "hydroponics nutrient solution nft dwc ec زراعة مائية محلول مغذي هيدروبونيك",
    subs: [
      ["hydroponic-systems", "أنظمة الزراعة المائية", "Hydroponic systems"],
      ["nft", "تقنية الغشاء المغذّي (NFT)", "Nutrient film technique (NFT)"],
      ["dwc", "الزراعة المائية العميقة (DWC)", "Deep water culture (DWC)"],
      ["substrate-systems", "الأنظمة المعتمدة على الأوساط الزراعية", "Substrate-based systems"],
      ["growing-media", "وسائط النمو", "Growing media"],
      ["solution-preparation", "تحضير المحلول المغذي", "Nutrient solution preparation"],
      ["ph-ec", "الأس الهيدروجيني والتوصيل الكهربائي (EC)", "pH and electrical conductivity (EC)"],
      ["water-quality", "جودة المياه", "Water quality"],
      ["root-zone", "الأكسجين ودرجة حرارة منطقة الجذور", "Root-zone oxygen and temperature"],
      ["irrigation-fertigation", "الري والتسميد في الأنظمة المائية", "Irrigation and fertigation"],
      ["greenhouse-environment", "بيئة الصوبة", "Greenhouse environment"],
      ["sanitation", "التعقيم والنظافة", "System sanitation"],
      ["troubleshooting", "استكشاف الأخطاء وإصلاحها", "Troubleshooting"],
      ["resource-efficiency", "كفاءة الموارد والاستدامة", "Resource efficiency and sustainability"]
    ]
  },
  {
    id: "seeds", icon: "seed", status: "structure",
    ar: { name: "البذور والوراثة والتحسين النباتي", summary: "بيولوجيا البذور والإنبات وجودتها، والوراثة والتحسين والأصناف الهجينة والمقاومة الوراثية." },
    en: { name: "Seeds, Genetics & Plant Breeding", summary: "Seed biology, germination and quality; genetics, breeding, hybrids, and genetic resistance." },
    kw: "seed germination genetics breeding hybrid بذور إنبات وراثة تحسين هجين",
    subs: [
      ["seed-biology", "بيولوجيا البذور", "Seed biology"],
      ["germination", "الإنبات", "Germination"],
      ["seed-quality", "جودة البذور", "Seed quality"],
      ["genetics", "الوراثة النباتية", "Plant genetics"],
      ["breeding", "التحسين النباتي", "Plant breeding"],
      ["hybrid-varieties", "الأصناف الهجينة", "Hybrid varieties"],
      ["variety-selection", "اختيار الصنف", "Variety selection"],
      ["genetic-resistance", "المقاومة الوراثية", "Genetic resistance"],
      ["biotechnology", "التقنية الحيوية والبحث ذي الصلة", "Biotechnology and relevant research"]
    ]
  },
  {
    id: "microbiology", icon: "flask", status: "structure",
    ar: { name: "علم الأحياء الدقيقة الزراعي", summary: "الكائنات الدقيقة المفيدة والممرضة، والأسمدة الحيوية والمبيدات الحيوية ومناهج البحث وحدوده." },
    en: { name: "Agricultural Microbiology", summary: "Beneficial and pathogenic microorganisms, biofertilizers and biopesticides, research methods and limits." },
    kw: "microbiology bacteria fungi rhizosphere biofertilizer ميكروبيولوجيا بكتيريا فطر منطقة جذور سماد حيوي",
    subs: [
      ["beneficial-microbes", "الكائنات الدقيقة النافعة في التربة", "Beneficial soil microorganisms"],
      ["growth-promoting", "الميكروبات المحفّزة لنمو النبات", "Plant growth-promoting microorganisms"],
      ["rhizosphere", "تفاعلات منطقة الجذور", "Rhizosphere interactions"],
      ["plant-pathogens", "ممرّضات النبات", "Plant pathogens"],
      ["biofertilizers", "الأسمدة الحيوية", "Microbial biofertilizers"],
      ["biopesticides", "المبيدات الحيوية الدقيقة", "Microbial biopesticides"],
      ["microbial-ecology", "بيئة الميكروبات", "Microbial ecology"],
      ["bacteriophages", "العاثيات البكتيرية الزراعية", "Agricultural bacteriophages"],
      ["research-methods", "مناهج البحث وحدوده", "Research methods and limitations"]
    ]
  },
  {
    id: "greenhouses", icon: "greenhouse", status: "structure",
    ar: { name: "الصوب الزراعية والزراعة المحمية", summary: "الهياكل والحرارة والرطوبة والتهوية والإضاءة، ومراقبة المحاصيل والنظافة وتخطيط الإنتاج." },
    en: { name: "Greenhouses & Protected Agriculture", summary: "Structures, temperature and humidity, ventilation, light, crop monitoring, sanitation, planning." },
    kw: "greenhouse protected cultivation ventilation humidity صوبة محمية تهوية رطوبة إضاءة",
    subs: [
      ["structures", "هياكل الصوب", "Greenhouse structures"],
      ["temperature-humidity", "الحرارة والرطوبة", "Temperature and humidity"],
      ["ventilation", "التهوية", "Ventilation"],
      ["light-management", "إدارة الإضاءة", "Light management"],
      ["crop-monitoring", "مراقبة المحاصيل", "Crop monitoring"],
      ["protected-ipm", "إدارة الآفات في الزراعة المحمية", "Protected-crop IPM"],
      ["fertigation-systems", "أنظمة التسميد مع الري", "Fertigation systems"],
      ["sanitation", "نظافة الصوبة", "Greenhouse sanitation"],
      ["production-planning", "تخطيط الإنتاج", "Production planning"]
    ]
  },
  {
    id: "postharvest", icon: "box", status: "structure",
    ar: { name: "الجودة وسلامة الغذاء وما بعد الحصاد", summary: "جودة المنتج والنضج والتصنيف والتخزين والنقل والتتبع والممارسات الجيدة وسلامة الغذاء." },
    en: { name: "Food Safety, Quality & Post-Harvest", summary: "Product quality, maturity, grading, storage and transport, traceability, GAP and food safety." },
    kw: "postharvest food safety quality storage gap ما بعد الحصاد سلامة غذاء جودة تخزين",
    subs: [
      ["product-quality", "جودة المنتج الزراعي", "Agricultural product quality"],
      ["harvest-maturity", "نضج الحصاد", "Harvest maturity"],
      ["grading-sorting", "التصنيف والفرز", "Grading and sorting"],
      ["postharvest-losses", "الفقد بعد الحصاد", "Post-harvest losses"],
      ["storage-transport", "التخزين والنقل", "Storage and transport"],
      ["traceability", "التتبع", "Traceability"],
      ["gap", "الممارسات الزراعية الجيدة (GAP)", "Good Agricultural Practices (GAP)"],
      ["food-safety", "أساسيات سلامة الغذاء", "Food safety fundamentals"],
      ["residue-awareness", "الوعي ببقايا المبيدات", "Pesticide-residue awareness"],
      ["qa-qc", "أساسيات ضمان الجودة ومراقبتها", "Quality assurance and quality control fundamentals"]
    ]
  },
  {
    id: "sustainability", icon: "globe", status: "structure",
    ar: { name: "الاستدامة الزراعية والمناخ", summary: "الزراعة الذكية مناخياً وصون التربة والمياه والتنوع البيولوجي والملقّحات وكفاءة الموارد." },
    en: { name: "Sustainable Agriculture & Climate", summary: "Climate-smart agriculture, soil and water conservation, biodiversity, pollinators, resource efficiency." },
    kw: "sustainability climate biodiversity pollinators agroecology استدامة مناخ تنوع بيولوجي ملقحات إيكولوجيا",
    subs: [
      ["climate-smart", "الزراعة الذكية مناخياً", "Climate-smart agriculture"],
      ["sustainable-production", "الإنتاج المستدام", "Sustainable production"],
      ["soil-water-conservation", "صون التربة والمياه", "Soil and water conservation"],
      ["biodiversity", "التنوع البيولوجي", "Biodiversity"],
      ["pollinators", "الملقّحات", "Pollinators"],
      ["agroecology", "الإيكولوجيا الزراعية", "Agroecology"],
      ["resource-efficiency", "كفاءة استخدام الموارد", "Resource-use efficiency"],
      ["climate-risks", "المخاطر المناخية على الزراعة", "Agricultural climate risks"],
      ["integrated-farming", "الأنظمة المتكاملة للزراعة", "Integrated farming systems"]
    ]
  }
];

globalThis.PLEX_CATEGORIES = CATEGORIES;
globalThis.PLEX_ICONS = ICONS;
