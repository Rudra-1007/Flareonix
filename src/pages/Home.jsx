import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <div className="home-page">
      {/* Converted from index(15).html */}
      <div dangerouslySetInnerHTML={{__html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>TEST</title>
</head>
<body>
<div id="loader"></div>

<img src="/img/logo.png" id="loaderLogo">

<div id="mainContent">
    <div class="noise"></div>
<div class="blob blob1"></div>
<div class="blob blob2"></div>
<div class="blob blob3"></div>
<header>
  <nav>
    <a href="#" class="active">Home</a>
    <a href="/main/about/index.html">About</a>
    <a href="#">Community</a>
    <a href="#">Agency</a>
    <a href="#">Incubator</a>
    <a href="#">AI Tools</a>
    <a href="#">Contact</a>
  </nav>
  <button class="flare">Enter The Fire</button>
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

<section class="hero">
    <div class="hero-content">
        <span class="tag">Rise. Ignite. Conquer.</span>
        <h1>
            This is not a platform.<br>
            <span>This is where creators are reborn.</span>
        </h1>
        <p>
            Join the movement. Build your identity. Earn. Grow. Dominate.
        </p>
        <div class="hero-buttons">
            <button class="primary">Get Started</button>
            <button class="secondary">View Work</button>
        </div>
    </div>
</section>

<section class="information">
    <div class="information-content">
    <h4>WHAT IS FLAREONIX?</h4>
    <h1>A Movement for the <span>Unstoppable</span></h1>
    <p>Flareonix is where ambitious youth transform their dreams into reality. We combine community, AI tools, mentorship, and real earning opportunities to create the ultimate ecosystem for creators and founders.

Community
Join 1000+ ambitious creators & founders

AI Tools
Leverage AI to scale your business

</p>
</div>
</section>

<section class="stats">
  <div class="stat-card reveal">
    <h2>150+</h2>
    <p>Projects Completed</p>
  </div>

  <div class="stat-card reveal">
    <h2>99%</h2>
    <p>Client Satisfaction</p>
  </div>

  <div class="stat-card reveal">
    <h2>24/7</h2>
    <p>Support System</p>
  </div>
</section>

<section class="features">

  <div class="feature reveal">
    <div class="icon"></div>
    <h3>Modern Motion</h3>
    <p>High-end transitions and immersive interactions.</p>
  </div>

  <div class="feature reveal">
    <div class="icon"></div>
    <h3>Premium UI</h3>
    <p>Minimal yet futuristic visual language.</p>
  </div>

  <div class="feature reveal">
    <div class="icon"></div>
    <h3>Performance</h3>
    <p>Optimized animations and smooth rendering.</p>
  </div>

</section>

<section class="cta reveal">
  <h2>Ready to build something extraordinary?</h2>
  <button>Start Project</button>
</section>
</div>

<script>
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});
</script>
<script>
const counters = document.querySelectorAll('.stat-card h2');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const counter = entry.target;
            const originalText = counter.innerText;
            if(originalText.includes('/')){
                let count = 0;
                const target = 24;
                const update = () => {
                    count++;
                    if(count <= target){
                        counter.innerText = count + "/7";
                        setTimeout(update,60);
                    }
                };
                update();
            }
            else{
                const target = parseInt(originalText.replace(/\D/g,''));
                const suffix = originalText.replace(/[0-9]/g,'');
                let count = 0;
                const updateCount = () => {
                    const increment = Math.ceil(target / 140);
                    count += increment;
                    if(count >= target){
                        counter.innerText = target + suffix;
                    }else{
                        counter.innerText = count + suffix;
                        setTimeout(updateCount,20);
                    }
                };
                updateCount();
            }
            observer.unobserve(counter);
        }
    });
},{
    threshold:0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});
</script>
</body>
</html>`}} />
    </div>
  );
}
