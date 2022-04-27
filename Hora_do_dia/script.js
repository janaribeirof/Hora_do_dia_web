function carregar() {
   let msg = window.document.getElementById('msg')
   let img = window.document.getElementById('imagem') 
   let data = new Date ()
   let hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >=0 && hora < 12) {
       //Bom dia! #FDE58B
       img.src = '/img/manha.png'
       document.body.style.background = "#FDE58B"
   } else if (hora >=12 && hora < 18) {
       //Boa tarde!
       img.src = '/img/tarde.png'
       document.body.style.background = "#e9c8a7"
   } else {
       //Boa noite!
       img.src = '/img/noite.png'
       document.body.style.background = "#3f403f"
   }

}
