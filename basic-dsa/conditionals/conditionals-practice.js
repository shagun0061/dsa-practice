
/*
 * DSA PRACTICE: CONDITIONALS
 * Language: JavaScript
 * Rule: Solve each function yourself before checking a solution.
 */

// ==========================================
// SECTION 1: BASIC IF-ELSE (1-10)
// ==========================================

// 1. Positive, negative, or zero
function checkPositiveNegativeZero(num) {
    
    if(num === 0){
        return "Zero";
    }else if(num > 0){
        return "Positive";
    }else if(num < 0 ){
        return "Negative";
    }else{
        return "This is not a number" // eadge casees
    }

}

// 2. Even or odd
function checkEvenOdd(num) {
  if(num % 2 == 0){
    return "Even";
  }else if(num % 2 != 2) {
    return "Odd";
  }else{
    return "This is not a number"
  }
}

// 3. Greater of two numbers
function findGreaterOfTwo(a, b) {
  return a>b ? "a is greater" : "b is greater";
}

// 4. Greatest of three numbers
function findGreatestOfThree(a, b, c) {
  let greater = -Infinity;

  if(a > b ){
    greater = a;
  }
  
  if(c > a){
    greater =  c;
  }

  return (b > greater) ? b : greater;

}

// 5. Leap year
function checkLeapYear(year) {
  
    if(year % 4 == 0){
        if(year % 100 == 0){ 
            return year % 400 == 0;
        }else{
            return true
        }
    }else{
        return false;
    }
}

// 6. Vowel or consonant
function checkVowelConsonant(char) {
lowerVowels = (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u');
upperVowels = (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U');
 
return (lowerVowels || upperVowels)

}

// 7. Eligible to vote
function checkVotingEligibility(age) {
 
    if(age >= 18){
        return true;
    }else if(age < 18){
        return false
    }else{
        return 'Wrong age'
    }
}

// 8. Grade based on marks
function calculateGrade(marks) {
  if(marks >= 90){
    return 'A';
  }else if(marks >= 80){
    return 'B';
  }else if(marks >= 70){
    return 'C';
  }else{
    return 'F'
  }
}

// 9. Uppercase, lowercase, digit, or special character
function classifyCharacter(char) {

    if(char >= 'a' && char <= 'z'){
        return 'lowercase';
    }else if(char >= 0 && char <= 9){
        return 'digit';
    }else if(char >= 'A' && char <= 'Z'){
        return 'uppercase'
    }else{
        return 'special character'
    }

}

// 10. Divisible by both 5 and 11
function checkDivisibleBy5And11(num) {
 
    if(num % 5 == 0 && num % 11 == 0){
        return true;
    }else{
        return false;
    }
}


// ==========================================
// SECTION 2: COMPARISONS & CALCULATIONS (11-20)
// ==========================================

// 11. Greatest of four numbers
function findGreatestOfFour(a, b, c, d) {
  
    if(a > b && a > c && a > d ){
        return a;
    }else if(b > a && b > c && b > d){
        return b;
    }else if(c > a && c > b && c > d){
        return c;
    }else {
        return d
    }

}

// 12. Valid triangle using three sides
function isValidTriangle(a, b, c) {
// Logic:- sum of two values should be greater then thired and each side must be greater than zero;

  if( a<= 0 || b <= 0 || c <= 0){
  return false;
  }

  if(a + b > c && b + c > a && c + a > b){
    return true;
  }
  return false;
}

// 13. Classify triangle by sides
function classifyTriangleBySides(a, b, c) {
  // check is this triangle is vaid?

  function checkIsValidTriangle(){
    if(a <= 0 || b <= 0 || c <= 0){
     return false
    }

    if(a + b > c && b + c > a && c + a > b){
      return true;
    }else return false;
  }

  if(checkIsValidTriangle()){

    if(a == b && a == c && b == c){
      return "Equilateral Triangle";
    }else if ( a == b || b == c || c == a){
      return 'Isoseles Triangle';
    }else{
      return 'Scalene Triangle'
    }


  }else return false;
  
}

// 14. Classify triangle by angles
function classifyTriangleByAngles(a, b, c) {

  if(a <= 0 || b <= 0 || c <= 0 || a+b+c !== 180){
    return 'invalid Triangle'
  }

  if(a == 90 || b == 90 || c ==90){
    return 'Right Triangle';
  }
  
  if(a > 90 || b > 90 || c > 90){
    return 'Obtuse Triangle'
  }

  return "Acute Triangle"
}

// 15. Profit or loss
function calculateProfitOrLoss(costPrice, sellingPrice) {
 const retrunValue = costPrice - sellingPrice;

 if( costPrice < sellingPrice){
  return 'Profit'
 }else if(costPrice >= sellingPrice){
  return 'Loss'
 }

 console.log(retrunValue, "000")

}

// 16. Electricity charges using slabs
function calculateElectricityBill(units) {

  if(units <= 100){
    return units * 2;
  }else if(units <= 200){
    return 200 + (units - 100) * 3;
  }else if(units <= 300){
    return 500 + (units - 200) * 5;
  }else {
    return 1000 + (units - 300) * 7;
  }

}

// 17. Income tax using slabs
function calculateIncomeTax(income) {
  if(income <= 300000){
    return 0;
  }else if(income <= 600000){
    return (income - 300000) * 0.05; 
  }else if(income <= 1000000){
    return 15000 + (income - 600000) * 0.10;
  }else{
    return 55000 + (income - 1000000) * 0.20;
  }
}

// 18. Simple calculator using switch
function calculate(a, operator, b) {
  switch(operator){
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "%": return a % b;
    case "/": return a / b;
    default: return "Invalid operator"
  }
}

// 19. Validate time
function isValidTime(hours, minutes, seconds) {

  if(hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 60 && seconds >= 0 && seconds <= 60){
    return true;
  }else return false;

}

// 20. Roots category of a quadratic equation
function classifyQuadraticRoots(a, b, c) {
  // TODO: Use the discriminant: b² - 4ac
}

// 27. Power of two
function isPowerOfTwo(num) {
return num * num;
}

// 28. Power of ten
function isPowerOfTen(num) {
if (n < 1) {
    return false;
  }

  while (n % 10 === 0) {
    n = n / 10;
  }

  return n === 1;
}

// 29. Determine the quadrant of a point
function findQuadrant(x, y) {
 if (x === 0 && y === 0) {
    return "Origin";
  } else if (x === 0) {
    return "Y-axis";
  } else if (y === 0) {
    return "X-axis";
  } else if (x > 0 && y > 0) {
    return "Quadrant I";
  } else if (x < 0 && y > 0) {
    return "Quadrant II";
  } else if (x < 0 && y < 0) {
    return "Quadrant III";
  } else {
    return "Quadrant IV";
  }
}


// ==========================================
// TEST YOUR SOLUTIONS HERE
// Uncomment one test at a time.
// ==========================================

// console.log(checkPositiveNegativeZero(undefined));
// console.log(checkEvenOdd(-8));
// console.log(findGreaterOfTwo(10, 20));
// console.log(findGreatestOfThree(1000, 300, 200));
// console.log(checkLeapYear(2000));
// console.log(checkVowelConsonant("b"));
// console.log(checkVotingEligibility(18));
// console.log(calculateGrade(90))
// console.log(classifyCharacter(4));
// console.log(checkDivisibleBy5And11(5));
// console.log(findGreatestOfFour(1330, 230, 30, 40));
// console.log(isValidTriangle(1, 2, 0));
// console.log(classifyTriangleBySides(0, 5, 6));
// console.log(classifyTriangleByAngles(120, 30, 30));
// console.log(calculateProfitOrLoss(12000, 2000))
// console.log(calculateElectricityBill(80));
// console.log(calculateIncomeTax(250000));  // 0
// console.log(calculate(10, "+", 5)); // 15
// console.log(isValidTime(10, 30, 23)); // 
// console.log(isPowerOfTwo(5)); 

console.log(isPowerOfTen(1000));
// console.log(findQuadrant(3, 4));
