const data = [
    {
        image: "https://i.ibb.co/JsV6B8j/asset-15.jpg",
        rating: 3.8,
        price: 1100,
        type: "Grown",
        name: 'Femvy'
    },
    {
        image: "https://i.ibb.co/fGhwk4T/asset-4.jpg",
        rating: 4.8,
        price: 1400,
        type: "Grown",
        name: 'Zinariya Fab'
    },
    {
        image: "https://i.ibb.co/njvGFMd/asset-14.jpg",
        rating: 2.5,
        price: 1500,
        type: "Grown",
        name: "NARI DREAM"
    },
    {
        image: "https://i.ibb.co/8mSJks2/asset-45.jpg",
        rating: 4.2,
        price: 400,
        type: "Grown",
        name: "Annsh Apparel"
    },
    {
        image: "https://i.ibb.co/HDd2jS7/asset-13.jpg",
        rating: 4.3,
        price: 600,
        type: "Grown",
        name: "Youthnic"
    },
    {
        image: "https://i.ibb.co/VxsSCqP/asset-44.jpg",
        rating: 4.7,
        price: 700,
        type: "Grown",
        name: "MISS CLOTHING"
    },
    {
        image: "https://i.ibb.co/0mmSKj5/asset-37.jpg",
        rating: 2.8,
        price: 800,
        type: "Saree's",
        name: "Semizoxis"
    },
    {
        image: "https://i.ibb.co/4Zv4wPV/asset-14.jpg",
        rating: 5.2,
        price: 300,
        type: "Saree's",
        name: "hesika"
    },
    {
        image: "https://i.ibb.co/q7Xv08Q/asset-41.jpg",
        rating: 1.8,
        price: 1100,
        type: "Saree's",
        name: "AVDOM"
    },
    {
        image: "https://i.ibb.co/0YFH67j/asset-22.jpg",
        rating: 4.2,
        price: 2200,
        type: "Kurta",
        name: "Indo Era"
    },
    {
        image: "https://i.ibb.co/R9QFwQy/asset-20.jpg",
        rating: 5.7,
        price: 2800,
        type: "Kurta",
        name: "Kriska"
    },
    {
        image: "https://i.ibb.co/jLd8z06/asset-25.jpg",
        rating: 7.4,
        price: 900,
        type: "Kurta",
        name: "shoecom"
    },
    {
        image: "https://i.ibb.co/Vgds3PH/asset-41.jpg",
        rating: 5.3,
        price: 1500,
        type: "Kurta",
        name: "Vbuyz"
    },
    {
        image: "https://i.ibb.co/YpznM9P/asset-13.jpg",
        rating: 2.2,
        price: 2100,
        type: "Kurta",
        name: "VredeVogel"
    },
    {
        image: "https://i.ibb.co/G7js6Gv/asset-43.jpg",
        rating: 5.5,
        price: 1700,
        type: "Kurta",
        name: "Vishudh"
    },
    {
        image: "https://i.ibb.co/BzJ59QR/asset-31.jpg",
        rating: 2.4,
        price: 1300,
        type: "Kurta",
        name: "Klosia"
    },
    {
        image: "https://i.ibb.co/1JxnJhD/asset-13.jpg",
        rating: 4.9,
        price: 900,
        type: "Kurta",
        name: "Divastri"
    },
    {
        image: "https://i.ibb.co/yWZxhRy/image1.jpg",
        rating: 1.0,
        price: 350,
        type: "Top's",
        name: "Oomph!"
    },
    {
        image: "https://i.ibb.co/fqhBGJJ/asset-14.jpg",
        rating: 5.6,
        price: 500,
        type: "Top's",
        name: "Silkova"
    },
    {
        image: "https://i.ibb.co/BtG2P5t/asset-13.jpg",
        rating: 5.4,
        price: 250,
        type: "Top's",
        name: "STYLE PREZONE"
    },
    {
        image: "https://i.ibb.co/PQC0Kk1/asset-17.jpg",
        rating: 10,
        price: 250,
        type: "Top's",
        name: "DL Fashion"
    },
    {
        image: "https://i.ibb.co/kQhDjqv/asset-22.jpg",
        rating: 6.1,
        price: 650,
        type: "Top's",
        name: "HSR"
    },
    {
        image: "https://i.ibb.co/GkbJNfN/asset-43.jpg",
        rating: 4.1,
        price: 300,
        type: "Top's",
        name: "SHCOVER"
    },

]



const productList = document.getElementById('product-list');
const wishlist = document.getElementById('wishlist');
data.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const img = document.createElement('img');
    img.src = product.image;
    productDiv.appendChild(img);

    const type = document.createElement('p');
    type.textContent = product.type;
    productDiv.appendChild(type);

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    productDiv.appendChild(price);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Wishlist';
    addButton.addEventListener('click', () => addToWishlist(product));
    productDiv.appendChild(addButton);
    productList.appendChild(productDiv);
});

function addToWishlist(product) {
    const wishlistItem = document.createElement('div');
    wishlistItem.classList.add('wishlist-item');

    const img = document.createElement('img');
    img.src = product.image;
    wishlistItem.appendChild(img);

    const type = document.createElement('p');
    type.textContent = product.type;
    wishlistItem.appendChild(type);

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    wishlistItem.appendChild(price);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeItemFromWishlist(wishlistItem));
    wishlistItem.appendChild(removeButton);

    wishlist.appendChild(wishlistItem);
}

function removeItemFromWishlist(item) {
    wishlist.removeChild(item);
}







const main_part = document.querySelector(".hidden");



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