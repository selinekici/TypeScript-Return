//find the biggest number
function bigNumber(num1: number, num2: number, num3: number) {
    let bigNum = num1;
    if(num2 > bigNum) {
        bigNum = num2;
    }
    if(num3 > bigNum) {
        bigNum = num3;
    }
    return bigNum;
}
console.log(bigNumber(8, 12, 1 ));


//find the smallest number
function smallNumber(num1: number, num2: number, num3: number) {
    let bigNum = num1;
    if(num2 < bigNum) {
        bigNum = num2;
    }
    if(num3 < bigNum) {
        bigNum = num3;
    }
    return bigNum;
}
console.log(smallNumber(8, 14, 11 ));


//calculate the average of numbers in an array
function average(array: number[]) {
    if(array[0] == 0) {
        console.log("None")
    }
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(average([1, 2, 3, 4, 5]));

//sort with function
let num = [1, 6, 4, 10, 20];
console.log(print);

num.sort(
function (a, b) {
    return a-b
    });
console.log(num);

//sort the all number in an array
function sort(array: number[]) {
    let temp;
    for(let i = 0; i < array.length; i++)
        {
            for(let j = i + 1 ; j < array.length; j++)
            {
                if(array[j] < array[i]) {
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
}
console.log(sort([1, 5, 10, 7, 0, 1]))


//find the biggest number in an array
function bigNum(array: number[]) {
    let bigNumber = array[0];
    for (let i = 0; i < array.length; i++){
            if (array[i] > bigNumber) {
                bigNumber = array[i];
            }
    }
return bigNumber;
}
console.log(bigNum([1, 5, 0, 7, 45, 12, 0]))



