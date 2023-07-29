// if and else if and else
let marks=70
console.log(marks>=70)
console.log(marks>60)
if (marks>=90 && marks<=100) {
    console.log("you have received S grade");
}
else if(marks>=80 && marks>70){
    console.log("you have received A grade");
}
else if(marks>=70 && marks>60) {
    console.log("you have received B grabe ");
}
else if( marks>=60 && marks>50){
    console.log("you have received C grade");
}else if(marks>=50 && marks>40) {
    console.log("you have received D grade");
}
else if(marks>=40 && marks>30){
    console.log("you have received E grade");
}
else{
    console.log("you fail this exam");
}

//switch statement

let food="burger"

switch(food) {
    case "icecream": {
      console.log (" I like icecream");
      break;
    }
    case "pizza": {
        console.log(" I like pizza");
        break;
    }
    case "dosa" : {
        console.log("I like dosa");
        break;
    }
    case "noodles" : {
        console.log(" I like noodles");
        break;
    }
    default : {
        console.log(" I don't like this food");
        break;
    }
}

var array = [1,4,6,7];

console.log(array.length)
// for(initialization, condition, increment/dedcremment){
    
// }

for(let i = 0; i < array.length;i++){
    console.log(i,"i")
    console.log(array[i],"array")
    if(array[i] >5){
        console.log("Big nummber")
    }
}

let sum = 0;
for(let i = 0; i < array.length;i++){
    console.log(i,"i")
    console.log(array[i],"array")
    // sum = sum + array[i]
    if(array[i] >5){
        console.log("Big nummber")
    }
}

 let val =["jamuna","saranya","viji","lakshmi"]
 for (let i=0;i<val.length; i++) {
    console.log(i,"i");
    console.log(val[i],"array");
if ( val[i]=="viji") {
console.log("its me");
}
}

 array=[1,2,3,4,5]
for(let i=0;i<array.length;i++) {
    console.log(i);
    sum=sum+array[i]
}
