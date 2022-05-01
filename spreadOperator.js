function sum(name, ...args) {

    console.log(name);
    let sum = 0;
    args.forEach(function (i) {
        sum += i;
    })
    return sum;
}
const sumNumber = sum("Sunny", 10, 12, 14);
console.log(sumNumber);

function cloneArray(){
    // old array cloning
    let array1 = [10,12,14,16];
    let array2 = array1; // it is done my reference.
    array1.push(18);
    console.log(array2); 

    // using spread operator.
    let arr1 = [10,12,14,16];
    let arr2 = [...arr1]; // it is done by spliting the value.
    arr1.push(18);
    console.log(arr2);

    // output 
    //(5) [10, 12, 14, 16, 18]
    //(4) [10, 12, 14, 16]
}

function concantinationUsingSpreadOperator(){
    let arr1 = [10,12,13,14];
    let arr2 = [16,18,20];
    // old sytax for merge two array.
    let arr3 = arr1.concat(arr2);
    console.log(arr3);

    // new sytax for merge two arary using spread.
    let arr4 = [...arr1, ...arr2];
    console.log(arr4);
}
// Merge two object using spread operator.
function mergeTwoObjectUsingSpreadOperator(){

    const  obj1 = {
        name: "Sunny",
        subject: "Computer Science"
    }
    const  obj2 = {
        age: 27
    }

    const obj3 = {...obj1, ...obj2};
    console.log(obj3);

}

