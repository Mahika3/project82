canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty"
var last_position_of_x,last_position_of_y;

color="pink";
line_Width=2;

canvas.addEventListener("mousedown", my_mousedown );
function my_mousedown(e) {
   mouseEvent="mouseDown";
   color= document.getElementById("color").value;
   width= document.getElementById("width").value;
   radius= document.getElementById("radius").value;
}

canvas.addEventListener("mouseup", my_mouseup );
function my_mouseup(e) {
   mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave );
function my_mouseleave(e) {
   mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove );
function my_mousemove(e) {
   current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
   current_position_of_mouse_y=e.clientY-canvas.offsetTop;

   if (mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
    ctx.stroke();


   }
}