$(document).ready(function() {


    // let items = $("#blog .item");
    // let links = $("#blog .item .content a");
    // links.click(function(e) {
    //     e.preventDefault();
    //     // $(this).hide(5000);
    //     // console.log($(this).data("id"))
    // })


    // items.hover(function() {
    //     $(this).css({
    //         "backgroundColor": "red",
    //         "boxShadow": "black 0px 0px 42px 2px",
    //         "transition": "all 0.5s linear"
    //     });
    // }, function() {
    //     $(this).css({
    //         "backgroundColor": "unset",
    //         "boxShadow": "unset",
    //         "transition": "all 0.5s linear"
    //     });
    // });

    $("#blog .wrapper .title h1").click(function() {
        // $("#blog .wrapper .content").hide(500);
        // $("#blog .wrapper .content").show(2000, function() {
        //     alert("Element shown");
        // });

        // $("#blog .wrapper .content").fadeIn(2000);
        // $("#blog .wrapper .content").fadeOut(2000);
        // $("#blog .wrapper .content").fadeToggle(1000);
        // $("#blog .wrapper .content").fadeTo(300, 0.2);

        // $("#blog .wrapper .content").slideUp(2000);
        // $("#blog .wrapper .content").slideDown(2000);
        // $("#blog .wrapper .content").slideToggle(500);

        // $("#blog .wrapper .content").animate({
        //         left: "200px",
        //         padding: "30px"
        //     }, 500)
        //     .animate({
        //         top: "200px"
        //     }, 500)
        //     .animate({
        //         left: "0px"
        //     }, 500)
        //     .animate({
        //         top: "0px",
        //         padding: "15px"
        //     }, 500);

        // console.log($("#blog .wrapper .content p").text("<a href='#'>Qazax ipsum</a>"));
        // console.log($("#blog .wrapper .content p").html("<a href='#'>Qazax ipsum</a>"));
    });

    $("#blog .wrapper2 .title h1").click(function() {
        // let li = $("<li>Item 4</li>");

        // $("#blog .wrapper2 ul").append(li);
        // $("#blog .wrapper2 ul").prepend(li);
        // $("#blog .wrapper2 ul").before(li);
        // $("#blog .wrapper2 ul").after(li);

        // $("#blog .wrapper2 ul li:first-child").remove()
        // $("#blog .wrapper2 ul").toggleClass("list-group")
        // $("#blog .wrapper2 ul li").toggleClass("list-group-item")

        // console.log($("#blog .wrapper2 ul").parent());
        // console.log($("#blog .wrapper2 ul").parents());
        // console.log($("#blog .wrapper2 ul").parentsUntil(".container"));
        // console.log($("#blog .wrapper2 ul").children());
        // console.log($("#blog .wrapper2").find(".p1"));

        // console.log($("#blog .wrapper2 ul li").first());
        // console.log($("#blog .wrapper2 ul li").last());
        // console.log($("#blog .wrapper2 ul li").eq(1));
        // console.log($("#blog .wrapper2 ul li").filter(".even"));
        // console.log($("#blog .wrapper2 ul li").not(".even"));
    });

});