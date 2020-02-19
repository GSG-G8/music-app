const submit = document.querySelector('#submit')


submit.addEventListener('click',(e)=>{
  const options = {
    method : 'POST',
    headers: {
      'Content-Type':'plain/text'
    },
    body: JSON.stringify({
      name: "ali",
    })
  }
  fetch('/search',options).then((res)=>{
    console.log(res)
  })
})