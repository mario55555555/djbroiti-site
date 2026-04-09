import { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("he");

  const content = {
    he: {
      dir: "rtl",
      badge: "האתר הרשמי",
      heroTitle1: "זה לא רק מוזיקה.",
      heroTitle2: "זה העתיד של הרגש.",
      heroText:
        "DJ Broiti הוא אמן מוזיקה מבוסס בינה מלאכותית מירושלים, היוצר מוזיקה אלקטרונית רגשית, דיפ האוס, סאונד פרוגרסיבי וקליפים קולנועיים בעזרת AI.",
      listenNow: "האזנה ביוטיוב",
      watchTrailer: "לצפייה בטריילר",
      spotifyNow: "Spotify",
      quickLinksTitle: "קישורים מהירים",
      quickLinksText: "כל המקומות הרשמיים של DJ Broiti במקום אחד.",
      trailerTitle: "הטריילר הרשמי",
      videosBadge: "כל הקליפים",
      videosTitle: "הקליפים הרשמיים",
      videosText:
        "כל הקליפים הרשמיים של DJ Broiti במקום אחד — חוויית צפייה יוקרתית עם גישה ישירה ליוטיוב.",
      platformsTitle: "האזינו בכל הפלטפורמות",
      platformsText: "כל המוזיקה של DJ Broiti זמינה בפלטפורמות המובילות.",
      aboutTitle: "אודות",
      aboutText:
        "DJ Broiti משלב שירים מקוריים, סיפור קולנועי וויזואלים מבוססי AI לחוויה מוזיקלית ייחודית. הפרויקט מחבר בין רגש, טכנולוגיה וסאונד אלקטרוני מודרני בעברית ובאנגלית.",
      contactTitle: "יצירת קשר",
      contactText: "לשיתופי פעולה, פניות ויצירת קשר רשמית:",
      siteTitle: "האתר הרשמי",
      watchOnYoutube: "לצפייה ביוטיוב",
      footer: "DJ Broiti — האתר הרשמי",
      officialVideos: "קליפים רשמיים",
      streamMusic: "האזנה למוזיקה",
      artistPage: "עמוד אמן רשמי",
      visualsUpdates: "ויזואלים ועדכונים",
      shortContent: "תוכן קצר",
      officialLink: "קישור רשמי",
      emailLabel: "מייל רשמי",
    },
    en: {
      dir: "ltr",
      badge: "OFFICIAL WEBSITE",
      heroTitle1: "This is not just music.",
      heroTitle2: "This is the future of emotion.",
      heroText:
        "DJ Broiti is an AI-generated music artist from Jerusalem, creating emotional electronic music, deep house, progressive sound, and cinematic AI-powered visuals.",
      listenNow: "Listen on YouTube",
      watchTrailer: "Watch Trailer",
      spotifyNow: "Spotify",
      quickLinksTitle: "Quick Links",
      quickLinksText: "All official DJ Broiti destinations in one place.",
      trailerTitle: "Official Trailer",
      videosBadge: "All Music Videos",
      videosTitle: "Official Music Videos",
      videosText:
        "All official DJ Broiti music videos in one premium gallery, with direct access to YouTube.",
      platformsTitle: "Listen Everywhere",
      platformsText: "Stream DJ Broiti across the leading music platforms.",
      aboutTitle: "About",
      aboutText:
        "DJ Broiti blends original songs, cinematic storytelling, and AI-generated visuals into a unique music experience. The project combines emotion, technology, and modern electronic sound in both Hebrew and English.",
      contactTitle: "Contact",
      contactText: "For collaborations, inquiries, and official contact:",
      siteTitle: "Official Website",
      watchOnYoutube: "Watch on YouTube",
      footer: "DJ Broiti — Official Website",
      officialVideos: "Official videos",
      streamMusic: "Stream the music",
      artistPage: "Official artist page",
      visualsUpdates: "Visuals & updates",
      shortContent: "Short-form content",
      officialLink: "Official link",
      emailLabel: "Official email",
    },
  };

  const t = content[lang];

  const platformLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@djbroiti",
      sub: t.officialVideos,
      glow: "from-red-500/20 via-transparent to-transparent",
      border: "hover:border-red-400/30",
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/artist/5pfzwmN1A0pYdZZiQGf15D",
      sub: t.streamMusic,
      glow: "from-green-500/20 via-transparent to-transparent",
      border: "hover:border-green-400/30",
    },
    {
      name: "Apple Music",
      href: "https://music.apple.com/il/artist/dj-broiti/1832848545",
      sub: t.artistPage,
      glow: "from-white/10 via-transparent to-transparent",
      border: "hover:border-white/30",
    },
    {
      name: "Amazon Music",
      href: "https://music.amazon.com/artists/B0FLG5V3TG/dj-broiti",
      sub: t.artistPage,
      glow: "from-orange-500/20 via-transparent to-yellow-500/20",
      border: "hover:border-orange-400/30",
    },
    {
      name: "TIDAL",
      href: "https://tidal.com/artist/64947741",
      sub: t.artistPage,
      glow: "from-cyan-500/20 via-transparent to-blue-500/20",
      border: "hover:border-cyan-300/30",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/djbroiti/",
      sub: t.visualsUpdates,
      glow: "from-pink-500/20 via-transparent to-purple-500/20",
      border: "hover:border-pink-400/30",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@djbroiti",
      sub: t.shortContent,
      glow: "from-fuchsia-500/20 via-transparent to-cyan-500/20",
      border: "hover:border-fuchsia-400/30",
    },
    {
      name: "djbroiti.com",
      href: "https://djbroiti.com",
      sub: t.officialLink,
      glow: "from-violet-500/20 via-transparent to-cyan-500/20",
      border: "hover:border-violet-400/30",
    },
    {
      name: "djbroiti@gmail.com",
      href: "mailto:djbroiti@gmail.com",
      sub: t.emailLabel,
      glow: "from-cyan-500/20 via-transparent to-white/10",
      border: "hover:border-cyan-300/30",
    },
  ];

  const youtubeVideos =
    lang === "he"
      ? [
          {
            title: "שומר עליי",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/SBsVm1H1tSM",
            embedUrl: "https://www.youtube.com/embed/SBsVm1H1tSM?rel=0",
          },
          {
            title: "שבריר של שנייה",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/h_ZhlUu9zMc",
            embedUrl: "https://www.youtube.com/embed/h_ZhlUu9zMc?rel=0",
          },
          {
            title: "אי שם (Remix)",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/wAtPoT2rfwg",
            embedUrl: "https://www.youtube.com/embed/wAtPoT2rfwg?rel=0",
          },
          {
            title: "אי שם",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/zCA2hASBCuo",
            embedUrl: "https://www.youtube.com/embed/zCA2hASBCuo?rel=0",
          },
          {
            title: "החצי השני שלי",
            subtitle: "לייב בכיכר האשליות",
            watchUrl: "https://youtu.be/8vaVKwRikWw",
            embedUrl: "https://www.youtube.com/embed/8vaVKwRikWw?rel=0",
          },
          {
            title: "חלמתי עלייך (Club Remix)",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/BKioBZHjcZA",
            embedUrl: "https://www.youtube.com/embed/BKioBZHjcZA?rel=0",
          },
          {
            title: "חלמתי עלייך",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/AlRWp4A-snM",
            embedUrl: "https://www.youtube.com/embed/AlRWp4A-snM?rel=0",
          },
          {
            title: "לבדי",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/gNoOEpG1ZY4",
            embedUrl: "https://www.youtube.com/embed/gNoOEpG1ZY4?rel=0",
          },
          {
            title: "Hard to Break (Alternate Version)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/jPPafrSdkf0",
            embedUrl: "https://www.youtube.com/embed/jPPafrSdkf0?rel=0",
          },
          {
            title: "Fighting on Her Own",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/EmDesEEk_sg",
            embedUrl: "https://www.youtube.com/embed/EmDesEEk_sg?rel=0",
          },
          {
            title: "And There Was Light",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/-C7zS5kjZkQ",
            embedUrl: "https://www.youtube.com/embed/-C7zS5kjZkQ?rel=0",
          },
          {
            title: "Hard to Break",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/RU7L4FleDlk",
            embedUrl: "https://www.youtube.com/embed/RU7L4FleDlk?rel=0",
          },
          {
            title: "I Don't Feel Real",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/2Q5z5VLKnoo",
            embedUrl: "https://www.youtube.com/embed/2Q5z5VLKnoo?rel=0",
          },
          {
            title: "Somebody Else",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/rK1GhEbIF-k",
            embedUrl: "https://www.youtube.com/embed/rK1GhEbIF-k?rel=0",
          },
          {
            title: "Somebody Else (עברית)",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/ZYq-fRCVc34",
            embedUrl: "https://www.youtube.com/embed/ZYq-fRCVc34?rel=0",
          },
          {
            title: "החצי השני שלי - My Second Self",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/RB86jrC2yRc",
            embedUrl: "https://www.youtube.com/embed/RB86jrC2yRc?rel=0",
          },
          {
            title: "החצי השני שלי - My Second Self (Live Rock Version)",
            subtitle: "גרסת לייב",
            watchUrl: "https://youtu.be/MiON30oxUjk",
            embedUrl: "https://www.youtube.com/embed/MiON30oxUjk?rel=0",
          },
          {
            title: "Here Comes The Storm",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/j8gr-UhfFj8",
            embedUrl: "https://www.youtube.com/embed/j8gr-UhfFj8?rel=0",
          },
          {
            title: "מסע - קאבר (אליעד)",
            subtitle: "קליפ רשמי",
            watchUrl: "https://youtu.be/coYAIaSQupc",
            embedUrl: "https://www.youtube.com/embed/coYAIaSQupc?rel=0",
          },
        ]
      : [
          {
            title: "Protects Me (Shomer Alai)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/SBsVm1H1tSM",
            embedUrl: "https://www.youtube.com/embed/SBsVm1H1tSM?rel=0",
          },
          {
            title: "In a Split Second (Shavrir Shel Shnia)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/h_ZhlUu9zMc",
            embedUrl: "https://www.youtube.com/embed/h_ZhlUu9zMc?rel=0",
          },
          {
            title: "Somewhere (Ei Sham Remix)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/wAtPoT2rfwg",
            embedUrl: "https://www.youtube.com/embed/wAtPoT2rfwg?rel=0",
          },
          {
            title: "Somewhere (Ei Sham)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/zCA2hASBCuo",
            embedUrl: "https://www.youtube.com/embed/zCA2hASBCuo?rel=0",
          },
          {
            title: "My Second Self (Live Performance)",
            subtitle: "Live Performance",
            watchUrl: "https://youtu.be/8vaVKwRikWw",
            embedUrl: "https://www.youtube.com/embed/8vaVKwRikWw?rel=0",
          },
          {
            title: "I Dreamed of You (Khalamti Alayikh) – Club Remix",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/BKioBZHjcZA",
            embedUrl: "https://www.youtube.com/embed/BKioBZHjcZA?rel=0",
          },
          {
            title: "I Dreamed of You (Khalamti Alayikh)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/AlRWp4A-snM",
            embedUrl: "https://www.youtube.com/embed/AlRWp4A-snM?rel=0",
          },
          {
            title: "Alone (Levadi)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/gNoOEpG1ZY4",
            embedUrl: "https://www.youtube.com/embed/gNoOEpG1ZY4?rel=0",
          },
          {
            title: "Hard to Break (Alternate Version)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/jPPafrSdkf0",
            embedUrl: "https://www.youtube.com/embed/jPPafrSdkf0?rel=0",
          },
          {
            title: "Fighting on Her Own",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/EmDesEEk_sg",
            embedUrl: "https://www.youtube.com/embed/EmDesEEk_sg?rel=0",
          },
          {
            title: "And There Was Light",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/-C7zS5kjZkQ",
            embedUrl: "https://www.youtube.com/embed/-C7zS5kjZkQ?rel=0",
          },
          {
            title: "Hard to Break",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/RU7L4FleDlk",
            embedUrl: "https://www.youtube.com/embed/RU7L4FleDlk?rel=0",
          },
          {
            title: "I Don't Feel Real (Lo Margish Kayam)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/2Q5z5VLKnoo",
            embedUrl: "https://www.youtube.com/embed/2Q5z5VLKnoo?rel=0",
          },
          {
            title: "Somebody Else",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/rK1GhEbIF-k",
            embedUrl: "https://www.youtube.com/embed/rK1GhEbIF-k?rel=0",
          },
          {
            title: "Somebody Else (Hebrew Version)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/ZYq-fRCVc34",
            embedUrl: "https://www.youtube.com/embed/ZYq-fRCVc34?rel=0",
          },
          {
            title: "My Second Self",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/RB86jrC2yRc",
            embedUrl: "https://www.youtube.com/embed/RB86jrC2yRc?rel=0",
          },
          {
            title: "My Second Self (Live Rock Version)",
            subtitle: "Live Version",
            watchUrl: "https://youtu.be/MiON30oxUjk",
            embedUrl: "https://www.youtube.com/embed/MiON30oxUjk?rel=0",
          },
          {
            title: "Here Comes The Storm",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/j8gr-UhfFj8",
            embedUrl: "https://www.youtube.com/embed/j8gr-UhfFj8?rel=0",
          },
          {
            title: "Masa (Eliad Cover)",
            subtitle: "Official Cover Video",
            watchUrl: "https://youtu.be/coYAIaSQupc",
            embedUrl: "https://www.youtube.com/embed/coYAIaSQupc?rel=0",
          },
        ];

  return (
    <div
      dir={t.dir}
      className="relative min-h-screen overflow-x-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-black text-black shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            DJ
          </div>
          <div>
            <div className="text-lg font-black tracking-[0.25em]">DJ BROITI</div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">
              AI Music Artist
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://djbroiti.com"
            className="hidden text-sm text-white/60 transition hover:text-white md:block"
          >
            djbroiti.com
          </a>

          <div className="flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
            <button
              onClick={() => setLang("he")}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                lang === "he"
                  ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              HE
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                lang === "en"
                  ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-10 text-center sm:px-6 lg:px-8 lg:pt-16">
        <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
          {t.badge}
        </div>

        <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
          <span className="block">{t.heroTitle1}</span>
          <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">
            {t.heroTitle2}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
          {t.heroText}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@djbroiti"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-sm font-extrabold text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:scale-[1.02]"
          >
            {t.listenNow}
          </a>

          <a
            href="#trailer"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
          >
            {t.watchTrailer}
          </a>

          <a
            href="https://open.spotify.com/artist/5pfzwmN1A0pYdZZiQGf15D"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-green-400/20 bg-green-500/10 px-7 py-3 text-sm font-bold text-green-200 backdrop-blur-xl transition hover:border-green-300/40 hover:bg-green-500/15"
          >
            {t.spotifyNow}
          </a>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {t.quickLinksTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              {t.quickLinksText}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {platformLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:scale-[1.03] ${item.border}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 transition group-hover:opacity-100`}
                />
                <div className="relative z-10">
                  <div className="text-lg font-semibold break-words">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="trailer"
        className="relative z-10 mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
              {t.trailerTitle}
            </h2>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Trailer
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/q8yf6nkUP2k?rel=0"
                title="DJ Broiti Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {t.videosBadge}
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
            {t.videosTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            {t.videosText}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {youtubeVideos.map((video, index) => (
            <article
              key={`${video.title}-${index}`}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_16px_60px_rgba(34,211,238,0.12)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
              </div>

              <div className="relative z-10 p-4">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300/80">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-extrabold leading-tight text-white">
                      {video.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/55">{video.subtitle}</p>
                  </div>

                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                  >
                    YouTube
                  </a>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 text-white"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-[0.22em] text-white/35">
                    DJ Broiti
                  </span>

                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-bold text-black transition hover:scale-[1.02]"
                  >
                    {t.watchOnYoutube}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="stroke-current"
                    >
                      <path
                        d="M7 17L17 7M17 7H9M17 7V15"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {t.platformsTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              {t.platformsText}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {platformLinks.map((item) => (
              <a
                key={`${item.name}-platform`}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:scale-[1.03] ${item.border}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 transition group-hover:opacity-100`}
                />
                <div className="relative z-10">
                  <div className="text-lg font-semibold break-words">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:col-span-2">
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
            {t.aboutTitle}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">{t.aboutText}</p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
            {t.contactTitle}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">{t.contactText}</p>
          <a
            href="mailto:djbroiti@gmail.com"
            className="mt-4 inline-block text-lg font-bold text-cyan-300 transition hover:text-cyan-200"
          >
            djbroiti@gmail.com
          </a>

          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="text-sm uppercase tracking-[0.25em] text-white/40">
              {t.siteTitle}
            </div>
            <a
              href="https://djbroiti.com"
              className="mt-2 inline-block text-base font-semibold text-white transition hover:text-cyan-200"
            >
              https://djbroiti.com
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-center text-sm text-white/45">
        {t.footer}
      </footer>
    </div>
  );
}