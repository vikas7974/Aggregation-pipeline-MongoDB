// Question
// What is the average age of all users?

//---------------------------------------------------------------


// here we will be using usersJsons.js

[
    {
        $group: {
            _id: null,
            averageAge: {
                $avg: '$age'
            }
        }
    }
]


//----------------------------------------------------------------

//Output


_id : null
averageAge : 29.835


//----------------------------------------------------------------
