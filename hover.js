$(document).ready(function() {
    //get the bonus link for the bonus panel
    var href = $("#extrapanelbutton > a").attr("href");
    var hrefSplitArray = href.split("/");
    var date = hrefSplitArray[hrefSplitArray.length-2];
    var bonusLink = "http://invisiblebread.com/eps/" + date.substring(0,4) + "-" + date.substring(4,6) + "-" + date.substring(6) + "-extrapanel.png";

    //reset the extra panel container
    $("#extrapanelbutton").html("");

    //add box to hover over to bonus panel
    var box = $("<a>");
    $("#extrapanelbutton").append(box);

    //add hover image to bonus panel
    var img = $("<img>");
    img.attr("src", bonusLink);
    img.attr("id", "hoverImg");
    img.attr("style", "display: none;");
    $("#extrapanelbutton").append(img);

    //display hover image when hovering over box
    $("#extrapanelbutton > a").hover(
        function() {
            $("#hoverImg").css("display", "inline");
            $("#extrapanelbutton > a").css("display", "none");
        }
    );

    $("#hoverImg").mouseout(
        function() {
            $("#hoverImg").css("display", "none");
            $("#extrapanelbutton > a").css("display", "block");
        }
    );

});
