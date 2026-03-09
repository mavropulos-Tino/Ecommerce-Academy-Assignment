(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const S="https://dummyjson.com",y="/Ecommerce-Academy-Assignment/",d=e=>{localStorage.setItem("cart",JSON.stringify(e))},o=()=>{const e=localStorage.getItem("cart");return e?JSON.parse(e):[]},b=e=>{const i=o();if(e.stock===0)return;const a=i.find(n=>n.id===e.id);if(a){if(a.quantity>=e.stock)return;a.quantity++}else{const n={thumbnail:e.thumbnail,category:e.category,name:e.name,rating:e.rating,reviews:e.reviews,price:e.price,id:e.id,quantity:1};i.push(n)}d(i)},h=(e,i)=>{const a=o(),n=a.find(t=>t.id===e);n&&(n.quantity>=i||(n.quantity++,d(a)))},p=(e,i)=>{const a=o(),n=a.find(t=>t.id===e);if(n)if(n.quantity===1){const t=a.filter(s=>s.id!==e);d(t)}else n.quantity--,d(a)},v=()=>{const e=o();let i=0;return e.forEach(a=>i+=a.quantity),i},l=(e,i)=>{const n=JSON.parse(localStorage.getItem("cart")||"[]").find(t=>t.id===i.id);n?e.innerHTML=`
            <div class="cart-item-controls">
                <button class="btn-decrease"><i class="bi bi-dash"></i></button>
                <span class="btn-count">${n.quantity}</span>
                <button class="btn-increase" ${n.quantity>=i.stock?"disabled":""}><i class="bi bi-plus"></i></button>
            </div>
        `:e.innerHTML=`
            <button type="button" class="btn-add">Add to Cart</button>
        `},u=()=>{const e=document.querySelector(".cart-badge");e.textContent=v()},L=(e,i="product-grid",a=!1)=>{const n=document.querySelector(`.${i}`);e.forEach(t=>{const s=document.createElement("div");s.classList.add("card"),s.innerHTML=`
            <img class="card-thumbnail" src="${t.thumbnail}" alt="${t.name}" />
            <div class="card-body">
                <span class="card-brand">${t.category}</span>
                <p class="card-title">${t.name}</p>
                <div class="card-rating">
                    <span class="card-rating-score">${t.rating}</span>
                    <span>(${t.reviews.length} reviews)</span>
                </div>
                <p class="card-price">$${t.price}</p>
                <div class="card-btn"></div>
            </div>`;const r=s.querySelector(".card-btn");l(r,t);const f=s.querySelector(".card-thumbnail"),m=s.querySelector(".card-title");[f,m].forEach(c=>{c.addEventListener("click",()=>{localStorage.setItem("selectedProduct",JSON.stringify(t.id)),window.location.href=`${y}pages/productPage.html`})}),r.addEventListener("click",c=>{c.target.closest(".btn-add")&&(b(t),l(r,t),u()),c.target.closest(".btn-increase")&&(h(t.id,t.stock),l(r,t),u()),c.target.closest(".btn-decrease")&&(p(t.id),l(r,t),u(),a&&(o().find(g=>g.id===t.id)||s.remove()))}),n.appendChild(s)})};export{S as B,y as a,l as b,b as c,p as d,o as g,h as i,L as r,u};
