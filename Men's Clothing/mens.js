const Api=[
    {
        img:"https://i.ibb.co/nDxkfyn/shirt1.jpg",
        rating:3.8,
        price:1100,
        type:"Shirt"
    },
    {
        img:"https://i.ibb.co/GHwNLh9/shirt2.jpg",
        rating:4.8,
        price:1400,
        type:"Shirt"
    },
    {
        img:"https://i.ibb.co/nz4qrt3/shirt3.webp",
        rating:2.5,
        price:1500,
        type:"Shirt"
    },
    {
        img:"https://i.ibb.co/pQTbV23/shirt4.jpg",
        rating:4.2,
        price:400,
        type:"Shirt"
    },
    {
        img:"https://i.ibb.co/DD0QqHs/shirt5.jpg",
        rating:4.3,
        price:600,
        type:"Shirt"
    },
    {
        img:"https://i.ibb.co/ry6yGQr/shirt6.jpg",
        rating:4.7,
        price:7,
        type:"Shirt"
    },
    {
        img:"https://i.ibb.co/tZKRsNw/lower1.jpg",
        rating:2.8,
        price:800,
        type:"Lower"
    },
    {
        img:"https://i.ibb.co/Lr1z07W/lower2.jpg",
        rating:5.2,
        price:300,
        type:"Lower"
    },
    {
        img:"https://i.ibb.co/bHT87JG/lower3.jpg",
        rating:1.8,
        price:1100,
        type:"Lower"
    },
    {
        img:"https://i.ibb.co/PD9jssj/jeans1.jpg",
        rating:4.2,
        price:2200,
        type:"Jeanes"
    },
    {
        img:"https://i.ibb.co/ZTb9ZcG/jeans2.jpg",
        rating:5.7,
        price:2800,
        type:"Jeanes"
    },
    {
        img:"https://i.ibb.co/PT2xLWT/jeans3.jpg",
        rating:7.4,
        price:900,
        type:"Jeanes"
    },
    {
        img:"https://i.ibb.co/Ypp4wrF/jeans4.jpg",
        rating:5.3,
        price:1500,
        type:"Jeanes"
    },
    {
        img:"https://i.ibb.co/KVtxjML/jeans5.jpg",
        rating:2.2,
        price:2100,
        type:"Jeanes"
    },
    {
        img:"https://i.ibb.co/f1HSxRC/jeans6.jpg",
        rating:5.5,
        price:1700,
        type:"Jeanes"
    },
    {
        img:"https://i.ibb.co/GQqf8rs/jeans7.jpg",
        rating:2.4,
        price:1300,
        type:"Jeanes"
    },
    {
        img:"https://i.ibb.co/Yp5tpps/jeans8.jpg",
        rating:4.9,
        price:900,
        type:"Jeanes"
    },
    {
        img:"https://i.ibb.co/RcFtHx9/T-shirt1.webp",
        rating:1.0,
        price:350,
        type:"T-Shirt"
    },
    {
        img:"https://i.ibb.co/NtkJ2yS/T-shirt-2.webp",
        rating:5.6,
        price:500,
        type:"T-Shirt"
    },
    {
        img:"https://i.ibb.co/hX8nh1T/T-shirt-3.webp",
        rating:5.4,
        price:250,
        type:"T-shirt"
    },
    {
        img:"https://i.ibb.co/nLwVd6m/T-shirt-4.webp",
        rating:10,
        price:250,
        type:"T-Shirt"
    },
    {
        img:"https://i.ibb.co/PrjxnVF/T-shirt-5.webp",
        rating:6.1,
        price:650,
        type:"T-shirt"
    },
    {
        img:"https://i.ibb.co/9VkSrJf/T-shirt-6.webp",
        rating:4.1,
        price:300,
        type:"T-Shirt"
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
        } else {
            console.log("Data not found");
        }
    });
});




const main_cart_page=document.querySelector(".products-container");
main_cart_page.style.display="none"
const main_part=document.querySelector(".hidden");
const cart=document.querySelector(".cart");
cart.addEventListener("click",(event)=>{
    event.preventDefault();
    main_part.style.display="none"
    main_cart_page.style.display=""

})









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
    main_part.style.display="none"
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

const login_page=document.querySelector(".login-main-hidden")
const login_anchor= document.querySelector(".login-page-link");

login_page.style.display = "none";

login_anchor.addEventListener("click", (event) => {
    event.preventDefault(); 
    main_part.style.display="none"
    login_page.style.display = "block"; 
});

const close_login=document.querySelector(".login-button-close")
close_login.addEventListener("click",()=>{
  login_page.style.display = "none";
  main_part.style.display = "";
  
})



























