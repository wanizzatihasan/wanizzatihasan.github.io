var ref;
var docTitle;
var docDate;
var docChecklist = new Array();
function setDocInfo(titleFrom,dateFrom){
    docTitle = titleFrom;
    docDate = dateFrom;
    localStorage.setItem("docTitle", docTitle);
    localStorage.setItem("docDate", docDate);

    // console.log("document tittle " +docTitle);
    // console.log("document Date " +docDate);
}

function getDocTitle(){
    docTitle = localStorage.getItem("docTitle");
    // console.log("docTitle = " +docTitle);
    return docTitle;
}

function getDocDate(){
    docDate = localStorage.getItem("docDate");
    // console.log("docDate = " +docDate);
    return docDate;
}
