
//Variables: 

//NAV
const boton = document.getElementById(`dark-buttom-mode`) // boton modo oscuro
const textButtom = document.getElementById('img-txt') // boton img aside
const imgButtom = document.getElementById('img-btn') // boton txt aside

// MEME
const boxSuperior = document.getElementById(`box-top-text`) // Caja Meme Texto Inferior
const boxInferior = document.getElementById(`box-botton-text`) // Caja Meme Texto Inferior
const bodyBox = document.getElementById(`body-box`) // Caja MEME Imagen de Meme
const modoClaroBody = document.getElementById(`modo-oscuro-body`) // body 

//ASIDE IMG
const inputUrl = document.getElementById(`input-url`)// Input para colocar URL de Img
const inputBrightnes = document.getElementById(`input-brightnes`)
const inputOpacity = document.getElementById(`input-opacity`)
const inputContrast = document.getElementById(`input-contrast`)
const inputBlur = document.getElementById(`input-blur`)
const inputGrayscale = document.getElementById(`input-grayscale`)
const inputSepia = document.getElementById(`input-sepia`)
const inputHue = document.getElementById(`input-hue`)
const inputSaturation = document.getElementById(`input-saturation`)
const inputNegativo = document.getElementById(`input-negativo`)
const colorSelector = document.getElementById(`color-selector`)// Span selector de color fondo meme
const inputColorPicker = document.getElementById(`input-color-picker`) // Input color a seleccionar
const asideImg = document.getElementById('aside-img') // Caja aside mg


//ASIDE TXT
const imputTopText = document.getElementById(`input-texto-aside`) // Texto Superior
const inputBottonText = document.getElementById(`bottom-text`) // Texto Inferior
const fontSelector = document.getElementById('text-font-select')
const topTextInput = document.getElementById(`sin-txt-sup`) // Input checkbox Superiro Aside Txt
const bottomTextInput = document.getElementById(`sin-txt-inf`)  // Input checkbox Inferior Aside Txt
const bottomTextBox = document.getElementById('bottom-text-box') // P del texto inferior Caja Meme
const colorInput = document.getElementById(`text-background-color-input`) // input color de fondo txt , aside txt linea 182
const textImg = document.getElementById('text-aside') // caja aside txt

//..................// ASIDE TEXTO SE CAMBIA TXT SUPERIOR E INF DEL MEME JS//..............................
// // Aside texto - Escribir en meme texto top y bottom - FUNCIONA

  imputTopText.oninput = () => {
   boxSuperior.innerHTML = `<p>${imputTopText.value}<p>`

    }

  inputBottonText.oninput = () => {
     boxInferior.innerHTML = `<p>${inputBottonText.value}<p>`

    }

// Aside texto - Input Fuentes - Texto Superior - NO FUNCIONA

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
 const hideBottomText = () =>{
   bottomTextBox.classList
 }

 topTextInput.addEventListener("change", () => hideTopText() )


//Cambiar color de top text y bottom text

 const cambioColor = (red, green, blue) =>{
  boxSuperior.style.backgroundColor = `rgb (red, green, blue)`
  boxInferior.style.backgroundColor = `rgb (red, green, blue)`
  }



//..........................ASIDE IMG ......................

// Poner URL y ver la imagen del MEME . NO FUNCIONA

 const changeBackground = (e) => {
 bodyBox.style.backgroundImage = `url(${e.target.value})`
 }

 inputUrl.addEventListener(`input`, (e)=> changeBackground(e))

 //Input Range  FUNCIONA:
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

console.log(colorSelector)
const colorSeleccionado = inputColorPicke.value
 const cambiarColorMeme = () => {
 console.log(inputColorPicker.value)
colorSelector.innerHTML = `${inputColorPicker.value}`
 }
 inputColorPicker.addEventListener(`input`, ()=> cambiarColorMeme())

//........................Modo Claro de Aside..................acacaca..................
//dark mode - clase dom


 const textAside = document.getElementById(`text-aside`)
 const imgAside = document.getElementById(`img-aside`)

 const changeMode = () => {
  textAside.classList.remove("modo-oscuro-aside")
   textAside.classList.add("modo-claro-aside")
   imgAside.classList.remove("modo-oscuro-aside")
  imgAside.classList.add("modo-claro-aside")
 }

 boton.addEventListener(`click`,()=> changeMode());


// const changeModeImg = () => {

//   imgAside.classList.remove("modo-oscuro-aside")
//   imgAside.classList.add("modo-claro-aside")
// }
// boton.addEventListener(`click`,()=> changeModeImg());

// // boton cambia texto de modo oscuro a modo claro


const changeTextButtonMode = () =>{
   if (boton.innerText === "⚪ Modo Oscuro")
   { boton.innerHTML = "⚫ Modo Claro"} else{
      boton.innerHTML = "⚪ Modo Oscuro"
    } }
boton.addEventListener(`click`,()=> changeTextButtonMode());

//<i class="fa-regular fa-lightbulb"></i>
//<i class="fa-solid fa-lightbulb"></i>

//oton cambia texto de modo oscuro a modo claro  y emogie. VER!! clase miercoles 5

  const changeTextButtonMode2 = () =>{
 if(modoClaroBody.classList.contains("boton"))
  {boton.innerText = "⚪Modo Claro"
  } else{ boton.innerText = "⚫Modo Oscuro"}
 }

 boton.addEventListener(`click`,()=> changeTextButtonMode2());

// Ocultar ASIDE ...... NO FUNCIONA .............

textButtom.addEventListener('click', () => hideTextAside)
imgButtom.addEventListener('click', () => hideImgAside)

const hideTextAside = () => {
  asideImg.classList.add('hidden')
  textImg.classList.remove('hidden')
}

const hideImgAside = () => {
  textImg.classList.add('hidden')
  asideImg.classList.remove('hidden')
}

//..........................BODY MEME ......................

 //Modo Claro Body FUNCIONA

 const cambioModoClaro = () => {
         modoClaroBody.classList.remove(`body-modo-oscuro`)
      modoClaroBody.classList.add(`body-modo-claro`)
 }

 boton.addEventListener(`click`,()=> cambioModoClaro());

// //........................NAV...............................

//Modo Claro Nav FUNCIONA/const navClaro = document.getElementById(`nav-modo-claro`)

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

