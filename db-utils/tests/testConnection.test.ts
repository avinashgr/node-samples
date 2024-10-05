import { describe } from 'mocha';
import { expect } from 'chai';
import { dbConnector} from "../utils/dbfactory";
import { MongoConnector, MongoProperties} from "../utils/mongoConnector"
import { assert } from 'chai';
/**
 * a mocha test suite for testing mongodb client
 * for the wrapper for connection
 */
describe('execute', async() =>
{
        let props = new MongoProperties();
        props.connectionString =  "mongodb://superuser:mongo%40avinash@127.0.0.1:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
        props.dbInstance = "gallerydb";
        let dbc:dbConnector  = new MongoConnector(props, 'users');
        it('should return true when the db is connected', async function(){
                let connected =  await dbc.connect();
                assert.isTrue(connected, 'the db connection has been made');    
        });
        it('should return object when item is inserted', async function(){
                let numOfItemsToAdd = 5;
                console.log('Start')
                for (let index = 0; index < numOfItemsToAdd; index++) {
                        let item:object = {'this':'that','all':'yes'};
                        try{
                                await dbc.addObject(item);
                        }catch(e){
                                console.log(" the error is %s", e);
                        }
                }
                console.log('End')
   
        });
        it('should return find the item that was looked up', async function(){
                let query = {this:{$in:["that"]}};
                let result = await dbc.findObject(query,{});
                console.log("the results from the find query %j", result);
        });

        it('should delete the item requested for delete', async function(){
                let query = {this:{$in:["that"]}};
                let item:object = {'this':'asdlkdsll;;llll;asd','all':'sadlkajdklajdskj'};
                await dbc.updateObject(item,query);
        });
        it('should update the item that was updated', async function(){
                let query = {this:{$in:["asdlkdsll;;llll;asd"]}};
                let fieldsFilter = {};
                let result = await dbc.findObject(query,fieldsFilter);
                console.log("the results from the find query for the updated item%j", result);
        });
        it('should find  the item without the fields', async function(){
                let query = {this:{$in:["asdlkdsll;;llll;asd"]}};
                let fieldsFilter = {"all":false};
                let result = await dbc.findObject(query,fieldsFilter);
                console.log("the results from the find query for the updated item%j", result);
        });
        it('should close the db connection opened for the test', async function(){
                await dbc.disconnect();
        });

      
})

