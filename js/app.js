window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
        var segundos = parseInt(document.getElementById("segundos").value);
        var numeroInicial = parseInt(document.getElementById("numeroInicial").value);
        intervalo (numeroInicial, segundos);
    });

        function intervalo (numeroInicial, segundos){
        	setInterval(function(){
        	document.getElementById("resultado").innerHTML = numeroInicial++; }, segundos*1000);
        	document.getElementById("segundos").value = "";
			document.getElementById("numeroInicial").value = "";
        }
});