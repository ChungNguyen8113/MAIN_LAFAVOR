document.addEventListener("DOMContentLoaded", function () {
    const jsonFilePath = "/json/ProductCategory.json";
    const productContainer = document.getElementById("productContainer");

    fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
        if (data && data.banhmi && Array.isArray(data.banhmi)) {
            displayProductList(data.banhmi.slice(0, 8));
        } else {
            console.error("Invalid data structure or missing 'banhmi' array.");
        }
    });

    function displayProductList(productList) {
        productContainer.innerHTML = '';

        productList.forEach(product => {
            const productItem = createProductElement(product);
            productContainer.appendChild(productItem);
        });
    }

    function createProductElement(product) {
        const productItem = document.createElement('div');
        productItem.className = 'col-lg-3 col-md-6 col-sm-6';
        productItem.innerHTML = `
            <div class="product__item">
                <div class="product__item__pic set-bg" style="background: url(${product.image})">
                    <div class="product__label">
                        <span>${product.label}</span>
                    </div>
                </div>
                <br/>
                <div class="product__item__text">
                    <h6><a href="#">${product.name}</a></h6>
                    <div class="product__item__price">${product.price} VND</div>
                    <div class="cart_add">
                        <a href="#" onclick="themVaoGioHang()">Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        `;

        // Thêm sự kiện click vào thẻ a chứa tên sản phẩm
        const productNameLink = productItem.querySelector('.product__item__text h6 a');
        productNameLink.addEventListener('click', () => {
            redirectToProductDetail(product);
        });

        return productItem;
    }

    // Hàm xử lý chuyển hướng đến trang chi tiết sản phẩm
    function redirectToProductDetail(product) {
        // Lưu thông tin chi tiết sản phẩm vào local storage
        localStorage.setItem("productDetail", JSON.stringify(product));

        // Chuyển hướng đến trang chi tiết sản phẩm
        location.href = "ProductDetail.html";
    }
});
