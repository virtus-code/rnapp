import { LoanFeedModel, LoanModel, TransactionModel } from "./models";
import AppStorage from "./storage/AppStorage";

export default class LoanService{

    static async create(object:LoanModel){
        const result = await AppStorage.create<LoanModel>(
            LoanModel.schema.name, 
            object
        );
        return result;
    }

    static async payFeed(feed:LoanFeedModel){
        //TODO
    }

    static async findAll(){
        const results = await AppStorage.findAll<LoanModel>(
            LoanModel.schema.name,
          );
        return results;
    }

    static async findAllTx(){
        const results = await AppStorage.findAll<LoanFeedModel>(
            LoanFeedModel.schema.name,
          );
        return results;
    }

    static async deleteAll(){
        const result = await AppStorage.deleteAll(LoanModel.schema.name);
        return result;
    }

    static async delete(object: LoanModel) {
        try {
            await AppStorage.delete(
                LoanFeedModel.schema.name,
                `loan_id=$0`,
                object.id,
            );    
            await AppStorage.delete(
                LoanModel.schema.name,
                `id=$0`,
                object.id,
            );
        } catch (e) {
            console.warn('error',e)
        }
    }

}