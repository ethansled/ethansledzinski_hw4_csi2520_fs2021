window.onload = function(){
    document.getElementById('usComments').innerHTML
}




const usComments = document.getElementById('usComments');
document.getElementById('pComments').addEventListener('click', function (ev) 
{
   addComment(ev);
})

var postButton = document.getElementById('pComments');
var commentText = document.getElementById('commentZone');
var commentButton = document.getElementById('lComment');

commentButton.onclick = function Comment(){
    commentText.style.display = "block";
    postButton.style.display = "block";
    postButton.onclick = function HideCommentBox(){
        commentText.style.display = "none";
        postButton.style.display = "none";
    }
}

function addComment(ev) {
    let commentText;
    let wrapDiv;
    const textBox = document.createElement('div');
    const reply = document.createElement('button');
    reply.className = 'reply';
    reply.innerHTML = 'Reply';
    reply.style.marginLeft = "50%";

    if(createClass(ev.target.parentElement, 'conta')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        commentText = document.getElementById('commentZone').value;
        document.getElementById('commentZone').value = '';
        textBox.innerHTML = commentText;
        wrapDiv.append(textBox, reply);
        usComments.appendChild(wrapDiv);
        textBox.style.background = "#ff895d";

    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, reply);
        textBox.style.background = "#ff895d";
    }   
}

function createClass(element, className) {
    return element.className.split(' ').indexOf(className) > -1;
}
document.getElementById('usComments').addEventListener('click', function (e) {
    if (createClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Post Reply';       
        wrapDiv.append(textArea, addButton);
        parentDiv.appendChild(wrapDiv);     
        textArea.style.backgroundColor = "#ff895d";        
    } else if(createClass(e.target, 'addReply')) {
        addComment(e);
    } 
})

