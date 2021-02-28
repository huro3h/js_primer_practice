// console.log('index.js: loaded');

const heading = document.querySelector('h5');

const headingText = heading.textContent;

const button = document.createElement('button');
button.textContent = '押す';
document.body.appendChild(button)

// const userId = 'huro3h';
const githubApiEndPoint = 'https://api.github.com/users/'

function fetchUserInfo(userId) {
  fetch(`${githubApiEndPoint}${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status);

      if(!response.ok) {
        console.error('エラーレスポンス', response);
      } else {
        return response.json().then(userInfo => {
          // JSONパースされたオブジェクト
          console.log(userInfo);
        });
      }
    }).catch(error => {
    console.error(error);
  });
}


