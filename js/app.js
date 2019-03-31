$(document).ready(function(){
/*
let editor=document.getElementById('editor').value;
console.log(typeof editor)
console.log(marked(editor))
document.getElementById('preview').innerHTML=marked(editor)*/

  window.onload = function(){
           let editorInput = document.getElementById('editor');
           let previewOutput = document.getElementById('preview' );
           let mark=marked(editorInput.value)
         	previewOutput.innerHTML=mark;
           //Converting from markup style to html
           $('#editor').keyup(function(){
  	          mark=marked(editorInput.value)
  	           previewOutput.innerHTML=mark;
  })

      }
})
