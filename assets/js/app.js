
document.addEventListener('DOMContentLoaded',()=>{
const m=document.getElementById('aboutModal');
document.getElementById('aboutBtn').onclick=()=>m.style.display='block';
document.querySelector('.close').onclick=()=>m.style.display='none';
window.onclick=(e)=>{if(e.target===m)m.style.display='none';};
});


document.addEventListener('DOMContentLoaded',()=>{
const galleryCards=document.querySelectorAll('#gallery .card, #gallery article');
if(!galleryCards.length) return;

const modal=document.createElement('div');
modal.className='gallery-modal';
modal.innerHTML=`
<div class="gallery-panel">
<span class="gallery-close">&times;</span>
<h2>Gallery Collection</h2>
<div class="gallery-grid">
<img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800">
<img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800">
<img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800">
<img src="https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=800">
<img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800">
<img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800">
</div>
</div>`;

document.body.appendChild(modal);

galleryCards.forEach(card=>{
 card.style.cursor='pointer';
 card.addEventListener('click',()=>modal.style.display='block');
});

modal.querySelector('.gallery-close').onclick=()=>modal.style.display='none';
modal.onclick=(e)=>{ if(e.target===modal) modal.style.display='none'; };
});
