export default class UserModel {
    public static schema: Realm.ObjectSchema = {
        name: 'User',
        primaryKey: 'id',
        properties: {
            id: { type: 'int' },
            fullName: { type: 'string' },
            email: { type: 'string?' },
            photoText: { type: 'string?' },
            photoURL: { type: 'string?' },
            phoneNumber: { type: 'string?' },
            emailVerified: { type: 'bool?' },
            firstName: { type: 'string?' },
            lastName: { type: 'string?' },
            idEmail: { type: 'string?' },
            idFb: { type: 'string?' },
            idGg: { type: 'string?' },
            idIg: { type: 'string?' },
            remoteId: { type: 'string?' },
            locale: { type: 'string?' },
            level: { type: 'string', default: 'bronce' },
            dateChallengeUpdate: { type: 'date?' }
        }
    };

    public init (){
        const data = new UserModel();
        //TODO ...
        
        return data;
    }
    public id!: number;
    public fullName!: string;
    public email!: string;
    public photoText!: string;
    public photoURL!: string;
    public phoneNumber!: string;
    public emailVerified!: boolean;
    public firstName!: string;
    public lastName!: string;
    public idEmail!: string;
    public idFb!: string;
    public idGg!: string;
    public idIg!: string;
    public remoteId!: string;
    public locale!: string;
    public level!: string;
    public dateChallengeUpdate!: Date;
    

}