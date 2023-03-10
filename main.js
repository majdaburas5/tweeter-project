const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());
// renderer.renderComments
function post() {
  let inputValue = $("#input").val();
  if (inputValue !== "") {
    tweeter.addPost(inputValue);
    $("#posts").empty();
    renderer.renderPosts(tweeter.getPosts());
  }
}

$("#posts").on("click", ".delete", function () {
  let postId = $(this).data().id;
  tweeter.removePost(postId);
  $("#posts").empty();
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".comments", function () {
  let commentValue = $(this).closest("div").find(".commentVal").val();
  let postId = $(this).data().id;
  if (commentValue !== "") {
    tweeter.addComment(postId, commentValue);
    $("#posts").empty();
    renderer.renderPosts(tweeter.getPosts());
  }
});

$("#posts").on("click", ".delete-comment", function () {
  let postId = $(this).data().id;
  let commentId = $(this).data().commentid;
  tweeter.removeComment(postId, commentId);
  $("#posts").empty();
  renderer.renderPosts(tweeter.getPosts());
});
