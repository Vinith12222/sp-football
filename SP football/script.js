document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual Sportmonks API key
    const scoresContainer = document.getElementById('scores-container');

    // Fetch live football scores from the Sportmonks API
    fetch(`https://soccer.sportmonks.com/api/v2.0/livescores/now?api_token=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            // Check if data is available
            if (data.data.length > 0) {
                displayScores(data.data);
            } else {
                scoresContainer.textContent = 'No live scores available.';
            }
        })
        .catch(error => {
            console.error('Error fetching live scores:', error);
            scoresContainer.textContent = 'Error fetching live scores.';
        });

    // Function to display live scores
    function displayScores(scores) {
        const scoresList = document.createElement('ul');
        scores.forEach(score => {
            const listItem = document.createElement('li');
            listItem.textContent = `${score.localTeam.name} ${score.scores.localteam_score} - ${score.scores.visitorteam_score} ${score.visitorTeam.name}`;
            scoresList.appendChild(listItem);
        });
        scoresContainer.appendChild(scoresList);
    }
});
