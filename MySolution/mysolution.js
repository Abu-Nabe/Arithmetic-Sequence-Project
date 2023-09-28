<!DOCTYPE html>
<html>
<head>
    <title>My Solution</title>
    <link rel="stylesheet" type="text/css" href="mysolution.css">
</head>
<body>
    <div class="container">
        <h2 id="solution"></h2>
        <form>
            <label for="input">Number puzzle (Space to insert)</label>
            <input type="number" id="solutionInput" name="solutionInput" placeholder="Add numbers" inputmode="numeric">
            <br>
            <input type="submit" id="submitButton" value="Solve" >
        </form>
    </div>
</body>

<script>
    // Retrieve element from id
    const solInput = document.getElementById('solutionInput');
    const submitButton = document.getElementById('submitButton');
    const display = document.getElementById('solution');
    // create an array which will be stored to later solve the algorithmic question
    var numberArray = []

    // Event listener for when spacebar is pressed
    solInput.addEventListener('keydown', function() {
        // check for if submit was clicked
        if(display.innerHTML === "Insert more numbers"){
            display.innerHTML = ""
        }else if(numberArray.length == 0){
            display.innerHTML = ""
        }
        // This function will be called whenever the text changes
        // when number is typed, it shows on display and erases it on text
        if (event.keyCode === 32) {
            display.innerHTML = display.innerHTML + " " + solInput.value  
        
            // stores each inserted value
            numberArray.push(solInput.value);
            solInput.value = ""
        }
    });

     
     // Event listener for when clicking on solution
     submitButton.addEventListener('click', function(event) {
        // To prevent input from acting up i.e reloading page for no reason
        event.preventDefault();

        findSolution();        
    });

    function findSolution() {
        // if less than 2 lengths then won't work
        if (numberArray.length < 2) {
            display.innerHTML = "Insert more numbers"
            return
        }

        // Difference between 2 numbers to get the starting average
        const commonDifference = numberArray[1] - numberArray[0];

        // Check if the average is the same
        for (let i = 1; i < numberArray.length - 1; i++) {
            const commonDifference2 = numberArray[i + 1] - numberArray[i]
            if (commonDifference2 !== commonDifference) {
                var newDifference = commonDifference2 - commonDifference;

                // One of the Limitations to this is that I didn't use a quadratic time complexity 
                // so if you type something like 2 4 6 8 16, it'll still print out 2
                // because I only checked the first few numbers
                // too time consuming that's why

                // Check all sorts of solution if sequences is complexed
                if (commonDifference * 2 === commonDifference2) {
                    display.innerHTML = "Solved: Double "+ commonDifference
                }else if(commonDifference/2 === commonDifference2){
                    display.innerHTML = "Solved: Divide 2";
                }
                else if(numberArray[0] ** 2 == numberArray[1]){
                    display.innerHTML = "Solved: Multiply "+ numberArray[0]
                }else if(numberArray[0] / 2 == numberArray[1]){
                    display.innerHTML = "Solved: Divide"+ numberArray[0]
                }else{
                    display.innerHTML = "Answer not consistent/or solution to sequence wasn't coded"
                }
                numberArray = []
                return
            }
        }
        display.innerHTML = "Solved: "+ commonDifference
        numberArray = []
    }

</script>

</html>
