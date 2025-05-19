// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    // Optional: Dark/Light Theme Toggle (extend as needed)
    const toggle = document.createElement("button");
    toggle.textContent = "🌓";
    toggle.style.position = "fixed";
    toggle.style.top = "1rem";
    toggle.style.right = "1rem";
    toggle.style.padding = "0.5rem 1rem";
    toggle.style.borderRadius = "8px";
    toggle.style.border = "none";
    toggle.style.cursor = "pointer";
    toggle.style.zIndex = "1000";
    document.body.appendChild(toggle);
  
    let dark = true;
    toggle.addEventListener("click", () => {
      document.documentElement.style.setProperty("--bg-color", dark ? "#f4f4f4" : "#0d1117");
      document.documentElement.style.setProperty("--card-color", dark ? "#ffffff" : "#161b22");
      document.documentElement.style.setProperty("--text-color", dark ? "#000000" : "#e6edf3");
      document.documentElement.style.setProperty("--subtext-color", dark ? "#555" : "#8b949e");
      document.documentElement.style.setProperty("--accent-color", dark ? "#007acc" : "#2f81f7");
      dark = !dark;
    });
  
    // Scroll fade-in animation
    const fadeElements = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    fadeElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });
  });
  