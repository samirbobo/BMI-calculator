let button = document.querySelector("button");
let result = document.querySelector(".result");

button.addEventListener("click", _ => {
  let inputOne = parseInt(document.getElementById("height").value);
  let inputTow = parseInt(document.getElementById("weight").value);
  let hei_status = false;
  let wei_status = false;

  if(inputOne === ''|| isNaN(inputOne) || inputOne <= 0  ) {
    document.querySelector(".he_error").innerHTML = 'Please Provide a valid height';
  }else {
    document.querySelector(".he_error").innerHTML = '';
    hei_status = true;
  }
  if(inputTow === ''|| isNaN(inputTow) || inputTow <= 0  ) {
    document.querySelector(".we_error").innerHTML = 'Please Provide a valid weight';
  }else {
    document.querySelector(".we_error").innerHTML = '';
    wei_status = true;
  }

  if(hei_status && wei_status) {
    let mbi = (inputTow / ((inputOne * inputOne) / 10000)).toFixed(2);
    if(mbi < 18.6) {
      result.innerHTML = 'Under weight : ' + mbi;
    }else if(mbi >= 18.6 && mbi < 24.9) {
      result.innerHTML = 'Normal : ' + mbi;
    }else {
      result.innerHTML = 'Over weight : ' + mbi;
    }
  }else {
    alert("The Form has erorr");
    result.innerHTML = '';
  }
})
// console.log("ss")
// result.innerHTML = "Normal : " + (+inputOne + +inputTow);