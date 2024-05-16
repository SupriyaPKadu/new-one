

function unique_elements(arr) {
    const result = [];

    for (const i of arr) {
        let counter = true;

        for (const j of result) {
            if (i == j) {
                
                counter = false;
                break;
            }
        }

        if (counter) {
            result.push(i);
        }
    }

    return result;
}



document.getElementById("result").innerHTML = "Unique Array Elements Are:" + unique_elements([1, 1, 3, 2, 2,5,6,5]);




