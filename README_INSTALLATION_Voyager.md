# Documentation d'Installation de Laravel Voyager

Cette documentation fournit les étapes nécessaires pour installer et configurer Laravel Voyager.

## 1- Accédez au 'e-formation-BackEnd' :
cd BackEnd

## 2- Mettez à jour les dépendances du projet en utilisant Composer :
composer update

## 3- Installez Laravel Voyager en exécutant la commande :
php artisan voyager:install

## 4- Effectuez les migrations de la base de données et exécutez les seeders pour ajouter des données de base :
php artisan migrate --seed

Vous pouvez maintenant accéder à l'interface d'administration de Voyager en naviguant vers http://localhost:3000/admin

E-mail: admin@gmail.com
Password: admin

Pour plus d'informations sur l'utilisation de Laravel Voyager, veuillez consulter la documentation officielle https://voyager.devdojo.com/