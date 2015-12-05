var database;

onload = init;
onunload = dbClose;

function init() {
  document.getElementById("txtPrefCd").onblur = function (){blur(this);}
  document.getElementById("txtPrefCd").onfocus = function (){focus(this);}
  document.getElementById("txtPrefName").onblur = function (){blur(this);}
  document.getElementById("txtPrefName").onfocus = function (){focus(this);}
  document.getElementById("btnInsert").onclick = function (){insert();}

  dbConnect();
  dataDisp();
}

function TopPageLink{
	var link = document.getElementById("TopPage");
	link.href="Index.html";
}