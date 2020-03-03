// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left');
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
let favsList = sideBar.getElementsByClassName('favorites')[0]
let favsListTitle = favsList.getElementsByTagName('h5')[0];
favsListTitle.innerHTML = 'Least Favs';
// Exercise 5): Find the first of the ads in the sidebar and hide it.
let rightSideBar = document.getElementById('sidebar-right');
let firstAd = rightSideBar.getElementsByClassName('ad-slot')[0];
firstAd.style.visibility = 'hidden';
// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
firstAd.style.visibility = 'visible';
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let secondAdSlot = rightSideBar.getElementsByClassName('ad-slot')[1];
let secondAdPic = secondAdSlot.getElementsByTagName('img')[0];
secondAdPic.setAttribute("src", "http://placebear.com/200/300");
// Exercise 8): Find Sam's post and change its text to something incredible.
let postList = document.getElementById('list-of-posts');
let samsPost = postList.getElementsByClassName('media-body')[4];
let postText = samsPost.getElementsByTagName('p')[0];
postText.innerText = "Billygoats Gruff is incredible!";
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let firstPost = postList.getElementsByTagName('li')[0];
firstPost.classList.add('post-liked')
// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Share to watch it turn red.
let secondPost = postList.getElementsByTagName('li')[4];
let secondPostActions = secondPost.getElementsByClassName('inline-list post-actions')[0];
let secondPostShare = secondPostActions.getElementsByTagName('li')[2];
secondPostShare.classList.add('post-shared');
// Exercise 11: On the second post, remove the `.post-shared` class from the `li` containing the text Share.
secondPostShare.classList.remove('post-shared');
