//asynchronous is when something's going on but you dont want to wait for
//that thing to be done to continue the program. Continue while its happening

//synchronous something happens and you wait until that certain thing is
//complete.

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost(
  {
    title: "Post Three",
    body: "This is post three",
  },
  getPosts
);
