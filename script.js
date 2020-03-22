let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(this.responseText);
        let obj = data;
        let arr = ["bg-primary","bg-danger","bg-secondary","bg-success","bg-danger","bg-info","bg-dark"]
        $.each(obj, function(i, data){
            let results = data["attributes"];
            let colors = arr[Math.floor(Math.random() * arr.length)];

            $('#data-covid').append(`
            <div class="col-md-4">
                <div class="card text-white text-center shadow `+colors+`  mt-5 mb-3"">
                    <div class="card-header font-weight-bold">`+results["Country_Region"]+`</div>
                    <div class="card-body text-left">
                        <p class="card-text font-weight-bold">🤕Confirmed  : `+addCommas(results["Confirmed"])+`</p>
                        <p class="card-text font-weight-bold">☠Deaths     : `+addCommas(results["Deaths"])+`</p>
                        <p class="card-text font-weight-bold">😘Recovered  : `+addCommas(results["Recovered"])+`</p>
                    </div>
                </div>
            </div>`);
        });
    }
}
        
xhr.open('GET', 'https://api.kawalcorona.com/', true);
xhr.send();


function addCommas(nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

