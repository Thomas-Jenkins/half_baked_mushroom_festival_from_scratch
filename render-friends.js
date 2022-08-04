export function renderMushrooms(mushroom) {
    const mushroomEl = document.createElement('div');
    mushroomEl.textContent = '🍄';
    mushroomEl.classList.add('box');
    return mushroomEl;
}

export function renderFriends(friend) {
    const friendEl = document.createElement('div');
    const friendElName = document.createElement('h2');
    const friendElSatisfaction = document.createElement('p');
  
    friendElName.textContent = friend.name;
    friendElSatisfaction.textContent = friend.satisfaction;
    
    friendEl.classList.add('box');

    friendEl.append(friendElName, friendElSatisfaction);
    return friendEl;
}