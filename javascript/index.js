console.log("react");
console.log("1+2");
console.log("HI  IAM THERE");

let sum =44;
console.log(sum);  

console.log("%s is %d years old.","john",29)

console.log("iam not in a group")

console.log("%c this is yellow text on blue background."," color:yellow; background-color:blue")
console.log(30+20);
console.log( 20.5-12);

let A=20
console.log( "the value of a is A"  +A );

let a=12
    b=20
    c=30
    console.log({a,b,c});

var fullName=" vijayalakshmi"; 
console.log(fullName);   

let x=50,y=25,Z=20+20; 
console.log( "the vale of Z is" +Z);
    
var f=20
if (f<0) {
    console.log("f is less than 0")
}else{
    console.log("f is greater than 0")
}

// find the smallest number

let k=10,j=15
if(j>k){
    console.log(' k is smallest  number',k)
}else{
    console.log('j is smallest number',j)
}

// find the leap year
let l=2018
if(l%4==0){
console.log('l is leap year,')
} else {
    console.log('l is not leap year')
}

// find the person eligible for vote or not

let q=21
if(q>18){
    console.log('q is eligible for vote')
}else{
    console.log('q is not eligible for vote')
}

//if elseif statement

let R=20
if(R>18) {
    console.log("R is eligible for vote")
}
else if (R==18)  {
    console.log("R is eligible for vote");
}else{
    console.log('R is not eligible for vote')
}

// Greatest among 3 numbers


var s=10, b=20, c=30

if(s >b) {
    if(c >s) {
        console.log("C is Greater number");
    } else if (c ==s) {
        console.log("C and s is Greater number")
    } else {
        console.log("s is Greater number")
    }
} else if(b > c) {
     if (b ==c) {
        console.log("B and C is Greater number")
    } else {
        console.log("B is Greater number")
    }
} else if(s== b == c) { console.log("s,b ,C are equal")
} else {
    console.log("C is Greater number")
}

// switch statement
switch(condition) {
    case 1: {
        console.log("")
        break;
    }  case 2: {
        console.log("")
        break;
    }  case 3: {
        console.log("")
        break;
    }  default : {
        console.log("")
        break;
    }
}