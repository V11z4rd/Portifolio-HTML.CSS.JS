const techIcons = {

    html:
        "./assets/image/icon/html.png",

    css:
        "./assets/image/icon/css.png",

    js:
        "./assets/image/icon/js.png",

    react:
        "./assets/image/icon/react.png",

    typescript:
        "./assets/image/icon/typescript.png",

    next:
        "./assets/image/icon/nextjs.webp",

    csharp:
        "./assets/image/icon/c-sharp.png",

    sql:
        "./assets/image/icon/sql.webp",

    python:
        "./assets/image/icon/python.png"

};

/* =========================================
   STATUS IMAGES
========================================= */

const statusImages = {

    pronto:
        "./assets/image/status/pronto.jpg",

    atualizando:
        "./assets/image/status/atualizando.jpg",

    documentando:
        "./assets/image/status/documentando.jpg",

    desativado:
        "./assets/image/status/desativado.jpg"

};

/* =========================================
   CREATE PROJECT CARD
========================================= */

export function createProjectCard(project) {

    /* =====================================
       TECHS HTML
    ===================================== */

    const techList =
        project.technologies
            .map(tech => {

                return `
                
                <li>
                    <img
                        src="${techIcons[tech]}"
                        alt="${tech}"
                    >
                </li>

                `;

            })
            .join("");

    /* =====================================
       LIVE LINK
    ===================================== */

    const liveLink = project.live
        ? `
        
        <a
            href="${project.live}"
            target="_blank"
            rel="noopener noreferrer"
        >

            <img
                src="./assets/image/icon/link.webp"
                alt="Projeto Online"
            >

        </a>
        
        `
        : "";

    /* =====================================
       STATUS IMAGE
    ===================================== */

    const statusImage =
        statusImages[project.status];

    /* =====================================
       RETURN
    ===================================== */

    return `
    
    <article class="project-card">

        <div class="project-topbar">

            <div class="project-actions">

                <a
                    href="${project.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <img
                        src="./assets/image/icon/github.png"
                        alt="GitHub"
                    >

                </a>

                ${liveLink}

            </div>

            <span class="project-type">

                [${project.type}]

            </span>

            <div class="project-status">

                <img
                    src="${statusImage}"
                    alt="${project.status}"
                >

            </div>

        </div>

        <div class="project-image">

            <img
                src="${project.image}"
                alt="${project.title}"
            >

        </div>

        <div class="project-content">

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

            <ul class="project-tech">

                ${techList}

            </ul>

        </div>

    </article>
    
    `;
}