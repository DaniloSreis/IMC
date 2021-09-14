const div = document.querySelector('.imc-usuario')
const alturaUsuario = document.querySelector('.altura')
const pesoUsuario = document.querySelector('.peso')
const button = document.querySelector('button')

function calcularImc() {
  let valorAltura = alturaUsuario.value
  let valorPeso = pesoUsuario.value
  let calculo = valorPeso / (valorAltura * valorAltura)
  return calculo.toFixed(2)
}

function situcao() {
  if (alturaUsuario.value === '') {
    div.innerHTML = `digite sua altura e peso`
  } else if (calcularImc() < 17) {
    div.innerHTML = 'Você está muito abaixo do seu peso'
  } else if (calcularImc() == 17 || calcularImc() == 18.49) {
    div.innerHTML = `${calcularImc} Você está abaixo do seu peso`
  } else if (calcularImc() == 18.5 || calcularImc() <= 24.99) {
    div.innerHTML = `${calcularImc()} Você está no seu pesso ideal`
  } else if (calcularImc() == 25 || calcularImc() <= 29.99) {
    div.innerHTML = `${calcularImc()}Você está acima do seu peso`
  } else if (calcularImc() == 30 || calcularImc() <= 34.99) {
    div.innerHTML = `${calcularImc()} Você está com obesidade 1`
  } else if (calcularImc() == 35 || calcularImc() <= 39.99) {
    div.innerHTML = `${calcularImc()} obesida 2 (SEVERA)`
  } else {
    div.innerHTML = `${calcularImc()} Obesidade 3 (mórbida)`
  }
}

button.addEventListener('click', calcularImc)
button.addEventListener('click', situcao)
