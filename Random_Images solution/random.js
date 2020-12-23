document.getElementById('randomize').addEventListener("click", function () {
    var img = document.createElement('img');
    img.src = "https://source.unsplash.com/random";
    document.getElementById('randomize').appendChild(img);

});

