"use strict";
/* ============================================================
   Plantolex — interface strings (Arabic + English)
   File: content/ui.js
   - Every key must exist in BOTH ar and en (checked by tests).
   - Values marked [html] may contain simple inline HTML (<em>, <b>).
   - To edit wording: change the value, keep the key and the quotes.
   ============================================================ */

const UI = {
  ar: {
    /* --- document --- */
    pageTitle: "بلانتولكس | موسوعة المعرفة الزراعية",
    docTitle: "موسوعة المعرفة الزراعية",

    /* --- header / navigation --- */
    skip: "انتقل إلى المحتوى",
    brandSub: "موسوعة المعرفة الزراعية",
    navHome: "الرئيسية",
    navEncyclopedia: "الموسوعة",
    navPreview: "حالة البناء",
    menu: "القائمة",
    closeMenu: "إغلاق القائمة",
    searchAria: "ابحث في الموسوعة",
    langBtn: "EN",
    langLabel: "التبديل إلى الإنجليزية",
    themeLight: "الوضع الفاتح",
    themeDark: "الوضع الداكن",

    /* --- hero --- */
    eyebrow: "موصّلة بالعربية والإنجليزية · تُبنى علنًا",
    heroTitle: "اكتشف المعرفة الزراعية. <em>وازرع بالعلم.</em>",
    heroLead: "بلانتولكس يربط العلم الزراعي بالممارسة الميدانية عبر موسوعة ثنائية اللغة، ومراجع موثوقة، ومسارات تعلّم، وأدوات عملية — مع وضوح دائم في مصدر المعلومة وحالتها.",
    searchPh: "ابحث عن محصول أو آفة أو تصنيف…",
    searchBtn: "بحث",
    tryLabel: "جرّب:",
    chipIPM: "IPM",
    chipHydro: "زراعة مائية",
    chipSoil: "التربة",
    heroNote: "نسخة قيد البناء: الدليل كامل، والمقالات تُضاف تباعًا خلال هذه النسخة. لا تستخدم الموقع بعد لاتخاذ قرار زراعي.",
    ctaExplore: "استكشف الموسوعة",
    ctaSecondary: "مكتبة الأبحاث والمراجع",

    /* --- search results --- */
    rTitle: "نتائج البحث",
    rClear: "مسح البحث",
    rCount: "عدد النتائج: ",
    rEmpty: "لا توجد نتائج مطابقة. جرّب مصطلحًا آخر بالعربية أو الإنجليزية أو مصطلحًا علميًا.",
    rAll: "الكل",
    rCat: "أقسام",
    rSub: "تصنيفات فرعية",
    typeCat: "قسم",
    typeSub: "تصنيف فرعي",
    rShow: "اعرض في الموسوعة",

    /* --- encyclopedia categories --- */
    catTag: "الموسوعة الزراعية",
    catTitle: "خمسة عشر قسمًا معرفيًا كاملًا",
    catS: "الهيكل الكامل للموسوعة متاح الآن: كل قسم يفتح قائمة تصنيفاته الفرعية كما ستظهر في النسخة النهائية.",
    catNote: "المقالات التفصيلية لكل تصنيف تُضاف خلال هذه النسخة نفسها؛ ما تراه اليوم هو الدليل الكامل وليس نصوصًا منشورة.",
    expand: "اعرض التصنيفات الفرعية",
    collapse: "أخفِ التصنيفات الفرعية",
    subsLabel: "التصنيفات الفرعية:",
    subCountWord: "تصنيفًا فرعيًا",
    stStructure: "الدليل مكتمل",
    lblCats: "قسمًا معرفيًا",
    lblSubs: "تصنيفًا فرعيًا",
    lblLangs: "لغتان (عربي/إنجليزي)",

    /* --- how it works --- */
    howTag: "كيف يعمل الموقع",
    howT: "من السؤال إلى معلومة تعرف مصدرها",
    howS: "المسار النهائي لبلانتولكس، مع بيان صريح لكل خطوة: ما هو متاح الآن، وما يصل خلال هذه النسخة.",
    howN1T: "تصفّح وبحث ثنائي اللغة",
    howN1B: "أقسام كاملة، وبحث بالعربية والإنجليزية مع تطبيع النص العربي وترتيب دقيق للنتائج.",
    howN2T: "مقالات ومراجع موثقة",
    howN2B: "صفحة مستقلة لكل مقال بمراجع أصلية وحالة تحرير واضحة — تصل خلال هذه النسخة.",
    howN3T: "أدوات ومجتمع",
    howN3B: "أدوات تعليمية عاملة ومساحة أسئلة نصية بمراجعة إشرافية — تصلان في نهاية هذه النسخة.",
    badgeNow: "متاح الآن",
    badgeBuild: "ضمن هذه النسخة",
    howNote: "لا يعرض الموقع أي زر وهمي: كل ما تراه متاح فعلًا، وكل ما لم يُبنَ بعد موسوم بوضوح ولا يُقدَّم كأنه جاهز.",

    /* --- trust principles --- */
    trustTag: "مبادئ الثقة",
    trustT: "أربع طبقات لا تختلط ببعضها",
    trustS: "كل معلومة في بلانتولكس تحمل وسمًا يوضّح مصدرها، حتى لا يختلط المرجع العلمي برأي المجتمع أو بالمساعدة الآلية.",
    t1T: "محتوى قائم على المراجع",
    t1P: "معلومة مرتبطة بمصدرها الأصلي وتاريخ تحديثها.",
    t2T: "خبرة المجتمع",
    t2P: "ردود المستخدمين تُعرض كخبرة ميدانية لا كتشخيص.",
    t3T: "مراجعة متخصص",
    t3P: "شارة لا تظهر إلا بعد مراجعة فعلية من متخصص موثّق.",
    t4T: "مساعدة آلية",
    t4P: "إرشاد يوضّح حدود اليقين، وليست تشخيصًا.",
    neverT: "ما لن تفعله بلانتولكس أبدًا",
    nev1: "عرض إجابة آلية على أنها تشخيص مؤكد.",
    nev2: "اقتراح مبيد أو جرعة دون أساس علمي ودون مراعاة التسجيل المحلي.",
    nev3: "إظهار شارة «راجعه متخصص» قبل حدوث المراجعة فعلًا.",
    nev4: "اختلاق معلومة عند نقصها، فنوضح النقص ونطلب تفاصيل إضافية.",

    /* --- build status --- */
    buildTag: "حالة البناء",
    buildT: "ما الذي يعمل الآن، وما الذي يليه",
    buildS: "سجل صريح ومحدَّث لحالة كل قسم. لا وعود بأرقام تواريخ، ولا ميزات مُقدَّمة كأنها جاهزة.",
    liveT: "متاح في هذه النسخة الآن",
    live1: "هيكل الأقسام الخمسة عشر مع تصنيفاتها الفرعية",
    live2: "واجهة عربية/إنجليزية كاملة مع RTL وLTR",
    live3: "بحث ثنائي اللغة مع ترتيب النتائج والتصفية",
    live4: "وضع فاتح وداكن، وتصميم متجاوب للهاتف",
    nextT: "يُبنى ضمن هذه النسخة (لاحقًا)",
    next1: "صفحات المقالات والمراجع",
    next2: "القاموس الزراعي ثنائي اللغة",
    next3: "مكتبة الأبحاث والمراجع",
    next4: "مركز التعلّم والمسارات",
    next5: "الأدوات العملية ودليل الأعراض",
    next6: "المجتمع الزراعي (أسئلة وردود وتعليقات)",
    next7: "صفحات السياسات والخصوصية والتواصل",
    buildNote: "تُحدَّث هذه القائمة بعد كل دفعة بناء داخل المستودع. حالة الرسمية للمشروع هي ما هو مكتوب هنا فقط.",

    /* --- footer --- */
    footAbout: "موسوعة زراعية ثنائية اللغة تضع المصادر أولًا، وتفصل بين المرجع العلمي وخبرة المجتمع ومراجعة المتخصص.",
    fExplore: "استكشف",
    fProject: "المشروع",
    fArriving: "ضمن هذه النسخة",
    fHome: "الرئيسية",
    fCats: "أقسام الموسوعة",
    fSearch: "البحث",
    fBuild: "حالة البناء",
    fGitHub: "المستودع على GitHub",
    sh1: "صفحات المقالات",
    sh2: "القاموس",
    sh3: "الأبحاث والمراجع",
    sh4: "مركز التعلّم",
    sh5: "الأدوات العملية",
    sh6: "المجتمع الزراعي",
    sh7: "السياسات والتواصل",
    footTag: "المعرفة تنمو بالمصادر والمشاركة المسؤولة.",
    top: "للأعلى ↑",

    /* --- 404 --- */
    nfT: "الصفحة غير موجودة",
    nfP: "ربما تغيّر الرابط أو صار جزءًا من مرحلة لاحقة من البناء. يمكنك العودة إلى الرئيسية أو استخدام البحث.",
    nfBtn: "العودة إلى الرئيسية"
  },

  en: {
    /* --- document --- */
    pageTitle: "Plantolex | The Agricultural Knowledge Encyclopedia",
    docTitle: "The Agricultural Knowledge Encyclopedia",

    /* --- header / navigation --- */
    skip: "Skip to content",
    brandSub: "The Agricultural Knowledge Encyclopedia",
    navHome: "Home",
    navEncyclopedia: "Encyclopedia",
    navPreview: "Build status",
    menu: "Menu",
    closeMenu: "Close menu",
    searchAria: "Search the encyclopedia",
    langBtn: "عربي",
    langLabel: "Switch to Arabic",
    themeLight: "Light mode",
    themeDark: "Dark mode",

    /* --- hero --- */
    eyebrow: "Bilingual Arabic–English · built in the open",
    heroTitle: "Explore Agricultural Knowledge. <em>Grow with Science.</em>",
    heroLead: "Plantolex connects agricultural science with field practice through a bilingual encyclopedia, trustworthy references, learning paths, and practical tools — with a clear statement of where every piece of information comes from.",
    searchPh: "Search a crop, pest, or category…",
    searchBtn: "Search",
    tryLabel: "Try:",
    chipIPM: "IPM",
    chipHydro: "Hydroponics",
    chipSoil: "Soil",
    heroNote: "Build in progress: the full directory is live, and articles are added throughout this build. Do not use the site yet for agronomic decisions.",
    ctaExplore: "Explore the encyclopedia",
    ctaSecondary: "Research & references library",

    /* --- search results --- */
    rTitle: "Search results",
    rClear: "Clear search",
    rCount: "Results: ",
    rEmpty: "No matching results. Try another term in Arabic or English, or a scientific name.",
    rAll: "All",
    rCat: "Categories",
    rSub: "Subcategories",
    typeCat: "Category",
    typeSub: "Subcategory",
    rShow: "Show in the encyclopedia",

    /* --- encyclopedia categories --- */
    catTag: "The agricultural encyclopedia",
    catTitle: "Fifteen complete knowledge categories",
    catS: "The complete encyclopedia structure is available now: every category opens its list of subcategories exactly as they will appear in the final release.",
    catNote: "Detailed articles for each subcategory are added during this build; what you see today is the full directory, not published texts.",
    expand: "Show subcategories",
    collapse: "Hide subcategories",
    subsLabel: "Subcategories:",
    subCountWord: "subcategories",
    stStructure: "Complete directory",
    lblCats: "knowledge categories",
    lblSubs: "subcategories",
    lblLangs: "languages (Arabic/English)",

    /* --- how it works --- */
    howTag: "How the site works",
    howT: "From a question to information you can trace",
    howS: "The final Plantolex path, with an honest status for every step: what works now, and what arrives during this build.",
    howN1T: "Bilingual browsing & search",
    howN1B: "A complete category directory, plus Arabic and English search with Arabic normalization and precise ranking.",
    howN2T: "Articles with verified references",
    howN2B: "A dedicated page for every article with original sources and a clear editorial status — arriving during this build.",
    howN3T: "Tools and community",
    howN3B: "Working educational tools and a moderated text Q&A community — arriving at the end of this build.",
    badgeNow: "Available now",
    badgeBuild: "In this build",
    howNote: "The site shows no fake buttons: everything visible works, and everything not built yet is clearly labeled — never presented as ready.",

    /* --- trust principles --- */
    trustTag: "Trust principles",
    trustT: "Four layers that never blur together",
    trustS: "Every piece of information on Plantolex carries a label showing its origin, so scientific references never blur into community opinion or automated assistance.",
    t1T: "Reference-based content",
    t1P: "Information linked to its original source and update date.",
    t2T: "Community experience",
    t2P: "User replies are shown as field experience, not as diagnosis.",
    t3T: "Specialist review",
    t3P: "A badge that appears only after a real review by a verified specialist.",
    t4T: "Automated assistance",
    t4P: "Guidance that states its limits of certainty — never a diagnosis.",
    neverT: "What Plantolex will never do",
    nev1: "Present an automated answer as a confirmed diagnosis.",
    nev2: "Recommend a pesticide or dose without scientific basis or local registration checks.",
    nev3: "Show a “specialist-reviewed” badge before a review has actually happened.",
    nev4: "Invent information when it is missing — we state the gap and ask for more details.",

    /* --- build status --- */
    buildTag: "Build status",
    buildT: "What works now, and what comes next",
    buildS: "An honest, updated record of every section's state. No dated promises, no features presented as ready before they are.",
    liveT: "Available in this preview",
    live1: "All fifteen categories with full subcategory trees",
    live2: "Complete Arabic/English interface with RTL and LTR",
    live3: "Bilingual search with ranking and filtering",
    live4: "Light and dark themes, mobile-first responsive layout",
    nextT: "Being built in this release (later)",
    next1: "Article pages and references",
    next2: "Arabic–English agricultural glossary",
    next3: "Research & references library",
    next4: "Learning Hub and learning paths",
    next5: "Practical tools and symptom report builder",
    next6: "Agri community (questions, answers, comments)",
    next7: "Policy, privacy and contact pages",
    buildNote: "This list is updated after every build batch pushed to the repository. Only what is written here counts as official project status.",

    /* --- footer --- */
    footAbout: "A bilingual agricultural encyclopedia that puts sources first and keeps scientific references, community experience, and specialist review clearly apart.",
    fExplore: "Explore",
    fProject: "Project",
    fArriving: "In this build",
    fHome: "Home",
    fCats: "Encyclopedia categories",
    fSearch: "Search",
    fBuild: "Build status",
    fGitHub: "Repository on GitHub",
    sh1: "Article pages",
    sh2: "Glossary",
    sh3: "Research & references",
    sh4: "Learning Hub",
    sh5: "Practical tools",
    sh6: "Agri community",
    sh7: "Policies & contact",
    footTag: "Knowledge grows through sources and responsible sharing.",
    top: "Back to top ↑",

    /* --- 404 --- */
    nfT: "Page not found",
    nfP: "The link may have changed, or this page belongs to a later stage of the build. You can return home or use search.",
    nfBtn: "Back to home"
  }
};

/* Exposed for the test suite and for future page scripts. */
globalThis.PLEX_UI = UI;
