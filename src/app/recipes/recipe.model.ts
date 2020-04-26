export class Recipe 
{
    public Name:string;
    public Description:string;
    public ImgPath:string;

    constructor(name:string,description:string, imgPath:string)
    {
        this.Name = name;
        this.Description = description;
        this.ImgPath = imgPath;
    }
    
}