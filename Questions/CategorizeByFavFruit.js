// Question
// Categorize users by their favorite fruit?

//---------------------------------------------------------------


// Here we will be using Data/usersJson.js

[
    {
        $group: {
            _id: "$favoriteFruit",
            users: { $push: "$name" }
        }
    }
]

//----------------------------------------------------------------

//Output


users:Array(339)
_id:"banana"


_id:"apple"
users:Array(338)


_id:"strawberry"
users:Array(323)


//----------------------------------------------------------------

