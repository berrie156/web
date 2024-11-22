let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextSlide() {
    // Menghapus kelas aktif dari slide saat ini
    items[currentIndex].classList.remove('active');

    // Mengubah indeks ke slide berikutnya
    currentIndex = (currentIndex + 1) % totalItems;

    // Menambahkan kelas aktif ke slide baru
    items[currentIndex].classList.add('active');

    // Mengubah posisi slide
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Mengatur interval untuk slide otomatis (contoh: 3 detik)
setInterval(showNextSlide, 3000);
