let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(this.responseText);
        let obj = data;
        let arr = ["bg-primary","bg-danger","bg-secondary","bg-success","bg-danger","bg-info","bg-dark"]
        $.each(obj, function(i, data){
            let results = data["attributes"];
            let colors = arr[Math.floor(Math.random() * arr.length)];

            $('#data-covid').append(`<div class="col-row">
            <div class="card text-white text-center shadow `+colors+`  mt-5 mb-3"">
                <div class="card-header font-weight-bold">`+results["Country_Region"]+`</div>
                <div class="card-body">
                    <p class="card-text font-weight-bold">Confirmed  : `+results["Confirmed"]+`</p>
                    <p class="card-text font-weight-bold">Deaths     : `+results["Deaths"]+`</p>
                    <p class="card-text font-weight-bold">Recovered  : `+results["Recovered"]+`</p>
                </div>
            </div>
        </div>`);
        i++
        });
    }
}
xhr.open('GET', 'https://api.kawalcorona.com/', true);
xhr.send();

