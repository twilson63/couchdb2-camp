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

It is easy to replicate with couch, solving conflicts is not easy, but couch does the right thing and gives the developer control of the solution. Why replicate? 

* Get data as close to the user as possible
* Give the user offline support
* Aggregate data to central datastore
* Move data from one location to another

#### How to replicated data using the api

`POST /db/_replicate`

or

`POST /_replicator` - persisted version 

> Supports the following attributes: `_id`, `source`, `target`, `filter`, `query_params`, `doc_ids`, `create_target`, `continuous`, `use_checkpoints`, `checkpoint_interval`

```
{
    "_id": "my_rep",
    "source": "http://myserver.com/foo",
    "target":  "http://user:pass@localhost:5984/bar",
    "create_target":  true,
    "continuous": true
}
```

We can find the status of a replication by performing a 

`GET /_scheduler/jobs`



### Conflict Strategies

When having multiple write sources, you will have conflicts, so you need to manage them. Here are a couple of strategies:

- upsert
- delta strategy

http://docs.couchdb.org/en/stable/replication/conflicts.html#working-with-conflicting-documents


### Changes Feed

The changes feed allows you to retrieve a list of the changes that have occured in the database, adds, updates, and deletes.

https://docs.couchdb.org/en/stable/api/database/changes.html?highlight=Changes

There are three modes, continous, long polling, and event source. Event Source events can be consumed by the browser in the form of DOM events.


---

* [Exercises](exercises)
* [Index](../)
