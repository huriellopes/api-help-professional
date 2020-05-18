exports.up = function(knex) {
  return knex.schema.createTable('professional', function (table) {
    table.increments('id').primary().notNullable();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('phone').notNullable();
    table.string('profession').notNullable();
    table.text('report').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').nullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('professional')
};
