// Tính toán thành tiền và phí giao hàng
const phiGiaoHang = 15000; // Phí giao hàng mặc định
let thanhTien = 0;

if (gioHang && gioHang.length > 0) {
    gioHang.forEach(function (sanPham) {
        thanhTien += sanPham.gia * sanPham.soLuong;
    });
}

// Hiển thị thành tiền và phí giao hàng
const tongTienElement = document.getElementById('tong-tien');
const phiGiaoHangElement = document.getElementById('phi-giao-hang');

if (tongTienElement && phiGiaoHangElement) {
    tongTienElement.innerHTML = formatCurrency(thanhTien);
    phiGiaoHangElement.innerHTML = formatCurrency(phiGiaoHang);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// Hiển thị tổng cộng phía dưới
const tongCongElement = document.getElementById('tong-cong');

if (tongCongElement) {
    const tongCong = thanhTien + phiGiaoHang;
    tongCongElement.innerHTML = formatCurrency(tongCong);
}
