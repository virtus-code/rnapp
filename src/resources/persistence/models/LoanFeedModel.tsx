import { ReminderModel } from ".";
import { States } from "../../constants";

export default class LoanFeedModel {
    public static schema: Realm.ObjectSchema = {
        name: 'LoanFeed',
        properties: {
            id: { type: 'string?' }, //id_loan +'-' +order
            order: { type: 'int' },
            amount: { type: 'double' },
            date_payment: { type: 'date' },
            date_reg: { type: 'date' },
            state: { type: 'int', default: States.LoanFeedState.CREATED },
            loan_id: { type: 'int' },//anterior id_loan
            currency: { type: 'string?' },
            amount_payed: { type: 'double', default: 0 },
            reminders: { type: 'Reminder[]', default:[] },
        }
    };

    public static init(id:string,loan_id:number){
        const data = new LoanFeedModel();
        //TODO ...
        data.id =id;
        data.order =1;
        data.amount =100;
        data.date_payment = new Date();
        data.date_reg =  new Date();
        data.state = 1;
        data.loan_id=loan_id;
        data.currency = '1';
        data.amount_payed=0;
        // data.reminders = [];
        
        return data;
    }
    public id!: string;
    public order!: number;
    public amount!: number;
    public date_payment!:Date;
    public date_reg!:Date;
    public state!: number;
    public loan_id!:number;
    public currency!:string;
    public amount_payed!:number;
    public reminders!:ReminderModel[];

    clone(){
        const data = new LoanFeedModel();
        data.id = this.id;
        data.order = this.order;
        data.amount = this.amount;
        data.date_payment = this.date_payment;
        data.date_reg = this.date_reg;
        data.state = this.state;
        data.loan_id = this.loan_id;
        data.currency = this.currency;
        data.amount_payed = this.amount_payed;
        // data.reminders = this.reminders;

        return data;
    }

}