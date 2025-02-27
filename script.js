const imgbox = document.getElementById("imgbox");
const qrImage = document.getElementById("qr-img");
const input = document.getElementById("qr-text");
const button = document.getElementById("btn");

function generateQr() {
    const inputValue = input.value.trim();
    if (inputValue) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
        imgbox.style.display = 'block';
    } else {
        alert("Please enter a valid link or text!");
    }
}

button.addEventListener("click", generateQr);
