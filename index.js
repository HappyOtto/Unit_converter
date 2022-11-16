/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} m = ${(baseValue * meterToFeet).toFixed(3)} ft | ${baseValue} ft = ${(baseValue * 1 / meterToFeet).toFixed(3)} m`
    
    volumeEl.textContent = `${baseValue} l = ${(baseValue * literToGallon).toFixed(3)} gal | ${baseValue} gal = ${(baseValue * 1 / literToGallon).toFixed(3)} l`
     
    massEl.textContent = `${baseValue} kg = ${(baseValue * kiloToPound).toFixed(3)} lbs | ${baseValue} lbs = ${(baseValue * 1 / kiloToPound).toFixed(3)} kg` 
})