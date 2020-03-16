# Mijn DatingApp
Voor Project Tech 2019-2020, door Arthur van klas Tech 3

## Concept
Het concept voor mijn feature is een gallery page, waarbij er een overzicht van foto's te zien is, de foto's kunnen in detail worden bekeken. Er kunnen nieuwe foto's geüpload worden en de foto's kunnen ook verwijderd worden.

### Job Story
> Wanneer ik op zoek ben naar een match wil ik op een overzichtelijke manier de foto’s van andere gebruikers kunnen bekijken zodat ik snel een goed beeld kan vormen van mijn potentiele match.

## Installatie
1. clone de datingapp repository
2. navigeer met de terminal naar de repository
3. voer in de terminal `npm install` in
4. om de database te gebruiken heb je mongoDB nodig en een .env file, deze file staat niet in de repository maar kan ik wel naar jou toesturen
5. voer in de terminal `mongod --dbpath /data/` in
6. voer in de terminal `node index.js` in en de server zal nu vanaf je browser bereikbaar zijn op `localhost:3000`

## Database
De app maakt gebruik van een simpele database, het schema ziet er als volgt uit:

```
title:        string
description:  string
photo:        file
```



