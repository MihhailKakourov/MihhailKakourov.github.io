Babel- võimaldab kaasaegse JavaScripti kasutamist ja transpileerimist vanematesse brauseritesse.
CoreJS - pakub polüfille, et toetada uusimaid JavaScripti funktsioone vanemates keskkondades.
JSON Server - lihtne viis simuleerida REST API-d, et arendustööd lihtsustada.
Webpack - moodulite pakkimise ja haldamise tööriist, mis aitab hallata projekti faile ja sõltuvusi.
Projekti alustamiseks:

1. Laadige projekt Githubist alla

2. Kleepige projekt teele xampp/htdocs

3. Käivitage xampp, see sisaldab apache'i

4. Kirjutage projekti terminali:
npm i
npx json-server --watch file db.json

5. Avage uus terminal ja tippige:
npx webpack

6. Avage brauser ja tippige:
localhost/"proektinimi"