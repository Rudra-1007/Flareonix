import React, { useEffect } from 'react';
import './About.css';

export default function About() {
  useEffect(() => {
    // Move logic from script(11).js here
  }, []);

  return (
    <div className="about-page">
      <div dangerouslySetInnerHTML={{__html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/main/about/style.css">
    <title>About</title>
    <style>
    #modalDesc::after{
    content:"";
    display:inline-block;
    width:6px;          
    height:1.2em;       
    background:#ff4500;
    margin-left:4px;
    vertical-align:middle;
    animation:blink .9s infinite;

}

@keyframes blink{
    50%{
        opacity:0;
    }
}
    </style>
</head>
<body>
    <div id="loader"></div>

<img src="/img/logo.png" id="loaderLogo">

<div id="mainContent">
    <header>

    <nav>
        <a href="/main/index.html">Home</a>
        <a href="#" class="active">About</a>
        <a href="#">Community</a>
        <a href="#">Agency</a>
        <a href="#">Incubator</a>
        <a href="#">AI Tools</a>
        <a href="#">Contact</a>
    </nav>

    <button class="flare">
        Enter The Fire
    </button>

    <div class="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
    </div>
</header>
<section class="auth-screen" id="authScreen">
    <div class="auth-container">
        <h1>
            Enter the <span>Fire</span>
        </h1>
        <p>
            Sign in to access your dashboard and community
        </p>
        <div class="auth-card">
            <button class="google-btn">
                <svg width="22" height="22" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                    <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.1-7.9l-6.5 5C9.7 39.7 16.3 44 24 44z"/>
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.7-3 4.9-5.7 6.4l6.2 5.2C39.7 36.3 44 30.7 44 24c0-1.3-.1-2.7-.4-3.5z"/>
                </svg>
                Continue with Google
            </button>
            <div class="divider">
                <span>OR</span>
            </div>
            <small>
                New to Flareonix? Just click above to create your account automatically.
            </small>
            <a href="#" class="back-home">
                ← Back to Home
            </a>

        </div>

        <div class="auth-footer">
            By signing in, you agree to our Terms of Service and Privacy Policy.
        </div>

    </div>

</section>
<div class="mobile-menu">

    <div class="mobile-glow"></div>

    <nav class="mobile-nav">

        <a href="/main/index.html">Home</a>
        <a href="#">About</a>
        <a href="#">Community</a>
        <a href="#">Agency</a>
        <a href="#">Incubator</a>
        <a href="#">AI Tools</a>
        <a href="#">Contact</a>

        <button class="flare mobile-flare">
            Enter The Fire
        </button>

    </nav>

</div>
    <div class="noise"></div>

<div class="blob blob1"></div>
<div class="blob blob2"></div>
<div class="blob blob3"></div>

<div class="grid-bg"></div>

<div class="floating-particle p1"></div>
<div class="floating-particle p2"></div>
<div class="floating-particle p3"></div>
<div class="floating-particle p4"></div>
<div class="floating-particle p5"></div>
    <section class="about-hero">
    <div class="about-content">
        <h1>Igniting The Next Generation of <span>Creators & Founders</span></h1>
        <p>
            Flareonix is more than a platform. It's a movement built for ambitious
            creators, entrepreneurs, developers, and dreamers who refuse to settle
            for ordinary.
        </p>
    </div>
</section>
<section class="vision">
    <div class="vision-box">
        <h2>Our Vision</h2>
        <p>
            To build the world's most powerful ecosystem where young innovators,
            creators, founders, and developers can learn, earn, build, and grow
            together.
        </p>
    </div>

    <div class="vision-box">
        <h2>Our Mission</h2>
        <p>
            Empower ambitious individuals with community, AI tools, mentorship,
            opportunities, and resources needed to transform ideas into reality.
        </p>
    </div>
</section>
<section class="timeline-section">

    <div class="section-title">
        <h2>The Rise of Flareonix</h2>
    </div>

    <div class="timeline-bar">

        <div class="timeline-point">
            <div class="dot"></div>
            <span>2025</span>

            <div class="timeline-info">
                <h3>The Beginning</h3>
                <p>Flareonix was founded with a vision to empower creators.</p>
            </div>
        </div>

        <div class="timeline-point">
            <div class="dot"></div>
            <span>2026</span>

            <div class="timeline-info">
                <h3>Expansion</h3>
                <p>Community growth, AI tools and partnerships launched.</p>
            </div>
        </div>

        <div class="timeline-point">
            <div class="dot"></div>
            <span>2027</span>

            <div class="timeline-info">
                <h3>Innovation</h3>
                <p>Launching advanced creator ecosystem and incubator.</p>
            </div>
        </div>

        <div class="timeline-point">
            <div class="dot"></div>
            <span>Future</span>

            <div class="timeline-info">
                <h3>Global Movement</h3>
                <p>Building the world's most ambitious creator network.</p>
            </div>
        </div>

    </div>

</section>
<section class="team-section">
    <div class="section-header">
        <span class="tag">THE FIRE BEHIND FLAREONIX</span>
        <h2>Meet The <span>Core Team</span></h2>
    </div>

    <div class="team-slider">
        <div class="team-card pratyush">
    <img src="img/member1.jpg">

    <div class="team-info">
        <h3>Pratyush</h3>
        <p>Managing Director</p>

        <a href="#" class="learn-more"
           data-name="Pratyush"
           data-role="Managing Director"
           data-desc="Leads operations, partnerships, and strategic growth initiatives for Flareonix.">
           Learn More
        </a>
    </div>
</div>
<div class="team-card active ayush">
    <img src="img/Aayush.jpg">

    <div class="team-info">
        <h3>Aayush</h3>
        <p>Founder & Vision Architect</p>

        <a href="#" class="learn-more"
           data-name="Aayush"
           data-role="Founder & Vision Architect"
           data-desc="Visionary behind Flareonix. Focused on innovation, community building, and empowering creators.">
           Learn More
        </a>
    </div>
</div>

        <div class="team-card unknown">
            <img src="img/member2.jpg">
            <div class="team-info">
                <h3>Member Name</h3>
                <p>Development Lead</p>
            </div>
        </div>

    </div>

</section>
<section class="gallery">

    <div class="section-title">
        <h2>Gallery</h2>
    </div>

    <div class="gallery-wrapper">

        <button class="gallery-btn prev">&#10094;</button>

        <div class="gallery-slider">

            <img src="img/gallery1.jpg">
            <img src="img/gallery2.jpg">
            <img src="img/gallery3.jpg">
            <img src="img/gallery4.jpg">
            <img src="img/gallery5.jpg">
            <img src="img/gallery6.jpg">

        </div>

        <button class="gallery-btn next">&#10095;</button>

    </div>

</section>
<section class="values">

    <div class="value-card">
        <h3>🔥 Innovation</h3>
        <p>Always building what's next.</p>
    </div>

    <div class="value-card">
        <h3>🚀 Growth</h3>
        <p>Constant learning and improvement.</p>
    </div>

    <div class="value-card">
        <h3>🤝 Community</h3>
        <p>Success grows when shared.</p>
    </div>

</section>
<div class="member-modal">

    <div class="modal-card">

        <button class="close-modal">✕</button>

        <div class="modal-glow"></div>

        <h2 id="modalName"></h2>

        <h4 id="modalRole"></h4>

        <p id="modalDesc"></p>

    </div>

</div>
<script src="/main/about/script.js"></script>
<script>
    

const slider = document.querySelector('.gallery-slider');

const next = document.querySelector('.next');

const prev = document.querySelector('.prev');

let position = 0;

const slideAmount = 425;

next.addEventListener('click',()=>{

    position -= slideAmount;

    const maxSlide =
    -(slider.scrollWidth - slider.parentElement.offsetWidth);

    if(position < maxSlide){

        position = 0;
    }

    slider.style.transform =
    \`translateX(${position}px)\`;

});

prev.addEventListener('click',()=>{

    position += slideAmount;

    if(position > 0){

        position =
        -(slider.scrollWidth - slider.parentElement.offsetWidth);
    }

    slider.style.transform =
    \`translateX(${position}px)\`;

});

setInterval(()=>{

    next.click();

},4000);

</script>
</div>
</body>
</html>`}} />
    </div>
  );
}
