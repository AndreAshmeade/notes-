/* 
promise has three outcomes;
Promise gets resolved,
gets rejected,
pending state, 

which means the Promise is not completed yet
but may get completed after some time, so it
is not rejected till now and is in the pending state.
 */

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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Error Something went wrong");
      }
    }, 2000);
  });
}

/*
createPost({
  title: 'Post Three', body: 'This is post three'
})
  .then(getPosts)
  .catch(err => console.log(err));
*/

/*
// Await/ Await 
async function init(){
  await createPost({title: 'Post Three', body:'This post three'});
  
  getPosts();
}

init();
*/

async function fetchUsers() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUsers();

/*
//Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
  setTimeout(resolve, 2000, 'GoodBye')
);

const promise4 = fetch
('http://jsonplaceholder.typicode.com/users');

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
*/
