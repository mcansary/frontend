document.addEventListener('DOMContentLoaded',function(){
  let inputText = document.getElementById('input-text');   // ①
  let outputText = document.getElementById('output-text'); // ①
  
    inputText.addEventListener('blur',function(e){ // ②
        outputText.textContent = e.target.value; // ③
  });
});