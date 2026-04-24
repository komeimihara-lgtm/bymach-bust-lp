/* ============================================
   BYMACH PRO バストケアLP - JavaScript
   ============================================ */

// ===== Fade-in on scroll (IntersectionObserver) =====
const slides = document.querySelectorAll('.slide');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.1,
});

slides.forEach((slide) => observer.observe(slide));

// First slide: show immediately
if (slides[0]) {
  slides[0].classList.add('visible');
}

// ===== Fixed CTA hide on final slide =====
const finalSlide = document.querySelector('.slide-cta');
const fixedCta = document.getElementById('fixedCta');

if (finalSlide && fixedCta) {
  const finalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fixedCta.classList.add('hidden');
      } else {
        fixedCta.classList.remove('hidden');
      }
    });
  }, {
    root: null,
    threshold: 0.3,
  });

  finalObserver.observe(finalSlide);
}

// ===== Case Modal =====
const caseModal = document.getElementById('caseModal');
const openCaseBtn = document.getElementById('openCaseModal');
const closeCaseBtn = document.getElementById('closeCaseModal');
const caseTrack = document.getElementById('caseTrack');
const casePrev = document.getElementById('casePrev');
const caseNext = document.getElementById('caseNext');
const caseDots = document.querySelectorAll('.case-dot');
const totalCases = 6;
let currentCase = 0;

function openCaseModal() {
  caseModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  currentCase = 0;
  updateCaseSlider();
}

function closeCaseModal() {
  caseModal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateCaseSlider() {
  caseTrack.style.transform = `translateX(-${currentCase * 100}%)`;

  caseDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentCase);
  });

  casePrev.disabled = currentCase === 0;
  caseNext.disabled = currentCase === totalCases - 1;
}

function nextCase() {
  if (currentCase < totalCases - 1) {
    currentCase++;
    updateCaseSlider();
  }
}

function prevCase() {
  if (currentCase > 0) {
    currentCase--;
    updateCaseSlider();
  }
}

openCaseBtn?.addEventListener('click', openCaseModal);
closeCaseBtn?.addEventListener('click', closeCaseModal);
casePrev?.addEventListener('click', prevCase);
caseNext?.addEventListener('click', nextCase);

caseDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentCase = i;
    updateCaseSlider();
  });
});

// Close on overlay click
caseModal?.addEventListener('click', (e) => {
  if (e.target === caseModal) {
    closeCaseModal();
  }
});

// Swipe support for case modal
let touchStartX = 0;
let touchEndX = 0;

caseTrack?.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

caseTrack?.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const diff = touchStartX - touchEndX;
  const threshold = 50;

  if (diff > threshold) {
    nextCase();
  } else if (diff < -threshold) {
    prevCase();
  }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (caseModal?.classList.contains('active')) {
    if (e.key === 'ArrowRight') nextCase();
    if (e.key === 'ArrowLeft') prevCase();
    if (e.key === 'Escape') closeCaseModal();
  }
});

// ===== Demo Form Modal =====
const demoModal = document.getElementById('demoModal');
const modalClose = document.getElementById('modalClose');

// Open modal when any link with href="#demo-form" is clicked
document.querySelectorAll('a[href="#demo-form"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Close case modal first if open, then open demo modal
    if (caseModal?.classList.contains('active')) {
      closeCaseModal();
      setTimeout(() => {
        openDemoModal();
      }, 300);
    } else {
      openDemoModal();
    }
  });
});

function openDemoModal() {
  demoModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDemoModal() {
  demoModal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose?.addEventListener('click', closeDemoModal);

demoModal?.addEventListener('click', (e) => {
  if (e.target === demoModal) {
    closeDemoModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && demoModal?.classList.contains('active')) {
    closeDemoModal();
  }
});
