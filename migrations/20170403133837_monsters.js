
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monstars', function(table){
      table.increments('monstar_id').primary()
      table.string('monstar_name').notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('monstars')
};
