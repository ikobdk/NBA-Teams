
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nba_teams').del()
    .then(function () {
      const nbateams = [
        {
          name:'Cleveland Cavaliers',
          conference:'East',
          star_player: 'Lebron James',
          wins:67
      },
        {
          name:'Golden State Warriors',
          conference:'West',
          star_player: 'Steph Curry',
          wins:73
      },
        {
          name:'Los Angeles Clippers',
          conference:'West',
          star_player: 'Blake Griffin',
          wins:60
      },
        {
          name:'Oklahoma City Thunder',
          conference:'West',
          star_player: 'Russel Westbrook',
          wins:58
        }
      ];
      return knex('nba_teams').insert(nbateams)
    });
};
