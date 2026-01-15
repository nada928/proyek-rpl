function exportExcel() {
    if (barang.length === 0) {
        alert("Data kosong");
        return;
    }

    let csv = "Nama,Merek,Watt,Harga,Stok\n";

    barang.forEach(item => {
        csv += `${item.nama},${item.merek},${item.watt},${item.harga},${item.stok}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "database_barang.csv";
    a.click();

    window.URL.revokeObjectURL(url);
}
