

//This creates an empty new array
var newArray = [];

//TODO: populate the new array with 1000 new random values between 50 and 200
//hint: array.push
//hint: Math.random() creates a random value between 0 and 1
for(var i=0;i<1000;i++)
{
    newArray[i] = 50+Math.random()*200;
}

//TODO: after you populate the array, find the average of all the values in the array

var arraySum = 0;
var number = 0;
var dividedarraySum = 0;
newArray.forEach(function(arrayElement){
    //hint: here, we are "looping" through the array, accessing each array element one by one
    //we can add the value to arraySum
    //and finally, we divide arraySum by the total number of array elements
    arraySum = arraySum + arrayElement;
    number = number + 1;
    dividedarraySum = arraySum / number;
});

console.log("The arraySum is : " + arraySum + " The divide arraySum by the number of array elements is : " + dividedarraySum);