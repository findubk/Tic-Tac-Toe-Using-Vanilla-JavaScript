const data=document.querySelectorAll('[data]');
const p=document.querySelectorAll('p');
let player=true;
let winCombinations=[
  ["block1","block2","block3"],
  ["block4","block5","block6"],
  ["block7","block8","block9"],
  ["block1","block4","block7"],
  ["block2","block5","block8"],
  ["block3","block6","block9"],
  ["block1","block5","block9"],
  ["block3","block5","block6"]
]

function turn(element,id){
  if(id=="true"){
  if(player==true){
    element.innerHTML = "X";
  player=false;
  element.id="false";
}else if(player==false){
  element.innerHTML = "O";
  player=true;
  element.id="false";
}
}
}
//block.addEventListener('click',turn);
p.forEach((p) => {
  p.addEventListener('click',(e)=> {
    element=e.target;
    id=element.id;
    //console.log(p.indexOf(element));
    turn(element,id);
});
});
