import { States } from "../../constants";
import CommitmentModel from "./CommitmentModel";

export default class SavingModel {
    public static schema: Realm.ObjectSchema = {
        name: 'Saving',
        primaryKey: 'id',
        properties: {
          id: { type: 'int' },
          name_sav: { type: 'string' },
          pay_day: { type: 'string' },
          currency: { type: 'string' },
          // dues: { type: 'int', default: 0 }, //Numero de meses o cuotas a pagar
          amount_total: { type: 'double', default: 0 }, //Monto total que se quiere llegar
          amount_payed: { type: 'double', default: 0 },
          date_reg: { type: 'date' },
          date_init: { type: 'date' },
          date_end: { type: 'date?' },
          state: { type: 'int', default: 0 }, //Estado del ahorro
          date_next_payment: { type: 'date' },
          commitments: { type: 'Commitment[]', default:[] },
      
      
          // id_remote: { type: 'int?' },
        }
    };

    public init (){
        const data = new SavingModel();
        //TODO ...
        
        return data;
    }

    public id!:number;
    public name_sav!:string;
    public pay_day!:string;
    public currency!:string;
    public amount_total!:number;
    public amount_payed!:number;
    public date_reg!:Date;
    public date_init!:Date;
    public date_end!:Date;
    public state!:number;
    public date_next_payment!:Date;

    public commitments!:CommitmentModel[]; 




}