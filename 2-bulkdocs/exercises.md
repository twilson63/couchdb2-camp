# Exercises

1. Create database `games`

2. Bulk Insert these docs:

``` json
{
  "name": "Donkey Kong",
  "series": "Mario",
  "debut": 1981,
  "_id": "dk",
  "type": "character"
},
{
  "name": "Captain Falcon",
  "series": "F-Zero",
  "debut": 1990,
  "_id": "falcon",
  "type": "character"
},
{
  "name": "Fox",
  "series": "Star Fox",
  "debut": 1993,
  "_id": "fox",
  "type": "character"
},
{
  "name": "Kirby",
  "series": "Kirby",
  "debut": 1992,
  "_id": "kirby",
  "type": "character"
},
{
  "name": "Link",
  "series": "Zelda",
  "debut": 1986,
  "_id": "link",
  "type": "character"
},
{
  "name": "Luigi",
  "series": "Mario",
  "debut": 1983,
  "_id": "luigi",
  "type": "character"
},
{
  "name": "Mario",
  "series": "Mario",
  "debut": 1981,
  "_id": "mario",
  "type": "character"
},
{
  "name": "Ness",
  "series": "Earthbound",
  "debut": 1994,
  "_id": "ness",
  "type": "character"
},
{
  "name": "Pikachu",
  "series": "Pokemon",
  "debut": 1996,
  "_id": "pikachu",
  "type": "character"
},
{
  "name": "Jigglypuff",
  "series": "Pokemon",
  "debut": 1996,
  "_id": "puff",
  "type": "character"
},
{
  "name": "Samus",
  "series": "Metroid",
  "debut": 1986,
  "_id": "samus",
  "type": "character"
},
{
  "name": "Yoshi",
  "series": "Mario",
  "debut": 1990,
  "_id": "yoshi",
  "type": "character"
}
```

3. Bulk Update docs with rating node, and stars

4. Create 3 page urls of 4 games each, using \_all_docs , startkey, limit, and skip

5. Bulk Delete docs with series Pokemon

6. Replicate Games Database to Games2 and add bulk add Pokemon Characters into Games2 db
then replicate Games2 to Games Database


[Return](./)
