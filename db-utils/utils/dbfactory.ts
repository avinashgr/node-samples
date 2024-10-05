export interface dbConnector{
    addObject(item:object):object;
    deleteObject(query:object):Promise<string>;
    findObject(query:object, fieldsFilter: object):Promise<object>;
    updateObject(item:object, query:object):Promise<boolean>;  
    connect():Promise<boolean>;
    disconnect():Promise<boolean>;
}
