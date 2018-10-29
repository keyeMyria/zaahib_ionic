export interface Ads{
    success:string,
    ads:Array<ad>,
   
    }


    export interface ad{
        0:number,
        1:string,
        2:string,
        3:number,
        4:string,
        5:string,
        6:string,
        ID:number,
        Page:string,
        Location:string,
        Price:number,
        SizeEn:string,
        SizeAr:string,
        image:string

    }