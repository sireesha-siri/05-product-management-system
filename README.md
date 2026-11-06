Let's practice using TypeScript interfaces by creating a simple product management system.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Compile the TypeScript code using `npx tsc`
- Run the compiled code using `node dist/index.js`
</details>

### Functionality

<details>
<summary>Core Functionality</summary>
<br/>

- Create a `Product` interface with:

  - `id` property (number)
  - `name` property (string)
  - `price` property (number)
  - `category` property (string)
  - `inStock` property (boolean)
  - `Optional` description property (string)

- Implement a `displayProductInfo` function that:

  - Takes a `Product` object as a parameter

  - Logs the product information in a readable format
  - Includes a message about whether the product is in stock
  - Only displays the description if it exists (use conditional check)
  - Uses a ternary operator to display "In Stock" or "Out of Stock" based on the inStock property

- Create at least two product objects that implement the interface

  - One with a description
  - One without a description

- Display information for both products using the function

  </details>

<details>

<summary>Example</summary>

```
// Creating products using the interface
const laptop: Product = {
  id: 1,
  name: "Laptop Pro",
  price: 1299.99,
  category: "Electronics",
  inStock: true,
  description: "Powerful laptop with 16GB RAM and 512GB SSD"
};

const headphones: Product = {
  id: 2,
  name: "Wireless Headphones",
  price: 99.99,
  category: "Audio",
  inStock: false
};

// Display product information
displayProductInfo(laptop);
// Output: 
// Product: Laptop Pro
// Price: $1299.99
// Category: Electronics
// Description: Powerful laptop with 16GB RAM and 512GB SSD
// Availability: In Stock

displayProductInfo(headphones);
// Output:
// Product: Wireless Headphones
// Price: $99.99
// Category: Audio
// Availability: Out of Stock


```

</details>

> ### _Things to Keep in Mind_

> - All components you implement should go in the `src/index.js` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Make sure you add appropriate TypeScript type annotations.
> - Use the interface to define the structure of product objects
> - Handle the optional description property correctly
> - Format the output to show different messages based on product availability

