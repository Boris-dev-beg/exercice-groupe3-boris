## Description du contenu du depot et comment lancer chaque exercice
# Description
- csv-analyser: C'est un code qui permet de :
    - lire un fichier csv avec le module csv de python
    - Determiner le chiffre d'affaire et le produit le plus en fonction des donnees contenues dans le fichier
    - Afficher un message de conclusion en console pour le resumer

- library-manager: Ce code permet de  "Gerer une bibliotheque" en permettant d'effectuer les operations suivantes:
    - Ajouter un livre
    - Emprunter un livre si il est marquee comme disponible
    - Rendre un livre
    - Afficher tous les livres

- mini-projet: contient deux dossiers :
    - "scrapper", contient le code python qui va chercher des donnees dans un site pour les enregistrees dans le fichier data.json
    - "web", contient:
        - le code javaScript qui va recuperer les donnees depuis le fichier json et les envoyers au HTML
        - le code HTML/CSS qui va afficher les donnees sous forme de grille d'article (titre, description, lien)

- quiz-game (jeu de quizz): contient le code :
    - JavaScript : pour gerer le jeu:
        - Changement de page,
        - Calcul du score finale
    - HTML/CSS: Pour gerer l'affichage du jeu (en forme de grille)

- weather-app: Permet d'afficher la meteo d'un ville donnee, contient:
    - JavaScript: Pour la recuperation des donnees, la gestion des ercans (erreurs, Pas de donnees trouvee, donnee trouver)
    - HTML/CSS: Pour l'affichage des donnees

# Comment lancer
Pour lancer: csv-manager, library-manager et mini-projet(scraper):
    - Il faut avoir python d'installer dans la machine 
    - Ce deplacer dans le dossier concerner et Taper la commande : "python main.py"
     
Pour lancer le mini-projet de scrapping, il faut:
    - Installer les bibliotheques : requests et beautifulsoup4
    - Lancer la commande "python3 main.py" pour charger les donnees et les stockees dans le fichier "data.json" avant que le JS les recupere et les envoies au HTML.