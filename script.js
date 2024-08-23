let currentIndex = 0;
        const images = document.querySelectorAll("#carousel img");

        function moveCarousel(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            } else if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            images.forEach((img, index) => {
                img.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        }