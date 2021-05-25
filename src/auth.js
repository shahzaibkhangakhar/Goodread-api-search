import login from './components/Login'  
  //.........................add users to local storage..................

  var arr = new Array();
  var objPeople=[{
    username:"shahzaib",
    password:"Password1122"
},
{
    username:"Ahmed",
    password:"Password11"  
},
{
    username:"Ali",
    password:"Password22"
}]

arr.push(objPeople);
localStorage.setItem("localData", JSON.stringify(arr));

//.......................get data from local storage...................................
function getData() {
  var str = localStorage.getItem("localData");
  console.log(str);
  if (str != null) {
    arr = JSON.parse(str);
  }
}
//............................data............................
const authuser=()=>{
  

  var username=document.getElementById("username").value
  var password=document.getElementById("password").value

for(let i=0; i<arr.length;i++){
  if(username==arr[i].username && password==arr[i].password){
      console.log(username +" is logged in");
      return
  }
  
    console.log("user not available")
}
}