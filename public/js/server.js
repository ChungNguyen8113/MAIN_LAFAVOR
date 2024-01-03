const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Sử dụng middleware body-parser để phân tích dữ liệu biểu mẫu
app.use(bodyParser.urlencoded({ extended: true }));

// Phục vụ các tệp tĩnh (CSS, hình ảnh, vv.) từ thư mục public
app.use(express.static('public'));

// Xử lý gửi biểu mẫu
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Kiểm tra và làm sạch dữ liệu nếu cần

  // Ghi dữ liệu biểu mẫu vào một tệp (đối với sự đơn giản, bạn có thể sử dụng tệp JSON)
  const data = { name, email, message };
  const jsonData = JSON.stringify(data);

  fs.appendFile('form-data.json', jsonData + '\n', 'utf8', (err) => {
    if (err) {
      console.error('Lỗi khi ghi vào tệp:', err);
      res.status(500).send('Lỗi máy chủ nội bộ');
    } else {
      console.log('Dữ liệu biểu mẫu đã được lưu thành công!');
      res.status(200).send('Dữ liệu biểu mẫu đã được lưu thành công!');
    }
  });
});

// Khởi động máy chủ
app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});
