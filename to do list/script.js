function askAI(){

    let input =
    document.getElementById("userInput").value;

    let response =
    document.getElementById("response");

    if(input===""){
        response.innerHTML =
        "AI助理：請先輸入內容";
        return;
    }

    if(input.includes("你好")){
        response.innerHTML =
        "AI助理：你好！很高興認識你。";
    }

    else if(input.includes("學校")){
        response.innerHTML =
        "AI助理：歡迎來到校園資訊系統。";
    }

    else if(input.includes("課程")){
        response.innerHTML =
        "AI助理：目前提供網頁設計相關課程。";
    }

    else{
        response.innerHTML =
        "AI助理：收到你的問題：" + input;
    }
}

function changeTheme(){

    document.body.classList.toggle("dark-blue");

}

function resetAI(){

    document.getElementById("response").innerHTML =
    "AI助理：已重置至初始狀態";

}
function askAI(){
    ...
}

function changeTheme(){
    ...
}

function resetAI(){
    ...
}

/* 直接接著新增 */

function addTodo(){

    let task =
    document.getElementById("todoInput").value;

    let time =
    document.getElementById("todoTime").value;

    if(task===""){
        alert("請輸入待辦事項");
        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML =
    task + " " + time;

    document
    .getElementById("todoList")
    .appendChild(li);

    document
    .getElementById("todoInput")
    .value="";
}