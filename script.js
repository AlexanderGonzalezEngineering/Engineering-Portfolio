/* Navigation, subtle reveal animations, and project brochure rendering. */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const projects = window.portfolioProjects || [];
const projectGrid = document.getElementById("project-grid");

if (projectGrid) {
    if (projects.length === 0) {
        projectGrid.innerHTML = `
            <div class="empty-state">
                <span class="eyebrow">Project Library / Coming Soon</span>
                <h3>Projects coming soon<span class="gold">.</span></h3>
                <p>Engineering projects and detailed overviews will appear here.</p>
            </div>
        `;
    } else {
        projects.forEach((project) => {
            const card = document.createElement("a");
            card.className = "project-tile";
            card.href = `project.html?slug=${encodeURIComponent(project.slug)}`;

            const heading = document.createElement("h3");
            heading.textContent = project.title;

            const category = document.createElement("span");
            category.className = "eyebrow";
            category.textContent = project.category;

            const summary = document.createElement("p");
            summary.textContent = project.summary;

            if (project.image) {
                const image = document.createElement("img");
                image.src = project.image;
                image.alt = `${project.title} project image`;
                image.loading = "lazy";
                card.append(image);
            }

            card.append(category, heading, summary);
            projectGrid.append(card);
        });
    }
}

const projectDetail = document.getElementById("project-detail");

if (projectDetail) {
    const slug = new URLSearchParams(window.location.search).get("slug");
    const project = projects.find((item) => item.slug === slug);

    if (project) {
        document.title = `${project.title} / Alex Gonzalez`;

        projectDetail.replaceChildren();

        const eyebrow = document.createElement("p");
        eyebrow.className = "eyebrow";
        eyebrow.textContent = project.category;

        const heading = document.createElement("h1");
        heading.textContent = project.title;

        const lead = document.createElement("p");
        lead.className = "inner-lead";
        lead.textContent = project.summary;

        const panel = document.createElement("div");
        panel.className = "reading-panel";

        const overviewHeading = document.createElement("h2");
        overviewHeading.textContent = "Project Overview";

        const overview = document.createElement("p");
        overview.textContent = project.overview || project.summary;

        panel.append(overviewHeading, overview);

        if (project.image) {
            const image = document.createElement("img");
            image.className = "project-hero-image";
            image.src = project.image;
            image.alt = `${project.title} render`;
            panel.prepend(image);
        }

        if (project.highlights && project.highlights.length) {
            const highlightsHeading = document.createElement("h2");
            highlightsHeading.textContent = "Technical Highlights";

            const list = document.createElement("ul");

            project.highlights.forEach((highlight) => {
                const item = document.createElement("li");
                item.textContent = highlight;
                list.append(item);
            });

            panel.append(highlightsHeading, list);
        }

        const back = document.createElement("a");
        back.href = "index.html#projects";
        back.className = "outline-button sweep-link";
        back.textContent = "← Back to Projects";

        projectDetail.append(eyebrow, heading, lead, panel, back);
    }
}

/* Reveal only when the user hasn't requested reduced motion. */
if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
    });
} else {
    document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-visible");
    });
}


/* Scroll indicator: idle pulse is handled by CSS. The cue fades out
   when the visitor scrolls down, then returns near the top. */
const scrollCue = document.querySelector(".scroll-cue");

if (scrollCue) {
    const updateScrollCue = () => {
        scrollCue.classList.toggle("is-hidden", window.scrollY > 160);
    };

    window.addEventListener("scroll", updateScrollCue, { passive: true });
    updateScrollCue();
}
