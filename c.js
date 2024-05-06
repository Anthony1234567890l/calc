const d1 = 0
const x1 = document.querySelectorAll("#digits-1, #digits-2, #digits-3, #digits-4, #digits-5, #digits-6, #digits-7, #digits-8, #digits-9, #digits-0");
x1.onclick = () => alert(1);
x1.onclick = () => d1 = 1 ;

const dopteror = 0
const x1 = document.querySelectorAll("#plus, #multiply, #minus, ");
x1.onclick = () => alert(1);
x1.onclick = () => d1 = 1 ;

var arr = ["#digits-0", "#digits-1", "#digits-2", "#digits-3", "#digits-4", "#digits-5", "#digits-6", "#digits-7", "#digits-8", "#digits-9",];
for(var i = 0; i <= 9; i++){
  arr[i].onclick = () => alert(i)
}



