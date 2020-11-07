/**
 * sent arr will be updated in html
 */
function display(obj) {
    $(".movieInfo").empty();
    for (var i = 0; i < obj.length; i++) {
        var titleID = obj[i]["titleID"];
        var titleCard = `
<div class="card cardBlur" style="width: 16rem;display:inline-block;">
    <img class="card-img-top" src="${"./assets/img/main-page/" + obj[i]["titleImage"]}" alt="Card image cap">
    <div class="card-body" >
        <h5 class="card-title" style="font-weight:700;color: rgba(255, 255, 255, 0.623);">${obj[i]["title"]}</h5>
        <p class="card-text" style="color: white;">${obj[i]["description"]}</p> 
        <p class="card-text" style="color: white;"> ${obj[i]["genre"]+ "-" + obj[i]["language"]}</p>
        <p class="card-text" style="color: white;">${obj[i]["rating"]}</p>
    </div>
    <div class="card-footer">
        <small class="text" style="color: whitesmoke;">${obj[i]["dateAdded"]}</small>
    </div>
</div>
`;
        var movieDb = $("<div>").attr({
            "id": "cardBlur",
            "style": "width:100%;"
        });
        $(".movieInfo").append(titleCard);
    }
}


// Movie Database Table
var obj = JSON.parse(localStorage.getItem('MovieList'));
if (obj === null) {
    obj = [];
}
display(obj);

function filterByGenre(arr, genre) {
    return arr.filter(MovieList => MovieList.genre === genre);
}


function filterByLang(arr, language) {
    return arr.filter(MovieList => MovieList.language === language);
}
function filterLangBtn(language) {
    var filteredLangArray = [...obj];
    filteredLangArray = filterByLang(filteredLangArray, language);
    display(filteredLangArray);
    console.log(filteredLangArray);
    showClearButton(true);
}

function filterGenreBtn(genre) {
    var filteredGenreArray = [...obj];
    filteredGenreArray = filterByGenre(filteredGenreArray, genre);
    display(filteredGenreArray);
    console.log(filteredGenreArray);
    showClearButton(true);
}

//Filter
function homeInit(){
    if($("#genreBtnContainer").children().length > 1 ){
        return;
    }

    if($("#languageBtnContainer").children().length > 1 ){
        return ;
    }

  let genres = ["Action", "Adventure", "Drama", "Horror"];

    for (let i = 0; i < genres.length; i++) {
        let aTag = `
    <a style="display: inline-block;" onclick="filterGenreBtn('${genres[i]}')">${genres[i]}</a>
    `;
        $("#genreBtnContainer").append(aTag);
        
    }
  
  let  languages =  ["Arabic","English","Hindi","Tamil"];


    for (let i = 0; i < languages.length; i++) {
        let aTag = `
    <a style="display: inline-block;" onclick="filterLangBtn('${languages[i]}')">${languages[i]}</a>
    `;
        $("#languageBtnContainer").append(aTag);
    }


}
     
homeInit();

//Clear
function showClearButton(doShow) {
    let clrButton = document.getElementById('clrButton');
    clrButton.hidden = !doShow;
}

//Sort


function sortByRating(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;
        return 0;
    }
}

function sortByDate(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;
        return 0;
    }
}

function ratingSort() {
    var sortedRatingArray = [...obj];
    sortedRatingArray.sort(sortByRating("rating"));
    display(sortedRatingArray);
    showClearButton(true);
}

function recentSort() {
    var sortedDateArray = [...obj];
    sortedDateArray.sort(sortByDate("dateAdded"));
    display(sortedDateArray);
    showClearButton(true);
}

function clearButton() {
    display(obj);
    showClearButton(false);
}

function signOut() {
    localStorage.removeItem("currentUser");
}