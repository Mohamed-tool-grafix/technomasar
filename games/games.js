```javascript
/* =========================================
   تكنومسار - قاعدة بيانات الألعاب
========================================= */

const games = [

    {
        name: "محاكي الشاحنات الدول العربية",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/truck.jpg",
        category: "simulation",
        categoryName: "محاكاة",
        rating: 4,
        description: "لعبة محاكاة قيادة الشاحنات واستكشاف الطرق والدول العربية.",
        link: "https://c.go4techno.com/abokreeem-833"
    },

    {
        name: "Pro Evolution Soccer 2013",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/pes2013.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 5,
        description: "لعبة كرة القدم الشهيرة PES 2013.",
        link: "https://youssefsayed2003.blogspot.com/2025/03/2013.html"
    },

    {
        name: "Grand Theft Auto V",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة عالم مفتوح وأكشن ومغامرات.",
        link: "https://uptogames.net/download-grand-theft-auto-v-free/"
    },

    {
        name: "Minecraft",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg",
        category: "adventure",
        categoryName: "مغامرات",
        rating: 5,
        description: "ابنِ عالمك واستكشف المغامرات المختلفة.",
        link: "https://www.mediafire.com/"
    },

    {
        name: "FIFA 14",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/fifa14.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "لعبة كرة القدم FIFA 14.",
        link: "https://uptogames.net/download-fifa-14-for-pc/"
    },

    {
        name: "PUBG Mobile",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة باتل رويال ومنافسات متعددة اللاعبين.",
        link: "https://go4techno.com/pubg-mobile/"
    },

    {
        name: "GTA San Andreas",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7e/GTASABOX.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "عالم مفتوح وأكشن ومغامرات في مدينة كبيرة.",
        link: "https://go4techno.com/"
    },

    {
        name: "Truck Simulator World",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/truck.jpg",
        category: "simulation",
        categoryName: "محاكاة",
        rating: 4,
        description: "محاكي الشاحنات واستكشاف الطرق.",
        link: "https://go4techno.com/"
    },

    {
        name: "Chained Together",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2567870/header.jpg",
        category: "adventure",
        categoryName: "مغامرات",
        rating: 5,
        description: "مغامرات وتحديات تعتمد على التعاون والتنسيق.",
        link: "https://go4techno.com/"
    },

    {
        name: "Soccer Life Simulator 2026",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3002800/header.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "محاكاة حياة لاعب كرة القدم وتطوير مسيرته.",
        link: "https://go4techno.com/soccer-life-simulator/"
    },

    {
        name: "Free Fire",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/freefire.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة باتل رويال ومنافسات سريعة.",
        link: "https://go4techno.com/garena-free-fire"
    },

    {
        name: "GTA 5 Mobile",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "أكشن ومغامرات وعالم مفتوح.",
        link: "https://go4techno.com/"
    },

    /* ==========================
       MAFIA 2
    ========================== */

    {
        name: "Mafia 2",
        image: "mafia2.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة أكشن ومغامرات وقصة في عالم ثلاثي الأبعاد.",
        link: "mafia-2.html"
    }

];


/* =========================================
   عناصر الصفحة
========================================= */

const gamesGrid =
    document.getElementById("gamesGrid");

const gameCount =
    document.getElementById("gameCount");

const noGames =
    document.getElementById("noGames");

const searchInput =
    document.getElementById("gameSearch");

const filterButtons =
    document.querySelectorAll(".filter-btn");


let currentCategory = "all";
let currentSearch = "";


/* =========================================
   إنشاء كارت لعبة
========================================= */

function createGameCard(game) {

    const stars =
        "⭐".repeat(game.rating) +
        "☆".repeat(5 - game.rating);

    return `

        <article class="game-card">

            <div class="game-image">

                <img
                    src="${game.image}"
                    alt="${game.name}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.innerHTML='<span class=\\'game-placeholder\\'>🎮</span>';
                    "
                >

            </div>

            <div class="game-info">

                <h3>
                    ${game.name}
                </h3>

                <p class="game-description">
                    ${game.description}
                </p>

                <div class="game-meta">

                    <span>
                        ${game.categoryName}
                    </span>

                    <span class="rating">
                        ${stars}
                    </span>

                </div>

                <a
                    href="${game.link}"
                    class="game-btn"
                >
                    ⬇️ تفاصيل وتحميل اللعبة
                </a>

            </div>

        </article>

    `;
}


/* =========================================
   عرض الألعاب
========================================= */

function renderGames() {

    const filteredGames =
        games.filter(game => {

            const categoryMatch =
                currentCategory === "all" ||
                game.category === currentCategory;

            const searchMatch =
                game.name
                    .toLowerCase()
                    .includes(
                        currentSearch.toLowerCase()
                    );

            return categoryMatch && searchMatch;

        });


    gamesGrid.innerHTML =
        filteredGames
            .map(createGameCard)
            .join("");


    gameCount.textContent =
        `${filteredGames.length} لعبة`;


    if (filteredGames.length === 0) {

        noGames.style.display = "block";

    } else {

        noGames.style.display = "none";

    }

}


/* =========================================
   البحث
========================================= */

searchInput.addEventListener(
    "input",
    function () {

        currentSearch =
            this.value.trim();

        renderGames();

    }
);


/* =========================================
   التصنيفات
========================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active-filter"
                );

            });


            this.classList.add(
                "active-filter"
            );


            currentCategory =
                this.dataset.category;


            renderGames();

        }
    );

});


/* =========================================
   قائمة الهاتف
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const menu =
    document.querySelector(".menu");


if (menuBtn && menu) {

    menuBtn.addEventListener(
        "click",
        () => {

            menu.classList.toggle("show");

        }
    );

}


/* =========================================
   تشغيل الصفحة
========================================= */

renderGames();

console.log(
    "🎮 تكنومسار: تم تحميل",
    games.length,
    "لعبة"
);
```
