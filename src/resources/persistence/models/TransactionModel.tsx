import { States } from "../../constants";

export default class TransactionModel {
    public static schema: Realm.ObjectSchema = {
        name: 'Transaction',
        primaryKey: 'id',
        properties: {
          id: { type: 'int' },
          amount: { type: 'double', default: 0 },
          currency: { type: 'string?' },
          date_reg: { type: 'date' },
          date_tran: { type: 'date' },
          type: { type: 'int' }, //+ or - ingreso o gasto
          subcategory_id: { type: 'int' },//anterior id_subcategory
          subcategory_name: { type: 'string?' },
          category_name: { type: 'string?' },
          note: { type: 'string?' },
          account_id: { type: 'int?' },//anterior id_account
          comment: { type: 'string?' },
          state: { type: 'int', default:States.DefaultState.PAYED },//NEW 
          image: { type: 'string?' },//url imagen
          imageLocal: { type: 'string?' },//NEW imagen guardada localmente, se deberia cargar primero
          parent_id:{ type: 'string?', default:'' },//NEW loan_id,saving_id, empty si no tiene parent
          
          is_budget_daily:{ type: 'bool?', default:true }, //NEW , en prestamos y ahorros es false
        }
    };

    public init (){
        const data = new TransactionModel();
        //TODO ...
        
        return data;
    }

    public id!: number;
    public amount!: number;
    public amount_daily!: number;
    public currency!: string;
    public date_reg!: Date;
    public date_tran!: Date;
    public type!: number; 
    public subcategory_id!: number;
    public subcategory_name!: string;
    public category_name!:string;
    public note!:string;
    public id_account!: string;
    public comment!: string ;
    public state!:number;
    public image!: string;
    public imageLocal!: string;
    public parent_id!:string ;
    
    public is_budget_daily!:boolean;

}