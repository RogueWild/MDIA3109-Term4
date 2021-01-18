// slice and splice

var arr = [
    "item 6",
    "item 7",
    "item 2",
    "item 8",
    "item 8",
    "item 5",
    "item 7",
];

var arr2 = [
    "item 8",
    "item 9",
    "item 10",
];

var arr3 = [
    {
        name: "Mike",
        count: 5
    },
    {
        name: "Jack",
        count: 1
    },
    {
        name: "Marge",
        count: 8
    },
    {
        name: "Alex",
        count: 7
    },
    {
        name: "Steph",
        count: 3
    },
];

// litering
// searchability
var filtered = arr3.filter((o, i) => {
    // return false/true
    /* if (0 === "item 8") {
        return false;
    } else {
        return true;
    } */

    return o.name.includes("en") || o.name.includes("a") && o.count > 5;
});

console.log("filter", filtered);

// sorting columns like lowest price, highest price, earliest date
arr3.sort((a, b) => {
    // return -1, 1, 0
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});

//console.log(arr3);

// concat
// combine multiple made list together then store it all in the database at once
// you have item attributes from other items that you need in your 3rd item, therefore you concatenate them
var concated = arr.concat(arr2);
//console.log("concatenate", concated);

// slice
// limit the amount of items show one the screen / pagination
var sliced = arr.slice(0, 3);
//console.log("sliced", sliced, arr);

// splice
// getting rid of an item in the array, transfer an item from one list to another
var spliced = arr.splice(1, 2);
//console.log("spliced", spliced, arr);
