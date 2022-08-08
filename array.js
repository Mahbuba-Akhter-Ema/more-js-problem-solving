const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 12, class: 8, name: 'Riya'};
const friends = [23, 24, 22, 21, 20];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

// ---------------------
console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(252) !== -1 ){

}

// concat : 
const newFriendsAge = [12, 13, 11, 13]
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends)