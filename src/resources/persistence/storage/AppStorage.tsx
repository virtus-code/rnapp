import Realm, {Results} from 'realm';
import {Log} from '../../log';
import {Schemas} from '../models';

const TAG = '[AppStorage]';
export type SchemaType = string;

export default class AppStorage {
  static open() {
    return Realm.open({
      schema: Schemas,
      schemaVersion: 3,
      path: 'demo.realm',
    });
  }

  static async create<T>(
    schema: SchemaType,
    object: T,
    update: boolean = true,
  ): Promise<T> {
    const realm = await AppStorage.open();
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const output = realm.create(schema, object, update) as T;
          if (output) {
            resolve(output);
            return;
          }
          reject(new Error('error writing schema'));
        });
      } catch (e) {
        Log.exception(TAG, 'create', e);
        reject(e);
      }
    });
  }

  static async write<T>(callback: () => T): Promise<T> {
    const realm = await AppStorage.open();
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          resolve(callback());
        });
      } catch (e) {
        Log.exception(TAG, 'write', e);
        reject(e);
      }
    });
  }

  static async findOne<T>(
    schema: SchemaType,
    query: string,
    ...arg: any[]
  ): Promise<T & Realm.Object> {
    const realm = await AppStorage.open();
    return new Promise((resolve, reject) => {
      const results = realm.objects<T>(schema).filtered(query, ...arg);
      if (results.length > 0) {
        resolve(results[0]);
        return;
      }
      reject(new Error('result not found'));
    });
  }

  static async find<T>(
    schema: SchemaType,
    query: string,
    ...arg: any[]
  ): Promise<Results<T & Realm.Object>> {
    const realm = await AppStorage.open();
    return new Promise((resolve) => {
      const results = realm.objects<T>(schema).filtered(query, ...arg);
      resolve(results);
    });
  }

  static async findAll<T>(
    schema: SchemaType,
  ): Promise<Results<T & Realm.Object>> {
    const realm = await AppStorage.open();
    return new Promise((resolve) => {
      const results = realm.objects<T>(schema);
      resolve(results);
    });
  }

  static async delete(
    schema: SchemaType,
    query: string,
    ...arg: any[]
  ): Promise<boolean> {
    const realm = await AppStorage.open();
    return new Promise((resolve, reject) => {
      const results = realm.objects(schema).filtered(query, ...arg);
      try {
        realm.write(() => {
          if (results) {
            realm.delete(results);
            resolve(true);
            return;
          }

          resolve(false);
        });
      } catch (e) {
        Log.exception(TAG, 'delete', e);
        reject(e);
      }
    });
  }

  static async deleteAll(schema: SchemaType): Promise<boolean> {
    Log.debug(TAG, 'deleteAll');

    const repository = await AppStorage.open();
    return new Promise((resolve, reject) => {
      try {
        const results = repository.objects(schema);
        repository.write(() => {
          if (results) {
            repository.delete(results);
            resolve(true);
            return;
          }
          resolve(false);
        });
      } catch (e) {
        Log.exception(TAG, 'deleteAll', e);
        reject(e);
      }
    });
  }
}
