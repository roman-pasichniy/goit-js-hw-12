import{S as f,a as m}from"./assets/vendor-uT9N8zmT.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();let o;const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(n){const a=n.map(({webformatURL:t,largeImageURL:r,tags:e,likes:s,views:i,comments:u,downloads:d})=>`
          <li class="item">
            <a class="item-link" href="${r}">
              <img class="item-img" src="${t}" alt="${e}" />
              <div class="wrapper">
                <div class="span-wrapper">
                  <span class="span-name">Likes</span>
                  <span class="span-value">${s}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Views</span>
                  <span class="span-value">${i}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Comments</span>
                  <span class="span-value">${u}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Downloads</span>
                  <span class="span-value">${d}</span>
                </div>
              </div>
            </a>
          </li>
        `).join("");l.innerHTML=a,o?o.refresh():o=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function h(){l.innerHTML=""}function g(){c.style.display="inline-block"}function v(){c.style.display="none"}async function w(n){const a="https://pixabay.com/api/",r={q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"55115585-71990795827d4e19bcf2e84dd"};return(await m.get(a,{params:r})).data}const p=document.querySelector(".form"),L=document.querySelector("input");p.addEventListener("submit",b);async function b(n){n.preventDefault();try{const a=L.value.trim();if(!a)return;h(),g();const t=await w(a);if(!t.hits||t.hits.length===0)throw new Error("No images");y(t.hits)}catch{}v(),p.reset()}
//# sourceMappingURL=index.js.map
