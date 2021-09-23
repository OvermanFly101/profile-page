console.log("page loaded...");

function nameChange(){
  var name = document.getElementById("given_name")
  name.innerText = "Amy Pond";
}

var choose = [document.querySelector("#todd"), document.querySelector("#phil")];
function decline(id){
  choose[id].remove();
}

function accept(id){
  choose[id].style.display = 'none';
  var switchIt = document.querySelector("#new_parent");
  var confirmed = choose[id];
  switchIt.append(confirmed);
}