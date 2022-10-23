const $editTitleBtn = document.querySelector('.editTitle');
var contextBox = document.querySelectorAll('.context');
const $contextForm = document.getElementById('contextInputContainer');
const $contextInput = document.getElementById('contextInput');
const $context_main = document.getElementById('main');
const $xIcon = document.querySelectorAll('.xIcon');
let $noteNum = document.querySelectorAll('.noteNum');
// var $noteNum = contextBox[0].querySelector('.noteNum');
// let title_2 = contextBox[1].querySelector('.title');

const contextItemTemplate = (newInput) => {
    return `
        <div class="context">
            <b class="title">${newInput}</b>
            <img class="xIcon" src="img/xIcon.png">
            <hr>
            <div class="text">
                new posting!
            </div>
        </div>
    `
}

for (let i = 0; i < contextBox.length; i++) {
    $noteNum[i].textContent = 0;
    console.log($noteNum[i]); 
  }

/*************event setting ******************/

$editTitleBtn.addEventListener('click', editTitle);
$contextForm.addEventListener('submit', addPost);
$xIcon.forEach(function (element) { //이 부분 어려웠다. 많이 쓰일텐데 이해 필요
    element.addEventListener('click', removePost);
  });
contextBox.forEach(function (element) {
    element.addEventListener('click', postClick);
  });

/*********************************************/

function editTitle() {
    let title_2 = contextBox[1].querySelector('.title');
    const title = prompt('Edit title');
    console.log(title);
    title_2.textContent = `${title}`;
}

function addPost(event) {
    event.preventDefault();
    const newPost = $contextInput.value;

    if (!newPost) {return};
    const newPostItem = contextItemTemplate(newPost);
    
    $context_main.insertAdjacentHTML('beforeend', newPostItem);
    contextBox = document.querySelectorAll('.context'); //post 추가시 contextBox(게시글 리스트) 업데이트 필요
    //새로 생긴 포스트 remove함수 추가하는거 어떻게??
    console.log(contextBox)
    // contextBox[contextBox.length - 1].childNodes;
    console.log(contextBox[contextBox.length - 1].childNodes[3]);
    contextBox[contextBox.length - 1].childNodes[3].addEventListener('click', removePost);  //jquery로 더 깔끔하게 해보기
    // $xIcon[2].addEventListener('click', removePost);
    
    $contextInput.value = '';
}

function postClick(event) {

}

function removePost(event) {
    console.log("remove");
    let post = event.target.parentNode;
    console.log(post);
    post.remove();
}