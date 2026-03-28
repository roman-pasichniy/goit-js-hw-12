import{S as M,a as P,i as l}from"./assets/vendor-xJi9366P.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let d;const u=document.querySelector(".gallery");function m(r){const a=r.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:n,comments:S,downloads:q})=>`
          <li class="item">
            <a class="item-link" href="${o}">
              <img class="item-img" src="${s}" alt="${e}" />
              <div class="wrapper">
                <div class="span-wrapper">
                  <span class="span-name">Likes</span>
                  <span class="span-value">${t}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Views</span>
                  <span class="span-value">${n}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Comments</span>
                  <span class="span-value">${S}</span>
                </div>
                <div class="span-wrapper">
                  <span class="span-name">Downloads</span>
                  <span class="span-value">${q}</span>
                </div>
              </div>
            </a>
          </li>
        `).join("");u.insertAdjacentHTML("beforeend",a),d?d.refresh():d=new M(".gallery a",{captionsData:"alt",captionDelay:250})}function $(){u.innerHTML=""}const f=document.querySelector(".loader");function h(){f.classList.remove("is-hidden")}function y(){f.classList.add("is-hidden")}const g=document.querySelector(".btn-load-more");function v(){g.classList.remove("is-hidden")}function L(){g.classList.add("is-hidden")}async function w(r,a,s){const o="https://pixabay.com/api/",t={q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"55115585-71990795827d4e19bcf2e84dd",page:a,per_page:Math.max(s,15)};return(await P.get(o,{params:t})).data}const b=document.querySelector(".form"),E=document.querySelector("input");let i=1,c=15,p="";const B=document.querySelector(".btn-load-more");b.addEventListener("submit",O);B.addEventListener("click",R);async function O(r){r.preventDefault();const a=E.value.trim();if(a){p=a,i=1,$(),L(),h();try{const s=await w(p,i,c);if(!s.hits||s.hits.length===0)throw new Error;m(s.hits),Math.ceil(s.totalHits/c)>1?v():l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),i+=1}catch{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,progressBar:!1})}finally{y()}b.reset()}}async function R(){L(),h();try{const r=await w(p,i,c);m(r.hits);const a=Math.ceil(r.totalHits/c);i<a?v():l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),i+=1;const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}catch{l.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
