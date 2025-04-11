document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    document.querySelectorAll('.editable-image').forEach(img => {
        img.addEventListener('click', function() {
            const newSrc = prompt('Enter the URL for the new image:');
            if (newSrc) {
                this.src = newSrc;
            }
        });
    });
});
