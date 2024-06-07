function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// FPS Calculation
function calculateFPS() {
    let lastFrameTime = performance.now();
    let frameCounter = 0;

    function update() {
        const currentTime = performance.now();
        const deltaTime = currentTime - lastFrameTime;
        lastFrameTime = currentTime;
        const fps = Math.round(1000 / deltaTime);
        document.getElementById('fps').innerText = `FPS: ${fps}`;
        requestAnimationFrame(update);
    }

    update();
}

document.addEventListener("DOMContentLoaded", function() {
    var notification = document.querySelector('.notification');
    setTimeout(function() {
        notification.style.display = 'none';
    }, 5000); // 5 seconds
});

window.addEventListener('load', calculateFPS);
