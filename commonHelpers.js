import{S as p,i as y}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),u=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const c={key:"41712066-bd7b5e249df7a86bd45ef70ea",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},h=new p(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function g(o){return fetch(`https://pixabay.com/api?${o}`).then(r=>{if(!r)throw new Error("Request is not ok");return r.json()})}function b(o){if(o.hits.length>0){const r=o.hits.reduce((s,{webformatURL:i,largeImageURL:e,tags:t,likes:n,views:d,comments:f,downloads:m})=>s+`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
           <img class="gallery-image"
           src="${i}"
           alt="${t}"
           />
          </a>
          <div class="description">
          <p><b>Likes</b>${n}</p>
          <p><b>Views</b>${d}</p>
          <p><b>Comments</b>${f}</p>
          <p><b>Downloads</b>${m}</p>
          </div>
        </li>`,"");u.innerHTML=r,h.refresh(),a.style.display="none"}else y.error({position:"topRight",width:"10px",message:"Sorry, there are no images matching your search query. Please try again!"})}l.addEventListener("submit",o=>{o.preventDefault(),u.HTML="",a.style.display="block",c.q=l.search.value.trim();const r=new URLSearchParams(c);g(r).then(s=>b(s)).catch(s=>console.log(s.message)),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
