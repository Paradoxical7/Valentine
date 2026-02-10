// script.js

// Handle button clicks
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        // Change "No" button text
        document.getElementById('no-button').innerText = 'You sure?';

        // Make Yes button bigger
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window
            .getComputedStyle(yesButton)
            .getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Rainbow flash effect
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;

    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD';
        if (callback) callback();
    }, 2000);
}

// Show person + cat (side by side)
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    // Person image (JPG)
    var personImage = new Image();
    personImage.src = 'person.jpg';
    personImage.alt = 'Person';

    // Cat image
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';

    imageContainer.appendChild(personImage);
    imageContainer.appendChild(catImage);
}

// Show cat-heart after YES
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    // Wrapper for end screen
    var endScreen = document.createElement('div');
    endScreen.className = 'end-screen';

    // Cat heart image
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';

    // Final image
    var finalImage = new Image();
    finalImage.src = 'final.jpg';
    finalImage.alt = 'Final Image';

    // Message
    var message = document.createElement('div');
    message.className = 'end-message';
    message.innerText = 'Yay 💖 Happy Valentine’s Day!';

    endScreen.appendChild(catHeartImage);
    endScreen.appendChild(finalImage);
    endScreen.appendChild(message);

    imageContainer.appendChild(endScreen);
    document.getElementById('options').style.display = 'none';
}

// Initial load
displayCat();

