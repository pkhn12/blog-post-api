'use strict';

const controller = require('./post.controller');

module.exports = Router => {
  const router = new Router({
    prefix: `/posts`,
  });

  router.get('/', controller.getAll);

  return router;
}