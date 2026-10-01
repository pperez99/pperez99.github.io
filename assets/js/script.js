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

function openModalFromCard(card) {

  const title = card.dataset.title;
  const text = card.dataset.text;
  const image = card.dataset.image;

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerHTML = text;
  document.getElementById("modalImage").src = image;

  document.getElementById("projectModal").style.display = "flex";

}

function closeModal() {

  document.getElementById("projectModal").style.display = "none";

}

const downloadLinks = document.querySelectorAll('.download-link');

downloadLinks.forEach(link => {

  link.addEventListener('click', async function (event) {

    event.preventDefault();

    const fileUrl = this.href;
    const fileName = this.dataset.download || this.getAttribute('download');

    try {

      const response = await fetch(fileUrl);
      const arrayBuffer = await response.arrayBuffer();
      const binary = Array.from(new Uint8Array(arrayBuffer), byte => String.fromCharCode(byte)).join('');
      const base64 = btoa(binary);
      const downloadUrl = `data:application/octet-stream;base64,${base64}`;

      const tempLink = document.createElement('a');
      tempLink.href = downloadUrl;
      tempLink.download = fileName;
      tempLink.style.display = 'none';

      document.body.appendChild(tempLink);
      tempLink.click();
      tempLink.remove();

    } catch (error) {
      const fallbackLink = document.createElement('a');
      fallbackLink.href = fileUrl;
      fallbackLink.download = fileName;
      fallbackLink.target = '_self';
      fallbackLink.rel = 'noopener';
      fallbackLink.style.display = 'none';
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      fallbackLink.remove();
    }

  });

});