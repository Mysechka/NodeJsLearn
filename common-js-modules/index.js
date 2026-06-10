const { myName, mySys, myFavoriteGame } = require('./multiple-exports')
const { myName: myOtherName, myFriendsName, myRealySys  } = require('./exports-and-imports')
const greetingF = require('./my-module/single-export')

// imports from multiple-exports
console.log(myName)
console.log(mySys)
console.log(myFavoriteGame)

// mutates array in the multiple-exports module
mySys.push('Windows')

// import from single-import
console.log(greetingF)
greetingF(myName)

// import from export-and-import
console.log(myOtherName)
console.log(myFriendsName)
console.log(myRealySys)