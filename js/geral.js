var formCalcula = document.getElementById('formCalcula');

new stepsForm( formCalcula, {
	onSubmit : function( form ) {
		classie.addClass( formCalcula.querySelector( '.simform-inner' ), 'hide' );
		
		var peso 	= formCalcula.querySelector('#q1').value;
		var altura	= formCalcula.querySelector('#q2').value;
		var idade 	= formCalcula.querySelector('#q3').value;
		
		var calculo = peso / (altura * altura);
		calculo = calculo.toFixed(2);
		
		var retorno;
		var retorno2 = "Ops, está na hora de rever os seus hábitos :/";
		
		/* CRIANÇA E JOVEM */
		if(idade<=20){
		
			if(calculo<18.5){
				retorno = "Baixo Peso. "+retorno2;
				
			}else if ((calculo>18.5)&&(calculo<24.9)){
				retorno = "Parabéns, você está no PESO IDEAL :)";
			
			}else if ((calculo>24.9)&&(calculo<29.9)){
				retorno = "Excesso de Peso. "+retorno2;

			}else{
				retorno = "Obesidade. "+retorno2;
			}
		
		/* ADULTO */
		}else if((idade>20)&&(idade<=65)){
			
			if(calculo<18.5){
				retorno = "Baixo Peso. "+retorno2;
				
			}else if ((calculo>18.5)&&(calculo<24.9)){
				retorno = "Parabéns, você está no PESO IDEAL :)";
			
			}else if ((calculo>24.9)&&(calculo<29.9)){
				retorno = "Pré-obesidade. "+retorno2;
			
			}else if ((calculo>29.9)&&(calculo<34.9)){
				retorno = "Obesidade, grau I. "+retorno2;
				
			}else if ((calculo>34.9)&&(calculo<39.9)){
				retorno = "Obesidade, grau II. "+retorno2;
				
			}else{
				retorno = "Obesidade mórbida. "+retorno2;
			}
		
		/* IDOSOS */
		}else if(idade>65){
			if(calculo<22){
				retorno = "Desnutrição. "+retorno2;
				
			}else if ((calculo>22)&&(calculo<23.9)){
				retorno = "Risco de desnutrição. "+retorno2;
			
			}else if ((calculo>23.9)&&(calculo<26.9)){
				retorno = "Parabéns, você está no PESO IDEAL :)";
			
			}else if ((calculo>26.9)&&(calculo<32)){
				retorno = "Pré-obsedidade. "+retorno2;

			}else{
				retorno = "Obesidade. "+retorno2;
			}
		}
		
		var resultado = formCalcula.querySelector( '#formCalcula + .resultado' );
		resultado.innerHTML = retorno;					
		classie.addClass( resultado, 'show' );
		
		var tituloPrincipal = formCalcula.querySelector( '.tituloPrincipal' );
		tituloPrincipal.innerHTML = "Seu IMC é <font>"+calculo+"</font>";
		classie.addClass( tituloPrincipal, 'resultado' );
		
		var btnTabela = formCalcula.querySelector( '.mostraTabelas' );
		classie.addClass( btnTabela, 'aparece' );
	}
});

$(function(){
	$('#q1').mask('##0.00');
	$('#q2').mask('0.00');
	$('#q3').mask('##0');
	
	$(".mostraTabelas").click(function(c){
		c.preventDefault();
		$(".posicaoTabelas").fadeIn(500);
	});
});