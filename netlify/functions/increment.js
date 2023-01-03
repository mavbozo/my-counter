exports.handler = async function (event, context) {
  const body = JSON.parse(event.body);
  var value = body.value;
  value = value + 1;
  return {
    statusCode: 200,
    body: JSON.stringify({ value: value }),
  };
};
