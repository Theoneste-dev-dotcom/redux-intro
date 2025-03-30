interface ReactionProp{
  
        thumbsUp:number,
        wow:number,
        heart:number,
        rocket:number;
        coffee:number  
}



export interface PostType{
    id: string;
    title:string;
    content:string;
    date:string
    userId:string,
    reactions:ReactionProp
   
}


export interface PostsType{
    posts:PostType[],
    status:'idle' | 'loading' | 'succeeded' | 'failed'
    error:string | null
}