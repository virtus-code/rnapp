export default class BudgetModel {
    public static schema: Realm.ObjectSchema = {
        name: 'Budget',
        primaryKey: 'id',
        properties: {
          id: { type: 'int' },
          id_type: { type: 'int' },
          amount_daily: { type: 'double' },
          reference: { type: 'int?', default: 0 },
          currency: { type: 'string?' }
        }
    };

    public init (amount_daily:number, currency:string){
        const budget = new BudgetModel();
        budget.id = 1;
        budget.id_type = 1;
        budget.amount_daily = amount_daily;
        budget.currency = currency;

        return budget
    }

    public id!: number;
    public id_type!: number;
    public amount_daily!: number;
    public reference!: number;
    public currency!: string;

}