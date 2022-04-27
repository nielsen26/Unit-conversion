function length(input) {
    result = document.getElementById("length").getElementsByClassName("result")
    let feet = (input * 3.281).toFixed(3)
    let meter = (input / 3.281).toFixed(3)

    result[0].textContent = input + " meters = " + feet + " feet | "
        + input + " feet = " + meter + " meters"
}

function volume(input) {
    result = document.getElementById("volume").getElementsByClassName("result")
    let gal = (input / 3.785).toFixed(3)
    let lit = (input * 3.785).toFixed(3)

    result[0].textContent = input + " liters = " + gal + " gallons | "
        + input + " gallons = " + lit + " liters"
}

function mass(input) {
    result = document.getElementById("mass").getElementsByClassName("result")
    let kg = (input / 2.205).toFixed(3)
    let lb = (input * 2.205).toFixed(3)

    result[0].textContent = input + " kilos = " + lb + " pounds | "
        + input + " pounds = " + kg + " kilos"
}

function calculate() {
    let input = parseFloat(document.getElementById("inputnum").value)
    if (isNaN(input)) {
        input = 0
    }
    length(input)
    volume(input)
    mass(input)
}