All columns for all players from the New York Knicks (NYK)
SELECT name FROM players WHERE team = 'NYK';

All columns for all players from the Indiana Packers (IND) who are under 26 years old
SELECT name FROM players WHERE team = 'IND' and age < 26;

All columns for all players, ordered from least points scored to most points scored
SELECT * FROM players ORDER BY points; 

Name and Points per game (points/games), for the players with the top 20 points per game
SELECT name, points FROM players ORDER BY points DESC limit 20;

The average age for all players
SELECT AVG(age) FROM players;

The average age for all players on the Oklahoma City Thunder (OKC)
SELECT AVG(age) FROM players WHERE team = 'OKC';

The average age for all players who played more than 40 games
SELECT AVG(age) FROM players WHERE games > 40;

The team and total points scored from all players on that team (team points), ordered from most team points to least
SELECT team, SUM(points) AS total_points FROM players GROUP BY team; 

###Bonus

1. Age and the average points per game for that age, ordered from youngest to oldest
* get age and average points per game
SELECT age, AVG(points/games) AS average_points FROM players GROUP BY age ORDER BY age ASC;

2. Team and the number of players who score above 12 points per game on that team, 
ordered from most to least
* get team and player count 
* counting players who scored above 12 pts per game
* order most to least players by team
SELECT team, COUNT(name) FROM players WHERE points/games > 12 GROUP BY team ORDER BY COUNT DESC;
