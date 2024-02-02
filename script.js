function removeInvalidParentheses() {
    const inputString = document.getElementById("inputString").value;
    const resultElement = document.getElementById("result");
  
    // Dummy logic for demonstration
    const validStrings = ["(())()", "()()()"];
    
    // Display the result
    resultElement.innerHTML = "<p>Valid Strings:</p><ul>" + validStrings.map(str => `<li>${str}</li>`).join('') + "</ul>";
  }
  