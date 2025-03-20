export type NewsType = {
    designType?: 'upDown' | 'mainHeader' | 'adjacent' | 'fullLength';
    backgroundColor?: string;
    color?: string;
    textOnTop?: boolean;
    height?: string;
    edges?: 'rounded' | 'flat';
    fontStyle?:'large' | 'normal' | 'largeHighlight';
    Post: {
      id: number;
      CaptionText: string;
      Description: string;
      Image: string;
      Thumbnail: string;
      DisplayOrder: number;
      CreatedOn: string;
      UpdatedOn: string;
      ActiveTillDate: string;
      IsActive: boolean;
    };
  };