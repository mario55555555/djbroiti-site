import React from "react";

export default function DjBroitiSite() {
  const containerStyle = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #1f2340 0%, #0c0c12 45%, #050507 100%)",
    color: "white",
    fontFamily:
      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    direction: "rtl",
  };

  const overlayStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75))",
  };

  const navStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  };

  const logoStyle = {
    fontSize: "28px",
    fontWeight: "800",
    letterSpacing: "1px",
    color: "#ffffff",
  };

  const logoAccent = {
    color: "#9f7aea",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "#e9e9f2",
    textDecoration: "none",
    padding: "10px 16px",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.04)",
    fontSize: "14px",
    transition: "0.2s ease",
  };

  const heroStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "70px 20px 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    alignItems: "center",
  };

  const badgeStyle = {
    display: "inline-block",
    marginBottom: "18px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(159, 122, 234, 0.18)",
    border: "1px solid rgba(159, 122, 234, 0.35)",
    color: "#d8c4ff",
    fontSize: "13px",
    fontWeight: "600",
  };

  const titleStyle = {
    fontSize: "clamp(38px, 7vw, 82px)",
    lineHeight: "1.02",
    margin: "0 0 18px",
    fontWeight: "900",
  };

  const subtitleStyle = {
    fontSize: "clamp(17px, 2vw, 22px)",
    lineHeight: "1.8",
    color: "#d4d4df",
    marginBottom: "28px",
    maxWidth: "620px",
  };

  const buttonsRow = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "26px",
  };

  const primaryButton = {
    background: "linear-gradient(135deg, #9f7aea, #6b46c1)",
    color: "white",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "14px",
    fontWeight: "700",
    boxShadow: "0 12px 30px rgba(107, 70, 193, 0.35)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  const secondaryButton = {
    background: "rgba(255,255,255,0.05)",
    color: "white",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "14px",
    fontWeight: "700",
    border: "1px solid rgba(255,255,255,0.14)",
  };

  const statsRow = {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "10px",
  };

  const statCard = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "18px",
    padding: "16px 20px",
    minWidth: "130px",
    backdropFilter: "blur(10px)",
  };

  const statNumber = {
    fontSize: "22px",
    fontWeight: "800",
    marginBottom: "4px",
  };

  const statLabel = {
    color: "#c7c7d3",
    fontSize: "14px",
  };

  const visualCard = {
    position: "relative",
    background:
      "linear-gradient(180deg, rgba(159,122,234,0.22), rgba(255,255,255,0.04))",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    padding: "28px",
    minHeight: "420px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
    overflow: "hidden",
  };

  const glowOne = {
    position: "absolute",
    width: "220px",
    height: "220px",
    background: "rgba(159, 122, 234, 0.22)",
    borderRadius: "50%",
    filter: "blur(30px)",
    top: "-40px",
    left: "-40px",
  };

  const glowTwo = {
    position: "absolute",
    width: "180px",
    height: "180px",
    background: "rgba(66, 153, 225, 0.18)",
    borderRadius: "50%",
    filter: "blur(26px)",
    bottom: "-30px",
    right: "-20px",
  };

  const visualInner = {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "24px",
  };

  const featuredLabel = {
    color: "#d8c4ff",
    fontWeight: "700",
    letterSpacing: "1px",
    fontSize: "13px",
  };

  const featuredTitle = {
    fontSize: "34px",
    fontWeight: "900",
    margin: "0 0 10px",
  };

  const featuredText = {
    color: "#dedee8",
    lineHeight: "1.8",
    fontSize: "16px",
    maxWidth: "420px",
  };

  const miniCardsWrap = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  };

  const miniCard = {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "18px",
    padding: "18px",
  };

  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 20px 80px",
  };

  const sectionTitle = {
    fontSize: "34px",
    fontWeight: "900",
    marginBottom: "14px",
  };

  const sectionText = {
    color: "#cfcfda",
    fontSize: "17px",
    lineHeight: "1.8",
    maxWidth: "760px",
    marginBottom: "30px",
  };

  const cardsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  };

  const featureCard = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  };

  const featureTitle = {
    fontSize: "20px",
    fontWeight: "800",
    marginBottom: "10px",
  };

  const featureText = {
    color: "#d1d1db",
    lineHeight: "1.7",
    fontSize: "15px",
  };

  const videoSection = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 90px",
  };

  const videoWrap = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "28px",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  };

  const iframeStyle = {
    width: "100%",
    aspectRatio: "16 / 9",
    border: "none",
    display: "block",
  };

  const footerStyle = {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 20px 34px",
    color: "#b9b9c6",
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <nav style={navStyle}>
          <div style={logoStyle}>
            DJ <span style={logoAccent}>Broiti</span>
          </div>

          <div style={navLinksStyle}>
            <a
              href="https://www.instagram.com/djbroiti/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@djbroiti"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              TikTok
            </a>
            <a
              href="https://youtu.be/q8yf6nkUP2k"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              YouTube
            </a>
          </div>
        </nav>

        <section style={heroStyle}>
          <div>
            <div style={badgeStyle}>DJ • Producer • Cinematic Vision</div>

            <h1 style={titleStyle}>
              מוזיקה, רגש,
              <br />
              וחוויה ברמה אחרת
            </h1>

            <p style={subtitleStyle}>
              ברוכים הבאים לעולם של DJ Broiti — יצירה מוזיקלית עם סאונד מודרני,
              זהות חזקה, ויזואליות יוקרתית ואנרגיה שנשארת איתך.
            </p>

            <div style={buttonsRow}>
              <a
                href="https://youtu.be/q8yf6nkUP2k"
                target="_blank"
                rel="noreferrer"
                style={primaryButton}
              >
                לצפייה בטריילר
              </a>

              <a
                href="https://www.instagram.com/djbroiti/"
                target="_blank"
                rel="noreferrer"
                style={secondaryButton}
              >
                לעמוד האינסטגרם
              </a>
            </div>

            <div style={statsRow}>
              <div style={statCard}>
                <div style={statNumber}>AI</div>
                <div style={statLabel}>Creative Vision</div>
              </div>

              <div style={statCard}>
                <div style={statNumber}>Pro</div>
                <div style={statLabel}>Music & Visuals</div>
              </div>

              <div style={statCard}>
                <div style={statNumber}>RTL</div>
                <div style={statLabel}>Hebrew Experience</div>
              </div>
            </div>
          </div>

          <div style={visualCard}>
            <div style={glowOne}></div>
            <div style={glowTwo}></div>

            <div style={visualInner}>
              <div>
                <div style={featuredLabel}>FEATURED ARTIST PROFILE</div>
                <h2 style={featuredTitle}>DJ Broiti</h2>
                <p style={featuredText}>
                  שילוב של מוזיקה, סיפור, טכנולוגיה ואסתטיקה קולנועית — מותג
                  מוזיקלי עם נוכחות מודרנית, אפלה, יוקרתית ובלתי נשכחת.
                </p>
              </div>

              <div style={miniCardsWrap}>
                <div style={miniCard}>
                  <div style={{ ...featureTitle, fontSize: "17px" }}>
                    Sound Identity
                  </div>
                  <div style={featureText}>
                    סגנון חד, רגשי ומדויק עם נגיעה עתידנית.
                  </div>
                </div>

                <div style={miniCard}>
                  <div style={{ ...featureTitle, fontSize: "17px" }}>
                    Visual Impact
                  </div>
                  <div style={featureText}>
                    עיצוב יוקרתי שמתאים לאמן מודרני עם נוכחות.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitle}>למה לבחור ב־DJ Broiti</h2>
          <p style={sectionText}>
            זה לא רק שיר. זו חבילה של סאונד, אופי, אווירה ונראות — חוויה שלמה
            שמחברת בין מוזיקה מקורית, סיפור אישי ועיצוב ברמה גבוהה.
          </p>

          <div style={cardsGrid}>
            <div style={featureCard}>
              <div style={featureTitle}>מוזיקה מקורית</div>
              <div style={featureText}>
                יצירה עם כיוון ברור, רגש אמיתי וחתימה מוזיקלית ייחודית.
              </div>
            </div>

            <div style={featureCard}>
              <div style={featureTitle}>שפה ויזואלית יוקרתית</div>
              <div style={featureText}>
                אתר, מיתוג ותוכן עם מראה מקצועי, עשיר ומרשים.
              </div>
            </div>

            <div style={featureCard}>
              <div style={featureTitle}>נוכחות דיגיטלית</div>
              <div style={featureText}>
                חיבור ישיר לקהל דרך YouTube, Instagram ו־TikTok.
              </div>
            </div>

            <div style={featureCard}>
              <div style={featureTitle}>חזון יצירתי</div>
              <div style={featureText}>
                שילוב בין סאונד מתקדם, אמנות דיגיטלית וחשיבה חדשנית.
              </div>
            </div>
          </div>
        </section>

        <section style={videoSection}>
          <h2 style={sectionTitle}>צפו בטריילר</h2>
          <p style={sectionText}>
            הצצה לעולם היצירה, הסטייל והאנרגיה של DJ Broiti.
          </p>

          <div style={videoWrap}>
            <iframe
              style={iframeStyle}
              src="https://www.youtube.com/embed/q8yf6nkUP2k"
              title="DJ Broiti Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <footer style={footerStyle}>
          <div>© 2026 DJ Broiti. All rights reserved.</div>
          <div>Designed for a premium music brand experience.</div>
        </footer>
      </div>
    </div>
  );
}