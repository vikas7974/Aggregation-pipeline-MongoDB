// Question
// How many users have 'enim' as tag?

//---------------------------------------------------------------


// Here we will be using Data/usersJson.js

[
    {
        $match: {
            tags: "id"
        }
    },
    {
        $count: 'userWithEnimTag'
    }
]

//----------------------------------------------------------------

//Output


userWithEnimTag:46


//----------------------------------------------------------------
