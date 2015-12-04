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

//データベースに接続
function dbConnect() {
  database = new ActiveXObject("ADODB.Connection");
  database.Open("Driver={Microsoft Access Driver (*.mdb)}; DBQ=c:\\SampleDB010.mdb;");
  alert("データベースに接続しました。");
}

//データベースを切断
function dbClose() {
  database.Close();
  database = null;
  alert("データベースを切断しました。");
}

function focus(obj){
  obj.style.backgroundColor = "#ffff00";
}

function blur(obj){
  obj.style.backgroundColor = "#ffffff";
}


//データ表示
function dataDisp() {
    var mySql = "select * from T01Prefecture order by PREF_CD";
    var recordSet = database.Execute(mySql);

    var tempHtml="";
    document.getElementById("disp").innerHTML = "";
    while (!recordSet.EOF){
      tempHtml = tempHtml + recordSet(0) + ":" + recordSet(1) + "<br />";
      recordSet.MoveNext();
    }
    document.getElementById("disp").innerHTML = tempHtml;
    recordSet.Close();
    recordSet = null;
}

//データ追加
function insert() {
  with (document.form1) {
    var mySql = "insert into T01Prefecture values(" + Number(txtPrefCd.value) + ",'" + txtPrefName.value + "')";
  }
  alert(mySql);
  database.Execute(mySql);
  dataDisp();
  alert("追加しました。");
}