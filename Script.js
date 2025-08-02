  //Untuk logo menu jika di klik
  const navbarNav = document.querySelector('.navbar-nav');
  const hamburgerMenu = document.querySelector('#hamburger-menu');

  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
  };
  // untuk logo search jika di klik//
  const searchform = document.querySelector('.search-form');
  const searchbox = document.querySelector('#search-box');
  document.querySelector('#search-button').onclick = (e) => {
    searchform.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
  }
  // untuk logo keranjang jika di klik// 
  const shoppingcart = document.querySelector('.shopping-cart');
  const shoppingbutton = document.querySelector('#shopping-cart-button');
  document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingcart.classList.toggle('active');
    e.preventDefault();
  }
  //ketika klik diluar elemen//
  const hamburger = document.querySelector('#hamburger-menu');
  const sb = document.querySelector('#search-button');
  
  
  document.addEventListener('click', function(e) {
    if(!sb.contains(e.target) && !searchform.contains(e.target)) {
      searchform.classList.remove('active');
    };
  });
  document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    };
  });
  document.addEventListener('click', function(e) {
    if(!shoppingbutton.contains(e.target) && !shoppingcart.contains(e.target)) {
      shoppingcart.classList.remove('active');
    };
  });
  
  //modal box//
  const itemDetailModal = document.querySelector('#modal-item-detail');
const productDetailButton = document.querySelectorAll('.product-detail-button');

productDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});
  
  
  document.querySelector('.modal .close-icon').onclick = (e) => {
    itemdetailmodal.style.display = 'none';
    e.preventDefault();
  }
  
  const modal = document.querySelector('#modal-item-detail');
  window.onclick = (e) => {
    if (e.target === modal) {
      itemdetailmodal.style.display = 'none';
    }
  }
