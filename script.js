console.log("Conectado")

const convertButton = document.querySelector("button")

function convertValues(){

    const inputCurrencyValue = document.querySelector("input").value
    console.log(`O valor digitado é ${inputCurrencyValue}`)

    const dolarToday = 5
    console.log(`O valor do dólar hoje é ${dolarToday}`)

    const dolarConversion = inputCurrencyValue / dolarToday
    console.log(`O valor da conversão é ${dolarConversion}`)



    const currencyValueToConvert = document.querySelector("#conversion-value") // Valor em Real
    const currencyValueConverted = document.querySelector("#converted-value") // Outras moedas

    // Substituindo o valor da conversão //

    currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BLR"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerText = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD"
    }).format(dolarConversion)

}

convertButton.addEventListener("click", convertValues)