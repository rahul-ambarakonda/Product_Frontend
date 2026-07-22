/**
 * Test Suite for Product Data (src/data/products.ts)
 *
 * This suite focuses on verifying the structure and content of the mock product data.
 *
 * As no specific testing framework (e.g., Jest, Vitest) is detected in package.json,
 * these tests are conceptual and use plain JavaScript assertions.
 */

import { products } from './products';

// --- Tests ---

/**
 * Test case: The 'products' array should exist and be an array.
 */
function testProductsArrayExistsAndIsArray() {
  if (typeof products === 'undefined') {
    throw new Error("Assertion Failed: 'products' array is undefined.");
  }
  if (!Array.isArray(products)) {
    throw new Error("Assertion Failed: 'products' is not an array.");
  }
  console.log("Test Passed: 'products' array exists and is an array.");
}

/**
 * Test case: The 'products' array should contain at least 6 products.
 */
function testProductsArrayHasMinimumProducts() {
  const minProducts = 6;
  if (products.length < minProducts) {
    throw new Error(`Assertion Failed: 'products' array has ${products.length} products, expected at least ${minProducts}.`);
  }
  console.log(`Test Passed: 'products' array contains at least ${minProducts} products.`);
}

/**
 * Test case: Each product object should have the correct properties.
 *
 * Verifies that each product has 'id', 'name', 'description', 'price', and 'imageUrl'
 * with the expected data types.
 */
function testEachProductHasCorrectProperties() {
  products.forEach((product, index) => {
    if (typeof product.id !== 'string') {
      throw new Error(`Assertion Failed: Product at index ${index} has invalid 'id' type. Expected string, got ${typeof product.id}.`);
    }
    if (typeof product.name !== 'string') {
      throw new Error(`Assertion Failed: Product at index ${index} has invalid 'name' type. Expected string, got ${typeof product.name}.`);
    }
    if (typeof product.description !== 'string') {
      throw new Error(`Assertion Failed: Product at index ${index} has invalid 'description' type. Expected string, got ${typeof product.description}.`);
    }
    if (typeof product.price !== 'number') {
      throw new Error(`Assertion Failed: Product at index ${index} has invalid 'price' type. Expected number, got ${typeof product.price}.`);
    }
    if (typeof product.imageUrl !== 'string') {
      throw new Error(`Assertion Failed: Product at index ${index} has invalid 'imageUrl' type. Expected string, got ${typeof product.imageUrl}.`);
    }
  });
  console.log("Test Passed: All products have correct properties and types.");
}

/**
 * Test case: Each product should have a non-empty name, description, and imageUrl.
 */
function testProductPropertiesAreNotEmpty() {
  products.forEach((product, index) => {
    if (!product.name.trim()) {
      throw new Error(`Assertion Failed: Product at index ${index} has an empty 'name'.`);
    }
    if (!product.description.trim()) {
      throw new Error(`Assertion Failed: Product at index ${index} has an empty 'description'.`);
    }
    if (!product.imageUrl.trim()) {
      throw new Error(`Assertion Failed: Product at index ${index} has an empty 'imageUrl'.`);
    }
  });
  console.log("Test Passed: All product properties (name, description, imageUrl) are not empty.");
}


// --- Execute Tests ---
// try {
//   testProductsArrayExistsAndIsArray();
//   testProductsArrayHasMinimumProducts();
//   testEachProductHasCorrectProperties();
//   testProductPropertiesAreNotEmpty();
//   console.log("\nAll conceptual product data tests passed!");
// } catch (error: any) {
//   console.error("\nConceptual product data tests failed:", error.message);
// }
