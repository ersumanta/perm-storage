# perm-storage
A Temp storage pattern for Javascript

## Installation

npm install perm-storage --save

## Usage

### Initialisation
// ES 5

var permStorage = require("perm-storage");

// or ES 6

import permStorage from "perm-storage";

### Set an Item to storage
permStorage.set("id", "A Value in String");

### Get an Item from storage
permStorage.get("id");

### Set an Object to storage
permStorage.setObj("id", { id: 1, name: "Sumanta Sarkar" });

### Get an Item from storage
permStorage.getObj("id");


