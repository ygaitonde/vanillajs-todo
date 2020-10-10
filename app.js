function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click',clearList);
    document.querySelector('ul').addEventListener('click',deleteOrTick);
}

function submit(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value !== '') {
        addTask(input.value);
    }
    input.value = '';
}

function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><label>${task}</label><button class="delete">×</button>`;
    ul.appendChild(li);
    document.querySelector('.tasks').style.display = 'block';
  }

function clearList() {
   document.querySelector('ul').innerHTML = '';
}

function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

function tickTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
  }else {
    task.style.textDecoration = "none";
  }
}

loadEvents();
