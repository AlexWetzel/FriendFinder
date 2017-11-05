# FriendFinder
FriendFinder is a personality test web application that finds similar people based on your answers to a quiz.

To use the app, click the link on the home page to start the survey. Enter your name and pase a link to a picture of yourself (or any image), then complete the quiz. 

The quiz consists of ten questions. Each question is phrased as a statement about your personality. The answer is a score based on how well you agree with the statement, ranging from 1 (strongly disagree) to 5 (strongly agree).

Upon hitting the submit button, the information is sent to the server, where it compares each individual answer with the scores of everyone in the database. A match is determined by finding the lowest sum of the difference between each answer.

The data of the match is sent back to the client, and their name and picture is displayed in a modal on the web page.

On the bottom of the survey page, there is a link to see the entries in the API, and a link to reset the API to a default state (however, I was unable to get this to work).



