// Class representing a user
import {Rights} from "./rights";

export class User {
    public id: number;
    public username: string;
    public firstName: string;
    public lastName: string;
    public creationTime: Date;
    public rights: Rights;

    constructor(id: number, username: string, firstName: string, lastName: string, creationTime: Date, rights: Rights) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.creationTime = creationTime;
        this.rights = rights;
    }
}