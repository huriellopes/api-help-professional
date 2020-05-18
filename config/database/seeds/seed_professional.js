
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          name: 'Huriel Lopes', 
          email: 'huriellopes1996@gmail.com', 
          phone: '61982990477', 
          profession: 'Analista de Sistemas', 
          report: 'Fui demitido no inicio da pandemia, gostaria de ajuda, pois sou pai de família e estou passando por dificuldades!'
        },
        {
          name: 'Alessandra Silva', 
          email: 'alesylva@gmail.com', 
          phone: '61983038556', 
          profession: 'Professora', 
          report: 'Fui demitida e sou mãe de familia, mandei currículo diversas vezes e não estou conseguindo nada! alguém pode me ajudar?'
        },
      ]);
    });
};
