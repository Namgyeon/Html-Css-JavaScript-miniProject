
// add버튼을 누르면 할 일 리스트를 추가하는 함수
document.querySelector('#push').onclick = function(){
  //아무런 검색을 하지 않았을 경우 경고창 출력
  if(document.querySelector('#newTask input').value.length == 0){
    alert('할 일을 일력해주세요.');
  }else{    //할 일들을 tasks창에 하나씩 삽입.
    document.querySelector('#tasks').innerHTML +=
    `
    <div class="task">
      <span id='taskname'>
        ${document.querySelector('#newTask input').value}
      </span>
      <button class="delete">
        <i class="fa-solid fa-delete-left"></i>
      </button>
    </div>
    `;
  }   
}

// delete버튼을 누르면 할 일 리스트를 삭제하는 함수
document.querySelectorAll('.delete').onclick = function(){
  
}

