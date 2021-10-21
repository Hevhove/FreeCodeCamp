function convertToRoman(num) {
  
  // 1. We create an algorithm that gives us a list of how which numbers are required
  let numList = [1000,500,100,50,10,5,1];
  let outList = [];
  let romList = ["M","D","C","L","X","V","I"];
  while (numList.length != 0){
    outList.push(Math.floor(num/numList[0]));
    num = num % numList[0];
    numList = numList.splice(1);
  }
  
  // 2. We build the string numeral
  let numeral = "";

  for (let i = 0; i < outList.length; i++){
    numeral += romList[i].repeat(outList[i]);
  }

  // 3. We change the exceptions in the string numeral (eg. IIII becomes IV)
  let replaceIn = ["DCCCC","CCCC","LXXXX","XXXX","VIIII","IIII"];
  let replaceOut = ["CM","CD","XC","XL","IX","IV"];

  for (let j = 0; j < replaceIn.length; j++){
    numeral = numeral.replace(replaceIn[j],replaceOut[j]);
  }
 return numeral;
}

convertToRoman(36);
