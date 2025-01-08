function Dfetch() {
    let userid=document.querySelector('#userid').value;
    fetch(`https://jsonplaceholder.typicode.com/todos/${userid}`)
      .then(response => {
        console.log(response)
        return response.json()})

      .then(json => {
        console.log('json',json);
        const id=document.querySelector("#id");
        const title=document.querySelector('#title');
        const status=document.querySelector('#completed');
        title.innerHTML=json.title;
        id.innerHTML=json.id;
        status.innerHTML=json.completed;
        if (json.completed){
            status.innerHTML='Completed';
            document.querySelector('#completed').style.color="Green";
        }
        else{
            status.innerHTML='Not Completed';
            document.querySelector('#completed').style.color="Red";
        }
})};