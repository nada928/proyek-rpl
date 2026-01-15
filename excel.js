function exportExcel() {
    let table = document.getElementById("tabelBarang");

    if (!table) {
        alert("Tabel tidak ditemukan!");
        return;
    }

    let rows = table.querySelectorAll("tr");
    let csv = [];

    rows.forEach(row => {
        let cols = row.querySelectorAll("th, td");
        let rowData = [];

        cols.forEach((col, index) => {
            // Skip kolom Aksi (kolom terakhir)
            if (index !== cols.length - 1) {
                rowData.push('"' + col.innerText.replace(/"/g, '""') + '"');
            }
        });

        csv.push(rowData.join(","));
    });

    let csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
    let link = document.createElement("a");

    link.href = URL.createObjectURL(csvFile);
    link.download = "data_barang.csv";
    link.click();
}
