let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

// Đảm bảo chỉ có một ảnh hiển thị tại một thời điểm
function changeImage() {
  images.forEach((img) => img.classList.remove('active')); // Xóa class active khỏi tất cả ảnh
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active'); // Thêm class active cho ảnh hiện tại
}



setInterval(changeImage, 3000);  // Chuyển ảnh mỗi 3 giây


document.addEventListener('DOMContentLoaded', () => {
  images[0].classList.add('active'); // Hiển thị ảnh đầu tiên khi trang được tải
});
