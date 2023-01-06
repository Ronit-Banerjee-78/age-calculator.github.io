function calculate() {
    let dob = (document.getElementById("dob").value);


    var result = caldate - dob;

    console.log(result);

}
let generate = document.getElementById("generate");

generate.addEventListener('click', () => {
    calculate();
})