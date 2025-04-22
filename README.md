# Belajar JavaScript Dasar
## Syarat Penulisan
1. Disimpan dengan esktensi .js
2. tag <script> di dalam HTML
3. Di dalam element <head> atau di akhir <body>
ex:
<!-- INTERNAL -->
<script>
    document.getElementById("text").innerHTML="Hello World"
</script>
<!-- EXTERNAL IN BODY -->
<script src="./script.js"></script>
<!-- EXTERNAL IN HEAD -->
Harus menulis defer biar script ditunda sampai HTML selesai dimuat, sama seperti kita menulis script di bagian akhir body.
<script src="./script.js" defer></script>

4. JavaScript bersifat CASE SENSITIVE
5. Came case = hitungLuas
6. Selalu diakhiri dengan tanda ";" (semicolon)
7. Selector selalu (id="") tidak ada class seperti di CSS
ex:
<div id="text"></div>

1. Internal (Ditulis di bagian akhir sebelum penutup body)
2. External dengan extension ".js" <-- BEST PRACTICE -->


## Prinsip Dasar
1. SoC (Separation of Concern)
Memisahkan logic dengan file struktur lainnya.

2. DRY (Don't Repeat Yourself)


## Function Scope & Block Scope
Scope adalah ruang lingkup di mana sebuah variabel bisa diakses.
1. Function Scope
- Variabel hanya dapat diakses dari dalam fungsi tempat di mana variabel di deklarasikan.
- Ini berlaku untuk variabel yang dideklarasi menggunakan "var".
ex:
function contohFunction() {
  var pesan = "Halo!";
  console.log(pesan); // ✅ Dapat diakses
}

console.log(pesan); // ❌ Error: pesan is not defined

2. Block Scope
- Variabel hanya dapat diakses dari dalam blok tempat variabel dideklarasikan, termasuk if, for, { }, dan lainnya.
- Berlaku untuk let dan const.
ex:
if (true) {
  let nama = "Dina";
  const usia = 20;
  console.log(nama); // ✅ Bisa
}

console.log(nama); // ❌ Error: nama is not defined


## Variabel
Tiga cara deklarasi variabel di JavaScript:
1. var
- Cara lama untuk deklarasi variabel.
- Memiliki function scope, bukan block scope.
- Bisa dideklarasi ulang.
- Hindari var kecuali ada alasan spesifik (misalnya saat menulis kode lama/legacy).
ex:
var nama = "saya";
var umur = 25;

2. let
- Memiliki block scope
- Dapat diubah nilainya, tapi tidak dapat dideklarasi ulang di scope yang sama.
- Gunakan let jika nilai variabel dapat berubah.
ex:
let nama = "Budi";
nama = "Rudi"; -> dapat ditulis seperti ini juga

3. const
- Memiliki block scope.
- Nilainya tidak dapat diubah setelah dideklarasikan.
- Wajib langsung diisi saat deklarasi.
- Gunakan const jika nilai tetap (misal konfigurasi, konstanta).
ex:
const PI = 3.14;
// PI = 3.15; // Error


# Tipe Data
1. String = "Laptop"
2. Number = 10000
3. Boolean =  true, false
4. Array = ["Laptop","Mouse"]
5. Object = {nama: "laptop, harga: 10000}


# Operator Aritmatika
+ - * / %


# Example
document.getElementById("text").innerHTML="Hello World";
console.log
console.log("Hello World");

let jumlah = 2;
let harga = 10000;
let total = jumlah * harga;
console.log("Total: ", total)
