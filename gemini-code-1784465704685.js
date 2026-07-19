const LINKS = {
    shopee: "https://shopee.co.id/Helloheybi",
    whatsapp: "https://wa.me/6287734340988",
    instagram: "https://instagram.com/heybi.kids",
    tiktok: "https://tiktok.com/@heybi.kids",
    tokopedia: "https://tokopedia.com/USERNAME",
    website: "https://USERNAME.github.io/heybi"
};

const linkData = [
    { name: "Shopee", url: LINKS.shopee, icon: "🛍" },
    { name: "WhatsApp", url: LINKS.whatsapp, icon: "💬" },
    { name: "Instagram", url: LINKS.instagram, icon: "📸" },
    { name: "TikTok", url: LINKS.tiktok, icon: "🎵" },
    { name: "Tokopedia", url: LINKS.tokopedia, icon: "🛒" },
    { name: "Website", url: LINKS.website, icon: "🌐" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Hide Loader
    setTimeout(() => document.getElementById('loader').style.display = 'none', 1000);

    // Populate Links
    const container = document.getElementById('link-container');
    linkData.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.className = 'link-item fade-up';
        a.innerHTML = `<span>${item.icon} ${item.name}</span> <span>→</span>`;
        container.appendChild(a);
    });

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Button Main Listener
    document.getElementById('shopee-btn-main').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = LINKS.shopee;
    });
});