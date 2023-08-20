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
var mocha_1 = require("mocha");
var mongoConnector_1 = require("../utils/mongoConnector");
var chai_1 = require("chai");
/**
 * a mocha test suite for testing mongodb client
 * for the wrapper for connection
 */
mocha_1.describe('execute', function () { return __awaiter(void 0, void 0, void 0, function () {
    var props, dbc;
    return __generator(this, function (_a) {
        props = new mongoConnector_1.MongoProperties();
        props.connectionString = "mongodb://superuser:mongo%40avinash@127.0.0.1:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
        props.dbInstance = "gallerydb";
        dbc = new mongoConnector_1.MongoConnector(props, 'users');
        it('should return true when the db is connected', function () {
            return __awaiter(this, void 0, void 0, function () {
                var connected;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, dbc.connect()];
                        case 1:
                            connected = _a.sent();
                            chai_1.assert.isTrue(connected, 'the db connection has been made');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should return object when item is inserted', function () {
            return __awaiter(this, void 0, void 0, function () {
                var numOfItemsToAdd, index, item, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            numOfItemsToAdd = 5;
                            console.log('Start');
                            index = 0;
                            _a.label = 1;
                        case 1:
                            if (!(index < numOfItemsToAdd)) return [3 /*break*/, 6];
                            item = { 'this': 'that', 'all': 'yes' };
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, dbc.addObject(item)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            console.log(" the error is %s", e_1);
                            return [3 /*break*/, 5];
                        case 5:
                            index++;
                            return [3 /*break*/, 1];
                        case 6:
                            console.log('End');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should return find the item that was looked up', function () {
            return __awaiter(this, void 0, void 0, function () {
                var query, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = { this: { $in: ["that"] } };
                            return [4 /*yield*/, dbc.findObject(query, {})];
                        case 1:
                            result = _a.sent();
                            console.log("the results from the find query %j", result);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should delete the item requested for delete', function () {
            return __awaiter(this, void 0, void 0, function () {
                var query, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = { this: { $in: ["that"] } };
                            item = { 'this': 'asdlkdsll;;llll;asd', 'all': 'sadlkajdklajdskj' };
                            return [4 /*yield*/, dbc.updateObject(item, query)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should update the item that was updated', function () {
            return __awaiter(this, void 0, void 0, function () {
                var query, fieldsFilter, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = { this: { $in: ["asdlkdsll;;llll;asd"] } };
                            fieldsFilter = {};
                            return [4 /*yield*/, dbc.findObject(query, fieldsFilter)];
                        case 1:
                            result = _a.sent();
                            console.log("the results from the find query for the updated item%j", result);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should find  the item without the fields', function () {
            return __awaiter(this, void 0, void 0, function () {
                var query, fieldsFilter, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            query = { this: { $in: ["asdlkdsll;;llll;asd"] } };
                            fieldsFilter = { "all": false };
                            return [4 /*yield*/, dbc.findObject(query, fieldsFilter)];
                        case 1:
                            result = _a.sent();
                            console.log("the results from the find query for the updated item%j", result);
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should close the db connection opened for the test', function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, dbc.disconnect()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
        return [2 /*return*/];
    });
}); });
