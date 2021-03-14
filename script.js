class Main
{
    constructor() {
        this.gettingData();
    }
    
    gettingData()
    {
        fetch("http://localhost:3000/rate", {
            method: 'GET',
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000/'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Http error: ${res.status}`);
            }
        })
        .then(res => {
            let data = res.rates[0].mid;
            console.log(data);
            this.converter("gbpInput","plnInput", data);
            this.converter("plnInput","gbpInput", 1/data);
            document.getElementById("data").innerText = "1 GBP = " + Math.round(data * 100) / 100 + " PLN";
        })
        .catch(error => {console.log("Error: ", error)});
    }

    converter(toConv, conv, data)
    {
        let toConvert = document.getElementById(toConv);
        let converted = document.getElementById(conv);

        toConvert.onchange = () =>
        {
            converted.value = Math.round(toConvert.value * data * 100) / 100;
        }
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    new Main();
});