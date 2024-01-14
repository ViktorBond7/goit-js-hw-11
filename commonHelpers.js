import{S as m,i as y}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),u=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";const c={key:"41712066-bd7b5e249df7a86bd45ef70ea",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},h=new m(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function g(s){return fetch(`https://pixabay.com/api?${s}`).then(r=>{if(!r)throw new Error("Request is not ok");return r.json()})}function b(s){if(s.hits.length>0){const r=s.hits.reduce((o,{webformatURL:a,largeImageURL:e,tags:t,likes:n,views:p,comments:d,downloads:f})=>o+`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
           <img class="gallery-image"
           src="${a}"
           alt="${t}"
           />
          </a>
          <div class="description">
          <p><b>Likes</b><span>${n}</span></p>
          <p><b>Views</b><span>${p}</span></p>
          <p><b>Comments</b><span>${d}</span></p>
          <p><b>Downloads</b><span>${f}</span></p>
          </div>
        </li>`,"");u.innerHTML=r,h.refresh(),i.style.display="none"}else y.error({position:"topRight",width:"10px",message:"Sorry, there are no images matching your search query. Please try again!"})}l.addEventListener("submit",s=>{s.preventDefault(),u.HTML="",i.style.display="block",c.q=l.search.value.trim();const r=new URLSearchParams(c);g(r).then(o=>b(o)).catch(o=>console.log(o.message)),s.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
