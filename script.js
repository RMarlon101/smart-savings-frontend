const axios = require('axios');
const cheerio = require('cheerio');

const rl = readline.createInterface({
  input: process.stdin,
  output:proecrss.stdout
});

const websites =  [
  'https://www.amazon.com/ref=nav_logo',
  'https://www.bestbuy.com/',
  'https://www.walmart.com/'
];

   console.log(`Products from ${websites[index]} (${itemCategories[index]}):`);
      productContainers.each((i, element) => {
        const productName = $(element).find('.product-name').text();
        const productPrice = $(element).find('.product-price').text();
        const productUrl = $(element).find('a.product-link').attr('href');
        
        console.log(`- ${productName}`);
        console.log(`  Price: ${productPrice}`);
        console.log(`  URL: ${productUrl}`);
        console.log();
      });
      console.log('\n');
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
