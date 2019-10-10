var text_val;

function return_val()
{
   // var hw.addEventListener('hw',function(){
        //document.writeln('hello world');
    
        text_val = document.getElementById('text').value;
        
        var link = document.getElementById('bg_address').value;
        document.getElementById('bg').$xlink=link;
        
    //})
}
function get_val()
{
    document.getElementById("content").innerHTML = text_val;
}