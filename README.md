# Mijn DatingApp
Voor Project Tech 2019-2020, door Arthur van klas Tech 3

![Gevulde Gallerypage](/images/4.png)

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
## Proces
### Week 1
Na een tijdje geknoeid te hebben met Ubuntu ben ik opnieuw begonnen met Windows, dit was lastig omdat Windows maar toen alles werkte beviel dit me veel beter omdat ik nu veel meer controle heb over alles.

De boilerplate opzetten ging prima en vanzelfsprekend, heb wat dingen geïnstalleerd zoals camelcase. Run scripts begreep ik nog niet helemaal heb ik voor nu maar overgeslagen.

Routing ging OK... duurde ook een tijdje tot het kwartje viel, heb veel geknoeid en geprobeerd en uiteindelijk voor nu gekozen voor simpele maar werkbare code, via res.sendFile een plaatje kunnen 'serven', maar moet nog kijken hoe het zit met html en css.

### Week 2
In week 2 heb ik mij vooral bezig gehouden met EJS, ik vond dit vrij goed gaan omdat de documentatie wel duidelijk was en het vrij simpel in gebruik en te begrijpen is, tof dat je in je html bestand javascript kan uitvoeren!

### Week 3
In week 3 heb ik mij bezig gehouden met de input, voor mijn job story heb ik een formulier nodig waarbij een foto mee geupload kan worden, dit ging vrij goed met multer! Ik zat wel te strugglen met het maken van een detailpagina, en ik vroeg mij ook af hoe ik foto's ook weer kon verwijderen, dit is uiteindelijk wel goed gekomen in week 4 toen ik met Mongo aan de slag ging. Het heeft misschien niet veel te maken met backend, maar deze week heb ik mij ook bezig gehouden met de vormgeving, het is mij eindelijk gelukt om static files te serven met onder andere het CSS bestand.

### Week 4
Week 4 was erg pittig, als Windows gebruiker was Mongo niet vanzelfsprekend en het duurde een tijdje voordat ik het aan de praat kreeg. Het toffe aan een database is dat de gallerij altijd gevuld blijft, zelfs als ik de app uitzet. Met behulp van een youtube-video is het mij ook gelukt om een delete functie toe te voegen, en misschien behoort bewerken ook nog tot de toekomstige mogelijkheden.

## Voorbeelden
![Lege Gallerypage](/images/1.png)

![Uploadformulier](/images/2.png)

![Detailpagina](/images/3.png)

![Gevulde Gallerypage](/images/4.png)

## Bronnen
- https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows
- https://expressjs.com/en/starter/hello-world.html
- https://expressjs.com/en/starter/faq.html
- https://ejs.co/
- De slides van Backend 
- Web Dev Simplified (https://www.youtube.com/watch?v=qj2oDkvc4dQ)
- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
