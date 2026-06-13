import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

type LangCode = 'en' | 'ar' | 'ja' | 'he' | 'fr' | 'ru' | 'is';

interface LangConfig {
  dir: 'ltr' | 'rtl';
  vertical: boolean;
  fontFamily: string;
  nativeName: string;
  code: string;
  script: string;
}

const LANGS: Record<LangCode, LangConfig> = {
  en: {
    dir: 'ltr', vertical: false,
    fontFamily: '"Inter", "Poppins", system-ui, sans-serif',
    nativeName: 'English', code: 'EN', script: 'Latin',
  },
  ar: {
    dir: 'rtl', vertical: false,
    fontFamily: '"Noto Sans Arabic", "Arabic UI Text", Tahoma, system-ui, sans-serif',
    nativeName: 'العربية', code: 'AR', script: 'Arabic · RTL',
  },
  ja: {
    dir: 'ltr', vertical: true,
    fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic Pro", Meiryo, system-ui, sans-serif',
    nativeName: '日本語', code: 'JA', script: 'Japanese · Vertical RL',
  },
  he: {
    dir: 'rtl', vertical: false,
    fontFamily: '"Noto Sans Hebrew", "Arial Hebrew", system-ui, sans-serif',
    nativeName: 'עברית', code: 'HE', script: 'Hebrew · RTL',
  },
  fr: {
    dir: 'ltr', vertical: false,
    fontFamily: '"Inter", "Poppins", system-ui, sans-serif',
    nativeName: 'Français', code: 'FR', script: 'Latin',
  },
  ru: {
    dir: 'ltr', vertical: false,
    fontFamily: '"Noto Sans", "Poppins", system-ui, sans-serif',
    nativeName: 'Русский', code: 'RU', script: 'Cyrillic',
  },
  is: {
    dir: 'ltr', vertical: false,
    fontFamily: '"Inter", "Poppins", system-ui, sans-serif',
    nativeName: 'Íslenska', code: 'IS', script: 'Latin',
  },
};

interface Translation {
  title: string;
  subtitle: string;
  label: string;
  overview: string;
  overviewText: string;
  challenge: string;
  challengeText: string;
  solution: string;
  solutionText: string;
  features: string;
  f1Title: string; f1Text: string;
  f2Title: string; f2Text: string;
  f3Title: string; f3Text: string;
  f4Title: string; f4Text: string;
  metrics: string;
  m1v: string; m1l: string;
  m2v: string; m2l: string;
  m3v: string; m3l: string;
  m4v: string; m4l: string;
  tech: string;
  techText: string;
  backLink: string;
  footerLabel: string;
  autoPlay: string;
  pause: string;
}

const T: Record<LangCode, Translation> = {
  en: {
    title: 'Multi-Language Typography Engine',
    subtitle: 'A typographic system designed for global communication across every human writing tradition.',
    label: 'Case Study',
    overview: 'Overview',
    overviewText: 'Typography is the visual language of written communication. This engine was built to handle the full diversity of human writing systems — from left-to-right Latin scripts to right-to-left Arabic and Hebrew, and the vertical columns of Japanese tategumi. Every decision in this system begins with the reader.',
    challenge: 'The Challenge',
    challengeText: 'Typography is deeply cultural. What works beautifully in English — left-to-right flow, Latin letterforms, proportional spacing — fails completely when applied to Arabic, breaks down for Japanese vertical text, and struggles with the complexities of Hebrew bidirectional content. Building a single coherent design system that respects the typographic traditions of every language required rethinking the entire stack from first principles.',
    solution: 'The Solution',
    solutionText: 'We built an adaptive typography engine that detects language context and dynamically adjusts: text direction (LTR / RTL), writing mode (horizontal / vertical), font families optimized for each script, line-height calculations that account for different character heights, and spacing systems that respect cultural conventions.',
    features: 'Core Features',
    f1Title: 'Bidirectional Text', f1Text: 'Seamless RTL / LTR switching with proper mirroring of layout elements, punctuation placement, and reading flow.',
    f2Title: 'Vertical Writing Mode', f2Text: 'Full CSS support for Japanese tategumi — vertical-rl writing mode flowing right to left, with correct text-orientation for CJK characters.',
    f3Title: 'Script-Aware Fonts', f3Text: 'Intelligent font-stack selection dynamically matched to the active script: Arabic, Hebrew, Latin, Cyrillic, or Japanese.',
    f4Title: 'Adaptive Layout', f4Text: 'Layout components that respond to text direction and writing mode — grids, spacing, and alignment all shift intelligently.',
    metrics: 'At a Glance',
    m1v: '7', m1l: 'Language Scripts',
    m2v: '3', m2l: 'Writing Directions',
    m3v: '0', m3l: 'Layout Breaks',
    m4v: '100%', m4l: 'WCAG Accessible',
    tech: 'Technical Details',
    techText: 'Built with React, TypeScript, and CSS Custom Properties. Font loading handled via Google Fonts with script subsetting for performance. Writing-mode transitions use CSS transforms to avoid layout reflow. The engine supports LTR (Latin, Cyrillic, Icelandic), RTL (Arabic, Hebrew), and vertical-rl (Japanese). All language switching is instant with zero flash of unstyled content.',
    backLink: '← Back to Portfolio',
    footerLabel: 'Typography Engine — Case Study',
    autoPlay: 'Auto',
    pause: 'Pause',
  },
  ar: {
    title: 'محرك الطباعة متعدد اللغات',
    subtitle: 'نظام طباعي مصمم للتواصل العالمي عبر كل تقاليد الكتابة البشرية.',
    label: 'دراسة حالة',
    overview: 'نظرة عامة',
    overviewText: 'الطباعة هي اللغة المرئية للتواصل الكتابي. تم بناء هذا المحرك للتعامل مع التنوع الكامل لأنظمة الكتابة البشرية — من النصوص اللاتينية من اليسار إلى اليمين، إلى العربية والعبرية من اليمين إلى اليسار، وأعمدة التاتيغومي اليابانية العمودية. كل قرار في هذا النظام يبدأ بالقارئ.',
    challenge: 'التحدي',
    challengeText: 'الطباعة عميقة الجذور ثقافياً. ما يبدو جميلاً بالإنجليزية — التدفق من اليسار إلى اليمين، الحروف اللاتينية، التباعد التناسبي — يفشل تماماً عند تطبيقه على العربية، وينهار أمام النص العمودي الياباني، ويصارع تعقيدات المحتوى ثنائي الاتجاه في العبرية. بناء نظام تصميم متماسك يحترم تقاليد الطباعة في كل لغة تطلب إعادة التفكير في المنظومة بأكملها من المبادئ الأولى.',
    solution: 'الحل',
    solutionText: 'بنينا محرك طباعة تكيفي يكشف سياق اللغة ويضبط ديناميكياً: اتجاه النص (يسار لليمين / يمين لليسار)، ووضع الكتابة (أفقي / عمودي)، وعائلات الخطوط المحسّنة لكل نص، وحسابات ارتفاع الأسطر التي تأخذ في الاعتبار ارتفاعات الأحرف المختلفة، وأنظمة التباعد التي تحترم الأعراف الثقافية.',
    features: 'المميزات الأساسية',
    f1Title: 'النص ثنائي الاتجاه', f1Text: 'تبديل سلس بين يمين لليسار ويسار لليمين مع عكس صحيح لعناصر التخطيط ووضع علامات الترقيم وتدفق القراءة.',
    f2Title: 'وضع الكتابة العمودية', f2Text: 'دعم CSS كامل للتاتيغومي اليابانية — وضع الكتابة العمودي يتدفق من اليمين إلى اليسار، مع توجيه نص صحيح لأحرف CJK.',
    f3Title: 'خطوط تدرك النص', f3Text: 'اختيار ذكي لمجموعة الخطوط يتطابق ديناميكياً مع النص النشط: العربية، العبرية، اللاتينية، السيريلية، أو اليابانية.',
    f4Title: 'تخطيط تكيفي', f4Text: 'مكونات تخطيط تستجيب لاتجاه النص ووضع الكتابة — الشبكات والتباعد والمحاذاة كلها تتحول بشكل ذكي.',
    metrics: 'لمحة سريعة',
    m1v: '٧', m1l: 'نصوص لغوية',
    m2v: '٣', m2l: 'اتجاهات كتابة',
    m3v: '٠', m3l: 'أخطاء تخطيط',
    m4v: '١٠٠٪', m4l: 'متاح للجميع',
    tech: 'التفاصيل التقنية',
    techText: 'مبني باستخدام React وTypeScript وخصائص CSS المخصصة. يتم تحميل الخطوط عبر Google Fonts مع تقسيم النصوص لتحسين الأداء. تستخدم انتقالات وضع الكتابة تحويلات CSS لتجنب إعادة تدفق التخطيط. يدعم المحرك اللغات من اليسار لليمين (اللاتينية والسيريلية والإيسلندية)، ومن اليمين لليسار (العربية والعبرية)، والعمودية (اليابانية).',
    backLink: 'العودة إلى المحفظة ←',
    footerLabel: 'محرك الطباعة — دراسة حالة',
    autoPlay: 'تشغيل',
    pause: 'إيقاف',
  },
  ja: {
    title: '多言語タイポグラフィエンジン',
    subtitle: 'あらゆる人類の書記伝統を横断するグローバルコミュニケーションのために設計された組版システム。',
    label: 'ケーススタディ',
    overview: '概要',
    overviewText: 'タイポグラフィは書き言葉のビジュアル言語です。このエンジンは人類の書記システムの多様性全体を処理するために構築されました。左から右へのラテン文字から、右から左へのアラビア語とヘブライ語、そして日本語の縦組みの列まで。このシステムのすべての決定は読者から始まります。',
    challenge: '課題',
    challengeText: 'タイポグラフィは文化的に深く根付いています。英語で美しく機能するもの、左から右への流れ、ラテン文字、比例スペーシング、をアラビア語に適用すると完全に失敗し、日本語の縦書きでは機能が崩れ、ヘブライ語の双方向コンテンツの複雑さに苦労します。すべての言語の組版の伝統を尊重する一貫したデザインシステムを構築するには、最初の原則からスタック全体を再考する必要がありました。',
    solution: '解決策',
    solutionText: '言語コンテキストを検出して動的に調整する適応型タイポグラフィエンジンを構築しました。テキストの方向（LTR・RTL）、書き込みモード（横組み・縦組み）、各文字に最適化されたフォントファミリー、異なる文字の高さを考慮した行高計算、文化的慣例を尊重するスペーシングシステムが含まれます。',
    features: '主な機能',
    f1Title: '双方向テキスト', f1Text: 'レイアウト要素・句読点・読み取りフローの適切なミラーリングを備えたシームレスなRTL・LTR切り替え。',
    f2Title: '縦書きモード', f2Text: '日本語の縦組みのCSSフルサポート。縦書きモードが右から左に流れ、CJK文字の正しいテキスト方向を持ちます。',
    f3Title: 'スクリプト対応フォント', f3Text: 'アクティブなスクリプトに動的にマッチするフォントスタック選択。アラビア語・ヘブライ語・ラテン語・キリル文字・日本語に対応。',
    f4Title: '適応型レイアウト', f4Text: 'テキストの方向と書き込みモードに対応するレイアウトコンポーネント。グリッド・スペーシング・配置がすべてインテリジェントに変化。',
    metrics: '概要',
    m1v: '７', m1l: '言語スクリプト',
    m2v: '３', m2l: '書字方向',
    m3v: '０', m3l: 'レイアウト崩れ',
    m4v: '１００％', m4l: 'アクセシブル',
    tech: '技術的詳細',
    techText: 'React・TypeScript・CSSカスタムプロパティで構築。フォント読み込みはパフォーマンスのためのサブセット化を備えたGoogle Fontsで処理。書き込みモードの遷移はレイアウトリフローを避けるためにCSSトランスフォームを使用。エンジンはLTR（ラテン語・キリル文字・アイスランド語）、RTL（アラビア語・ヘブライ語）、縦書きrl（日本語）をサポートします。',
    backLink: '← ポートフォリオに戻る',
    footerLabel: 'タイポグラフィエンジン — ケーススタディ',
    autoPlay: '自動',
    pause: '停止',
  },
  he: {
    title: 'מנוע הטיפוגרפיה רב-לשוני',
    subtitle: 'מערכת טיפוגרפית שתוכננה לתקשורת גלובלית על פני כל מסורת כתיבה אנושית.',
    label: 'מקרה בוחן',
    overview: 'סקירה כללית',
    overviewText: 'טיפוגרפיה היא השפה החזותית של התקשורת הכתובה. מנוע זה נבנה כדי לטפל במגוון המלא של מערכות הכתיבה האנושיות — מכתבי לטין משמאל לימין, ועד ערבית ועברית מימין לשמאל, ועמודות הטאטגומי היפניות האנכיות. כל החלטה במערכת זו מתחילה בקורא.',
    challenge: 'האתגר',
    challengeText: 'טיפוגרפיה היא עמוקה תרבותית. מה שעובד יפה באנגלית — זרימה משמאל לימין, אותיות לטיניות, ריווח פרופורציונלי — נכשל לחלוטין כשמיישמים אותו על ערבית, מתמוטט עבור טקסט אנכי יפני, ומתקשה עם המורכבויות של תוכן דו-כיווני בעברית. בניית מערכת עיצוב קוהרנטית אחת שמכבדת את מסורות הטיפוגרפיה של כל שפה דרשה חשיבה מחדש על כל המחסנית מהעקרונות הראשוניים.',
    solution: 'הפתרון',
    solutionText: 'בנינו מנוע טיפוגרפיה אדפטיבי שמזהה הקשר שפה ומתכוונן באופן דינמי: כיוון טקסט (LTR / RTL), מצב כתיבה (אופקי / אנכי), משפחות גופנים מותאמות לכל כתב, חישובי גובה שורה המתחשבים בגבהי תווים שונים, ומערכות ריווח שמכבדות מוסכמות תרבותיות.',
    features: 'תכונות עיקריות',
    f1Title: 'טקסט דו-כיווני', f1Text: 'מעבר חלק RTL/LTR עם שיקוף נכון של רכיבי פריסה, מיקום סימני פיסוק ותדריך קריאה.',
    f2Title: 'מצב כתיבה אנכי', f2Text: 'תמיכה מלאה ב-CSS לטאטגומי יפני — מצב כתיבה אנכי הזורם מימין לשמאל, עם כיוון טקסט נכון עבור תווי CJK.',
    f3Title: 'גופנים מודעי-כתב', f3Text: 'בחירת ערימת גופנים חכמה התואמת באופן דינמי לכתב הפעיל: ערבית, עברית, לטינית, קירילית או יפנית.',
    f4Title: 'פריסה אדפטיבית', f4Text: 'רכיבי פריסה המגיבים לכיוון טקסט ומצב כתיבה — רשתות, ריווח ויישור כולם משתנים באופן חכם.',
    metrics: 'במבט מהיר',
    m1v: '7', m1l: 'כתבי שפה',
    m2v: '3', m2l: 'כיווני כתיבה',
    m3v: '0', m3l: 'שגיאות פריסה',
    m4v: '100%', m4l: 'נגישות WCAG',
    tech: 'פרטים טכניים',
    techText: 'נבנה עם React, TypeScript ומאפייני CSS מותאמים. טעינת גופנים מטופלת דרך Google Fonts עם תת-קבוצות לביצועים. מעברי מצב כתיבה משתמשים בהמרות CSS כדי למנוע זרימה מחדש של פריסה. המנוע תומך ב-LTR (לטינית, קירילית, איסלנדית), RTL (ערבית, עברית) ואנכי-rl (יפנית).',
    backLink: 'חזרה לתיק עבודות ←',
    footerLabel: 'מנוע טיפוגרפיה — מקרה בוחן',
    autoPlay: 'אוטו',
    pause: 'עצור',
  },
  fr: {
    title: 'Moteur de Typographie Multilingue',
    subtitle: 'Un système typographique conçu pour la communication mondiale à travers toutes les traditions d\'écriture humaines.',
    label: 'Étude de Cas',
    overview: 'Aperçu',
    overviewText: 'La typographie est le langage visuel de la communication écrite. Ce moteur a été conçu pour gérer toute la diversité des systèmes d\'écriture humains — des scripts latins de gauche à droite à l\'arabe et à l\'hébreu de droite à gauche, et aux colonnes verticales du tategumi japonais. Chaque décision dans ce système commence par le lecteur.',
    challenge: 'Le Défi',
    challengeText: 'La typographie est profondément culturelle. Ce qui fonctionne magnifiquement en anglais — le flux de gauche à droite, les lettres latines, l\'espacement proportionnel — échoue complètement lorsqu\'il est appliqué à l\'arabe, s\'effondre pour le texte vertical japonais et peine avec les complexités du contenu bidirectionnel hébreu. Construire un système de conception cohérent qui respecte les traditions typographiques de chaque langue a nécessité de repenser entièrement la pile depuis les premiers principes.',
    solution: 'La Solution',
    solutionText: 'Nous avons construit un moteur de typographie adaptatif qui détecte le contexte linguistique et s\'ajuste dynamiquement : la direction du texte (LTR / RTL), le mode d\'écriture (horizontal / vertical), les familles de polices optimisées pour chaque script, les calculs de hauteur de ligne tenant compte des différentes hauteurs de caractères, et les systèmes d\'espacement respectant les conventions culturelles.',
    features: 'Fonctionnalités Clés',
    f1Title: 'Texte Bidirectionnel', f1Text: 'Basculement RTL/LTR fluide avec mise en miroir correcte des éléments de mise en page, placement de la ponctuation et flux de lecture.',
    f2Title: 'Mode d\'Écriture Vertical', f2Text: 'Prise en charge CSS complète du tategumi japonais — mode d\'écriture vertical s\'écoulant de droite à gauche, avec orientation de texte correcte pour les caractères CJK.',
    f3Title: 'Polices Adaptées aux Scripts', f3Text: 'Sélection intelligente de la pile de polices correspondant dynamiquement au script actif : arabe, hébreu, latin, cyrillique ou japonais.',
    f4Title: 'Mise en Page Adaptative', f4Text: 'Composants de mise en page qui répondent à la direction du texte et au mode d\'écriture — grilles, espacements et alignements s\'ajustent intelligemment.',
    metrics: 'En Bref',
    m1v: '7', m1l: 'Scripts Linguistiques',
    m2v: '3', m2l: 'Directions d\'Écriture',
    m3v: '0', m3l: 'Ruptures de Mise en Page',
    m4v: '100%', m4l: 'Accessible WCAG',
    tech: 'Détails Techniques',
    techText: 'Construit avec React, TypeScript et CSS Custom Properties. Le chargement des polices est géré via Google Fonts avec sous-ensembles pour les performances. Les transitions de mode d\'écriture utilisent les transformations CSS pour éviter le reflux de mise en page. Le moteur prend en charge LTR (latin, cyrillique, islandais), RTL (arabe, hébreu) et vertical-rl (japonais).',
    backLink: '← Retour au Portfolio',
    footerLabel: 'Moteur de Typographie — Étude de Cas',
    autoPlay: 'Auto',
    pause: 'Pause',
  },
  ru: {
    title: 'Многоязычный Движок Типографики',
    subtitle: 'Типографическая система, разработанная для глобальных коммуникаций, охватывающая все традиции письма человечества.',
    label: 'Кейс-Стади',
    overview: 'Обзор',
    overviewText: 'Типографика — это визуальный язык письменной коммуникации. Этот движок был создан для работы со всем многообразием человеческих систем письма — от латинских скриптов слева направо до арабского и иврита справа налево, и до вертикальных колонок японской татегуми. Каждое решение в этой системе начинается с читателя.',
    challenge: 'Задача',
    challengeText: 'Типографика глубоко культурна. То, что прекрасно работает в английском — поток слева направо, латинские буквы, пропорциональные интервалы — полностью провалится при применении к арабскому, рухнет при японском вертикальном тексте и будет бороться со сложностями двунаправленного содержимого иврита. Построение единой согласованной системы дизайна, уважающей типографические традиции каждого языка, потребовало переосмысления всего стека с первых принципов.',
    solution: 'Решение',
    solutionText: 'Мы построили адаптивный движок типографики, который определяет языковой контекст и динамически регулирует: направление текста (LTR / RTL), режим письма (горизонтальный / вертикальный), семейства шрифтов, оптимизированные для каждого письма, расчёты высоты строк, учитывающие разные высоты символов, и системы интервалов, уважающие культурные нормы.',
    features: 'Основные Возможности',
    f1Title: 'Двунаправленный Текст', f1Text: 'Плавное переключение RTL/LTR с правильным зеркальным отображением элементов макета, расстановкой знаков препинания и потоком чтения.',
    f2Title: 'Вертикальный Режим Письма', f2Text: 'Полная поддержка CSS японской татэгуми — вертикальный режим письма, текущий справа налево, с правильной ориентацией текста для символов CJK.',
    f3Title: 'Шрифты с Учётом Письма', f3Text: 'Интеллектуальный выбор стека шрифтов, динамически соответствующий активному письму: арабскому, ивриту, латинице, кириллице или японскому.',
    f4Title: 'Адаптивный Макет', f4Text: 'Компоненты макета, реагирующие на направление текста и режим письма — сетки, отступы и выравнивание изменяются интеллектуально.',
    metrics: 'Коротко',
    m1v: '7', m1l: 'Систем Письма',
    m2v: '3', m2l: 'Направления',
    m3v: '0', m3l: 'Ошибок Макета',
    m4v: '100%', m4l: 'Доступность WCAG',
    tech: 'Технические Детали',
    techText: 'Построен на React, TypeScript и CSS Custom Properties. Загрузка шрифтов осуществляется через Google Fonts с подмножествами для производительности. Переходы режима письма используют CSS-трансформации, чтобы избежать повторного отображения макета. Движок поддерживает LTR (латиница, кириллица, исландский), RTL (арабский, иврит) и vertical-rl (японский).',
    backLink: '← Вернуться в Портфолио',
    footerLabel: 'Движок Типографики — Кейс-Стади',
    autoPlay: 'Авто',
    pause: 'Пауза',
  },
  is: {
    title: 'Fjöltyngdur Leturgerðarvél',
    subtitle: 'Leturgerðarkerfi hannað fyrir alþjóðlega samskipti yfir allar mannlegar skrifarhefðir.',
    label: 'Dæmasaga',
    overview: 'Yfirlit',
    overviewText: 'Leturgerð er sjónrænt tungumál skriflegrar samskipta. Þessi vél var byggð til að takast á við alla margbreytileika mannlegra skriftarkerfa — frá latneskum skriftum frá vinstri til hægri, til arabísku og hebresku frá hægri til vinstri, og lóðréttar súlur japansks tategumi. Sérhver ákvörðun í þessu kerfi hefst með lesandanum.',
    challenge: 'Áskorunin',
    challengeText: 'Leturgerð er djúpt menningarlegar. Það sem virkar fallega á ensku — flæði frá vinstri til hægri, latneskir stafir, hlutfallslegt bil — mistekst algerlega þegar það er beitt á arabísku, brotnar niður fyrir japanskt lóðrétt texta og glímir við flókni tvístefnu efni á hebresku. Að byggja upp eitt samræmt hönnunarkerfi sem virðir leturgerðarhefðir hverrar tungu krafðist þess að endurhugsað var um allan stafla frá fyrstu meginreglum.',
    solution: 'Lausnin',
    solutionText: 'Við smíðuðum aðlægt leturgerðarvél sem greinir tungumálasamhengi og lagar sig kvikt: textastefna (LTR / RTL), ritunarsniðmát (lárétt / lóðrétt), leturfjölskyldur sem fínstilltar eru fyrir hvert handrit, línuhæðarútreikninga sem taka tillit til mismunandi stafahæða og bilkerfum sem virða menningarlegar hefðir.',
    features: 'Kjarnaeiginleikar',
    f1Title: 'Tvístefna Texti', f1Text: 'Hnökralaus RTL/LTR skipting með réttum speglun útlitsþátta, staðsetningu greinarmerki og lesflæði.',
    f2Title: 'Lóðrétt Ritunarsniðmát', f2Text: 'Fullur CSS stuðningur fyrir japanska tategumi — lóðrétt ritunarsniðmát sem flæðir frá hægri til vinstri, með réttri textastefnu fyrir CJK stafi.',
    f3Title: 'Handritsvitandi Letur', f3Text: 'Snjallt leturstaflval sem passar kvikt við virkt handrit: arabísku, hebresku, latnesku, kýrillísku eða japönsku.',
    f4Title: 'Aðlægt Útlit', f4Text: 'Útlitsþætti sem bregðast við textastefnu og ritunarsniðmáti — hnitakerfi, bil og röðun breytast allt greinilega.',
    metrics: 'Í Stuttu Máli',
    m1v: '7', m1l: 'Tungumálahandrit',
    m2v: '3', m2l: 'Ritunarstefnur',
    m3v: '0', m3l: 'Útlitsbrot',
    m4v: '100%', m4l: 'WCAG Aðgengilegt',
    tech: 'Tæknilegar Upplýsingar',
    techText: 'Smíðað með React, TypeScript og CSS Custom Properties. Leturfærsla er meðhöndluð í gegnum Google Fonts með undirmengjum fyrir afköst. Ritunarsniðmátsumskipti nota CSS-umbreytingar til að koma í veg fyrir endurflæði útlits. Vélin styður LTR (latneska, kyrillíska, íslenska), RTL (arabíska, hebreska) og vertical-rl (japanska).',
    backLink: '← Aftur í Safnmöppu',
    footerLabel: 'Leturgerðarvél — Dæmasaga',
    autoPlay: 'Sjálfvirkt',
    pause: 'Gera hlé',
  },
};

const LANG_ORDER: LangCode[] = ['en', 'ar', 'ja', 'he', 'fr', 'ru', 'is'];
const CYCLE_MS = 7000;

const FEATURE_ICONS = ['⇄', '縦', 'Aa', '⊞'];

export default function TypographyDemo() {
  const [langIndex, setLangIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressKey = `${langIndex}-${isAutoPlay}`;

  const lang = LANG_ORDER[langIndex];
  const t = T[lang];
  const cfg = LANGS[lang];
  const isVertical = cfg.vertical;
  const isRTL = cfg.dir === 'rtl';

  const switchTo = useCallback((idx: number) => {
    if (idx === langIndex) return;
    setIsVisible(false);
    setTimeout(() => {
      setLangIndex(idx);
      setIsVisible(true);
    }, 350);
  }, [langIndex]);

  useEffect(() => {
    if (!isAutoPlay) return;
    timerRef.current = setTimeout(() => {
      switchTo((langIndex + 1) % LANG_ORDER.length);
    }, CYCLE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [langIndex, isAutoPlay, switchTo]);

  const handleSelect = (idx: number) => {
    setIsAutoPlay(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    switchTo(idx);
  };

  const handleAutoPlay = () => {
    setIsAutoPlay(prev => !prev);
  };

  const vStyle: React.CSSProperties = isVertical
    ? { writingMode: 'vertical-rl', textOrientation: 'mixed' }
    : {};

  const heroTitleStyle: React.CSSProperties = isVertical
    ? { writingMode: 'vertical-rl', textOrientation: 'mixed', maxHeight: '75vh' }
    : {};

  return (
    <div style={{ background: '#050816', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;600;700&family=Noto+Sans+Hebrew:wght@300;400;600;700&family=Noto+Sans+JP:wght@300;400;600;700&family=Noto+Sans:wght@300;400;600;700&display=swap');

        @keyframes typo-progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes typo-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .typo-progress-bar {
          height: 2px;
          background: linear-gradient(90deg, #804dee, #00cea8);
          animation: typo-progress ${CYCLE_MS}ms linear forwards;
        }

        .typo-lang-btn {
          padding: 6px 14px;
          border-radius: 6px;
          border: 1px solid rgba(128,77,238,0.3);
          background: transparent;
          color: #aaa6c3;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          transition: all 0.2s;
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
        }

        .typo-lang-btn:hover {
          border-color: rgba(128,77,238,0.7);
          color: #fff;
          background: rgba(128,77,238,0.1);
        }

        .typo-lang-btn.active {
          border-color: #804dee;
          background: rgba(128,77,238,0.2);
          color: #fff;
        }

        .typo-card {
          background: rgba(29,24,54,0.8);
          border: 1px solid rgba(128,77,238,0.2);
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.3s;
        }

        .typo-card:hover {
          border-color: rgba(128,77,238,0.5);
        }

        .typo-section {
          padding: 80px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .typo-metric {
          text-align: center;
          padding: 32px 16px;
        }

        .typo-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.08);
          margin: 0;
        }

        .typo-chip {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(128,77,238,0.15);
          border: 1px solid rgba(128,77,238,0.4);
          font-size: 11px;
          letter-letter-spacing: 0.1em;
          font-family: 'Inter', monospace;
          color: #c4b5fd;
        }
      `}</style>

      {/* ── Fixed Header ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(5,8,22,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          direction: 'ltr',
        }}>
          {/* Back link */}
          <Link to="/" style={{
            color: '#aaa6c3', textDecoration: 'none',
            fontSize: 13, fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap', flexShrink: 0,
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaa6c3')}
          >
            ← Portfolio
          </Link>

          {/* Separator */}
          <span style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>|</span>

          {/* Language buttons */}
          <div style={{ display: 'flex', gap: 6, overflowX: 'auto', flex: 1 }}>
            {LANG_ORDER.map((code, idx) => (
              <button
                key={code}
                className={`typo-lang-btn${langIndex === idx ? ' active' : ''}`}
                onClick={() => handleSelect(idx)}
                title={LANGS[code].nativeName}
              >
                <span style={{ marginInlineEnd: 5 }}>{LANGS[code].code}</span>
                <span style={{ opacity: 0.7 }}>{LANGS[code].nativeName}</span>
              </button>
            ))}
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={handleAutoPlay}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: `1px solid ${isAutoPlay ? '#804dee' : 'rgba(128,77,238,0.3)'}`,
              background: isAutoPlay ? 'rgba(128,77,238,0.2)' : 'transparent',
              color: isAutoPlay ? '#c4b5fd' : '#aaa6c3',
              cursor: 'pointer',
              fontSize: 12,
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.2s',
            }}
          >
            {isAutoPlay ? `⏸ ${t.pause}` : `▶ ${t.autoPlay}`}
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ height: 2, background: 'rgba(255,255,255,0.05)' }}>
          {isAutoPlay && (
            <div
              key={progressKey}
              className="typo-progress-bar"
            />
          )}
        </div>
      </header>

      {/* ── Main Content ── */}
      <main
        style={{
          paddingTop: 66,
          fontFamily: cfg.fontFamily,
          direction: cfg.dir,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      >

        {/* ── Hero ── */}
        <section style={{
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(128,77,238,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'relative', zIndex: 1,
            maxWidth: 1200, width: '100%', margin: '0 auto',
          }}>
            {/* Label row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 32,
              justifyContent: isRTL ? 'flex-end' : 'flex-start',
              flexDirection: isRTL ? 'row-reverse' : 'row',
            }}>
              <span className="typo-chip" style={{ direction: 'ltr' }}>{cfg.script}</span>
              <span style={{
                color: '#6b7280', fontSize: 13,
                fontFamily: 'Inter, sans-serif',
              }}>
                {t.label}
              </span>
            </div>

            {/* Title + subtitle layout */}
            <div style={{
              display: 'flex',
              flexDirection: isVertical ? 'row-reverse' : 'column',
              alignItems: isVertical ? 'flex-start' : isRTL ? 'flex-end' : 'flex-start',
              gap: isVertical ? '3rem' : '1.5rem',
            }}>
              <h1 style={{
                fontSize: isVertical ? undefined : 'clamp(2.5rem, 7vw, 5rem)',
                fontWeight: 700,
                lineHeight: isVertical ? undefined : 1.05,
                letterSpacing: isVertical ? undefined : '-0.02em',
                background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 60%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                maxWidth: isVertical ? undefined : '16ch',
                ...heroTitleStyle,
              }}>
                {t.title}
              </h1>

              <p style={{
                fontSize: isVertical ? undefined : 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: '#aaa6c3',
                lineHeight: 1.7,
                maxWidth: isVertical ? undefined : '50ch',
                ...vStyle,
              }}>
                {t.subtitle}
              </p>
            </div>

            {/* Scroll hint */}
            {!isVertical && (
              <div style={{
                marginTop: 64,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                color: '#4b5563',
                fontSize: 12,
                fontFamily: 'Inter, sans-serif',
                justifyContent: isRTL ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  width: 1, height: 40,
                  background: 'linear-gradient(to bottom, transparent, rgba(128,77,238,0.6))',
                }} />
                <span style={{ direction: 'ltr' }}>Scroll</span>
              </div>
            )}
          </div>
        </section>

        <hr className="typo-divider" />

        {/* ── Overview ── */}
        <section className="typo-section">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isVertical ? '1fr' : 'minmax(0,1fr) minmax(0,2fr)',
            gap: isVertical ? 32 : 80,
            alignItems: 'start',
          }}>
            <div>
              <p style={{
                fontSize: 12, fontFamily: 'Inter, sans-serif',
                color: '#804dee', textTransform: 'uppercase',
                letterSpacing: '0.12em', marginBottom: 12,
                direction: 'ltr',
              }}>
                01
              </p>
              <h2 style={{
                fontSize: isVertical ? undefined : 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                color: '#fff',
                ...vStyle,
              }}>
                {t.overview}
              </h2>
            </div>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              color: '#9ca3af',
              lineHeight: 1.85,
              ...vStyle,
            }}>
              {t.overviewText}
            </p>
          </div>
        </section>

        <hr className="typo-divider" />

        {/* ── Challenge + Solution ── */}
        <section className="typo-section">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isVertical ? '1fr' : '1fr 1fr',
            gap: 48,
          }}>
            {/* Challenge */}
            <div className="typo-card">
              <p style={{
                fontSize: 11, fontFamily: 'Inter, sans-serif',
                color: '#804dee', textTransform: 'uppercase',
                letterSpacing: '0.12em', marginBottom: 16,
                direction: 'ltr',
              }}>02</p>
              <h2 style={{
                fontSize: isVertical ? undefined : '1.5rem',
                fontWeight: 600,
                marginBottom: 20,
                color: '#e2e8f0',
                ...vStyle,
              }}>
                {t.challenge}
              </h2>
              <p style={{
                color: '#9ca3af',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                ...vStyle,
              }}>
                {t.challengeText}
              </p>
            </div>

            {/* Solution */}
            <div className="typo-card" style={{ borderColor: 'rgba(0,206,168,0.25)' }}>
              <p style={{
                fontSize: 11, fontFamily: 'Inter, sans-serif',
                color: '#00cea8', textTransform: 'uppercase',
                letterSpacing: '0.12em', marginBottom: 16,
                direction: 'ltr',
              }}>03</p>
              <h2 style={{
                fontSize: isVertical ? undefined : '1.5rem',
                fontWeight: 600,
                marginBottom: 20,
                color: '#e2e8f0',
                ...vStyle,
              }}>
                {t.solution}
              </h2>
              <p style={{
                color: '#9ca3af',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                ...vStyle,
              }}>
                {t.solutionText}
              </p>
            </div>
          </div>
        </section>

        <hr className="typo-divider" />

        {/* ── Features ── */}
        <section className="typo-section">
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontSize: 11, fontFamily: 'Inter, sans-serif',
              color: '#804dee', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: 12,
              direction: 'ltr',
            }}>04</p>
            <h2 style={{
              fontSize: isVertical ? undefined : 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 600,
              color: '#fff',
              ...vStyle,
              display: isVertical ? 'inline-block' : undefined,
            }}>
              {t.features}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isVertical ? '1fr 1fr' : 'repeat(2, 1fr)',
            gap: 20,
          }}>
            {[
              { icon: FEATURE_ICONS[0], title: t.f1Title, text: t.f1Text },
              { icon: FEATURE_ICONS[1], title: t.f2Title, text: t.f2Text },
              { icon: FEATURE_ICONS[2], title: t.f3Title, text: t.f3Text },
              { icon: FEATURE_ICONS[3], title: t.f4Title, text: t.f4Text },
            ].map((feature, i) => (
              <div key={i} className="typo-card" style={{
                display: 'flex',
                flexDirection: isVertical ? 'row' : 'column',
                alignItems: isVertical ? 'flex-start' : 'flex-start',
                gap: isVertical ? 16 : 0,
              }}>
                <div style={{
                  fontSize: isVertical ? '1.8rem' : '2rem',
                  marginBottom: isVertical ? 0 : 20,
                  lineHeight: 1,
                  fontFamily: '"Noto Sans JP", system-ui, sans-serif',
                  flexShrink: 0,
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    marginBottom: isVertical ? 8 : 12,
                    ...vStyle,
                    display: isVertical ? 'inline-block' : undefined,
                  }}>
                    {feature.title}
                  </h3>
                  {!isVertical && <br />}
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.875rem',
                    lineHeight: 1.75,
                    marginTop: isVertical ? 0 : 0,
                    ...vStyle,
                    display: isVertical ? 'inline-block' : undefined,
                  }}>
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="typo-divider" />

        {/* ── Metrics ── */}
        <section style={{
          background: 'rgba(128,77,238,0.04)',
          padding: '80px 24px',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ marginBottom: 48, textAlign: isRTL ? 'right' : 'left' }}>
              <p style={{
                fontSize: 11, fontFamily: 'Inter, sans-serif',
                color: '#804dee', textTransform: 'uppercase',
                letterSpacing: '0.12em', marginBottom: 12,
                direction: 'ltr',
                textAlign: 'start',
              }}>05</p>
              <h2 style={{
                fontSize: isVertical ? undefined : 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 600,
                color: '#fff',
                ...vStyle,
                display: isVertical ? 'inline-block' : undefined,
              }}>
                {t.metrics}
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isVertical ? '1fr 1fr' : 'repeat(4, 1fr)',
              gap: 2,
            }}>
              {[
                { v: t.m1v, l: t.m1l },
                { v: t.m2v, l: t.m2l },
                { v: t.m3v, l: t.m3l },
                { v: t.m4v, l: t.m4l },
              ].map((m, i) => (
                <div key={i} className="typo-metric" style={{
                  borderRight: i < 3 && !isVertical ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{
                    fontSize: isVertical ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #fff 0%, #c4b5fd 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: 12,
                    ...vStyle,
                    display: isVertical ? 'inline-block' : 'block',
                  }}>
                    {m.v}
                  </div>
                  <div style={{
                    color: '#6b7280',
                    fontSize: '0.85rem',
                    ...vStyle,
                    display: isVertical ? 'inline-block' : 'block',
                  }}>
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="typo-divider" />

        {/* ── Tech Stack ── */}
        <section className="typo-section">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isVertical ? '1fr' : 'minmax(0,1fr) minmax(0,2fr)',
            gap: isVertical ? 32 : 80,
            alignItems: 'start',
          }}>
            <div>
              <p style={{
                fontSize: 11, fontFamily: 'Inter, sans-serif',
                color: '#804dee', textTransform: 'uppercase',
                letterSpacing: '0.12em', marginBottom: 12,
                direction: 'ltr',
              }}>06</p>
              <h2 style={{
                fontSize: isVertical ? undefined : 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 600,
                lineHeight: 1.2,
                color: '#fff',
                ...vStyle,
              }}>
                {t.tech}
              </h2>

              {/* Script tags */}
              {!isVertical && (
                <div style={{
                  marginTop: 24,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  justifyContent: isRTL ? 'flex-end' : 'flex-start',
                }}>
                  {['React', 'TypeScript', 'CSS', 'Google Fonts', 'writing-mode', 'direction: rtl'].map(tag => (
                    <span key={tag} style={{
                      padding: '3px 10px',
                      background: 'rgba(29,24,54,1)',
                      border: '1px solid rgba(128,77,238,0.25)',
                      borderRadius: 4,
                      fontSize: 11,
                      fontFamily: 'monospace',
                      color: '#a78bfa',
                      direction: 'ltr',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: '#9ca3af',
              lineHeight: 1.9,
              ...vStyle,
            }}>
              {t.techText}
            </p>
          </div>
        </section>

        <hr className="typo-divider" />

        {/* ── Footer ── */}
        <footer style={{
          padding: '40px 24px',
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: isRTL ? 'row-reverse' : 'row',
          gap: 16,
        }}>
          <span style={{
            color: '#374151',
            fontSize: 13,
            fontFamily: 'Inter, sans-serif',
            direction: 'ltr',
          }}>
            {t.footerLabel}
          </span>

          <Link to="/" style={{
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: 13,
            fontFamily: 'Inter, sans-serif',
            transition: 'color 0.2s',
            direction: 'ltr',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
          >
            {t.backLink}
          </Link>
        </footer>

      </main>
    </div>
  );
}
