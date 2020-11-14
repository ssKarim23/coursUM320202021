# Projet Alexandre Klein, Sofian Teraf, Karim Salah Salah

### Voici notre projet pour le module d'intégration de données connectées :

*Nous sommes tous les trois confinés ensemble et avons envoyé le projet depuis un seul ordinateur, celui de karim .*

Descriptif : 

Nous avons fait un mashup entre l'api openweather et l'api Géo Gouv afin de connaître la météo en temps réel d'une ville française ainsi que quelques informations concernant celle-ci. (Ceci n'étant pas très rigoureux étant donné que l'api openweather ne permet pas d'obtenir les données météo de TOUTES les villes française) 
Malgré tout, cela fonctionne avec la plus part d'entre-elles.

L'api openweather nous permet de récupérer les données suivantes :

1) Le nom de la ville
2) La température
3) La température ressentie
4) la vitesse du vent
5) L'humidité

Documentation : https://openweathermap.org/current
L'api necessite une clé, nous avons donc créer un compte et obtenu la clé suivante : a6c947626014e0fef3f25939d39c9200

Nous avons croisé ces données grace au nom de la ville.
Nous récupérons les données suivantes de l'api Géo Gouv :

1) Le nom de la ville
2) Le code INSEE
3) Le numéro de département
4) La population

Celle-ci renvoie un tableau d'une taille dépendant du nombre de ville contenant les caractères tapés dans le formulaire.
Nous avons donc du faire correspondre la ville choisie avec celle récupérée.

Documentation : https://geo.api.gouv.fr/decoupage-administratif

Nous avons utilisé BOOTSTRAP pour le HTML/CSS.

Il est également possible de rentrer la ville en minuscule car nous avons crée une fonction (récupérée ici : https://www.equinode.com/blog/article/mettre-la-premiere-lettre-en-majuscule-ou-minuscule-avec-javascript) permettant de changer la première lettre en majuscule. En effet, lorsque ce n'était pas le cas, cela provoquait une erreure.

La ville paramétrée par défaut est Montpellier.
