(() => {
    const showcase = document.querySelector("[data-feature-project]");
    const tabs = Array.from(document.querySelectorAll("[data-feature-project-tab]"));

    if (!showcase || tabs.length === 0) {
        return;
    }

    const elements = {
        name: document.getElementById("featured-project-name"),
        summary: document.getElementById("featured-project-summary"),
        image: document.getElementById("featured-project-image"),
        label: document.getElementById("featured-project-label"),
        headline: document.getElementById("featured-project-headline"),
        description: document.getElementById("featured-project-description"),
        points: document.getElementById("featured-project-points"),
        stack: document.getElementById("featured-project-stack"),
        link: document.getElementById("featured-project-link"),
    };

    const projects = [
        {
            name: "Solar Site Feasibility - Multi-Agent PoC",
            summary: "A recent GenAI proof of concept that combines multi-agent orchestration, public-source research, permitting workflows, and scoring logic into a practical Go or No-Go solar feasibility tool.",
            image: "assets/projects/1758548669387.jpeg",
            imageAlt: "Solar Site Feasibility featured project image",
            label: "LangGraph, Streamlit, LLMs",
            headline: "Address-level feasibility scoring with modular AI agents",
            description: "Built as a Streamlit and LangGraph proof of concept, the system evaluates one or more addresses, runs independent agents for research and permitting, and can optionally layer in irradiance, economics, grid, risk, and web context before producing a final feasibility score and decision.",
            points: [
                "Uses LangGraph state orchestration so agents run independently and fan in to a shared scoring stage.",
                "Generates human-readable justifications plus a professional permit checklist PDF.",
                "Supports both deterministic heuristic scoring and LLM-assisted scoring for the final Go or No-Go recommendation."
            ],
            stack: ["LangGraph", "Streamlit", "Multi-Agent AI", "PDF Generation"],
            linkHref: "https://github.com/Nijaoui-Wassim/solar-site-feasibility-multi-agents",
        },
        {
            name: "InsightWearAI - Smart Necklace",
            summary: "A founder-led assistive AI project focused on affordable wearable technology that helps visually impaired users navigate more independently and confidently.",
            image: "assets/projects/insightwear-necklace.jpg",
            imageAlt: "InsightWearAI smart necklace featured project image",
            label: "Assistive AI, Wearables, Computer Vision",
            headline: "Wearable navigation support built around real-world accessibility",
            description: "InsightWearAI combines embedded hardware, AI perception, and practical product thinking into an assistive necklace designed to help blind users understand and move through their surroundings without relying on expensive inaccessible devices.",
            points: [
                "Led the startup and turned the concept into a demonstrable product direction rather than only a competition pitch.",
                "Won more than 6 awards across innovation programs and entrepreneurship competitions.",
                "Focused on affordable assistive technology with a clear real-world user problem at the center."
            ],
            stack: ["Computer Vision", "Wearables", "Founder-Led", "Assistive Tech"],
            linkHref: "https://youtu.be/71_7_JhuBxg",
        },
        {
            name: "Air Quality Monitoring System",
            summary: "A research and engineering platform that connects custom hardware, embedded systems, deployment workflows, and AI-driven analytics into a long-running real-world monitoring system.",
            image: "assets/projects/project25.jpg",
            imageAlt: "Air quality monitoring featured project image",
            label: "Hardware, Embedded Systems, Research",
            headline: "End-to-end sensing platform from devices to deployment",
            description: "This work combined hardware design, sensor integration, device-side coding, backend systems, and real-world deployment to create an air quality platform that supported long-term monitoring and later occupancy-related research use cases.",
            points: [
                "Included PCB design, case design, circuits, wiring, and the physical build of custom monitors.",
                "Covered server-side architecture plus device code in C for the deployed air quality systems.",
                "Scaled to more than 20 high-resolution monitors that remained operational for years."
            ],
            stack: ["Hardware", "PCB Design", "C", "Deployment"],
            linkHref: "https://www.smartenv.ca/",
        }
    ];

    let activeIndex = 0;
    let rotationTimer = null;

    function renderProject(project, index) {
        showcase.classList.add("is-swapping");

        window.setTimeout(() => {
            elements.name.textContent = project.name;
            elements.summary.textContent = project.summary;
            elements.image.src = project.image;
            elements.image.alt = project.imageAlt;
            elements.label.textContent = project.label;
            elements.headline.textContent = project.headline;
            elements.description.textContent = project.description;
            elements.link.href = project.linkHref;

            elements.points.innerHTML = project.points
                .map((point) => `<li>${point}</li>`)
                .join("");

            elements.stack.innerHTML = project.stack
                .map((item) => `<span>${item}</span>`)
                .join("");

            tabs.forEach((tab, tabIndex) => {
                const isActive = tabIndex === index;
                tab.classList.toggle("is-active", isActive);
                tab.setAttribute("aria-pressed", String(isActive));
            });

            showcase.classList.remove("is-swapping");
        }, 180);
    }

    function showProject(index) {
        activeIndex = index;
        renderProject(projects[index], index);
    }

    function startRotation() {
        if (rotationTimer) {
            window.clearInterval(rotationTimer);
        }

        rotationTimer = window.setInterval(() => {
            const nextIndex = (activeIndex + 1) % projects.length;
            showProject(nextIndex);
        }, 4800);
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const nextIndex = Number(tab.dataset.featureProjectTab);

            if (Number.isNaN(nextIndex)) {
                return;
            }

            showProject(nextIndex);
            startRotation();
        });
    });

    showProject(activeIndex);
    startRotation();
})();
