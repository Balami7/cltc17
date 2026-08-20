function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const closeBtn  = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggleBtn || !closeBtn || !mobileMenu) {
    console.warn('[Mobile Menu] Some elements not found yet → retrying...');
    return false;
  }


  toggleBtn.removeEventListener('click', toggleMenu);
  closeBtn.removeEventListener('click', closeMenu);

 
  toggleBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', closeMenu);

  console.log('[Mobile Menu] Initialized successfully');

  return true;
}

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('active');   
  }
}

function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.remove('active');
  }
}


function tryInitialize() {
  if (initMobileMenu()) {
    return;
  }

  setTimeout(tryInitialize, 400);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tryInitialize);
} else {
  setTimeout(tryInitialize, 300);
}
