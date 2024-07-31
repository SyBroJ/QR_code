document.getElementById('generateButton').addEventListener('click', function () {
    const link = document.getElementById('linkInput').value;
    if (link) {
        generateQRCode(link);
    } else {
        alert('Vui lòng nhập link!');
    }
});

function generateQRCode(link) {
    const qrContainer = document.getElementById('qrContainer');
    qrContainer.innerHTML = '';

    QRCode.toCanvas(link, { width: 720, height: 720 }, function (error, canvas) {
        if (error) {
            console.error(error);
            alert('Đã xảy ra lỗi khi tạo mã QR');
            return;
        }
        qrContainer.appendChild(canvas);

        const downloadButton = document.getElementById('downloadButton');
        downloadButton.style.display = 'block';
        downloadButton.onclick = function () {
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'qr_code.png';
            link.click();
        };
    });
}
