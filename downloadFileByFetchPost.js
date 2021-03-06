await fetch(urlToObtainFile, {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'p1=value1&p2=value2'
	}
)
  .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            
            window.open(url);
            //to force download comment //window.open(url) and uncomment following lines
            
	//----alternative 1--------------
            //var a = document.createElement('a');
            //a.href = url;
            //a.download = "filename.pdf";
            //document.body.appendChild(a); //  the element to the dom -> otherwise it will not work in firefox
            //a.click();    
            //a.remove();  //afterwards we remove the element again         
	//---- end alt 1-----------
	
	//----alternative 2---------------
	//var file = window.URL.createObjectURL(blob);
    	//window.location.assign(file);
	//---- end alt 2-----------
	
        });
        
/*  some tips at:
*     https://stackoverflow.com/questions/32545632/how-can-i-download-a-file-using-window-fetch
*/
