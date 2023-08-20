import { dbConnector } from "./dbfactory";
const {MongoClient} = require('mongodb');

export class MongoProperties{
    connectionString: string = '';
    dbInstance:string = '';
}
/**
 * class that provides wrapper functions to 
 * add
 * delete
 * update
 * find 
 * documents in the mongodb database
 */
export class MongoConnector implements dbConnector{
    connectionString: string;
    dbColl: string;
    dbInstance: string;
    client: any;
    collection:any;
    /**
     * sets the configuration for the connection to db
     * @param props connection string and collection
     * @param dbColl 
     */
    constructor(props:MongoProperties, dbColl:string){
        this.dbColl = dbColl;
        this.connectionString = props.connectionString;
        this.dbInstance = props.dbInstance;
    }
    /**
     * connects to the database 
     * using connection information provided
     */
    public async connect() {
        this.client = new MongoClient(this.connectionString, { useUnifiedTopology: true });
        await this.client.connect();
        let db  = this.client.db(this.dbInstance);
        this.collection  = db.collection(this.dbColl);
        console.log("connected succesfully");
        return true;
    }
    public async disconnect() {
        await this.client.close();
        return true;
    }

    public async addObject(item:object){
        const result = await this.collection.insertOne(item);
        console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,)
        return item;
    };
    public async findObject(query: object, fieldsfilter: object): Promise<object> {
        // const result = await this.collection.find(query).forEach((e: any) =>{console.log("%j",e)});
        let arrOfResults:JSON[] = [];
        const result = await this.collection.find(query).project(fieldsfilter).forEach((e: JSON) =>{
            arrOfResults.push(e);
        });
        return arrOfResults;
    }
    async deleteObject(query:object){
        const result = await this.collection.deleteMany(query);
        console.log(`${result.deletedCount} documents were deleted with the _id: ${result}`,)
        return result.deletedCount;
    };
    async updateObject(item:object,query:object){
        let atomicitem = { $set:item};
        const result = await this.collection.updateOne(query,atomicitem);
        console.log(`${result.modifiedCount} documents were updated with the _id: ${result}`,)
        return result.modifiedCount;
    };  
}