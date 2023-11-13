//  iterations in objets

const obj = {
    "j":"java",
    "js":"javaScript",
    "py":"Python",
    "dart":"Dart"
}

// for-in loop

for (const key in obj) {
    console.log(key) // prints only the keys in the object
}

// printing both the keys and values in the object using for-in loop

for (const key in obj) {
    console.log(`For key: ${key} the value is: ${obj[key]}`) // prints only the keys in the object
}

// for-in loops for array: -------> by default it prints just the ndexes , however we can print the values at the indexes by the syntax array[index_number]


//  actually the map is not iterable so this loop does not works on maps