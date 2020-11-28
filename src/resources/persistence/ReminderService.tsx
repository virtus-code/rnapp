import {ReminderModel} from './models';
import AppStorage from './storage/AppStorage';

export default class ReminderService {
  static async create(object: ReminderModel) {
    // console.warn('reminderId', object.id);
    const result = await AppStorage.create<ReminderModel>(
      ReminderModel.schema.name,
      object,
    );
    // const copy = result.clone();
    //registrar notificacion ->agregar a push
    return result;
  }
  static async findAll() {
    const results = await AppStorage.findAll<ReminderModel>(
      ReminderModel.schema.name,
    );
    return results;
  }

  static async delete(object: ReminderModel) {
    const copy = object.clone();
    const result = await AppStorage.delete(
      ReminderModel.schema.name,
      `id=$0`,
      object.id,
    );
    //unregistrar notificaciones -> Eliminar de push
  }

  static async deleteAll() {
    const result = await AppStorage.deleteAll(ReminderModel.schema.name);
    return result;
  }
}
