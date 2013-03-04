function checkListItem(text, color){
	this.text = text;
	this.color = color;
	this.checked = 0;
};

var i = 0;
var filterState = 0;


function processForm() {

    i++;
    var listItem = document.myCheckListForm.checklistItem.value;
	
	
	var listed = '<div id="item' + i + '" class="well"><input type="checkbox" onclick="crossedOut(this, \'item'+ i + '\')" />' + listItem + '</div>';

	document.getElementById("checkList").innerHTML += listed;
	document.myCheckListForm.reset();
}

function crossedOut(check, item) {
	if(check.checked == true){
		document.getElementById(item).className = "checked-off well";
	} else {
		document.getElementById(item).className = "unchecked well";
	}
}

dataList.sort(function(a,b){
  a = new Date(a.date);
  b = new Date(b.date);
  return a<b?-1:a>b?1:0;
});