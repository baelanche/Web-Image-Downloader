var imglength = 0;
var i = 0;

chrome.tabs.executeScript({
  code:'document.getElementsByTagName("img").length;'
}, function(result){
  imglength = result;
})

function findImg(){
  chrome.tabs.executeScript({
      code:'document.querySelectorAll("img")[' + i + '].src;'
    }, function(result){
      if(imglength != undefined && imglength != 0){
        var src = result;
        var page = i+1;
        document.querySelector('#contents').innerHTML = "<img src='" + src + "'>";
        document.querySelector('#length').innerHTML = "<span>" + page + "/" + imglength + "</span>";
        document.querySelector('#down').href = src;
        document.querySelector('#down').innerText = "Download";
      }
      else{
        document.querySelector('#contents').innerHTML = "<h3>No image</h3>";
        document.querySelector('#down').style.visibility = "hidden";
        document.querySelector('#btnL').style.visibility = "hidden";
        document.querySelector('#btnR').style.visibility = "hidden";
        document.querySelector('body').style.height = "40px";
      }
    })
}

findImg();

var btnR = document.getElementById('btnR');
btnR.addEventListener("click", func1);

function func1(){
  if(i < imglength - 1) i++;
  findImg();
}

var btnL = document.getElementById('btnL');
btnL.addEventListener("click", func2);

function func2(){
  if(i > 0) i--;
  findImg();
}
