function main() {
  let a = document.getElementById("n1").value;
  let b = document.getElementById("n2").value;
  i = 0;
  tab = document.getElementById("mtab");
  html = ``;
  if (b > 500) {
    al = alert(`The Tables of ${a} can not be Printed more than 500 `);
    bg5 = true;
  } else {
    bg5 = false;
  }

  if (a>999999999999) {
    ale = alert(`The number for which the Tabel must be printed can not exceed 12 digits  `);
    bg4 = true; 
  }
    else {
    bg4 = false;
  }
  while (i <= b && bg5 == false && bg4 == false) {
    let c = a * i;
    html += `<div id = "tab"><span> ${a} X ${i} = ${c}</span></div> `;
    tab.innerHTML = html;
    i += 1;
  }
}  