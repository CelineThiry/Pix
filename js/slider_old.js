$(function() {

    var ul = $(".slider ul" && ".slider-text-top ul" && ".slider-text-bottom ul");
    var slide_count = ul.children().length;
    var slide_width_pc = 100.0 / slide_count;
    var slide_index = 0;

    // Var to clone the first and the last li
    var first_slide = ul.find("li:first-child");
    var last_slide = ul.find("li:last-child");

    // Clone the last slide and add as first li element :)
    last_slide.clone().prependTo(ul);


    // Clone the first slide and add as last li element
    first_slide.clone().appendTo(ul);

    ul.css("margin-left", "-100%");

    ul.find("li").each(function(indx) {
        var left_percent = (slide_width_pc * indx) + "%";
        $(this).css({
            "left": left_percent
        });
        $(this).css({
            width: (100 / slide_count) + "%"
        });
    });

    // Listen for click of prev button
    $(".prev").click(function() {
        console.log("prev button clicked");
        slide(slide_index - 1);
    });

    // Listen for click of next button
    $(".next").click(function() {
        console.log("next button clicked");
        slide(slide_index + 1);
    });



    function slide(new_slide_index) {

        var margin_left_pc = (new_slide_index * (-100) - 100) + "%";

        ul.animate({
            "margin-left": margin_left_pc
        }, 400, function() {

            // If new slide is before first slide...
            if (new_slide_index < 0) {
                ul.css("margin-left", ((slide_count) * (-100)) + "%");
                new_slide_index = slide_count - 1;
            }
            // If new slide is after last slide...
            else if (new_slide_index >= slide_count) {
                ul.css("margin-left", "-100%");
                new_slide_index = 0;
            }

            slide_index = new_slide_index

        });

    }

    $('.bullet li').on('click', function(event) {
        event.preventDefault();
        $('.bullet li').removeClass('active');
        $(this).addClass('active');
        slide(new_slide_index);
    });


    // var auto = window.setInterval(slide(), 1000); // 1000 ms = 1 sec



});

$(function() {

    var ul = $(".slider-text-top ul");
    var slide_count = ul.children().length;
    var slide_width_pc = 100.0 / slide_count;
    var slide_index = 0;

    // Var to clone the first and the last li
    var first_slide = ul.find("li:first-child");
    var last_slide = ul.find("li:last-child");

    // Clone the last slide and add as first li element :)
    last_slide.clone().prependTo(ul);


    // Clone the first slide and add as last li element
    first_slide.clone().appendTo(ul);

    ul.css("margin-left", "-100%");

    ul.find("li").each(function(indx) {
        var left_percent = (slide_width_pc * indx) + "%";
        $(this).css({
            "left": left_percent
        });
        $(this).css({
            width: (100 / slide_count) + "%"
        });
    });

    // Listen for click of prev button
    $(".prev").click(function() {
        console.log("prev button clicked");
        slide(slide_index - 1);
    });

    // Listen for click of next button
    $(".next").click(function() {
        console.log("next button clicked");
        slide(slide_index + 1);
    });



    function slide(new_slide_index) {

        var margin_left_pc = (new_slide_index * (-100) - 100) + "%";

        ul.animate({
            "margin-left": margin_left_pc
        }, 400, function() {

            // If new slide is before first slide...
            if (new_slide_index < 0) {
                ul.css("margin-left", ((slide_count) * (-100)) + "%");
                new_slide_index = slide_count - 1;
            }
            // If new slide is after last slide...
            else if (new_slide_index >= slide_count) {
                ul.css("margin-left", "-100%");
                new_slide_index = 0;
            }

            slide_index = new_slide_index

        });

    }

    $('.bullet li').on('click', function(event) {
        event.preventDefault();
        $('.bullet li').removeClass('active');
        $(this).addClass('active');
        slide(new_slide_index);
    });

    // $('.bullet .prev' && '.bullet .next').on('click', function(event) {
    //     event.preventDefault();
    //     $('.exergue').addClass('active');
       
    // });


    // var auto = window.setInterval(slide(), 1000); // 1000 ms = 1 sec



});

$(function() {

    var ul = $(".slider-text-bottom ul");
    var slide_count = ul.children().length;
    var slide_width_pc = 100.0 / slide_count;
    var slide_index = 0;

    // Var to clone the first and the last li
    var first_slide = ul.find("li:first-child");
    var last_slide = ul.find("li:last-child");

    // Clone the last slide and add as first li element :)
    last_slide.clone().prependTo(ul);


    // Clone the first slide and add as last li element
    first_slide.clone().appendTo(ul);

    ul.css("margin-left", "-100%");

    ul.find("li").each(function(indx) {
        var left_percent = (slide_width_pc * indx) + "%";
        $(this).css({
            "left": left_percent
        });
        $(this).css({
            width: (100 / slide_count) + "%"
        });
    });

    // Listen for click of prev button
    $(".prev").click(function() {
        console.log("prev button clicked");
        slide(slide_index - 1);
    });

    // Listen for click of next button
    $(".next").click(function() {
        console.log("next button clicked");
        slide(slide_index + 1);
    });



    function slide(new_slide_index) {

        var margin_left_pc = (new_slide_index * (-100) - 100) + "%";

        ul.animate({
            "margin-left": margin_left_pc
        }, 400, function() {

            // If new slide is before first slide...
            if (new_slide_index < 0) {
                ul.css("margin-left", ((slide_count) * (-100)) + "%");
                new_slide_index = slide_count - 1;
            }
            // If new slide is after last slide...
            else if (new_slide_index >= slide_count) {
                ul.css("margin-left", "-100%");
                new_slide_index = 0;
            }

            slide_index = new_slide_index

        });

    }

    $('.bullet li').on('click', function(event) {
        event.preventDefault();
        $('.bullet li').removeClass('active');
        $(this).addClass('active');
        // slide(new_slide_index);
    });

    // $('.bullet .prev' && '.bullet .next').on('click', function(event) {
    //     event.preventDefault();
    //     $('.exergue').addClass('active');
       
    // });


    // var auto = window.setInterval(slide(), 1000); // 1000 ms = 1 sec



});



// var slidecount contient le nombre de slide que j'ai dans mon slideshow
Je dois créer une boucle pour faire apparaitre les bullets dynamiquemenent
une boucle de 0 au nombre toal de slidechauqe passage dans la boucle qui un point dans le slider en dessous
fonction > choisir la slide ou je veux aller > il faut lui passer.

decompose en problème simple !!!!!!!
