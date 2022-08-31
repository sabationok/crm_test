//  ! масив обєктів аля з бази даних
let productsArray = [
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
  {
    sku: 'v002-g0217-art1645265',
    name: 'Сукня рожева, шовкова',
    brand: 'Alureee',
    section: 'Одяг',
    category: 'Жінкам',
    subCategory: 'Сукні',
    price: '2150UAH',
    commision: '35',
    stock: '15',
    manufacturyTime: '---',
    col11: '---',
    col12: '---',
    col13: '---',
  },
];

const productsBlock = document.querySelector('.block.--products ');
console.log(productsBlock);
const productsOverflow = document.querySelector('.--products .block__overflow');
console.log(productsOverflow);
const productsTable = document.querySelector('.table.--products .tbody');
console.log(productsTable);

const createTableRowProduct = ({
  sku = '---',
  name = '---',
  brand = '---',
  section = '---',
  category = '---',
  subCategory = '---',
  price = '---',
  commision = '---',
  stock = '---',
  manufacturyTime = '---',
  col11 = '---',
  col12 = '---',
  col13 = '---',
  ...others
} = {}) => {
  return `
  <tr class="row">
    <td class="col --1" data-tittle="sku">${sku}</td>
    <td class="col --2" data-tittle="name">${name}</td>
    <td class="col --3" data-tittle="brand">${brand}</td>
    <td class="col --4" data-tittle="section">${section}</td>
    <td class="col --5" data-tittle="category">${category}</td>
    <td class="col --6" data-tittle="subCategory">${subCategory}</td>
    <td class="col --7" data-tittle="price">${price}</td>
    <td class="col --8" data-tittle="commision">${commision}</td>
    <td class="col --9" data-tittle="stock">${stock}</td>
    <td class="col --10" data-tittle="manufacturyTime">${manufacturyTime}</td>
    <td class="col --11" data-tittle="">${col11}</td>
    <td class="col --12" data-tittle="">${col12}</td>
    <td class="col --13" data-tittle="">${col13}</td>
  </tr>`;
};

const productsTableRowsArray = productsArray.map((el, idx, arr) => {
  return createTableRowProduct(el);
});

console.log(productsTableRowsArray);
console.log(productsTableRowsArray.join(''));

// Вставка елементів на сторінку
// galleryListEl.innerHTML = galleryCardsArr.join('');
productsTable.insertAdjacentHTML('afterbegin', productsTableRowsArray.join(''));
