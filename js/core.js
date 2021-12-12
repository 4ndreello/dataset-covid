var url = "https://covid19-brazil-api.vercel.app/api/report/v1/";

function getData( estado ) {

    let casosConfirmados = document.getElementById("confirmed"), 
    casosDeMortes        = document.getElementById("deaths"), 
    casosFalsos          = document.getElementById("refuses"),
    casosSuspeitos       = document.getElementById("suspects"),
    dataDeRequest        = document.getElementById("request-date");

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let info = data.data.find(item => item.uf === estado);

            casosConfirmados.innerHTML = ` Casos confirmados: ${info.cases}`;
            casosDeMortes.innerHTML    = ` Mortes: ${info.deaths}`;
            casosSuspeitos.innerHTML   = ` Casos suspeitos: ${info.suspects}`;
            casosFalsos.innerHTML      = ` Falsos positivos: ${info.refuses}`;
            dataDeRequest.innerHTML    = ` Última vez atualizado: ${new Date(info.datetime).toLocaleDateString()}`;

        });

}
