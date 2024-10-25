// Question
// How many users are active

//---------------------------------------------------------------


// here we will be using usersJsons.js

[
    {
        $match: {
            'isActive': true
        }
    } ,
    {
        $count: 'TotalNumbersOfActiveUsers'
    }
]


//----------------------------------------------------------------

//Output


TotalNumbersOfActiveUsers : 516


//----------------------------------------------------------------
