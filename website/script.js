
window.addEventListener('load', 
fetch("http://localhost:5005/getdata", {
    method: "POST"
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
)