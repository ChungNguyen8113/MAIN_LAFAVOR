document.addEventListener("DOMContentLoaded", function () {
    // Lấy thông tin chi tiết sản phẩm từ local storage
    const productDetail = JSON.parse(localStorage.getItem("productDetail"));

    // Hiển thị thông tin chi tiết sản phẩm ở đây, ví dụ:
    const productDetailContainer = document.getElementById('productDetailContainer');
    productDetailContainer.innerHTML = `

    <div class="row">
                <div class="breadcrumb__links">
                    <a href="../index.html">Menu</a>
                    <a href="Product.html">Sản phẩm</a>
                    <span>${productDetail.name}</span>
                </div>
    </div>
        <div class="row">
            <div class="col-lg-6 col-sm-12 col-12">
                <div class="product__details__img">
                    <div class="product__details__big__img">
                        <img class="big_img" src="${productDetail.image}" alt="" height="400">
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
                <div class="product__details__text">
                    <h4>${productDetail.name}</h4>
                    <div class="price">
                        <span class="money">${productDetail.price}</span>
                    </div>
                    <h5>Kích thước
                        <div class="options_size">
                            <input type="button" name="size" id="size_nho" value="nhỏ" onclick="updateSelectedSize()">
                            <input type="button" name="size" id="size_vua" value="vừa" onclick="updateSelectedSize()">
                            <input type="button" name="size" id="size_lon" value="lớn" onclick="updateSelectedSize()">
                        </div>
                    </h5>
                    <h5>Chọn loại hạt 
                        <div class="options_topping">
                            <input type="button" name="topping" id="hanhnhan" value="hạt hạnh nhân" onclick="updateSelectedToppings()"> 
                            <input type="button" name="topping" id="occho" value="hạt óc chó" onclick="updateSelectedToppings()"> <br/>
                            <input type="button" name="topping" id="nhokho" value="nho khô" onclick="updateSelectedToppings()">
                            <input type="button" name="topping" id="hatdieu" value="hạt điều" onclick="updateSelectedToppings()"> <br/>
                            <input type="button" name="topping" id="chocolate" value="hạt chocolate" onclick="updateSelectedToppings()">
                        </div>
                        
                    </h5>
                    <div class="product__details__option">
                        <div class="quantity">
                            <span>Số lượng : </span>
                            <input type="number" id="num" oninput="calc()" min="1" max="100" value="1" />
                        </div> 
                    </div>
                        <div class="product__details__btn">
                            <a href="#" class="shop_btn" onclick="themvaogiohang(this)">Thêm vào giỏ</a>
                            <a href="#" class="shop_btn">Đặt hàng ngay</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="product__details__tab">
            <div class="col-lg-12">
                <hr/>
                <h4><b>Mô tả sản phẩm</b></h4>
                <div class="tab-content">
                ${productDetail.description}
                <hr/>
            </div>
        </div>
    `;
});


function updateSelectedSize() {
    var sizeButtons = document.querySelectorAll('input[name="size"]');
    sizeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Toggle the 'selected' class for the clicked size button
            button.classList.toggle('selected');

            // Remove the 'selected' class from other size buttons
            sizeButtons.forEach(function (btn) {
                if (btn !== button) {
                    btn.classList.remove('selected');
                }
            });

            // Call updateColor() to handle the visual updates
            updateColor();
        });
    });
}

function updateSelectedToppings() {
    var toppingButtons = document.querySelectorAll('input[name="topping"]');
    toppingButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            button.classList.toggle('selected');

            toppingButtons.forEach(function (btn) {
                if (btn !== button) {
                    btn.classList.remove('selected');
                }
            });
            updateColor();
        });
    });
}

function updateColor() {
    // Change the background color to orange for selected items
    var selectedElements = document.querySelectorAll('.selected');
    selectedElements.forEach(function (element) {
        element.style.backgroundColor = 'orange';
        element.style.borderColor = 'orange';
    });

    // Change the background color to a different color for unselected items
    var allElements = document.querySelectorAll('input[name="size"], input[name="topping"]');
    allElements.forEach(function (element) {
        if (!element.classList.contains('selected')) {
            element.style.backgroundColor = 'white';
            element.style.borderColor = 'black';
        }
    });
}