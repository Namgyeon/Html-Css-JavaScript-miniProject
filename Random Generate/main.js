// joke api 사이트
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
const btn = document.getElementById("btn"); 
const jokeContainer = document.getElementById("joke"); // joke가 나오는 p 

// api 데이터를 받아서 jokeContainer에 선언.
let getJoke = () =>{
  jokeContainer.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    jokeContainer.textContent = `${item.joke}`;
    jokeContainer.classList.add("fade");
  });
}

// 클릭시 함수 실행.
btn.addEventListener("click", getJoke);