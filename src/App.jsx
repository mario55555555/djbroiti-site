import { useState, useEffect } from "react";

// Icons Components
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const MusicIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const SpotifyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.59 14.52a.62.62 0 0 1-.86.2c-2.36-1.44-5.33-1.76-8.84-.95a.62.62 0 1 1-.28-1.21c3.83-.88 7.1-.52 9.77 1.11.3.18.39.56.21.85zm1.23-2.73a.78.78 0 0 1-1.07.26c-2.7-1.66-6.81-2.14-10-1.16a.78.78 0 1 1-.46-1.49c3.64-1.12 8.16-.58 11.28 1.34.37.23.49.71.25 1.05zm.11-2.84c-3.23-1.92-8.56-2.1-11.64-1.16a.94.94 0 0 1-.55-1.79c3.54-1.08 9.43-.87 13.15 1.34a.94.94 0 0 1-.96 1.61z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.37 12.61c.02 2.14 1.88 2.85 1.9 2.86-.02.05-.3 1.03-1 2.04-.6.88-1.24 1.75-2.22 1.77-.96.02-1.27-.57-2.37-.57-1.1 0-1.44.55-2.35.59-.95.03-1.67-.94-2.28-1.82-1.24-1.79-2.18-5.05-.91-7.26.63-1.1 1.76-1.8 2.98-1.82.93-.02 1.81.63 2.37.63.56 0 1.62-.77 2.73-.66.47.02 1.79.19 2.64 1.43-.07.04-1.58.92-1.56 2.81zM14.8 5.8c.5-.61.84-1.46.75-2.3-.72.03-1.58.48-2.1 1.09-.46.53-.86 1.39-.75 2.2.8.06 1.61-.41 2.1-.99z" />
  </svg>
);

const ALL_CLIPS = [
  { title: { en: "My Knight", he: "האביר שלי" }, id: "wrWlRyZKuc8", cat: { en: "Latest Release", he: "הוצאה חדשה" }, featured: true },
  { title: { en: "Lo Tzrikha Otkha (Club Remix)", he: "לא צריכה אותך (Club Remix)" }, id: "3WGISHHzDb0", cat: { en: "Club Remix", he: "קלאב רמיקס" } },
  { title: { en: "Lo Tzrikha Otkha (I Don't Need You)", he: "לא צריכה אותך" }, id: "DueG6uK25mU", cat: { en: "Official Video", he: "קליפ רשמי" } },
  { title: { en: "Shomer Alay", he: "שומר עליי" }, id: "SBsVm1H1tSM", cat: { en: "Official Video", he: "קליפ רשמי" } },
  { title: { en: "Shavrir Shel Shniya", he: "שבריר של שנייה" }, id: "h_ZhlUu9zMc", cat: { en: "Official Video", he: "קליפ רשמי" } },
  { title: { en: "Ey Sham (Remix)", he: "אי שם (Remix)" }, id: "wAtPoT2rfwg", cat: { en: "Remix", he: "רמיקס" } },
  { title: { en: "Ey Sham", he: "אי שם" }, id: "zCA2hASBCuo", cat: { en: "Original Song", he: "שיר מקורי" } },
  { title: { en: "My Second Half (Live @ Illusions Square)", he: "החצי השני שלי (לייב בכיכר האשליות)" }, id: "8vaVKwRikWw", cat: { en: "Live", he: "לייב" } },
  { title: { en: "Khalamti Alayikh (Club Remix)", he: "חלמתי עלייך (Club Remix)" }, id: "BKioBZHjcZA", cat: { en: "Club Remix", he: "קלאב רמיקס" } },
  { title: { en: "Khalamti Alayikh", he: "חלמתי עלייך" }, id: "AlRWp4A-snM", cat: { en: "Original Song", he: "שיר מקורי" } },
  { title: { en: "Levadi", he: "לבדי" }, id: "gNoOEpG1ZY4", cat: { en: "Original Song", he: "שיר מקורי" } },
  { title: { en: "Here Comes The Storm", he: "Here Comes The Storm" }, id: "j8gr-UhfFj8", cat: { en: "Official Release", he: "הוצאה רשמית" } },
  { title: { en: "Masa - Cover", he: "מסע - קאבר" }, id: "coYAIaSQupc", cat: { en: "Cover", he: "קאבר" } },
  { title: { en: "I Don't Feel Real", he: "לא מרגיש קיים" }, id: "2Q5z5VLKnoo", cat: { en: "Official Video", he: "קליפ רשמי" } },
  { title: { en: "And There Was Light", he: "And There Was Light" }, id: "-C7zS5kjZkQ", cat: { en: "Audio Visual", he: "אודיו ויזואלי" } },
  { title: { en: "My Second Self", he: "החצי השני שלי" }, id: "RB86jrC2yRc", cat: { en: "Original Mix", he: "גרסה מקורית" } },
  { title: { en: "My Second Self (Live Rock)", he: "החצי השני שלי (לייב)" }, id: "MiON30oxUjk", cat: { en: "Live Rock", he: "לייב רוק" } },
  { title: { en: "Fighting On Her Own", he: "Fighting On Her Own" }, id: "EmDesEEk_sg", cat: { en: "Official Video", he: "קליפ רשמי" } },
  { title: { en: "Hard to Break", he: "Hard to Break" }, id: "RU7L4FleDlk", cat: { en: "Official Video", he: "קליפ רשמי" } },
  { title: { en: "Hard to Break (Alternate)", he: "Hard to Break (Alternate)" }, id: "jPPafrSdkf0", cat: { en: "Alternate Version", he: "גרסה חלופית" } },
  { title: { en: "Somebody Else", he: "Somebody Else" }, id: "rK1GhEbIF-k", cat: { en: "Official Video", he: "קליפ רשמי" } },
  { title: { en: "Mishu Akher", he: "Somebody Else בעברית" }, id: "ZYq-fRCVc34", cat: { en: "Hebrew Version", he: "גרסה בעברית" } },
];

const content = {
  en: {
    navHome: "Home",
    navArchive: "Archive",
    navEpk: "EPK",
    navAbout: "About",
    navContact: "Contact",
    brandSub: "Official Archive",
    heroBadge: "Official Website Live",
    heroTitle1: "DJ BROITI",
    heroTitle2: "MUSIC THAT FEELS LIKE CINEMA",
    heroText: "All the music, visuals, and world of DJ Broiti — in one place.",
    watchFeatured: "Play Now",
    featured: "Featured Release",
    openClip: "Open Clip",
    fullCollection: "Full Collection",
    exploreAll: "Explore All Clips",
    watchYoutube: "Watch on YouTube",
    epkLabel: "Official",
    epkTitle: "Electronic Press Kit",
    epkBioTitle: "Short Bio",
    epkBioText: "DJ Broiti is an AI artist and music producer from Jerusalem, blending deep house and melodic trance with cutting-edge artificial intelligence to create cinematic digital experiences.",
    epkDownload: "Download Press Assets",
    aboutTitle: "About DJ Broiti",
    aboutText: "DJ Broiti is an AI artist from Jerusalem, creating music, visuals, and cinematic digital experiences through imagination and artificial intelligence.",
    aboutText2: "This official site brings together original songs, visual storytelling, and direct access to the full archive.",
    contactTitle: "Contact",
    contactText: "For collaborations, music, and official inquiries:",
    footerLine: "Cinematic Music · © 2026 DJ Broiti",
    emailButton: "Send Email",
    listenNow: "Listen Now",
  },
  he: {
    navHome: "בית",
    navArchive: "ארכיון",
    navEpk: "EPK",
    navAbout: "אודות",
    navContact: "יצירת קשר",
    brandSub: "הארכיון הרשמי",
    heroBadge: "האתר הרשמי עלה לאוויר",
    heroTitle1: "DJ BROITI",
    heroTitle2: "מוזיקה שנשמעת כמו סרט",
    heroText: "כל המוזיקה, הקליפים והעולם של דיג'יי ברויטי — במקום אחד.",
    watchFeatured: "הפעל עכשיו",
    featured: "קטע נבחר",
    openClip: "צפה ביוטיוב",
    fullCollection: "האוסף המלא",
    exploreAll: "לכל הקליפים",
    watchYoutube: "צפה ביוטיוב",
    epkLabel: "רשמי",
    epkTitle: "Press Kit (EPK)",
    epkBioTitle: "ביוגרפיה קצרה",
    epkBioText: "דיג'יי ברויטי (DJ Broiti) הוא יוצר מוזיקה אלקטרונית מירושלים, המשלב דיפ-האוס וטראנס מלודי עם כלים מבוססי AI ליצירת חוויות קולנועיות.",
    epkDownload: "הורד נכסי תקשורת",
    aboutTitle: "אודות דיגיי ברוייטי",
    aboutText: "דיגיי ברוייטי (DJ Broiti) הוא אמן AI מירושלים, היוצר מוזיקה, ויז'ואלים וחוויות דיגיטל קולנועיות באמצעות דמיון ובינה מלאכותית.",
    aboutText2: "האתר הרשמי מרכז במקום אחד את השירים המקוריים, הסיפור הוויזואלי והגישה המלאה לארכיון של דיג'יי ברויטי.",
    contactTitle: "יצירת קשר",
    contactText: "לשיתופי פעולה, מוזיקה ופניות רשמיות:",
    footerLine: "ברויטי · מוזיקה קולנועית · © 2026 כל הזכויות שמורות",
    emailButton: "שלח מייל",
    listenNow: "האזן עכשיו",
  },
};

const featuredClip = ALL_CLIPS.find((clip) => clip.featured) || ALL_CLIPS[0];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function SocialIconLink({ href, children, hideOnMobile = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${hideOnMobile ? "hidden sm:flex" : "flex"} w-10 h-10 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/70 hover:text-[#c9a96e] hover:border-[#c9a96e]/40 hover:bg-[#c9a96e]/10 transition-all`}
    >
      {children}
    </a>
  );
}

function FooterIconLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-white/40 hover:text-[#c9a96e] hover:scale-110 transition-all duration-300"
      aria-label="social-link"
    >
      {children}
    </a>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState("en"); 
  const isHebrew = lang === "he";
  const t = content[lang];

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    setLoaded(true);
  }, []);

  return (
    <div
      dir={isHebrew ? "rtl" : "ltr"}
      className="min-h-screen bg-[#050505] text-white overflow-x-hidden"
      style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
    >
      {/* GLOBAL FIXED BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="/dog-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050505]/75" />
        <div className="absolute top-[-10%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-[#c9a96e]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#7a5a2d]/10 blur-[120px]" />
      </div>

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className={`flex items-center gap-3 ${isHebrew ? "flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 rounded-full border border-[#c9a96e]/35 text-[#c9a96e] flex items-center justify-center font-bold">B</div>
            <div className={isHebrew ? "text-right" : "text-left"}>
              <div className="text-[13px] uppercase tracking-[0.35em] text-white/90 font-bold">DJ BROITI</div>
              <div className="text-[10px] tracking-[0.28em] text-white/38 uppercase">{t.brandSub}</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <button onClick={() => scrollToId("home")} className="hover:text-[#c9a96e] transition-colors">{t.navHome}</button>
            <button onClick={() => scrollToId("archive")} className="hover:text-[#c9a96e] transition-colors">{t.navArchive}</button>
            <button onClick={() => scrollToId("epk")} className="hover:text-[#c9a96e] transition-colors">{t.navEpk}</button>
            <button onClick={() => scrollToId("about")} className="hover:text-[#c9a96e] transition-colors">{t.navAbout}</button>
            <button onClick={() => scrollToId("contact")} className="hover:text-[#c9a96e] transition-colors">{t.navContact}</button>
          </div>
          <div className={`flex items-center gap-2 md:gap-3 ${isHebrew ? "flex-row-reverse" : ""}`}>
            <SocialIconLink href="https://www.youtube.com/channel/UCYjqM6rM9inAmbWdLBcQ86A"><YoutubeIcon /></SocialIconLink>
            <SocialIconLink href="https://open.spotify.com/search/DJ%20Broiti"><SpotifyIcon /></SocialIconLink>
            <SocialIconLink href="https://music.apple.com/il/artist/dj-broiti/1832848545"><AppleIcon /></SocialIconLink>
            <button onClick={() => setLang(lang === "he" ? "en" : "he")} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/80 transition-all hover:text-[#c9a96e]">
              {lang === "he" ? "EN" : "עב"}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="px-6 pt-32 md:pt-40 min-h-screen flex flex-col items-center md:items-start">
          <div className={`w-full max-w-7xl mx-auto transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className={`max-w-5xl ${isHebrew ? "mr-0 ml-auto text-right" : "text-left"}`}>
              <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#c9a96e]/25 bg-[#c9a96e]/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#e5c98c] font-bold">
                <MusicIcon /> {t.heroBadge}
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-[8.5rem] font-black leading-[1] tracking-tight drop-shadow-[0_0_40px_rgba(201,169,110,0.18)] uppercase">
                {t.heroTitle1}
                <span className="block mt-2 text-4xl sm:text-6xl md:text-[6rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4e3bf] to-[#c9a96e]">{t.heroTitle2}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl font-bold leading-relaxed text-white/80">{t.heroText}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={`https://www.youtube.com/watch?v=${featuredClip.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#c9a96e] text-black px-8 py-4 text-lg font-black hover:scale-105 transition-all shadow-[0_0_40px_rgba(201,169,110,0.3)]">
                  <YoutubeIcon /> {t.watchFeatured}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED CLIP */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[30px] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <a href={`https://www.youtube.com/watch?v=${featuredClip.id}`} target="_blank" rel="noopener noreferrer" className="group relative block min-h-[300px]">
                  <img src={`https://i.ytimg.com/vi/${featuredClip.id}/maxresdefault.jpg`} alt={`DJ Broiti דיג'יי ברויטי - ${featuredClip.title[lang]}`} className="w-full h-full object-cover transition-all group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
                </a>
                <div className={`p-8 flex flex-col justify-center ${isHebrew ? "text-right" : "text-left"}`}>
                  <div className="text-[11px] uppercase tracking-[0.35em] text-[#c9a96e] mb-4">{t.featured}</div>
                  <h2 className="text-3xl md:text-5xl font-black mb-8">{featuredClip.title[lang]}</h2>
                  <a href={`https://www.youtube.com/watch?v=${featuredClip.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a96e] text-black px-6 py-3 font-bold w-fit hover:scale-105 transition-all">
                    <YoutubeIcon /> {t.openClip}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHIVE SECTION */}
        <section id="archive" className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 ${isHebrew ? "md:flex-row-reverse" : ""}`}>
              <div className={isHebrew ? "text-right" : "text-left"}>
                <div className="text-[11px] uppercase tracking-[0.35em] text-[#c9a96e] mb-3">{t.fullCollection}</div>
                <h2 className="text-3xl md:text-6xl font-black">{t.exploreAll}</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {ALL_CLIPS.map((clip, i) => (
                <a key={i} href={`https://www.youtube.com/watch?v=${clip.id}`} target="_blank" rel="noreferrer" className="group block">
                  <article className="h-full rounded-[24px] border border-white/10 bg-black/40 overflow-hidden backdrop-blur-md transition-all hover:-translate-y-1">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={`https://i.ytimg.com/vi/${clip.id}/maxresdefault.jpg`} alt={`DJ Broiti דיגיי ברוייטי - ${clip.title[lang]}`} className="w-full h-full object-cover transition-all group-hover:scale-105" />
                      <div className="absolute top-4 left-4"><span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase text-[#e9d4ac]">{clip.cat[lang]}</span></div>
                    </div>
                    <div className={`p-6 ${isHebrew ? "text-right" : "text-left"}`}>
                      <h3 className="text-xl font-bold mb-4">{clip.title[lang]}</h3>
                      <div className="text-sm text-white/55 flex items-center gap-2 group-hover:text-[#c9a96e] transition-colors">
                        <YoutubeIcon /> {t.watchYoutube}
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* EPK SECTION */}
        <section id="epk" className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className={`rounded-[30px] border border-[#c9a96e]/30 bg-[#c9a96e]/5 backdrop-blur-md p-10 md:p-14 ${isHebrew ? "text-right" : "text-left"}`}>
              <div className="text-[11px] uppercase tracking-[0.35em] text-[#c9a96e] mb-4">{t.epkLabel}</div>
              <h2 className="text-3xl md:text-5xl font-black mb-8">{t.epkTitle}</h2>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white/90">{t.epkBioTitle}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">{t.epkBioText}</p>
                </div>
                <div className={`flex flex-col justify-center ${isHebrew ? "md:items-end" : "md:items-start"}`}>
                  <a href="/dj-broiti-press-kit.zip" download="DJ_Broiti_Press_Kit.zip" className="inline-flex items-center gap-3 rounded-full border border-[#c9a96e] text-[#c9a96e] px-8 py-4 font-bold hover:bg-[#c9a96e] hover:text-black transition-all">
                    <DownloadIcon /> {t.epkDownload}
                  </a>
                  <p className="text-sm text-white/40 mt-4 px-4">Includes high-res logos & press photos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & CONTACT */}
        <section className="px-6 pb-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div id="contact" className={`rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-md p-10 ${isHebrew ? "text-right" : "text-left"}`}>
              <h2 className="text-3xl md:text-5xl font-black mb-6">{t.contactTitle}</h2>
              <p className="text-white/70 mb-8">{t.contactText}</p>
              <a href="mailto:djbroiti@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[#c9a96e] text-black px-6 py-3 font-bold hover:scale-105 transition-all">
                <MailIcon /> {t.emailButton}
              </a>
            </div>
            <div id="about" className={`rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-md p-10 ${isHebrew ? "text-right" : "text-left"}`}>
              <h2 className="text-3xl md:text-5xl font-black mb-6">{t.aboutTitle}</h2>
              <p className="text-white/70">{t.aboutText}</p>
              <p className="text-white/50 mt-6">{t.aboutText2}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 pt-12 pb-28 md:pb-32 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-white/38">{t.footerLine}</div>
          <div className="flex gap-6">
            <FooterIconLink href="https://music.apple.com/il/artist/dj-broiti/1832848545"><AppleIcon /></FooterIconLink>
            <FooterIconLink href="https://open.spotify.com/search/DJ%20Broiti"><SpotifyIcon /></FooterIconLink>
            <FooterIconLink href="https://www.youtube.com/channel/UCYjqM6rM9inAmbWdLBcQ86A"><YoutubeIcon /></FooterIconLink>
          </div>
        </div>
      </footer>

      {/* --- FLOATING MUSIC PLAYER --- */}
      <div className="fixed bottom-0 left-0 w-full bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 p-3 z-50 flex items-center justify-between px-4 md:px-8">
        {/* Track Info */}
        <div className={`flex items-center gap-4 ${isHebrew ? 'flex-row-reverse' : ''}`}>
          <img
            src={`https://i.ytimg.com/vi/${featuredClip.id}/maxresdefault.jpg`}
            className="w-12 h-12 md:w-14 md:h-14 rounded-md object-cover border border-white/10 shadow-lg"
            alt={`DJ Broiti - ${featuredClip.title[lang]}`}
          />
          <div className={isHebrew ? "text-right" : "text-left"}>
            <div className="text-white font-bold text-sm md:text-base line-clamp-1">{featuredClip.title[lang]}</div>
            <div className="text-[#c9a96e] text-[10px] md:text-xs font-bold tracking-widest uppercase mt-0.5">DJ Broiti</div>
          </div>
        </div>

        {/* Streaming Buttons */}
        <div className={`flex items-center gap-2 md:gap-3 ${isHebrew ? 'flex-row-reverse' : ''}`}>
          <span className="hidden md:inline-block text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] mx-2">
            {t.listenNow}
          </span>
          <a href="https://open.spotify.com/search/DJ%20Broiti" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-[#1DB954] hover:border-[#1DB954]/50 hover:bg-[#1DB954]/10 transition-all shadow-[0_0_15px_rgba(29,185,84,0)] hover:shadow-[0_0_15px_rgba(29,185,84,0.3)]">
            <SpotifyIcon />
          </a>
          <a href="https://music.apple.com/il/artist/dj-broiti/1832848545" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-[#FA243C] hover:border-[#FA243C]/50 hover:bg-[#FA243C]/10 transition-all shadow-[0_0_15px_rgba(250,36,60,0)] hover:shadow-[0_0_15px_rgba(250,36,60,0.3)]">
            <AppleIcon />
          </a>
        </div>
      </div>
    </div>
  );
}