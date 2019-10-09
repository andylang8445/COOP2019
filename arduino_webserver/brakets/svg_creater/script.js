
function return_val()
{
   // var hw.addEventListener('hw',function(){
        //document.writeln('hello world');
        var text_val = document.getElementById('text').value;
        document.getElementById("content").innerHTML = text_val;
        var link = document.getElementById('bg_address').value;
        document.getElementById('bg').$xlink=link;
        
        var text_element = document.getElementById("text");
        text_content.setAttribute("type", "hidden");
        var link_element = document.getElementById("bg_address");
        link_element.setAttribute("type", "hidden");
        var button_element = document.createElement("hw");
        button_element.setAttribute("type", "hidden");
    //})
}