// Question
// Country with the highest number of registered users?

//---------------------------------------------------------------


// Here we will be using Data/usersJson.js

[
    {
        $group: {
            _id: "$company.location.country",
            userCount: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            userCount: -1
        }
    },
    {
        $limit: 1
    }
]

//----------------------------------------------------------------

//Output


_id:"Germany"
userCount:261


//----------------------------------------------------------------
