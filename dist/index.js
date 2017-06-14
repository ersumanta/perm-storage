"use strict";

module.exports = {
    get: function get(id) {
        return localStorage.getItem(id);
    },
    set: function set(id, value) {
        localStorage.setItem(id, value);
    },
    getObj: function get(id) {
        return JSON.parse(localStorage.getItem(id));
    },
    setObj: function set(id, value) {
        localStorage.setItem(id, JSON.stringify(value));
    }
};
