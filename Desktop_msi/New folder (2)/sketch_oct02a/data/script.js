var hw=document.getElementById('hw');
hw.addEventListener('click',function(){
	//document.writeln('hello world');
	/*var file = "test_doc.txt";
	var reader = new FileReader();
	var result = reader.readAsText(file);
	document.writeln(result);*/
		$.getScript( "test_doc.txt", function( data, textStatus, jqxhr ) {
		  document.write('<h1>Your data</h1><pre>' + data + '</pre>');
		});
		//This loads a file called 'data.txt' and prints the content
})

function openTextFile() {
    var input = document.createElement("input");
 
    input.type = "file";
    input.accept = "text/plain";
 
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };
 
    input.click();
}

function processFile(file) {
    var reader = new FileReader();
 
    reader.onload = function () {
        output.innerText = reader.result;
    };
 
    reader.readAsText(file, /* optional */ "euc-kr");
}