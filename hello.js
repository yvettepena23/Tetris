function setup()
{
    createCanvas(600, 150);   
}

function draw()
{
    drawI(); 
    drawO();
    drawS();
    drawL();
    drawZ();
    drawJ();
}

function drawI()
{
    beginShape();
    vertex(150, 20);
    vertex(170, 20);
    vertex(170, 100);
    vertex(150,100);
    fill("blue");
    endShape(CLOSE);
    
    line(150, 40, 170, 40);
    line(150, 60, 170, 60);
    line(150, 80, 170, 80);
}

function drawO()
{
    beginShape();
    vertex(30, 20);
    vertex(70, 20);
    vertex(70, 60);
    vertex(30, 60);
    fill("yellow");
    endShape(CLOSE);
    
    line(50, 20, 50, 60);
    line(30, 40, 70, 40);  
}

function drawS()
{
    beginShape();
    vertex(310, 20);
    vertex(350, 20);
    vertex(350, 40);
    vertex(330, 40);
    vertex(330, 60);
    vertex(290, 60);
    vertex(290, 40);
    vertex(310, 40);
    fill("red");
    endShape(CLOSE);
    
    line(330, 20, 330, 40);
    line(310, 40, 330, 40);
    line(310, 40, 310, 60);
}

function drawL()
{
    beginShape();
    vertex(220, 20);
    vertex(240, 20);
    vertex(240, 60);
    vertex(260, 60);
    vertex(260, 80);
    vertex(220, 80);
    fill("orange");
    endShape(CLOSE);
    
    line(220, 40, 240, 40);
    line(220, 60, 240, 60);
    line(240, 60, 240, 80);
}

function drawZ()
{
    beginShape();
    vertex(390, 20);
    vertex(430, 20);
    vertex(430, 40);
    vertex(450, 40);
    vertex(450, 60);
    vertex(410, 60);
    vertex(410, 40);
    vertex(390, 40);
    fill("green");
    endShape(CLOSE);
    
    line(410, 20, 410, 40);
    line(410, 40, 430, 40);
    line(430, 40, 430, 60);
}

function drawJ() 
{
    beginShape();
    vertex(500, 20);
    vertex(520, 20);
    vertex(520, 60);
    vertex(540, 60);
    vertex(540, 80);
    vertex(500, 80);
    fill("pink");
    endShape(CLOSE);
    
    line(500, 40, 520, 40);
    line(500, 60, 520, 60);
    line(520, 60, 520, 80);

}