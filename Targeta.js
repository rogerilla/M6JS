
//Calcular Digit de control
function calcularDigitControl(codiEntitat, codiSucursal, numeroCompte){
		if (!validarFormatNumeric(codiEntitat)){
		alert("El codi d'entitat te de tenir 4 xifres");
		return 0;
	}
		if (!validarFormatNumeric(codiSucursal)){
		alert("El codi de sucursal te de tenir 4 xifres");
		return 0;
	}
		if (!validarFormatNumeric(numeroCompte, 10)){
		alert("Numero de compte invalid");
		return 0;
	}
	var DC = (entitatsucursal(codiEntitat, codiSucursal) + DCcompte(numeroCompte));
	console.log("El digit de control és: " + DC );
	return DC;

}		//ENTITAT SUCURSAL
	function entitatsucursal(codiEntitat, codiSucursal){
			//Després els multipliquem per el numero que sigui
			//Finalment sumem tots els numeros i els dividim entre 11
			// Aqui transformem el codiEntitat en un String i després el posem a una array i 
			//A continuació els sumem;
		    var sortida = [];
		    var StringEntitatSucursal = "00"+ codiEntitat+codiSucursal;

		for (var i = 0; i <  StringEntitatSucursal.length; i++) {

			//Posant el "+", farem que tornin a ser numeros normals i corrents i així podent sumar-los
		    sortida.push(+StringEntitatSucursal[i]);
		}

			var total = sumatotal(sortida);
			var Stotal = total.toString();
			return Stotal;			
			console.log("Digit de control del entitatsucursal" + total);
	}	
		//NUMERO DE COMPTE
	function DCcompte (numeroCompte){
		var sortida = [];
		for (var i = 0; i <  numeroCompte.length; i ++) {

			//Posant el "+", farem que tornin a ser numeros normals i corrents i així podent sumar-los
		    sortida.push(+numeroCompte[i]);
		}
		var total = sumatotal(sortida);
		var Stotal = total.toString();
		console.log("Digit de control del numero de compte" + total);
		return Stotal;
	
	}
	function sumatotal (numero){
		var resultatfin = 0;
		var multiplicacio = 0; 
		for (var i = 0; i < numero.length; i++) {
			var inici = Math.pow(2,i)%11;
			multiplicacio += (numero[i] * inici);
			}
			
			resultatfin = multiplicacio%11;
			return resultatfin;
		}
function calcularIban (codiEntitat, codiAgencia, digitControl, numeroCompte) {
		if (!validarFormatNumeric(codiEntitat)){
				alert("El codi d'entitat te de tenir 4 xifres");
		return 0;
	}
		if (!validarFormatNumeric(codiAgencia)){
			alert("El codi d'agencia te de tenir 4 xifres");
		return 0;
	}
		if (!validarFormatNumeric(digitControl, 2)){
		alert("El digit de control te de tenir 2 xifres");
		return 0;

	}
		if (!validarFormatNumeric(numeroCompte, 10)){
		alert("Numero de compte equivocat");
		return 0;

	}

		var iban = codiEntitat + codiAgencia + digitControl + numeroCompte + "142800";
		console.log(iban);
		return iban;

	//El que sigui

	//Les funcions internes aniuades que necesito
	//return iban 'ES' + els nuemros que siguin,

}
validarTargeta(calcularIban("0345", "0789", calcularDigitControl("0345", "0789", "1234567890"), "1234567890"));

function validarTargeta (codiTargeta){
	if (!validarFormatNumeric(codiTargeta, 26)){
		alert("Targeta invalida");
		
		return 0;
	}

	//return true/false;
}
