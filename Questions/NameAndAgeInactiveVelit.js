// Question
// What are the names and age of the users who are inactive and have 'velit' as a tag ?

//---------------------------------------------------------------


// here we will be using usersJsons.js

[
    {
        $match: {
            isActive: false,
            tags: "velit"
        }
    },
    {
        $project: {
            name: 1,
            age: 1
        }
    }
]

//----------------------------------------------------------------

//Output


_id: Object('66d751f25bea41d0c0df4f98')
name:"Aurelia Gonzales"
age:20

_id: Object('66d751f25bea41d0c0df4fb6')
name:"Hahn Pope"
age:21

// .
// .
// .
// so on

_id: Object('66d751f25bea41d0c0df50a2')
name:"Ferrell Pollard"
age:23


//----------------------------------------------------------------
