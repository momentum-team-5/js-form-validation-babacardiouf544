console.log('Add validation!');

const total = document.querySelector("#total")

const form = document.querySelector("#parking-form")
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let cost = price();
    total.innerHTML = '$' + cost;
})


//make all field required 
//car year must be numbers
//car year must be after 1900
//number of days must be number

//number of days must be between 1 & 30
const numberOfDays = document.querrySelector(#days)
if ((daysInput.value > 1) && (daysInput.value<30)) {
    console.log ("number of days is valid")

}

// ccv must be 3 digit numbers

const cvvInput = document.querrySelector(#cvv)
if (cvvInput.value = 3) {
    console.log ("cvv is valid")

}



