import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CaptchaImage } from '../../app/models/shared/general';

@Injectable()
export class ServerProvider {
    captchaImage: CaptchaImage = {
        blob: null,
        uri: ""
    };
    constructor(private sanitizer: DomSanitizer) {

    }

    async getData<T>(url: string, parameters?: {}, headers: {} = {}): Promise<T> {

        let actualUrl = url;
        if (parameters) {
            const params = this.objToParams(parameters);
            actualUrl += "?" + params.toString();
        }

        let isOkay = false;
        //const toSendHeaders = new Headers();
        // toSendHeaders.append("unusedheader", "true");
        // toSendHeaders.append("Authorization", token || "");
        //toSendHeaders.append("Ums-Token", token || "");

        // toSendHeaders.append("Access-Control-Allow-Origin", "*");
        return fetch(actualUrl, {
            mode: "cors",
            // credentials: "include",
            //headers:
            // toSendHeaders
        })
            .then((response) => {
                isOkay = response.ok;
                return response.text();
            })
            .then((text) => {
                if (text && isOkay) {
                    try {
                        return JSON.parse(text);
                    } catch (e) {
                        // window.location.pathname = "/UMSLogin/weblogin.aspx";
                        // throw e;
                        console.log(e);
                    }
                } else {
                    //if (text.indexOf("System.Web.Services.Protocols.SoapException: Login") === 0) {
                    // window.location.pathname = "/UMSLogin/weblogin.aspx";
                    //}
                    // throw new Error(text || "");
                    console.log(text);
                }
            })
            .then((data: T) => data);
    }

    async getImage(url: string, parameters?: {}, headers: {} = {}) {
        let actualUrl = url;
        if (parameters) {
            const params = this.objToParams(parameters);
            actualUrl += "?" + params.toString();
        }

        let isOkay = false;
        return fetch(actualUrl, {
            mode: "cors",
        })
            .then((response) => {
                isOkay = response.ok;
                return response.body;
            })
            .then(response => {
                var reader = response.getReader();
                return reader.read().then(({ done, value }) => {
                    return value;
                });

            })
            .then(stream => new Response(stream))
            .then(response => response.blob())
            .then(blob => {

                this.captchaImage.blob = blob;
                this.captchaImage.uri = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
                return this.captchaImage;
            })
            .catch(err => {
                console.error(err)
                // return this.sanitizer.bypassSecurityTrustUrl("");
                return this.captchaImage;
            });
    }


    objToParams(obj: any): URLSearchParams {
        const params = new URLSearchParams();
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (value !== undefined) {
                    params.append(key, value);

                }
            }
        }

        return params;
    }

    objToFormdata(obj: any): FormData {
        const form = new FormData();
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (value !== undefined) {
                    form.append(key, value);
                }
            }
        }

        return form;
    }

    async postData<T>(url: string, parameters: {} = {}, headers?: {}): Promise<T> {
        const actualUrl = url;
        let isOkay = false;
        const toStringBefore = Date.prototype.toString;
        //Date.prototype.toJSON = function () { return dateToServiceString(this); };
        const jsonToSend = JSON.stringify(parameters);
        Date.prototype.toString = toStringBefore;
        // const toSendHeaders = new Headers();
        // toSendHeaders.append("Content-Type", "application/json");
        //  toSendHeaders.append("Authorization", token || "");
        return fetch(actualUrl, {
            mode: "cors",
            method: "POST",
            // credentials: "include",
            body: jsonToSend,
            // headers: toSendHeaders,
        })
            .then((response) => {
                isOkay = response.ok;
                return response.text();
            })
            .then((text) => {
                let jsonString = text;
                // tslint:disable-next-line:quotemark
                if (jsonString.indexOf('{"d":null}') > 0) {
                    // tslint:disable-next-line:quotemark
                    jsonString = text.substring(0, text.indexOf('{"d":null}'));
                }
                if (jsonString && isOkay) {
                    return JSON.parse(jsonString);
                } else {
                    if (jsonString.indexOf("System.Web.Services.Protocols.SoapException: Login") === 0) {
                        //  window.location.pathname = "/UMSLogin/weblogin.aspx";
                    }
                    // throw new Error(jsonString || "");
                    console.log(jsonString);
                }
            })
            .then((data: T) => data);
    }

    async postFormData<T>(url: string, parameters: {} = {}, headers?: {}): Promise<T> {
       
        const actualUrl = url;
        let isOkay = false;
        const formData = this.objToFormdata(parameters);
        return fetch(actualUrl, {
            //    mode: "cors",
            method: "POST",
            body: formData,
        })
            .then((response) => {
               
                isOkay = response.ok;
                return response.text();
            })
            .then((text) => {
                let jsonString = text;
                // tslint:disable-next-line:quotemark
                if (jsonString.indexOf('{"d":null}') > 0) {
                    // tslint:disable-next-line:quotemark
                    jsonString = text.substring(0, text.indexOf('{"d":null}'));
                }
                if (jsonString && isOkay) {
                    return JSON.parse(jsonString);
                } else {
                    if (jsonString.indexOf("System.Web.Services.Protocols.SoapException: Login") === 0) {
                        //  window.location.pathname = "/UMSLogin/weblogin.aspx";
                    }
                    // throw new Error(jsonString || "");
                    console.log(jsonString);
                }
            })
            .then((data: T) => data);
    }


}
