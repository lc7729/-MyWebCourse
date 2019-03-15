function init() {
    let canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.rect(0, 0, 100, 100);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(325, 175);
    ctx.lineTo(325, 125);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();

    //ctx.beginPath();
    ctx.arc(200, 400, 50, 0, Math.PI, false);
    ctx.fillStyle = 'navy';
    ctx.fill();
    //ctx.closePath();
}