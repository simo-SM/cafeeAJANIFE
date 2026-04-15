function initHeroAnimation() {
    const canvas = document.getElementById('hoodieCanvas');
    const context = canvas.getContext('2d');
    const uiLayer = document.getElementById('uiLayer');
    // Kan-akhdo l-section l-kbira li fiha 400vh
    const heroSection = canvas.closest('section'); 
    
    const frameCount = 55;
    const images = [];
    const animationState = { frame: 1 };

    // 1. Preload Images
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = `images/ezgif-frame-${frameNum}.jpg`; 
        img.onload = () => { if(i === 1) render(); };
        images.push(img);
    }

    // 2. Setup Anime.js
    const scrollAnimation = anime({
        targets: animationState,
        frame: frameCount,
        round: 1,
        easing: 'linear',
        autoplay: false,
        update: render
    });

    // 3. Render Function (Object-Fit: Cover logic)
    function render() {
        if (images[animationState.frame - 1]) {
            const img = images[animationState.frame - 1];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            let drawWidth, drawHeight, x, y;

            if (canvasRatio > imgRatio) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                x = 0; y = (canvas.height - drawHeight) / 2;
            } else {
                drawWidth = canvas.height * imgRatio; drawHeight = canvas.height;
                x = (canvas.width - drawWidth) / 2; y = 0;
            }

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y, drawWidth, drawHeight);
        }
    }

    // 4. Smooth Scroll Logic
    window.addEventListener('scroll', () => {
        if (!heroSection) return;

        const sectionTop = heroSection.offsetTop;
        const sectionHeight = heroSection.offsetHeight;
        const scrollTop = window.pageYOffset;
        
        // Hissab l-progress bin 0 w 1 f wast 400vh
        // Kan-nqso window.innerHeight bach l-animation t-tsala m3a l-ekher dyal l-scroll
        let progress = (scrollTop - sectionTop) / (sectionHeight - window.innerHeight);
        progress = Math.max(0, Math.min(1, progress));

        // Sync Anime.js
        scrollAnimation.seek(progress * scrollAnimation.duration);
        
        // UI Layer Animation (Fade & Slide)
        if (uiLayer) {
            // L-hdra kat-ghber gha melli kankonou f-ekher 30% dyal l-animation
            let uiFade = progress > 0.7 ? (1 - progress) * 3.3 : 1;
            uiLayer.style.opacity = Math.max(0, uiFade);
            uiLayer.style.transform = `translateY(-${progress * 60}px)`;
        }
    });

    window.addEventListener('resize', render);
}

document.addEventListener('DOMContentLoaded', initHeroAnimation);


// Variable bash n-trackiw l-scroll l-9dim (optional for extra smoothness)
let currentScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.sticky-card');
    
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Target specifically the inner wrapper for the effect
        const innerContent = card.querySelector('.max-w-5xl'); 
        
        // Net7akmo f l-point fin kat-bda l-animation (Top of viewport)
        const triggerPoint = 80; 

        if (rect.top <= triggerPoint && rect.top > -rect.height) {
            // Calculate progress - ghadi n-ziydo f l-denominator (800) bash t-t9al l-massa
            let progress = Math.abs(rect.top - triggerPoint) / 800; 
            progress = Math.min(Math.max(progress, 0), 1);

            // Anime.js optimized for "Heavy" scroll
            anime({
                targets: innerContent,
                scale: 1 - (progress * 0.15), // Kat-sghar chwiya aktar (depth)
                opacity: 1 - (progress * 0.4),  // Kat-fade aktar
                translateY: progress * -40,    // Kat-tla3 l-fou9 bchwiya
                rotateX: progress * -5,       // Subtle 3D tilt
                duration: 800,                 // Had l-duration hiya li kat-redha t9ila (Slow follow)
                easing: 'easeOutQuart'         // Easing hwa l-sirr dyal l-vibe
            });
        } else if (rect.top > triggerPoint) {
            // Reset Smoothly
            anime({
                targets: innerContent,
                scale: 1,
                opacity: 1,
                translateY: 0,
                rotateX: 0,
                duration: 600,
                easing: 'easeOutQuad'
            });
        }
    });
});