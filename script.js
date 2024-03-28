var NumberQuizt = 0;
$(".submit").click(function() {
    var rateLeadership = Number($(".question1").val());
    var chooseMember = $(".question2").val();
    if (rateLeadership <= 5) {
        if (chooseMember === "Chareyeong") {
            $(".Chareyeong").show();
            $(".Chareyeong").append("<h2>" + "You are cool, calm, and collected, but you have a fun-loving side to you. You are not afraid to shock the people around you with your impressive skills, but tend to keep to yourself, waiting for the right moment! You develop a deep and caring connection with people and show it using kind words, but get shy!" + "</h2>");
            $(".page1").hide();
        } else if (chooseMember === "chareyeong") {
            $(".Chareyeong").show();
            $(".Chareyeong").append("<h2>" + "You are cool, calm, and collected, but you have a fun-loving side to you. You are not afraid to shock the people around you with your impressive skills, but tend to keep to yourself, waiting for the right moment! You develop a deep and caring connection with people and show it using kind words, but get shy!" + "</p>");
            $(".page1").hide();
        }
    }
    if (rateLeadership <= 6) {
        if (chooseMember === "Yuna") {
            $(".Yuna").show();
            $(".Yuna").append("<h2>" + "You are a fun-loving and happy person! Some say you might have a chaotic energy, but you know how to balance fun and work. Being happy brings the people around you happiness. Your energy is contagious. You love to be fun and stay happy, but also try your best to keep the people around you energized and happy. You are your friend vitamin!" + "</h2>");
            $(".page1").hide();
        } else if (chooseMember === "yuna") {
            $(".Yuna").show();
            $(".Yuna").append("<h2>" + "You are a fun-loving and happy person! Some say you might have a chaotic energy, but you know how to balance fun and work. Being happy brings the people around you happiness. Your energy is contagious. You love to be fun and stay happy, but also try your best to keep the people around you energized and happy. You are your friend vitamin!" + "</h2>");
            $(".page1").hide();
        }
    }
    if (rateLeadership <= 9) {
        if (chooseMember === "Ryujin") {
            $(".Ryujin").show();
            $(".page1").hide();
            $(".Ryujin").append("<h2>" + "You are a very calm and cool and love to have fun. people around you may consider you nonchalant, but the people closest to you know you are a very loving person. You are a very caring person and love to show it by being there for people. Being cool and collected is a big part of your personality!" + "</h2>");
        } else if (chooseMember === "ryujin") {
            $(".Ryujin").show();
            $(".page1").hide();
            $(".Ryujin").append("<h2>" + "You are a very calm and cool and love to have fun. people around you may consider you nonchalant, but the people closest to you know you are a very loving person. You are a very caring person and love to show it by being there for people. Being cool and collected is a big part of your personality!" + "</h2>");
        }
    }
    if (rateLeadership <= 10) {
        if (chooseMember === "Yeji") {
            $(".Yeji").show();
            $(".page1").hide();
            $(".Yeji").append("<h2>" + "As leader of your group, you make sure to have fun, but make sure everyone is safe and cared for. You tend to get lost in your duty to protect the people around you, but are not afraid to show your true colors! Making sure your loved ones are happy and safe brings you joy!" + "</h2>");
        } else if (chooseMember === "yeji") {
            $(".Yeji").show();
            $(".page1").hide();
            $(".Yeji").append("<h2>" + "As leader of your group, you make sure to have fun, but make sure everyone is safe and cared for. You tend to get lost in your duty to protect the people around you, but are not afraid to show your true colors! Making sure your loved ones are happy and safe brings you joy!" + "</h2>");
        }
    }
});

$(".button2").click(function() {
    $(".lastPage").show();
    $(".page1").hide();
    $(".Yeji").hide();
    $(".Ryujin").hide();
    $(".Yuna").hide();
    $(".Chareyeong").hide();
    NumberQuizt += 1;
    $(".counter").text(NumberQuizt);

});

$(".lastButton").click(function() {
    $(".page1").show();
    $(".lastPage").hide();
});