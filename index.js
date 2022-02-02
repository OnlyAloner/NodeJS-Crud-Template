const mongoose = require("mongoose");
const storage = require("./storage/mongo/foo")

function main() {
    console.log("Main function is running");

    //Connecting to database
    let mongoDBUrl =
        "mongodb://" +
        "localhost" +
        ":" +
        "27017"

    mongoose.connect(
        mongoDBUrl,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log(
                    "There is an error in connecting db (" +
                        mongoDBUrl +
                        "): " +
                        err.message
                );
                process.exit(0);
            }
        }
    );

    mongoose.connection.once("open", async function () {
        console.log("connected")
    });
}

main();

let id;

// storage.create({foo: "Lol it is foo"}).then((res) => {
//     id = res.id;
//     console.log(res, "success")
// })

// storage.getSingle({id: id}).then((res) => {
//     console.log(res, "success")
// })

// storage.getSingle({foo: "Lol it is not foo"}).then((res) => {
//     console.log(res, "success")
// })

// storage.update({id: id, foo: "Lol it is not foo", stringField: "Is I am a string?", numberField: 5}).then((res) => {
//     console.log(res, "success")
// })

// storage.getSingle({stringField: "Is I am a string?"}).then((res) => {
//     console.log(res, "success")
// })

// storage.getList({filters: {foo: "Lol it is not foo", numberField: 4}, fields: ['foo']}).then((res) => {
//     console.log(res, "success")
// })

// storage.delete({id: id}).then((res) => {
//     console.log(res, "success")
// })