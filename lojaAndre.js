if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

ready()

readyDois()

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('botaoApagar')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var buttonRemove = removeCartItemButtons[i]
    buttonRemove.addEventListener('click', removeCartItem)
  }





}

function readyDois() {
  var addCartItemButtons = document.getElementsByClassName('botaoCompra')
  for (var o = 0; o < addCartItemButtons.length; o++) {
    var buttonAdd = addCartItemButtons[o]
    buttonAdd.addEventListener('click', addCartItem)

  }
}


function addCartItem(event) {
  var animationBotaoCarrinho = document.getElementsByClassName('botaoCarrinho')[0]
  animationBotaoCarrinho.classList.add('aparecer')





  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('texto')[0].innerText
  var price = shopItem.getElementsByClassName('preçoItem')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('imagens')[0].src
  var imagemCarrinho = button.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
  var texto = button.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling


  timeout = setTimeout(aparecer, 000)

  function aparecer() {
    texto.classList.add("aparecer")

  }



  timeout = setTimeout(tudo, 000)

  function tudo() {


    timeout = setTimeout(desaparecerTexto, 2200);
    function desaparecerTexto() {
      texto.classList.remove("aparecer")
    }

    timeout = setTimeout(surgirTexto, 200);
    function surgirTexto() {
      texto.classList.add("surgir")
    }

    timeout = setTimeout(desurgirTexto, 1900);
    function desurgirTexto() {
      texto.classList.remove("surgir")
    }

    imagemCarrinho.classList.add("aparecer")



  }


  addItemToCart(title, price, imageSrc)
}


function remover(title) {
  var nomeItem = document.getElementsByClassName('texto')
  for (var k = 0; k < nomeItem.length; k++) {
    var nomeItemTexto = nomeItem[k].innerText
    if (nomeItemTexto === title.innerText) {
      var removerCarrinho = nomeItem[k].parentElement.previousElementSibling.previousElementSibling
      removerCarrinho.classList.remove("aparecer")
    }
  }
}



function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('divGeralBaixo')
  var cartItems = document.getElementsByClassName('carrinhoPrincipal')[0]
  var cartItemNames = cartItems.getElementsByClassName('itemTitulo')

  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {

      return
    }
  }
  var cartRowContents =
    `<div class="divOpacidade">
   <div class="divDivFotoItemCarrinho">
     <div class="divFotoItemCarrinho">
       <img
         src="${imageSrc}"
         class="fotoItemCarrinho">
     </div>
   </div>
   <div class="itensLaterais">
     <div class="divDivItemTitulo">
       <div class="divItemTitulo">
         <h7 class="itemTitulo">${title}</h7>
       </div>
     </div>
     <div class="divDivInput">
       <div class="divInput">
         <input class="input" type="number" value="1" min="1" max="10">
       </div>
     </div>
     <div class="divItemPreço">
       <h7 class="itemPreço">${price}</h7>
     </div>
   </div>
   <div class="divItemInput">
        <svg class="botaoApagar" id="botaoApagar" data-btndanger width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7L1.27 1.27 7 7l5.73-5.73L7 7zm0 0l5.73 5.73L7 7l-5.73 5.73L7 7z" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square" class="path"></path></svg>
   </div>
 </div>   
      `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  change()
  cartRow.getElementsByClassName('botaoApagar')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('input')[0].addEventListener('change', change)
}






function removeCartItem(event) {
  var buttonClicked = event.target
  var divGeralBaixo = buttonClicked.parentElement.parentElement.parentElement
  divGeralBaixo.classList.add("animating")
  var divOpacidade = buttonClicked.parentElement.parentElement
  divOpacidade.classList.add("animating")

  timeout = setTimeout(altura, 0)


  function altura() {
  }
  var titulo = buttonClicked.parentElement.previousElementSibling.firstElementChild.firstElementChild.firstElementChild
  console.log(titulo)
  remover(titulo)
  timeout = setTimeout(alertFunc, 1300);
  function alertFunc(event) {
    buttonClicked.parentElement.parentElement.parentElement.remove()
    change()
  }
}





function change(event) {
  var divGeralBaixo = document.getElementsByClassName('divGeralBaixo')
  var valorTotal = 0
  for (var x = 0; x < divGeralBaixo.length; x++) {
    var items = divGeralBaixo[x]
    var preçoItem = items.getElementsByClassName("itemPreço")[0].innerText
    var preçoItemSemTexto = preçoItem.replace(/[^0-9,]/gi, "")
    var preçoItemParsed = parseInt(preçoItemSemTexto, 10)
    var quantidadeItems = items.getElementsByClassName('input')[0]
    var quantidade = quantidadeItems.value
    if (quantidade < 1) {
      quantidade = 1
    }
    if (quantidade >= 10) {
      quantidade = 10
    }
    valorTotal = valorTotal + (preçoItemParsed * quantidade)
  }
  var preçoEmBaixo = document.getElementsByClassName('preçoTotal')[0]
  var preçoEmBaixo2 = document.getElementsByClassName('preçoTotal2')[0]
  preçoEmBaixo.innerHTML = valorTotal
  preçoEmBaixo2.innerHTML = valorTotal
  if (valorTotal === 0) {
    var animationBotaoCarrinho = document.getElementsByClassName('botaoCarrinho')[0]
    introLoja()
    animationBotaoCarrinho.classList.remove('aparecer')
  }
}




var botaoCarrinho = document.getElementById('botaoCarrinho')
botaoCarrinho.addEventListener('click', introCarrinho)

var botaoLoja = document.getElementById('botaoLoja')
botaoLoja.addEventListener('click', introLoja)



function introCarrinho() {


  timeout = setTimeout(animation4, 0);
  function animation4() {
    var topicosSaida = document.getElementsByClassName('topicos')[0]
    topicosSaida.classList.toggle('topicosMovimento')
  }

  timeout = setTimeout(animation3, 800);
  function animation3() {
    var topicosFixed = document.getElementsByClassName('topicos')[0]
    topicosFixed.classList.toggle('topicosFixed')
  }


  timeout = setTimeout(animation5, 800);
  function animation5() {
    var animation = document.getElementsByClassName('carrinhoAnim')[0]
    animation.classList.toggle('carrinhoMovimento')
    var animation6 = document.getElementsByClassName('carrinhoAnim')[0]
    animation6.classList.toggle('carrinhoRelative')
  }
  var animationBotaoCarrinho = document.getElementsByClassName('botaoCarrinho')[0]
  animationBotaoCarrinho.classList.toggle('movimento')

  timeout = setTimeout(delayCarrinho, 1800);
  function delayCarrinho() {
    var animationBotaoLoja1 = document.getElementsByClassName('botaoLoja')[0]
    animationBotaoLoja1.classList.toggle('movimento')
  }


}


function introLoja() {
  timeout = setTimeout(animation4, 900);
  function animation4() {
    var topicosEntrada = document.getElementsByClassName('topicos')[0]
    topicosEntrada.classList.toggle('topicosMovimento')
  }
  timeout = setTimeout(animation3, 900);
  function animation3() {
    var topicosFixed2 = document.getElementsByClassName('topicos')[0]
    topicosFixed2.classList.toggle('topicosFixed')
    var animation6 = document.getElementsByClassName('carrinhoAnim')[0]
    animation6.classList.toggle('carrinhoRelative')
  }
  timeout = setTimeout(animation5, 0);
  function animation5() {
    var animation = document.getElementsByClassName('carrinhoAnim')[0]
    animation.classList.toggle('carrinhoMovimento')
  }

  var animationBotaoLoja1 = document.getElementsByClassName('botaoLoja')[0]
  animationBotaoLoja1.classList.toggle('movimento')


  timeout = setTimeout(delayLoja, 1800);
  function delayLoja() {
    var animationBotaoCarrinho = document.getElementsByClassName('botaoCarrinho')[0]
    animationBotaoCarrinho.classList.remove('movimento')
  }








}





window.onscroll = () => {
  var nav = document.getElementById("nomeLoja")
  var nav2 = document.getElementById("main-header")
  var nav3 = document.getElementById("botaoCarrinho")
  var nav4 = document.getElementById("botaoLoja")
  if (window.innerWidth > 600) {
    if (window.scrollY > 30) {
      nav.classList.add("scroll")
      nav2.classList.add("scroll")
      nav3.classList.add("scroll")
      nav4.classList.add("scroll")
    }
    if (window.scrollY < 29) {
      nav.classList.remove("scroll")
      nav2.classList.remove("scroll")
      nav3.classList.remove("scroll")
      nav4.classList.remove("scroll")
    }
  }
}



paypal.Buttons({
  createOrder: function(data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '0.01'
        }
      }]
    });
  }
}).render('#paypal');