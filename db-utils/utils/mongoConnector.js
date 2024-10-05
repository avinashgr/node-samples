"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var MongoClient = require('mongodb').MongoClient;
var MongoProperties = /** @class */ (function () {
    function MongoProperties() {
        this.connectionString = '';
        this.dbInstance = '';
    }
    return MongoProperties;
}());
exports.MongoProperties = MongoProperties;
/**
 * class that provides wrapper functions to
 * add
 * delete
 * update
 * find
 * documents in the mongodb database
 */
var MongoConnector = /** @class */ (function () {
    /**
     * sets the configuration for the connection to db
     * @param props connection string and collection
     * @param dbColl
     */
    function MongoConnector(props, dbColl) {
        this.dbColl = dbColl;
        this.connectionString = props.connectionString;
        this.dbInstance = props.dbInstance;
    }
    /**
     * connects to the database
     * using connection information provided
     */
    MongoConnector.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.client = new MongoClient(this.connectionString, { useUnifiedTopology: true });
                        return [4 /*yield*/, this.client.connect()];
                    case 1:
                        _a.sent();
                        db = this.client.db(this.dbInstance);
                        this.collection = db.collection(this.dbColl);
                        console.log("connected succesfully");
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MongoConnector.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MongoConnector.prototype.addObject = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collection.insertOne(item)];
                    case 1:
                        result = _a.sent();
                        console.log(result.insertedCount + " documents were inserted with the _id: " + result.insertedId);
                        return [2 /*return*/, item];
                }
            });
        });
    };
    ;
    MongoConnector.prototype.findObject = function (query, fieldsfilter) {
        return __awaiter(this, void 0, void 0, function () {
            var arrOfResults, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrOfResults = [];
                        return [4 /*yield*/, this.collection.find(query).project(fieldsfilter).forEach(function (e) {
                                arrOfResults.push(e);
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, arrOfResults];
                }
            });
        });
    };
    MongoConnector.prototype.deleteObject = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collection.deleteMany(query)];
                    case 1:
                        result = _a.sent();
                        console.log(result.deletedCount + " documents were deleted with the _id: " + result);
                        return [2 /*return*/, result.deletedCount];
                }
            });
        });
    };
    ;
    MongoConnector.prototype.updateObject = function (item, query) {
        return __awaiter(this, void 0, void 0, function () {
            var atomicitem, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        atomicitem = { $set: item };
                        return [4 /*yield*/, this.collection.updateOne(query, atomicitem)];
                    case 1:
                        result = _a.sent();
                        console.log(result.modifiedCount + " documents were updated with the _id: " + result);
                        return [2 /*return*/, result.modifiedCount];
                }
            });
        });
    };
    ;
    return MongoConnector;
}());
exports.MongoConnector = MongoConnector;
