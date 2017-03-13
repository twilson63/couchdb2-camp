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

GET /\_all_docs?include_docs=true

http://docs.couchdb.org/en/2.0.0/api/database/bulk-api.html

name | description
-----|------------------------
startkey | docId to start with
endkey | stop returning records with key is reached
limit | number of documents to return
skip | number of records to skip

Pagination

GET /\_all_docs?include_docs=true&limit=5&startkey=doc04&skip=1


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

---

* [Exercises](exercises)
* [Index](../)
