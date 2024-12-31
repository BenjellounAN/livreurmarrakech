<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visit Marrakech - اكتشف مراكش</title>
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            color: #333;
            background-color: #f8f8f8;
        }
        header {
            background: #800000; /* أحمر داكن */
            color: #fff;
            padding: 15px;
            text-align: center;
            font-size: 24px;
        }
        nav {
            display: flex;
            justify-content: center;
            background: #333; /* أسود */
            padding: 10px 0;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            font-size: 18px;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .hero {
            background: url('https://source.unsplash.com/1600x900/?marrakech') no-repeat center center/cover;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        }
        .hero h1 {
            font-size: 48px;
            margin: 0;
        }
        section {
            padding: 20px;
        }
        footer {
            background: #333; /* أسود */
            color: #fff;
            text-align: center;
            padding: 15px;
            margin-top: 20px;
        }
        #map {
            height: 400px;
            margin-top: 20px;
            border-radius: 8px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .card {
            background: #fff; /* أبيض */
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            text-align: center;
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .card h3 {
            margin: 10px;
            font-size: 20px;
            color: #800000; /* أحمر داكن */
        }
        .card p {
            margin: 10px;
            font-size: 16px;
            color: #555; /* رمادي داكن */
        }
        .card a {
            display: block;
            background-color: #800000; /* أحمر داكن */
            color: #fff;
            padding: 10px 15px;
            text-decoration: none;
            margin: 10px;
            border-radius: 5px;
        }
        .card a:hover {
            background-color: #444; /* رمادي داكن */
        }
        button {
            background-color: #800000; /* أحمر داكن */
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        button:hover {
            background-color: #444; /* رمادي داكن */
        }
        #about {
            line-height: 1.6;
        }
        #more-about {
            display: none;
        }
        #read-more {
            margin-top: 10px;
        }
    </style>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
</head>
<body>
    <header>Visit Marrakech - اكتشف مراكش</header>
    <nav>
        <a href="#attractions">المعالم السياحية</a>
        <a href="#activities">الأنشطة</a>
        <a href="#map">الخريطة</a>
        <a href="#about">عن مراكش</a>
    </nav>

    <div class="hero">
        <h1>مرحبًا بك في مراكش</h1>
    </div>

    <section id="attractions">
        <h2>أفضل المعالم السياحية في مراكش</h2>
        <div class="grid" id="attractions-grid">
            <div class="card">
                <img src="https://source.unsplash.com/400x300/?koutoubia" alt="مسجد الكتبية">
                <h3>مسجد الكتبية</h3>
                <p>يُعد مسجد الكتبية من أشهر المعالم التاريخية في مراكش.</p>
                <a href="#map" onclick="focusMap([31.6258, -7.9892], 'مسجد الكتبية')">عرض الموقع</a>
            </div>
            <div class="card">
                <img src="https://source.unsplash.com/400x300/?jemaa-el-fnaa" alt="ساحة جامع الفنا">
                <h3>ساحة جامع الفنا</h3>
                <p>قلب مراكش النابض حيث تجد الأسواق الشعبية والأنشطة الترفيهية.</p>
                <a href="#map" onclick="focusMap([31.6253, -7.9899], 'ساحة جامع الفنا')">عرض الموقع</a>
            </div>
            <div class="card">
                <img src="https://source.unsplash.com/400x300/?majorelle" alt="حدائق ماجوريل">
                <h3>حدائق ماجوريل</h3>
                <p>واحدة من أجمل الحدائق في المغرب.</p>
                <a href="#map" onclick="focusMap([31.6408, -8.0084], 'حدائق ماجوريل')">عرض الموقع</a>
            </div>
        </div>
        <button onclick="showMore('attractions-grid', moreAttractions)">عرض المزيد</button>
    </section>

    <section id="activities">
        <h2>أفضل الأنشطة في مراكش</h2>
        <div class="grid" id="activities-grid">
            <div class="card">
                <img src="https://source.unsplash.com/400x300/?camel-ride" alt="ركوب الجمال">
                <h3>ركوب الجمال</h3>
                <p>استمتع بتجربة صحراوية أصيلة في مراكش.</p>
            </div>
            <div class="card">
                <img src="https://source.unsplash.com/400x300/?spa" alt="الاسترخاء في الحمام التقليدي">
                <h3>الاسترخاء في الحمام التقليدي</h3>
                <p>جرب الحمامات التقليدية لتجديد طاقتك والاسترخاء.</p>
            </div>
        </div>
        <button onclick="showMore('activities-grid', moreActivities)">عرض المزيد</button>
    </section>

    <section id="map">
        <h2>استكشف مراكش على الخريطة</h2>
        <div id="map"></div>
    </section>

    <section id="about">
        <h2>عن مراكش</h2>
        <p>مراكش مدينة غنية بالتاريخ والحضارة...</p>
        <p id="more-about" style="display:none;">... تمتاز بأجوائها الفريدة، الأسواق النابضة، والمناظر المذهلة التي تأخذ الأنفاس. إنها وجهة رائعة لعشاق الاستكشاف والثقافة.</p>
        <button id="read-more" onclick="toggleAbout()">اقرأ المزيد</button>
    </section>

    <footer>
        &copy; 2024 Visit Marrakech - جميع الحقوق محفوظة.
    </footer>

    <script>
        const moreAttractions = [
            {
                img: "https://source.unsplash.com/400x300/?bahia-palace",
                title: "قصر الباهية",
                desc: "تحفة معمارية من العصر الملكي في مراكش.",
                coords: [31.6202, -7.9806]
            },
            {
                img: "https://source.unsplash.com/400x300/?saadian-tombs",
                title: "مقابر السعديين",
                desc: "أحد المواقع التاريخية العريقة في المدينة.",
                coords: [31.6257, -7.9860]
            }
        ];

        const moreActivities = [
            {
                img: "https://source.unsplash.com/400x300/?hot-air-balloon",
                title: "الطيران بالمناطيد",
                desc: "استمتع بمشاهدة مراكش من السماء.",
            },
            {
                img: "https://source.unsplash.com/400x300/?atlas-trekking",
                title: "التنزه في جبال الأطلس",
                desc: "اكتشف الطبيعة الساحرة في جبال الأطلس.",
            }
        ];

        function showMore(gridId, data) {
            const grid = document.getElementById(gridId);
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <a href="#map" onclick="focusMap([${item.coords.join(',')}], '${item.title}')">عرض الموقع</a>
                `;
                grid.appendChild(card);
            });
        }

        function focusMap(coords, title) {
            const map = L.map('map').setView(coords, 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            L.marker(coords).addTo(map).bindPopup(`<b>${title}</b>`).openPopup();
        }

        function toggleAbout() {
            const moreText = document.getElementById('more-about');
            const btn = document.getElementById('read-more');
            if (moreText.style.display === "none") {
                moreText.style.display = "block";
                btn.textContent = "اقرأ أقل";
            } else {
                moreText.style.display = "none";
                btn.textContent = "اقرأ المزيد";
            }
        }
    </script>
</body>
</html>
