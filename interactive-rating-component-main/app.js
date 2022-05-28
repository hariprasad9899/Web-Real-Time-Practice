const ratings = [...document.getElementsByClassName('r')]
for(let i of ratings) {
    i.addEventListener("click",()=> {
        for(let j of ratings) {
            j.classList.remove('active');
        }
        i.classList.add('active');
    })
}

function submitRating() {
    const partOne = document.getElementsByClassName('partOne')[0];
    const partTwo = document.getElementsByClassName('partTwo')[0];
    const val = document.getElementById('val');
    for(let i of ratings) {
        if(i.classList.contains('active')) {
            val.innerText = i.innerText;
            partOne.style.display = "none";
            partTwo.style.display = "flex";
        }
    }
}