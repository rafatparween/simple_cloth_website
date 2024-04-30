// Access the Images
let slideImages = document.querySelectorAll('img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}




console.log("My name is Nagendra Yadav")

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Auto slideing
function autoSliding() {
    deletInterval = setInterval(timer, 3000);
    function timer() {
        slideNext();
        indicators();
    }
}


autoSliding();
// Stop auto sliding when mouse is over
let container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
    clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage) {
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if (imageId == counter) {
        return;
    }
    else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}






const main_cart_page=document.querySelector(".main-product-cart");
main_cart_page.style.display="none"

const main_part = document.querySelector(".children-main-part");

const cart=document.querySelector(".cart");

cart.addEventListener("click",(event)=>{
    event.preventDefault(); 
    main_part.style.display="none"

    main_cart_page.style.display=""

})







function continueWithGoogle() {

    alert("Continue with Google clicked");
}


const signup = document.querySelector(".signup-main");
const signup_anchor = document.querySelector(".signup-link");
const main_home_page = document.querySelector(".main-home-page");

signup.style.display = "none";

signup_anchor.addEventListener("click", (event) => {
    event.preventDefault();
    main_part.style.display = "none"
    signup.style.display = "block";
});

const close_signup=document.querySelector(".signup-button-close")
close_signup.addEventListener("click",()=>{
  signup.style.display = "none";
  main_part.style.display = "";
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
    main_part.style.display = "none"
    login_page.style.display = "block";
});


const close_login=document.querySelector(".login-button-close")
close_login.addEventListener("click",()=>{
  login_page.style.display = "none";
  main_part.style.display = "";
  
})





const main_cart_part=document.querySelector(".main-product-cart")
console.log(main_cart_part)
const buyNowButtons = document.querySelectorAll('.buy-now');
buyNowButtons.forEach(button => {
    button.addEventListener("click", function () {
        const productContainer = this.closest('.product');

        const imgSrc = productContainer.querySelector('img').src;
        const productName = productContainer.querySelector('h2').textContent;
        const productDescription = productContainer.querySelectorAll('p')[0].textContent;
        const productPrice = productContainer.querySelector('.price-main').textContent;


        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = 'Product Image';
        productCard.appendChild(imgElement);

        const nameElement = document.createElement('h2');
        nameElement.textContent = productName;
        productCard.appendChild(nameElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = productDescription;
        productCard.appendChild(descriptionElement);

        const priceElement = document.createElement('p');
        priceElement.innerHTML = `Rs <span class="price-main">${productPrice}</span> Only`;
        productCard.appendChild(priceElement);

        const buyNowButton = document.createElement('button');
        buyNowButton.classList.add('buy-now');
        buyNowButton.textContent = 'Remove Card';

        buyNowButton.addEventListener("click",()=>{
            productCard.remove()
        })

        productCard.appendChild(buyNowButton);
        main_cart_part.appendChild(productCard)
    });
});


















