# ZadanieRektutacyjne
Zadanie rekrutacyjne zostało zbudowane na podstawie Angular 8 oraz Bootstrap4. 


Dane pobierane były z Wordpress Api : https://developer.wordpress.com/docs/api/
Docelowa strona : https://wordpress.com/blog/

Na stronie głównej w zależności od statusu danych zostają wyświetlone 3 opcje : 
- Komunikat o problemach z pobieraniem danych - w razie braku dostępu do danych
- Ładowanie - w trakcie ładowania danych
- Posty - Lista 5 postów ( ustawione w konfiguracji paginacji)

Paginacja jest customowym rozwiązaniem.
Wygląd strony został oparty o Bootstrap
Dane były pobierane przy pomocy HttpClient wbudowanego w Angulara.
Posty otwierają się w taki sposób, że z adresu strony zostaje pobierane ID posta, i z niego komentarze.


-----------------------------------------------------------------------------------------

# Recruitment task
Recruitment task was build od Angular 8 and Bootstrap 4


Data was downloaded by Wordpress API : https://developer.wordpress.com/docs/api/
Target size : https://wordpress.com/blog/

On main page are three cases to display :
- Alert about downloading data error - in case of no access to data,
- Loading - in case of loading data,
- Posts - list of 5 posts ( set in pagination configuration )

Pagination is custom solution.
Page view was build on Bootstrap
Data was downloaded throught HttpClient build in Angular.
Posts are opening by post ID in page adress, from the post with this ID comments are downloaded
