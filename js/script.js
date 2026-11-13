/* =========================================
   SCRIPT WEBSITE LATIHAN
   Dipakai oleh semua halaman .html di folder ini
   (ID elemennya sama, jadi script ini cocok untuk semuanya).

   Hanya 3 hal sederhana:
   1. Buka/tutup menu di HP (hamburger)
   2. Buka/tutup dropdown "Produk"
   3. Tutup menu setelah link diklik
========================================= */

// ---------- 1. MENU HAMBURGER ----------

// ambil tombol hamburger dan menu utamanya dari HTML
var tombolMenu = document.getElementById("tombolMenu");
var menuUtama = document.getElementById("menuUtama");

// saat tombol hamburger diklik...
tombolMenu.onclick = function () {

  // cek apakah menu sedang terbuka
  if (menuUtama.className === "menu buka") {
    // jika iya, tutup menunya
    menuUtama.className = "menu";
  } else {
    // jika belum, buka menunya
    menuUtama.className = "menu buka";
  }

  // reset dropdown supaya tidak tertinggal terbuka saat menu dibuka lagi
  dropdownProduk.className = "dropdown";
};

// ---------- 2. DROPDOWN "PRODUK" ----------

var tombolProduk = document.getElementById("tombolProduk");
var dropdownProduk = document.getElementById("dropdownProduk");

// saat tulisan "Produk" diklik...
tombolProduk.onclick = function (e) {

  // supaya halaman tidak melompat ke atas saat link diklik
  e.preventDefault();

  if (dropdownProduk.className === "dropdown buka") {
    dropdownProduk.className = "dropdown";
  } else {
    dropdownProduk.className = "dropdown buka";
  }
};

// ---------- 3. TUTUP MENU SETELAH LINK DIKLIK ----------
// supaya tidak perlu menutup menu manual saat di HP.
// Catatan: link yang menuju halaman lain
// tetap berfungsi normal — browser akan pindah halaman sendiri.

var semuaLink = document.querySelectorAll("#menuUtama a");

for (var i = 0; i < semuaLink.length; i++) {

  // lewati tombol Produk, jangan timpa onclick-nya
  // (kalau tidak dilewati, fungsi buka dropdown-nya ikut tertimpa
  //  dan klik "Produk" tidak akan membuka apa pun)
  if (semuaLink[i] === tombolProduk) {
    continue;
  }

  semuaLink[i].onclick = function () {
    menuUtama.className = "menu";
    dropdownProduk.className = "dropdown";
  };
}

// ---------- 4. FORM KONTAK (halaman kontak.html saja) ----------
// Kalau tidak diblokir, browser akan me-reload halaman saat tombol
// "Kirim Pesan" ditekan dan semua isian hilang tanpa pesan apa pun.

var formKontak = document.getElementById("formKontak");

// cek dulu: form hanya ada di halaman kontak.html
if (formKontak) {
  formKontak.onsubmit = function (e) {

    // cegah perilaku bawaan browser (me-reload halaman)
    e.preventDefault();

    // tampilkan pesan konfirmasi di bawah tombol
    var tempatPesan = document.getElementById("pesanTerkirim");
    tempatPesan.textContent = "Thank you! Your inquiry has been received. (demo: not actually sent)";

    // kosongkan kembali semua isian form
    formKontak.reset();
  };
}
