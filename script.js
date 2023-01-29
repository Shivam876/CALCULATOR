let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

// ---------------------------------------------------------------------
// let string = "";
// let commands = document.querySelectorAll('.sol');
// Array.from(commands).forEach((sol)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })

// let string = "";
// let equal = document.querySelectorAll('.equal');
// Array.from(equal).forEach((equal)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })

let stn = "";
let clear = document.querySelectorAll('.clear');
Array.from(clear).forEach((clear)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      stn = eval(stn);
      document.querySelector('input').value = stn;
    }
    else if(e.target.innerHTML == 'C'){
      stn = ""
      document.querySelector('input').value = stn;
    }
    else{ 
    console.log(e.target)
    stn = stn + e.target.innerHTML;
    document.querySelector('input').value = stn;
      }
  })
})