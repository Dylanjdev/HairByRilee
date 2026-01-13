// Hair styles gallery data
const hairStyles = [
    { name: 'Balayage Blonde', image: 'balayage-blonde.jpg' },
    { name: 'Ombré Brunette', image: 'ombre-brunette.jpg' },
    { name: 'Beach Waves', image: 'beach-waves.jpg' },
    { name: 'Pixie Cut', image: 'pixie-cut.jpg' },
    { name: 'Long Layers', image: 'long-layers.jpg' },
    { name: 'Bob Cut', image: 'bob-cut.jpg' },
    { name: 'Caramel Highlights', image: 'highlights-caramel.jpg' },
    { name: 'Shag Cut', image: 'shag-cut.jpg' },
    { name: 'Curtain Bangs', image: 'curtain-bangs.jpg' },
    { name: 'Wavy Lob', image: 'lob-wavy.jpg' },
    { name: 'Elegant Updo', image: 'updo-elegant.jpg' },
    { name: 'Braided Crown', image: 'braided-crown.jpg' },
    { name: 'Textured Crop', image: 'textured-crop.jpg' },
    { name: 'Sleek Straight', image: 'sleek-straight.jpg' },
    { name: 'Fishtail Braid', image: 'fishtail-braid.jpg' },
    { name: 'Messy Bun', image: 'messy-bun.jpg' },
    { name: 'Butterfly Cut', image: 'butterfly-cut.jpg' },
    { name: 'High Ponytail', image: 'ponytail-high.jpg' },
    { name: 'Wolf Cut', image: 'wolf-cut.jpg' },
    { name: 'French Twist', image: 'french-twist.jpg' }
];

// Load gallery on page load
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
});

function loadGallery() {
    const gallery = document.getElementById('gallery');
    
    hairStyles.forEach((style, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.05}s`;
        
        galleryItem.innerHTML = `
            <img src="images/${style.image}" alt="${style.name}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${style.name}</h3>
            </div>
            <div class="gallery-expand-hint">
                <span>Click to expand</span>
            </div>
        `;
        
        // Add click event to open modal
        const img = galleryItem.querySelector('img');
        img.addEventListener('click', () => openModal(img.src, style.name));
        
        gallery.appendChild(galleryItem);
    });
}

// Modal functionality
function openModal(imageSrc, altText) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modalImg.src = imageSrc;
    modalImg.alt = altText;
    modal.style.display = 'block';
    
    // Trigger animation after display is set
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    
    modal.classList.remove('active');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);
}

// Close modal when clicking on background or close button
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on X button click
    closeBtn.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

// Smooth scroll animation for hero section (desktop only)
let ticking = false;

window.addEventListener('scroll', () => {
    // Only apply parallax on desktop (screens wider than 768px)
    if (window.innerWidth > 768) {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const hero = document.querySelector('.hero');
                const scrolled = window.pageYOffset;
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                ticking = false;
            });
            ticking = true;
        }
    }
});
