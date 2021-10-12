// swith case for grading system
var result = 80;

switch(true){
    case result >= 80:
         document.getElementById("one").innerHTML = "student got A+"; 
         break;
         
    case result >= 70:
        document.getElementById("one").innerHTML = "student got A"; 
        break;
        
    case result >=60:
        document.getElementById("one").innerHTML = "student got A-"; 
        break;
        
    case result >= 50:
        document.getElementById("one").innerHTML = "student got B"; 
        break;
        
    case result >= 40:
        document.getElementById("one").innerHTML = "student got C";
        break;
        
    case result >=33:
        document.getElementById("one").innerHTML = "student got D";
        break;

    default:
       document.getElementById("one").innerHTML = "Failed & Best Luck for Next Year";  
}