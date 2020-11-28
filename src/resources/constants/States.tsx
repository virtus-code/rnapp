export default {
    DefaultState: {
        CREATED: 0,
        PAYED: 1,
        DEFAULTER: 2,
        CANCELED: 3
      },
      LoanState: {
        CREATED: 0,
        PAYED: 1,
        DEFAULTER: 2,
        CANCELED: 3
      },
      LoanType: {
        PROVIDER: 1, //dar prestamos
        DEBTOR: 2 //deudor
      },
      InterestType: {
        SIMPLE: 0,
        COMPOSITE: 1 //composite
      },
      //provider and debtor
      LoanFeedState: {
        CREATED: 0,
        PAYED: 1,
        DEFAULTER: 2,
        CANCELED: 3
      },
      PaymentState: {
        PAYED: 1,
        ANNULLED: 2 //annulled
      }
}