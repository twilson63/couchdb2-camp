## CouchDB Workshop

Welcome to the CouchDB Workshop 

This is the couchdb day long workshop, in this workshop we are going to cover and practice the common features of couchdb, as a benefit of learning couchdb we will take a deep dive into https and json. Two core technologies of the web, these technologies are foundational to web development.

## Requirements

* docker - https://www.docker.com/
* browser

## Pre-reqs

* [Understanding Http](/understanding-http.md)
* [JSON](/json.md)

## Setup

After installing docker, open a terminal and run the following docker command:

```
docker run -d -p 5984:5984 --name jrscode couchdb
```

## Lessons

* [Why CouchDB?](0-why/)
* [Basics](1-basics/)
* [BulkDocs](2-bulkdocs/)
* [Queries](3-queries/)
* [Advanced](4-advanced/)

## Why CouchDB?

> CouchDB is bad at everything except replication - Jason Smith

* Replication 
* Resilient
* Document Database
* https driver
* map and reduce
* dynamic find
* opensource
* changes feed

---

### Replication

One of the hardest problems with persistent data stores is replication, CouchDB does a great job at solving this problem using eventual consistency. It is trivial to setup Master to Master replication. Using an intenal revision number couch is able to figure which document usually wins, and if two or more documents conflict, couch keeps the conflicting documents and leaves it up to the developer to implement a resolution algorithm.

You might not think you need replication, until you do, and by that point it may be too late.

### Resilient

CouchDb uses an append only structure and writes documents to disk before returning a 200 success to the caller, this process makes it very durable and very unlikely for database corruption. Even during the worst outages, the odds are you will be able to recover couch data.

### Document Database

CouchDb stores JSON Documents in its datastore, this can provide a lot of flexibility early on and give you rich document structures like arrays and objects. Once you settle into the best document structure you can lock them down using document validation views.

### https driver

Most databases have special drivers you need to install and update over time, which can be problematic for multiple language support, or install drivers on os systems. Couch leverages internet standards and uses https as its driver, which makes it very much a citizen of the web. Every language that is used for web development contains standard libraries the interact with https.

### Map and Reduce

CouchDb has a different query system using map and reduce which can provide flexibility when building secondary indexes for accessing data. Being able to write queries using javascript enables you to leverage your core strength in the data access platform without a heavy abstraction or object relational mapper.

### Dynamic Find

In SQL, the where clause is a powerful construct. The declarative nature of concating several filter statements together is a valuable feature. With Couchdb you can do a similar construct with the mango find query.

### Opensource

CouchDb is a community driven project run in the apache foundation, there are no large companies driving the direction on CouchDb it is completely a democratic process. This means that it will continue to be a mainstay in the database community without the need of strong marketing strategies or company backing.

### Changes feed

CouchDb has a changes feed that provides a consumable stream of events when documents have been added, changed or removed. This feature can be a separator from other databases, but I would strongly encourage to use only when necessary, not because of the stability, but mainly because of the architecture design it pushes on your system, having long running processes watching for changes is not the most reliable architecture pattern.

## Basics


 
