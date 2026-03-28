import{S,a as q,i as u}from"./assets/vendor-xJi9366P.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();let d;const m=document.querySelector(".gallery"),f=document.querySelector(".loader");function h(a){const t=a.map(({webformatURL:r,largeImageURL:n,tags:e,likes:s,views:o,comments:w,downloads:b})=>`
          <li class="item">
            <a class="item-link" href="${n}">
              <img class="item-img" src="${r}" alt="${e}" />
              <div class="wrapper">
                <div class="span-wrapper">
                  <span class="span-name">Likes</span>
                  <span class="span-value">${s}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Views</span>
                  <span class="span-value">${o}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Comments</span>
                  <span class="span-value">${w}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Downloads</span>
                  <span class="span-value">${b}</span>
                </div>
              </div>
            </a>
          </li>
        `).join("");m.insertAdjacentHTML("beforeend",t),d?d.refresh():d=new S(".gallery a",{captionsData:"alt",captionDelay:250})}function P(){m.innerHTML=""}function y(){f.classList.remove("is-hidden")}function g(){f.classList.add("is-hidden")}async function v(a,t,r){const n="https://pixabay.com/api/",s={q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"55115585-71990795827d4e19bcf2e84dd",page:t,per_page:r};return(await q.get(n,{params:s})).data}const L=document.querySelector(".form"),$=document.querySelector("input");let i=1,c=15,p="";const l=document.querySelector(".btn-load-more");L.addEventListener("submit",E);l.addEventListener("click",M);async function E(a){a.preventDefault();const t=$.value.trim();if(t){p=t,i=1,P(),l.classList.add("is-hidden"),y();try{const r=await v(p,i,c);if(!r.hits||r.hits.length===0)throw new Error;h(r.hits),r.totalHits>c&&l.classList.remove("is-hidden"),i+=1}catch{u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,progressBar:!1})}g(),L.reset()}}async function M(){y();try{const a=await v(p,i,c);h(a.hits);const t=Math.ceil(a.totalHits/c);i>=t&&(l.classList.add("is-hidden"),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),i+=1}catch(a){console.log(a)}g()}
//# sourceMappingURL=index.js.map
