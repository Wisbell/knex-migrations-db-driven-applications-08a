exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monstars').del()
    .then(function () {
      // Inserts seed entries
      return knex('monstars').insert([
        {monstar_name: 'Cookie'},
        {monstar_name: 'It'},
        {monstar_name: 'Crazy'},
      ]);
    });
};
