

const products=[
    {
        "id": 1,
        "name":" Grow+ Turmeric Scalp Revitaliser Serum - 100ml",
        "price": 415,
        "image": "./../../images/productPage/P_item1.jpg"
    },
    {
        "id": 2,
        "name":" Curl Enhancing Hair Cream",
        "price": 350,
        "image": "./../../images/productPage/P_item2.jpg"
    },
    {
        "id": 3,
        "name":" Curl Styling Combo| Curly Hair Gel + Curly Hair Cream",
        "price": 290,
        "image": "./../../images/productPage/P_item3.jpg"
    },
    {
        "id": 4,
        "name":" Arata Refreshing Face Wash",
        "price": 200,
        "image": "./../../images/productPage/P_item4.jpg"
    },
    {
        "id": 5,
        "name":" Cleansing Conditioner - 300ml",
        "price": 645,
        "image": "./../../images/productPage/P_item5.jpg"
    },
    {
        "id": 6,
        "name":" Cleansing Shampoo - 300ml",
        "price": 650,
        "image": "./../../images/productPage/P_item6.jpg"
    },
    {
        "id": 7,
        "name":" Curl Refresh Shampoo",
        "price": 629,
        "image": "./../../images/productPage/P_item7.jpg"
    },
    {
        "id": 8,
        "name":" Styling Hair Gel - 150ml",
        "price": 200,
        "image": "./../../images/productPage/P_item8.jpg"
    },
    {
        "id": 9,
        "name":" Curl Repair & Hydration Conditioner",
        "price": 350,
        "image": "./../../images/productPage/P_item9.jpg"
    },
    {
        "id": 10,
        "name":" Styling Hair Cream - 100ml",
        "price": 290,
        "image": "./../../images/productPage/P_item10.jpg"
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('p');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `₹${product.price}`;

        const productAdd= document.createElement('button');
        productAdd.classList.add('product-item-button');
        productAdd.textContent = 'ADD ITEM';

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productAdd);
        
        
        productList.appendChild(productItem);

        
        productAdd.addEventListener('click', () => {
            addToCart(product.image, product.price, product.name);
        });




    });
});

// adding item to a cart container 

function addToCart(img, price, name) {
    let renderCartData = document.getElementById("cart_items_container");
    
    if (renderCartData != null) {

        const productItemBox = document.createElement('div');
        productItemBox.classList.add('product-item-box');

        let cartImg = document.createElement('img');
        cartImg.setAttribute("src", img);
    
        let createPriceEl = document.createElement('p');
        let createPriceText = document.createTextNode(`₹${price}`);
        createPriceEl.appendChild(createPriceText);
    
        let createNameEl = document.createElement('p');
        let createNameTxt = document.createTextNode(`${name.slice(0,15)}...`);
        
        createNameEl.appendChild(createNameTxt);

        const productDelete= document.createElement('button');
        productDelete.classList.add('product-item-delete');
        productDelete.textContent = 'Remove';

        productDelete.addEventListener('click',()=>{
        productItemBox.remove();
        totalPrice -= price; 
        updateTotalPrice();
        });

    
        productItemBox.appendChild(cartImg);
        productItemBox.appendChild(createPriceEl);
        productItemBox.appendChild(createNameEl);
        productItemBox.appendChild(productDelete);

        renderCartData.appendChild(productItemBox);

        totalPrice += price;
        updateTotalPrice();
    
    
        alert('Product Added To Cart');
    } else {
        console.error('Element with ID "cart_items_container" not found in the DOM');
    }
}


// hiding and displaying cart 

const backToSPButton = document.querySelector('.back_to_sp');

backToSPButton.addEventListener('click', () => {
  const parentDiv = backToSPButton.parentNode.parentNode;
  parentDiv.style.display = 'none';
});



const showButtonCart = document.querySelector('.show_cart');

showButtonCart.addEventListener('click', () => {
  const parentDiv = backToSPButton.parentNode.parentNode;
  parentDiv.style.display = 'block';
}); 



// total price

let totalPrice=0;

function updateTotalPrice() {
    const totalPriceEl = document.getElementById('cart_price_el');
    if (totalPriceEl != null) {
      totalPriceEl.innerHTML = `₹${totalPrice}`;
    } else {
      console.error('Element with class "total-price" not found in the DOM');
    }
  }
  updateTotalPrice() 


//   proceed button functionality 

const proceedButton = document.querySelector('.cart_total_price button');
const cartItemsContainer = document.getElementById('cart_items_container');
const cartTotalValue = document.querySelector('.cart_total_value');

proceedButton.addEventListener('click', () => {
    if (cartItemsContainer.childElementCount === 0) {
      alert('Fill the cart');
    } else {
      while (cartItemsContainer.firstChild) {
        cartItemsContainer.removeChild(cartItemsContainer.firstChild);
      }
      cartTotalValue.innerHTML='0';
      alert('Order is placed');
    }
  });

