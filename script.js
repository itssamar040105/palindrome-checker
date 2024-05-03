function checkPalindrome() {
  const inputText = document.getElementById("inputText").value.trim();

  if (inputText === "") {
    document.getElementById("result").innerHTML =
      '<span style="color: #f44336;">Please enter a word or phrase or number.</span>';
  } else {
    const sanitizedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedText = sanitizedText.split("").reverse().join("");

    if (sanitizedText === reversedText) {
      document.getElementById("result").innerHTML =
        '<span style="color: #6c63ff;">The input is a palindrome!</span>';
    } else {
      document.getElementById("result").innerHTML =
        '<span style="color: #f44336;">The input is not a palindrome.</span>';
    }
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkPalindrome();
  }
});
