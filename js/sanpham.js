document.addEventListener("DOMContentLoaded", function () {
    // Đường dẫn tới tệp JSON chứa thông tin sản phẩm
    const jsonFilePath = "Thongtinsp.json";

    // Lấy thông tin sản phẩm từ tệp JSON
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('productContainer');

            // Lặp qua các sản phẩm và tạo HTML động
            data.products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'col-lg-3 col-md-6 col-sm-6';
                productItem.innerHTML = `
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="${product.image}">
                            <div class="product__label">
                                <span>${product.label}</span>
                            </div>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">${product.name}</a></h6>
                            <div class="product__item__price">${product.price}</div>
                            <div class="cart_add">
                                <a href="#">Thêm vào giỏ hàng</a>
                            </div>
                        </div>
                    </div>
                `;

                // Thêm sản phẩm vào container
                productContainer.appendChild(productItem);
            });

            // Bạn có thể thêm logic phân trang ở đây nếu cần
        })
        .catch(error => console.error('Lỗi khi lấy thông tin sản phẩm:', error));
});
