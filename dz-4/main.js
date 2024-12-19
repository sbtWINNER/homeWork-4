const elType = document.getElementById('selectInput')
const elInput = document.getElementById('elInput')
const elBtn = document.getElementById('btn')
const elDiv = document.getElementById('divEl')



elBtn.addEventListener ('click', () => {
    const selectValue = elType.value;

    if (selectValue === 'text') {
        const newText = document.createElement ('p')
        newText.textContent = elType.value;
        elDiv.appendChild (newText)
    }else if (selectValue === 'img') {
        const newImg = document.createElement('img')
        newImg.src = elInput.value;
        newImg.alt = 'нет изоброжении'
        elDiv.appendChild(newImg)
    }
})