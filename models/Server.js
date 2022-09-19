const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on ${this.port}`);
    });
  }
}

module.exports = Server;
