export function renderMushrooms() {
    const mushroomEl = document.createElement('div');
    mushroomEl.textContent = '🍄';
    mushroomEl.classList.add('mushrooms');
    return mushroomEl;
}



export function renderFriends(friend) {
    const friendEl = document.createElement('div');
    const friendElName = document.createElement('h2');
    const friendElSatisfaction = document.createElement('p');
    
    friendElSatisfaction.classList.add('friend');

    friendElName.textContent = friend.name;

    if (friend.satisfaction === 1){
        friendElSatisfaction.textContent = '😠';
    } 
    if (friend.satisfaction === 2){
        friendElSatisfaction.textContent = '😑';
    } 
    if (friend.satisfaction === 3){
        friendElSatisfaction.textContent = '😁';
    }


    
    friendEl.classList.add('box');
    
    friendEl.append(friendElName, friendElSatisfaction);
    return friendEl;
}



export function findFriend(name, friends) {
    for (let friend of friends) {
        if (friend.name === name) {
            return friend;
        }
    }
}


export function addFriend(name, friends) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.Random() * 100)}`,
        satisfaction: 1
    };
    friends.push(newFriend);
}