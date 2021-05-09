'use strict';

exports.getAll = async ctx => {
  const {db} = ctx;
  const posts = await db.posts.findAll();
  ctx.status = 200;
  ctx.body = posts;
}