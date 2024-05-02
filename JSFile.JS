function showPopup() {
    alert("Good Choice");
}

document.getElementById('submit1').addEventListener('submit', function(event) {
    event.preventDefault();
showPopup();
});