'use strict';

/* ============================= */
/* PAGE NAVIGATION */
/* ============================= */

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article");

navigationLinks.forEach(link => {

  link.addEventListener("click", function () {

    const targetPage = this.getAttribute("data-page");

    navigationLinks.forEach(btn => btn.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    this.classList.add("active");

    const targetArticle = document.querySelector(`article[data-page="${targetPage}"]`);
    if (targetArticle) {
      targetArticle.classList.add("active");
    }

    window.scrollTo(0, 0);

  });

});

function toggleCard(card) {

  card.classList.toggle("active");

}

function openModal(title, text, image) {

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;
  document.getElementById("modalImage").src = image;

  document.getElementById("projectModal").style.display = "flex";

}

function closeModal() {

  document.getElementById("projectModal").style.display = "none";

}