import moment from "moment";
import DateTime from "../../datetime/DateTime";
import TransactionModel from "./TransactionModel";

export default class AccountModel {
    public static schema: Realm.ObjectSchema = {
        name: 'Account',
        primaryKey: 'id',
        properties: {
            id: { type: 'int',default: DateTime.getDefaultId() },
            name: { type: 'string' },
            currency: { type: 'string' },
            transactions: { type: 'Transaction[]', default:[]},
            state: { type: 'int', default: 0 },
            available_balance: { type: 'double', default: 0 },
            accounting_balance: { type: 'double', default: 0 },
            date_reg: { type: 'date', default: new Date() },
            date_start: { type: 'date', default: new Date() },
            last_update: { type: 'date?', default: new Date() },
            color: { type: 'string?' },
            image: { type: 'string?' },
            note: { type: 'string?' },
        }
    };

    public init (){
        const data = new AccountModel();
        //TODO ...
        
        return data;
    }
    public id!: number;
    public name!: string;
    public currency!: string;
    public transactions!: TransactionModel[];
    public state!: number;
    public available_balance!: number;
    public accounting_balance!: number;
    public date_reg!: Date;
    public date_start!: Date;
    public last_update!: Date;
    public color!: string;
    public image!: string;
    public note!: string;
    

}