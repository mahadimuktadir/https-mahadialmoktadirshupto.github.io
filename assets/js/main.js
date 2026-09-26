const html = document.documentElement;
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const toast = document.getElementById('toast');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

// Mobile navigation
menuToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

// Theme / design switcher
const themeButtons = document.querySelectorAll('[data-set-theme]');
const savedTheme = localStorage.getItem('mahadi-theme');
if (savedTheme) html.dataset.theme = savedTheme;
function syncThemeButtons() {
  themeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.setTheme === html.dataset.theme));
}
syncThemeButtons();
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    html.dataset.theme = btn.dataset.setTheme;
    localStorage.setItem('mahadi-theme', btn.dataset.setTheme);
    syncThemeButtons();
  });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('[data-filter]');
const workCards = document.querySelectorAll('.work-card');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    workCards.forEach(card => {
      const categories = (card.dataset.category || '').split(' ');
      card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

// Copy email
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 1700);
}
document.querySelectorAll('.copy-email').forEach(button => {
  button.addEventListener('click', async () => {
    const email = button.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied');
    } catch {
      showToast(email);
    }
  });
});

// Gallery lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.full;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.removeAttribute('src');
  document.body.style.overflow = '';
}
lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Scroll reveal
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

// Reading progress
const progress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const doc = document.documentElement;
  const total = doc.scrollHeight - doc.clientHeight;
  const pct = total > 0 ? (doc.scrollTop / total) * 100 : 0;
  progress.style.width = `${pct}%`;
}, { passive: true });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
