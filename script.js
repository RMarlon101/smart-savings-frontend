const axios = require('axios');
const cheerio = require('cheerio');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const websites = [
  'https://www.amazon.com/ref=nav_logo',
  'https://www.bestbuy.com/',
  'https://www.walmart.com/'
];
Promise.all(websites.map(url => axios.get(url)))
  .then(responses => {
    rl.question('Enter item name: ', itemName => {
      responses.forEach((response, index) => {
        const $ = cheerio.load(response.data);
        const productContainers = $('.product-container');

        console.log(`Products from ${websites[index]}:`);
        productContainers.each((i, element) => {
          const productName = $(element).find('.product-name').text();
          const productPrice = $(element).find('.product-price').text();
          const productUrl = $(element).find('a.product-link').attr('href');

          if (productName.toLowerCase().includes(itemName.toLowerCase())) {
            console.log(`- ${productName}`);
            console.log(`  Price: ${productPrice}`);
            console.log(`  URL: ${productUrl}`);
            console.log();
          }
        });
        console.log('\n');
      });

      rl.close();
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

