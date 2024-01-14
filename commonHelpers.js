import{S as d,i as m}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const i=document.querySelector(".form"),c=document.querySelector(".gallery");document.querySelector(".loader");const l={key:"41712066-bd7b5e249df7a86bd45ef70ea",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},h=new d(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function y(o){return fetch(`https://pixabay.com/api?${o}`).then(t=>{if(!t)throw new Error("Request is not ok");return t.json()})}function g(o){if(o.hits.length>0){const t=o.hits.reduce((s,{webformatURL:a,largeImageURL:e,tags:r,likes:n,views:u,comments:p,downloads:f})=>s+`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
           <img class="gallery-image"
           src="${a}"
           alt="${r}"
           />
          </a>
          <div class="description">
          <p><b>Likes</b><span>${n}</span></p>
          <p><b>Views</b><span>${u}</span></p>
          <p><b>Comments</b><span>${p}</span></p>
          <p><b>Downloads</b><span>${f}</span></p>
          </div>
        </li>`,"");c.innerHTML=t,h.refresh()}else m.error({position:"topRight",width:"10px",message:"Sorry, there are no images matching your search query. Please try again!"})}i.addEventListener("submit",o=>{o.preventDefault(),c.HTML="",l.q=i.search.value.trim();const t=new URLSearchParams(l);y(t).then(s=>g(s)).catch(s=>console.log(s)),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
