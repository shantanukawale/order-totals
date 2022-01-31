# order-totals
Code to find your Swiggy and Zomato spends.

## How to use ?
1. Make sure you have node.js installed.
2. Run `npm i` in the root directory of this repo.
3. Replace the cookie value with your own `cookie`. Instructions to find `cookie` value are given below.
4. Run `node zomatoOrderTotal.js` for Zomato and `node swiggyOrderTotal.js` for Swiggy.

## How to get your cookie ?
1. Login to Zomato or Swiggy on chrome.
2. Open dev tools by right clicking and selecting `Inspect Element`.
3. Go to the Network tab.
4. Click on any API that you see and make sure the url is of the the type `https://www.zomato.com/*` or `https://www.swiggy.com/*`.
5. Go to the `Headers` section of the API and copy the `cookie` value.
6. Replace the `cookie` value in the code with the respective cookies for Swiggy and Zomato.
