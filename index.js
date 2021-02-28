// console.log('index.js: loaded');
const githubApiEndPoint = 'https://api.github.com/users/'

function main() {
  const userId = 'huro3h';
  fetchUserInfo(userId)
}

function fetchUserInfo(userId) {
  fetch(`${githubApiEndPoint}${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status);

      if(!response.ok) {
        console.error('エラーレスポンス', response);
      } else {
        return response.json().then(userInfo => {
          const view = createView(userInfo);
          displayView(view);
        });
      }
    }).catch(error => {
    console.error(error);
  });
}

function createView(userInfo) {
  // HTML組み立て
  return escapeHTML`
  <h6>${userInfo.name} (@${userInfo.login})</h6>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="75">
  <dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositries</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

function displayView(view) {
  document.getElementById('result');
  result.innerHTML = view;
}

// 文字列をエスケープする関数を実装(通常はライブラリとか)
function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// テンプレートリテラルにタグ付けするためのタグ関数
// タグ関数は()による呼び出しではなく、テンプレートリテラルの
// バッククォート記号の前に関数を書くと関数がタグ付けされる
function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];

    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}

//
// const heading = document.querySelector('h5');
//
// const headingText = heading.textContent;

// const button = document.createElement('button');
// button.textContent = '押す';
// document.body.appendChild(button)
