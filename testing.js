console.log(kddjdj);
var fjfjfj = [];
var reader = new FileReader();

function submitFiles() {
  fjfjfj = document.getElementById("file_select").files;
  document.getElementById("results").textContent = reader.results;
}

function teee() {
  if(fjfjfj.length !== 0) {
    reader.readAsText(fjfjfj[0]);
  }
  
  
  setTimeout(teee, 1);
}
