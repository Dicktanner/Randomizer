$(function(){
    var button= $("button");
    var index=0
    var nameArray=[];
    button.on("click", function(){
        console.log("clicked!")
        var newItem= $("input").val();
        if (newItem.trim()!=="") {
        var newLi = $("<li>").text(newItem);
        $("ul").append(newLi);
        nameArray[index]=newItem;
        index++;
        console.log(nameArray);
        };
        });
});