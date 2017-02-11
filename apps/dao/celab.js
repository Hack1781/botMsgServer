"use strict";

const factory = require('./connection-factory');
const db = factory.createDao();

db.table = 'celab';

module.exports = db;

