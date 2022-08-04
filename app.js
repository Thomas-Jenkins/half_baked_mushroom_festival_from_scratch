// import functions and grab DOM elements
import { renderFriends } from './render-friends.js';
import { renderMushrooms } from './render-friends.js';
const friendsBox = document.querySelector('#friends-box');
// let state
let friends = [
    {
        name: 'Terry',
        satisfaction: 1
    },
    {
        name: 'Jerry',
        satisfaction: 1
    },
    {
        name: 'Larry',
        satisfaction: 1
    }
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const friendsObj = {
    name: '',
    satisfaction: 1,
};



function displayFriend() {
    friendsBox.textContent = '';

    for (let friend of friends) {
        const friendsEl = renderFriends(friend);
        
        friendsBox.append(friendsEl);
        
    }
}
displayFriend();

