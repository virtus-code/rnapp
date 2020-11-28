import { States } from "../../constants";
import LoanFeedModel from "./LoanFeedModel";
import TransactionModel from "./TransactionModel";

export default class LoanModel {

    public static Type = {
        PROVIDER :States.LoanType.PROVIDER,
        DEBTOR :States.LoanType.DEBTOR,
    }

    public static InterestType= {
        SIMPLE: 0,
        COMPOSITE: 1 //compuesto
    }

    public static schema: Realm.ObjectSchema = {
        name: 'Loan',
        primaryKey: 'id',
        properties: {
          id: { type: 'int' },
          id_bene: { type: 'int?' },
          name_bene: { type: 'string' },
          id_creditor: { type: 'int?' },
          name_creditor: { type: 'string?' },
          name_loan: { type: 'string' },
          dues: { type: 'string' },//cuotas
          pay_day: { type: 'string' },//dia de pago
          amount_cap: { type: 'double' },//monto de capital
          interes_perc: { type: 'double', default: 0 },//interes
          amount_total: { type: 'double', default: 0 },//monto total
          amount_payed: { type: 'double', default: 0 },//monto pagado
          state: { type: 'int', default: States.DefaultState.CREATED },//estado de prestamo
          type: { type: 'int', default: LoanModel.Type.PROVIDER },//tipo de prestamo
          interest_type: { type: 'int', default: LoanModel.InterestType.SIMPLE },//tipo de intereses
          feeds: { type: 'LoanFeed[]', default:[] },//cronograma de cuotas
          payments: { type: 'Transaction[]', default:[]},//-->> old was Payment //lista de pagos(transacciones)
          currency: { type: 'string?' },//moneda
          date_next_payment: { type: 'date' },//Siguiente fecha de pago Old --> date_last_payment
          date_reg: { type: 'date' }, //fecha de registro
          date_loan: { type: 'date' }, //fecha de prestamo
          date_loan_end: { type: 'date' }, //fecha fin presupuestado de pagar el prestamo
      
          // id_remote: { type: 'int?' },
        }
    };

    public static init (
        bene:{id:number, name:string},
        creditor:{id:number, name:string},
        loanResume:{
            name:string,
            pay_day:string,
            amount_cap:number,
            interes_perc:number,
            type:number,//dar prestamos, deudor
            interest_type:number,// simple, compuesto,
            currency:string,
            date_loan:Date
        }
    ){
        const data = new LoanModel();
        //TODO ...
        data.id = Date.now();
        data.id_bene = bene.id;
        data.id_creditor = creditor.id;
        data.name_bene = bene.name
        data.name_creditor = creditor.name
        data.name_loan = loanResume.name
        data.dues = '1' //calcular
        data.pay_day = loanResume.pay_day
        data.amount_cap = loanResume.amount_cap;
        data.interes_perc = loanResume.interes_perc;
        data.amount_total = 0;//calcular
        data.amount_payed = 0; //calcular
        data.state = States.DefaultState.CREATED;
        data.type = loanResume.type;
        data.interest_type = loanResume.interest_type;

        data.feeds = [];
        // data.payments = [];

        data.currency = loanResume.currency;
        data.date_next_payment = new Date();//calcular
        data.date_reg = new Date();
        data.date_loan = loanResume.date_loan;
        data.date_loan_end = new Date();//calcular

        const feed1:LoanFeedModel = LoanFeedModel.init('1', data.id);
        const feed2:LoanFeedModel = LoanFeedModel.init('2', data.id);
        data.feeds.push(feed1);
        data.feeds.push(feed2);
        
        return data;
    }

    public id!:number;
    public id_bene!:number;
    public name_bene!:string;
    public id_creditor!:number;
    public name_creditor!:string;
    public name_loan!:string;
    public dues!:string;
    public pay_day!:string;
    public amount_cap!:number;
    public interes_perc!:number;
    public amount_total!:number;
    public amount_payed!:number;
    public state!:number;
    public type!:number;
    public interest_type!:number;


    public feeds!:LoanFeedModel[];
    public payments!:TransactionModel[];

    public currency!:string;
    public date_next_payment!:Date;
    public date_reg!:Date;
    public date_loan!:Date;
    public date_loan_end!:Date;

    clone(){
        const data = new LoanModel();
        data.id = this.id;
        data.id_bene = this.id_bene;
        data.name_bene = this.name_bene;
        data.id_creditor = this.id_creditor;
        data.name_creditor = this.name_creditor;
        data.name_loan = this.name_loan;
        data.dues = this.dues;
        data.pay_day = this.pay_day;
        data.amount_cap = this.amount_cap;
        data.interes_perc = this.interes_perc;
        data.amount_total = this.amount_total;
        data.amount_payed = this.amount_payed;
        data.state = this.state;
        data.type = this.type;
        data.interest_type = this.interest_type;
    
        data.feeds=[];
        // data.payments=[];
    
        data.currency = this.currency;
        data.date_next_payment=this.date_next_payment;
        data.date_reg = this.date_reg;
        data.date_loan = this.date_loan;
        data.date_loan_end = this.date_loan_end;
        
        this.feeds.forEach((row:LoanFeedModel)=>{
            data.feeds.push(row.clone())
        })
        
        return data;
    }



}