$(document).ready(function() {
    var searchInput;

    $("#search-button").click(function() { //search when hit submit
        $("#result-list").empty();
        searchInput = encodeURIComponent($("#search-form").val());
        var searchURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";
        $.getJSON(searchURL, function contentGrab(content) {
            var b = content[1].length;
            for (var a = 0; a < b; a++) {
                if (content[2][a] !== "") {
                    $("#result-list").append("<li><a href=" +content[3][a]+ " target='_blank'>" + content[1][a] +"</a><p>"+ content[2][a]);
                }
                else if (content[2][a] == "") {
                    $("#result-list").append("<li><a href=" +content[3][a]+ " target='_blank'>" + content[1][a] +"</a><p>"+ "Description unavailable");
                }
            };
            $('#body-box').css({'margin-top':'15px'});
        });
    });

    $('#search-form').keypress(function(e){ //function to search on enter press
      if(e.which == 13){//13 is enter key
        $('#search-button').click();
        return false;
     }
    });

    $("#random-search-button").click(function() { //pull up random wiki page
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    })

});
