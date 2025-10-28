function generarQR() {
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let input3 = document.getElementById('input3').value.trim();
    let input4 = document.getElementById('input4').value.trim();

    let textoCompleto = input1 + " " + input2 + " " + input3 + " " + input4;

    if (textoCompleto === "") {
        alert("Ingresa el texto para general el código QR");
    }

    let qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(textoCompleto) + "&size=200x200";
    let qrImg = document.createElement('img');
    qrImg.src = qrCodeURL;
    qrImg.alt = "Código QR generado";

    console.log(qrImg.src);

    qrImg.classList.add('qr-code');

    document.getElementById('qr-code').appendChild(qrImg);
}