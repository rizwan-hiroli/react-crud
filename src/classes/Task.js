export class Task{
    constructor(
        _id=0,  // id="0" for backend json server
        name="",
        description="",
       ){
           this._id=_id;
           this.name=name;
           this.description=description;
       }

}