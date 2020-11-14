var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
function sendURL(URL) {
    // We will put code here later
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
