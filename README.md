# Website Latihan — Mirip Lockheed Martin (multi-page lengkap)

Website latihan untuk pelajar. Tampilannya terinspirasi situs korporat,
tapi kodenya polos dan mudah dibaca. **Bukan** situs resmi Lockheed Martin.

## Cara menjalankan
Buka `index.html` di browser, atau:

```bash
python -m http.server 8000
# lalu buka http://localhost:8000
```

## Struktur file — 10 halaman
```
index.html         → Home
tentang.html       → Tentang (menu "Tentang")
pesawat.html       → Produk: Pesawat (dropdown + kartu produk 1)
helikopter.html    → Produk: Helikopter (dropdown + kartu produk 2)
satelit.html       → Produk: Satelit (dropdown + kartu produk 3)
kontak.html        → Kontak (menu "Kontak" + form)
tim.html           → Tim Kami (footer)
karier.html        → Karier (footer + tombol CTA)
css/style.css      → 1 stylesheet untuk semua halaman
js/script.js       → hamburger + dropdown + tutup menu (dipakai semua halaman)
README.md
```

## Konsep multi-page
- `<a href="namafile.html">` = pindah halaman
- `<a href="#produk">` = lompat ke bagian dalam halaman yang sama
- Header & footer disalin identik ke tiap halaman; hanya isi tengah berbeda
- CSS & JS cukup 1 file karena semua halaman memakai class & id yang sama

## Konsep yang dipelajari
- HTML: struktur halaman, form/input/textarea, breadcrumb
- CSS: flex, position sticky, display none/block, @media
- JS: getElementById, onclick, className, for loop, preventDefault
