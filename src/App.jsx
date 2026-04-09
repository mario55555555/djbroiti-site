import { useMemo, useState } from "react";

export default function App() {
  const [lang, setLang] = useState("he");

  const youtubePlaylistId = "PLqNi4ilGBqeCX3zVNTRPxsmK3O7hKoEIx";

  const t = useMemo(() => {
    return lang === "he"
      ? {
          dir: "rtl",
          navHome: "בית",
          navAbout: "אודות",
          navMusic: "מוזיקה",
          navVideo: "טריילר",
          navYoutube: "קליפים",
          navContact: "יצירת קשר",
          heroBadge: "DJ • Producer • AI Creator",
          heroTitle: "DJ Broiti",
          heroSubtitle: "Cinematic Electronic Experience",
          heroText:
            "DJ Broiti הוא אמן, מפיק ויוצר AI המשלב מוזיקה אלקטרונית מודרנית עם ויזואליים קולנועיים ליצירת חוויה רגשית, עוצמתית וייחודית.",
          listenNow: "האזינו עכשיו",
          watchTrailer: "צפו בטריילר",
          aboutTitle: "אודות",
          aboutText:
            "DJ Broiti הוא אמן ומפיק מוזיקלי היוצר מוזיקה ווידאו באמצעות AI, ומשלב בין סאונד אלקטרוני מודרני, רגש עמוק, ויזואל קולנועי וחדשנות יצירתית.",
          musicTitle: "מוזיקה",
          videoTitle: "טריילר רשמי",
          youtubeGalleryTitle: "קליפים רשמיים",
          youtubeGalleryText:
            "כל השירים והקליפים של DJ Broiti, בנגן YouTube רשמי בתוך האתר.",
          contactTitle: "יצירת קשר",
          contactText: "להופעות, שיתופי פעולה ויצירת קשר:",
          contactButton: "שלחו מייל",
          followTitle: "עקבו אחרי DJ Broiti",
          spotify: "ספוטיפיי",
          apple: "אפל מיוזיק",
          instagram: "אינסטגרם",
          tiktok: "טיקטוק",
          youtube: "יוטיוב",
          fullPlaylist: "לפלייליסט המלא",
          openYoutube: "פתח ביוטיוב",
          switchLabel: "English",
          footer: "כל הזכויות שמורות ל־DJ Broiti",
        }
      : {
          dir: "ltr",
          navHome: "Home",
          navAbout: "About",
          navMusic: "Music",
          navVideo: "Trailer",
          navYoutube: "Videos",
          navContact: "Contact",
          heroBadge: "DJ • Producer • AI Creator",
          heroTitle: "DJ Broiti",
          heroSubtitle: "Cinematic Electronic Experience",
          heroText:
            "DJ Broiti is an artist, producer, and AI creator blending modern electronic music with cinematic visuals to craft a powerful and emotionally driven audiovisual experience.",
          listenNow: "Listen Now",
          watchTrailer: "Watch Trailer",
          aboutTitle: "About",
          aboutText:
            "DJ Broiti is a music producer and AI creator crafting music and video through a fusion of modern electronic sound, deep emotion, cinematic visuals, and creative innovation.",
          musicTitle: "Music",
          videoTitle: "Official Trailer",
          youtubeGalleryTitle: "Official Videos",
          youtubeGalleryText:
            "All DJ Broiti songs and videos, played through the official YouTube player on the site.",
          contactTitle: "Contact",
          contactText: "For bookings, collaborations, and contact:",
          contactButton: "Send Email",
          followTitle: "Follow DJ Broiti",
          spotify: "Spotify",
          apple: "Apple Music",
          instagram: "Instagram",
          tiktok: "TikTok",
          youtube: "YouTube",
          fullPlaylist: "Full Playlist",
          openYoutube: "Open on YouTube",
          switchLabel: "עברית",
          footer: "All rights reserved to DJ Broiti",
        };
  }, [lang]);

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
            title: "Hard To Break",
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
            title: "החצי השני שלי My Second Self (Live Rock Version)",
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
            title: "Protects Me(Shomer Alai)",
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
            title: "Somwehere (Ei Sham Remix)",
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
            title: "My Second Self (Live)",
            subtitle: "Live Performance",
            watchUrl: "https://youtu.be/8vaVKwRikWw",
            embedUrl: "https://www.youtube.com/embed/8vaVKwRikWw?rel=0",
          },
          {
            title: "I Dreamed of you(Khalamti Alayiykh)(Club Remix)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/BKioBZHjcZA",
            embedUrl: "https://www.youtube.com/embed/BKioBZHjcZA?rel=0",
          },
          {
            title: "I Dreamed of you (Khalamti Alayikh)",
            subtitle: "Official Video",
            watchUrl: "https://youtu.be/AlRWp4A-snM",
            embedUrl: "https://www.youtube.com/embed/AlRWp4A-snM?rel=0",
          },
          {
            title: "Alone(Levadi)",
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
            title: "Hard To Break",
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
            title: "Somebody Else (Hebrew)",
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
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <header className="relative z-20 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-extrabold tracking-wide">
            DJ Broiti
          </a>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#home" className="transition hover:text-white">
              {t.navHome}
            </a>
            <a href="#about" className="transition hover:text-white">
              {t.navAbout}
            </a>
            <a href="#music" className="transition hover:text-white">
              {t.navMusic}
            </a>
            <a href="#video" className="transition hover:text-white">
              {t.navVideo}
            </a>
            <a href="#youtube" className="transition hover:text-white">
              {t.navYoutube}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {t.navContact}
            </a>
          </nav>

          <button
            onClick={() => setLang(lang === "he" ? "en" : "he")}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            {t.switchLabel}
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-10"
        >
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="mb-3 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
                {t.heroBadge}
              </p>

              <h1 className="mb-4 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>

              <p className="mb-4 text-xl font-semibold text-white/85 sm:text-2xl">
                {t.heroSubtitle}
              </p>

              <p className="mb-8 max-w-xl text-lg leading-8 text-zinc-300">
                {t.heroText}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#music"
                  className="rounded-full bg-white px-7 py-3 font-bold text-black transition hover:scale-105 hover:bg-zinc-200"
                >
                  {t.listenNow}
                </a>

                <a
                  href="#youtube"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-3 font-bold text-white transition hover:scale-105 hover:bg-white/20"
                >
                  {lang === "he" ? "צפו בקליפים" : "Watch Videos"}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
              <div className="relative rounded-[32px] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/40">
                  <iframe
                    style={{ borderRadius: "24px" }}
                    src="https://open.spotify.com/embed/artist/5pfzwmN1A0pYdZZiQGf15D?utm_source=generator"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Player"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <h2 className="mb-4 text-3xl font-bold">{t.aboutTitle}</h2>
            <p className="leading-8 text-zinc-300">{t.aboutText}</p>
          </div>
        </section>

        <section id="music" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <h2 className="mb-4 text-3xl font-bold">{t.musicTitle}</h2>
            <div className="overflow-hidden rounded-[22px] border border-white/10">
              <iframe
                style={{ borderRadius: "16px" }}
                src="https://open.spotify.com/embed/artist/5pfzwmN1A0pYdZZiQGf15D?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Embed"
              />
            </div>
          </div>
        </section>

        <section id="video" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <h2 className="mb-4 text-3xl font-bold">{t.videoTitle}</h2>
            <div className="aspect-video overflow-hidden rounded-[22px] border border-white/10">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/q8yf6nkUP2k?rel=0"
                title="DJ Broiti Trailer"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="youtube" className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-white/50">
                YouTube
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t.youtubeGalleryTitle}
              </h2>
            </div>

            <a
              href={`https://www.youtube.com/playlist?list=${youtubePlaylistId}`}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20 md:inline-flex"
            >
              {t.fullPlaylist}
            </a>
          </div>

          <p className="mb-8 max-w-3xl text-zinc-300">
            {t.youtubeGalleryText}
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {youtubeVideos.map((video) => (
              <div
                key={video.title}
                className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.06] shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="aspect-video overflow-hidden border-b border-white/10 bg-black">
                  <iframe
                    className="h-full w-full"
                    src={video.embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {video.title}
                  </h3>
                  <p className="mb-5 text-zinc-300">{video.subtitle}</p>

                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-white px-5 py-3 font-bold text-black transition hover:scale-105 hover:bg-zinc-200"
                  >
                    {t.openYoutube}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <h2 className="mb-4 text-3xl font-bold">{t.contactTitle}</h2>
              <p className="mb-5 text-zinc-300">{t.contactText}</p>

              <a
                href="mailto:djbroiti@gmail.com"
                className="inline-flex rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-zinc-200"
              >
                {t.contactButton}
              </a>

              <div className="mt-6 text-zinc-400">djbroiti@gmail.com</div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <h2 className="mb-6 text-3xl font-bold">{t.followTitle}</h2>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://open.spotify.com/artist/5pfzwmN1A0pYdZZiQGf15D?si"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-green-500 px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-green-400"
                >
                  {t.spotify}
                </a>

                <a
                  href="https://music.apple.com/il/artist/dj-broiti/1832848545"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-zinc-200"
                >
                  {t.apple}
                </a>

                <a
                  href="https://www.instagram.com/djbroiti/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-bold text-white transition hover:scale-105"
                >
                  {t.instagram}
                </a>

                <a
                  href="https://www.tiktok.com/@djbroiti"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-zinc-200"
                >
                  {t.tiktok}
                </a>

                <a
                  href={`https://www.youtube.com/playlist?list=${youtubePlaylistId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-600 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-red-500"
                >
                  {t.youtube}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-10 border-t border-white/10 px-6 py-8 text-center">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg font-bold tracking-wide text-white">DJ Broiti</p>
          <p className="mt-2 text-sm text-zinc-400">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}