const webProjects = [
  { name: "Daram Khola Hydro Energy Limited", url: "https://www.daramkholahydro.com", image: "assets/web/daram.JPG", desc: "Corporate hydropower website with a clean, client-focused structure." },
  { name: "Shaileshwari Power Nepal Limited", url: "https://www.shaileshwaripower.com", image: "assets/web/Shaileshwari.JPG", desc: "Hydropower company web presence for visibility and trust." },
  { name: "Pinnacle Urja", url: "https://www.pinnacleurja.com", image: "assets/web/pinnacle.JPG", desc: "Modern energy-sector site with service and company highlights." },
  { name: "Aviyan Group", url: "https://aviyangroup.com", image: "assets/web/aviyan.JPG", desc: "Group profile website focused on brand clarity and offerings." },
  { name: "Rasuwa Hydropower Limited", url: "https://rasuwahydro.com", image: "assets/web/rasuwa.JPG", desc: "Industry website tailored for project information and updates." },
  { name: "CCODER", url: "https://ccoder.org", image: "assets/web/ccoder.JPG", desc: "Technical organization website with a simple navigable layout." },
  { name: "Bhujung Hydro", url: "https://bhujunghydro.com", image: "assets/web/bhujung.JPG", desc: "Hydropower portfolio site designed for credibility and reach." }
];

const graphicsFiles = [
  "Aap Piro.pdf",
  "Black Salt.pdf",
  "Black Soya.pdf",
  "Soya Chunks 250g.pdf",
  "Timbur Whole 60 gm.pdf",
  "Timur Chop (1).pdf"
];

const artFiles = [
  "environment lighting test.png",
  "experiment 2.png",
  "Heaven.png",
  "missiles.png",
  "Movie Hall.png",
  "Myroom.png",
  "pose.png",
  "Render.jpg"
];

const skillLogos = [
  { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Elementor", src: "https://cdn.simpleicons.org/elementor" },
  { name: "WooCommerce", src: "https://cdn.simpleicons.org/woocommerce" },
  { name: "Adobe Illustrator", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Svelte", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Blender", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel" }
];

function toTwoDigits(value) {
  return String(value).padStart(2, "0");
}

function formatTime(date) {
  return `${toTwoDigits(date.getHours())}:${toTwoDigits(date.getMinutes())}:${toTwoDigits(date.getSeconds())}`;
}

function getNepalDate() {
  const now = new Date();
  const utcMillis = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  return new Date(utcMillis + (5 * 60 + 45) * 60 * 1000);
}

function updateClocks() {
  const nptEl = document.querySelector("#clock-npt");
  const localEl = document.querySelector("#clock-local");
  if (!nptEl || !localEl) return;
  nptEl.textContent = formatTime(getNepalDate());
  localEl.textContent = formatTime(new Date());
}

function injectClockIcons() {
  const svg = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"></circle>
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>
  `.trim();
  document.querySelectorAll(".clock-icon").forEach((node) => {
    node.innerHTML = svg;
  });
}

function applyThemeByLocalTime() {
  const hour = new Date().getHours();
  document.body.classList.remove("light-mode", "dark-mode");
  if (hour >= 6 && hour <= 17) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.add("dark-mode");
  }
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.querySelector("#navPanel");
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownBtn = document.querySelector(".dropdown-toggle");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Only use click toggle for dropdown on mobile (< 1025px)
  if (dropdown && dropdownBtn) {
    dropdownBtn.addEventListener("click", (e) => {
      // Check if we're on desktop
      if (window.innerWidth >= 1025) {
        return; // Let CSS hover handle it
      }
      e.preventDefault();
      const open = dropdown.classList.toggle("open");
      dropdownBtn.setAttribute("aria-expanded", String(open));
    });
  }
}

function fileNameToLabel(file) {
  return file.replace(".pdf", "").replace(/\.[^/.]+$/, "").replace(/[()]/g, "").replace(/\s+/g, " ").trim();
}

function buildWebCard(project, useRelativeRoot = false) {
  const prefix = useRelativeRoot ? "../" : "";
  const safeImage = `${prefix}${project.image}`;
  return `
    <article class="card reveal">
      <img class="card-media" src="${safeImage}" alt="${project.name} website screenshot" onerror="this.outerHTML='<div class=&quot;card-media placeholder&quot;>${project.name}</div>';">
      <div class="card-content">
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <a class="card-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Visit Live Site →</a>
      </div>
    </article>
  `;
}

function buildPdfCard(file, useRelativeRoot = false) {
  const prefix = useRelativeRoot ? "../" : "";
  const path = `${prefix}assets/GD/${encodeURIComponent(file)}`;
  const title = fileNameToLabel(file);
  return `
    <article class="card reveal">
      <object class="pdf-preview" data="${path}" type="application/pdf">
        <iframe class="pdf-preview" src="${path}" title="${title} PDF preview"></iframe>
      </object>
      <div class="card-content">
        <h3>${title}</h3>
        <p>Product label and packaging design concept.</p>
        <a class="card-link" href="${path}" target="_blank" rel="noopener noreferrer">Open PDF →</a>
      </div>
    </article>
  `;
}

function buildArtCard(file, useRelativeRoot = false, withLightbox = false) {
  const prefix = useRelativeRoot ? "../" : "";
  const path = `${prefix}assets/3D/${encodeURIComponent(file)}`;
  const name = fileNameToLabel(file);
  return `
    <article class="card reveal">
      <img class="card-media ${withLightbox ? "js-lightbox-image" : ""}" src="${path}" alt="${name} 3D render" data-image="${path}" onerror="this.outerHTML='<div class=&quot;card-media placeholder&quot;>${name}</div>';">
      <div class="card-content">
        <h3>${name}</h3>
        <p>3D render created in Blender with lighting and composition study.</p>
      </div>
    </article>
  `;
}

function renderPortfolio() {
  const page = document.body.dataset.page || "";
  const isSubPage = page === "websites" || page === "graphics" || page === "3d-art";

  const webPreview = document.querySelector("#web-preview-grid");
  if (webPreview) webPreview.innerHTML = webProjects.slice(0, 3).map((p) => buildWebCard(p)).join("");

  const webAll = document.querySelector("#web-all-grid");
  if (webAll) webAll.innerHTML = webProjects.map((p) => buildWebCard(p, isSubPage)).join("");

  const gdPreview = document.querySelector("#graphics-preview-grid");
  if (gdPreview) gdPreview.innerHTML = graphicsFiles.slice(0, 3).map((f) => buildPdfCard(f)).join("");

  const gdAll = document.querySelector("#graphics-all-grid");
  if (gdAll) gdAll.innerHTML = graphicsFiles.map((f) => buildPdfCard(f, isSubPage)).join("");

  const artPreview = document.querySelector("#art-preview-grid");
  if (artPreview) artPreview.innerHTML = artFiles.slice(0, 3).map((f) => buildArtCard(f)).join("");

  const artAll = document.querySelector("#art-all-grid");
  if (artAll) artAll.innerHTML = artFiles.map((f) => buildArtCard(f, isSubPage, true)).join("");
}

function setupSkillsTicker() {
  const track = document.querySelector("#skills-track");
  if (!track) return;
  const items = [...skillLogos, ...skillLogos];
  track.innerHTML = items.map((item) => `
    <div class="skill-item">
      <img src="${item.src}" alt="${item.name} logo">
      <span>${item.name}</span>
    </div>
  `).join("");
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  const success = document.querySelector("#form-success");
  if (!form || !success) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const endpoint = "https://formsubmit.co/ajax/poudeldippan2004@gmail.com";
    const formData = new FormData(form);
    formData.append("_captcha", "false");
    try {
      const res = await fetch(endpoint, { method: "POST", body: formData });
      if (!res.ok) throw new Error('Network response was not ok');
      success.hidden = false;
      form.reset();
    } catch (err) {
      alert('Could not send message. Please email poudeldippan2004@gmail.com directly.');
      console.error(err);
    }
  });
}

function setupLightbox() {
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  if (!lightbox || !lightboxImage) return;
  const images = Array.from(document.querySelectorAll(".js-lightbox-image"));
  if (!images.length) return;
  let currentIndex = 0;

  const open = (index) => {
    currentIndex = index;
    lightboxImage.src = images[currentIndex].dataset.image;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  };
  const close = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  };
  const next = () => open((currentIndex + 1) % images.length);
  const prev = () => open((currentIndex - 1 + images.length) % images.length);

  images.forEach((img, idx) => img.addEventListener("click", () => open(idx)));
  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.querySelector(".lightbox-nav.next").addEventListener("click", next);
  lightbox.querySelector(".lightbox-nav.prev").addEventListener("click", prev);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") prev();
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  injectClockIcons();
  applyThemeByLocalTime();
  setInterval(applyThemeByLocalTime, 60000);

  updateClocks();
  setInterval(updateClocks, 1000);

  setupMenu();
  renderPortfolio();
  setupSkillsTicker();
  setupContactForm();
  setupLightbox();
  setupRevealAnimations();
});
