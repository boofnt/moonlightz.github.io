function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


        //fps 
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
 
       
         window.addEventListener('load', calculateFPS);


         window.addEventListener('load', function() {
            document.getElementById('spinner').classList.add('hidden');
            document.getElementById('content').classList.remove('hidden');
        });
