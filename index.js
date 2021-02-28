// console.log('index.js: loaded');

const heading = document.querySelector('h5');

const headingText = heading.textContent;

const button = document.createElement('button');
button.textContent = '押す';
document.body.appendChild(button)

// const userId = 'huro3h';
const githubApiEndPoint = 'https://api.github.com/users/'

const view = `
<h6>${userInfo.name} (@${userInfo.login})</h6>
<img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="75">
<dl>
  <dt>Location</dt>
  <dd>${userInfo.location}</dd>
  <dt>Repositries</dt>
  <dd>${userInfo.public_repos}</dd>
</dl>
`;
  
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


