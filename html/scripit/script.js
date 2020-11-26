//my api key

var apikey  = {
    key: '6c52d152-dfe4-4877-9384-1b8f8533ac4c'

}

// Get fetch requisicion
fetch('https://pro.coinmarketcap.com/account' + apikey.key)
.then((response) => {
    if (!response.ok) throw new Error('Erro ao exeutar a requisição, status' + response.status);
    return response.json();
})

.then((api) =>{
    var texto = "";

    for (let i = 0; i < 10; i++){
        
        texto = texto + `
        
        <div class = "media">
        <img src 
        
        `
        
    }

})
.catch((error) =>{
    console.error(error.message);
});