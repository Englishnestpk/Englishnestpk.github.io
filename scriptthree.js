// Function to open the popup and apply effects
function openPopup() {
    // Display the div with class "mpopupthree"
    document.querySelector('.mpopupthree').style.display = 'block';

    // Add blur effect and disable pointer events for the specified divs
    const divsToBlur = [
        '#home-mobile',
        '#about-mobile',
        '#services-mobile',
        '#reviews-mobile',
        '#contact-mobile',
        '#navbar-mobile',
    ];
    divsToBlur.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.filter = 'blur(20px)';
            element.style.pointerEvents = 'none'; // Make the content unclickable
        }
    });

    // Scroll the page to the "services-mobile" div
    const servicesDiv = document.querySelector('#services-mobile');
    if (servicesDiv) {
        servicesDiv.scrollIntoView({ behavior: 'smooth' });
    }

    // Disable scroll functionality on the page
    document.body.style.overflow = 'hidden';
}

// Function to close the popup and remove effects
function closePopup() {
    // Hide the div with class "mpopupthree"
    document.querySelector('.mpopupthree').style.display = 'none';

    // Remove blur effect and enable pointer events for the specified divs
    const divsToBlur = [
        '#home-mobile',
        '#about-mobile',
        '#services-mobile',
        '#reviews-mobile',
        '#contact-mobile',
        '#navbar-mobile',
    ];
    divsToBlur.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.filter = 'none';
            element.style.pointerEvents = 'auto'; // Restore click functionality
        }
    });

    // Re-enable scroll functionality on the page
    document.body.style.overflow = 'auto';

    // Ensure the page stays scrolled to the "services-mobile" div
    const servicesDiv = document.querySelector('#services-mobile');
    if (servicesDiv) {
        servicesDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

// Attach the functions to the respective buttons
document.querySelector('.mpopthree').onclick = openPopup;
document.querySelector('#popupthree-mobile').onclick = closePopup;


