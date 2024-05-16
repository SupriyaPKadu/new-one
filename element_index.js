// Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.


function find(arr, element) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === element) {

            return i;
        }
    }

    return -1;
}


const array = [4, 5, 6, 3, 7, 8, 1, 9];
const target_element = 5;
const result = find(array, target_element);

//console.log(result);

document.write("The index of given element is"+result);

