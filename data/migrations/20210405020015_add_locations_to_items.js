
exports.up = function(knex) {
    return knex.schema.table('item', table => {
        table.string('location', 128);
    })
  
};

exports.down = function(knex) {
  return knex.schema.table('item',table => {
      table.dropColumn('location');
  })
};
