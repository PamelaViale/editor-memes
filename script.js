
//Variables: 
const imgBtn = document.getElementById('img-btn')
const imgTxt = document.getElementById('img-txt')
const darkModeBtn = document.getElementById('dark-buttom-mode')
const body = document.getElementById('modo-oscuro-body')
const nav = document.getElementById('nav-modo-claro')
const boxContainer = document.getElementById('box-container')
const bodyBox = document.getElementById('body-box')
const downloadBtn = document.getElementById('download-bottom')
const asideImg = document.getElementById('aside-img')
const imgAside = document.getElementById('img-aside')
const closeAsideBtn = document.getElementById('buttomx')
const inputUrl = document.getElementById('input-url')
const inputColorPicker = document.getElementById('input-color-picker')
const selectBlendMode = document.getElementById('select-blend-mode')
const inputBrightness = document.getElementById('input-brightnes')
const inputOpacity = document.getElementById('input-opacity')
const inputContrast = document.getElementById('input-contrast')
const inputBlur = document.getElementById('input-blur')
const inputGrayscale = document.getElementById('input-grayscale')
const inputSepia = document.getElementById('input-sepia')
const inputHue = document.getElementById('input-hue')
const inputSaturation = document.getElementById('input-saturation')
const inputNegative = document.getElementById('input-negativo')
const resetFiltersBtn = document.getElementById('reset-filters')
const asideText = document.getElementById('text-aside')
const inputTextTop = document.getElementById('input-texto-aside')
const inputTextBottom = document.getElementById('bottom-text')
const checkboxNoTextTop = document.getElementById('sin-txt-sup')
const checkboxNoTextBottom = document.getElementById('sin-txt-inf')
const selectFontFamily = document.getElementById('text-font-select')
const fontSizeInput = document.getElementById('font-size-text')
const textAlignLeftBtn = document.getElementById('text-left-align-button')
const textAlignCenterBtn = document.getElementById('text-center-align-button')
const textAlignRightBtn = document.getElementById('text-right-align-button')
const textColorInput = document.getElementById('text-color-input')
const textBackgroundBtn = document.getElementById('text-background-color-input')
const transparentBgCheckbox = document.getElementById('text-no-background-checkbox')
const noOutlineBtn = document.getElementById('no-outline-button')
const lightOutlineBtn = document.getElementById('light-outline-button')
const darkOutlineBtn = document.getElementById('dark-outline-button')
const spacingInput = document.getElementById('spacing-box-input')
const lineHeightInput = document.getElementById('line-height-input')
const boxSuperior = document.getElementById('box-top-text')
const boxInferior = document.getElementById('box-botton-text')
const memeImage = document.getElementById('meme-image')
const inputMode = document.getElementById('input-mode')


// ASIDE DE TEXTO:  
//- ALTERNO CON ASIDE DE IMG -

imgBtn.addEventListener('click', () => {
  imgAside.classList.remove('hidden')
  asideText.classList.add('hidden')
})

imgTxt.addEventListener('click', () => {
  imgAside.classList.add('hidden')
  asideText.classList.remove('hidden')
})

// Modo Claro y Modo Oscuro. Funciona pero No me toma el aside de img

darkModeBtn.addEventListener('click', () => {
  if (darkModeBtn.textContent === '⚪ Modo Oscuro') {
    darkModeBtn.textContent = '☀️ Modo Claro'
    body.classList.remove('body-modo-oscuro')
    body.classList.add('body-modo-claro')
    nav.classList.remove('modo-oscuro-nav')
    nav.classList.add('modo-claro-nav')
    asideImg.classList.remove('modo-oscuro-aside')
    asideImg.classList.add('modo-claro-aside')
    asideText.classList.remove('modo-oscuro-aside')
    asideText.classList.add('modo-claro-aside')
    
  } else {
    darkModeBtn.textContent = '⚪ Modo Oscuro'
    body.classList.remove('body-modo-claro')
    body.classList.add('body-modo-oscuro')
    nav.classList.remove('modo-claro-nav')
    nav.classList.add('modo-oscuro-nav')
    asideImg.classList.remove('modo-claro-aside')
    asideImg.classList.add('modo-oscuro-aside')
    asideText.classList.remove('modo-claro-aside')
    asideText.classList.add('modo-oscuro-aside')
    
  }
})





// Cambio texto de meme, desde Aside Texto:

inputTextTop.oninput = () => {
  boxSuperior.innerHTML = `<p>${inputTextTop.value}</p>`
}

inputTextBottom.oninput = () => {
  boxInferior.innerHTML = `<p>${inputTextBottom.value}</p>`
}

//Cambio de fuente de texto meme

selectFontFamily.addEventListener('change', () => {
  const selectedFont = selectFontFamily.value
  boxSuperior.style.fontFamily = selectedFont
  boxInferior.style.fontFamily = selectedFont
})

//Checkbox aside de texto, funciona pero no el que oculta ambos

checkboxNoTextTop.addEventListener('change', () => {
  if (checkboxNoTextTop.checked) {
    boxSuperior.style.display = 'none'
  } else {
    boxSuperior.style.display = 'block'
  }
});

checkboxNoTextBottom.addEventListener('change', () => {
  if (checkboxNoTextBottom.checked) {
    boxInferior.style.display = 'none'
  } else {
    boxInferior.style.display = 'block'
  }
});

transparentBgCheckbox.addEventListener('change', () => {
  if (transparentBgCheckbox.checked) {
    boxContainer.style.background = 'transparent'
  } else {
    boxContainer.style.background = ''
  }
})

//Tamaño de fuente aside texto


fontSizeInput.addEventListener('input', () => {
  const fontSize = fontSizeInput.value + 'px'
  boxSuperior.style.fontSize = fontSize
  boxInferior.style.fontSize = fontSize
})

// Alinear texto desde el aside texto 

textAlignLeftBtn.addEventListener('click', () => {
  boxSuperior.style.textAlign = 'left'
  boxInferior.style.textAlign = 'left'
})

textAlignCenterBtn.addEventListener('click', () => {
  boxSuperior.style.textAlign = 'center'
  boxInferior.style.textAlign = 'center'
})

textAlignRightBtn.addEventListener('click', () => {
  boxSuperior.style.textAlign = 'right'
  boxInferior.style.textAlign = 'right'
})


//Cambior color texto, input color.


textColorInput.addEventListener('input', () => {
  const color = textColorInput.value
  boxSuperior.style.color = color
  boxInferior.style.color = color
})


//Cambiar color fondo de texto

textBackgroundBtn.addEventListener('input', () => {
  const color = textBackgroundBtn.value
  boxSuperior.style.backgroundColor = color
  boxInferior.style.backgroundColor = color
})

//Contorno

noOutlineBtn.addEventListener('click', () => {
  boxSuperior.style.textShadow = 'none'
})

lightOutlineBtn.addEventListener('click', () => {
  boxSuperior.style.textShadow = '1px 1px 2px rgba(255, 255, 255, 0.5)'
})

darkOutlineBtn.addEventListener('click', () => {
  boxSuperior.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)'
})


//Espaciado. funciona raro !

spacingInput.addEventListener('input', () => {
  const spacingValue = spacingInput.value;
  boxSuperior.style.height = `${spacingValue}px`
  boxInferior.style.height = `${spacingValue}px`
  memeImage.style.height = `calc(100% - ${spacingValue}px)`
})

// interlineado seleccionar



//ASIDE IMAGEN

//URL 

inputUrl.addEventListener('input', () => {
  const imageUrl = inputUrl.value
  bodyBox.style.backgroundImage = `url(${imageUrl})`
})

// Cambio color fondo div del meme

inputColorPicker.addEventListener('input', () => {
  const color = inputColorPicker.value
  bodyBox.style.backgroundColor = color
})

selectBlendMode.addEventListener('change', () => {
  const blendModeValue = selectBlendMode.value;
  bodyBox.style.backgroundBlendMode = blendModeValue;
});

//Input filtros aside img

inputBrightness.addEventListener('change', () => {
  const brightnessValue = inputBrightness.value
  bodyBox.style.filter = `brightness(${brightnessValue})`
})

inputOpacity.addEventListener('change', () => {
  const opacityValue = inputOpacity.value;
  bodyBox.style.filter = `opacity(${opacityValue})`
})

inputContrast.addEventListener('change', () => {
  const contrastValue = inputContrast.value;
  bodyBox.style.filter = `contrast(${contrastValue})`
})

inputBlur.addEventListener('change', () => {
  const blurValue = inputBlur.value
  bodyBox.style.filter = `blur(${blurValue}px)`
})

inputGrayscale.addEventListener('change', () => {
  const grayscaleValue = inputGrayscale.checked ? '100%' : '0%'
  bodyBox.style.filter = `grayscale(${grayscaleValue})`
})

inputSepia.addEventListener('change', () => {
  const sepiaValue = inputSepia.checked ? '100%' : '0%';
  bodyBox.style.filter = `sepia(${sepiaValue})`
})

inputHue.addEventListener('change', () => {
  const hueValue = inputHue.value;
  bodyBox.style.filter = `hue-rotate(${hueValue}deg)`
})

inputSaturation.addEventListener('change', () => {
  const saturationValue = inputSaturation.value;
  bodyBox.style.filter = `saturate(${saturationValue})`
})

inputNegative.addEventListener('change', () => {
  const negativeValue = inputNegative.checked ? '100%' : '0%'
  bodyBox.style.filter = `invert(${negativeValue})`
})


//Restablecer filtros al valor inicial. 

resetFiltersBtn.addEventListener('click', () => {
  inputBrightness.value = '1'
  inputOpacity.value = '1'
  inputContrast.value = '100'
  inputBlur.value = '0'
  inputGrayscale.checked = false
  inputSepia.checked = false
  inputHue.value = '0'
  inputSaturation.value = '100'
  inputNegative.checked = false

  
  bodyBox.style.filter = 'none'
})

//Boton de descarga No funciona
const descargarMeme = () => {
  domtoimage.toBlob(boxContainer).then(function (blob) {
      window.saveAs(blob,"mi-meme.png")
    })
}
downloadBtn.addEventListener  ("click", () => descargarMeme())







