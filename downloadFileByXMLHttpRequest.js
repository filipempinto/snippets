var xhr = new XMLHttpRequest();

xhr.responseType="blob";
xhr.open("POST", '/urlWichReturnsFile', true);

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {//when ready...
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

      var binaryData = [];
      binaryData.push(this.response);
      
      window.open(window.URL.createObjectURL(new Blob(binaryData, {type: "application/octet-binary"})));
      //could also use:
      //----alternative --------------
            //var a = document.createElement('a');
            //a.href = url;
            //a.download = "filename.pdf";
            //document.body.appendChild(a); //  the element to the dom -> otherwise it will not work in firefox
            //a.click();    
            //a.remove();  //afterwards we remove the element again         
	    //---- end alt 1-----------
    }
}
xhr.send("param1=value1&param2=value2");

