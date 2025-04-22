function hitungTotal() {
    let nama = document.getElementById("nama").value;
    let jumlah = Number(document.getElementById("jumlah").value);
    let harga = Number(document.getElementById("harga").value);

    if (!nama || jumlah <= 0 || harga <= 0) {
        alert("Silakan isi semua field dengan benar!");
        return;
    }
    
    let total = jumlah * harga;
    document.getElementById("judulTotal").innerText = `Total Harga Produk ${nama}`;
    document.getElementById("totalHarga").innerText = `Rp. ${total.toLocaleString("id-ID")}`;
}