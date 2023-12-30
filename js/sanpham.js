document.addEventListener("DOMContentLoaded", function () {
    // Đường dẫn tới tệp JSON chứa thông tin sản phẩm
    const jsonFilePath = "/json/ProductCategory.json";
    
    // Lấy thông tin sản phẩm từ tệp JSON
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('productContainer');

            // Lặp qua các sản phẩm và tạo HTML động
            data.banhmi.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'col-lg-3 col-md-6 col-sm-6';
                productItem.innerHTML = `
                    <div class="product__item">
                        <div class="product__item__pic set-bg" style="background: url(${product.image} )"> <br/>
                            <div class="product__label">
                                <span>${product.label}</span>
                            </div>
                        </div>
                        <br/>
                        <div class="product__item__text">
                            <h6><a href="#">${product.name}</a></h6>
                            <div class="product__item__price">${product.price}</div>
                            <div class="cart_add">
                                <a href="#">Thêm vào giỏ hàng</a>
                            </div>
                        </div>
                    </div>
                `
                const productNameLink = productItem.querySelector('.product__item__text h6 a');
                productNameLink.addEventListener('click', () => {
                    redirectToProductDetail(product);
                });;
                // Hàm xử lý chuyển hướng đến trang chi tiết sản phẩm
                function redirectToProductDetail(product) {
                    // Lưu thông tin chi tiết sản phẩm vào local storage
                    localStorage.setItem("productDetail", JSON.stringify(product));
                    // Chuyển hướng đến trang chi tiết sản phẩm
                    location.href = "Productdetail.html";
}
                // Thêm sản phẩm vào container
                productContainer.appendChild(productItem);
            });

            // Bạn có thể thêm logic phân trang ở đây nếu cần

            // Lặp qua các sản phẩm và tạo HTML động
            data.banhquy.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'col-lg-3 col-md-6 col-sm-6';
                productItem.innerHTML = `
                    <div class="product__item">
                        <div class="product__item__pic set-bg" style="background: url(${product.image} )"> <br/>
                            <div class="product__label">
                                <span>${product.label}</span>
                            </div>
                        </div>
                        <br/>
                        <div class="product__item__text">
                            <h6><a href="#">${product.name}</a></h6>
                            <div class="product__item__price">${product.price}</div>
                            <div class="cart_add">
                                <a href="#">Thêm vào giỏ hàng</a>
                            </div>
                        </div>
                    </div>
                `
                const productNameLink = productItem.querySelector('.product__item__text h6 a');
                productNameLink.addEventListener('click', () => {
                    redirectToProductDetail(product);
                });;
                // Hàm xử lý chuyển hướng đến trang chi tiết sản phẩm
                function redirectToProductDetail(product) {
                    // Lưu thông tin chi tiết sản phẩm vào local storage
                    localStorage.setItem("productDetail", JSON.stringify(product));
                    // Chuyển hướng đến trang chi tiết sản phẩm
                    location.href = "Productdetail.html";
                }

                // Thêm sản phẩm vào container
                productContainer.appendChild(productItem);
            });
        })
        .catch(error => console.error('Lỗi khi lấy thông tin sản phẩm:', error));
});








// Assume you have a shopping cart array
const shoppingCart = [];

// Function to add a product to the shopping cart
function addToCart(product) {
    shoppingCart.push(product);
    // You can also perform additional actions here, such as updating the UI to reflect the change in the shopping cart.
    console.log('Product added to the cart:', product);
}

// Modify the product creation part to include a call to addToCart function
data.banhmi.forEach(product => {
    // Creating productItem div dynamically
    const productItem = createProductItem(product);
    
    // Adding a click event to the "Add to Cart" link
    const addToCartLink = productItem.querySelector('.cart_add a');
    addToCartLink.addEventListener('click', () => {
        addToCart(product);
    });

    // Appending productItem to productContainer
    productContainer.appendChild(productItem);
});

data.banhquy.forEach(product => {
    // Creating productItem div dynamically
    const productItem = createProductItem(product);
    
    // Adding a click event to the "Add to Cart" link
    const addToCartLink = productItem.querySelector('.cart_add a');
    addToCartLink.addEventListener('click', () => {
        addToCart(product);
    });

    // Appending productItem to productContainer
    productContainer.appendChild(productItem);
});

// Function to create a product item dynamically
function createProductItem(product) {
    const productItem = document.createElement('div');
    productItem.className = 'col-lg-3 col-md-6 col-sm-6';
    productItem.innerHTML = `
        <div class="product__item">
            <div class="product__item__pic set-bg" style="background: url(${product.image})"> <br/>
                <div class="product__label">
                    <span>${product.label}</span>
                </div>
            </div>
            <br/>
            <div class="product__item__text">
                <h6><a href="ProductDetail.html?id=${product.prid}">${product.name}</a></h6>
                <div class="product__item__price">${product.price}</div>
                <div class="cart_add">
                    <a href="#">Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
    `;
    return productItem;
}









