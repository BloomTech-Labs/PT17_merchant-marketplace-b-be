exports.up = function (knex) {
  return knex.schema.table('item', (t) => {
    t.string('shipping', 128);
  });
};

exports.down = function (knex) {
  return knex.schema.table('item', (t) => {
    t.dropColumn('shipping');
  });
};
