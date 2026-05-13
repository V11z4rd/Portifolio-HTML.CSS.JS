/* =========================================
   DATA
========================================= */

import { projects }
from "./data/projects.js";

/* =========================================
   COMPONENTS
========================================= */

import { renderProjects }
from "./components/galleryRender.js";

/* =========================================
   LOGICS
========================================= */

import "./components/filterLogic.js";
import "./components/tabsLogic.js";

/* =========================================
   INITIAL RENDER
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProjects(projects);

    }
);