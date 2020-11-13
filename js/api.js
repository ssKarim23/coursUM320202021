const cleapi = '366e5f70d9e70e45364730cb9a4f0221';

/*Appel a l'API openWeather/geo avec ville en parametre de fonction*/
let aplapi = function (city) 
{
  let url2 = `https://geo.api.gouv.fr/communes?nom=${city}`;
  let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${cleapi}&units=metric&lang=fr`;
  

  // fetch avec l'url de la météo, récupération du nom, température, temp ressentie, vitesse du vent et taux d'humidité
  fetch(url1).then
  (
    function(response)
    {
      response.json().then
      (
        function(data1)
          {
            console.log(data1);
            document.querySelector('#city').innerHTML = data1.name;
            document.querySelector('#temp').innerHTML = 'Température ' + data1.main.temp + '°';
            document.querySelector('#feels_like').innerHTML = 'Ressenti ' + data1.main.feels_like + '°';
            document.querySelector('#wind').innerHTML = 'Vent ' + data1.wind.speed + '';
            document.querySelector('#humidity').innerHTML = 'Humidité ' + data1.main.humidity + '  %'
          }
      )
    }
  )
    
  // fetch avec l'url du gouv, récupération de la population, du code insee et du numéro de département
  fetch(url2).then
  (
    function(response)
      {
        response.json().then
        (
          function(data2)
          {
            console.log(data2);

            /* boucle qui parcours les résultats + if pour s'assurer que les données récupérées soient celles de la ville entrée 
            dans le form (car api gouv renvoie toutes les villes contenant la chaine de caractère entrée)*/

            
            for(var i = 0; i < data2.length; i++)
            {
              if(data2[i].nom == `${city}`)
              {
                document.querySelector('#population').innerHTML = 'Population ' + data2[i].population ;
                document.querySelector('#code').innerHTML = 'Insee  ' + data2[i].code  ;
                document.querySelector('#dep').innerHTML = 'Département ' + data2[i].codeDepartement ; 
              }

              else 
              {
                i++;
              }
            }
          }
        )
      }
  )
};

/* Fonction qui convertit en majuscule la première lettre d'une chaine de caractère (si l'on écrit dans le formulaire une ville entièrement en minuscule undifined s'affiche) */

function Maj(a)
{
  return (a+'').charAt(0).toUpperCase()+a.substr(1);
};

/*Ecouteur d'evenement sur la soumission du formulaire et récupération/stockage de la ville entrée dans le formulaire*/

document.querySelector('form').addEventListener('submit', function (e){
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;
  ville = Maj(ville);
  aplapi(ville);
});

//Ville par defaut au chargement de la page

aplapi('Montpellier');


