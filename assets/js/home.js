// Movie Database Table
var obj = JSON.parse(localStorage.getItem('MovieList'));
if (obj === null) {
    obj = [];
}
var movieDb = $("<div>").attr({"id": "cardBlur", "style" :"width:100%;"});
$(".movieInfo").append(movieDb);
for (var i = 0; i < obj.length; i++) {
 var titleID = obj[i]["titleID"];
  var titleCard = "<div class=\"card cardBlur\" style=\"width: 16rem;display:inline-block;\"><img class=\"card-img-top\" src=\"./assets/img/main-page/" + obj[i]["titleImage"] + "\" alt=\"Card image cap\"><div class=\"card-body\" ><h5 class=\"card-title\" style=\"font-weight:700;color: rgba(255, 255, 255, 0.623);\">" +obj[i]["title"]+ "</h5><p class=\"card-text\" style=\"color: white;\">"+obj[i]["description"]+"</p> <p class=\"card-text\" style=\"color: white;\">"+obj[i]["genre"]+ "-" + obj[i]["language"] + "</p> <p class=\"card-text\" style=\"color: white;\">"+obj[i]["rating"]+"</p></div><div class=\"card-footer\"><small class=\"text\" style=\"color: whitesmoke;\">"+obj[i]["dateAdded"]+"</small></div></div> ";


    // $("#mytable").append(tr + td1 + td2 + td3 + td4 + td5 + td6 + td7);
    $("#cardBlur").append(titleCard);

}

