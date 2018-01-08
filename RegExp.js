function validarFormatNumeric(textComprovar, numXifres){
	if(!numXifres){
		numXifres=4;
	}
	var expressioRegular = "^[0-9]{"+numXifres+"}\\b";
	return (new RegExp(expressioRegular)).test(textComprovar);

}
