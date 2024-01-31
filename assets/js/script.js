function myFun(ele,city,myThis) {
    let myNodeList = document.querySelectorAll(`.tabDesc`);
    myNodeList.forEach(function(ele) {
        ele.style.display="none";
    });
    document.querySelector(`#${city}`).style.display="block";
    let myTitNodeList = document.querySelectorAll('.list_item');
    myTitNodeList.forEach(function(el) {
        el.classList.remove('active');
    });
    myThis.classList.add('active');
}