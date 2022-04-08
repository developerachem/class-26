class Post {
  constructor() {
    this.show_post = document.getElementById("ShowPost");
  }

  /**
   * Show All Post
   */

  showAllPost(posts) {
    let newPost = "";
    posts.reverse().map((data) => {

      let {author_name,author_photo, post_content,post_photo} = data
      newPost += `
      
      <div class="card shadow-sm mt-2">
      <div class="card-body " >
          <div class="user_post">
              <div class="user_profile">
                  <div class="profile">
                      <img src="${author_photo}" alt=""> <h1>${author_name}</h1>
                  </div>
                  <div class="userBtn">
                      
                      <div class="dropdown show">
                      <a class="btn dropdown-toggle" href="#" role="button" id="dropdwon_item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ...
                      </a>
                    
                      <div class="dropdown-menu" aria-labelledby="dropdwon_item">
                        <a class="dropdown-item" href="#"><span><i class="fa fa-link" aria-hidden="true"></i>
                        </span> Copy Link</a>
                        <a class="dropdown-item" href="#"><span><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </span> Edit Post</a>
                        <a class="dropdown-item" href="#"><span><i class="fa fa-trash-o" aria-hidden="true"></i>
                        </span> Remove Post</a>
                        
                      </div>
                    </div>


                    </div>

              </div>
              <div class="use_content">
                  <p>${post_content}</p>
                  <img src="${post_photo}" alt="">
              </div>
              <div class="share_button">
                  <ul>
                      <li><span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                      </span> Like</li>
                      <li><span><i class="fa fa-comment-o" aria-hidden="true"></i>
                      </span> Comment</li>
                      <li><span><i class="fa fa-share-alt" aria-hidden="true"></i>
                      </span> Share</li>
                  </ul>
              </div>
          </div>

         
      </div>
  </div>
      
      

        `;
    });

    this.show_post.innerHTML = newPost;
  }
}

let post = new Post;

export default post;
