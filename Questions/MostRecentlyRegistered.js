// Question
// Who has registered the most recently ?

//---------------------------------------------------------------


// here we will be using usersJsons.js



[
    {
        $sort: {
            registered: -1
        }
    },
    {
        $limit: 1
    }
]


//----------------------------------------------------------------

//Output



name:"Stephenson Griffith"
isActive:true
registered:'2018-04 - 14T03: 16: 20.000 +00:00'
age:22
eyeColor:"blue"
tags:Array(4)
index:706
gender:"male"
favoriteFruit:"apple"
company:Object('_id66d751f25bea41d0c0df525a')




//----------------------------------------------------------------


