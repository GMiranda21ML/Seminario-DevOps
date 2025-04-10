document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Make images editable
    document.querySelectorAll('.editable-image').forEach(img => {
        img.addEventListener('click', function() {
            const newSrc = prompt('Enter the URL for the new image:');
            if (newSrc) {
                this.src = newSrc;
            }
        });
    });
});