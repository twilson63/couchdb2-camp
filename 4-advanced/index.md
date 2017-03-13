### Compacting

http://docs.couchdb.org/en/2.0.0/maintenance/compaction.html?highlight=Compaction

### Local Documents

Local docs are useful for small bits of configuration or metadata, which you don't necessarily want to replicate, but which you want to keep in the database anyway. Many PouchDB plugins and core components use local docs. For instance, the replication algorithm uses them to store checkpoints, and map/reduce uses them to keep track of what's been emitted.

### Atomic Updates

http://docs.couchdb.org/en/2.0.0/couchapp/ddocs.html#update-functions

### Filters

http://docs.couchdb.org/en/2.0.0/couchapp/ddocs.html#filter-functions

### Validate Documents

http://docs.couchdb.org/en/2.0.0/couchapp/ddocs.html#validate-document-update-functions

### Show functions

Show functions allow you to represent documents in other formats

### List functions

List functions allow you to represent view results in other formats

### Security

admins,

http://localhost:5984/_utils/#createAdmin/node1@127.0.0.1

users, roles

http://localhost:5984/_users

### Configuration

cors,

http://localhost:5984/_utils/#_config/node1@127.0.0.1/cors

auth required,

`couch_httpd_auth::require_valid_user`

auto compaction


http://docs.couchdb.org/en/2.0.0/maintenance/compaction.html?highlight=Compaction#automatic-compaction

---

* [Exercises](exercises)
* [Index](../)
