function deletetask(index){
    var item = JSON.parse(localStorage.getItem("keys"));
    item.splice(index,1);
    localStorage.setItem("keys",JSON.stringify(item))
    ShowTasks(item)
}
function ShowTasks(list){
    var element = document.getElementById("input1");
    var ul = document.getElementById("todoList");
    var list1 = JSON.parse(localStorage.getItem("keys"));
    alllis = " "
    index = 0
    for(i of list1){
        alllis+= "<li>"+i+"<input type='button' value='X' onclick='deletetask("+index+")' /> </li>"
        index++
    }
    document.getElementById("todoList").innerHTML = alllis
    var list2 = JSON.parse(localStorage.getItem("keys")).lenght;
    console.log(list2)
    var show = "you have "+index+"task"
    console.log(show)
    document.getElementById("footer").innerHTML = show
}
function addBtn(){
    var element = document.getElementById("input1");
    var getKeys = localStorage.getItem("keys") ;
    var list = []
    if (getKeys == null){
        list.push(element.value);
        localStorage.setItem("keys",JSON.stringify(list))
    }else{
        var local_S = localStorage.getItem("keys")
        var text = JSON.parse(local_S);
        text.push(element.value);
        localStorage.setItem("keys",JSON.stringify(text)) 
    }
    element.value = " "
    ShowTasks(list)
}
function clearALl(){
    var element = document.getElementById("input1");
    var footer = document.getElementById("footer");
    document.getElementById("todoList").innerHTML = " "
    document.getElementById("footer").innerHTML = " "
    var removeData = localStorage.clear("data");
    ShowTasks(list)
}

