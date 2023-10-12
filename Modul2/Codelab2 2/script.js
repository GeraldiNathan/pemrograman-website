document
  .getElementById("daftarButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
      alert("Semua data harus diisi.");
    } else {
      alert(
        "Info Detail Data" +
          "\nNama: " +
          nama +
          "\nEmail:" +
          email +
          "\nAlamat:" +
          alamat +
          "\nData berhasil ditambah :)"
      );
    }
  });
