# Understanding HTTP

HyperText Transfer Protocol - the protocol for the web. This protocol defines how clients and servers communicate over the web. It is the core fabric of the current web and how almost all services interact.

An http request is a message sent to a server asking for information or providing some instruction set. The request consists of an URL or universal resource locator, which specifies a location or address on the internet to a server. The request also contains verbs, these verbs provide insight to the nature of the request. GET, POST, PUT, DELETE are the most common verbs with http. The combination of the url and the verb, the server is able to understand the request and determine a response. The response in a http transaction contains a status code and a message. The status code lets the client know the status of the response. 200, 404, 500 are some common status codes. Lets look as some simple http messages:

```
GET / HTTP/1.1
Host: localhost:5984
Accept: */*
```

```
[VERB] [PATH] [PROTOCOL]/[VERSION]
[Headers]

[Body]
```

The response looks something like this:

```
HTTP/1.1 200 OK
Content-Length: 208
Content-Type: application/json

{"couchdb":"Welcome","version":"2.3.1","git_sha":"c298091a4","uuid":"a6b2d858512b3ddf09817c0da66abb84","features":["pluggable-storage-engines","scheduler"],"vendor":{"name":"The Apache Software Foundation"}}
```

```
[PROTOCOL]/[VERSION] [STATUS_CODE] [STATUS_TEXT]
[HEADERS]

[Body]
```

It turns out, a lot can happen with this protocol.
