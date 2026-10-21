
// Print numbers from 1 to N
function printNumber(n){
    let i = 0;

    while(i < n){
        console.log(i);
        i++
    }
};

// Print number from N to 1
function printReverseNumber(n){
    
    while(n >= 0){
        console.log(n);
        n--;
    }
}

// Print all even numbers from 1 to N
function printEvenNumber(n){
    let i = 0;

    while(i < n){
        if(i % 2 == 0){
            console.log(i);
        }
        i++;
    }
}

// Print all odd numbers from 1 to N
function printOddNumber(n){
    let i = 0;

    while(i < n){
        if(i % 2 != 0){
            console.log(i);
        }
        i++;
    }
}

// Find the sum of numbers from 1 to N
function findSumOfNumber(n){
    let i = 0;
    sum = 0;

    while(i < n){
     sum+= i;
        i++;
    }

    console.log(sum);
}

// Find the sum of all even numbers up to N
function findEvenNumberSum(n){
    i = 0;
    let sum = 0;

    while(i <= n){
        if(i % 2 == 0){
            sum+= i;
        }
        i++;
    }

    console.log(sum);
}

// Print the multiplication table of a number
function printTable(n){
    let i = 1;

    while(i <= 10){
        console.log(`${n} * ${i} = ${n * i}`);
    i++;
    };

}

// Find the sum of numbers divisible by 3 or 5
function SumOf3and5(n){
let sum = 0;
    for(let i=0; i<n; i++){
        if(i%3 == 0 && i%5 ==0){
            sum+=i;
        }
    }

    console.log(sum)
}

// Print a sequence with a given step size
function printSequence(start, end, step){
    for(let i=start; i<= end; i+= step){
        console.log(i);
    }
}

// find the digits in an number
function findDigits(n){
let count = 0;

while(n > 0){
    n = Math.floor(n / 10);
    count++;
}
console.log(count);

}

// Check whether a number is a palindrome
function palindromeDigit(n){
    if(n < 0) console.log(false);

    const nCopy = n;
    let reverse = 0;

    while(n > 0){
     reverse = reverse * 10 + n % 10;
     n = Math.floor(n / 10);
    }

    if(reverse == nCopy){
        console.log(true, reverse);
    }else{
        console.log(false, reverse);
    }
}

function reverseInteger(n){

    const xCopy = x;
    let rev = 0;
    x = Math.abs(x)

    while(x > 0){
        rev = 10 * rev + x % 10;
        x = Math.floor(x / 10);
    }

    const limit = 2**31;
    if(rev > limit || rev < -limit) return 0;

    return (xCopy < 0) ? -rev : rev;
}

//  Check whether a number is an Armstrong number
// An Armstrong number is a number equal to the sum of its own digits, where each digit is raised to the power of the total number of digits. For example, 153 is an Armstrong number because it has 3 digits and \(1^3 + 5^3 + 3^3 = 153\)
function checkNumberIsArmstrong(num){
    const numCopy = num;
    let digitcount = 0;

    // check how many digits
    while(num > 0){
        num = Math.floor(num / 10);
        digitcount++; 
    }

    num = numCopy;
    let count = 0;

    while(num > 0){
        count += Math.pow(num % 10, digitcount);
        num = Math.floor(num / 10);
    }

    return count === numCopy;

}

// Find the factorial of a number
// The factorial of a non-negative integer n, written as n!, is the product of all positive integers less than or equal to n








// printNumber(7);
// printReverseNumber(7);
// printEvenNumber(8)
// printOddNumber(8)
// findSumOfNumber(5)
// findEvenNumberSum(6);
// printTable(10)
// SumOf3and5(20);
// printSequence(2, 20, 3);
// findDigits(10);
// palindromeDigit(-1234);
console.log(checkNumberIsArmstrong(153)); // true
console.log(checkNumberIsArmstrong(123)); // false