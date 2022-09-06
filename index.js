// code your solution here

/* let saturdayFun = function (activity= 'roller-skate'){
    return  `This Saturday, I want to ${activity}!`
}
*/ 

function saturdayFun(activity='roller-skate'){
  return  `This Saturday, I want to ${activity}!`
}
saturdayFun();
saturdayFun("bathe my dog");
 
 
 
let mondayWork = function(activity="go to the office") {
 
    return `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork("work from home");

 
let wrapAdjective = function(style="*") {
 
    return function(adjective="special") {
 
      return `You are ${style}${adjective}${style}!`;
 
    } 
}

/*function wrapAdjective(style='||'){
   return function (adjective= 'special'){
     return `You are ${style}${adjective}${style}!`
   }
}
*/


