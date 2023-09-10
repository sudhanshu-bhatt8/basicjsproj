

var nodelist = document.querySelectorAll('.button')
console.log(nodelist)

nodelist.forEach(function (value) {

    let StoreValueId = document.getElementById(value.id)

    StoreValueId.addEventListener('click', function () {
        let colorChange = document.getElementById('body')

        console.log(value.id)
        colorChange.style.backgroundColor = `${value.id}`
    })
    console.log(value.id)
    this.StyleElement = value.id
    StoreValueId.style.backgroundColor = `${value.id}`


 

})

