// breadcrumbs.js - Universal Breadcrumbs for all pages
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🔄 Loading breadcrumbs...');
    
    // Create breadcrumbs container
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
    
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('📄 Current page:', currentPage);
    
    // Page names
    const pageNames = {
        'index.html': '🏠 Home',
        'benmarket.html': '🛒 Grocery Delivery Marrakech',
        'aboutus.html': 'ℹ️ About Us',
        'loader.html': '⏳ Loading...',
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
    
    // Check if it's a checkout page
    const checkoutPages = ['checkout.html', 'scheckout.html', 'fcheckout.html', 'kcheckout.html', 'pcheckout.html', 'zcheckout.html'];
    const isCheckout = checkoutPages.includes(currentPage);
    const pageTitle = pageNames[currentPage] || 'Delivery Marrakech';
    
    // ===== BUILD BREADCRUMBS =====
    let html = '';
    
    // No breadcrumbs on loader page
    if (currentPage === 'loader.html') {
        console.log('⏳ Loader page - skipping breadcrumbs');
        return;
    }
    
    // About Us & Dashboard (simple breadcrumb)
    if (currentPage === 'aboutus.html' || currentPage === 'dashboard.html') {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    } 
    // Checkout pages
    else if (isCheckout) {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <a href="https://delivery-marrakech.com/benmarket.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                🛒 Supermarket
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #B22222; font-weight: 600;">${pageTitle}</span>
        `;
    } 
    // Regular pages
    else {
        html = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <a href="https://delivery-marrakech.com/benmarket.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                🛒 Supermarket
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    }
    
    breadcrumbsDiv.innerHTML = html;
    
    // ===== INSERT BREADCRUMBS =====
    // Try to insert after the navbar (if exists)
    const navbar = document.querySelector('.navbar');
    if (navbar && navbar.nextSibling) {
        navbar.parentNode.insertBefore(breadcrumbsDiv, navbar.nextSibling);
        console.log('✅ Breadcrumbs inserted after navbar');
    } else {
        // If no navbar, insert at the very top of body
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
});
