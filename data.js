let barang = JSON.parse(localStorage.getItem("barang")) || [];

function ubahWatt() {
    const watt = document.getElementById("watt");
    watt.innerHTML = "<option value=''>Pilih Watt</option>";

    ["5 W", "10 W", "15 W", "20 W"].forEach(w => {
        let opt = document.createElement("option");
        opt.value = w;
        opt.textContent = w;
        watt.appendChild(opt);
    });
}

function tambahBarang() {
    const nama = document.getElementById("nama").value;
    const merek = document.getElementById("merek").value;
    const watt = document.getElementById("watt").value;
    const harga = document.getElementById("harga").value;
    const stok = document.getElementById("stok").value;

    if (!nama || !harga || !stok) {
        alert("Lengkapi data!");
        return;
    }

    barang.push({
        nama,
        merek: merek || "-",
        watt: watt || "-",
        harga,
        stok
    });

    localStorage.setItem("barang", JSON.stringify(barang));
    tampilkanBarang();
}

function tampilkanBarang() {
    const tbody = document.getElementById("dataBarang");
    tbody.innerHTML = "";

    barang.forEach((b, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${b.nama}</td>
                <td>${b.watt}</td>
                <td>${b.harga}</td>
                <td>${b.stok}</td>
                <td>
                    <button onclick="hapusBarang(${i})">Hapus</button>
                </td>
            </tr>
        `;
    });
}

function hapusBarang(index) {
    barang.splice(index, 1);
    localStorage.setItem("barang", JSON.stringify(barang));
    tampilkanBarang();
}

tampilkanBarang();
