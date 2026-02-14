'use strict';

/* ============================= */
/* SAFE TOGGLE FUNCTION */
/* ============================= */

const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};


/* ============================= */
/* SIDEBAR (safe version) */
/* ============================= */

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}


/* ============================= */
/* PAGE NAVIGATION (fixed) */
/* ============================= */

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article");

navigationLinks.forEach(link => {

  link.addEventListener("click", function () {

    const targetPage = this.getAttribute("data-page");

    // Remove active from all
    navigationLinks.forEach(btn => btn.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    // Activate clicked button
    this.classList.add("active");

    // Show corresponding page
    const targetArticle = document.querySelector(`article[data-page="${targetPage}"]`);
    if (targetArticle) {
      targetArticle.classList.add("active");
    }

    window.scrollTo(0, 0);

  });

});