import MyGame from "./MyGame";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MessageUI extends cc.Component {
    @property(cc.Node)
    private game:MyGame=null;
    @property(cc.Label)
    private scoreLabel:cc.Label=null;
    protected start():void{
        
    }
    
    public setScoreLabelText(text:string):void{
        this.scoreLabel.string=text;
    }
}
