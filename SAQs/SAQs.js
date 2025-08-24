fetch("SAQs.json")
.then(response => response.json())
.then(data => {
    let current  = 0;

    function showQuestion(q){
        document.getElementById("question").textContent = q.question
    }

    function showAsnswer(q){
        const button = document.getElementById("show-ans")
        button.onclick = () => {
            document.getElementById("answer").textContent = q.answer
        }
    }

    function nextQ(){
        const button = document.getElementById("nextButton")
        button.onclick = () => {
            if (current < data.length - 1 && current >= 0){
                current++
                document.getElementById("answer").textContent = " "
                qNumber()
                showQuestion(data[current])
                showAsnswer(data[current])
        }  
    }
}


    function prevQ(){
        const button = document.getElementById("prevButton")
        button.onclick = () => {
            if (current > 0 && current < data.length){
                current--
                document.getElementById("answer").textContent = " "
                qNumber()
                showQuestion(data[current])
                showAsnswer(data[current])
                
        }
    }
}

    function qNumber() {
        const number = document.getElementById("Q-number")
        number.textContent = current + 1 
        showQuestion(data[current])
    }

    nextQ()
    prevQ()
    qNumber()
    showQuestion(data[current])
    showAsnswer(data[current])
})