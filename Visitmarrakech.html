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
            overflow-x: hidden; /* منع التمرير الأفقي */
        }
        header {
            background: #800000; /* أحمر داكن */
            color: #fff;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .menu-button {
            position: absolute;
            left: 15px;
            background: transparent; /* خلفية شفافة */
            color: #fff;
            padding: 10px 15px;
            border: none;
            font-size: 24px;
            cursor: pointer;
            border-radius: 5px;
        }
        .menu-button:hover {
            background: rgba(255, 255, 255, 0.2); /* تأثير شفاف عند التمرير */
        }
        .sidebar {
            position: fixed;
            top: 0;
            left: -250px; /* البداية خارج الشاشة */
            width: 250px;
            height: 100%;
            background: #d3d3d3; /* رمادي فاتح */
            color: #333;
            z-index: 1001;
            display: flex;
            flex-direction: column;
            padding: 15px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
            transition: left 0.3s ease; /* تأثير الإزاحة */
        }
        .sidebar.active {
            left: 0; /* تظهر القائمة */
        }
        .sidebar a {
            color: #333;
            text-decoration: none;
            margin: 10px 0;
            font-size: 18px;
        }
        .sidebar a:hover {
            text-decoration: underline;
        }
        .close-button {
            align-self: flex-end;
            background: transparent;
            color: #333;
            border: none;
            font-size: 24px;
            cursor: pointer;
            margin-bottom: 20px;
        }
        .hero {
            background: url('https://source.unsplash.com/1600x900/?marrakech') no-repeat center center/cover;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
            margin-top: 60px; /* لتعويض العنوان الثابت */
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
    <header>
        <button class="menu-button" onclick="toggleSidebar()">☰</button>
        Visit Marrakech - اكتشف مراكش
    </header>

    <div class="sidebar" id="sidebar">
        <button class="close-button" onclick="toggleSidebar()">×</button>
        <a href="#attractions">المعالم السياحية</a>
        <a href="#activities">الأنشطة</a>
        <a href="#map">الخريطة</a>
        <a href="#about">عن مراكش</a>
    </div>

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
                <p>جرب الحمامات التقليدية في مراكش لتجديد نشاطك.</p>
            </div>
            <div class="card">
                <img src="https://source.unsplash.com/400x300/?shopping" alt="التسوق في الأسواق">
                <h3>التسوق في الأسواق</h3>
                <p>تمتع بتجربة التسوق في أسواق مراكش التقليدية.</p>
            </div>
        </div>
        <button onclick="showMore('activities-grid', moreActivities)">عرض المزيد</button>
    </section>

    <section id="about">
        <h2>عن مراكش</h2>
        <p>مراكش هي واحدة من أشهر المدن السياحية في المغرب، وتتميز بتاريخها العريق ومعالمها السياحية المدهشة. اكتشف أكثر عن مراكش بما في ذلك المعالم السياحية الفريدة والأنشطة المثيرة التي يمكنك الاستمتاع بها هنا.</p>
        <div id="more-about">
            <p>تعد مراكش مركزًا ثقافيًا مهمًا في المغرب، وتتميز بمزيج من الثقافة العربية والأمازيغية، مع تأثيرات فرنسية وأندلسية. المدينة مليئة بالحياة، ولها تاريخ طويل يعكس تأثيرات هذه الحضارات المتنوعة.</p>
        </div>
        <button id="read-more" onclick="toggleMore()">اقرأ المزيد</button>
    </section>

    <section id="map">
        <h2>خريطة مراكش</h2>
        <div id="map"></div>
    </section>

    <footer>
        <p>&copy; 2024 Visit Marrakech. كل الحقوق محفوظة.</p>
    </footer>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script>
        let moreAttractions = false;
        let moreActivities = false;

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('active');
        }

        function showMore(sectionId, flag) {
            flag = !flag;
            const section = document.getElementById(sectionId);
            const button = section.querySelector('button');
            button.textContent = flag ? 'عرض أقل' : 'عرض المزيد';
        }

        function toggleMore() {
            const moreContent = document.getElementById('more-about');
            const readMoreButton = document.getElementById('read-more');
            moreContent.style.display = moreContent.style.display === 'block' ? 'none' : 'block';
            readMoreButton.textContent = moreContent.style.display === 'block' ? 'اقرأ أقل' : 'اقرأ المزيد';
        }

        function focusMap(coords, title) {
            const map = L.map('map').setView(coords, 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker(coords).addTo(map).bindPopup(title).openPopup();
        }
    </script>
</body>
</html>
