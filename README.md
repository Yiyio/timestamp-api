# timestamp-api

## What is this?

This is a microservice API project for Free Code Camp that will accept either a human readable ('natural') date or a unix formatted date and return a json response with the date formatted as both. If the input is neither it will return null values.

You can test it at https://pacific-headland-16420.herokuapp.com/

## Usage

https://pacific-headland-16420.herokuapp.com/December%2015,%202015

https://pacific-headland-16420.herokuapp.com/1420848000

Sample Output
```
{"unix":1450134000000,"natural":"December 15, 2015"}
```

```
{"unix":1450137600,"natural":"January 17, 1970"}
```

## Running this project

Simply launch it with node using npm run start or node server.js
