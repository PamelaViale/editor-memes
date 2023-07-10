//..................// ASIDE TEXTO JS//.................................... 

// // Aside texto - Escribir en meme texto top y bottom - FUNCIONA

 const imputTopText = document.getElementById(`input-texto-aside`) //aside imput
 const boxSuperior = document.getElementById(`box-top-text`)
 const inputBottonText = document.getElementById(`bottom-text`)
 const boxInferior = document.getElementById(`box-botton-text`)

  imputTopText.oninput = () => {
   boxSuperior.innerHTML = `<p>${imputTopText.value}<p>`

    }

  inputBottonText.oninput = () => {
     boxInferior.innerHTML = `<p>${inputBottonText.value}<p>`

    }

    // // Aside texto - Input Fuentes - Texto Superior - NO FUNCIONA

const fontSelector = document.getElementById('text-font-select')

//console.log(fontSelector.value)

const changeFontFamily = () => {
  console.log(fontSelector.value)
  boxSuperior.style.fontFamily = '${fontSelector.value}'
}


fontSelector.addEventListener('change', () => changeFontFamily())

// // Aside texto - Input Fuentes - Texto Inferior - NO FUNCIONA

const changeFontFamilytXT = () => {
  console.log(fontSelector.value)
  boxInferior.style.fontFamily = '${fontSelector.value}'
}


fontSelector.addEventListener('change', () => changeFontFamily())

// Chek-Box 

 const topTextInput = document.getElementById(`sin-txt-sup`) 
 const bottomTextInput = document.getElementById(`sin-txt-inf`) 
const bottomTextBox = document.getElementById('bottom-text-box')
 const hideBottomText = () =>{

   bottomTextBox.classList
 }

 topTextInput.addEventListener("change", () => hideTopText() )


//Cambiar color de top text y bottom text

const topText = document.getElementById(`box-top-text`)
const bottomText = document.getElementById(`box-botton-text`)
const colorInput = document.getElementById(`text-background-color-input`)

 const cambioColor = (red, green, blue) =>{
 topText.style.backgroundColor = `rgb (red, green, blue)`
  bottomText.style.backgroundColor = `rgb (red, green, blue)`
  }

//..........................ASIDE IMG ......................

// Poner URL y ver la imagen del MEME . NO FUNCIONA

 const inputUrl = document.getElementById(`input-url`)
 const bodyBox = document.getElementById(`body-box`)

 const changeBackground = (e) => {
 bodyBox.style.backgroundImage = `url(${e.target.value})`
 }

 inputUrl.addEventListener(`input`, (e)=> changeBackground(e))

 //Input Range  FUNCIONA:

 const inputBrightnes = document.getElementById(`input-brightnes`)
 const inputOpacity = document.getElementById(`input-opacity`)
 const inputContrast = document.getElementById(`input-contrast`)
 const inputBlur = document.getElementById(`input-blur`)
 const inputGrayscale = document.getElementById(`input-grayscale`)
 const inputSepia = document.getElementById(`input-sepia`)
 const inputHue = document.getElementById(`input-hue`)
 const inputSaturation = document.getElementById(`input-saturation`)
 const inputNegativo = document.getElementById(`input-negativo`)
 console.log(inputBrightnes)
 console.log(inputOpacity)
 console.log(inputContrast)
 console.log(inputBlur)
 console.log(inputGrayscale)
 console.log(inputSepia)
 console.log(inputHue)
 console.log(inputSaturation)
 console.log(inputNegativo)


const filtros = () => {
bodyBox.style.filter = (`brightness(${inputBrightnes.value}) opacity(${inputOpacity.value}) blur(${inputBlur.value}px) contrast(${inputContrast.value}%) grayscale(${inputGrayscale.value}%) hue-rotate(${inputHue.value}deg) sepia(${inputSepia.value}%) saturate(${inputSaturation.value}%) invert(${inputNegativo.value})`)
 }

inputBrightnes.addEventListener(`input`,()=> filtros())
inputOpacity.addEventListener(`input`,()=> filtros())
inputContrast.addEventListener(`input`,()=> filtros())
inputBlur.addEventListener(`input`,()=> filtros())
inputGrayscale.addEventListener(`input`,()=> filtros())
inputSepia.addEventListener(`input`,()=> filtros())
inputHue.addEventListener(`input`,()=> filtros())
inputSaturation.addEventListener(`input`,()=> filtros())
inputNegativo.addEventListener(`input`,()=> filtros())


//input de aside img colocamos selector de color FUNCIONA........................................
const colorSelector = document.getElementById(`color-selector`)
const inputColorPicker = document.getElementById(`input-color-picker`)
console.log(colorSelector)
const colorSeleccionado = inputColorPicke.value


 const cambiarColorMeme = () => {
 console.log(inputColorPicker.value)
colorSelector.innerHTML = `${inputColorPicker.value}`
 }
 inputColorPicker.addEventListener(`input`, ()=> cambiarColorMeme())

//........................Modo Claro de Aside....................................

// const textAside = document.getElementById(`text-aside`)
// const imgAside = document.getElementById(`img-aside`)

// const changeMode = () => {
//   textAside.classList.remove("modo-oscuro-aside")
//   textAside.classList.add("modo-claro-aside")
//   imgAside.classList.remove("modo-oscuro-aside")
//   imgAside.classList.add("modo-claro-aside")
// }

// boton.addEventListener(`click`,()=> changeMode());


// const changeModeImg = () => {

//   imgAside.classList.remove("modo-oscuro-aside")
//   imgAside.classList.add("modo-claro-aside")
// }
// boton.addEventListener(`click`,()=> changeModeImg());

// // boton cambia texto de modo oscuro a modo claro
//  const darkButtom = document.getElementById(`dark-buttom-mode`)

//    const changeTextButtonMode = () =>{
//   if (darkButtom.innerText === "⚪ Modo Oscur")
//    { darkButtom.innerHTML = "⚫ Modo Claro"} else{
//      darkButtom.innerHTML = "⚪ Modo Oscuro"
//    } }
//  //darkButtom.addEventListener(`click`,()=> changeTextButtonMode());

//  //<i class="fa-regular fa-lightbulb"></i>
//  //<i class="fa-solid fa-lightbulb"></i>

// //oton cambia texto de modo oscuro a modo claro  y emogie. VER!! clase miercoles 5

// //  const changeTextButtonMode = () =>{
// //  if(modoClaroBody.classList.contains("dark-buttom-mode"))
// //  {darkButtom.innerText = "⚪Modo Claro"
// //  } else{ darkButtom.innerText = "⚫Modo Oscuro"}
// //  }

// //  darkButtom.addEventListener(`click`,()=> changeTextButtonMode());

//..........................BODY MEME ......................

 //Modo Claro Body FUNCIONA

 const modoClaroBody = document.getElementById(`modo-oscuro-body`)
 const boton = document.getElementById(`dark-buttom-mode`)

 const cambioModoClaro = () => {
         modoClaroBody.classList.remove(`body-modo-oscuro`)
      modoClaroBody.classList.add(`body-modo-claro`)
 }

 boton.addEventListener(`click`,()=> cambioModoClaro());

// //........................NAV...............................

//Modo Claro Nav FUNCIONA/const navClaro = document.getElementById(`nav-modo-claro`)

 const botonNav = document.getElementById(`dark-buttom-mode`)

 const cambioNavClaro = () => {
  navClaro.classList.remove(`modo-oscuro-nav`)
  navClaro.classList.add(`modo-claro-nav`)
 }

// //.oninput

boton.addEventListener(`click`,()=> cambioNavClaro());


//  // Descarga de meme ver [ultima clase 5 julio]


// //y la funcion de descarga con las variables que YO declare, lo van a tener que modificar para que coincida con su codigo

//  const downloadButton = document.getElementById("download-bottom");
//  const meme = document.getElementById("main-box");

//  downloadButton.addEventListener("click", () => downloadMeme());

//  const downloadMeme = () => {
//    domtoimage.toBlob(meme).then(function (blob) {
//      window.saveAs(blob, "mi-meme.png");
//    });
//  };


// Boton de descarga :  download-bottom

