$(document).ready(function(){ 
	$('.particula').bind('mouseenter mouseleave',function(){
		console.log('estoy');
				$(this).attr({
					'src': $(this).attr('data-image'),
					'data-image':$(this).attr('src')
							});	//cierra this*/
				});


	$('#botonEjercicios').on('click',function(){
		var valUserEjercicios= $('.respuestaSola:checked').map(function(){return $(this).val();}).get();
		console.log(valUserEjercicios);//ME DEVUELVE LOS FALSE/TRUE <3 
		validarRadios(valUserEjercicios);
	})//boton ejercicios

	$('#botonKSonidoImpuro').on('click',function(){
		var valUserSonidoImpuro= $('.preguntaSonIm').map(function(){return $(this).val();}).get();
		console.log(valUserSonidoImpuro);
		validarInputs(valUserSonidoImpuro,'#respuesta');
	})//boton sonido impuro

	$('#botonKSonidoDiptongal').on('click',function(){
		var valUserSonidoDip=$('.preguntaSonDip').map(function(){return $(this).val();}).get();
		console.log(valUserSonidoDip);
		validarInputs(valUserSonidoDip,'#pregunta');
	})//boton sonido diptongonal








});//termina document ready
function validarInputs(arr,string){
	var respuesta=false;
	for (i=0;i<arr.length;i++){
		console.log($(string+i).data('respuesta'));
		if (arr[i]==$(string+i).data('respuesta')){
			console.log($(string+i));
			console.log('hola');
			respuesta = true;
		}else{
			console.log($(string+i));
			console.log('bye');
			respuesta = false;
		}
		if (respuesta == true){
			$(string+i).css('color','green');
		}else{$(string+i).css('color','red');}
	}
}//function validarInputs

function validarRadios(arr){
	for(i=0;i<arr.length;i++){
		var respuesta=false;
		if (arr[i]== true){
			respuesta==true;
			console.log(true);
			return true;			
		}else{
			respuesta==false;
			console.log(false);
			return false;
		}
		if(respuesta == true){
			console.log($('#'+i));
			$('#'+i).css('border-color','green'); 
		}else{ $('#'+i).css('border-color','red'); }
	}
}