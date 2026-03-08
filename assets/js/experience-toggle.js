(() => {
    const toggleButtons = Array.from(document.querySelectorAll(".experience-toggle[data-toggle-text]"));

    if (toggleButtons.length === 0) {
        return;
    }

    toggleButtons.forEach((button) => {
        const targetSelector = button.getAttribute("data-bs-target");
        const [collapsedText, expandedText] = (button.getAttribute("data-toggle-text") || "").split("|");

        if (!targetSelector || !collapsedText || !expandedText) {
            return;
        }

        const target = document.querySelector(targetSelector);

        if (!target) {
            return;
        }

        const updateLabel = (isExpanded) => {
            button.textContent = isExpanded ? expandedText : collapsedText;
            button.setAttribute("aria-expanded", String(isExpanded));
        };

        updateLabel(target.classList.contains("show"));
        target.addEventListener("shown.bs.collapse", () => updateLabel(true));
        target.addEventListener("hidden.bs.collapse", () => updateLabel(false));
    });
})();
