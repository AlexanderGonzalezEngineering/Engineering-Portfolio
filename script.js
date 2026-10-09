// Website behavior: project cards, filters, project details, and navigation.
const projects = window.PORTFOLIO_PROJECTS || [];
const grid = document.getElementById('project-grid');

// Create one clickable card for the homepage.
function card(project) {
    const tags = project.tags
        .map(tag => `<span>${tag}</span>`)
        .join('');

    return `
        <a class="project-card" href="project.html?slug=${encodeURIComponent(project.slug)}">
            <div class="project-visual">
                <img src="${project.image}" alt="Concept illustration for ${project.title}" loading="lazy">
                <span class="visual-arrow">↗</span>
            </div>
            <div class="card-meta">
                <span>${project.number} / ${project.category.toUpperCase()}</span>
                <span>${project.year}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.subtitle}</p>
            <div class="card-tags">${tags}</div>
        </a>
    `;
}

// Render homepage project cards and attach category filters.
if (grid) {
    function render(filter = 'all') {
        const shown = projects.filter(project =>
            filter === 'all' || project.category === filter
        );

        grid.innerHTML = shown.map(card).join('') ||
            `<div class="empty-projects">
                <span class="section-kicker">PROJECT LIBRARY / COMING SOON</span>
                <h3>Projects coming soon<span class="period">.</span></h3>
                <p>Alex's engineering projects will be published here with a dedicated overview for each.</p>
            </div>`;
    }

    render();

    document.querySelectorAll('.filter').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter').forEach(otherButton => {
                otherButton.classList.remove('active');
                otherButton.setAttribute('aria-pressed', 'false');
            });

            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            render(button.dataset.filter);
        });
    });
}

// Render a detailed project page based on the URL's slug parameter.
const detail = document.getElementById('project-detail');

if (detail) {
    const slug = new URLSearchParams(location.search).get('slug');
    const project = projects.find(item => item.slug === slug);

    if (!project) {
        detail.innerHTML = `
            <h1>Project not found.</h1>
            <p><a href="index.html#work">Return to projects →</a></p>
        `;
    } else {
        document.title = `${project.title} | Alex Gonzalez Engineering`;

        const tags = project.tags.map(tag => `<span>${tag}</span>`).join('');
        const processItems = project.approach.map(item => `<li>${item}</li>`).join('');
        const resultItems = project.results.map(item => `<li>${item}</li>`).join('');

        detail.innerHTML = `
            <a class="back-link" href="index.html#work">← BACK TO ALL PROJECTS</a>

            <div class="detail-heading">
                <span class="section-kicker">
                    PROJECT ${project.number} / ${project.category.toUpperCase()} / ${project.year}
                </span>
                <h1>${project.title}<span class="period">.</span></h1>
                <p>${project.subtitle}</p>
                <div class="card-tags">${tags}</div>
            </div>

            <img class="detail-image" src="${project.image}" alt="Concept illustration for ${project.title}">

            <div class="detail-body">
                <aside>
                    <span class="section-kicker">PROJECT OVERVIEW</span>
                    <p><strong>Tools & methods</strong><br>${project.tools}</p>
                    <p class="small-note">Sample content: replace with your own project details and photographs.</p>
                </aside>

                <div>
                    <section>
                        <h2>Overview</h2>
                        <p>${project.overview}</p>
                    </section>

                    <section>
                        <h2>Engineering challenge</h2>
                        <p>${project.challenge}</p>
                    </section>

                    <section>
                        <h2>Process & development</h2>
                        <ol>${processItems}</ol>
                    </section>

                    <section>
                        <h2>Results & lessons</h2>
                        <ul>${resultItems}</ul>
                    </section>

                    <a class="button secondary" href="index.html#work">← More projects</a>
                </div>
            </div>
        `;
    }
}

// Update copyright year automatically.
const year = document.getElementById('year');
if (year) {
    year.textContent = new Date().getFullYear();
}

// Toggle the navigation menu on smaller screens.
const toggle = document.querySelector('.menu-toggle');
if (toggle) {
    toggle.addEventListener('click', () => {
        const nav = document.querySelector('.site-header nav');
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });
}
