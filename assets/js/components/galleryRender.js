import { createProjectCard }
from "./projectCard.js";

/* =========================================
   GRID CONTAINER
========================================= */

const projectsGrid =
    document.querySelector(
        "#projects-grid-container"
    );

/* =========================================
   RENDER PROJECTS
========================================= */

export function renderProjects(projectsList) {

    /* =====================================
       LIMPA GRID
    ===================================== */

    projectsGrid.innerHTML = "";

    /* =====================================
       SEM RESULTADOS
    ===================================== */

    if (projectsList.length === 0) {

        projectsGrid.innerHTML = `
        
        <div class="empty-projects">

            <h3>
                Nenhum projeto encontrado
            </h3>

            <p>
                Não existem projetos nessa categoria.
            </p>

        </div>
        
        `;

        return;
    }

    /* =====================================
       RENDER DOS CARDS
    ===================================== */

    projectsList.forEach(project => {

        const cardHTML =
            createProjectCard(project);

        projectsGrid.innerHTML +=
            cardHTML;

    });

}