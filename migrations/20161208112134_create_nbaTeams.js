
exports.up = function(knex, Promise) {
  return knex.schema.createTable('nba_teams', function(table){
    table.increments();
    table.string('name');
    table.string('conference');
    table.string('star_player');
    table.integer('wins');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('nba_teams')
};
