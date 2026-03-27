import{S as f,a as y,i as g}from"./assets/vendor-xJi9366P.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();let o;const c=document.querySelector(".gallery"),p=document.querySelector(".loader");function h(r){const a=r.map(({webformatURL:t,largeImageURL:n,tags:e,likes:s,views:i,comments:d,downloads:m})=>`
          <li class="item">
            <a class="item-link" href="${n}">
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
                  <span class="span-value">${d}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Downloads</span>
                  <span class="span-value">${m}</span>
                </div>
              </div>
            </a>
          </li>
        `).join("");c.innerHTML=a,o?o.refresh():o=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function v(){c.innerHTML=""}function w(){p.style.display="inline-block"}function L(){p.style.display="none"}async function b(r){const a="https://pixabay.com/api/",n={q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"55115585-71990795827d4e19bcf2e84dd"};return(await y.get(a,{params:n})).data}const u=document.querySelector(".form"),S=document.querySelector("input");let l=1;u.addEventListener("submit",q);async function q(r){r.preventDefault();try{const a=S.value.trim();if(!a)return;v(),w();const t=await b(a);if(!t.hits||t.hits.length===0)throw new Error("No images");h(t.hits),l+=1,l>1}catch{g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,progressBar:!1})}L(),u.reset()}
//# sourceMappingURL=index.js.map
