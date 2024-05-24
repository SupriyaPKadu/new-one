document.getElementById("btn_ajax").addEventListener("click",makerequest);
function makerequest(){
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();//XMLHTTPrequest object creation
    xhr.open("GET","DATA.txt",true);// Initialise the request
    xhr.onreadystatechange=function(){
        if(xhr.readyState===XMLHttpRequest.DONE){

            if(xhr.status==200){
              console.log(xhr);//return the xhr object
              console.log(xhr.responseText);

            }
            else{
                console.log("Error while Hnadling the request");

            }
        
        }

    };
    xhr.send();


}