export interface HelpData{
    success:string,
    categories:Array<category>,
    language:string
    
    }


    export interface category{
        sid:number,
        parent_sid:number,
        category_nameEn :string,
        category_nameAr :string,
        category_name:string,
        sub_categories:Array<sub_category>
    
    }

    
export interface sub_category{
    sid:number,
    parent_sid:number,
    category_nameEn :string,
    category_nameAr :string,
    category_name:string,
    questions:Array<Question>

}

    export interface Question{
        sid:number,
        question:string,
        answer:string
    }