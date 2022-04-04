function checkData() {
    var Data = document.getElementById("Data").value;
    var regex = /\d{4}-(\d{4})-\d{4}-\d{4}/;

    if (regex.test(Data)) { // if testing of first is true
        document.getElementById("Data_Check").style.color = "green";
        document.getElementById("Data_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {// if it's not
        document.getElementById("Data_Check").style.color = "red";
        document.getElementById("Data_Check").innerHTML = "Номер карты 0000-0000-0000-0000";
    }
}