import { useState, useEffect } from "react";

// --- Icons Components ---
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

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const TiktokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 3c.4 2 1.6 3.5 3.5 4v3.1c-1.2 0-2.4-.3-3.5-.9v6.2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1v3.2c-.3-.1-.6-.1-1-.1-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8V3h3.2z" />
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

// --- Content and Localization ---
const content = {
  en: {
    navHome: "Home", navArchive: "Archive", navAbout: "About", navContact: "Contact",
    brandSub: "Official Archive", brandHebrew: "ברויטי", heroBadge: "Official Website",
    heroTitle1: "Music That Feels", heroTitle2: "Like Cinema",
    heroText: "A cinematic music experience blending sound, visuals, and emotion — all in one place.",
    watchFeatured: "Open on YouTube", exploreArchive: "Explore Archive", streamMusic: "Streaming Platforms",
    featured: "Featured Release", watchYoutube: "Watch on YouTube", archiveTitle: "Full Archive",
    archiveText: "Official videos, originals, remixes, and cinematic releases — curated in one premium collection.",
    contactTitle: "Contact", contactText: "For collaborations, music, and official inquiries:",
    aboutTitle: "About", aboutText: "DJ Broiti is an AI music artist from Jerusalem creating electronic music, cinematic sound, and visual storytelling experiences.",
    aboutText2: "This official site brings together the music, clips, and world of DJ Broiti in one place.",
    emailButton: "Send Email", footerLine: "Cinematic Music · © 2026 DJ Broiti",
    statsTracks: "Tracks", statsOfficial: "Official"
  },
  he: {
    navHome: "בית", navArchive: "ארכיון", navAbout: "אודות", navContact: "יצירת קשר",
    brandSub: "הארכיון הרשמי", brandHebrew: "ברויטי", heroBadge: "האתר הרשמי",
    heroTitle1: "מוזיקה שנשמעת", heroTitle2: "כמו סרט",
    heroText: "החוויה הקולנועית של DJ Broiti — מוזיקה, ויז'ואל ורגש במקום אחד.",
    watchFeatured: "פתח ביוטיוב", exploreArchive: "לארכיון המלא", streamMusic: "פלטפורמות סטרימינג",
    featured: "קטע נבחר", watchYoutube: "צפה ביוטיוב", archiveTitle: "הארכיון המלא",
    archiveText: "קליפים רשמיים, שירים מקוריים, רמיקסים והוצאות קולנועיות — כולם במקום אחד.",
    contactTitle: "יצירת קשר", contactText: "לשיתופי פעולה, מוזיקה ופניות רשמיות:",
    aboutTitle: "אודות", aboutText: "DJ Broiti הוא אמן מוזיקה מבוססת בינה מלאכותית מירושלים היוצר מוזיקה אלקטרונית, סאונד קולנועי וחוויות ויזואליות.",
    aboutText2: "כל המוזיקה, הקליפים והעולם של DJ Broiti — במקום אחד.",
    emailButton: "שלח מייל", footerLine: "ברויטי · מוזיקה קולנועית · © 2026 כל הזכויות שמורות",
    statsTracks: "קטעים", statsOfficial: "רשמי"
  }
};

// --- Helper Functions ---
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function SocialIconLink({ href, children, hideOnMobile = false }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${hideOnMobile ? "hidden sm:flex" : "flex"} w-10 h-10 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/70 hover:text-[#c9a96e] hover:border-[#c9a96e]/40 hover:bg-[#c9a96e]/10 transition-all duration-300`}>
      {children}
    </a>
  );
}

function FooterIconLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#c9a96e] hover:scale-110 transition-all duration-300">
      {children}
    </a>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm">
      <div className="text-2xl md:text-3xl font-semibold text-[#e9d4ac]">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-white/45">{label}</div>
    </div>
  );
}

// --- Main App Component ---
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState("he");
  const [videos, setVideos] = useState([]);
  const [featuredClip, setFeaturedClip] = useState(null);

  const isHebrew = lang === "he";
  const t = content[lang];

  // API Configuration
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const PLAYLIST_ID = "PLqNi4ilGBqeCX3zVNTRPxsmK3O7hKoEIx";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const formattedClips = data.items.map((item) => ({
            id: item.snippet.resourceId.videoId,
            title: {
              en: item.snippet.title,
              he: item.snippet.title,
            },
            cat: {
              en: "Official Video",
              he: "קליפ רשמי",
            },
          }));

          setVideos(formattedClips);
          setFeaturedClip(formattedClips[0]);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoaded(true);
      }
    };

    if (API_KEY) {
      fetchVideos();
    } else {
      setLoaded(true);
      console.warn("API Key is missing from Environment Variables");
    }
  }, []);

  return (
    <div dir={isHebrew ? "rtl" : "ltr"} className="min-h-screen bg-[#050505] text-white overflow-x-hidden" style={{ fontFamily: "Montserrat, sans-serif" }}>
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-[#c9a96e]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#7a5a2d]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_36%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className={`flex items-center gap-3 ${isHebrew ? "flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 rounded-full border border-[#c9a96e]/35 text-[#c9a96e] flex items-center justify-center font-semibold shadow-[0_0_30px_rgba(201,169,110,0.18)]">B</div>
            <div className={isHebrew ? "text-right" : "text-left"}>
              <div className="text-[13px] uppercase tracking-[0.35em] text-white/90 font-semibold">DJ BROITI</div>
              <div className={`text-[10px] tracking-[0.28em] text-white/38 ${isHebrew ? "" : "uppercase"}`}>{isHebrew ? `${t.brandSub} · ${t.brandHebrew}` : t.brandSub}</div>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-6 text-sm text-white/70 ${isHebrew ? "flex-row-reverse" : ""}`}>
            <button onClick={() => scrollToId("home")} className="hover:text-[#c9a96e] transition-colors">{t.navHome}</button>
            <button onClick={() => scrollToId("archive")} className="hover:text-[#c9a96e] transition-colors">{t.navArchive}</button>
            <button onClick={() => scrollToId("about")} className="hover:text-[#c9a96e] transition-colors">{t.navAbout}</button>
            <button onClick={() => scrollToId("contact")} className="hover:text-[#c9a96e] transition-colors">{t.navContact}</button>
          </div>

          <div className={`flex items-center gap-2 md:gap-3 ${isHebrew ? "flex-row-reverse" : ""}`}>
            <SocialIconLink href="https://www.youtube.com/channel/UCYjqM6rM9inAmbWdLBcQ86A"><YoutubeIcon /></SocialIconLink>
            <SocialIconLink href="https://open.spotify.com/artist/5pfzwmN1A0pYdZZiQGf15D?si"><SpotifyIcon /></SocialIconLink>
            <SocialIconLink href="https://music.apple.com/il/artist/dj-broiti/1832848545"><AppleIcon /></SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/djbroiti/" hideOnMobile><InstagramIcon /></SocialIconLink>
            <SocialIconLink href="https://www.tiktok.com/@djbroiti" hideOnMobile><TiktokIcon /></SocialIconLink>
            <button onClick={() => setLang(lang === "he" ? "en" : "he")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-[9px] text-sm font-medium text-white/80 whitespace-nowrap hover:text-[#c9a96e] hover:border-[#c9a96e]/35 transition-all">
              <GlobeIcon /> <span className="tracking-wide">{lang === "he" ? "EN" : "עב"}</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="px-6 pt-28 md:pt-36 pb-10">
          <div className="max-w-7xl mx-auto">
            <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="mb-8">
                <div className={`max-w-3xl ${isHebrew ? "mr-auto text-right" : "ml-auto text-left"}`}>
                  <div className="text-[11px] uppercase tracking-[0.35em] text-[#c9a96e] mb-4">{t.heroBadge}</div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.98]">
                    <span className="block">{t.heroTitle1}</span>
                    <span className="block text-[#ead7b0]">{t.heroTitle2}</span>
                  </h1>
                  <div className={`mt-5 max-w-2xl text-sm md:text-base leading-8 text-white/65 ${isHebrew ? "mr-auto" : ""}`}>{t.heroText}</div>
                </div>
              </div>

              {featuredClip && (
                <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] overflow-hidden shadow-[0_20px_90px_rgba(0,0,0,0.6)]">
                  <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative min-h-[320px] lg:min-h-[500px] bg-black">
                      <iframe src={`https://www.youtube.com/embed/${featuredClip.id}?rel=0&modestbranding=1`} title={featuredClip.title[lang]} className="absolute inset-0 w-full h-full" allowFullScreen />
                    </div>
                    <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${isHebrew ? "text-right" : "text-left"}`}>
                      <div className="text-[11px] uppercase tracking-[0.35em] text-[#c9a96e] mb-4">{t.featured}</div>
                      <h2 className="text-3xl md:text-5xl font-semibold leading-tight">{featuredClip.title[lang]}</h2>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <a href={`https://www.youtube.com/watch?v=${featuredClip.id}`} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-[#c9a96e] text-black px-6 py-3 font-semibold shadow-[0_0_25px_rgba(201,169,110,0.4)] hover:scale-105 transition-all">
                          <YoutubeIcon /> {t.watchFeatured}
                        </a>
                        <button onClick={() => scrollToId("archive")} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/85 hover:text-[#c9a96e] transition-all">
                          <MusicIcon /> {t.exploreArchive}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <section id="archive" className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className={`mb-8 ${isHebrew ? "text-right" : "text-left"}`}>
              <div className="text-[11px] uppercase tracking-[0.35em] text-[#c9a96e] mb-3">{isHebrew ? "האוסף המלא" : "Full Collection"}</div>
              <h2 className="text-3xl md:text-5xl font-semibold">{t.archiveTitle}</h2>
              <p className="mt-4 max-w-2xl text-white/60 leading-7">{t.archiveText}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {videos.map((clip, i) => (
                <a key={`${clip.id}-${i}`} href={`https://www.youtube.com/watch?v=${clip.id}`} target="_blank" className="group block">
                  <article className="h-full rounded-[24px] border border-white/10 bg-white/[0.04] overflow-hidden hover:border-[#c9a96e]/35 transition-all duration-500 shadow-[0_12px_50px_rgba(0,0,0,0.35)]">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={`https://i.ytimg.com/vi/${clip.id}/maxresdefault.jpg`} alt={clip.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-all" onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${clip.id}/hqdefault.jpg`; }} />
                      <div className="absolute top-4 right-4"><span className="inline-flex rounded-full border border-[#c9a96e]/30 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#e9d4ac]">{clip.cat[lang]}</span></div>
                    </div>
                    <div className={`p-5 md:p-6 ${isHebrew ? "text-right" : "text-left"}`}>
                      <h3 className="text-xl leading-tight font-medium text-white group-hover:text-[#e9d4ac]">{clip.title[lang]}</h3>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/55 group-hover:text-[#c9a96e]"><YoutubeIcon /> {t.watchYoutube}</div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-12 mt-8">
        <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 ${isHebrew ? "md:flex-row-reverse" : ""}`}>
          <div className={isHebrew ? "text-right" : "text-left"}>
            <div className="text-sm tracking-[0.3em] uppercase text-white/80">DJ BROITI</div>
            <div className="text-xs text-white/38 mt-2">{t.footerLine}</div>
          </div>
          <div className="flex items-center gap-5">
            <FooterIconLink href="#"><AppleIcon /></FooterIconLink>
            <FooterIconLink href="#"><SpotifyIcon /></FooterIconLink>
            <FooterIconLink href="#"><YoutubeIcon /></FooterIconLink>
          </div>
        </div>
      </footer>
    </div>
  );
}