const addImageToPage = canvas => {
    const imageArea = document.getElementById("image-area");

    const image = new Image();
    image.src = canvas.toDataURL("image/png");

    imageArea.innerHTML = '';
	imageArea.appendChild(image);
}

module.exports = addImageToPage;