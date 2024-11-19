function getInputValue() {
    var inputElement = document.getElementById("input");
    var inputValue = inputElement.value;
    if(inputValue=="Embe của anh") window.location.href="loadpage.html";
    else alert("Nằm trong tấm giấy nhỏ anh đưa embe đấy ạ");
}
var inputElement = document.getElementById("input");
inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getInputValue();
    }
});