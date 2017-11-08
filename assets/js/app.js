window.onload = function() {
   
    var sendButton = document.getElementsByName("enviar")[0];
    var thinkInput = document.getElementsByName("Pensamiento")[0];
    var timeLine = document.getElementsByName("lineaDePensamiento")[0];
    sendButton.onclick = function() {

        if (thinkInput.value == "") {
            document.getElementsByName("enviar")[0].disabled;
        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tweet"
            nameSpan.textContent = "TWEET";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;
            
             timeLine.insertBefore(tuitDiv, timeLine.children[0]);
            }
        
        }
        var limite = document.getElementsByName("pensamiento")[0].value;
       
           limite.onkeydown = function(){
            var max= 140;
            var text = document.getElementsByClassName("limit").value;
            var long = text.length; 
            text.innerHTML= max;
            var modificacion = max - long;
            text.innerHTML = modificacion;
            if(modificacion <= 0){
               document.getElementsByName("enviar")
            }
           
        }
        


    }
