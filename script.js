function verificar(){
    var data = new Date();
    var anoAtualizado = data.getFullYear();
    var ano = document.querySelector('#ano');
    var pessoa= document.getElementsByName('sexo');
    var res = document.querySelector('#resultado');
    var idade = anoAtualizado - Number(ano.value);
    var genero = "";
    var img = document.createElement('img');
    img.setAttribute('id', 'foto')


    
  if(ano.value.length == 0 || ano.value > anoAtualizado){
    window.alert("[Error] Verifique se os Dados ")
  }else{
    if(pessoa[0].checked ){
        genero = "Masculino"

        if(idade <= 10 && idade >=0){
          img.setAttribute('src','image/foto-homem10.png');
        }else if(idade <21){
          img.setAttribute('src','image/foto-jovem-15.png');
        }else if(idade <35){
          img.setAttribute('src', 'image/foto-homem-30.png');
        }else if(idade <=55){
          img.setAttribute('src','image/foto-homem45.png');
        }else{
          img.setAttribute('src','image/foto-homem-60.png');
        } 
      
    }else if(pessoa[1].checked){
        genero = "Feminino"

        if(idade<=10 && idade >=0){
          img.setAttribute('src','image/foto-mulher10.png');
        }else if(idade <21){
          img.setAttribute('src','image/foto-mulher20.png');
        }else if(idade <35){
          img.setAttribute('src','image/foto-mulher30.png');
        }else if(idade <=45){
          img.setAttribute('src','image/foto-mulher40.png');
        }else if(idade <60){
          img.setAttribute('src','image/foto-mulher50.png');
        }else{
          img.setAttribute('src','image/foto-mulher60.png');
        }
    }
    
    
    res.innerHTML = `<h3 style=margin:45px>Detectamos um Pessoa do genero ${genero} e tem ${idade} anos.</h3> `;
    res.appendChild(img);
    img.style.marginLeft="100px";
    
  };

    
};
