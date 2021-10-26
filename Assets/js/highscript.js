const highScoreOL = document.getElementById("highScoreList");

window.onload = function()
{
    loadScores();
}

function loadScores() {
    if(localStorage !== 'undefined')
    {
        let ol = document.createElement('ol');
        document.getElementById('highScoreList').appendChild(ol);

        for(var i = 0; i < localStorage.length; i++)
        {
            let li = document.createElement('li');
            var userName = localStorage.key(i);
            li.textContent = userName + " - " + localStorage.getItem(userName);
            ol.appendChild(li);
        
        }
    }
}
 