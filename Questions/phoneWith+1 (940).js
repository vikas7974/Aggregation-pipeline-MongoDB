// Question
// How many users have a phone number starting with '+1 (940)'?

//---------------------------------------------------------------


// here we will be using usersJsons.js

[
    {
        $match: {
            "company.phone": /^\+1 \(940\)/
        }
    },
    {
        $count: 'userWithSpecialPhone'
    }
]



//----------------------------------------------------------------


//Output


userWithSpecialPhone:5



//----------------------------------------------------------------


