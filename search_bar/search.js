let slideI = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(i) {
  if (i < 0) {
    slideI = totalSlides - 1;
  } else if (i >= totalSlides) {
    slideI = 0;
  }

  const offset = -slideI * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  slideI--;
  showSlide(slideI);
}

function nextSlide() {
  slideI++;
  showSlide(slideI);
}

setInterval(nextSlide, 5000);





// signup-page
function continueWithGoogle() {

  alert("Continue with Google clicked");
}

const signup = document.querySelector(".signup-main");
const signup_anchor = document.querySelector(".signup-link");
const main_home_page = document.querySelector(".main-home-page");

signup.style.display = "none";

signup_anchor.addEventListener("click", (event) => {
  event.preventDefault();
  main_home_page.style.display = "none";
  signup.style.display = "block";
});

const close_signup=document.querySelector(".signup-button-close")
close_signup.addEventListener("click",()=>{
  signup.style.display = "none";
  main_home_page.style.display = "";
})




// login-page

function continueWithGoogle() {

  alert("Continue with Google clicked");
}

function showForgotPassword() {

  alert("Forgot Password clicked");
}

const login_page = document.querySelector(".login-main-hidden")
const login_anchor = document.querySelector(".login-page-link");
login_page.style.display = "none";
login_anchor.addEventListener("click", (event) => {
  event.preventDefault();
  main_home_page.style.display = "none";
  login_page.style.display = "block";
});


const close_login=document.querySelector(".login-button-close")
close_login.addEventListener("click",()=>{
  login_page.style.display = "none";
  main_home_page.style.display = "";
  
})











const Api = [
  {
    img: "https://i.ibb.co/JsV6B8j/asset-15.jpg",
    rating: 3.8,

    price: 1100,
    type: "Shirt"
  },


  {
    img: "https://i.ibb.co/fGhwk4T/asset-4.jpg",
    rating: 4.8,
    price: 1400,
    type: "Shirt"
  },


  {
    img: "https://i.ibb.co/njvGFMd/asset-14.jpg",
    rating: 2.5,
    price: 1500,
    type: "Shirt"
  },


  {
    img: "https://i.ibb.co/tBM8Wz5/asset-19.jpg",
    rating: 4.2,
    price: 400,
    type: "Shirt"
  },
  {
    img: "https://i.ibb.co/9g4Gy8w/asset-24.jpg",
    rating: 4.3,
    price: 600,
    type: "Shirt"
  },
  {
    img: "https://i.ibb.co/TWgHC8V/asset-27.jpg",
    rating: 4.7,
    price: 7,
    type: "Shirt"
  },
  {
    img: "https://i.ibb.co/y680Mhq/asset-18.jpg",
    rating: 2.8,
    price: 800,
    type: "Lower"
  },
  {
    img: "https://i.ibb.co/RTMxhNp/asset-23.jpg",
    rating: 5.2,
    price: 300,
    type: "Lower"
  },
  {
    img: "https://i.ibb.co/gdxPjDC/asset-30.jpg",

    rating: 4.7,
    price: 700,
    type: "Lower"
  },
]




const buyNowButtons = document.querySelectorAll('.buy-now-button');
buyNowButtons.forEach(button => {

  button.addEventListener("click", function () {
    const parentElement = this.parentElement.parentElement;
    const productRating = parseFloat(parentElement.querySelector('.span-rating').innerText);
    const matchedData = Api.find(product => product.rating === productRating);
    
    if (matchedData) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      const imgElement = document.createElement('img');
      imgElement.src = matchedData.img;
      imgElement.alt = matchedData.type;

      const nameElement = document.createElement('h2');
      nameElement.textContent = matchedData.type;

      const priceElement = document.createElement('p');
      priceElement.textContent = 'Rs ' + matchedData.price + ' only';

      const ratingElement = document.createElement('div');
      ratingElement.classList.add('rating');
      ratingElement.innerHTML = `Rating: ${matchedData.rating} <span>&#9733;</span>`;

      const buyNowButton = document.createElement('button');
      buyNowButton.classList.add('buy-now-button');
      buyNowButton.textContent = 'Remove Cart';
      buyNowButton.addEventListener('click', function () {
          productCard.remove()
      });

      productCard.appendChild(imgElement);
      productCard.appendChild(nameElement);
      productCard.appendChild(priceElement);
      productCard.appendChild(ratingElement);
      productCard.appendChild(buyNowButton);

      const productsContainer = document.querySelector('.products-container');
      productsContainer.appendChild(productCard);
    }

    else {
      console.log("Data not found");
    }

  });

});



const main_cart_page=document.querySelector(".products-container");
main_cart_page.style.display="none"
const cart=document.querySelector(".cart");
cart.addEventListener("click",(event)=>{
    event.preventDefault();
    main_home_page.style.display = "none";
    main_cart_page.style.display=""

})


