// Write your TypeScript code here
// Define the Product interface
interface Product {
  id: number
  name: string
  price: number
  category: string
  inStock: boolean
  description?: string
}

// Implement the displayProductInfo function
const displayProductInfo = (product: Product): void => {
  const stockStatus = product.inStock ? 'In Stock' : 'Out of Stock'

  console.log(`Product: ${product.name}`)
  console.log(`Price: ${product.price}`)
  console.log(`Category: ${product.category}`)

  // Only log the description line if product.description actually exists
  if (product.description) {
    console.log(`Description: ${product.description}`)
  }

  console.log(`Availability: ${stockStatus}\n`)
}

// Create product objects using the interface
const laptop: Product = {
  id: 1,
  name: 'Laptop Pro',
  price: 1299.99,
  category: 'Electronics',
  inStock: true,
  description: 'Powerful laptop with 16GB RAM and 512 GB SSD',
}

const headphones: Product = {
  id: 2,
  name: 'Wireless Headphones',
  price: 99.99,
  category: 'Audio',
  inStock: false,
}

// Call the displayProductInfo function for each product
displayProductInfo(laptop)

displayProductInfo(headphones)
