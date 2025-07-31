function calcular(){

    let capital = parseInt(document.getElementById('capital').value);
    let taxa = parseInt(document.getElementById('taxa').value);
    let tempo = parseInt(document.getElementById('tempo').value);

    let juros = capital * (taxa/100) * tempo;

    document.getElementById('resultado_juros').textContent = 'montante' + juros;
    
    let montante = juros + capital;

    document.getElementById('resultado_montante').textContent = 'montante' + montante;

}