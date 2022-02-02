const FooModel = require("../../models/foo");
const catchWrapDb = require("../../utils/catchWrapDb")
const cfg = require("../../config/index.js")
const logger = require("../../config/logger")

const NAMESPACE = "Storage.Foo";

let fooStorage = {
    create: catchWrapDb(`${NAMESPACE}.create`, async (data) => {
        let foo = new FooModel(data);

        const response = await foo.save();
        return response;
    }),
    update: catchWrapDb(`${NAMESPACE}.update`, async (data) => {
        const response = await FooModel.updateOne({id: data.id}, {$set: data});

        return response;
    }),
    getSingle: catchWrapDb(`${NAMESPACE}.getSingle`, async (args) => {
        let firstKey = Object.keys(args)[0];

        let query = FooModel.findOne();

        query.where(firstKey).equals(args[firstKey]);

        let foo = await query.exec();

        if (!foo) {logger.error(`failed to find foo with given ${firstKey}: ${args[firstKey]}`)};

        return foo;
    }),
    getList: catchWrapDb(`${NAMESPACE}.getList`, async (filters_fields) => {
        const {
            filters,
            fields
        } = filters_fields;
    
        const query = FooModel.find();

        if (filters.foo) 
            query.where("foo").equals(filters.foo);

        if (filters.numberField) 
            query.where("numberField").gt(filters.numberField);

        const foos = await query.skip(filters.offset | cfg.offset).limit(filters.limit | cfg.limit).select(fields).exec();

        return foos
    }),
    delete: catchWrapDb(`${NAMESPACE}.delete`, async (args) => {
        const foo = await FooModel.deleteOne({id: args.is});

        return foo;
    }),

}

module.exports = fooStorage;