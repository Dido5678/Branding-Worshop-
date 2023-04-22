
const swiperExample = new Swiper(".example-swiper",{
   direction:"horizontal",
   navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
   },
   pagination:{
      el:".swiper-pagination",
      clickable:true,
   },
   slidesPerView: 2,
   loop: true,
   speed: 200,
   autoplay: {
      delay:5000,
      disableOnInteraction: false
   },
   slidesPerGroup: 2,
   breakpoints:{
      767:{
         slidesPerView: 4,
         slidesPerGroup: 4,
         speed: 5000
      }
   }
});

// CATALOG SWIPER
const swiperCatalog = new Swiper(".swiper-third", {
   slidesPerView:4,
   // slidesPerGroup:3,
   grid:{rows:4},
   spaceBetween:30,
   brakepoints:{
      480:{
         slidesPerView:2,
      },
      768:{
         slidesPerView:3,
      }
   }
})

// -------------
const swiperDiscount = new Swiper(".discount-swiper",{
   direction:"horizontal",
   navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
   },
   loop: true,
});

const swiperComents = new Swiper(".coments-swiper",{
   direction:"horizontal",
   navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
   },
   loop: true,
});

const headerContainer = () => {
   return `
   <div class="header__container container">
   <div class="header__content">
      <div class="header__search">
         <input
            class="header__input"
            type="text"
            name="text"
            placeholder="Поиск"
         />
         <img src="img/catalog/search.svg" alt="search" />
      </div>
      <div class="header__logo">
         <img src="img/footer/logo.svg" alt="logo" />
      </div>
      <span class="header__lang">RU</span>
      <span class="header__lang">| UA</span>
      <div class="header__basket">
         <img src="img/catalog/basket.svg" alt="basket" />
      </div>
      <div class="header__heart">
         <img src="img/catalog/heart.svg" alt="heart" />
      </div>
         </div>
   </div>
   <nav class="header__menu menu">
      <ul class="menu__list">
         <li class="menu__item">
            <a class="menu__link" href="##">Категория</a>
         </li>
         <li class="menu__item">
            <a class="menu__link" href="##">Категория</a>
         </li>
         <li class="menu__item">
            <a class="menu__link" href="##">Категория</a>
         </li>
         <li class="menu__item">
            <a class="menu__link" href="##">Категория</a>
         </li>
         <li class="menu__item">
            <a class="menu__link" href="##">Категория</a>
         </li>
         <li class="menu__item">
            <a class="menu__link" href="##">Категория</a>
         </li>
         <li class="menu__item">
            <a class="menu__link" href="##">Категория</a>
         </li>
      </ul>
   </nav>
   <div class="menu__box">
      <a
         href="javascript:void(0);"
         class="menu__burger"
         onclick="myFunction()"
      >
         <i class="fa fa-bars"></i>
         <span></span>
      </a>
      <div id="myLinks">
         <a class="menu__link" href="##">Категория</a>
         <a class="menu__link" href="##">Категория</a>
         <a class="menu__link" href="##">Категория</a>
         <a class="menu__link" href="##">Категория</a>
         <a class="menu__link" href="##">Категория</a>
         <a class="menu__link" href="##">Категория</a>
         <a class="menu__link" href="##">Категория</a>
      </div>
      <div class="menu__mediatext"></div>
   </div>
</div>
   `
}

const header = document.querySelector(".header");
header.innerHTML = headerContainer();


const footerContainer = () => {
   return `
   <div class="footer__container container">
      <div class="footer__list">
         <div class="footer__item">
            <img class="footer__logo" src="img/footer/logo.svg" alt="logo">
            <div class="footer__icon">
               <img src="img/footer/telegram.svg" alt="telegram">
               <img src="img/footer/insta.svg" alt="insta">
            </div>
         </div>
         <div class="footer__item">
            <h4 class="footer__title">Информация</h4>
            <a class="footer__link" href="##">Каталог</a>
            <a class="footer__link" href="##">О нас</a>
            <a class="footer__link" href="##">Доставка и оплата</a>
            <a class="footer__link" href="##">Возвращение</a>
         </div>
         <div class="footer__item">
            <h4 class="footer__title">Контакты</h4>
            <a class="footer__link" href="##">Каталог</a>
            <a class="footer__link" href="##">О нас</a>
            <a class="footer__link" href="##">Доставка и оплата</a>
            <a class="footer__link" href="##">Возвращение</a>
         </div>
         <div class="footer__item">
            <h4 class="footer__title">Узнавай о новинках первым</h4>
            <p class="footer__text">Получай от нас смс с сюрпризами</p>
           <div class="footer__item-box">
               <input class="footer__item-input" type="email" placeholder="Email">
               <a class="footer__link-click" href="##">Отправить</a>
           </div>
         </div>
      </div>
   </div>
   `
}
const footer = document.querySelector(".footer");
footer.innerHTML = footerContainer();




// cart
   // CART
   let cartIcon = document.querySelector('#cart-icon');
   let cart = document.querySelector('.cart');
   let closeCart = document.querySelector('#close-cart');

   // OPEN CART
   cartIcon.onclick = () => {
      cart.classList.add('active');
   };

   // CLOSE CART
   closeCart.onclick = () => {
      cart.classList.remove('active');
   };

   // CART WORKING JS
   if (document.readyState == 'loading') {
      document.addEventListener('DOMContentLoaded', ready);
   } else {
      ready();
   }

   // MAKING FUNCTION
   function ready() {
   // REOMEVE ITEMS FROM CART
   var reomveCartButtons = document.getElementsByClassName('cart-remove');
   console.log(reomveCartButtons);
   for (var i = 0; i < reomveCartButtons.length; i++) {
      var button = reomveCartButtons[i];
      button.addEventListener('click', removeCartItem);
   }

   // QUANTITY CHANGES
   var quantityInputs = document.getElementsByClassName('cart-quantity');
   for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener('change', quantityChanged);
   }

   // ADD TO CARD
   var addCart = document.getElementsByClassName('third__cart');
   for (var i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener('click', addCartClicked);
   }

   // BUY BUTTON WORK
   document
      .getElementsByClassName('btn-buy')[0]
      .addEventListener('click', buyButtonClicked);
   }

   // BUY BUTTON
   function buyButtonClicked() {
      alert('Your Order is priced');
      var cartContent = document.getElementsByClassName('cart-content')[0];
      while (cartContent.hasChildNodes()) {
         cartContent.removeChild(cartContent.firstChild);
      }
      updatetotal();
   }

   // REOMVE ITEMS FROM CART
   function removeCartItem(event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      updatetotal();
   }

   // QUANTITY CHANGES
   function quantityChanged(event) {
      var input = event.target;
      if (isNaN(input.value) || input.value <= 0) {
         input.value = 1;
      }
      updatetotal();
   }

   // ADD TO CART
   function addCartClicked(event) {
      var button = event.target;
      var shopProducts = button.parentElement;
      var title =
         shopProducts.getElementsByClassName('product-title')[0].innerText;
      var price = shopProducts.getElementsByClassName('price')[0].innerText;
      var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
      addProductToCart(title, price, productImg);
      updatetotal();
   }

   function addProductToCart(title, price, productImg) {
      var cartShopBox = document.createElement('div');
      cartShopBox.classList.add('cart-box');
      var cartItems = document.getElementsByClassName('cart-content')[0];
      var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
      for (var i = 0; i < cartItemsNames.length; i++) {
         // if (cartItemsNames[i].innerText == title) {
         //    alert('You have already add this item to cart');
         //    return;
         // }
      }

      var cartBoxContent = `
                           <img src="${productImg}" alt=""class="cart-img">
                           <div class="detail-box">
                              <div class="cart-product-title">${title}</div>
                              <div class="cart-price">${price}</div>
                              <input type="number" value="1" class="cart-quantity">
                           </div>
                           <!-- REMOVE CART -->
                           <i class='bx bxs-trash-alt cart-remove'></i>`;

      cartShopBox.innerHTML = cartBoxContent;
      cartItems.append(cartShopBox);
      cartShopBox
         .getElementsByClassName('cart-remove')[0]
         .addEventListener('click', removeCartItem);
      cartShopBox
         .getElementsByClassName('cart-quantity')[0]
         .addEventListener('change', quantityChanged);
}

   // UPDATE TOTAL
   function updatetotal() {
      var cartContent = document.getElementsByClassName('cart-content')[0];
      var cartBoxes = cartContent.getElementsByClassName('cart-box');
      var total = 0;
      for (var i = 0; i < cartBoxes.length; i++) {
         var cartBox = cartBoxes[i];
         var priceElement = cartBox.getElementsByClassName('cart-price')[0];
         var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
         var price = parseFloat(priceElement.innerText.replace('$', ''));
         var quantity = quantityElement.value;
         total = total + price * quantity;
      }
      // IF PRICE CONTAIN SOME CENTS VALUE
      total = Math.round(total * 100) / 100;

      document.getElementsByClassName('total-price')[0].innerText = '$' + total;
   }

