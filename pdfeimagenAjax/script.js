let imagen = document.getElementById("imagen");
imagen.addEventListener("click", () => {
    fetch("/" + "garfield.jpg")
    .then(response => response.blob())
    .then(images => {
    let outside = URL.createObjectURL(images)
    let image = document.createElement("img");
    image.setAttribute("src", outside);
    image.setAttribute("width", "200px");
    image.setAttribute("height", "auto");
    document.body.appendChild(image);
  })
})

let pdf = document.getElementById("pdf");
pdf.addEventListener("click", () => {
    fetch("pdf.pdf")
    .then(response=> response.blob())
    .then(pdf => {
        let salida = URL.createObjectURL(pdf);
        let embed = document.createElement("embed");
        embed.setAttribute("src", salida);
        embed.setAttribute("width", "500px");
        embed.setAttribute("height", "500px");
        document.body.appendChild(embed);
    })
})



/*    <embed src="http://localhost/pdf.pdf" width="500" height="375">
*/