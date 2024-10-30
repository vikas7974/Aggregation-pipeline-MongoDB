// Question
// What is the average number of tags per user?

//---------------------------------------------------------------


// Here we will be using Data/usersJson.js

[
    {
        $addFields: {
            numberOfTags: {
                $size: { $ifNull: ['$tags', []] }
            }
        }
    },
    {
        $group: {
            _id: null,
            averageNumberOfTags: { $avg: "$numberOfTags" }
        }
    }
]


//----------------------------------------------------------------

//Output


_id: null
averageNumberOfTags: 3.556


//----------------------------------------------------------------
