if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

ready()

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('botaoApagar')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var buttonRemove = removeCartItemButtons[i]
    buttonRemove.addEventListener('click', removeCartItem)
  }

  var addCartItemButtons = document.getElementsByClassName('buyButton')
  for (var o = 0; o < addCartItemButtons.length; o++) {
    var buttonAdd = addCartItemButtons[o]
    buttonAdd.addEventListener('click', addCartItem)
  }

}

function addCartItem(event) {
  var animationCartButton = document.getElementsByClassName('cartButton')[0]
  animationCartButton.classList.add('appear')
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var itemTittle = shopItem.getElementsByClassName('text')[0].innerText
  var itemPrice = shopItem.getElementsByClassName('itemPrice')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('itemImage')[0].src
  var imagemCarrinho = shopItem.getElementsByClassName('cartAddedDiv')[0]
  var text = button.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
  text.classList.add("appear")
  timeout = setTimeout(appeartext, 200);
  function appeartext() {
    text.classList.add("appear")
  }

  timeout = setTimeout(disappeartext, 1900);
  function disappeartext() {
    text.classList.remove("appear")
  }

  timeout = setTimeout(disappeartext, 2200);
  function disappeartext() {
    text.classList.remove("appear")
  }

  imagemCarrinho.classList.add("appear")

  addItemToCart(itemTittle, itemPrice, imageSrc)
}


function remover(itemTittle) {
  var nomeItem = document.getElementsByClassName('text')
  for (var k = 0; k < nomeItem.length; k++) {
    var nomeItemtext = nomeItem[k].innerText
    if (nomeItemtext === itemTittle.innerText) {
      var removerCarrinho = nomeItem[k].parentElement.previousElementSibling.previousElementSibling
      removerCarrinho.classList.remove("appear")
    }
  }
}

function addItemToCart(itemTittle, itemPrice, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('divGeralBaixo')
  var cartItems = document.getElementsByClassName('cartMainDiv')[0]
  var cartItemNames = cartItems.getElementsByClassName('itemTitulo')

  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == itemTittle) {

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
         <h7 class="itemTitulo">${itemTittle}</h7>
       </div>
     </div>
     <div class="divDivInput">
       <div class="divInput">
         <input class="input" type="number" value="1" min="1" max="10">
       </div>
     </div>
     <div class="divItemPreço">
       <h7 class="itemPreço">${itemPrice}</h7>
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
    var itemPrice = items.getElementsByClassName("itemPreço")[0].innerText
    var itemPriceSemtext = itemPrice.replace(/[^0-9,]/gi, "")
    var itemPriceParsed = parseInt(itemPriceSemtext, 10)
    var quantidadeItems = items.getElementsByClassName('input')[0]
    var quantidade = quantidadeItems.value
    // if (quantidade < 1) {
    //   quantidade = 1
    // }
    // if (quantidade >= 10) {
    //   quantidade = 10
    // }
    valorTotal = valorTotal + (itemPriceParsed * quantidade)
  }
  var preçoEmBaixo = document.getElementsByClassName('totalPrice')[0]
  var preçoEmBaixo2 = document.getElementsByClassName('totalPrice2')[0]
  preçoEmBaixo.innerHTML = valorTotal
  preçoEmBaixo2.innerHTML = "$" + valorTotal
  if (valorTotal === 0) {
    var animationcartButton = document.getElementsByClassName('cartButton')[0]
    introLoja()
    animationcartButton.classList.remove('appear')
  }
}

var hamburguer = document.getElementById("divHamburguer");

function introCarrinho() {
  hamburguer.classList.add("remove");
  var topicosSaida = document.getElementsByClassName('topicos')[0]
  topicosSaida.classList.toggle('topicosMovimento')

  timeout = setTimeout(animation5, 800);
  function animation5() {
    var animation = document.getElementsByClassName('cartContainerDiv')[0]
    animation.classList.toggle('carrinhoMovimento')
    var animation6 = document.getElementsByClassName('cartContainerDiv')[0]
    animation6.classList.toggle('carrinhoRelative')
    var topicosFixed = document.getElementsByClassName('topicos')[0]
    topicosFixed.classList.toggle('topicosFixed')
  }

  var animationcartButton = document.getElementsByClassName('cartButton')[0]
  animationcartButton.classList.toggle('movimento')

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
    var topicosFixed2 = document.getElementsByClassName('topicos')[0]
    topicosFixed2.classList.toggle('topicosFixed')
    var animation6 = document.getElementsByClassName('cartContainerDiv')[0]
    animation6.classList.toggle('carrinhoRelative')
  }

  var animation = document.getElementsByClassName('cartContainerDiv')[0]
  animation.classList.toggle('carrinhoMovimento')
  var animationBotaoLoja1 = document.getElementsByClassName('botaoLoja')[0]
  animationBotaoLoja1.classList.toggle('movimento')

  timeout = setTimeout(delayLoja, 1800);
  function delayLoja() {
    hamburguer.classList.remove("remove");
    var animationcartButton = document.getElementsByClassName('cartButton')[0]
    animationcartButton.classList.remove('movimento')
  }
}

window.onscroll = () => {
  let headerScroll = document.getElementById("logoLoja")
  let logoScroll = document.getElementById("main-header")
  let hwhite = document.getElementById("hwhite")
  if (window.innerWidth > 600) {
    if (window.scrollY > 30) {
      headerScroll.classList.add("scroll")
      logoScroll.classList.add("scroll")
      hwhite.classList.add("scroll")
    } else {
      headerScroll.classList.remove("scroll")
      logoScroll.classList.remove("scroll")
      hwhite.classList.remove("scroll")
    }
  }
}

document.getElementById('cartButton').addEventListener('click', introCarrinho)
document.getElementById('botaoLoja').addEventListener('click', introLoja)
document.getElementById("hamburguer").addEventListener('click', hanimation)
document.getElementById("closeHamburguer").addEventListener('click', hanimation)
document.getElementById("hblack").addEventListener('click', hanimation)

function hanimation() {
  console.log("hm")
  let background = document.getElementById("hblack")
  let foreground = document.getElementById("hwhite")
  background.classList.toggle("appear")
  foreground.classList.toggle("appear")
}

