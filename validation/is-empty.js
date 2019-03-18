const isEmpty = value => 
value === undefined ||
value === null ||
(typeof value === 'object' && Object.keys(value).lengt === 0) ||
(typeof value === 'string' && value.trim().lengt === 0);

module.exports = isEmpty;