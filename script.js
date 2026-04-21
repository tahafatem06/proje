function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Buton aktiflik durumu
    buttons.forEach(btn => {
        btn.classList.remove('active');

        if (category === 'all' && btn.innerText === 'Tümü') {
            btn.classList.add('active');
        }

        if (btn.innerText.toLowerCase() === category) {
            btn.classList.add('active');
        }
    });

    // Kart filtreleme
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            card.style.opacity = '1';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        }
    });
}

/* ===== DARK MODE (TEK SİSTEM) ===== */
const toggleBtn = document.getElementById("darkModeToggle");

// Sistem temasını kontrol et
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Sayfa açılışında tema yükle
if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && systemDark)
) {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
} else {
    toggleBtn.textContent = "🌙";
}

// Toggle event (SADECE 1 KEZ)
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;

        // glow pozisyonu
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });
});