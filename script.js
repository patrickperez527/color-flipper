// Tooltip
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const color = document.getElementById('color');

// String Format
const stringBtn = document.getElementById('string');
const colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen',];

stringBtn.addEventListener('click', () => {
    const randomString = getRandomString();
    document.body.style.background = colors[randomString];
    color.textContent = colors[randomString];

    function getRandomString() {
        return Math.floor(Math.random() * colors.length);
    }
})

// Hex Format
const hexBtn = document.getElementById('hex');
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

hexBtn.addEventListener('click', () => {
    hexValue = '#';
    for (let i = 0; i < 6; i++) {
        hexValue += hex[getRandomHex()];
    }

    document.body.style.background = hexValue;
    color.textContent = hexValue;

    function getRandomHex() {
        return Math.floor(Math.random() * hex.length);
    }
})

// RGB Format
const rgbBtn = document.getElementById('rgb');

function getRandomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    return `rgb(${r}, ${g}, ${b})`;
}

rgbBtn.addEventListener('click', () => {
    document.body.style.background = getRandomRGB();
    color.textContent = getRandomRGB();
})

// HSL Format
const hslBtn = document.getElementById('hsl');

function getRandomHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

hslBtn.addEventListener('click', () => {
    document.body.style.background = getRandomHSL();
    color.textContent = getRandomHSL();
})

// Copy to clipboard
const clipboard = document.getElementById('clipboard');
const clipboardMessage = document.getElementById('clipboard-message');

clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const copied = color.textContent;

    textarea.textContent = copied;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    clipboardMessage.innerHTML = `Color copied to clipboard <i class="fa fa-check" aria-hidden="true"></i>`;
    removeMessage();
})

// Clipboard Message
function removeMessage() {
    setTimeout(() => {
        clipboardMessage.textContent = '';
        setTimeout(() => {
            clipboardMessage.textContent = 'Background will reset after 3 seconds.';
            setTimeout(() => {
                clipboardMessage.textContent = 'Background will reset after 2 seconds.';
                setTimeout(() => {
                    clipboardMessage.textContent = 'Background will reset after 1 second.';
                    setTimeout(() => {
                        clipboardMessage.textContent = '';
                        document.body.style.background = '#f8f9fa';
                        document.body.style.transition = '0.5s';
                        color.textContent = '#f8f9fa';
                    }, 1000);
                }, 1000)
            }, 1000);
        }, 3000)
    }, 1000)
}