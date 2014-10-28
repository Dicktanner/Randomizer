$(function(){
    var button= $("#addButton");
    var random= $("#randomButton");
    
    
    
    button.on("click", function(){
        console.log("clicked!")
        random.show();
        var newItem= $("input").val();
        if (newItem.trim()!=="") {
        var newLi = $("<li>").text(newItem);
        $("ul").append(newLi);
        $("input").val('');
        };
        });
    
    
    random.on("click", function(){
        var result = $("li");
        randomItem= result[Math.floor((result.length)* Math.random())];
        $("#result").text($(randomItem).text());
        });
    
    
    $('#input1').keydown(function() {
        if (event.keyCode == 13) {
        random.show();
        console.log("clicked!")
        var newItem= $("input").val();
        if (newItem.trim()!=="") {
        var newLi = $("<li>").text(newItem);
        $("ul").append(newLi);
        $("input").val('');
        };
        }
       // $("input1").focus();
    });
    
});