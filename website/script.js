window.addEventListener('load', 
fetch("http://localhost:5005/getdata", {
    method: "POST"
})
.then((response) => response.json())
.then((data) => {
    console.log(data.data.sort((a, b) => parseFloat(a.footprint) - parseFloat(b.footprint)));
    function getTH(){
        const column = Object.keys(data.data[0]);
        const head = document.querySelector('thead');
        let tags = "<tr>";
        for( i = 1; i < column.length-1; i++){
            tags += `<th>${column[i]}</th>`;
        }
        tags += "</tr"
        head.innerHTML = tags;
        getTD()
    }

    function getTD(){
        const body = document.querySelector("tbody");
        let tags = "";
        data.data.map( d=> {
            tags += `<tr>
                <td>${d.domain}</td>
                <td>${d.footprint}</td>
                <td>${d.green}</td>
                </tr>`
        })
        body.innerHTML = tags;
    }

    getTH();
})
)

