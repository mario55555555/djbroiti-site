import { useState, useEffect } from "react";

const YoutubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const MusicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const TiktokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 3c.4 2 1.6 3.5 3.5 4v3.1c-1.2 0-2.4-.3-3.5-.9v6.2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1v3.2c-.3-.1-.6-.1-1-.1-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8V3h3.2z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.59 14.52a.62.62 0 0 1-.86.2c-2.36-1.44-5.33-1.76-8.84-.95a.62.62 0 1 1-.28-1.21c3.83-.88 7.1-.52 9.77 1.11.3.18.39.56.21.85zm1.23-2.73a.78.78 0 0 1-1.07.26c-2.7-1.66-6.81-2.14-10-1.16a.78.78 0 1 1-.46-1.49c3.64-1.12 8.16-.58 11.28 1.34.37.23.49.71.25 1.05zm.11-2.84c-3.23-1.92-8.56-2.1-11.64-1.16a.94.94 0 0 1-.55-1.79c3.54-1.08 9.43-.87 13.15 1.34a.94.94 0 0 1-.96 1.61z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.37 12.61c.02 2.14 1.88 2.85 1.9 2.86-.02.05-.3 1.03-1 2.04-.6.88-1.24 1.75-2.22 1.77-.96.02-1.27-.57-2.37-.57-1.1 0-1.44.55-2.35.59-.95.03-1.67-.94-2.28-1.82-1.24-1.79-2.18-5.05-.91-7.26.63-1.1 1.76-1.8 2.98-1.82.93-.02 1.81.63 2.37.63.56 0 1.62-.77 2.73-.66.47.02 1.79.19 2.64 1.43-.07.04-1.58.92-1.56 2.81zM14.8 5.8c.5-.61.84-1.46.75-2.3-.72.03-1.58.48-2.1 1.09-.46.53-.86 1.39-.75 2.2.8.06 1.61-.41 2.1-.99z" />
  </svg>
);

const ALL_CLIPS = [
  { title: { en: "Lo Tzrikha Otkha (Club Remix)", he: "לא צריכה אותך (Club Remix)" }, id: "3WGISHHzDb0", cat: { en: "Club Remix", he: "קלאב רמיקס" } },
  { title: { en: "Lo Tzrikha Otkha (I Don't Need You)", he: "לא צריכה אותך" }, id: "DueG6uK25mU", cat: { en: "Latest Release", he: "הוצאה חדשה" }, featured: true },
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
    navAbout: "About",
    navContact: "Contact",
    brandSub: "Official Archive",
    brandHebrew: "ברויטי",
    heroBadge: "Official Website Live",
    heroTitle1: "DJ BROITI",
    heroTitle2: "Music That Feels Like Cinema",
    heroText: "All the music, visuals, and world of DJ Broiti — in one place.",
    watchFeatured: "Play Now",
    exploreArchive: "Explore All Clips",
    clips: "Clips",
    official: "Official",
    cinematic: "Cinematic",
    featured: "Featured Release",
    openClip: "Open Clip",
    fullCollection: "Full Collection",
    exploreAll: "Explore All Clips",
    watchYoutube: "Watch on YouTube",
    aboutTitle: "About",
    aboutText: "DJ Broiti is an AI artist from Jerusalem, creating music, visuals, and cinematic digital experiences through imagination and artificial intelligence.",
    aboutText2: "This official site brings together original songs, visual storytelling, and direct access to the full archive.",
    contactTitle: "Contact",
    contactText: "For collaborations, music, and official inquiries:",
    footerLine: "Cinematic Music · © 2026 DJ Broiti",
    footerTag: "Official Archive",
    emailButton: "Send Email",
  },
  he: {
    navHome: "בית",
    navArchive: "ארכיון",
    navAbout: "אודות",
    navContact: "יצירת קשר",
    brandSub: "הארכיון הרשמי",
    brandHebrew: "ברויטי",
    heroBadge: "האתר הרשמי עלה לאוויר",
    heroTitle1: "DJ BROITI",
    heroTitle2: "מוזיקה שנשמעת כמו סרט",
    heroText: "כל המוזיקה, הקליפים והעולם של DJ Broiti — במקום אחד.",
    watchFeatured: "הפעל עכשיו",
    exploreArchive: "לכל הקליפים",
    clips: "קליפים",
    official: "רשמי",
    cinematic: "קולנועי",
    featured: "קטע נבחר",
    openClip: "צפה ביוטיוב",
    fullCollection: "האוסף המלא",
    exploreAll: "לכל הקליפים",
    watchYoutube: "צפה ביוטיוב",
    aboutTitle: "אודות",
    aboutText: "DJ Broiti הוא אמן AI מירושלים, היוצר מוזיקה, ויז'ואלים וחוויות דיגיטל קולנועיות באמצעות דמיון ובינה מלאכותית.",
    aboutText2: "האתר הרשמי מרכז במקום אחד את השירים המקוריים, הסיפור הוויזואלי והגישה המלאה לארכיון.",
    contactTitle: "יצירת קשר",
    contactText: "לשיתופי פעולה, מוזיקה ופניות רשמיות:",
    footerLine: "ברויטי · מוזיקה קולנועית · © 2026 כל הזכויות שמורות",
    footerTag: "הארכיון הרשמי",
    emailButton: "שלח מייל",
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
      className={`${hideOnMobile ? "hidden sm:flex" : "flex"} w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/70 hover:text-[#c9a96e] hover:border-[#c9a96e]/40 hover:bg-[#c9a96e]/10 transition-all`}
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
    setLoaded(true);
  }, []);

  return (
    <div
      dir={isHebrew ? "rtl" : "ltr"}
      className="min-h-screen bg-[#050505] text-white overflow-x-hidden"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-[#c9a96e]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#7a5a2d]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="max-w-[90rem] mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className={`flex items-center gap-4 ${isHebrew ? "flex-row-reverse" : ""}`}>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#c9a96e]/40 text-[#c9a96e] flex items-center justify-center text-xl md:text-2xl font-bold shadow-[0_0_30px_rgba(201,169,110,0.18)]">
              B
            </div>

            <div className={isHebrew ? "text-right" : "text-left"}>
              <div className="text-lg md:text-xl uppercase tracking-[0.35em] text-white/90 font-bold">
                DJ BROITI
              </div>
              <div className={`text-xs md:text-sm tracking-[0.28em] text-white/50 mt-1 ${isHebrew ? "" : "uppercase"} font-medium`}>
                {isHebrew ? `${t.brandSub} · ${t.brandHebrew}` : t.brandSub}
              </div>
            </div>
          </div>

          <div className={`hidden lg:flex items-center gap-10 text-lg font-medium text-white/80 ${isHebrew ? "flex-row-reverse" : ""}`}>
            <button onClick={() => scrollToId("home")} className="hover:text-[#c9a96e] transition-colors">
              {t.navHome}
            </button>
            <button onClick={() => scrollToId("archive")} className="hover:text-[#c9a96e] transition-colors">
              {t.navArchive}
            </button>
            <button onClick={() => scrollToId("about")} className="hover:text-[#c9a96e] transition-colors">
              {t.navAbout}
            </button>
            <button onClick={() => scrollToId("contact")} className="hover:text-[#c9a96e] transition-colors">
              {t.navContact}
            </button>
          </div>

          <div className={`flex items-center gap-3 md:gap-4 ${isHebrew ? "flex-row-reverse" : ""}`}>
            <SocialIconLink href="https://www.youtube.com/channel/UCYjqM6rM9inAmbWdLBcQ86A">
              <YoutubeIcon />
            </SocialIconLink>

            <SocialIconLink href="https://open.spotify.com/artist/5pfzwmN1A0pYdZZiQGf15D?si">
              <SpotifyIcon />
            </SocialIconLink>

            <SocialIconLink href="https://music.apple.com/il/artist/dj-broiti/1832848545">
              <AppleIcon />
            </SocialIconLink>

            <button
              onClick={() => setLang(lang === "he" ? "en" : "he")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-bold text-white whitespace-nowrap hover:text-[#c9a96e] hover:border-[#c9a96e]/50 transition-all"
            >
              <GlobeIcon />
              <span className="tracking-wide">
                {lang === "he" ? "ENGLISH" : "עברית"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="home" className="px-6 pt-44 md:pt-60 pb-20 md:pb-32">
          <div
            className={`max-w-[90rem] mx-auto transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className={`max-w-6xl ${isHebrew ? "mr-0 ml-auto text-right" : "text-left"}`}>
              <div className="inline-flex items-center gap-3 mb-8 md:mb-10 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 px-6 py-3 text-sm md:text-base uppercase tracking-[0.3em] font-medium text-[#e5c98c]">
                <MusicIcon />
                {t.heroBadge}
              </div>

              {/* Increased size here */}
              <h1 className="text-[5rem] sm:text-[6.5rem] md:text-[8.5rem] font-bold leading-[0.9] tracking-[-0.04em] drop-shadow-[0_0_40px_rgba(201,169,110,0.2)]">
                {t.heroTitle1}
                <span className="block mt-4 md:mt-6 text-[3.5rem] sm:text-[4.5rem] md:text-[6.5rem] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4e3bf] to-[#c9a96e] drop-shadow-[0_0_35px_rgba(201,169,110,0.18)]">
                  {t.heroTitle2}
                </span>
              </h1>

              {isHebrew && (
                <div className="mt-6 md:mt-8 text-2xl md:text-3xl text-white/50 tracking-[0.35em] font-bold">
                  ברויטי
                </div>
              )}

              <div className="mt-10 md:mt-12 w-36 h-[3px] bg-gradient-to-r from-[#c9a96e] to-transparent opacity-80" />

              {/* Increased paragraph size */}
              <p className="mt-10 md:mt-12 max-w-4xl text-2xl md:text-4xl leading-relaxed text-white/90 font-medium">
                {t.heroText}
              </p>

              <div className="mt-10 max-w-3xl text-xl md:text-2xl text-white/60 leading-relaxed">
                <p>
                  DJ Broiti is an AI music artist creating electronic music, cinematic sound,
                  and visual storytelling experiences.
                </p>
              </div>

              <div className={`mt-14 flex flex-wrap gap-6 ${isHebrew ? "justify-start" : ""}`}>
                {/* Button slightly bigger */}
                <a
                  href={`https://www.youtube.com/watch?v=${featuredClip.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 rounded-full bg-[#c9a96e] text-black px-12 py-5 text-2xl font-bold hover:scale-[1.03] transition-all shadow-[0_0_40px_rgba(201,169,110,0.3)]"
                >
                  <YoutubeIcon />
                  {t.watchFeatured}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-[90rem] mx-auto">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <a
                  href={`https://www.youtube.com/watch?v=${featuredClip.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block min-h-[450px]"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${featuredClip.id}/maxresdefault.jpg`}
                    alt={featuredClip.title[lang]}
                    className="w-full h-full object-cover min-h-[450px] lg:min-h-[550px] group-hover:scale-[1.03] transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.src = `https://i.ytimg.com/vi/${featuredClip.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                </a>

                <div className={`p-10 md:p-14 lg:p-16 flex flex-col justify-center ${isHebrew ? "text-right" : "text-left"}`}>
                  <div className="text-base md:text-lg uppercase tracking-[0.35em] text-[#c9a96e] mb-6 font-bold">
                    {t.featured}
                  </div>

                  {/* Increased Title here */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {featuredClip.title[lang]}
                  </h2>

                  <div className="mt-8 w-24 h-[3px] bg-gradient-to-r from-[#c9a96e] to-transparent opacity-70" />

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={`https://www.youtube.com/watch?v=${featuredClip.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full bg-[#c9a96e] text-black px-9 py-4 text-xl font-bold transition hover:scale-105"
                    >
                      <YoutubeIcon />
                      {t.openClip}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="archive" className="px-6 pt-16 pb-10">
          <div className={`max-w-[90rem] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8 ${isHebrew ? "md:flex-row-reverse" : ""}`}>
            <div className={isHebrew ? "text-right" : "text-left"}>
              <div className="text-lg md:text-xl uppercase tracking-[0.35em] text-[#c9a96e] mb-4 font-bold">
                {t.fullCollection}
              </div>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                {t.exploreAll}
              </h2>
            </div>

            <div className="w-36 h-[3px] bg-white/10 mt-8 md:mt-0" />
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ALL_CLIPS.map((clip, i) => (
              <a
                key={`${clip.id}-${i}`}
                href={`https://www.youtube.com/watch?v=${clip.id}`}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.04] overflow-hidden backdrop-blur-sm hover:border-[#c9a96e]/40 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                  <div className="relative aspect-video overflow-hidden bg-[#111]">
                    <img
                      src={`https://i.ytimg.com/vi/${clip.id}/maxresdefault.jpg`}
                      alt={clip.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.src = `https://i.ytimg.com/vi/${clip.id}/hqdefault.jpg`;
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className={`absolute top-5 ${isHebrew ? "right-5" : "left-5"}`}>
                      <span className="inline-flex rounded-full border border-[#c9a96e]/40 bg-black/60 backdrop-blur-md px-4 py-1.5 text-sm uppercase tracking-[0.25em] font-bold text-[#e9d4ac]">
                        {clip.cat[lang]}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                      <div className="w-20 h-20 rounded-full bg-[#c9a96e]/95 text-black flex items-center justify-center shadow-[0_0_40px_rgba(201,169,110,0.3)]">
                        <YoutubeIcon />
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 md:p-8 ${isHebrew ? "text-right" : "text-left"}`}>
                    <div className="w-12 h-[2px] bg-white/10 mb-5" />
                    {/* Increased grid text size slightly */}
                    <h3 className="text-3xl leading-snug font-bold text-white group-hover:text-[#e9d4ac] transition-colors duration-300">
                      {clip.title[lang]}
                    </h3>
                    <div className="mt-6 inline-flex items-center gap-3 text-xl font-medium text-white/60 group-hover:text-[#c9a96e] transition-colors duration-300">
                      <YoutubeIcon />
                      {t.watchYoutube}
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-10">
            <div
              id="contact"
              className={`rounded-[36px] border border-white/10 bg-white/[0.04] p-10 md:p-14 ${isHebrew ? "text-right" : "text-left"}`}
            >
              <div className="text-lg uppercase tracking-[0.35em] text-[#c9a96e] mb-6 font-bold">
                {t.contactTitle}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                {t.contactTitle}
              </h2>
              <p className="text-2xl text-white/80 leading-relaxed">{t.contactText}</p>

              <div className={`mt-10 flex flex-wrap gap-5 ${isHebrew ? "justify-start" : ""}`}>
                <a
                  href="mailto:djbroiti@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-[#c9a96e] text-black px-9 py-5 text-xl font-bold hover:scale-[1.03] transition-all"
                >
                  <MailIcon />
                  {t.emailButton}
                </a>

                <a
                  href="mailto:djbroiti@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-9 py-5 text-xl text-white/80 font-medium hover:text-[#c9a96e] hover:border-[#c9a96e]/40 transition-all"
                >
                  <MailIcon />
                  djbroiti@gmail.com
                </a>
              </div>
            </div>

            <div
              id="about"
              className={`rounded-[36px] border border-white/10 bg-white/[0.04] p-10 md:p-14 ${isHebrew ? "text-right" : "text-left"}`}
            >
              <div className="text-lg uppercase tracking-[0.35em] text-[#c9a96e] mb-6 font-bold">
                {t.aboutTitle}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                {t.aboutTitle}
              </h2>
              <p className="text-2xl text-white/80 leading-relaxed">{t.aboutText}</p>
              <div className="mt-8 w-28 h-[3px] bg-gradient-to-r from-[#c9a96e] to-transparent opacity-60" />
              <p className="text-xl text-white/60 leading-relaxed mt-8 font-medium">{t.aboutText2}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-12 mt-12">
        <div className={`max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 ${isHebrew ? "md:flex-row-reverse" : ""}`}>
          <div className={isHebrew ? "text-right" : "text-left"}>
            <div className="text-xl tracking-[0.3em] uppercase text-white/80 font-bold">
              DJ BROITI
            </div>
            <div className="text-base text-white/50 mt-3 font-medium">
              {t.footerLine}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <FooterIconLink href="https://music.apple.com/il/artist/dj-broiti/1832848545">
              <AppleIcon />
            </FooterIconLink>

            <FooterIconLink href="https://open.spotify.com/artist/5pfzwmN1A0pYdZZiQGf15D?si">
              <SpotifyIcon />
            </FooterIconLink>

            <FooterIconLink href="https://www.youtube.com/channel/UCYjqM6rM9inAmbWdLBcQ86A">
              <YoutubeIcon />
            </FooterIconLink>
          </div>
        </div>
      </footer>
    </div>
  );
}