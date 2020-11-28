const moment = require('moment');

type MonthFormat = 'Short' | 'Large';

export default class DateTime {
  static addDay = (date: Date, days: number) => {
    let newDate = new Date(date.getTime());
    newDate = new Date(newDate.setDate(newDate.getDate() + days));
    return newDate;
  };

  /**
   *
   * @param date la fecha a formatear
   * @param capCase 0 para mantener, 1 para upperCase, 2 para lower
   * @param format Con que formato mostrar
   */
  static getMonth = (
    date: Date,
    capCase: number = 1,
    format: MonthFormat = 'Short',
  ): string => {
    let month = '';
    try {
      switch (format) {
        case 'Short':
          month = moment(date).format('MMM');
          break;
        case 'Large':
          month = moment(date).format('MMMM');
          break;
        default:
          month = moment(date).format('MMMM');
          break;
      }

      if (capCase === 1) {
        month = month.toUpperCase();
      } else if (capCase === 2) {
        month = month.toLowerCase();
      }

      return month;
    } catch (e) {
      console.warn('error', e);
    }
    return '';
  };

  static getDefaultId = ():string =>{
    return moment().unix().toString()
  }
}
