
function typeText(element, text, speed, callback) {
    let index = 0;
    element.textContent = '';
    const interval = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(interval);
            if (callback) setTimeout(callback, 1000);
        }
    }, speed);
}

function startAnimation() {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    
    const sequence = () => {
        text1.textContent = '';
        text2.textContent = '';
        typeText(text1, 'itzincvx', 50, () => {
            typeText(text2, 'dm for fn accs on discord', 50, () => {
                typeText(text2, 'join dsc.gg/skyfall305', 50, () => {
                    setTimeout(sequence, 2000);
                });
            });
        });
    };
    
    sequence();
}

window.onload = startAnimation;
