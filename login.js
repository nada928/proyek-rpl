function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
        localStorage.setItem("login", "true");
        alert("Login berhasil");
        window.location.href = "barang.html";
    } else {
        alert("Username atau password salah");
    }
}
