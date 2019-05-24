### Map/Reduce

- CouchDB Views

CouchDb views are not the preferred way to query documents in 2.0, but it is worth learning, just in case the new find functionality does not offer everything you need.

- map

Map is the core part of the couchdb view, it is a function that gets applied to every document and emits a key and value. The result is an indexed query that can be requested via a REST api call. 

> FYI: With map, the index only gets rebuilt when a query is requested, not when data is added.

- reduce

Reduce can create aggregates of data, `_sum`, `_count`, `_avg`

#### Design Docs

Views are stored in design docs, these documents are special documents in couchdb where you can put all kinds of logic helpers.

The design document id is prefixed with `_design`

```
{
  "_id": "_design/foo",
  "language": "javascript",
  "views": {
    "bar": {
      "map": "function (doc) { if (doc.type === 'hero') { emit(doc._id, 1) } }",
      "reduce": "_sum"
    }
  }
}
```



### Find/Mango

http://docs.couchdb.org/en/2.0.0/api/database/find.html

- \_index
- \_find
- Using Selectors

Since version 2.0 CouchDB introduced a new way to query documents, it is called mango and the query specification is borrowed from mongodb. Instead of creating a function like you do with map or reduce, with mango you provide a filter clause using operators like less than, greater than or equal.

`POST /db/_find`

```
{
  "selector": {
    "name": {
      "$regex": "Superman"
    }
  },
  "limit": 2
}
```

> https://docs.couchdb.org/en/2.2.0/api/database/find.html


### What about joins?

http://docs.couchdb.org/en/2.0.0/couchapp/views/joins.html?highlight=joins

---

* [Exercises](exercises)
* [Index](../)
