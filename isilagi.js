function openModal(judul, isi) {
    document.getElementById("modal-judul").textContent = judul;
    document.getElementById("modal-isi").textContent = isi;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
