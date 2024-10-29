// Question
// What is the average number of tags per user?

//---------------------------------------------------------------


// Here we will be using Data/usersJson.js

[
    {
        $unwind: '$tags'
    },
    {
        $group: {
            _id: "$_id",
            numberOfTags: { $sum: 1 }
        }
    },
    {
        $group: {
            _id: null,
            averageNumberOfTags: {
                $avg: "$numberOfTags"
            }

        }
    }
]


//----------------------------------------------------------------

//Output


_id:null
averageNumberOfTags:3.556


//----------------------------------------------------------------
