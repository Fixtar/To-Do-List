# To-Do-List

자바스크립트 ToDoList

--기능구현
처음 시작시
localStorage에 내용이 있다면 불러오기

등록버튼 클릭시
input의 value(text)값과 date.now(id)값으로 todo객체 생성,
todoList에 push,
localStorage에 todoList 업데이트

삭제버튼 클릭시
event가 발생한 버튼의 부모태그인 li태그를 선택하여 삭제
localStorage에 todoList 업데이트를 위해서,
todoList에서 filter를 이용하여 지워야 하는 id값을 가진 li태그만 빼고 다시 todoList에저장,

-- 배운내용???
id와 class는 문자열 형식이므로 newTodoObject객체의 id값에 접근 하려면,
parseInt를 사용하여, int값으로 만들고 접근해야한다.

localStorage는 js의 객체를 저장할 수 없다.
따라서 JSON.stringify를 이용하여 문자열로 바꾼뒤 저장해주어야 한다.
꺼내올때도 마찬가지로 문자열을 객체로 바꿔야 하므로 JSON.parse로 꺼내온다.

event.target은 그 이벤트가 발생한 요소를 가리킨다.
