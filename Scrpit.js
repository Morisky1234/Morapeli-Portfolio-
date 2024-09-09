var index = 1;
var Box1 = document.getElementById("Box1");
var Box2 = document.getElementById("Box2");
var Box3 = document.getElementById("Box3");
var Box4 = document.getElementById("Box4");
var ButtonL = document.getElementById("Left");
var ButtonR = document.getElementById("Right");
ButtonL.onclick = function ClickedL(){
    index -= 1;
    if( index <1){
        index = 1
    }
    console.log(index);
    switch (index){
        case 1:
            Box2.style = "Display: none;";
            Box1.style = "Display: flex;";
            
            break;
        case 2:
            Box3.style = "Display: none;";
            Box2.style = "Display: flex;";
            break;
        
        case 3:
            Box4.style = "Display: none;";
            Box3.style = "Display: flex;";
            break;
    }
    
}

ButtonR.onclick = function ClickedR(){
    index +=1;

    switch (index){
        case 2:
            Box1.style = "Display: none;";
            Box2.style = "Display: flex;";
            break;
        
        case 3:
            Box2.style = "Display: none;";
            Box3.style = "Display: flex;";
            break;
        case 4:
            Box3.style = "Display: none;";
            Box4.style = "Display: flex;";
            break;
    }
    if( index >4){
        index = 4;
    }
    console.log(index);
    
}