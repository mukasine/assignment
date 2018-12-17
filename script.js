function myFunction(){
    var a=parseInt(document.getElementById("one").value);
    var b=parseInt(document.getElementById("two").value);
    var c=parseInt(document.getElementById("three").value);
    var text;
    var array =[a,b,c];
    //if for entering positive value with 3side
    if (a <= 0 || b<=0  ||c<=0){
        text= "A triangle must have 3 sides with positive definate length!";
    }
  //if for not a triangle
  else if (
    (a + b <= c &&
        b + a <= c) ||
    (a + c<= b &&
        c+ a<= b) ||
    (b + c <= a&& c+ b <= a)
) {
    text = " Not a Triangle";

}

//if triangle is equilateral
else if (
    a === b&&
    b === c &&
    c=== a
) {
    text = " equilateral.";
}

//if triangle is isosceles
else if (
    a=== b ||
    b === c ||
    c=== a
) {
    text = " isosceles.";
}
//if triangle is scalene
else if (
    a!== b &&

    a !== c &&

    b !== c
) {
    text = " scalene";
}
//if triangle is error
else {
    text = " error";
}
document.getElementById("demo").innerHTML = "the values you enter are:" + " [" + array.join() + "]" + "<br> The triangle formed is";
document.getElementById("demo").innerHTML += text.toUpperCase();
} 
