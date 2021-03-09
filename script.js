class Main
{
    constructor() {
        this.fillingFields("gbpInput","plnInput");
        this.fillingFields("plnInput","gbpInput");
        this.getJSONFromUrl();
    }
    
    getJSONFromUrl()
    {
        let data = fetch("http://localhost:3000/rate", {
            method: 'GET', //*GET, POST, PUT, DELETE, etc.
            mode: 'cors', //no-cors, *cors, same-origin
            cache: 'no-cache', //*default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', //include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000/'
                //'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Http error: ${res.status}`);
            }
        })
        .catch(error => console.log("Błąd: ", error));
        console.log(data);
    }

    fillingFields(toConv, conv)
    {
        let toConvert = document.getElementById(toConv);
        let converted = document.getElementById(conv);

        toConvert.onchange = () =>
        {
            converted.value = toConvert.value;
        }
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    new Main();
});