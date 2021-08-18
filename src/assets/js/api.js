const API_ENDPOINT = "../data/posts.json";

/* -- Posts -- */

export function getPosts() {
  let postsRetrieved = get("posts");
  return postsRetrieved;
}

export function getPost(id) {
  let postRetrieved = new Promise((resolve, reject) => {
    getPosts().then((posts) => {
      resolve(posts.find((p) => p.id === id));
    });
  });

  return postRetrieved;
}

/* -- Utils -- */

function get(type, urlArr) {
  let dataRetreived = new Promise((resolve, reject) => {
    // let url = PROXY_ENDPOINT + API_ENDPOINT + type + arrToUrl(urlArr);
    let url = API_ENDPOINT;

    $.getJSON(url, function (data) {
      resolve(data);
    }).fail(() => resolve(null));
  });

  return dataRetreived;
}
