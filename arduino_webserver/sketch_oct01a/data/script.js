var hw=document.getElementById('hw');
hw.addEventListener('click',function(){
	//document.writeln('hello world');
	
	var reader = new FileReader();

	function readText(){


		var reader = new FileReader();

		reader.onload = function (e) {  
			var output=e.target.result;
			document.getElementById('main').innerHTML= output;
		}
		reader.readAsText('/test_doc.txt');
	} 
})