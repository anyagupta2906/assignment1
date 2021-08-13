function move(value) {
    var step = 50;
    switch (value) {
        case "up":
            var a = document.getElementById('id').offsetTop;
            a = a - step;
            document.getElementById('id').style.top = a + 'px';
            break;
        case "down":
            var b = document.getElementById('id').offsetTop;
            b = b + step;
            document.getElementById('id').style.top = b + 'px';
            break;
        case "left":
            var c = document.getElementById('id').offsetLeft;
            c = c - step;
            document.getElementById('id').style.left = c + 'px';
            break;
        case "right":
            var d = document.getElementById('id').offsetLeft;
            d = d + step;
            document.getElementById('id').style.left = d + 'px';
            break;
    }
}
var dragElement;

function dragBox(id) {
    var element = document.getElementById('id');
    element.style.position = "absolute";
    element.onmousedown = function () {
        dragElement = element;
    }
}
document.onmouseup = function(e){
    dragElement = null;
}

document.onmousemove = function (e) {
    var x = e.pageX;
    var y = e.pageY;

    dragElement.style.left = x + "px";
    dragElement.style.top = y + "px";
}
