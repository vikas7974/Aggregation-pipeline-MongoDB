// Question
// Find total number of males and females?

//---------------------------------------------------------------


// Here we will be using Data/usersJson.js

[
    {
        $group: {
            _id: '$gender',
            genderCount: {
                $sum: 1
            }
        }
    }
]


//----------------------------------------------------------------

//Output



_id:"female"
genderCount:507


_id:"male"
genderCount:493


//----------------------------------------------------------------
