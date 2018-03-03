exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_table').insert([
        {
          first_name: "Joe",
          last_name: 'Seph',
          user_email: 'testey@test.com',
          user_phone: "555-555-5555",
          firebase_id: "asdfasdfasdfas",
          user_progress: {"progress":{"aaaaa":{"unitLocked":false,"unitCompleted":false,"lessonz":{"u01l01":false,"u01l02":false,"u01l03":false,"u01l04":false,"u01l05":false,"u01l06":false,"u01l07":false,"u01l08":false,"u01l09":false,"u01l10":false,"u01l11":false,"u01l12":false,"u01l13":false,"u01l14":false,"u01l15":false,"u01l16":false,"u01l17":false,"u01l18":false,"u01l19":false},"lessons":[{"u01l01":false},{"u01l02":false},{"u01l03":false},{"u01l04":false},{"u01l05":false},{"u01l06":false},{"u01l07":false},{"u01l08":false},{"u01l09":false},{"u01l10":false},{"u01l11":false},{"u01l12":false},{"u01l13":false},{"u01l14":false},{"u01l15":false},{"u01l16":false},{"u01l17":false},{"u01l18":false},{"u01l19":false}]},"bbbbb":{"unitLocked":false,"unitCompleted":false,"lessons":[{"u02l01":false},{"u02l02":false}],"lessonz":{"u02l01":false,"u02l02":false}},"ccccc":{"unitLocked":false,"unitCompleted":false,"lessons":[{"u03l01":false},{"u03l02":false},{"u03l03":false},{"u03l04":false},{"u03l05":false},{"u03l06":false}],"lessonz":{"u03l01":false,"u03l02":false,"u03l03":false,"u03l04":false,"u03l05":false,"u03l06":false}},"ddddd":{"unitLocked":true,"unitCompleted":false,"lessons":[{"u04l01":false},{"u04l02":false},{"u04l03":false}],"lessonz":{"u04l01":false,"u04l02":false,"u04l03":false}}}}
        },
      ]);
    });
};
