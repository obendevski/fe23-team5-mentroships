const products = [
  [101, 'Samsung Galaxy S21', 25, 699.99],
  [102, 'Apple MacBook Pro 13', 15, 1299.99],
  [103, 'Sony Headphones WH-1000XM4', 30, 349.99],
  [104, 'Canon EOS Rebel T7 DSLR Camera', 10, 449.99],
  [105, 'Apple iPad Air', 20, 599.99],
  [106, 'Microsoft Surface Laptop 4', 8, 999.99],
  [107, 'JBL Flip 5 Portable Speaker', 35, 119.99],
  [108, 'Apple iPhone 13', 18, 799.99],
  [109, 'Dell XPS 13', 12, 899.99],
  [110, 'Bose QuietComfort Earbuds', 22, 279.99],
];
const headers = ['ID', 'Name', 'Quantity', 'Price'];

// Exercise 01: Create table dynamically based on the dataset

const tableContainer = document.getElementById('tableContainer');
const table = document.createElement('table');
table.setAttribute('class', 'table table-bordered table-dark table-striped');

// Custom function to append a new row
function appendRow(parent, rowData, isHeader = false) {
  const row = document.createElement('tr');
  for (let i = 0; i < rowData.length; i++) {
    const cell = document.createElement(isHeader ? 'th' : 'td');
    cell.innerText = rowData[i];
    row.appendChild(cell);
  }
  parent.appendChild(row);
}

// Create header row
appendRow(table, headers, true);

// Populate table rows
for (let i = 0; i < products.length; i++) {
  appendRow(table, products[i]);
}

tableContainer.appendChild(table);

// Exercise 02: Calculate the revenue of each product by multiplying the quantity and price and adding it to a new column in the table

// Custom function to calculate the product revenue
function calculateProductRevenue(quantity, price) {
  return quantity * price;
}

// Custom function to create and append a cell
function createAndAppendCell(row, text) {
  const cell = document.createElement('td');
  cell.innerText = text;
  row.appendChild(cell);
}

// Custom function to append Product Revenue column
function appendRevenueColumn(table) {
  // Add 'Product Revenue' header to the existing table
  const headerRow = table.querySelector('tr');
  const revenueHeader = document.createElement('th');
  revenueHeader.innerText = 'Product Revenue ($)';
  headerRow.appendChild(revenueHeader);

  // Select all row elements in the table, skipping the first (header) row
  const rows = table.querySelectorAll('tr:not(:first-child)');
  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    const quantity = parseFloat(cells[2].innerText);
    const price = parseFloat(cells[3].innerText);
    const productRevenue = calculateProductRevenue(quantity, price);
    createAndAppendCell(row, `${productRevenue.toFixed(2)} $`);
  });
}

// Call the function to append the product value column
appendRevenueColumn(table);

// Exercise 03: Calculate the total value of all products in the inventory.

function calculateTotalValue(products) {
  let totalValue = 0; // Initialize total value

  for (let i = 0; i < products.length; i++) {
    totalValue += products[i][2] * products[i][3]; // Add product price * quantity to total
  }

  document.getElementById('totalValue').textContent =
    'Total Inventory Value: $' + totalValue.toFixed(2);
}

calculateTotalValue(products);

// Exercise 04: Create a function that filters the products by quantity: show products with quantity more than 10. Modify table to show only the ID and Name column

function createFilteredTable(data, tableId, rowCallback) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  for (let i = 0; i < 2; i++) {
    const headerCell = document.createElement('th');
    headerCell.textContent = headers[i];
    headerRow.appendChild(headerCell);
  }

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  for (let j = 0; j < data.length; j++) {
    const row = document.createElement('tr');

    // Append only ID and Name for each product
    for (let i = 0; i < 2; i++) {
      const cell = document.createElement('td');
      cell.textContent = data[j][i];
      row.appendChild(cell);
    }

    if (rowCallback) {
      rowCallback(row, data[j]); // Apply the callback function to each row
    }

    tbody.appendChild(row);
  }

  table.setAttribute('class', 'table table-bordered table-dark table-striped');
  table.appendChild(tbody);
  document.getElementById(tableId).appendChild(table);
}

function filterProductsByQuantity(products, minQuantity) {
  return products.filter((product) => product[2] >= minQuantity);
}

// Example usage of filter:
let filteredProducts = filterProductsByQuantity(products, 10);
createFilteredTable(filteredProducts, 'filteredTable');

// Exercise 05: Create a custom callback function that highlights rows with ID bigger than 105. Pass this callback function to the function that creates the table

function highlightRows(row, product) {
  // Highlight product rows where the ID is greater than 105, for example
  if (product[0] > 105) {
    row.style.backgroundColor = 'red';
  }
}

// Example usage:
createFilteredTable(filteredProducts, 'highlightedTable', highlightRows);
