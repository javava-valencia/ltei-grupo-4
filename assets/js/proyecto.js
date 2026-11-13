/* ==============================================================
   Páginas de proyecto · jv
   Menú, galería horizontal, visor de imagen y aparición suave.
   ============================================================== */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var behavior = reduceMotion ? "auto" : "smooth";

  /* ---------- Menú hamburguesa ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setMenu(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (mq) { if (mq.matches) setMenu(false); });
  }

  /* ---------- Header: borde al hacer scroll ---------- */
  var header = document.querySelector(".header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Galería horizontal ---------- */
  var track = document.querySelector(".gallery__track");
  var items = track ? Array.prototype.slice.call(track.querySelectorAll(".gallery__item")) : [];
  var prev = document.querySelector("[data-gallery-prev]");
  var next = document.querySelector("[data-gallery-next]");
  var count = document.querySelector(".gallery__count");

  function pad() { return parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0; }
  function currentIndex() {
    var left = track.getBoundingClientRect().left;
    var best = 0, bestDist = Infinity;
    items.forEach(function (item, i) {
      var d = Math.abs(item.getBoundingClientRect().left - left - pad());
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  }
  function atEnd() { return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4; }
  function update() {
    if (!track) return;
    var i = atEnd() ? items.length - 1 : currentIndex();
    if (count) count.textContent = (i + 1) + " / " + items.length;
    if (prev) prev.disabled = track.scrollLeft <= 4;
    if (next) next.disabled = atEnd();
  }
  function goTo(i) {
    i = Math.max(0, Math.min(items.length - 1, i));
    var left = items[i].getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft - pad();
    track.scrollTo({ left: left, behavior: behavior });
  }
  if (track && items.length) {
    if (prev) prev.addEventListener("click", function () { goTo(currentIndex() - 1); });
    if (next) next.addEventListener("click", function () { goTo(currentIndex() + 1); });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(currentIndex() + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(currentIndex() - 1); }
    });
    var raf;
    track.addEventListener("scroll", function () { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- Visor de imagen ---------- */
  var viewer = document.getElementById("viewer");
  if (viewer && typeof viewer.showModal === "function" && items.length) {
    var vImg = viewer.querySelector(".viewer__img");
    var vCaption = viewer.querySelector(".viewer__caption");
    var vCount = viewer.querySelector(".viewer__count");
    var vPrev = viewer.querySelector("[data-viewer-prev]");
    var vNext = viewer.querySelector("[data-viewer-next]");
    var vClose = viewer.querySelector("[data-viewer-close]");
    var vStage = viewer.querySelector(".viewer__stage");
    var openers = items.map(function (item) { return item.querySelector(".gallery__open"); });
    var index = 0, lastOpener = null;

    var show = function (i) {
      index = (i + items.length) % items.length;
      var img = items[index].querySelector("img");
      vImg.src = img.getAttribute("data-full") || img.src;
      vImg.alt = img.alt;
      vImg.width = img.naturalWidth || img.width;
      vImg.height = img.naturalHeight || img.height;
      vCaption.textContent = img.alt;
      vCount.textContent = (index + 1) + " / " + items.length;
      vStage.scrollTop = 0;
    };
    openers.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        lastOpener = btn;
        show(i);
        viewer.showModal();
        vClose.focus();
      });
    });
    vPrev.addEventListener("click", function () { show(index - 1); });
    vNext.addEventListener("click", function () { show(index + 1); });
    vClose.addEventListener("click", function () { viewer.close(); });
    viewer.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); show(index - 1); }
    });
    viewer.addEventListener("close", function () {
      document.documentElement.style.overflow = "";
      if (lastOpener) { goTo(index); lastOpener = openers[index]; lastOpener.focus({ preventScroll: true }); }
    });
    viewer.addEventListener("cancel", function () { /* Esc cierra el visor */ });
    var observer = new MutationObserver(function () {
      document.documentElement.style.overflow = viewer.open ? "hidden" : "";
    });
    observer.observe(viewer, { attributes: true, attributeFilter: ["open"] });
  } else if (viewer) {
    /* Sin soporte de <dialog>: las imágenes se abren en una pestaña nueva */
    items.forEach(function (item) {
      var btn = item.querySelector(".gallery__open");
      var img = item.querySelector("img");
      btn.addEventListener("click", function () { window.open(img.getAttribute("data-full") || img.src, "_blank", "noopener"); });
    });
  }

  /* ---------- Volver arriba ---------- */
  var backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: behavior });
      var title = document.getElementById("project-title");
      if (title) title.focus({ preventScroll: true });
    });
  }

  /* ---------- Año ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Aparición suave ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  }
})();
