
document.addEventListener("DOMContentLoaded", function () {
    const jsonFilePath = "/json/ProductCategory.json";

    let allProducts; // Danh sách sản phẩm gốc
    let displayedProducts; // Danh sách sản phẩm hiển thị sau khi tìm kiếm

    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            allProducts = [].concat(
                data.banhmi,
                data.banhquy,
                data.banhtheomua,
                data.banhkhac
            );

            // Ban đầu, danh sách hiển thị giống như danh sách gốc
            displayedProducts = [...allProducts];

            const productContainer = document.getElementById('productContainer');
            const searchInput = document.getElementById('searchInput');
            const sortOption = document.getElementById('sortOption');

            searchInput.addEventListener('input', function () {
                const searchTerm = this.value.toLowerCase();

                // Lọc sản phẩm theo điều kiện tìm kiếm
                displayedProducts = allProducts.filter(product =>
                    product.name.toLowerCase().includes(searchTerm)
                );

                // Sắp xếp và hiển thị sản phẩm sau khi tìm kiếm
                sortAndDisplay();
            });

            sortOption.addEventListener('change', function () {
                // Sắp xếp và hiển thị sản phẩm sau khi tìm kiếm
                sortAndDisplay();
            });

            window.sortProducts = sortAndDisplay;

            function displayProducts(productList) {
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
                                <a href="#">Thêm vào giỏ hàng</a>
                            </div>
                        </div>
                    </div>
                `
                // Thêm sự kiện click vào thẻ a chứa tên sản phẩm
const productNameLink = productItem.querySelector('.product__item__text h6 a');
productNameLink.addEventListener('click', () => {
    redirectToProductDetail(product);
});

// ...

// Hàm xử lý chuyển hướng đến trang chi tiết sản phẩm
function redirectToProductDetail(product) {
    // Lưu thông tin chi tiết sản phẩm vào local storage
    localStorage.setItem("productDetail", JSON.stringify(product));

    // Chuyển hướng đến trang chi tiết sản phẩm
    location.href = "ProductDetail.html";
}
                ;
                return productItem;
            }

            function sortAndDisplay() {
                const selectedOption = sortOption.value;
                console.log('Selected Option:', selectedOption);
            
                // Sắp xếp danh sách sản phẩm hiển thị
                displayedProducts.sort((a, b) => {
                    if (selectedOption === 'price') {
                        console.log('Sorting by Price');
                        console.log('a.price:', a.price);
                        console.log('b.price:', b.price);
                        return parseFloat(a.price) - parseFloat(b.price);
                    } else if (selectedOption === 'name') {
                        console.log('Sorting by Name');
                        return a.name.localeCompare(b.name);
                    }
                });
            
                // Hiển thị danh sách sản phẩm đã sắp xếp
                displayProducts(displayedProducts);
            }
            // Hiển thị toàn bộ danh sách sản phẩm khi tải trang
            displayProducts(allProducts);
        })
        .catch(error => console.error('Lỗi khi lấy thông tin sản phẩm:', error));
});