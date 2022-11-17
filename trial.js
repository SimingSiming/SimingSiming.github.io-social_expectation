function setup() {
    createCanvas(400,400);
}

function darling(){
    let x = 100;
    return x;
} 


function draw(x){
    background(220);
    x = darling();
    ellipse(x, mouseY ,100);
}