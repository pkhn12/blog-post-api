
module.exports = (sequelize, Types) => {

	const Posts = sequelize.define('posts', {
    id: {
      type: Types.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Types.STRING,
    },
    detail: {
      type: Types.STRING,
    }
  }, {
    timestamps: false,
  }) 

  return Posts;
};