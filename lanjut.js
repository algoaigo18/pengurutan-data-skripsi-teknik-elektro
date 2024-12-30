function displayData(data) {
    const tbody = document.querySelector("#data-table tbody");
    tbody.innerHTML = "";
    data.forEach(item => {
        const row = `<tr>
            <td>${item.tahun}</td>
            <td>${item.nama}</td>
            <td><a href="#" onclick="openModal('${item.judul}', '${item.isi}')">${item.judul}</a></td>
        </tr>`;
        tbody.innerHTML += row;
    });
}
