const products = [
    { id: 1, title: 'Pancake', price: 200 },
    { id: 2, title: 'Sandwich', price: 150 },
    { id: 3, title: 'Roll', price: 500 },
    { id: 4, title: 'Meatball', price: 450 },
];

const renderProduct = (title, price, img) => {
    return `<div class="product-item">
    <img src="https://placehold.it/200x200" alt="${img}" width="200" height="200">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};



const renderProducts = list => {
    const productList = list.map((product) => {
        return renderProduct(product.title, product.price);
    });

    document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);

