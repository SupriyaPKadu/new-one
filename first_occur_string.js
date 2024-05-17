function serach(str,str1){
    let txt=str.replace(str1,"");
    return txt;
}
let input="The quick brown fox jumps over the lazy dog";
target_var="the";
document.getElementById("msg").innerHTML="Original String:"+input;
let result=serach(input,target_var);
document.getElementById("output").innerHTML="The Output: "+result;