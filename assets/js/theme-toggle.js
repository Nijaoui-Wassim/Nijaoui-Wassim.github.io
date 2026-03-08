(() => {
    const THEME_KEY = "portfolio-theme";
    const root = document.body;
    const toggleButtons = document.querySelectorAll("[data-theme-toggle]");

    if (!root || toggleButtons.length === 0) {
        return;
    }

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const savedTheme = window.localStorage.getItem(THEME_KEY);

    function applyTheme(theme) {
        root.dataset.theme = theme;

        toggleButtons.forEach((button) => {
            const isDark = theme === "dark";
            button.setAttribute("aria-pressed", String(isDark));
            button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
            const label = button.querySelector("[data-theme-label]");

            if (label) {
                label.textContent = isDark ? "Dark" : "Light";
            }
        });
    }

    applyTheme(savedTheme || systemTheme);

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
            window.localStorage.setItem(THEME_KEY, nextTheme);
            applyTheme(nextTheme);
        });
    });
})();
