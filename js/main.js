// SELECT ELEMENTS
const disclaimer = document.querySelector('.disclaimer');
const eur = document.querySelector('.eur');
const usd = document.querySelector('.usd');
const updated = document.querySelector('.updated');
const bitcoin = document.querySelector('.bitcoin');

// DEFINE URL WHERE TO FETCH DATA
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// DEFINE DIVS INITIAL STATE LOADING...
disclaimer.innerHTML = 'loading...'
updated.innerHTML = 'loading...'
bitcoin.innerHTML = 'loading...'
eur.innerHTML = 'loading...'
usd.innerHTML = 'loading...'


// FETCH BITCOIN PRICE
const fetchDataFn = async ()=>{
    try{
    let bitcoinFetch = await fetch(url);
    let bitcoinPrice = await bitcoinFetch.json();
    // console.log(bitcoinPrice);
    setTimeout(()=>{
        // SET NEW INNER HTML
        disclaimer.innerHTML = bitcoinPrice.disclaimer;
        updated.innerHTML = 'Updated ' + bitcoinPrice.time.updated;
        bitcoin.innerHTML = 'One bitcoin value';
        eur.innerHTML = `<span> ${bitcoinPrice.bpi.EUR.symbol}</span> ${bitcoinPrice.bpi.EUR.rate}`;
        usd.innerHTML = `<span> ${bitcoinPrice.bpi.USD.symbol}</span>  ${bitcoinPrice.bpi.USD.rate}`;
    }, 1000); // SHOW AFTER ONE SECOND
    }catch(error){
        if(error) console.log(error);
    };
};
// Run fetch function ON START
fetchDataFn();

// UPDATE VALUES EVERY 10 SECONDS
setInterval(()=>{
    fetchDataFn();
},10000);