import{a as m,u as r,i as b,d as g}from"./cartBadgeService-DAz5Sdg9.js";const p="https://dummyjson.com",h="/Ecommerce-Academy-Assignment/";class u{constructor(s){this.thumbnail=s.thumbnail,this.category=s.category,this.name=s.title,this.rating=s.rating,this.reviews=s.reviews,this.price=s.price,this.id=s.id,this.stock=s.stock}}const v=a=>a.map(s=>new u(s)),c=(a,s)=>{const t=JSON.parse(localStorage.getItem("cart")||"[]").find(e=>e.id===s.id);t?a.innerHTML=`
            <div class="cart-item-controls">
                <button class="btn-decrease"><i class="bi bi-dash"></i></button>
                <span class="btn-count">${t.quantity}</span>
                <button class="btn-increase" ${t.quantity>=s.stock?"disabled":""}><i class="bi bi-plus"></i></button>
            </div>
        `:a.innerHTML=`
            <button type="button" class="btn-add">Add to Cart</button>
        `},$=(a,s="product-grid")=>{const o=document.querySelector(`.${s}`);a.forEach(t=>{const e=document.createElement("div");e.classList.add("card"),e.innerHTML=`
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
            </div>`;const i=e.querySelector(".card-btn");c(i,t);const l=e.querySelector(".card-thumbnail"),d=e.querySelector(".card-title");[l,d].forEach(n=>{n.addEventListener("click",()=>{localStorage.setItem("selectedProduct",JSON.stringify(t.id)),window.location.href=`${h}pages/productPage.html`})}),i.addEventListener("click",n=>{n.target.closest(".btn-add")&&(m(t),c(i,t),r()),n.target.closest(".btn-increase")&&(b(t.id,t.stock),c(i,t),r()),n.target.closest(".btn-decrease")&&(g(t.id),c(i,t),r())}),o.appendChild(e)})};export{p as B,h as a,v as m,$ as r};
