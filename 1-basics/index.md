### Setting up CouchDB

- Docker `docker run -d -p 5984:5984 --name couchdb couchdb`

> If you are not able to install docker on windows, then you can install couchdb from the downloads page: http://couchdb.apache.org/


### Working with Databases

PUT http://localhost:5984/mydb

GET http://localhost:5984/mydb

DELETE http://localhost:5984/mydb

GET http://localhost:5984/_all_dbs

### Working with Documents

* create new document

```
POST http://localhost:5984/mydb
Content-Type: application/json

{
  "type": "automobile",
  "model": "thing",
  "make": "volkswagen",
  "year": "1968",
  "image": "https://en.wikipedia.org/wiki/Volkswagen_181#/media/File:Vw_181_v_sst.jpg"
}
```

response

```
{
  "ok": true,
  "id": "91d98c434af8fb4b9d2e57c596002bee",
  "rev": "1-996bb624e900d0e506ff105b2d75a3e0"
}
```


* get document

```
GET http://localhost:5984/mydb/91d98c434af8fb4b9d2e57c596002bee
```

response

```
{
  "_id": "91d98c434af8fb4b9d2e57c596002bee",
  "_rev": "1-996bb624e900d0e506ff105b2d75a3e0",
  "type": "automobile",
  "model": "thing",
  "make": "volkswagen",
  "year": "1968",
  "image": "https://en.wikipedia.org/wiki/Volkswagen_181#/media/File:Vw_181_v_sst.jpg"
}
```

* update document

```
PUT http://localhost:5984/mydb/91d98c434af8fb4b9d2e57c596002bee
Content-Type: application/json

{
  "type": "automobile",
  "model": "thing",
  "make": "volkswagen",
  "year": "1970",
  "image": "https://en.wikipedia.org/wiki/Volkswagen_181#/media/File:Vw_181_v_sst.jpg"
}
```

responses

```
{
  "error": "conflict",
  "reason": "Document update conflict."
}
```

```
PUT http://localhost:5984/mydb/91d98c434af8fb4b9d2e57c596002bee
Content-Type: application/json

{
  "_id": "91d98c434af8fb4b9d2e57c596002bee",
  "_rev": "1-996bb624e900d0e506ff105b2d75a3e0",
  "type": "automobile",
  "model": "thing",
  "make": "volkswagen",
  "year": "1970",
  "image": "https://en.wikipedia.org/wiki/Volkswagen_181#/media/File:Vw_181_v_sst.jpg"
}
```

response

```
{
  "ok": true,
  "id": "91d98c434af8fb4b9d2e57c596002bee",
  "rev": "2-7c0275f9ebc38dddfce7d90f4fc1f7b8"
}
```

* delete document

```
DELETE http://localhost:5984/mydb/91d98c434af8fb4b9d2e57c596002bee
```

response

```
{
  "error": "conflict",
  "reason": "Document update conflict."
}
```

```
DELETE http://localhost:5984/mydb/91d98c434af8fb4b9d2e57c596002bee?rev=2-7c0275f9ebc38dddfce7d90f4fc1f7b8
```

response

```
{
  "ok": true,
  "id": "91d98c434af8fb4b9d2e57c596002bee",
  "rev": "3-08f115943fbf842390fa6c0bddad2f92"
}
```


---

* [Exercises](exercises)
* [Index](../)
