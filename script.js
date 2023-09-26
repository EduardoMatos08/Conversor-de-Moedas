console.log("Conectado")

// Variáveis dos Itens da Página //

const button = document.querySelector("button")
const select = document.querySelector("#select-converted")

// Conversões - Função //

function convertValues(){

    // Conversões //

    const inputCurrencyValue = document.querySelector("input").value

    const dolarToday = 4.98
    const dolarConversion = inputCurrencyValue / dolarToday

    const euroToday = 5.26
    const euroConversion = inputCurrencyValue / euroToday

    const libraToday = 6.05
    const libraConversion = inputCurrencyValue / libraToday

    const bitcoinToday = 130305.56
    const bitcoinConversion = inputCurrencyValue / bitcoinToday

    // Variáveis - Alterando Texto //

    const currencyValueToConvert = document.querySelector("#conversion-value") // Valor em Real
    const currencyValueConverted = document.querySelector("#converted-value") // Outras moedas

    // Substituíndo o valor da conversão em reais //

    currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BLR"
    }).format(inputCurrencyValue)

    // Condições - Alterando o Texto//

    if(select.value == "dolar"){
        currencyValueConverted.innerText = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(dolarConversion)
    }

    if(select.value == "euro"){
        currencyValueConverted.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(euroConversion)
    }

    if(select.value == "libra"){
        currencyValueConverted.innerText = new Intl.NumberFormat("en-UK", {
            style: "currency", currency: "GBP"
        }).format(libraConversion)
    }

    if(select.value == "bitcoin"){
        currencyValueConverted.innerText = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format(bitcoinConversion)
    }

}



// Mudando Texto e Imagens - Função //

function changingImagesAndText(){

    // Variáveis - Imagem e Textos //

    const flagImage = document.querySelector("#converted-img")

    const currencyName = document.getElementById("currency-name")
    const currencyPreview = document.getElementById("converted-value")

    // Condições - Alterando Imagens e Textos //

    // Conversão Americana
    if(select.value == "dolar"){
        flagImage.src = "./assets/convert-usa.png"
        currencyName.innerHTML = "Dólar Americano"
        currencyPreview.innerHTML = "$ 0,00"
    }

    // Conversão Européia
    if(select.value == "euro"){
        flagImage.src = "./assets/convert-eu.png"
        currencyName.innerHTML = "Euro"
        currencyPreview.innerHTML = "0,00 €"
    }

    // Conversão Inglesa
    if(select.value == "libra"){
        flagImage.src = "./assets/convert-lb.png"
        currencyName.innerHTML = "Libra"
        currencyPreview.innerHTML = "0,00 £"
    }

    // Conversão para Bitcoin
    if(select.value == "bitcoin"){
        flagImage.src = "./assets/convert-btc.png"
        currencyName.innerHTML = "Bitcoin"
        currencyPreview.innerHTML = "₿ 0,00"
    }
}

select.addEventListener("change", changingImagesAndText)
button.addEventListener("click", convertValues)