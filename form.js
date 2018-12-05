window.onload = init;
// runs  functions on window load
function init() {
    document.getElementById('userInfo').onsubmit = submitForm;

    document.getElementById('height').onfocus = clearError;
    document.getElementById('weight').onfocus = clearError;
    document.getElementById('height').onblur = checkHeight;
    document.getElementById('weight').onblur = checkWeight;

}
// submit form if the the checkname fuction has not returned valid == false
function submitForm() {

    var check = checkWeight();
    var check2 = checkHeight();
    var check3 = checkHeightCompletion()
	var check4 = checkHeightCompletion2()

    if ((check == false) || (check2 == false) || (check3 == false) || (check4 == false) ) {
        document.getElementById('SubmitError').innerHTML = "There are errors in the form";
        return false;

    } else {
        var weightInput = document.getElementById("weight").value;
        var heightInput = document.getElementById("height").value;
        var heightFt = document.getElementById("ft").value;
        var heightIn = document.getElementById("in").value;
        var units = document.getElementById("units").value;
        var finalHeight;

        if (units == 'lbs') {
            weightInput = (weightInput / 2.205).toFixed(1);

        }

        if (heightInput == '') {
            finalHeight = (parseInt(heightFt) * 12) + parseInt(heightIn);
            finalHeight = (finalHeight * 2.54) / 100;
        } else {
            finalHeight = heightInput / 100;
        }
        var bmi = (weightInput / (finalHeight * finalHeight)).toFixed(1);
        var message = "Your BMI is ";

        /* you DO NOT need to add an add statemnt ie (bmi > 25 &&  bmi < 30). it just follows
        the else if statements anyway */
        if (parseInt(bmi) > 30) {
            message += +bmi + ' you are obese';
        } else if (parseInt(bmi) > 25) {
            message += +bmi + ' you are overweight';
        } else if (parseInt(bmi) > 18.5) {
            message += +bmi + ' you are fine';
        } else if (parseInt(bmi) > 16) {
            message += +bmi + ' you are underweight';
        } else {
            message += bmi + ' you are very underweight';
        }
        document.getElementById('result').innerHTML = message;;

        return false;
    }
}



function clearError() {
    // clears element if it was an error Only on focus
    document.getElementById(this.id + 'Error').innerHTML = "&nbsp;";
    // clears submit error span
    document.getElementById('SubmitError').innerHTML = "&nbsp;";
    document.getElementById('result').innerHTML = "&nbsp;";
}



function checkWeight() {
    var valid = true;
    document.getElementById('weight').style.background = "white";
    var heightInput = document.getElementById("weight");

    if ((heightInput.value == "") || isNaN(heightInput.value)) {
        document.getElementById('weightError').innerHTML = 'Age field can not be left empty';
        valid = false;
    }
    return valid;
}


function checkHeight() {
    var valid = true;
    document.getElementById('height').style.background = "white";
    var heightInput = document.getElementById("height");
    var heightFt = document.getElementById("ft");

    if ((heightInput.value == "") || isNaN(heightInput.value)) {
        if (isNaN(heightFt.value)) {
            valid = false;
        }
    }
    return valid;
}


function checkHeightCompletion() {
    var valid = true;
    var heightInput = document.getElementById("height");
    var heightFt = document.getElementById("ft");
    if ((heightFt.value == "") && (heightInput.value == "")) {
        valid = false;
    }
    return valid;
}

function checkHeightCompletion2() {
    var valid = true;
	var value = null;
    var heightInput = document.getElementById("height");
    var heightFt = document.getElementById("ft");
    if ((heightFt.value !== null && heightFt.value !== '' ) && (heightInput.value !== null && heightInput.value !== '')) {
        valid = false;
    }
    return valid;
}
