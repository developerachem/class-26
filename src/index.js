import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./main.scss";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";
import post from "./components/Post";
import Alert from "./components/Alert";

//DOM Loded Operation

document.addEventListener("DOMContentLoaded", allPost);

document.getElementById("form_submit").addEventListener("submit", newdata)
const alertmsg = document.getElementById("msg")



// All post function
function allPost() {
  axios.get("http://localhost:5050/post").then((res) => {
    post.showAllPost(res.data);
  });
}

//  newdata Post function

function newdata(e){
  e.preventDefault()

  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data.entries());
 

  if(data.USer_name == "" || data.User_Img == "" || data.Post_content ==""){
    alertmsg.innerHTML =  Alert.danger("All Filed Are Requird")

  }
  else{
  

    axios.post("http://localhost:5050/post",{
      author_name : data.USer_name,
      author_photo : data.User_Img,
      post_content : data.Post_content,
      post_photo : data.Post_Image,
  
  
    }).then(res=>{
      allPost()
  
    })
  }
  
 




  

}
