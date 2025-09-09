const search=document.getElementById('searchIcon')
const searchEngine=document.getElementById('searchEngine')

 search.addEventListener('click' , ()=>{
    searchEngine.classList.toggle('active')
 })