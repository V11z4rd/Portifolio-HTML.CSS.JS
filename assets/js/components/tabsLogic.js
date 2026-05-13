/* =========================================
   SKILLS TABS
========================================= */

const tabs =
    document.querySelectorAll(
        ".selector-btn"
    );

const panes =
    document.querySelectorAll(
        ".skill-pane"
    );

/* =========================================
   TAB CLICK
========================================= */

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        /* ================================
           REMOVE ACTIVE
        ================================= */

        tabs.forEach(button => {

            button.classList.remove("active");

        });

        panes.forEach(pane => {

            pane.classList.remove("active");

            pane.style.display = "none";

        });

        /* ================================
           ACTIVE BUTTON
        ================================= */

        tab.classList.add("active");

        /* ================================
           TARGET PANE
        ================================= */

        const filter =
            tab.dataset.filter;

        let targetPane = null;

        /* ================================
           MAP
        ================================= */

        if (filter === "hardSkill") {

            targetPane =
                document.querySelector(
                    "#hard-skills-pane"
                );

        }

        if (filter === "softSkill") {

            targetPane =
                document.querySelector(
                    "#soft-skills-pane"
                );

        }

        /* ================================
           SHOW TARGET
        ================================= */

        if (targetPane) {

            targetPane.style.display =
                "block";

            targetPane.classList.add(
                "active"
            );

        }

    });

});