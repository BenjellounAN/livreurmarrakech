// breadcrumbs.js - Loads breadcrumbs on every page
document.addEventListener('DOMContentLoaded', function() {
    
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
    `;
    
    // Get current page name from URL
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // ===== PAGE NAMES MAPPING =====
    const pageNames = {
        // Main pages
        'index.html': '🏠 Home',
        'benmarket.html': '🛒 Grocery Delivery Marrakech',
        'aboutus.html': 'ℹ️ About Us',
        'loader.html': '⏳ Loading...',
        
        // Food delivery pages
        'mcdonalds.html': '🍔 McDonald\'s Marrakech',
        'menumcdo.html': '🍔 McDonald\'s Menu',
        'kfc.html': '🍗 KFC Marrakech',
        'kfcmenu.html': '🍗 KFC Menu',
        'pizzas.html': '🍕 Pizza Marrakech',
        'menupizzahut.html': '🍕 Pizza Hut Menu',
        'menuzushi.html': '🍣 Sushi Marrakech',
        'menuflowers.html': '💐 Flowers Marrakech',
        
        // Checkout pages
        'checkout.html': '🛍️ Checkout',
        'scheckout.html': '🛍️ Supermarket Checkout',
        'fcheckout.html': '🛍️ Flowers Checkout',
        'kcheckout.html': '🛍️ KFC Checkout',
        'pcheckout.html': '🛍️ Pizza Checkout',
        'zcheckout.html': '🛍️ Sushi Checkout',
        
        // Dashboard
        'dashboard.html': '📊 Dashboard'
    };
    
    const pageTitle = pageNames[currentPage] || 'Delivery Marrakech';
    
    // ===== SPECIAL CHECKOUT PAGES =====
    const checkoutPages = [
        'checkout.html', 
        'scheckout.html', 
        'fcheckout.html', 
        'kcheckout.html', 
        'pcheckout.html', 
        'zcheckout.html'
    ];
    
    const isCheckout = checkoutPages.includes(currentPage);
    
    // ===== BUILD BREADCRUMBS HTML =====
    let breadcrumbsHTML = '';
    
    if (isCheckout) {
        // Checkout breadcrumb - show the path to checkout
        breadcrumbsHTML = `
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
    } else if (currentPage === 'aboutus.html') {
        // About Us breadcrumb
        breadcrumbsHTML = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    } else if (currentPage === 'dashboard.html') {
        // Dashboard breadcrumb
        breadcrumbsHTML = `
            <a href="https://delivery-marrakech.com/index.html" style="color: #B22222; text-decoration: none; font-weight: 500;">
                <i class="fas fa-home"></i> Home
            </a>
            <span style="color: #aaa; margin: 0 6px;">›</span>
            <span style="color: #555; font-weight: 400;">${pageTitle}</span>
        `;
    } else if (currentPage === 'loader.html') {
        // Loader page (no breadcrumbs needed)
        breadcrumbsHTML = '';
    } else {
        // Regular page breadcrumb
        breadcrumbsHTML = `
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
    
    breadcrumbsDiv.innerHTML = breadcrumbsHTML;
    
    // ===== INSERT BREADCRUMBS =====
    // Try to insert after restaurant-info
    let targetElement = document.querySelector('.restaurant-info');
    
    // If no restaurant-info, try to insert after navbar
    if (!targetElement) {
        targetElement = document.querySelector('.navbar');
        if (targetElement) {
            targetElement = targetElement.nextElementSibling;
        }
    }
    
    // If still no target, insert after hero section
    if (!targetElement) {
        targetElement = document.querySelector('.hero-section');
        if (targetElement) {
            targetElement = targetElement.nextElementSibling;
        }
    }
    
    // If still no target, insert at the top of body
    if (!targetElement) {
        targetElement = document.body.firstChild;
    }
    
    // Insert breadcrumbs
    if (targetElement && breadcrumbsHTML !== '') {
        targetElement.parentNode.insertBefore(breadcrumbsDiv, targetElement);
    } else if (breadcrumbsHTML !== '') {
        document.body.insertBefore(breadcrumbsDiv, document.body.firstChild);
    }
    
    // ===== ADD SCROLL ANIMATION =====
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const breadcrumb = document.getElementById('breadcrumbs');
        if (breadcrumb) {
            if (currentScroll > 100) {
                breadcrumb.style.position = 'sticky';
                breadcrumb.style.top = '0';
                breadcrumb.style.zIndex = '999';
                breadcrumb.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            } else {
                breadcrumb.style.position = 'static';
                breadcrumb.style.boxShadow = 'none';
            }
        }
    });
});
