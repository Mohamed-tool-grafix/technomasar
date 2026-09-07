"use strict";

/* =========================
   تكنومسار - قائمة الألعاب
   ========================= */

const games = [
    {
        name: "محاكي الشاحنات الدول العربية",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?auto=format&fit=crop&w=900&q=80",
        category: "simulation",
        categoryName: "محاكاة",
        rating: 4,
        description: "لعبة محاكاة قيادة الشاحنات والرحلات الطويلة.",
        link: "https://www.google.com/search?q=محاكي+الشاحنات+الدول+العربية"
    },

    {
        name: "Pro Evolution Soccer 2013",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Pro_Evolution_Soccer_2013_Cover.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "واحدة من أشهر ألعاب كرة القدم الكلاسيكية.",
        link: "https://www.google.com/search?q=Pro+Evolution+Soccer+2013+official"
    },

    {
        name: "Grand Theft Auto V",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "عالم مفتوح ضخم مليء بالمغامرات والمهام.",
        link: "https://www.rockstargames.com/gta-v"
    },

    {
        name: "Minecraft",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        category: "adventure",
        categoryName: "مغامرات",
        rating: 5,
        description: "استكشف عالمًا مفتوحًا وابنِ ما تريد.",
        link: "https://www.minecraft.net/"
    },

    {
        name: "FIFA 14",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/FIFA_14_Cover.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "لعبة كرة القدم الشهيرة من EA Sports.",
        link: "https://www.ea.com/games/fifa"
    },

    {
        name: "PUBG Mobile",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/PUBG_Mobile_logo.png",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة باتل رويال تنافسية على الهواتف.",
        link: "https://www.pubgmobile.com/"
    },

    {
        name: "GTA San Andreas",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "مغامرة عالم مفتوح كلاسيكية من سلسلة GTA.",
        link: "https://www.rockstargames.com/games/sanandreas"
    },

    {
        name: "Truck Simulator World",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
        category: "simulation",
        categoryName: "محاكاة",
        rating: 4,
        description: "قيادة شاحنات ورحلات طويلة في عالم مفتوح.",
        link: "https://www.google.com/search?q=Truck+Simulator+World+official"
    },

    {
        name: "Chained Together",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2567870/header.jpg",
        category: "adventure",
        categoryName: "مغامرات",
        rating: 5,
        description: "مغامرة وتحديات جماعية تعتمد على التعاون.",
        link: "https://store.steampowered.com/app/2567870/Chained_Together/"
    },

    {
        name: "Soccer Life Simulator 2026",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
        category: "sports",
        categoryName: "رياضة",
        rating: 4,
        description: "محاكاة حياة لاعب كرة قدم وتطوير مسيرته.",
        link: "https://www.google.com/search?q=Soccer+Life+Simulator+2026"
    },

    {
        name: "Free Fire",
        image: "https://upload.wikimedia.org/wikipedia/en/8/87/Garena_Free_Fire_Logo.png",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "لعبة باتل رويال سريعة ومناسبة للهواتف.",
        link: "https://ff.garena.com/en"
    },

    {
        name: "GTA 5 Mobile",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 4,
        description: "معلومات عن GTA V وإصداراتها الرسمية.",
        link: "https://www.rockstargames.com/gta-v"
    },

    {
        name: "Mafia 2",
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Mafia_II_boxart.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: 5,
        description: "قصة أكشن ومغامرة في عالم مفتوح.",
        link: "https://store.steampowered.com/app/50130/Mafia_II_Classic/"
    }
];


/* =========================
   إنشاء النجوم
   ========================= */

function createStars(rating) {
    let stars = "";

    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "★" : "☆";
    }

    return stars;
}


/* =========================
   صورة بديلة عند فشل الصورة
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

    /* محتوى الكارت */

    const info = document.createElement("div");

    info.className = "game-info";

    /* العنوان */

    const title = document.createElement("h3");

    title.textContent = game.name;

    /* الوصف */

    const description = document.createElement("p");

    description.className = "game-description";

    description.textContent = game.description;

    /* البيانات */

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

    /* زر التفاصيل */

    const button = document.createElement("a");

    button.className = "game-btn";

    button.href = game.link;

    button.target = "_blank";

    button.rel = "noopener noreferrer";

    button.textContent = "🎮 تفاصيل اللعبة";

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

    const gamesGrid = document.getElementById("gamesGrid");

    const noGames = document.getElementById("noGames");

    const gameCount = document.getElementById("gameCount");

    if (!gamesGrid) {
        return;
    }

    gamesGrid.innerHTML = "";

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

    list.forEach(function (game) {

        gamesGrid.appendChild(
            createGame(game)
        );

    });

    if (gameCount) {

        gameCount.textContent =
            `${list.length} لعبة`;

    }
}


/* =========================
   البحث عن لعبة
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
   التصنيفات
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
   القائمة في الموبايل
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
   تشغيل الصفحة
   ========================= */

showGames();
