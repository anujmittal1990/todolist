const arr = [{
    name: 'Verify Mappings',
    dueDt: '05-06-2023'
}, { name: 'To Start New Mappings on Order Point', dueDt: '06-06-2023' }];
renderList();

function add() {
    const inpEl = document.getElementById('input');
    const inpdt = document.getElementById('dt');
    const name = inpEl.value;
    const dueDt = inpdt.value;

    if (name === '' || dueDt ==='') {
        alert('Please enter your notes/date first!');
    }
    else {

        //Note: if property name and value name is same we can write like below
        arr.push({ name, dueDt });
        inpEl.value = '';
        console.log(arr);
        renderList();
    }
}

function renderList() {
    let todoHtml = '';
    for (let i = 0; i < arr.length; i++) {
        const todoObj = arr[i];
        //const name=todoObj.name;
        //const dueDt=todoObj.dueDt;
        const { name, dueDt } = todoObj;
        const htmlEl = `
        <div id="bg">${name}</div>
        <div id="bg">${dueDt}</div>
        <button id="delete" onclick="arr.splice(${i},1);
        renderList();
        ">Delete</button>
        `;
        todoHtml += htmlEl;
    }
    render = document.querySelector('.js-todo')
        .innerHTML = todoHtml;

}
