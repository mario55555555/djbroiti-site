import React from "react";

export default function DjBroitiSite() {
  const [lang, setLang] = React.useState("he");
  const isHebrew = lang === "he";
  const enableEmbeds = false; // שנה ל-true רק באתר החי
  const siteContent = {
  tracks: [
    { title: "לבדי", type: "Latest Release • 2026" },
    { title: "שומר עליי", type: "Single • 2026" },
    { title: "חלמתי עלייך", type: "Single • 2026" },
    { title: "שבריר של שנייה", type: "Single • 2026" },
    { title: "אי שם", type: "Single • 2026" },
    { title: "Somebody Else", type: "Single • 2026" },
    { title: "Be as One", type: "Single • 2025" },
    { title: "Healing My Soul", type: "Single • 2025" },
  ],
  videos: [
    {
      title: "Shadow in the Kitchen",
      kind: "טריילר קולנועי",
      embed: "https://www.youtube.com/embed/q8yf6nkUP2k",
      watch: "https://www.youtube.com/watch?v=q8yf6nkUP2k",
      thumbnail: "https://i.ytimg.com/vi/q8yf6nkUP2k/hqdefault.jpg",
    },
    {
      title: "שומר עליי",
      kind: "קליפ רשמי",
      embed: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      watch: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
      thumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "אי שם",
      kind: "דיפ האוס רגשי",
      embed: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      watch: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  socials: [
    { name: "YouTube", href: "https://m.youtube.com/channel/UCYjqM6rM9inAmbWdLBcQ86A" },
    { name: "Spotify", href: "https://open.spotify.com/artist/5pfzwmN1A0pYdZZiQGf15D" },
    { name: "Apple Music", href: "https://music.apple.com/il/artist/dj-broiti/1832848545" },
    { name: "TikTok", href: "https://www.tiktok.com/@djbroiti" },
    { name: "Instagram", href: "https://www.instagram.com/djbroiti/" },
  ],
  heroVideo: "/ElevenLabs_video_veed-fabric_2026-04-06T11_59_00.mp4",
};

  const tracks = siteContent.tracks;
  const videos = siteContent.videos;
  const socials = siteContent.socials;

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white overflow-x-hidden text-right">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(36,70,255,0.32),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(141,34,255,0.18),_transparent_22%),linear-gradient(to_bottom,_#05060a,_#000_45%,_#02030a)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.06),transparent)] [background-size:1200px_100%] animate-pulse" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xl md:text-2xl font-semibold tracking-[0.35em]">{lang === "he" ? "די־ג׳יי ברויטי" : "DJ BROITI"}</div>
            <div className="text-xs text-white/50 tracking-[0.25em] mt-1">{lang === "he" ? "האתר הרשמי" : "OFFICIAL SITE"}</div>
          </div>
          <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#music" className="hover:text-white transition">{lang === "he" ? "מוזיקה" : "Music"}</a>
            <a href="#videos" className="hover:text-white transition">{lang === "he" ? "וידאו" : "Videos"}</a>
            <a href="#about" className="hover:text-white transition">{lang === "he" ? "אודות" : "About"}</a>
            <a href="#connect" className="hover:text-white transition">{lang === "he" ? "קישורים" : "Connect"}</a>
          </nav>
            <button
              onClick={() => setLang(lang === "he" ? "en" : "he")}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.18em] text-white/80 hover:bg-white/10 transition"
            >
              {lang === "he" ? "EN" : "עב"}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-24 md:pt-36 md:pb-28">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70 mb-6">
                {lang === "he" ? "מוזיקה • רגש • בינה מלאכותית" : "MUSIC • EMOTION • ARTIFICIAL INTELLIGENCE"}
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[0.92] tracking-[0.18em]">
                {lang === "he" ? <>די־ג׳יי<br />ברויטי</> : <>DJ<br />BROITI</>}
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
                {lang === "he"
                  ? "מוזיקה מקורית, ויזואליה קולנועית וזהות ייחודית שנבנית עם בינה מלאכותית. אמן מהדור החדש שבונה עולמות דרך סאונד, רגש וסיפור חזותי."
                  : "Original music, cinematic visuals, and a distinct AI-driven identity. A new generation artist building worlds through sound, emotion, and visual storytelling."}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#music" className="rounded-2xl bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition">
                  {lang === "he" ? "להיכנס לחוויה" : "Enter Experience"}
                </a>
                <a href="#videos" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
                  {lang === "he" ? "לצפות בעולם הוויזואלי" : "Watch Visual World"}
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">AI</div>
                  <div className="text-sm text-white/60 mt-1">{lang === "he" ? "זהות ויזואלית" : "Visual identity"}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">Music</div>
                  <div className="text-sm text-white/60 mt-1">{lang === "he" ? "ריליסים מקוריים" : "Original releases"}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">Cinema</div>
                  <div className="text-sm text-white/60 mt-1">{lang === "he" ? "ויזואליה סיפורית" : "Story-driven visuals"}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 via-violet-500/10 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-950/40">
                <div className="aspect-[4/5] rounded-[1.6rem] border border-white/10 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(79,118,255,0.28),_transparent_25%),linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02)),linear-gradient(135deg,_#080a14,_#10162d_48%,_#07070b)] p-0 flex flex-col justify-between">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(85,110,255,0.25),_transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.55))] z-10 pointer-events-none" />
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
                    >
                      <source src={siteContent.heroVideo} type="video/mp4" />
                    </video>
                    <div className="absolute top-0 left-0 right-0 z-20 p-6 flex items-center justify-between text-xs tracking-[0.25em] text-white/55">
                      <span>{lang === "he" ? "זהות ויזואלית חיה" : "LIVE VISUAL IDENTITY"}</span>
                      <span>2026</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      <div className="text-white/50 text-sm tracking-[0.25em] mb-3">{lang === "he" ? "הווייב הנוכחי" : "CURRENT MOOD"}</div>
                      <div className="text-3xl md:text-4xl font-semibold leading-tight">
                        {lang === "he" ? <>רגש עמוק.<br />אסתטיקה כחולה וקולנועית.<br />נשמה דיגיטלית.</> : <>Deep emotion.<br />Blue-toned cinema.<br />Digital soul.</>}
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md p-4">
                          <div className="text-xs text-white/50 tracking-[0.2em]">{lang === "he" ? "סגנון" : "STYLE"}</div>
                          <div className="mt-2 text-sm">{lang === "he" ? "אלקטרוני קולנועי" : "Cinematic electronic"}</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md p-4">
                          <div className="text-xs text-white/50 tracking-[0.2em]">{lang === "he" ? "מיקום" : "ORIGIN"}</div>
                          <div className="mt-2 text-sm">{lang === "he" ? "ירושלים" : "Jerusalem"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="music" className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="text-sm tracking-[0.35em] text-blue-300/80 mb-3">{lang === "he" ? "להאזין" : "LISTEN"}</div>
              <h2 className="text-3xl md:text-5xl font-semibold">{lang === "he" ? "חוויית המוזיקה" : "Music Experience"}</h2>
            </div>
            <p className="max-w-2xl text-white/65 text-lg">
              {lang === "he" ? "כל טראק נושא אווירה, רגש ושילוב ייחודי של סאונד אלקטרוני עם עומק קולנועי." : "Every track carries atmosphere, emotion, and a signature blend of electronic sound with cinematic depth."}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm tracking-[0.25em] text-white/45">{lang === "he" ? "ריליסים נבחרים" : "FEATURED RELEASES"}</div>
                  <div className="text-2xl font-semibold mt-2">{lang === "he" ? "קטעים נבחרים" : "Selected Tracks"}</div>
                </div>
                <div className="text-xs text-white/40">{lang === "he" ? "הקישורים האמיתיים שלך כבר מחוברים למטה" : "Your live platform links are already connected below"}</div>
              </div>
              <div className="space-y-3">
                {tracks.map((track, i) => (
                  <div key={track.title} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/25 border border-white/10 flex items-center justify-center text-sm text-white/70">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="font-medium">{track.title}</div>
                        <div className="text-sm text-white/50">{track.type}</div>
                      </div>
                    </div>
                    <a href="https://music.apple.com/il/artist/dj-broiti/1832848545" className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/10 transition inline-block">
                      {lang === "he" ? "האזנה" : "Listen"}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 md:p-8">
              <div className="text-sm tracking-[0.25em] text-white/45">{lang === "he" ? "החתימה" : "SIGNATURE"}</div>
              <div className="text-2xl font-semibold mt-2">{lang === "he" ? "רגש אנושי. יצירה דיגיטלית." : "Human feeling. Digital creation."}</div>
              <p className="mt-5 text-white/65 leading-relaxed">
                {lang === "he" ? "האזור הזה מיועד להטמעת סטרימינג, ריליס מרכזי, עטיפת סינגל חדשה או הכרזה קצרה על הפרויקט הבא שלך." : "This section is built for your streaming embed, featured release, new single artwork, or a short announcement for your next project."}
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <div className="aspect-[12/10] rounded-[1.2rem] overflow-hidden border border-white/10 bg-black">
                  {enableEmbeds ? (
                  <iframe
                    title="DJ Broiti Spotify"
                    src="https://open.spotify.com/embed/artist/5pfzwmN1A0pYdZZiQGf15D?utm_source=generator&theme=0"
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center">
                    <div>
                      <div className="text-2xl font-semibold">Spotify</div>
                      <p className="mt-3 text-white/60 leading-relaxed">
                        {lang === "he" ? "במצב תצוגה מקדימה ההטמעות כבויות כדי שלא תקבל בקשות רשת חוזרות." : "Embeds are disabled in preview mode so you do not get repeated network access prompts."}
                      </p>
                      <a
                        href="https://open.spotify.com/artist/5pfzwmN1A0pYdZZiQGf15D"
                        className="inline-block mt-5 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm hover:bg-white/15 transition"
                      >
                        {lang === "he" ? "פתיחת Spotify" : "Open Spotify"}
                      </a>
                    </div>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="text-sm tracking-[0.35em] text-violet-300/80 mb-3">{lang === "he" ? "לצפות" : "WATCH"}</div>
              <h2 className="text-3xl md:text-5xl font-semibold">{lang === "he" ? "העולם הוויזואלי" : "Visual World"}</h2>
            </div>
            <p className="max-w-2xl text-white/65 text-lg">
              {lang === "he" ? "לא רק שירים. יקום קולנועי של טריילרים, ויזואליות וסיפור קצר־פורמט שנבנה בעזרת AI." : "Not just songs. A cinematic universe of trailers, visuals, and short-form storytelling powered by AI."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div key={video.title} className="group rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden hover:-translate-y-1 transition duration-300">
                <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-black">
                  {enableEmbeds ? (
                    <iframe
                      title={video.title}
                      src={video.embed}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <a href={video.watch} className="relative block w-full h-full overflow-hidden">
                      <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                      <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/35 backdrop-blur-md px-3 py-1 text-xs text-white/80">
                        YouTube
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full border border-white/20 bg-white/15 backdrop-blur-md flex items-center justify-center text-2xl shadow-2xl">
                          ▶
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 left-0 p-5 text-right">
                        <div className="text-sm text-white/70 mb-1">{video.kind}</div>
                        <div className="text-2xl font-semibold text-white">{video.title}</div>
                      </div>
                    </a>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-white/60 leading-relaxed">
                    {lang === "he"
                      ? "הכרטיס הזה נפתח ישירות ליוטיוב בתצוגה מקדימה, ובאתר החי אפשר להפעיל הטמעה מלאה בלחיצה אחת."
                      : "This card opens directly on YouTube in preview mode, and can switch to full embeds on the live site."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-stretch">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
              <div className="text-sm tracking-[0.35em] text-white/45 mb-4">{lang === "he" ? "מי זה ברויטי?" : "WHO IS BROITI?"}</div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">{lang === "he" ? "אמן מהדור החדש שבונה עולמות." : "A new generation artist building worlds."}</h2>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 md:p-10">
              <p className="text-lg md:text-xl text-white/75 leading-relaxed">
                {lang === "he"
                ? "די־ג׳יי ברויטי הוא יוצר מוזיקה ואמן ויזואלי עצמאי, שמשלב בין סאונד אלקטרוני לבין בינה מלאכותית. מירושלים, הוא יוצר חיבור בין רגש עמוק, אווירה קולנועית וזהות דיגיטלית עם מבט קדימה."
                : "DJ Broiti is an independent music creator and visual artist blending electronic sound with artificial intelligence. Based in Jerusalem, his work combines deep emotion, cinematic atmosphere, and a forward-looking digital identity."}
              </p>
              <p className="mt-6 text-lg md:text-xl text-white/65 leading-relaxed">
                {lang === "he" ? "הוא לא רק מוציא טראקים. הוא בונה חוויות שלמות שבהן מוזיקה, תמונה ורגש נעים יחד בתוך עולם אחד." : "He does not just release tracks. He builds immersive experiences where music, image, and feeling move together as one world."}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(80,120,255,0.18),_transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm tracking-[0.35em] text-blue-300/80 mb-4">{lang === "he" ? "החתימה" : "THE SIGNATURE"}</div>
              <h2 className="text-3xl md:text-5xl font-semibold">{lang === "he" ? "ה־AI הוא לא רק כלי. הוא חלק מהזהות." : "AI is not just the tool. It is part of the identity."}</h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                {lang === "he" ? "האזור הזה נועד למניפסט שלך, לטריילר המרכזי שלך או לקמפיין הריליס הבא. הוא צריך להרגיש כמו במה דיגיטלית, לא כמו אתר רגיל." : "This space is designed for your manifesto, your biggest trailer, or your next release campaign. It should feel like a digital stage, not a regular website."}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mt-10">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <div className="text-xs tracking-[0.25em] text-white/45 mb-3">{lang === "he" ? "פלייליסט רשמי" : "OFFICIAL PLAYLIST"}</div>
                <div className="aspect-video rounded-[1.2rem] overflow-hidden border border-white/10 bg-black">
                  {enableEmbeds ? (
                  <iframe
                    title="DJ Broiti Official Releases"
                    src="https://www.youtube.com/embed/videoseries?list=PLqNi4ilGBqeCX3zVNTRPxsmK3O7hKoEIx"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center">
                    <div>
                      <div className="text-xl font-semibold">YouTube Playlist</div>
                      <p className="mt-3 text-white/60 leading-relaxed">
                        {lang === "he" ? "גם הפלייליסט הועבר למצב בטוח לתצוגה מקדימה." : "The playlist is also in safe preview mode."}
                      </p>
                      <a
                        href="https://www.youtube.com/playlist?list=PLqNi4ilGBqeCX3zVNTRPxsmK3O7hKoEIx"
                        className="inline-block mt-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm hover:bg-white/15 transition"
                      >
                        {lang === "he" ? "פתיחת הפלייליסט" : "Open Playlist"}
                      </a>
                    </div>
                  </div>
                )}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <div className="text-xs tracking-[0.25em] text-white/45 mb-3">{lang === "he" ? "ערוץ מרכזי" : "FEATURED CHANNEL"}</div>
                <div className="aspect-video rounded-[1.2rem] overflow-hidden border border-white/10 bg-black flex items-center justify-center p-6 text-center">
                  <div>
                    <div className="text-2xl font-semibold">די־ג׳יי ברויטי</div>
                    <p className="mt-3 text-white/60 leading-relaxed">
                      {lang === "he" ? "אפשר לשלב כאן ריל קולנועי קצר, אנימציית לוגו או טיזר מותאם כדי ליצור רושם ראשון חזק במיוחד." : "Add a short cinematic reel, a logo animation, or a custom teaser MP4 here for the strongest first impression."}
                    </p>
                    <a
                      href="https://m.youtube.com/channel/UCYjqM6rM9inAmbWdLBcQ86A"
                      className="inline-block mt-5 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm hover:bg-white/15 transition"
                    >
                      {lang === "he" ? "מעבר לערוץ היוטיוב" : "Open YouTube Channel"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="mx-auto max-w-7xl px-6 pt-20 pb-28">
          <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="text-sm tracking-[0.35em] text-violet-300/80 mb-4">{lang === "he" ? "להצטרף למסע" : "JOIN THE JOURNEY"}</div>
            <div className="flex flex-col lg:flex-row gap-8 lg:items-end lg:justify-between">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold">{lang === "he" ? "להתחבר לדי־ג׳יי ברויטי" : "Connect with DJ Broiti"}</h2>
                <p className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">
                  {lang === "he" ? "חבר את הקהל שלך לכל הפלטפורמות ממקום אחד יוקרתי. הכפתורים למטה מובילים לקישורים הרשמיים שלך." : "Link your audience to every platform from one premium destination. Replace the buttons below with your official links."}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="rounded-2xl border border-white/10 bg-black/25 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-white/45">
          <div>{lang === "he" ? "© 2026 די־ג׳יי ברויטי. כל הזכויות שמורות." : "© 2026 DJ BROITI. All rights reserved."}</div>
          <div>{lang === "he" ? "נבנה לזהות אמן קולנועית, עוצמתית ומקומית." : "Built for a cinematic international artist identity."}</div>
        </div>
      </footer>
    </div>
  );
}
