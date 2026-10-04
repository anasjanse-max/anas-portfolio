/* ============================================================
   ANAS JAN — PORTFOLIO  •  3D EDITION
   External script: js/main.js
   ============================================================ */

/* ------------------------------------------------------------
   APNA EMAIL YAHAN LIKHEIN — contact form ke messages is
   email address par aayenge. Sirf ye ek line badlein.
   ------------------------------------------------------------ */
const FORM_EMAIL = "anas.jan.se@gmail.com";

/* ---------- Mobile menu ---------- */
const burger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ---------- Active nav link on scroll ---------- */
const sections = document.querySelectorAll('section[id], header[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = 'home';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
  navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Skill bars animate when visible ---------- */
const barObs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) {
    e.target.querySelectorAll('.bar i').forEach(b => b.style.width = b.dataset.w + '%');
    barObs.unobserve(e.target);
  }
}), { threshold: 0.3 });
document.querySelectorAll('.skills-grid').forEach(el => barObs.observe(el));

/* ---------- Animated counters ---------- */
const countObs = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target;
  const target = +el.dataset.count;
  const dur = 1400, t0 = performance.now();
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
  countObs.unobserve(el);
}), { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

/* ---------- 3D tilt on cards (desktop only) ---------- */
const finePointer = window.matchMedia('(pointer:fine)').matches;
if (finePointer) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    let raf = null;
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform =
          `perspective(950px) rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 10).toFixed(2)}deg) translateY(-5px)`;
      });
    });
    card.addEventListener('mouseleave', () => {
      if (raf) cancelAnimationFrame(raf);
      card.style.transform = '';
    });
  });

  /* ---------- Hero mouse parallax (3D depth layers) ---------- */
  const scene = document.getElementById('heroScene');
  const layers = scene ? scene.querySelectorAll('[data-depth]') : [];
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', e => {
    const cx = (e.clientX / window.innerWidth - 0.5);
    const cy = (e.clientY / window.innerHeight - 0.5);
    layers.forEach(l => {
      const d = +l.dataset.depth;
      l.style.translate = `${(-cx * d).toFixed(1)}px ${(-cy * d).toFixed(1)}px`;
    });
  });
  hero.addEventListener('mouseleave', () =>
    layers.forEach(l => { l.style.translate = '0px 0px'; })
  );
}

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Contact form → email via FormSubmit (free, no signup)
   PEHLI BAAR: FormSubmit aapke inbox mein ek activation email
   bhejega — us mein "Activate" par click karein (sirf ek baar).
   Uske baad har message seedha inbox mein aayega. ---------- */
const form = document.getElementById('contactForm');
const msgBox = document.getElementById('formMsg');
const sendBtn = document.getElementById('sendBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('fName').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const message = document.getElementById('fMsg').value.trim();

  if (!name || !email || !message) return showMsg('Please fill in all fields.', false);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return showMsg('Please enter a valid email address.', false);

  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending...';
  try {
    const res = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(FORM_EMAIL), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name, email, message,
        _subject: 'New message from portfolio website — ' + name,
        _template: 'table',
        _captcha: 'false'
      })
    });
    if (!res.ok) throw new Error('send failed');
    showMsg("Message sent! Thanks for reaching out — I'll get back to you soon.", true);
    form.reset();
  } catch (err) {
    showMsg('Could not send right now. Please email me directly instead.', false);
  }
  sendBtn.disabled = false;
  sendBtn.textContent = 'Send Message';
});

function showMsg(text, ok) {
  msgBox.textContent = text;
  msgBox.className = 'form-msg ' + (ok ? 'ok' : 'err');
  msgBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
