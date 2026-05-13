import { projects }
from "../data/projects.js";

import { renderProjects }
from "./galleryRender.js";

/* =========================================
   FILTER BUTTONS
========================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn, .filter-icon"
    );

/* =========================================
   UPDATE ACTIVE BUTTON
========================================= */

function updateActiveButton(buttonClicked) {

    filterButtons.forEach(button => {

        button.classList.remove("active");

    });

    buttonClicked.classList.add("active");

}

/* =========================================
   FILTER PROJECTS
========================================= */

function filterProjects(filter) {

    /* =====================================
       TODOS
    ===================================== */

    if (filter === "all") {

        renderProjects(projects);

        return;
    }

    /* =====================================
       FILTRADOS
    ===================================== */

    const filteredProjects =
        projects.filter(project => {

            return project.technologies.includes(
                filter
            );

        });

    renderProjects(filteredProjects);

}

/* =========================================
   BUTTON EVENTS
========================================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* ================================
           FILTER
        ================================= */

        const filter =
            button.dataset.filter;

        /* ================================
           ACTIVE BUTTON
        ================================= */

        updateActiveButton(button);

        /* ================================
           FILTER LOGIC
        ================================= */

        filterProjects(filter);

    });

});