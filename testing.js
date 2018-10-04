console.log(kddjdj);
var fjfjfj = [];


function submitFiles() {
  fjfjfj = document.getElementById("file_select").files;
}

function teee() {
  if(fjfjfj.length !== 0) {
    var temp = new FileReader();
    temp.readAsText(fjfjfj[0]);
  }
  setTimeout(teee, 1);
}
