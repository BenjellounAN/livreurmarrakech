// breadcrumbs.js - Universal Breadcrumbs with correct paths
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🔄 Loading breadcrumbs...');
    
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('📄 Current page:', currentPage);
    
    // ===== PAGE CATEGORIES =====
    const homePages = ['index.html'];
    const groceryPages = ['benmarket.html'];
    const mcdonaldsPages = ['mcdonalds.html', 'menumcdo.html'];
    const kfcPages = ['kfc.html', 'kfcmenu.html'];
    const pizzaPages = ['pizzas.html', 'menupizzahut.html'];
    const sushiPages = ['menuzushi.html'];
    const flowersPages = ['menuflowers.html'];
    const checkoutPages = ['checkout.html', 'scheckout.html', 'fcheckout.html', 'kcheckout.html', 'pcheckout.html', 'zcheckout.html'];
    const aboutPages = ['aboutus.html'];
    const dashboardPages = ['dashboard.html'];
    
    // ===== PAGE NAMES =====
    const pageNames = {
        'index.html': '🏠 Home',
        'benmarket.html': '🛒 Grocery Delivery Marrakech',
        'aboutus.html': 'ℹ️ About Us',
        'mcdonalds.html': '🍔 McDonald\'s Marrakech',
        'menumcdo.html': '🍔 McDonald\'s Menu',
        'kfc.html': '🍗 KFC Marrakech',
        'kfcmenu.html': '🍗 KFC Menu',
        'pizzas.html': '🍕 Pizza Marrakech',
        'menupizzahut.html': '🍕 Pizza Hut Menu',
        'menuzushi.html': '🍣 Sushi Marrakech',
        'menuflowers.html': '💐 Flowers Marrakech',
        'checkout.html': '🛍️ Checkout',
        'scheckout.html': '🛍️ Supermarket Checkout',
        'fcheckout.html': '🛍️ Flowers Checkout',
        'kcheckout.html': '🛍️ KFC Checkout',
        'pcheckout.html': '🛍️ Pizza Checkout',
        'zcheckout.html': '🛍️ Sushi Checkout',
        'dashboard.html': '📊 Dashboard'
    };
    
    const pageTitle = pageNames[currentPage] || 'Delivery Marrakech';
    
    // ===== BUILD BREADCRUMBS =====
    let html = '';
    
    // Special pages (no breadcrumbs)
    if (currentPage === 'loader.html') {
        console.log('⏳ Loader page - skipping');
        return;
    }
    
    // ===== HOME PAGE =====
    if (homePages.includes(currentPage)) {
        html = `
            <span style="color: #555; font-weight: 400;">
                <i class="fas fa-home"></i> Home
            </span>
        `;
    }
    // ===== ABOUT US / DASHBOARD =====
    else if (aboutPages.includes(currentPage) || dashboardPages.includes(currentPage)) {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    // ===== CHECKOUT PAGES =====
    else if (checkoutPages.includes(currentPage)) {
        // Determine which store the checkout belongs to
        let storeLink = 'benmarket.html';
        let storeName = '🛒 Supermarket';
        let storeEmoji = '🛒';
        
        if (currentPage === 'kcheckout.html') {
            storeLink = 'kfc.html';
            storeName = '🍗 KFC';
            storeEmoji = '🍗';
        } else if (currentPage === 'pcheckout.html') {
            storeLink = 'pizzas.html';
            storeName = '🍕 Pizza';
            storeEmoji = '🍕';
        } else if (currentPage === 'zcheckout.html') {
            storeLink = 'menuzushi.html';
            storeName = '🍣 Sushi';
            storeEmoji = '🍣';
        } else if (currentPage === 'fcheckout.html') {
            storeLink = 'menuflowers.html';
            storeName = '💐 Flowers';
            storeEmoji = '💐';
        }
        
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <a href="https://delivery-marrakech.com/${storeLink}" style="color: #B22222; text-decoration: none; font-weight: 500;">
                ${storeName}
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #B22222; font-weight: 600;">${pageTitle}</span>
        `;
    }
    // ===== MCDONALD'S =====
    else if (mcdonaldsPages.includes(currentPage)) {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    // ===== KFC =====
    else if (kfcPages.includes(currentPage)) {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    // ===== PIZZA =====
    else if (pizzaPages.includes(currentPage)) {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    // ===== SUSHI =====
    else if (sushiPages.includes(currentPage)) {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    // ===== FLOWERS =====
    else if (flowersPages.includes(currentPage)) {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    // ===== GROCERY =====
    else if (groceryPages.includes(currentPage)) {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    // ===== DEFAULT FALLBACK =====
    else {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    
    // ===== CREATE AND INSERT BREADCRUMBS =====
    const breadcrumbsDiv = document.createElement('div');
    breadcrumbsDiv.id = 'breadcrumbs';
    breadcrumbsDiv.style.cssText = `
        padding: 12px 16px;
        font-size: 13px;
        color: #888;
        background: #f9f7f8;
        border-bottom: 1px solid #eee;
        font-family: 'Ubuntu', sans-serif;
        max-width: 400px;
        margin: 0 auto;
        transition: all 0.3s ease;
    `;
    
    breadcrumbsDiv.innerHTML = html;
    
    // Insert after navbar
    const navbar = document.querySelector('.navbar');
    if (navbar && navbar.parentNode) {
        navbar.parentNode.insertBefore(breadcrumbsDiv, navbar.nextSibling);
        console.log('✅ Breadcrumbs inserted after navbar');
    } else {
        document.body.insertBefore(breadcrumbsDiv, document.body.firstChild);
        console.log('✅ Breadcrumbs inserted at top of body');
    }
    
    // ===== STICKY SCROLL EFFECT =====
    window.addEventListener('scroll', function() {
        const breadcrumb = document.getElementById('breadcrumbs');
        if (breadcrumb) {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > 50) {
                breadcrumb.style.position = 'sticky';
                breadcrumb.style.top = '0';
                breadcrumb.style.zIndex = '999';
                breadcrumb.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                breadcrumb.style.background = '#ffffff';
            } else {
                breadcrumb.style.position = 'relative';
                breadcrumb.style.boxShadow = 'none';
                breadcrumb.style.background = '#f9f7f8';
            }
        }
    });
    
    console.log('✅ Breadcrumbs loaded successfully!');
    console.log('📊 Breadcrumb path:', html.replace(/<[^>]*>/g, ' ').trim());
});
