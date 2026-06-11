import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

iziToast.settings({
    theme: "dark",
    position: "topRight",
    timeout: 2500,
    close: true,
    progressBar: true,
    pauseOnHover: true,
    transitionIn: "fadeInDown",
    transitionOut: "fadeOutUp",
    backgroundColor: "#1e293b",
    titleColor: "#e2e8f0",
    messageColor: "#cbd5e1",
    icon: "material-icons",
});


const API_KEY = "56241069-37a6f741caefcccfacd6c7ec8";

const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchInput");
const gallery = document.querySelector("#gallery");
const loader = document.querySelector("#loader");

const lightbox = new SimpleLightbox("#gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = input.value.trim();
    if (!query) return;

    loader.classList.remove("hidden");
    gallery.innerHTML = "";

    try {
        const res = await fetch(
            `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
        );

        const data = await res.json();

        if (!data.hits.length) {
            gallery.innerHTML = "";

            iziToast.error({
                title: "Hata",
                message: "Görsel bulunamadı",
                position: "topRight",
            });

            return;
        }
        const markup = data.hits
            .map(img => `
                <a href="${img.largeImageURL}">
                  <img src="${img.webformatURL}" alt="${img.tags}" width="250"/>
                </a>
            `)
            .join("");

        gallery.innerHTML = markup;
        lightbox.refresh();

    } catch (err) {
        iziToast.error({
            title: "Hata",
            message: "API isteği başarısız",
            position: "topRight",
        });
    } finally {
        loader.classList.add("hidden");
        input.value = "";
    }

});