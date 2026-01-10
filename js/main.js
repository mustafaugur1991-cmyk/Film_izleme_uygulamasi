// Film Verisi
const movies = [
    { id: 1, title: "Inception", score: "8.8", image: "images/afis1.jpg", category: "Bilim Kurgu", time: "2s 28dk", desc: "Rüya içinde rüya..." },
    { id: 2, title: "Interstellar", score: "8.7", image: "images/afis2.jpg", category: "Macera", time: "2s 49dk", desc: "Yıldızlararası bir yolculuk..." }
];

// Ana Sayfada Filmleri Listeleme
const movieGrid = document.getElementById('movie-grid');
if (movieGrid) {
    movieGrid.innerHTML = movies.map(movie => `
        <div class="col">
            <div class="movie-card-sm" onclick="viewDetail(${movie.id})">
                <div class="poster-wrapper">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="score-box">${movie.score}</div>
                </div>
            </div>
            <a href="product.html?id=${movie.id}" class="movie-title-link text-truncate">${movie.title}</a>
        </div>
    `).join('');
}

// Detay Sayfasına Yönlendirme
function viewDetail(id) {
    window.location.href = `product.html?id=${id}`;
}

// Favorilere Ekleme
function addToFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const movie = movies.find(m => m.id === id);
    
    if (!favorites.some(f => f.id === id)) {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert("Favorilere eklendi!");
    } else {
        alert("Zaten favorilerinizde.");
    }
}