var db = require('./models');
var me;
// create a user
db.user.create({nickname: "PDiddy"})
    .then(function (user)){
    console.log(user);
    return user;

}

    .then(function (me) {
        me.firstName = 'Ahmer';
        me.save().then(() => {
            console.log('done saving');
    });
// update a user

});



// Full table
db.user.findAll()
    .then((results) => {
        var r = results[0];
        console.log(r.id, r.nickname);
    });
// Where clause
db.user.findAll({where: {nickname: 'PDiddy'}})
    .then((results) => {
        var r = results[0];
        console.log(r.id, r.nickname);
        return r.myTasks():
    });
    .then(function (tasks){
        console.log(tasks);
});

query_data():