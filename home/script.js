// console.log("Hello World")

/*
    Create functions which can manipulate our arrays.
*/

let registeredUsers = [

    "James Jeffries",
    "Gunther Smith",
    "Macie West",
    "Michelle Queen",
    "Shane Miguelito",
    "Fernando Dela Cruz",
    "Akiko Yukihime"
];

let friendsList = [];

/*
    
   1. Create a function which will allow us to register into the registeredUsers list.
        - this function should be able to receive a string.
        - determine if the input username already exists in our registeredUsers array.
            -if it is, show an alert window with the following message:
                "Registration failed. Username already exists!"
            -if it is not, add the new username into the registeredUsers array and show an alert:
                "Thank you for registering!"
        - invoke and register a new user.
        - outside the function log the registeredUsers array.

*/
    
function register(addUser) {
    let user = registeredUsers.includes(addUser)
  
    if (user) {
        alert("Registration failed. Username already exists!")
    }
    else{
        registeredUsers.push(addUser)
        alert("Thank you for registering!")
    }
}

/*let productNotFound = products.includes("Headset");
console.log("Result of includes method:");
console.log(productNotFound);*/

/*
    2. Create a function which will allow us to add a registered user into our friends list.
        - this function should be able to receive a string.
        - determine if the input username exists in our registeredUsers array.
            - if it is, add the foundUser in our friendList array.
                    -Then show an alert with the following message:
                        - "You have added <registeredUser> as a friend!"
            - if it is not, show an alert window with the following message:
                - "User not found."
        - invoke the function and add a registered user in your friendsList.
        - Outside the function log the friendsList array in the console.

*/

function addFriend(newFriend) {
    let user = registeredUsers.includes(newFriend);
    

    if (user) {
        friendsList.push(newFriend)
        alert('You have added ' + newFriend + ' as a friend.');
    }
    else{
        alert('User not found.');;

    }
}

/*let productFound = products.includes("Mouse");
console.log("Result of includes method: ");
console.log(productFound);*/

/*
    3. Create a function which will allow us to show/display the items in the friendList one by one on our console.
        - If the friendsList is empty show an alert: 
            - "You currently have 0 friends. Add one first."
        - Invoke the function.

*/
    
function displayFriends() {
    if (friendsList == 0) {
        alert("You currently have 0 friends. Add one first.")
    }
    else {
        friendsList.forEach(function(friend){
        console.log(friend)
    })
    }}




/*
    4. Create a function which will display the amount of registered users in your friendsList.
        - If the friendsList is empty show an alert:
            - "You currently have 0 friends. Add one first."
        - If the friendsList is not empty show an alert:
            - "You currently have <numberOfFriends> friends."
        - Invoke the function

*/

function displayNumberOfFriends(){
        if (friendsList.length > 0){
            alert("You currently have "+friendsList.length+" friends.")
        }
        else {
            alert("You currently have 0 friends. Add one first.")
        }
    }
    


/*
    5. Create a function which will delete the last registeredUser you have added in the friendsList.
        - If the friendsList is empty show an alert:
            - "You currently have 0 friends. Add one first."
        - Invoke the function.
        - Outside the function log the friendsList array.

*/

function deleteFriend(){
        if (friendsList.length > 0){
            friendsList.pop();
        }
        else{
            alert("You currently have 0 friends. Add one first.");
        }
    }
