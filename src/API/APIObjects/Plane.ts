import { APIObject, APIAttribute } from "../../global/APIObject.js";

export class Plane implements APIObject {
    public id: APIAttribute;
    public picture: APIAttribute;
    public horometer: APIAttribute;
    public plane_name: APIAttribute;
    public plane_type: APIAttribute;
    public hourly_price: APIAttribute;

    constructor(id: string, picture: string, horometer: string, plane_name: string, plane_type: string, hourly_price: string) {
        this.id = {
            value: id,
            detail: true
        };
        this.picture = {
            value: picture,
            detail: false
        };
        this.horometer = {
            value: horometer,
            detail: false
        };
        this.plane_name = {
            value: plane_name,
            detail: true
        };
        this.plane_type = {
            value: plane_type,
            detail: false
        };
        this.hourly_price = {
            value: hourly_price,
            detail: false
        };
    }
    [key: string]: APIAttribute;
}