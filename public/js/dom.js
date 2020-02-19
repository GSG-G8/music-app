const submit = document.querySelector('#submit')
const search = document.querySelector('#search-bar')


submit.addEventListener('click',(e)=>{
  const data = {input: search.value}
  const options = {
    method : 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch('/search',options).then((res)=>res.json()).then(console.log).catch(err => console.error(err))
})