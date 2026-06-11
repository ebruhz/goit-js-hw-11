
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

iziToast.success({
    title: "OK",
    message: "Çalışıyor!"
});
iziToast.settings({
    timeout: 3000,
    position: "topRight",
    transitionIn: "fadeInDown",
    transitionOut: "fadeOutUp",
    backgroundColor: "#0f172a",
    titleColor: "#22c55e",
    messageColor: "#e5e7eb",
    progressBarColor: "#22c55e",
    iconColor: "#22c55e",
    close: false,
});

const API_KEY = "56241069-37a6f741caefcccfacd6c7ec8";
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const gallery = document.getElementById("gallery");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    fetchImages(query);
});
function fetchImages(query) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
        .then(res => res.json())
        .then(data => {


            if (data.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
                return;
            }

            renderImages(data.hits);
        })
        .catch(err => {
            console.log(err);

            iziToast.error({
                title: "Error",
                message: "Something went wrong!",
                position: "topRight",
            });
        });
}