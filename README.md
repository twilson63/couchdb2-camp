# CouchDb 2 training

## Guide

### Why?

* Resilient
* Master Master Replication
* Changes Feed
* HTTP REST API

### Setting up CouchDB

- Docker `docker run -d -p 5984:5984 klaemo/couchdb:2.0-dev --with-haproxy --with-admin-party-please -n 1`
- Windows https://dl.bintray.com/apache/couchdb/win/2.0.0.1/apache-couchdb-2.0.0.1.msi

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

### BulkDocs

Get All Documents

GET http://localhost:5984/mydb/_all_docs

```
{
  "total_rows": 0,
  "offset": 0,
  "rows": []
}
```

Parameters

include docs

GET /_all_docs?include_docs=true

http://docs.couchdb.org/en/2.0.0/api/database/bulk-api.html

name | description
-----|------------------------
startkey | docId to start with
endkey | stop returning records with key is reached
limit | number of documents to return
skip | number of records to skip

Pagination

GET /_all_docs?include_docs=true&limit=5&startkey=doc04&skip=1


### Create/Updating/Deleting Docs

```
POST /db/_bulk_docs  
Content-Type: application/json

{
  "docs": [{
    "_id": "doc01",
    "name": "document 1"
  }, {
    "_id": "doc02",
    "_rev": "1-xxxx",
    "name": "document 2"
  }, {
    "_id": "doc03",
    "_rev": "1-xxxx",
    "name": "document 3",
    "_deleted": true
  }]
}
```

optional transaction mode - all_or_nothing: true


### Replication

https://pouchdb.com/guides/replication.html

### Conflicts

- upsert
- delta strategy

### Changes Feed

http://docs.couchdb.org/en/2.0.0/api/database/changes.html

### Map/Reduce

- CouchDB Views

### Find/Mango

http://docs.couchdb.org/en/2.0.0/api/database/find.html

- Creating Index
- Using Selectors

http://nolanlawson.github.io/pouchdb-find/

### Compacting

### Local Documents

### Atomic Updates

http://docs.couchdb.org/en/2.0.0/couchapp/ddocs.html?highlight=doc%20validate#update-functions

### Filters

http://docs.couchdb.org/en/2.0.0/couchapp/ddocs.html?highlight=doc%20validate#filter-functions

### Validate Documents

http://docs.couchdb.org/en/2.0.0/couchapp/ddocs.html?highlight=doc%20validate#validate-document-update-functions

### Show functions

Show functions allow you to represent documents in other formats

### List functions

List functions allow you to represent view results in other formats

### Security

admins, users, roles

### Configuration

cors, auth required, auto compaction

 
