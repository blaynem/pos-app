This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Current Build

You can test out the current build **[here](http://blaynepos.surge.sh/)**. Thank you so much to surge.sh for the beautiful ability of hosting sites like this.

Quick Gif of App in action (This is an older build):
![Point of Sale Application](http://i.imgur.com/MaWD1pW.gif)

## Still in Development

I'm still in the process of developing the app pretty frequently. So anything you see now is definitely not a finished product.

## Reason for creating:

Originally was going to be for a companies use, but after they backed out I decided it would be really good practice to complete it. 

The applications I build are more advanced version of previous Apps I created so I can keep building my knowledge. This one is expanding on redux stores, and will eventually be useful for learning more AWS/Node.

### Problem

A club was writing down all of their club patrons orders on a slip of paper. Everything from drinks, food, their club dues, etc. Nothing was on the internet, simply a piece of paper. If that paper was lost, so was all of their information.

### Solution

Allow them to do exactly the same thing they were doing previously, but now it's on the internet and easier to use/keep track of. Will give patrons the ability to go online and check what they've purchased in the last month at the club, and keep track of that information.


## Try it out

Clone or download this repo. Inside of the folder directory, run `npm install` and then run `npm start`. Your browser should open to a localhost, and you'll be able to add things to a cart.

### To use

This application acts similar to a Point of Sale System you'd find in a bar/club, with the exception that you're adding users instead of tables. On the left you can select a user who's cart you want to add items to. In the middle, you have items you can add (as of now, only the alcohol tab has items). And on the right you have the items that you'd like to add to the selected users cart. Once added, you can view the users cart inside of the 'All Users Carts' tab.


## Todo

- Add price total to addCart (cart in menu)
- Remove api call if user is not under the "all user carts" tab
- Create a scrolling box around users so the page isn't gigantic from having a ton of users.
	- Edit scroll so it only shows if certain amount of users are seen.
- Modify items button inside cart.
- Probably need to change how all of the data is structured for items.
- Modify all items prices. (Discounts, etc.)
- Add dates to purchases.
- Ability to add more items (alcohol, food)
- Ability for users to see their carts - via sign in type thing.
- Add more todo things.

### Todo Completed

- ~~Add ability to add users.~~
	- ~~Add error handling for user with that name already being created.~~
		- ~~Will need to remove the modal closing from "Add User" button once this is completed, since modal closes if both first and last name fields are populated.~~
	- ~~Added users needs to have new ID's~~
	- ~~Need to add error handling for empty inputs.~~
	- ~~Do not allow numbers~~
	- ~~Do not allow spaces~~
- ~~Add ability to add to specific user.~~
- ~~Add search function for users.~~
- ~~AddToCart~~
- ~~Add who it's made by and stuff on bottom.. Might be nice for people to visit and know it's made by me.~~
- ~~Alphabetize users~~
- ~~When a user is selected, it should highlight the cell.~~
- ~~If you add multiples of the same item, it should say something like "sm X #" instead of adding multiple rows of items.~~
	- ~~Ability to add or remove the quantity of that line item~~

## Long Term Goals
- Make all of the information blocked unless you have the information to sign in with.
  - Will allow users to sign in. If they are admin, can do adding to cart things. If they're just a regular user, can only view their cart.
- Finish the Food section
- Throw it all in AWS
- Localization
- Accessability
- Test Suite

## Difficulties and things learned.

Wrapping my head around multiple stores applying to each other.

I really wasn't sure how I should structure the data for either users or the items information, so I will definitely need to learn some stuff on databases to get a better feel for them.

## Bugs

- Scrollbar is still visible when users are filtered to the point of scrollbar not being needed.
- ~~After clicking a list item, the class will turn to active, but if you then search for a different person, the names will change in the list, but the class will still be applied to the same index, but with different names. Is really confusing.~~
	- Solved by just checking if the users.id was = to what was selected.
- ~~Seems to be a disconnect between where the users selection is scrolled and different pages.~~
	- ~~Example: On the 'alcohol' tab you search for 'anne' then select anne-marie. You then click on the 'food' tab and your users list is back to initial state, so you scroll down and click a user 'Kim Kardashian'. You then click on the 'All User Carts Tab', again Users list is back to initial state. So you click 'Steve Jobs'. Once you return to the previous tabs, they will still look how you left them (i.e. scrolled, filtered, item selected) but the cart will be completely different. Jarring experience. 1/10, 3/10 with rice.~~
		- ~~I believe this will stop happening once I move the users component out from inside of the menu component.~~
			- ~~I was right.~~
- ~~Pressing "Add all to Cart" button while cart is empty but user is chosen will run the functions - shouldn't do anything. (Actually the button disappears if there is items in cart, but it should probably not do anything if cart is empty anyway.)~~
- ~~If you add items to the cart, then select a user, then select another item, the cart is reset.~~
- ~~If you add items to cart, select a new user, then try to delete an item from cart, you get an error.~~

## Thanks
Also thanks to everyone in the Reactiflux discord chat who helped.
