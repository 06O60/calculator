let result = 0;
let secondNum = -1;
let isActionClicked = "n";

document.querySelector('.calculator-body').addEventListener('click', function(event) {
    const clickedClass = event.target.className;
    if(clickedClass == "action")
    {
        actionClicked(event.target.innerText);
    }
    else if(clickedClass == "num")
    {
        numClicked( parseInt(event.target.innerText) )
    }
    else if(clickedClass == "clear")
    {
        clearClicked();
    }
    else if(clickedClass == "erase")
    {
        eraseClicked();
    }
});


function actionClicked (action)
{
    console.log("Action clicked!");
}

function numClicked (number)
{
    console.log("Number clicked!");
}

function clearClicked ()
{
    console.log("Clear clicked!");
}

function eraseClicked ()
{
    console.log("Erase clicked!");
}