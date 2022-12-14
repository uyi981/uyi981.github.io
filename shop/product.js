import products from '../all/data.json' assert {type: 'json'};


// thêm sản phẩm vào giỏ hàng
let items;
if(localStorage.getItem('items')) {
    items = JSON.parse(localStorage.getItem('items'));
} else {
    items = [];
}

window.addItem = (e) => {
    let available = false;
    countItem();
    const quantity = e.parentElement.parentElement.querySelector("input").value;

    if(items.length) {
        items.forEach((item) => {
            if(item.id == e.id) {
                item.quantity = parseInt(item.quantity) + parseInt(quantity);
                localStorage.setItem('items', JSON.stringify(items));
                available = true;
            };
        });
        if(!available) {
            products[index].quantity = quantity;
            items.push(products[index])
            localStorage.setItem('items', JSON.stringify(items))
        }
    } else {
        products[index].quantity = quantity;
        items.push(products[index])
        localStorage.setItem('items', JSON.stringify(items))
    }
    countItem();
}


const index = localStorage.getItem('item')
let article = document.querySelector("article");

article.innerHTML = `
<div class="product-wrapper">
<div class="image">
    <img src=${products[index].image} alt="">
</div>
<div class="info-product">
    <div class="info-main">
        <h1 class="name">${products[index].title}</h1>
        <div class="rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="price">${products[index].price}</div>

        <div class="option">
            <select name="" id="size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <input type="number" value="1" placeholder="1" min="1">
        </div>
        <div class="buttons">
            <button class="btn-primary">Yêu thích</button>
            <button class="btn-primary" onclick="addItem(this)"  id=${index}>Thêm vào giỏ </button>
        </div>
    </div>
    <p class="details">
    </p>
</div>
</div>
`
