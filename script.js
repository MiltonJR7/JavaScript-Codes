function tabuada() {
    let valor = prompt("Digite um número maior que zero:");

    if (valor > 0) {
        let tabela = "<table border='1'>";
        tabela += "<tr><th>Multiplicação</th><th>Resultado</th></tr>";

        for (let i = 1; i <= 10; i++) {
            tabela += `<tr><td>${valor} x ${i}</td><td>${valor * i}</td></tr>`;
        }

        tabela += "</table>";

        document.getElementById("result").innerHTML = tabela;
    } else {
        alert("O valor digitado não é válido.");
    }
}
