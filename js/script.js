// SCRIPT CLONING WEBSITE
// 1. MENU HAMBURGER
var tombolMenu = document.getElementById("tombolMenu");
var menuUtama = document.getElementById("menuUtama");

tombolMenu.onclick = function () {

  if (menuUtama.className === "menu buka") {
    menuUtama.className = "menu";
  } else {
    menuUtama.className = "menu buka";
  }

  dropdownProduk.className = "dropdown";
};

// 2. DROPDOWN "PRODUK"
var tombolProduk = document.getElementById("tombolProduk");
var dropdownProduk = document.getElementById("dropdownProduk");

tombolProduk.onclick = function (e) {

  e.preventDefault();

  if (dropdownProduk.className === "dropdown buka") {
    dropdownProduk.className = "dropdown";
  } else {
    dropdownProduk.className = "dropdown buka";
  }
};

// 3. TUTUP MENU SETELAH LINK DIKLIK

var semuaLink = document.querySelectorAll("#menuUtama a");

for (var i = 0; i < semuaLink.length; i++) {

  if (semuaLink[i] === tombolProduk) {
    continue;
  }

  semuaLink[i].onclick = function () {
    menuUtama.className = "menu";
    dropdownProduk.className = "dropdown";
  };
}

// 4. FORM KONTAK

var formKontak = document.getElementById("formKontak");

if (formKontak) {
  formKontak.onsubmit = function (e) {

    e.preventDefault();

    var tempatPesan = document.getElementById("pesanTerkirim");
    tempatPesan.textContent = "Thank you! Your inquiry has been received. (demo: not actually sent)";

    formKontak.reset();
  };
}
