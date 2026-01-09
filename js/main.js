const movies = [
    { title: "Nurnberg", cat: "Dram, Tarih", img: "" },
    { title: "Ketenpere", cat: "Komedi", img: "./images/" },
    { title: "Kardeş Takımı 3", cat: "Aile, Macera", img: "./images/afis3.jpg" },
    { title: "Atalarımızın Efsaneleri", cat: "Fantastik", img: "./images/afis4.jpg" },
    { title: "Hizmetçi", cat: "Gizem, Gerilim", img: "./images/afis5.jpg" },
    { title: "Başka Yolu Yok", cat: "Suç, Gerilim", img: "./images/afis6.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('movie-grid');
    if (grid) {
        movies.forEach(m => {
            grid.innerHTML += `
                <div class="col-6 col-md-4 col-lg-2">
                    <div class="poster-card" onclick="location.href='product.html'">
                        <img src="${m.img}" alt="${m.title}">
                        <h6 class="mb-0 text-white">${m.title}</h6>
                        <p>${m.cat}</p>
                    </div>
                </div>`;
        });
    }
});