import { PostType } from "./PostType";

export type NewsType = {
    designType?: 'upDown' | 'mainHeader' | 'adjacent' | 'fullLength';
    backgroundColor?: string;
    color?: string;
    textOnTop?: boolean;
    height?: string;
    edges?: 'rounded' | 'flat';
    fontStyle?:'large' | 'normal' | 'largeHighlight';
    Post: PostType;
  };