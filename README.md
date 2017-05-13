This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can test it out [here](http://blaynepos.surge.sh/). Thank you so much to surge.sh for the beautiful ability of hosting sites like this.

# Still in Development

I'm still in the process of developing the app pretty frequently. So anything you see now is definitely not a finished product.

## Reason for creating:

Originally was going to be for a companies use, but after they backed out I decided it would be really good practice to complete it. 

The applications I build are more advanced version of previous Apps I created so I can keep building my knowledge. This one is expanding on redux stores, and will eventually be useful for learning more AWS/Node.

### Problem

A club was writing down all of their club patrons orders on a slip of paper. Everything from drinks, food, their club dues, etc. Nothing was on the internet, simply a piece of paper. If that paper was lost, so was all of their information.

### Solution

Allow them to do exactly the same thing they were doing previously, but now it's on the internet and easier to use/keep track of. Will give patrons the ability to go online and check what they've purchased in the last month at the club, and keep track of that information.


## Try it out

Clone or download this rep. Inside of the folder directory, run `npm install` and then run `npm start`. Your browser should open to a localhost, and you'll be able to add things to a cart.

### To use

After downloading, just click an item you want to add to the cart, and it'll be there. (Will need to update as project expands.)


## Todo

- Create a scrolling box around users so the page isn't gigantic from having a ton of users.
	- Edit scroll so it only shows if certain amount of users are seen
- Add ability to add users.
- When a user is selected, it should highlight the cell.
- Modify items button inside cart.
- Modify all items prices. (Discounts, etc.)
- Add dates to purchases.
- If you add multiples of the same item, it should say something like "sm X #" instead of adding multiple rows of items.
- Ability for users to see their carts - via sign in type thing.
- Add more todo things.
- ~~Add ability to add to specific user.~~
- ~~Add search function for users.~~
- ~~AddToCart~~
- ~~Add who it's made by and stuff on bottom.. Might be nice for people to visit and know it's made by me.~~

## Long Term Goals
- Make all of the information blocked unless you have the information to sign in with.
  - Will allow users to sign in. If they are admin, can do adding to cart things. If they're just a regular user, can only view their cart.
- Finish the Food section
- Throw it all in AWS
- Localization

## Difficulties and things learned.

Wrapping my head around multiple stores applying to each other.

I really wasn't sure how I should structure the data for either users or the items information, so I will definitely need to learn some stuff on databases to get a better feel for them.

## Bugs

- ~~Pressing "Add all to Cart" button while cart is empty but user is chosen will run the functions - shouldn't do anything. (Actually the button disappears if there is items in cart, but it should probably not do anything if cart is empty anyway.)~~
- ~~If you add items to the cart, then select a user, then select another item, the cart is reset.~~
- ~~If you add items to cart, select a new user, then try to delete an item from cart, you get an error.~~

## Thanks
Also thanks to everyone in the Reactiflux discord chat who helped.