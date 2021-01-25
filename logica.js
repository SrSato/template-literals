var arrayDeFunciones= [];

for (z=0;z<10;z++){
	arrayDeFunciones.push(function (){ for(i=1;i<11;i++){console.log(i);}});
}

/*
//Esto no es exactamente recursivo porque no se llama a sí mismo, es más bien reiterativo
//pero es la mejor solución que se me ocurre.
for(n=0;n<arrayDeFunciones.length;n++){
	arrayDeFunciones[n]();
}*/

// recursivo sería algo así
function daleMambo(){
	if (arrayDeFunciones.length>0){
		arrayDeFunciones[arrayDeFunciones.length -1]();
		arrayDeFunciones.pop();
		daleMambo();
	}
}

daleMambo();