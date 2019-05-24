# JSON

JSON stands for Javascript object notation, it is the common way of passing data between clients and servers. This simple markup notation has proven to be quite powerful in its simplicity.

JSON only supports the following data types:

* number
* string
* boolean
* array
* object

The json object message consists of keys and values, a key MUST be a string and is always surrounded by `"` double quotes. Each value can be a boolean (true|false), number, string, array surrounded by square brackets `[]` or an object surrounded by curly brackets `{}`.

## Example

``` json
{
  "name": "Example JSON Object",
  "valid": true,
  "counter": 20,
  "items": [1,2,3,4],
  "meta": {
    "color": "blue"
  }
}
```

This protocol strikes a nice balance between machine readable and human reable, which proves to be very developer friendly.
