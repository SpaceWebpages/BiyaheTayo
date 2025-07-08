const str1 = document.getElementById('str1');
const str2 = document.getElementById('str2');
const str3 = document.getElementById('str3');
const str4 = document.getElementById('str4');
const str5 = document.getElementById('str5');

function str(){
    str5.addEventListener('click', () => {
        str1.src = '/icons/star-solid-yellow.svg';
        str2.src = '/icons/star-solid-yellow.svg';
        str3.src = '/icons/star-solid-yellow.svg';
        str4.src = '/icons/star-solid-yellow.svg';
        str5.src = '/icons/star-solid-yellow.svg';
    });
    str4.addEventListener('click', () => {
        str1.src = '/icons/star-solid-yellow.svg';
        str2.src = '/icons/star-solid-yellow.svg';
        str3.src = '/icons/star-solid-yellow.svg';
        str4.src = '/icons/star-solid-yellow.svg';
        str5.src = '/icons/star-solid.svg';
    });
    str3.addEventListener('click', () => {
        str1.src = '/icons/star-solid-yellow.svg';
        str2.src = '/icons/star-solid-yellow.svg';
        str3.src = '/icons/star-solid-yellow.svg';
        str4.src = '/icons/star-solid.svg';
        str5.src = '/icons/star-solid.svg';
    });
    str2.addEventListener('click', () => {
        str1.src = '/icons/star-solid-yellow.svg';
        str2.src = '/icons/star-solid-yellow.svg';
        str3.src = '/icons/star-solid.svg';
        str4.src = '/icons/star-solid.svg';
        str5.src = '/icons/star-solid.svg';
    });
    str1.addEventListener('click', () => {
        str1.src = '/icons/star-solid-yellow.svg';
        str2.src = '/icons/star-solid.svg';
        str3.src = '/icons/star-solid.svg';
        str4.src = '/icons/star-solid.svg';
        str5.src = '/icons/star-solid.svg';
    });
}
str();