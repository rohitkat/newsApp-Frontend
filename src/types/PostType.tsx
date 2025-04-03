export interface PostType{
    id: Number;
    Title : string;
    CaptionText : string;
    Description : string;
    Image : string;
     ThumbNail : string;
     DisplayOrder : Number;
     CreatedOn : Date;
     UpdatedOn : Date;
     ActiveTillDate : Date;
     IsActive : boolean;
     Category : {
        id: number;
        Title : string;
        Url : string;
      }
}