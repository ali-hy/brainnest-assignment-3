function printLargerNumber(a, b){
  if(a > b){
    print(`The first number (${a}) is larger`);
  } else if(b > a){
    print(`The second number (${b}) is larger`);
  } else {
    print("Both numbers are equal");
  }
}

function numberComparison(){
  const number1 = prompt("We will be comparing two numbers\n"
    + "Enter the first number");
  const number2 = prompt("We will be comparing two numbers\n"
    + "Enter the second number");

  printLargerNumber(number1, number2);
}

function oddOrEven(){
  const x = prompt("We will check if a number is odd or even. Enter a number");
  const numberType = x%2 == 0 ? "even" : "odd";
  print(`The number you entered is ${numberType}`)
}

function numberCheck(){
  numberComparison();
  oddOrEven();
}