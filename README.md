# 🎂 Hướng Dẫn Mở Website Trên Điện Thoại, MacBook & Đưa Lên Mạng 💕

---

## 📱 CÁCH 1: Xem ngay trên Điện Thoại / MacBook (Cùng Wi-Fi)

1. Máy tính của bạn đang chạy lệnh:
   ```bash
   npm run dev
   ```
2. Trên điện thoại (iPhone, Android) hoặc MacBook, mở trình duyệt **Safari** hoặc **Chrome** và truy cập:
   👉 **http://10.1.132.243:3000**

*(Yêu cầu: Điện thoại / MacBook kết nối cùng mạng Wi-Fi với máy tính).*

---

## 🌐 CÁCH 2: Đưa lên mạng miễn phí để gửi Link cho người yêu (Xem được bất kỳ đâu bằng 4G/Wi-Fi)

Để người yêu của bạn ở bất kỳ đâu chỉ cần bấm vào link (qua Zalo, Messenger, iMessage) là mở được ngay:

### 👉 Cách siêu nhanh với Netlify Drop (Không cần đăng ký phức tạp, 15 giây là xong):
1. Mở trình duyệt vào trang: **https://app.netlify.com/drop**
2. Kéo thả cả thư mục `happybirthday` từ máy tính thả vào ô giữa màn hình của Netlify.
3. Chờ 5 - 10 giây, Netlify sẽ tạo cho bạn một đường link miễn phí (ví dụ: `https://chuc-mung-sinh-nhat-em-yeu.netlify.app`).
4. Gửi link này cho người yêu là xong!

---

## 📸 CÁCH CỐ ĐỊNH ẢNH CỦA 2 BẠN (Để người yêu mở lên là thấy ngay)

1. Copy các tấm ảnh kỷ niệm của bạn vào thư mục:
   `d:\happybirthday\images\` (ví dụ: `anh1.jpg`, `anh2.jpg`, `anh3.jpg`).
2. Mở file `config.js` và cập nhật danh sách ảnh:
   ```javascript
   photos: [
     {
       src: "images/anh1.jpg",
       caption: "Ngày đầu tiên gặp gỡ ☕💕",
       date: "Kỷ niệm đáng nhớ"
     },
     {
       src: "images/anh2.jpg",
       caption: "Chuyến đi chơi của đôi mình 🌅",
       date: "Mãi bên nhau"
     }
   ]
   ```
3. Sau đó bạn cũng có thể sửa tên người yêu, số ngày yêu nhau và nội dung bức thư tình ngay trong file `config.js`!
Mọi thiết bị (iPhone, Android, MacBook) khi mở lên sẽ tự động hiển thị đầy đủ hình ảnh và lời chúc của bạn!
