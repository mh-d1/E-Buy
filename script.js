
document.addEventListener('DOMContentLoaded', () => {
    console.log('E-Buy siap!');

    // Smooth scroll menu
    const menuLinks = document.querySelectorAll('header nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.getElementById(link.getAttribute('href').replace('#',''));
            if(target) target.scrollIntoView({ behavior:'smooth' });
        });
    });

    // Form handling
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();

            if(!name || !email || !message) {
                alert('Harap isi semua kolom!');
                return;
            }
            alert(`Terima kasih ${name}, pesanmu berhasil dikirim!`);
            contactForm.reset();
        });
    }

    // Dark mode toggle
    const darkBtn = document.createElement('button');
    darkBtn.textContent = 'Toggle Dark Mode';
    darkBtn.style.position = 'fixed';
    darkBtn.style.bottom = '20px';
    darkBtn.style.right = '20px';
    darkBtn.style.padding = '10px 20px';
    darkBtn.style.cursor = 'pointer';
    document.body.appendChild(darkBtn);
    darkBtn.addEventListener('click', ()=> document.body.classList.toggle('dark-mode'));

    // Scroll animation
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) sec.classList.add('fade-in');
        });
    });

    // Hero button interaktif
    const shopBtn = document.querySelector('.shop-btn');
    if(shopBtn) shopBtn.addEventListener('click', () => {
        alert('Aksi Belanja Sekarang! Bisa diarahkan ke halaman produk.');
    });
});
