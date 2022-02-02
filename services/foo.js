const fooStorage = require("../storage/mongo/foo");
const catchWrapService = require("../utils/catchWrapService");

const NAMESPACE = "Service.Foo";
const THIS_STORAGE = fooStorage;

let fooService = {
    Create: CatchWrapService(`${NAMESPACE}.Create`, THIS_STORAGE.Create),
    GetByID: CatchWrapService(`${NAMESPACE}.GetByID`, THIS_STORAGE.GetByID),
    GetList: CatchWrapService(`${NAMESPACE}.GetList`, THIS_STORAGE.GetList),
    Update: CatchWrapService(`${NAMESPACE}.Update`, THIS_STORAGE.Update),
    Delete: CatchWrapService(`${NAMESPACE}.Delete`, THIS_STORAGE.Delete),
}

module.export = fooService;