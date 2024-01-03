// Số sản phẩm trong giỏ hàng
var soSanPhamTrongGioHang = 0;

// Hàm thêm sản phẩm vào giỏ hàng
function themVaoGioHang() {
    // Tăng số sản phẩm trong giỏ hàng lên 1
    soSanPhamTrongGioHang++;
    
    // Cập nhật số lượng trên giao diện
    document.getElementById('cart-number').innerText = soSanPhamTrongGioHang;
}
var gioHang = [];

// Hàm thêm sản phẩm vào giỏ hàng
function themVaoGioHang() {
    // Lấy thông tin sản phẩm đã chọn
    const hinhSanPham = document.getElementById('productDetailContainer').querySelector('.big_img').src;
    const tenSanPham = document.getElementById('productDetailContainer').querySelector('h4').innerText;
    const giaSanPham = parseFloat(document.querySelector('.money').innerText.replace(' VND', ''));
    const soLuong = parseInt(document.getElementById('num').value);
    const kichThuoc = document.querySelector('.options_size .selected') ? document.querySelector('.options_size .selected').value : '';
    const loaiHat = document.querySelector('.options_topping .selected') ? document.querySelector('.options_topping .selected').value : '';

    // Tạo đối tượng sản phẩm
    var sanPham = {
        hinh: hinhSanPham,
        ten: tenSanPham,
        gia: giaSanPham,
        soLuong: soLuong,
        kichThuoc: kichThuoc,
        loaiHat: loaiHat
    };

    // Thêm sản phẩm vào mảng giỏ hàng
    gioHang.push(sanPham);

    localStorage.setItem('gioHang', JSON.stringify(gioHang));


    // Cập nhật số lượng trên giao diện
    document.getElementById('cart-number').innerText = gioHang.length;
}
