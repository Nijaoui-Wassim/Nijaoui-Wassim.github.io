(() => {
    const portrait = document.getElementById("hero-portrait");

    if (!portrait) {
        return;
    }

    const images = (portrait.dataset.images || "")
        .split(",")
        .map((image) => image.trim())
        .filter(Boolean);

    if (images.length < 2) {
        return;
    }

    let currentIndex = 0;

    images.forEach((imageSrc) => {
        const preload = new Image();
        preload.src = imageSrc;
    });

    window.setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        portrait.style.opacity = "0.35";

        window.setTimeout(() => {
            portrait.src = images[currentIndex];
            portrait.addEventListener(
                "load",
                () => {
                    portrait.style.opacity = "1";
                },
                { once: true }
            );
        }, 220);
    }, 3500);
})();
