"use strict";

/* =========================
   تكنومسار - الألعاب
   ========================= */

const games = [
    {
        name: "محاكي الشاحنات الدول العربية",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?auto=format&fit=crop&w=900&q=80",
        category: "simulation",
        categoryName: "محاكاة",
        rating: 4,
        description: "لعبة محاكاة قيادة الشاحنات والرحلات الطويلة.",
        link: "../downloads/truck-simulator.zip"
    },

    {
        name: "Pro Evolution Soccer 2013",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Pro_Evolution_Soccer_2013_Cover.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "لعبة كرة قدم كلاسيكية.",
        link: "../downloads/pes2013.zip"
    },

    {
        name: "Grand Theft Auto V",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة عالم مفتوح ومغامرات.",
        link: "../downloads/gta5.zip"
    },

    {
        name: "Minecraft",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        category: "adventure",
        categoryName: "مغامرات",
        rating: 5,
        description: "استكشف وابنِ عالمك الخاص.",
        link: "../downloads/minecraft.zip"
    },

    {
        name: "FIFA 14",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/FIFA_14_Cover.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "لعبة كرة القدم الشهيرة.",
        link: "../downloads/fifa14.zip"
    },

    {
        name: "PUBG Mobile",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/PUBG_Mobile_logo.png",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة باتل رويال للهواتف.",
        link: "../downloads/pubg-mobile.apk"
    },

    {
        name: "GTA San Andreas",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "مغامرة في عالم مفتوح.",
        link: "../downloads/gta-san-andreas.zip"
    },

    {
        name: "Truck Simulator World",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
        category: "simulation",
        categoryName: "محاكاة",
        rating: 4,
        description: "قيادة شاحنات ورحلات طويلة.",
        link: "../downloads/truck-world.zip"
    },

    {
        name: "Chained Together",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2567870/header.jpg",
        category: "adventure",
        categoryName: "مغامرات",
        rating: 5,
        description: "تحديات ومغامرات تعتمد على التعاون.",
        link: "../downloads/chained-together.zip"
    },

    {
        name: "Soccer Life Simulator 2026",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "محاكاة حياة لاعب كرة قدم.",
        link: "../downloads/soccer-life-2026.zip"
    },

    {
        name: "Free Fire",
        image: "https://upload.wikimedia.org/wikipedia/en/8/87/Garena_Free_Fire_Logo.png",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة باتل رويال سريعة.",
        link: "../downloads/free-fire.apk"
    },

    {
        name: "GTA 5 Mobile",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 4,
        description: "معلومات وملفات خاصة بمشروعك.",
        link: "../downloads/gta5-mobile.zip"
    },

    {
        name: "Mafia 2",
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Mafia_II_boxart.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة أكشن ومغامرات.",
        link: "../downloads/mafia2.zip"
    }
];


/* =========================
   النجوم
   ========================= */

function createStars(rating) {
    let stars = "";

    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "★" : "☆";
    }

    return stars;
}


/* =========================
   صورة بديلة
   ========================= */

function createImagePlaceholder(gameName) {
    const placeholder = document.createElement("div");

    placeholder.className = "game-placeholder";

    placeholder.innerHTML = `
        <div style="font-size:42px;">🎮</div>
        <div>${gameName}</div>
    `;

    return placeholder;
}


/* =========================
   إنشاء كارت اللعبة
   ========================= */

function createGame(game) {

    const card = document.createElement("article");

    card.className = "game-card";

    card.dataset.category = game.category;

    card.dataset.name = game.name.toLowerCase();


    /* الصورة */

    const imageBox = document.createElement("div");

    imageBox.className = "game-image";

    const img = document.createElement("img");

    img.src = game.image;

    img.alt = game.name;

    img.loading = "lazy";

    img.onerror = function () {

        if (!imageBox.querySelector(".game-placeholder")) {

            img.remove();

            imageBox.appendChild(
                createImagePlaceholder(game.name)
            );
        }
    };

    imageBox.appendChild(img);


    /* معلومات اللعبة */

    const info = document.createElement("div");

    info.className = "game-info";


    /* الاسم */

    const title = document.createElement("h3");

    title.textContent = game.name;


    /* الوصف */

    const description = document.createElement("p");

    description.className = "game-description";

    description.textContent = game.description;


    /* التصنيف والتقييم */

    const meta = document.createElement("div");

    meta.className = "game-meta";

    meta.innerHTML = `
        <span class="game-category">
            ${game.categoryName}
        </span>

        <span class="rating">
            ${createStars(game.rating)}
        </span>
    `;


    /* زر التحميل */

    const button = document.createElement("a");

    button.className = "game-btn";

    button.href = game.link;

    button.download = "";

    button.textContent = "⬇️ تحميل اللعبة";


    /* منع فتح تبويب جديد */

    button.target = "_self";


    /* إضافة العناصر */

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

function showGames(list = games) {

    const gamesGrid =
        document.getElementById("gamesGrid");

    const noGames =
        document.getElementById("noGames");

    const gameCount =
        document.getElementById("gameCount");


    if (!gamesGrid) {
        return;
    }


    gamesGrid.innerHTML = "";


    /* لا توجد ألعاب */

    if (list.length === 0) {

        if (noGames) {
            noGames.style.display = "block";
        }

        if (gameCount) {
            gameCount.textContent = "0 لعبة";
        }

        return;
    }


    if (noGames) {
        noGames.style.display = "none";
    }


    /* إضافة الألعاب */

    list.forEach(function (game) {

        gamesGrid.appendChild(
            createGame(game)
        );

    });


    /* عدد الألعاب */

    if (gameCount) {

        gameCount.textContent =
            `${list.length} لعبة`;

    }
}


/* =========================
   البحث
   ========================= */

const searchInput =
    document.getElementById("gameSearch");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                this.value
                    .trim()
                    .toLowerCase();


            const activeButton =
                document.querySelector(
                    ".filter-btn.active-filter"
                );


            const activeCategory =
                activeButton
                    ? activeButton.dataset.category
                    : "all";


            const filteredGames =
                games.filter(function (game) {

                    const matchesSearch =
                        game.name
                            .toLowerCase()
                            .includes(searchText);


                    const matchesCategory =
                        activeCategory === "all" ||
                        game.category === activeCategory;


                    return (
                        matchesSearch &&
                        matchesCategory
                    );

                });


            showGames(filteredGames);
        }
    );
}


/* =========================
   الفلاتر
   ========================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

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


            const category =
                this.dataset.category;


            const searchText =
                searchInput
                    ? searchInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            const filteredGames =
                games.filter(function (game) {

                    const matchesCategory =
                        category === "all" ||
                        game.category === category;


                    const matchesSearch =
                        game.name
                            .toLowerCase()
                            .includes(searchText);


                    return (
                        matchesCategory &&
                        matchesSearch
                    );

                });


            showGames(filteredGames);
        }
    );
});


/* =========================
   قائمة الموبايل
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
