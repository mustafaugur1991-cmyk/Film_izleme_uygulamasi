/**
 * SINE-FİNAL - Ana JavaScript Dosyası
 */

// 1. Film Veritabanı (API yerine kullanılan veri dizisi)
const movies = [
    { 
        id: 1, 
        title: "Inception", 
        category: "Bilim Kurgu", 
        duration: "2sa 28dk", 
        imdb: 8.8, 
        img: "https://image.tmdb.org/t/p/w500/edv5CZvRjS99vO6YznvItyv7A0o.jpg", 
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0", 
        desc: "Dom Cobb, insanların rüyalarına girerek bilinçaltındaki sırları çalan profesyonel bir hırsızdır. Ona sunulan son bir görev, hayatını geri kazanmasını sağlayacaktır." 
    },
    { 
        id: 2, 
        title: "The Dark Knight", 
        category: "Aksiyon", 
        duration: "2sa 32dk", 
        imdb: 9.0, 
        img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDp9QEQvTlvqSuaY2j9.jpg", 
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY", 
        desc: "Batman, Joker'in Gotham Şehri'nde yarattığı mutlak kaosu durdurmak zorundadır. Adalet ve intikam arasındaki çizgi hiç bu kadar ince olmamıştı." 
    },
    { 
        id: 3, 
        title: "Interstellar", 
        category: "Dram / Bilim Kurgu", 
        duration: "2sa 49dk", 
        imdb: 8.7, 
        img: "https://image.tmdb.org/t/p/w500/gEU2QniE6EJBQwOQvInhIBIqjaD.jpg", 
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E", 
        desc: "İnsanlık yok olma tehlikesiyle karşı karşıyayken, bir grup astronot insanlığın hayatta kalmasını sağlamak için bir solucan deliğinden geçerek yeni bir ev arar." 
    },
    { 
        id: 4, 
        title: "Pulp Fiction", 
        category: "Suç", 
        duration: "2sa 34dk", 
        imdb: 8.9, 
        img: "https://image.tmdb.org/t/p/w500/d5iIl9h9btztp90Y0YhTzW0CU1F.jpg", 
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY", 
        desc: "Quentin Tarantino'dan bir başyapıt. Birbirine dolanan suç hikayeleri ve unutulmaz diyaloglar." 
    }
];

// --- SAYFA YÜKLENDİĞİNDE ÇALIŞACAK MANTIK ---
document.addEventListener('DOMContentLoaded', () => {
    const movieContainer = document.getElementById('movie-container');
    const favContainer = document.getElementById('fav-container');
    
    // URL'den ID parametresini al (Detay sayfası için)
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    // Hangi sayfada olduğumuzu kontrol edip ilgili fonksiyonu çağırıyoruz
    if (movieContainer) {
        displayMovies(); // Ana sayfa
    } else if (movieId) {
        displayMovieDetails(movieId); // Detay sayfası
    } else if (favContainer) {
        displayFavorites(); // Favoriler sayfası
    }
});

// --- FONKSİYONLAR ---

// 2. Ana Sayfada Filmleri Listeleme
function displayMovies() {
    const container = document.getElementById('movie-container');
    container.innerHTML = ""; // Temizle

    movies.forEach(movie => {
        container.innerHTML += `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 position-relative" onclick="window.location.href='product.html?id=${movie.id}'">
                    <span class="imdb-badge">⭐ ${movie.imdb}</span>
                    <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body p-2 text-center bg-black">
                        <h6 class="card-title text-truncate m-0 text-white">${movie.title}</h6>
                        <small class="text-secondary">${movie.category}</small>
                    </div>
                </div>
            </div>`;
    });
}

// 3. Film Detaylarını Yükleme (product.html)
function displayMovieDetails(id) {
    const movie = movies.find(m => m.id == id);
    if (!movie) return;

    // HTML elementlerini doldur
    document.getElementById('movie-title').innerText = movie.title;
    document.getElementById('movie-img').src = movie.img;
    document.getElementById('movie-desc').innerText = movie.desc;
    document.getElementById('movie-imdb').innerText = "IMDB: " + movie.imdb;
    document.getElementById('movie-video').src = movie.trailer;
    
    // Favori butonuna tıklama olayını ata
    const favBtn = document.getElementById('add-fav-btn');
    if (favBtn) {
        favBtn.onclick = () => toggleFavorite(movie.id);
    }
}

// 4. Favori Ekleme / Çıkarma (LocalStorage)
function toggleFavorite(id) {
    let favs = JSON.parse(localStorage.getItem('myFavs')) || [];
    const index = favs.findIndex(f => f.id == id);
    
    if (index === -1) {
        const movie = movies.find(m => m.id == id);
        if (movie) {
            favs.push(movie);
            alert("💖 " + movie.title + " favorilere eklendi!");
        }
    } else {
        const removedTitle = favs[index].title;
        favs.splice(index, 1);
        alert("💔 " + removedTitle + " favorilerden çıkarıldı.");
    }
    
    localStorage.setItem('myFavs', JSON.stringify(favs));

    // Eğer favoriler sayfasındaysak ekranı anlık güncelle
    if (document.getElementById('fav-container')) {
        displayFavorites();
    }
}

// 5. Favoriler Sayfasını Listeleme
function displayFavorites() {
    const container = document.getElementById('fav-container');
    if (!container) return;

    const favorites = JSON.parse(localStorage.getItem('myFavs')) || [];
    container.innerHTML = ""; 

    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="text-center mt-5 py-5 w-100">
                <h3 class="text-secondary">Henüz favori filminiz yok.</h3>
                <a href="index.html" class="btn btn-danger mt-3 px-4 rounded-pill">Filmleri Keşfet</a>
            </div>`;
        return;
    }

    favorites.forEach(movie => {
        container.innerHTML += `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 border-0 shadow-lg bg-black">
                    <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body text-center">
                        <h6 class="text-white mb-3 text-truncate">${movie.title}</h6>
                        <div class="d-grid gap-2">
                            <a href="product.html?id=${movie.id}" class="btn btn-sm btn-outline-light rounded-pill">Detaylar</a>
                            <button onclick="toggleFavorite(${movie.id})" class="btn btn-sm btn-link text-danger text-decoration-none">Kaldır</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// 6. Tüm Favorileri Temizle
function clearAllFavorites() {
    if(confirm("Tüm favori listenizi boşaltmak istediğinize emin misiniz?")) {
        localStorage.removeItem('myFavs');
        displayFavorites();
    }
}