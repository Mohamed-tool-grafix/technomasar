```javascript
/* =====================================================
   تكنومسار
   نظام الموقع الأساسي
===================================================== */


/* ================= بيانات الألعاب ================= */

const games = [

    {
        name: "Mafia 2",
        image: "games/mafia2.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: "5.0",
        description: "لعبة أكشن ومغامرات تدور أحداثها في عالم مفتوح.",
        link: "games/mafia-2.html"
    },

    {
        name: "GTA San Andreas",
        image: "games/gta-sa.jpg",
        category: "action",
        categoryName: "أكشن",
        rating: "4.9",
        description: "واحدة من أشهر ألعاب العالم المفتوح.",
        link: "games/gta-san-andreas.html"
    },

    {
        name: "PES 2013",
        image: "games/pes-2013.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: "4.8",
        description: "لعبة كرة قدم كلاسيكية محبوبة.",
        link: "games/pes-2013.html"
    },

    {
        name: "Truck Simulator",
        image: "games/truck-simulator.jpg",
        category: "simulation",
        categoryName: "محاكاة",
        rating: "4.7",
        description: "تجربة قيادة الشاحنات ومحاكاة الطرق.",
        link: "games/truck-simulator.html"
    },

    {
        name: "Minecraft",
        image: "games/minecraft.jpg",
        category: "adventure",
        categoryName: "مغامرات",
        rating: "4.9",
        description: "استكشف عالمًا مفتوحًا وابنِ عالمك الخاص.",
        link: "games/minecraft.html"
    },

    {
        name: "FIFA 14",
        image: "games/fifa-14.jpg",
        category: "sports",
        categoryName: "رياضة",
        rating: "4.7",
        description: "لعبة كرة قدم شهيرة من سلسلة FIFA.",
        link: "games/fifa-14.html"
    }

];


/* ================= إنشاء كارت اللعبة ================= */

function createGameCard(game) {

    return `
        <article class="game-card">

            <div class="game-image">

                <img
                    src="${game.image}"
                    alt="${game.name}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'game-placeholder\\'>🎮</span>';"
                >

            </div>

            <div class="game-info">

                <h3>${game.name}</h3>

                <p class="game-description">
                    ${game.description}
                </p>

                <div class="game-meta">

                    <span>
                        ${game.categoryName}
                    </span>

                    <span class="rating">
                        ⭐ ${game.rating}
                    </span>

                </div>

                <a
                    href="${game.link}"
                    class="game-btn"
                >
                    🎮 تفاصيل اللعبة
                </a>

            </div>

        </article>
    `;
}


/* ================= الألعاب المميزة ================= */

function showFeaturedGames() {

    const container =
        document.getElementById("featuredGames");

    if (!container) return;

    container.innerHTML =
        games
        .slice(0, 6)
        .map(createGameCard)
        .join("");
}


/* ================= البحث ================= */

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const value =
                this.value.trim().toLowerCase();

            if (!value) {

                searchResults.innerHTML = "";

                return;
            }

            const results =
                games.filter(game =>
                    game.name
                        .toLowerCase()
                        .includes(value)
                );


            if (results.length === 0) {

                searchResults.innerHTML = `
                    <div class="game-card" style="padding:20px;">
                        ❌ لم يتم العثور على اللعبة
                    </div>
                `;

                return;
            }


            searchResults.innerHTML =
                results
                .map(game => `
                    <a
                        href="${game.link}"
                        class="game-card"
                        style="
                            display:block;
                            padding:16px;
                            margin-bottom:8px;
                        "
                    >
                        🎮 ${game.name}
                        <small style="color:#9ba8ba;">
                            — ${game.categoryName}
                        </small>
                    </a>
                `)
                .join("");

        }
    );

}


/* ================= قائمة الهاتف ================= */

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


/* ================= التصنيفات ================= */

document
    .querySelectorAll(".category-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;

                const filtered =
                    games.filter(
                        game =>
                            game.category === category
                    );

                if (!filtered.length) {

                    alert("لا توجد ألعاب في هذا التصنيف حاليًا.");

                    return;
                }

                const container =
                    document.getElementById("featuredGames");

                if (!container) return;

                container.innerHTML =
                    filtered
                    .map(createGameCard)
                    .join("");

                document
                    .getElementById("featuredGames")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* ================= تشغيل الموقع ================= */

showFeaturedGames();

console.log(
    "🎮 تكنومسار يعمل بنجاح!"
);
```
