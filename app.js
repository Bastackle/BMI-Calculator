let weight = null
let height = null
let bmi = null;
const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    getData()
    bmi = bmiCalculation()
    showResults(bmi)
})

function getData() {
    weight = parseFloat(document.getElementById("weight").value)
    height = parseFloat(document.getElementById("height").value)
}

function bmiCalculation() {
    return weight / Math.pow((height / 100), 2)
}

function showResults(bmi) {
    var message = ""
    if (bmi == null || isNaN(bmi) || bmi <= 0 || bmi == Infinity) {
        document.getElementById("result").innerHTML = "โปรดป้อนข้อมูลให้ถูกต้อง"
        return;
    }
    else if (bmi < 18.5) {
        message = "น้ำหนักต่ำกว่าเกณฑ์"
    }
    else if (bmi >= 18.5 && bmi <= 22.9) {
        message = "สมส่วน"
    }
    else if (bmi >= 23.0 && bmi <= 24.9) {
        message = "น้ำหนักเกิน"
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
        message = "โรคอ้วน"
    }
    else {
        message = "โรคอ้วนอันตราย"
    }
    document.getElementById("result").innerHTML =
    `
        BMI = ${bmi.toFixed(2)} (${message})
    `
}
