import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {


  public  onText = "On";
  public  offText = "Off";
  public onColor = "blue";
  public  offColor = "red";
  public  size = "normal";
  public  disabled = false;
  public onTextType="Children";
   public  offTextType = "Adult";
     public onTextActive="Active";
   public  offTextActive = "Inactive";
    public onTextYes="Yes";
   public  offTextYes = "No";
public  sizeType = "large";
  
  constructor() { }

  ngOnInit() {

  }

}
