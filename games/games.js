const games = [
    {
        name: "محاكي الشاحنات الدول العربية",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/truck.jpg",
        category: "simulation",
        categoryName: "محاكاة",
        rating: 4,
        description: "لعبة محاكاة قيادة الشاحنات واستكشاف الطرق والدول العربية.",
        link: "#"
    },

    {
        name: "Pro Evolution Soccer 2013",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/pes2013.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 5,
        description: "لعبة كرة القدم الشهيرة PES 2013.",
        link: "#"
    },

    {
        name: "Grand Theft Auto V",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة عالم مفتوح وأكشن ومغامرات.",
        link: "#"
    },

    {
        name: "Minecraft",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg",
        category: "adventure",
        categoryName: "مغامرات",
        rating: 5,
        description: "ابنِ عالمك واستكشف المغامرات المختلفة.",
        link: "#"
    },

    {
        name: "FIFA 14",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/fifa14.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "لعبة كرة القدم FIFA 14.",
        link: "#"
    },

    {
        name: "PUBG Mobile",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة باتل رويال ومنافسات متعددة اللاعبين.",
        link: "#"
    },

    {
        name: "GTA San Andreas",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7e/GTASABOX.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "عالم مفتوح وأكشن ومغامرات في مدينة كبيرة.",
        link: "#"
    },

    {
        name: "Truck Simulator World",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/truck.jpg",
        category: "simulation",
        categoryName: "محاكاة",
        rating: 4,
        description: "محاكي الشاحنات واستكشاف الطرق.",
        link: "#"
    },

    {
        name: "Chained Together",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2567870/header.jpg",
        category: "adventure",
        categoryName: "مغامرات",
        rating: 5,
        description: "مغامرات وتحديات تعتمد على التعاون والتنسيق.",
        link: "#"
    },

    {
        name: "Soccer Life Simulator 2026",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3002800/header.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "محاكاة حياة لاعب كرة القدم وتطوير مسيرته.",
        link: "#"
    },

    {
        name: "Free Fire",
        image: "https://raw.githubusercontent.com/mohamed-tool-grafix/technomasar/main/games/freefire.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة باتل رويال ومنافسات سريعة.",
        link: "#"
    },

    {
        name: "GTA 5 Mobile",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "أكشن ومغامرات وعالم مفتوح.",
        link: "#"
    },

    {
        name: "Mafia 2",
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Mafia_II_boxart.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة أكشن ومغامرات وقصة في عالم ثلاثي الأبعاد.",
        link: "mafia-2.html"
    }
];


/* =========================
   عناصر الصفحة
========================= */

const gamesGrid = document.getElementById("gamesGrid");
const gameCount = document.getElementById("gameCount");
const noGames = document.getElementById("noGames");
const searchInput = document.getElementById("gameSearch");
const filterButtons = document.querySelectorAll(".filter-btn");

let selectedCategory = "all";
let searchText = "";


/* =========================
   النجوم
========================= */

function createStars(rating) {
    let stars = "";

    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "⭐" : "☆";
    }

    return stars;
}


/* =========================
   صورة بديلة
========================= */

function createImagePlaceholder(imageBox, gameName) {

    if (imageBox.querySelector(".game-placeholder")) {
        return;
    }

    const placeholder = document.createElement("div");

    placeholder.className = "game-placeholder";

    placeholder.innerHTML = `
        <div style="
            font-size: 45px;
            margin-bottom: 8px;
        ">🎮</div>

        <div style="
            font-size: 14px;
            font-weight: bold;
        ">${gameName}</div>
    `;

    imageBox.appendChild(placeholder);
}


/* =========================
   إنشاء كارت اللعبة
========================= */

function createGame(game) {

    const card = document.createElement("article");
    card.className = "game-card";


    /* الصورة */

    const imageBox = document.createElement("div");
    imageBox.className = "game-image";

    const image = document.createElement("img");

    image.src = game.image;
    image.alt = game.name;
    image.loading = "lazy";


    image.onerror = function () {

        image.style.display = "none";

        createImagePlaceholder(
            imageBox,
            game.name
        );
    };


    imageBox.appendChild(image);


    /* معلومات اللعبة */

    const info = document.createElement("div");
    info.className = "game-info";


    const title = document.createElement("h3");
    title.textContent = game.name;


    const description = document.createElement("p");
    description.className = "game-description";
    description.textContent = game.description;


    /* البيانات */

    const meta = document.createElement("div");
    meta.className = "game-meta";


    const category = document.createElement("span");
    category.textContent = game.categoryName;


    const rating = document.createElement("span");
    rating.className = "rating";
    rating.textContent = createStars(game.rating);


    meta.appendChild(category);
    meta.appendChild(rating);


    /* الزر */

    const button = document.createElement("a");

    button.className = "game-btn";

    button.href = game.link;

    button.textContent = "🎮 تفاصيل اللعبة";


    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(meta);
    info.appendChild(button);


    card.appendChild(imageBox);
    card.appendChild(info);


    return card;
}


/* =========================
   عرض الألعاب
========================= */

function showGames() {

    if (!gamesGrid) {
        console.error("لم يتم العثور على gamesGrid");
        return;
    }


    gamesGrid.innerHTML = "";


    const results = games.filter(function (game) {

        const categoryMatch =
            selectedCategory === "all" ||
            game.category === selectedCategory;


        const searchMatch =
            game.name
                .toLowerCase()
                .includes(
                    searchText.toLowerCase()
                );


        return categoryMatch && searchMatch;
    });


    results.forEach(function (game) {

        gamesGrid.appendChild(
            createGame(game)
        );

    });


    if (gameCount) {

        gameCount.textContent =
            results.length + " لعبة";

    }


    if (noGames) {

        noGames.style.display =
            results.length === 0
                ? "block"
                : "none";

    }
}


/* =========================
   البحث
========================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            searchText =
                this.value.trim();

            showGames();

        }
    );

}


/* =========================
   التصنيفات
========================= */

filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            selectedCategory =
                this.dataset.category;


            filterButtons.forEach(
                function (btn) {

                    btn.classList.remove(
                        "active-filter"
                    );

                }
            );


            this.classList.add(
                "active-filter"
            );


            showGames();

        }
    );

});


/* =========================
   قائمة الهاتف
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const menu =
    document.querySelector(".menu");


if (menuBtn && menu) {

    menuBtn.addEventListener(
        "click",
        function () {

            menu.classList.toggle(
                "show"
            );

        }
    );

}


/* =========================
   تشغيل الموقع
========================= */

showGames();


console.log(
    "🎮 تكنومسار: تم تحميل " +
    games.length +
    " لعبة"
);
