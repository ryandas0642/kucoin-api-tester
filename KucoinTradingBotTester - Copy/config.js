/**
 * copy to config.js, and write configure
 */
 module.exports = {
    /** set API baseUrl, */
    /**   if not set this key, or empty, or false, or undefined, */
    /**   default baseUrl will be set by `process.env.PRODUCTION` */
    /**   if process.env.PRODUCTION === 'prod', the default value will be https://api.kucoin.io */
    /**   else use sandbox as https://openapi-sandbox.kucoin.io */
    baseUrl: 'https://api.kucoin.com',
    /** Auth infos */
    /**   key is API key */
    /**   secret is API secret */
    /**   passphrase as API passphrase */
    apiAuth: {
      key: '6209b3a807537e000190225c',
      secret: '69c96d89-6254-4890-a766-baed7ec4a8dc',
      passphrase: 'bcF7jkG0xAAF961'
    },
    authVersion: 2
  }