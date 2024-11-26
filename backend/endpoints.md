### Yleistä huomioitavaa:

PATCH VS PUT? Kumpi parempi

### Käyttäjien hallinta:

POST /users: Luo uusi käyttäjä (rekisteröinti).
GET /users/:id: Hae käyttäjän tiedot ID:n perusteella.
PUT /users/:id: Päivitä käyttäjän tiedot (esim. salasanan vaihto).
DELETE /users/:id: Poista käyttäjä.
POST /users/login: Käyttäjän kirjautuminen.
GET /users/:id/favourites: Hae käyttäjän suosikkiburgerit.

### Burgerit:

POST /burgers: Lisää uusi burgeri.
GET /burgers: Hae kaikki burgerit (sisältäen mahdolliset suodatusoptiot, esim. diets tai price).
GET /burgers/:id: Hae yksittäinen burgeri ID:n perusteella.
PUT /burgers/:id: Päivitä burgerin tiedot.
DELETE /burgers/:id: Poista burgeri.

# Parannusehdotuksia:

Endpointit kuten /burgers ja /drinks voivat hyväksyä suodatusparametreja (diets=vegan, price<10) helpottaakseen asiakkaiden hakua.

### Varaustenhallinta

POST /reservations: Luo uusi varaus (esim. käyttäjä ID ja pöytä ID).
GET /reservations: Hae kaikki varaukset (esim. käyttäjän tai päivämäärän perusteella).
GET /reservations/:id: Hae yksittäinen varaus ID:n perusteella.
POST /reservations/:id: Päivitä varauksen tietoja (esim. aika tai pöytä).
DELETE /reservations/:id: Poista varaus.

### Pöytienhallinta

GET /tables: Hae kaikki pöydät ja niiden varaustilanne.
POST /tables/:id/reserve: Päivitä pöytä varatuksi/vapaaksi.

### Etusivun karusellin hallinta

POST /carousel: Lisää uusi karusellielementti.
GET /carousel: Hae kaikki karusellielementit.
GET /carousel/:id: Hae yksittäinen karusellielementti ID:n perusteella.
PUT /carousel/:id: Päivitä karusellielementin tiedot.
DELETE /carousel/:id: Poista karusellielementti.

### Juomien hallinta

POST /drinks: Lisää uusi juoma.
GET /drinks: Hae kaikki juomat.
GET /drinks/:id: Hae yksittäinen juoma ID:n perusteella.
PUT /drinks/:id: Päivitä juoman tiedot.
DELETE /drinks/:id: Poista juoma.

## Lisukkeiden hallinta

POST /sides: Lisää uusi lisuke.
GET /sides: Hae kaikki lisukkeet.
GET /sides/:id: Hae yksittäinen lisuke ID:n perusteella.
PATCH /sides/:id: Päivitä lisukkeen tiedot.
DELETE /sides/:id: Poista lisuke.

### Authentication

TODO: Admin endpointit erikseen?
Token based system implementation
