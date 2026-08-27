document.getElementById("year").textContent = new Date().getFullYear();

const input = document.getElementById("cari");
const kartuList = Array.from(document.querySelectorAll(".kartu"));
const grupList = Array.from(document.querySelectorAll(".grup"));
const hasilKosong = document.getElementById("hasilKosong");

input.addEventListener("input", () => {
  const kueri = input.value.trim().toLowerCase();
  let adaHasil = false;

  kartuList.forEach((kartu) => {
    const teks = (
      kartu.querySelector(".kartu__judul").textContent + " " +
      kartu.querySelector(".kartu__desk").textContent + " " +
      (kartu.dataset.cari || "")
    ).toLowerCase();

    const cocok = teks.includes(kueri);
    kartu.style.display = cocok ? "" : "none";
    if (cocok) adaHasil = true;
  });

  grupList.forEach((grup) => {
    const adaKartuTampil = Array.from(grup.querySelectorAll(".kartu"))
      .some((k) => k.style.display !== "none");
    grup.style.display = adaKartuTampil ? "" : "none";
  });

  hasilKosong.hidden = adaHasil;
});
