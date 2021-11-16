'use strict';

const util = require('minecraft-server-util');

module.exports.status = async (event) => {
  const { host, port } = event.queryStringParameters;

  const status = await util.status(host, { port: parseInt(port) });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        status,
        input: event,
      },
      null,
      2
    ),
  };
};
