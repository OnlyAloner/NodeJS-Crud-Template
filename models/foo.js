const mongoose = require("mongoose");

let FooSchema = new mongoose.Schema(
    {
        foo: {
            type: String,
        },
        stringField: {
            type: String,
        },
        numberField: {
            type: Number,
        },
        stringFieldSecond: {
            type: String,
        }
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    },
);

module.exports = mongoose.model("Foo", FooSchema);