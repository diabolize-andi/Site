import {APIObject, APIAttribute} from "../../global/APIObject.js";

export class User implements APIObject {
    public id: APIAttribute;
    public last_name: APIAttribute;
    public first_name: APIAttribute;
    public email: APIAttribute;
    public role: APIAttribute;
    public subscription_status: APIAttribute;
    public profile_picture: APIAttribute;
    public birth_date: APIAttribute;
    public address: APIAttribute;
    public postal_code: APIAttribute;
    public city: APIAttribute;

    constructor(id: string, last_name: string, first_name: string, email: string, role: string, subscription_status: string, profile_picture: string, birth_date: string, address: string, postal_code: string, city: string) {
        this.id = {
            value: id,
            detail: true
        };
        this.last_name = {
            value: last_name,
            detail: false
        };
        this.first_name = {
            value: first_name,
            detail: false
        };
        this.email = {
            value: email,
            detail: false
        };
        this.role = {
            value: role,
            detail: false
        };
        this.subscription_status = {
            value: subscription_status,
            detail: true
        };
        this.profile_picture = {
            value: profile_picture,
            detail: true
        };
        this.birth_date = {
            value: birth_date,
            detail: true
        };
        this.address = {
            value: address,
            detail: true
        };
        this.postal_code = {
            value: postal_code,
            detail: true
        };
        this.city = {
            value: city,
            detail: true
        }; 
    }
    [key: string]: APIAttribute;

}