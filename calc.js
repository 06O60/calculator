let result = "0";
let secondNum = "0";
let lastAction = "n"; // n -> nie wybrano działania, a jak tak to trzyma jakie dzialanie
let shownResult = document.querySelector('.result');

document.querySelector('.calculator-body').addEventListener('click', function(event) {
    const clickedClass = event.target.className;
    if(clickedClass === "action")
    {
        actionClicked(event.target.innerText);
    }
    else if(clickedClass === "num")
    {
        numClicked( event.target.innerText )
    }
    else if(clickedClass === "clear")
    {
        clearClicked();
    }
    else if(clickedClass === "erase")
    {
        eraseClicked();
    }
});

let xd = "lol";
let liczba = 9;
xd = liczba.toString();
console.log(typeof(xd), xd);

/*function count()
{
    let resInt = parseInt(result) + parseInt(secondNum);
    return resInt.toString();
}
function actionClicked (action)
{
    console.log("Action clicked!");
    if(secondNum !== "0")
    {
        result = count();
    }        
    secondNum = "0";
    shownResult.innerHTML = secondNum;
    lastAction = action;
}*/

function numClicked (number)
{
    console.log("Number clicked!");
    if(lastAction === "n")
    {
        if(result === "0")
            result = "";
        result += number;
        shownResult.innerHTML = result;
    }
    else 
    {
        if(secondNum === "0")
            secondNum = "";
        secondNum += number;
        shownResult.innerHTML = secondNum;
    }
}

function clearClicked ()
{
    console.log("Clear clicked!");
    result = "0";
    secondNum = "0";
    lastAction = "n";  
    shownResult.innerHTML = "0";
}

function eraseClicked ()
{
    console.log("Erase clicked!");
    if(lastAction === "n")
    {
        result = result.slice(0, -1);
        if(result.length == 0)
            result = "0";
        shownResult.innerHTML = result;
    }
    else
    {
        secondNum = secondNum.slice(0, -1);
        if(secondNum.length == 0)
            secondNum = "0";
        shownResult.innerHTML = secondNum;
    }
}