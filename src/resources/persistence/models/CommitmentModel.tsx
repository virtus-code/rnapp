import TransactionModel from "./TransactionModel";

export default class CommitmentModel {
    public static schema: Realm.ObjectSchema = {
        name: 'Commitment',
        properties: {
          id_remote: { type: 'int?' },
          id_saving: { type: 'int' },
          order: { type: 'int' },
          id_user: { type: 'int' },
          name_user: { type: 'string' },
          currency: { type: 'string' },
          amount: { type: 'double', default: 0 }, //monto de compromiso
          amount_payed: { type: 'double', default: 0 }, //monto aportado
          amount_fee: { type: 'double', default: 0 }, //monto que puede aportar mensualmente
          pay_day: { type: 'string' }, //dia de aporte comprometido
      
          date_end: { type: 'date?' }, // fecha final del compromiso, cuando deberia haber llegado
          date_reg: { type: 'date' },
          state: { type: 'int', default: 0 },//estado del compromiso
          
          payments: { type: 'list', objectType: 'Transaction' }, //Old was PaymentCommitment
        
            //TODO agregar dues, y cronograma de compromiso
        }
    };

    public init (){
        const data = new CommitmentModel();
        //TODO ...
        
        return data;
    }

    public id_remote!:number;
    public id_saving!:number;
    public order!:number;
    public id_user!:number;
    public name_user!:string;
    public currency!:string;
    public amount!:number;
    public amount_payed!:number;
    public amount_fee!:number;
    public pay_day!:string;

    public date_end!:Date;
    public date_reg!:Date;
    public state!:number;

    public payments!:TransactionModel[];

    // public feeds!:LoanFeedModel[]; //optional
    // public dues!:string; //optional


}