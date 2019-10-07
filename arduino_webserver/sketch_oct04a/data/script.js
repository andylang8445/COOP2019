function return_val()
{
   // var hw.addEventListener('hw',function(){
        //document.writeln('hello world');
        var text_val = document.getElementById('text').value;
        document.getElementById("content").innerHTML = text_val;
        var link = document.getElementById('bg_address').value;
        document.getElementById('bg').$xlink=link;
    //})
}