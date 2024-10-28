// Question
// List all unique eye colors present in the collection?

//---------------------------------------------------------------


// here we will be using usersJsons.js


[
    {
        $group: {
            _id: '$eyeColor',

        }
    }
]


//----------------------------------------------------------------

//Output

_id:"blue"
_id:"green"
_id:"brown"

//----------------------------------------------------------------
