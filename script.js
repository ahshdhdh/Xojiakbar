// Telegram sozlamalari
const TELEGRAM_BOT_TOKEN = '8831894021:AAHAUdn53l7_ZhmuLts2vGzLvTg-YFmWwI4';
const TELEGRAM_CHAT_ID = '5659057147';

// Xizmatlar ma'lumotlari
const servicesData = {
    'buxgalteriya': {
        title: 'Buxgalteriya Hisobi',
        description: 'Kichik korxonalar va individual tadbirkorlar uchun to\'liq buxgalteriya hisobi. Daromad, xarajatlar, hisob-kitoblar va har kunlik moliyaviy operatsiyalar tartibda saqlanadi, oyning oxirida aniq rasm beradi.',
        features: [
            'Kunlik operatsiyalarni hisobga olish',
            'Daromad va xarajatlarni kuzatish',
            'Hisob-kitoblar hisobi',
            'Oylik balans tayyorlash',
            'Moliyaviy hisobotlar'
        ],
        price: '1.000.000 - 3.000.000 so\'m/oy',
        icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="14" rx="2" ry="2"></rect><path d="M16 3v4M8 3v4M3 11h18"></path></svg>'
    },
    'vergi': {
        title: 'Soliq Hisoboti',
        description: 'Soliq deklaratsiyalari, muddatlar va majburiy topshirishlar ehtiyotkorlik bilan boshqariladi, kechikishlar va jarima riskini kamaytiradi.',
        features: [
            'Soliq deklaratsiyalari tayyorlash',
            'Muddatli topshirishlar kuzatuvi',
            'Soliq hisobotlari',
            'Davlat organlari bilan ishlash',
            'Jarimalardan himoya'
        ],
        price: '500.000 - 1.500.000 so\'m/oy',
        icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="19" x2="12" y2="11"></line><polyline points="9 14 12 11 15 14"></polyline></svg>'
    },
    'moliyaviy': {
        title: 'Oylik Moliyaviy Xizmat',
        description: 'Xodimlar ish haqi, kesmalar va bog\'langan hujjatlar aniqlik bilan hisoblanadi. Ish haqi hisobi va tegishli hujjatlar tayyorlanadi.',
        features: [
            'Ish haqi hisobi',
            'Kesmalar hisobi',
            'Ijtimoiy to\'lovlar',
            'Shartnoma hujjatlari',
            'Xodimlar hisoboti'
        ],
        price: '300.000 - 800.000 so\'m/oy',
        icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
    },
    'hujjat': {
        title: 'Hujjat Boshqaruvi',
        description: 'Shartnomalar, hisob-fakturalar, moliyaviy hujjatlar va qo\'llab-quvvatlash materiallari to\'liq, tartibda va audit uchun tayyor.',
        features: [
            'Shartnomalar boshqaruvi',
            'Hisob-fakturalar tayyorlash',
            'Moliyaviy hujjatlar',
            'Arxiv tizimi',
            'Audit uchun tayyorlik'
        ],
        price: '400.000 - 1.000.000 so\'m/oy',
        icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="3"></circle></svg>'
    },
    'maslahat': {
        title: 'Biznes Maslahat',
        description: 'Soliq strategiyasi, xarajatlar, pul oqimi va moliyaviy hisobot bo\'yicha amaliy maslahat oling. Biznesingizni rivojlantirish uchun professional maslahat.',
        features: [
            'Soliq strategiyasi',
            'Xarajatlar tahlili',
            'Pul oqimi boshqaruvi',
            'Moliyaviy rejalashtirish',
            'Biznes konsultatsiyasi'
        ],
        price: '200.000 - 500.000 so\'m/soat',
        icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>'
    },
    'qollab-quvvatlash': {
        title: 'Oylik Qo\'llab-Quvvatlash',
        description: 'Har oyning oxirida moliyaviy ko\'rib chiqish, eslatma va keyingi qadamlar uchun aniq rejani olasiz. Doimiy professional qo\'llab-quvvatlash.',
        features: [
            'Oylik moliyaviy ko\'rib chiqish',
            'Hisobotlar tayyorlash',
            'Maslahat va tavsiyalar',
            'Doimiy qo\'llab-quvvatlash',
            'Tezkor javob'
        ],
        price: '800.000 - 2.000.000 so\'m/oy',
        icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>'
    }
};

// Modal funksiyalari
function openModal(serviceKey) {
    const modal = document.getElementById('serviceModal');
    const service = servicesData[serviceKey];
    
    if (!service) return;
    
    document.getElementById('modalTitle').textContent = service.title;
    document.getElementById('modalDescription').textContent = service.description;
    document.getElementById('modalPrice').textContent = service.price;
    document.getElementById('modalIcon').innerHTML = service.icon;
    
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    service.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Close mobile menu if open
    closeMobileMenu();
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// ESC tugmasi bilan modalni yopish
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeMobileMenu();
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.querySelector('.mobile-menu-toggle');
    navLinks.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.classList.add('modal-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
    } else {
        document.body.classList.remove('modal-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (navLinks) {
        navLinks.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu when tapping the dark overlay outside the drawer
const navLinksEl = document.querySelector('.nav-links');
if (navLinksEl) {
    navLinksEl.addEventListener('click', (e) => {
        if (e.target === navLinksEl) {
            closeMobileMenu();
        }
    });
}

function sendTelegramMessage(name, contact, message) {
    const text = [
        '🔔 Yangi so\'rov!',
        '',
        `👤 Ism: ${name}`,
        `📞 Aloqa: ${contact}`,
        `💬 Xabar: ${message || '—'}`
    ].join('\n');

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}`;

    return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = url;
    });
}

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameField = document.getElementById('name');
            const contactField = document.getElementById('contactInfo');
            const messageField = document.getElementById('message');
            const submitBtn = form.querySelector('.form-submit');

            if (!nameField || !contactField || !messageField || !submitBtn) {
                showMessage('Forma yuklanmadi. Sahifani yangilab ko\'ring.', 'error');
                return;
            }

            nameField.classList.remove('error');
            contactField.classList.remove('error');

            let isValid = true;

            if (!nameField.value.trim()) {
                nameField.classList.add('error');
                isValid = false;
            }

            if (!contactField.value.trim()) {
                contactField.classList.add('error');
                isValid = false;
            }

            if (!isValid) {
                showMessage('Iltimos, barcha kerakli maydonlarni to\'ldiring.', 'error');
                return;
            }

            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Jo\'natilmoqda...';
            submitBtn.disabled = true;

            try {
                await sendTelegramMessage(
                    nameField.value.trim(),
                    contactField.value.trim(),
                    messageField.value.trim()
                );

                submitBtn.textContent = 'Jo\'natildi';
                form.reset();
                nameField.classList.remove('error');
                contactField.classList.remove('error');
                showMessage('Rahmat! So\'rovingiz Telegram orqali yuborildi.', 'success');

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    formMessage.style.display = 'none';
                }, 3000);
            } catch (error) {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                showMessage('So\'rov yuborilmadi. Internet aloqasini tekshiring.', 'error');
            }
        });
    }
});

function showMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '#hero') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add scroll effect to navbar (desktop only; CSS controls mobile positioning)
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.innerWidth < 769) return;
        lastScrollY = window.scrollY;
        if (lastScrollY > 50) {
            navbar.style.top = '10px';
        } else {
            navbar.style.top = '20px';
        }
    });
}
