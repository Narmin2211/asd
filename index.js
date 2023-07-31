// //set of codes
// //define
// //call
// //var let const 
// // const a=10;
// console.log(a)
// b=10;
// let a=true
// if(a)
// {
// console.log("yes")
// }
// var a=10;
// function sum()//scope dependent
// {
//     let b=20;
//     // console.log(a)
// }
// sum()
// console.log(b)
// function on(a)//10
// {
//     console.log(a)
// }
// on(10)
// function hide()
// {document.getElementById('p1').innerHTML="hai";
// }
function validation()
{
    let name=document.myform.name.value;
    let pass=document.myform.pass.value;
    if(name=="")
    {
        document.getElementById('error').innerHTML="enter name"
        return false;
    }
    else if(pass=="")
    {
        document.getElementById('error').style.visibility="visible";
        document.getElementById('error1').innerHTML="enter pass";
        return false;
    }
    else{
        return true;
    }
}