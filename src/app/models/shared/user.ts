
export interface User {

    sid: string,
    username: string,
    email: string,
    FirstName: string,
    LastName: string,
    DisplayEmail: number,
    AgencyLogo: number,
    version_identifier: string,
    IsPrivate: number,
    DisplayMobile: number,
    FirstNameAr: string,
    FirstNameEn: string,
    LastNameEr: string,
    LastNameEn: string,
    MobileNumber: string,
    SupervisorLevel: number,
    agencies: Array<agency>,
}


export interface UserRegisteration {

    DisplayEmail: number,
    DisplayMobile: number,
    DisplayPhone: number,
    IsPrivate: number,
    SupervisorLevel: number,
    action: string,
    username: string,
    passwordOriginal: string,
    passwordConfirmed: string,
    security_code?: any,
    SecurityHash?: any,
    MobileNumber?:string
}

export interface agency {
    agency_sid: number,
    role_sid: number,
    AgencyNameAr: string,
    AgencyNameEn: string,
    AgencyLogo: number,
    version_identifier: string
}


export interface UserData {
    success: string,
    user: User,
    session_key: string
}

export interface UserMobileData{
    sessionkey:string,
    mobilenumber:string
}







