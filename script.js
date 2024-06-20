document.addEventListener("DOMContentLoaded", function() {
    const discountBanner = document.querySelector('.discount-banner .discount');

    setInterval(() => {
        discountBanner.style.transform = 'scale(1.1)';
        setTimeout(() => {
            discountBanner.style.transform = 'scale(1)';
        }, 500);
    }, 2000);
});
   s