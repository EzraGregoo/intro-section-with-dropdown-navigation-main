const primaryNav = document.querySelector(".nav-menu")
const navToggle = document.querySelector(".mobile-nav-toggler")
const bgShadow = document.querySelector(".bg-shadow")

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visibility");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visibility", true);
        navToggle.setAttribute("aria-expanded", true);
        bgShadow.setAttribute("data-visibility", true)
    } else {
        primaryNav.setAttribute("data-visibility", false);
        navToggle.setAttribute("aria-expanded", false);
        bgShadow.setAttribute("data-visibility", false)
    }
})

const featuresMenu = document.querySelector(".features-menu")
const featuresToggle = document.querySelector(".features-toggler")

featuresToggle.addEventListener("click", () => {
    const visibility =  featuresMenu.getAttribute("data-visibility");

    if (visibility === "false") {
        featuresMenu.setAttribute("data-visibility", true);
        featuresToggle.setAttribute("aria-expanded", true);
    } else {
        featuresMenu.setAttribute("data-visibility", false);
        featuresToggle.setAttribute("aria-expanded", false);
    }
})

const companyMenu = document.querySelector(".company-menu")
const companyToggle = document.querySelector(".company-toggler")

companyToggle.addEventListener("click", () => {
    const visibility =  companyMenu.getAttribute("data-visibility");

    if (visibility === "false") {
        companyMenu.setAttribute("data-visibility", true);
        companyToggle.setAttribute("aria-expanded", true);
    } else {
        companyMenu.setAttribute("data-visibility", false);
        companyToggle.setAttribute("aria-expanded", false);
    }
})