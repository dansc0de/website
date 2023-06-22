let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api64.ipify.org?format=json")
xhr.send()

xhr.onload = function() {
    if (xhr.status == 200) { // POST IP to API Gateway
        console.log(`Loaded: ${xhr.status} ${xhr.response}`);
    }
};

