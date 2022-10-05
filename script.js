function verificar(){
    var data = new Date();
    var anoAtualizado = data.getFullYear();
    var ano = document.querySelector('#ano');
   var pessoa= document.getElementsByName('sexo');
    var res = document.querySelector('#resultado');
    var testeIdade = anoAtualizado - Number(ano.value);
    var genero = "";

    
  if(ano.value.length == 0 || ano.value > anoAtualizado){
    window.alert("[Error] Verifique se os Dados ")
  }else{
    if(pessoa[0].checked ){
        genero = "Homem"
    }else if(pessoa[1].checked){
        genero = "Mulher"
    }
    
    res.innerHTML = `Detectamos um Pessoa do genero ${genero} e tem ${testeIdade} anos, completado ou para completar. `
    
  }



   
   
  


   // res.innerHTML= `Sua idade é ${teste} anos`
    
}
