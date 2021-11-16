// DELETE

function del(val){
    fetch('https://estagio.eficazmarketing.com/api/user/' + val, {
        method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => alert(res.substring(12,44)))
    .then(res => document.location.reload(true))
}