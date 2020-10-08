function element() {
  var li = document.createElement("li");
  var input = document.getElementById("taskTitle").value;
  var t = document.createTextNode(input);
  li.appendChild(t);
  if (input === '') {
  alert("Enter task here");
  } 
  else {
document.getElementById("taskList").appendChild(li);
  
  }
  document.getElementById("taskTitle").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}

var nodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodeList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(done) {
  if (done.target.tagName === 'LI') {
  done.target.classList.toggle('completed');
  }
}, 
false);
