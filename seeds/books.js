exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lms_books').del()
    .then(function () {
      // Inserts seed entries
      return knex('lms_books').insert([
        {name: "module_1",
        module: {"array":[
          {"title":"Instagram 101",
          "description":"Basic communication: Posts, Stories, and DM's",
          "image":"https://i.imgur.com/EHYS6cp.png",
          "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
          "id":"aaaaa",
          "lessons":[
            {"id":"u01l01","contentType":"checkTasks","title":"Basics","description":"Here is how to perform a Basic Search - find Conscious Creative (@phxconscious)"},
            {"id":"u01l02","contentType":"checkTasks","title":"Basics","description":"How to Follow an account - Follow Conscious Creative"},
            {"id":"u01l03","contentType":"checkTasks","title":"Basics","description":"How to view a story"},
            {"id":"u01l04","contentType":"checkTasks","title":"Basics","description":"How to comment on a story"},
            {"id":"u01l05","contentType":"checkTasks","title":"Basics","description":"How to like a post - Like a Consious Creative post"},
            {"id":"u01l06","contentType":"checkTasks","title":"Basics","description":"How to Save a post - Save a consious Creative post"},
            {"id":"u01l07","contentType":"checkTasks","title":"Basics","description":"How to Comment - Comment on a Consious Creative post"},
            {"id":"u01l08","contentType":"checkTasks","title":"Basics","description":"How to Like a comment - like another comment on a Consious Creative post"},
            {"id":"u01l09","contentType":"checkTasks","title":"Connecting your ecosystem","description":"Connecting your Facebook page to your profile"},
            {"id":"u01l10","contentType":"checkTasks","title":"Connecting your ecosystem","description":"Connecting Twitter"},
            {"id":"u01l11","contentType":"checkTasks","title":"Connecting your ecosystem","description":"Connecting Tumbler (if you have it)"},
            {"id":"u01l12","contentType":"checkTasks","title":"Connecting your ecosystem", "description":"The power of Inviting your Facebook friends. Have you invited a few or all of your Facebook friends?"},
            {"id":"u01l13","contentType":"checkTasks","title":"Profiles","description":"Profile Image"},
            {"id":"u01l14","contentType":"checkTasks","title":"Profiles","description":"Check your username. Is it in line with your brand and other social accounts?"},
            {"id":"u01l15","contentType":"checkTasks","title":"Profiles","description":"Check to see how the info from your Facebook page shows up on your Instagram profile."},
            {"id":"u01l16","contentType":"checkTasks","title":"Profiles","description":"Compose your Bio here, copy and paste it in your bio in instagram."},
            {"id":"u01l17","contentType":"checkTasks","title":"Profiles","description":"Review your profile, is everything working and updated?"},
            {"id":"u01l18","contentType":"checkTasks","title":"Direct Messages","description":"How to find them and how do they work. Send us a Direct Message."},
            {"id":"u01l19","contentType":"checkTasks","title":"Direct Messages","description":"Best practices. Do you understand?"}
          ]},
          {"title":"Full Online Analysis Reports",
          "description":"Full Online Analysis Reports yada yada test missing",
          "image":"https://i.imgur.com/EHYS6cp.png",
          "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
          "id":"bbbbb",
          "lessons":[
            {"id":"u02l01","contentType":"checkTasks","title":"What the report is","description":"Do you feel like you have a good understanding? If not watch it again"},
            {"id":"u02l02","contentType":"checkTasks","title":"How to read the report","description":"wGive us 3 short term (can be accomplished in 3 weeks) milestones"}]},
          {"title":"Content",
          "description":"Content... all about good content needs text still",
          "image":"https://i.imgur.com/EHYS6cp.png",
          "video":"https://www.youtube.com/watch?v=i6G53BMgugo",
          "id":"ccccc",
          "lessons":[
            {"id":"u03l01","contentType":"checkTasks","title":"What is good content","description":"Is this clear?"},
            {"id":"u03l02","contentType":"checkTasks","title":"Your Content","description":"Do you have a content bank now?"},
            {"id":"u03l03","contentType":"checkTasks","title":"Your Content","description":"Here is how you find your invite to our content structure & organiz your content. Do you understand ?"},
            {"id":"u03l04","contentType":"checkTasks","title":"Content Creation","description":"Do you feel confident creating the different types of content?"},
            {"id":"u03l05","contentType":"checkTasks","title":"Content Creation","description":"Images?"},
            {"id":"u03l06","contentType":"checkTasks","title":"Content Creation","description":"Video?"},
            {"id":"u03l06","contentType":"checkTasks","title":"Content Creation","description":"Graphics?"},
            {"id":"u03l06","contentType":"checkTasks","title":"Content Creation","description":"How to run a content creation workshop. Do you understand?"}]},
          {"title":"Protip 4: Discovery",
          "description":"Find your customers on Instagram, see what they're looking at explore how you can start to show up when they want to see you",
          "image":"https://i.imgur.com/EHYS6cp.png",
          "video":"https://www.youtube.com/watch?v=i6G53BMgugo","id":"ddddd",
          "lessons":[
            {"id":"u04l01","contentType":"checkTasks","title":"testTitle 3-1","description":"watch the damn video","video":"https://www.youtube.com/watch?v=i6G53BMgugo"},
            {"id":"u04l02","contentType":"checkTasks","title":"testTitle 3-2","description":"watch the damn video","video":"https://www.youtube.com/watch?v=i6G53BMgugo"},
            {"id":"u04l03","contentType":"checkTasks","title":"testTitle 3-3","description":"watch the damn video","video":"https://www.youtube.com/watch?v=i6G53BMgugo"
          }]
        }]
      }
      }
    ]);
  });
};
