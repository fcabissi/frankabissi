
    var i=0;
    function change() {
      var head=document.getElementById("heado");
      var color = ["green","blue","red","yellow"];
      head.style.color=color[i];
      i=(i+1)%color.length;
    }
    setInterval(change,1000);
