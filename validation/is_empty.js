const isEmpty = (data) =>
  data === undefined ||
  data === null ||
  (typeof data === "object" && Object.keys(data).length === 0) ||
  (typeof value === "string" && data.trim().length === 0);

module.exports = isEmpty;
