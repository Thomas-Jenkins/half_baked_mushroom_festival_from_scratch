// import functions and grab DOM elements
import { renderFriends } from './render-friends.js';
import { renderMushrooms } from './render-friends.js';
// import { addFriend } from './render-friends.js';
import { findFriend } from './render-friends.js';
import { randomName } from './random-name-data.js';
const friendsBox = document.querySelector('#friends-box');
const mushroomTable = document.querySelector('#mushroom-table');
const forrest = document.querySelector('#forrest');
const friendInput = document.querySelector('[name="friend-name"]');
const friendButton = document.querySelector('#add-friend-button');
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
let gatheredMushrooms = 4;



displayFriend();
displayMushroom();



forrest.addEventListener('click', () => {
    const randomNum = Math.random() * 10;
    if (randomNum >= 5) {
        gatheredMushrooms++;
        alert('You found a mushroom');
    } else {
        alert('You find nothing');
    }
    displayMushroom();
});  
friendButton.addEventListener('click', () => {
    const name = friendInput.value;
    const variable = Math.floor(Math.random() * friends.length);
    const newestFriend = {
        name: name || randomName[variable],
        satisfaction: 1
    };
    friends.push(newestFriend);
    friendInput.value = '';
    console.log(friends);
    displayFriend();
});

function displayFriend() {
    friendsBox.textContent = '';

    for (let friend of friends) {
        const friendsEl = renderFriends(friend);
        
        friendsBox.append(friendsEl);
        friendsEl.addEventListener('click', () => {
            const presentFriends = findFriend(friend.name, friends);
            if (gatheredMushrooms <= 0){
                alert('GASP!, There are no more mushrooms');
            } else {
                if (presentFriends.satisfaction <= 2){
                    presentFriends.satisfaction++;
                    gatheredMushrooms--;
                } else if (presentFriends.satisfaction >= 3){
                    alert(`${friend.name} can't eat any more!`);
                }
            }
            displayMushroom();
            displayFriend();
            console.log(gatheredMushrooms);
        });
    }
    
}
function displayMushroom() {
    mushroomTable.textContent = '';
    for (let i = 0; i < gatheredMushrooms; i++) {
        const mushroomCount = renderMushrooms();
        mushroomTable.append(mushroomCount);
    }
}






