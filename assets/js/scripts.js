let count=1;
    setInterval(function(){
        count=(count>4)?1:++count;
        document.getElementById(`radio${count}`).checked= true;
    },2000);