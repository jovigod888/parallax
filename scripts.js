document.addEventListener('mousemove', parallax);

function parallax(e) {
    const layer = document.querySelectorAll('.layer');

    layer.forEach(item => {
        const depth = item.getAttribute('data-depth');
        const moveX = (e.clientX * depth) / 250;
        const moveY = (e.clientY * depth) / 250;

        item.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
}