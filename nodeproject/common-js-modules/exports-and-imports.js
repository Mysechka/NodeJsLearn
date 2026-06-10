const { myName, mySys } = require('./multiple-exports')

const myFriendsName = 'Kolya'

module.exports.myName = myName
module.exports.myFriendsName = myFriendsName
module.exports.myRealySys = mySys
