```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>تكنومسار | الألعاب</title>

    <meta name="description"
          content="تصفح ألعاب تكنومسار وابحث عن لعبتك المفضلة بسهولة">

    <link rel="stylesheet" href="../style.css">
</head>

<body>

<header class="header">

    <div class="container nav">

        <a href="../index.html" class="logo">
            <span class="logo-icon">🎮</span>
            <span>تكنومسار</span>
        </a>

        <nav class="menu">

            <a href="../index.html">
                الرئيسية
            </a>

            <a href="games.html" class="active">
                الألعاب
            </a>

            <a href="#categories">
                التصنيفات
            </a>

        </nav>

        <button class="menu-btn" id="menuBtn">
            ☰
        </button>

    </div>

</header>


<main>

    <!-- HERO -->

    <section class="hero" style="min-height:360px;">

        <div class="container hero-content">

            <div class="hero-text">

                <div class="badge">
                    🎮 مكتبة تكنومسار
                </div>

                <h1>
                    متجر
                    <span>الألعاب</span>
                </h1>

                <p>
                    اكتشف ألعابك المفضلة وابحث بينها بسهولة.
                </p>

            </div>

            <div class="hero-game">

                <div class="game-orbit orbit-1"></div>
                <div class="game-orbit orbit-2"></div>

                <div class="controller">
                    🎮
                </div>

            </div>

        </div>

    </section>


    <!-- SEARCH -->

    <section class="search-section">

        <div class="container">

            <div class="search-box">

                <span>🔎</span>

                <input
                    type="search"
                    id="gameSearch"
                    placeholder="ابحث عن لعبة..."
                    autocomplete="off"
                >

            </div>

        </div>

    </section>


    <!-- FILTERS -->

    <section class="section" style="padding-bottom:20px;">

        <div class="container">

            <div
                id="gameFilters"
                class="categories-grid"
                style="
                    grid-template-columns:repeat(6,1fr);
                    gap:10px;
                "
            >

                <button
                    class="category-card filter-btn active-filter"
                    data-category="all"
                    style="min-height:90px;padding:15px;"
                >
                    <span style="font-size:25px;">🎮</span>
                    <strong>الكل</strong>
                </button>

                <button
                    class="category-card filter-btn"
                    data-category="action"
                    style="min-height:90px;padding:15px;"
                >
                    <span style="font-size:25px;">🔥</span>
                    <strong>أكشن</strong>
                </button>

                <button
                    class="category-card filter-btn"
                    data-category="sports"
                    style="min-height:90px;padding:15px;"
                >
                    <span style="font-size:25px;">⚽</span>
                    <strong>رياضة</strong>
                </button>

                <button
                    class="category-card filter-btn"
                    data-category="adventure"
                    style="min-height:90px;padding:15px;"
                >
                    <span style="font-size:25px;">🗺️</span>
                    <strong>مغامرات</strong>
                </button>

                <button
                    class="category-card filter-btn"
                    data-category="racing"
                    style="min-height:90px;padding:15px;"
                >
                    <span style="font-size:25px;">🏎️</span>
                    <strong>سباقات</strong>
                </button>

                <button
                    class="category-card filter-btn"
                    data-category="simulation"
                    style="min-height:90px;padding:15px;"
                >
                    <span style="font-size:25px;">🚛</span>
                    <strong>محاكاة</strong>
                </button>

            </div>

        </div>

    </section>


    <!-- GAMES -->

    <section class="section">

        <div class="container">

            <div class="section-title">

                <div>

                    <span class="small-title">
                        مكتبة الألعاب
                    </span>

                    <h2>
                        🎮 جميع الألعاب
                    </h2>

                </div>

                <span
                    id="gameCount"
                    style="color:#9ba8ba;"
                ></span>

            </div>


            <div
                id="gamesGrid"
                class="games-grid"
            ></div>


            <div
                id="noGames"
                style="
                    display:none;
                    text-align:center;
                    padding:60px 20px;
                    color:#9ba8ba;
                "
            >

                <div style="font-size:55px;">
                    🔎
                </div>

                <h3>
                    لا توجد ألعاب مطابقة
                </h3>

                <p>
                    جرّب كلمة بحث مختلفة أو اختر تصنيفًا آخر.
                </p>

            </div>

        </div>

    </section>

</main>


<footer class="footer">

    <div class="container footer-content">

        <div>

            <div class="footer-logo">
                🎮 تكنومسار
            </div>

            <p>
                عالم الألعاب بين يديك.
            </p>

        </div>

        <div>

            <h3>
                روابط
            </h3>

            <a href="../index.html">
                الرئيسية
            </a>

            <a href="games.html">
                الألعاب
            </a>

        </div>

    </div>

    <div class="copyright">
        © 2026 تكنومسار — متجر الألعاب
    </div>

</footer>


<script src="games.js"></script>

</body>
</html>
```
