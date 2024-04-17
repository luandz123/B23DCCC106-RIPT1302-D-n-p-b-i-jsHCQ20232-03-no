function sum() {
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);

    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById("result").innerHTML = "Vui lòng nhập số hợp lệ.";
    } else {
        var result = inputA + inputB;
        document.getElementById("result").innerHTML = "Kết quả: " + result;
    }
}

function subtract() {
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);

    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById("result").innerHTML = "Vui lòng nhập số hợp lệ.";
    } else {
        var result = inputA - inputB;
        document.getElementById("result").innerHTML = "Kết quả: " + result;
    }
}

function multiply() {
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);

    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById("result").innerHTML = "Vui lòng nhập số hợp lệ.";
    } else {
        var result = inputA * inputB;
        document.getElementById("result").innerHTML = "Kết quả: " + result;
    }
}

function divide() {
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);

    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById("result").innerHTML = "Vui lòng nhập số hợp lệ.";
    } else {
        if (inputB === 0) {
            document.getElementById("result").innerHTML = "Không thể chia cho 0.";
        } else {
            var result = inputA / inputB;
            document.getElementById("result").innerHTML = "Kết quả: " + result;
        }
    }
}

function reset() {
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("result").innerHTML = "";
}