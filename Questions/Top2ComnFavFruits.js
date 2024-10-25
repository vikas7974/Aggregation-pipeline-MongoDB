// Question
// List the top 2 most common favourite fruits among the users?

//---------------------------------------------------------------


// here we will be using usersJsons.js

[
    {
        $group: {
            _id: '$favoriteFruit',
            count: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            count: -1
        }
    },
    {
        $limit: 2
    }
]

//----------------------------------------------------------------

//Output


// Number 1
_id: "banana"
count: 339

// Number 2
_id: "apple"
count: 338

//----------------------------------------------------------------
