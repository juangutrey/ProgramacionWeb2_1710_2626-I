document.getElementById('sumForm').addEventListener('submit',

    function(event){
        event.preventDefault();
        let numero1 = parseFloat(document.getElementById('num1').value);
        let numero2 = parseFloat(document.getElementById('num2').value);
        let resultado = numero1 + numero2;
        console.log(resultado);

        document.getElementById('Resultado').innerText = 'la syma es'+ resultado;
    }
)