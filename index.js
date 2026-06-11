import{i,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();i.settings({theme:"dark",position:"topRight",timeout:2500,close:!0,progressBar:!0,pauseOnHover:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",backgroundColor:"#1e293b",titleColor:"#e2e8f0",messageColor:"#cbd5e1",icon:"material-icons"});const p="56241069-37a6f741caefcccfacd6c7ec8",f=document.querySelector("#searchForm"),l=document.querySelector("#searchInput"),a=document.querySelector("#gallery"),u=document.querySelector("#loader"),m=new d("#gallery a",{captionsData:"alt",captionDelay:250});f.addEventListener("submit",async c=>{c.preventDefault();const r=l.value.trim();if(r){u.classList.remove("hidden"),a.innerHTML="";try{const o=await(await fetch(`https://pixabay.com/api/?key=${p}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)).json();if(!o.hits.length){a.innerHTML="",i.error({title:"Error",message:"Image not found",position:"topRight"});return}const t=o.hits.map(e=>`
  <a href="${e.largeImageURL}" class="card">
    <div class="img-wrap">
      <img src="${e.webformatURL}" alt="${e.tags}" />
    </div>

    <div class="info">
      <span>❤️Likes: ${e.likes}</span>
      <span>👁Views: ${e.views}</span>
      <span>💬Comments: ${e.comments}</span>
      <span>⬇️Downloads: ${e.downloads}</span>
    </div>
  </a>
`).join("");a.innerHTML=t,m.refresh()}catch{i.error({title:"Error",message:"API request failed",position:"topRight"})}finally{u.classList.add("hidden"),l.value=""}}});
//# sourceMappingURL=index.js.map
