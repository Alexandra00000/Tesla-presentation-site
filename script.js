let header = document.getElementById('header');
let ms = document.getElementById('models');
let m3 = document.getElementById('model3');
let mx = document.getElementById('modelx');
let my = document.getElementById('modely');
let model = document.getElementById('model');
let s = document.getElementById('s');
let mph = document.getElementById('mph');
let mi = document.getElementById('mi');







ms.onclick = function() {
    header.style.backgroundImage = "url(images/image-1.png)";
    model.innerHTML = "Model S";
    s.innerHTML = '1.9 s';
    

}
m3.onclick = function() {
    header.style.backgroundImage = "url(images/image-2.png)";
    model.innerHTML = "Model 3";
    s.innerHTML = '2.3 s';
    mph.innerHTML = '324 mph';
    mi.innerHTML = '289 mi';

}
mx.onclick = function() {
    header.style.backgroundImage = "url(images/image-3.png)";
    model.innerHTML = "Model X";
    s.innerHTML = '3.7 s';
    mph.innerHTML = '350 mph';
    mi.innerHTML = '456 mi';
    


}
my.onclick = function() {
    header.style.backgroundImage = "url(images/image-4.png)";
    model.innerHTML = "Model Y";
    s.innerHTML = '1.4 s';
    mph.innerHTML = '487 mph';
    mi.innerHTML = '786 mi';


}