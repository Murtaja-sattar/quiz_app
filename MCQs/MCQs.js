fetch("MCQs.json")
.then(response => response.json())
.then(data => {
    let current  = 0;

    const openBtn = document.getElementById("openNotes")
    const closeBtn = document.getElementById("closeNotes")
    const panel = document.getElementById("panel")

    function showQuestion(q){
        document.getElementById("question").textContent = q.question
        document.getElementById("note").textContent = q.explanation

        let answered = false
        
        const options = document.getElementById("options");
        options.innerHTML = '';
        
        openBtn.disabled = true

        q.options.forEach(option => {
            const li = document.createElement("li")
            li.textContent = option
            li.onclick = () => {
                if (answered) {
                    alert("Question is answered!!")
                    return
                }

                answered = true
                openBtn.disabled = false

                if (option === q.answer){
                    li.style.backgroundColor = "rgba(90, 189, 19, 1)"
                }
                else {
                    li.style.backgroundColor = "rgba(190, 30, 30, 1)"
                    Array.from(options.children).forEach(child => {
                    if (child.textContent === q.answer) {
                        child.style.backgroundColor = "rgba(90, 189, 19, 1)"
                    }
                    else {
                        child.style.backgroundColor = "rgba(190, 30, 30, 1)"
                    }
                })
                }
            }
            options.appendChild(li)
        })
        
    }
    qNumber()

    function nextQ(){
        const button = document.getElementById("nextButton")
        button.onclick = () => {
            if (current < data.length - 1 && current >= 0){
                current++
                qNumber()
                showQuestion(data[current])
        }  
    }
}


    function prevQ(){
        const button = document.getElementById("prevButton")
        button.onclick = () => {
            if (current > 0 && current < data.length){
                current--
                qNumber()
                showQuestion(data[current])
        }
    }
}


    function qNumber() {
        const number = document.getElementById("Q-number")
        number.textContent = current + 1 
        showQuestion(data[current])
    }

    function displayNotes(){
        openBtn.onclick = () => {
            if (openBtn.disabled) return
            panel.style.display = 'flex'
        }

        closeBtn.onclick = () => {
            panel.style.display = 'none'
        }
    }

    nextQ()
    prevQ()
    showQuestion(data[current])
    displayNotes()
})