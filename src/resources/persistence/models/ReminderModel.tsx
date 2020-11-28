// import Realm from 'realm';
export default class ReminderModel {
  public static schema: Realm.ObjectSchema = {
    name: 'Reminder',
    // primaryKey:'id',

    properties: {
      id: {type: 'string'}, //id_loan +'-' +order +'-'+ date.getTime()
      title: {type: 'string', default: ''},
      body: {type: 'string', default: ''},
      description: {type: 'string', default: ''},
      date: {type: 'date'},
      state: {type: 'int', default: 0},
      type: {type: 'int', default: 0},
    },
  };

  public static init(
    id: string,
    title: string,
    description: string,
    date: Date,
    body: string = '',
    state: number = 0,
    type: number = 0,
  ) {
    const reminder1 = new ReminderModel();
    reminder1.id = id;
    reminder1.title = title;
    reminder1.body = body;
    reminder1.description = description;
    reminder1.date = date;
    reminder1.state = state;
    reminder1.type = type;
    console.warn('reminde IDDDD', reminder1);
    return reminder1;
  }

  public id!: string;
  public title!: string;
  public body!: string;
  public description!: string;
  public date!: Date;
  public state!: number;
  public type!: number;

  clone() {
    const reminder = new ReminderModel();
    reminder.id = this.id;
    reminder.title = this.title;
    reminder.body = this.body;
    reminder.description = this.description;
    reminder.date = this.date;
    reminder.state = this.state;
    reminder.type = this.type;
    return reminder;
  }
}
