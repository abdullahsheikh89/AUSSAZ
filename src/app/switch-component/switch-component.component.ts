import {
    Component, Input, ElementRef, Output, EventEmitter, OnChanges, SimpleChange, ViewChild, Renderer, AfterViewInit,
    trigger,
    state,
    style,
    transition,
    animate,
    ViewEncapsulation,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.css'],
  animations: [
        trigger('statusChange', [
            state('false', style({ transform: 'translateX(-33.333%)' })),
            state('true', style({ transform: 'translateX(0)' })),
            transition('true <=> false', animate('200ms'))
        ])
    ]
})
export class SwitchComponentComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('on') _onSpan: ElementRef;
    @ViewChild('off') _offSpan: ElementRef;
    @ViewChild('mid') _midSpan: ElementRef;
    @ViewChild('container') _container: ElementRef;
    @ViewChild('main') _main: ElementRef;
    // styles properties
    public _statusStr = 'false';
    public _onColor = 'bootstrap-switch-info';
    public _offColor = 'bootstrap-switch-default';
    public _minWidth = 60;
    public _sizeClass = 'bootstrap-switch-normal';
    public _disabledClass = '';
    @Input() status = false;
    @Output() statusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input() onText = 'on';
    @Input() offText = 'off';
    @Input() onColor = 'bootstrap-switch-info';
    @Input() offColor = 'bootstrap-switch-default';
    @Input() size = 'normal';
    @Input() disabled = false;
    constructor(private el: ElementRef, private renderer: Renderer) {
        this._calculateSize();
    }
    toggleStatus(): void {
        if (!this.disabled) {
            this.status = !this.status;
            this._statusStr = this.status.toString();
            this.statusChange.emit(this.status);
        }
    }
    private _setDisabled(disabled: boolean): void {
        if (disabled) {
            this._disabledClass = 'bootstrap-switch-disabled';
        }
        // tslint:disable-next-line:one-line
        else{
            this._disabledClass = '';
        }
    }
      private _setColor(switchLabel: string, value: string): void{
        let color = '';
        // tslint:disable-next-line:quotemark
        let defaultColor = "bootstrap-switch-info";

        if (switchLabel === 'off'){
            // tslint:disable-next-line:quotemark
            defaultColor = "bootstrap-switch-default";
        }

        switch (value) {
            case 'default':
                color = defaultColor;
                break;
            case 'blue':
                // tslint:disable-next-line:quotemark
                color = "bootstrap-switch-primary";
                break;
            case 'sky-blue':
                // tslint:disable-next-line:quotemark
                color = "bootstrap-switch-info";
                break;
            case 'red':
                // tslint:disable-next-line:quotemark
                color = "bootstrap-switch-danger";
                break;
            case 'yellow':
                // tslint:disable-next-line:quotemark
                color = "bootstrap-switch-warning";
                break;
            case 'green':
                // tslint:disable-next-line:quotemark
                color = "bootstrap-switch-success";
                break;
            case 'gray':
                // tslint:disable-next-line:quotemark
                color = "bootstrap-switch-default";
                break;
        }

        if (switchLabel === 'off') {
            this._offColor = color;
        }
        // tslint:disable-next-line:one-line
        else{
            this._onColor = color;
        }
    }
       private _calculateWidth():void {
        if (this._onSpan) {
            // tslint:disable-next-line:quotemark
            this.renderer.setElementStyle(this._onSpan.nativeElement, "width", "");
            // tslint:disable-next-line:quotemark
            this.renderer.setElementStyle(this._midSpan.nativeElement, "width", "");
            // tslint:disable-next-line:quotemark
            this.renderer.setElementStyle(this._offSpan.nativeElement, "width", "");

            // tslint:disable-next-line:prefer-const
            let width = Math.max(this._onSpan.nativeElement.clientWidth, this._offSpan.nativeElement.clientWidth, this._minWidth);

            // tslint:disable-next-line:quotemark
            this.renderer.setElementStyle(this._onSpan.nativeElement, "width", width.toString() + "px");
            // tslint:disable-next-line:quotemark
            this.renderer.setElementStyle(this._midSpan.nativeElement, "width", (width - 10).toString() + "px");
            // tslint:disable-next-line:quotemark
            this.renderer.setElementStyle(this._offSpan.nativeElement, "width", width.toString() + "px");
            // tslint:disable-next-line:quotemark
            this.renderer.setElementStyle(this._container.nativeElement, "width", (width * 3).toString() + "px");
            // tslint:disable-next-line:quotemark
            this.renderer.setElementStyle(this._main.nativeElement, "width", (width * 2).toString() + "px");
        }
    }

    private _calculateSize(): void {
        switch (this.size) {
            // tslint:disable-next-line:quotemark
            case "mini":
                // tslint:disable-next-line:quotemark
                this._sizeClass = "bootstrap-switch-mini";
                this._minWidth = 25;
                break;
            // tslint:disable-next-line:quotemark
            case "small":
                this._sizeClass = 'bootstrap-switch-small';
                this._minWidth = 30;
                break;
            case 'normal':
                this._sizeClass = 'bootstrap-switch-normal';
                this._minWidth = 60;
                break;
            case 'large':
                this._sizeClass = 'bootstrap-switch-large';
                this._minWidth = 80;
                break;
        }

        this._calculateWidth();
    }
  ngOnInit() {
  }

   ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
     let log: string[] = [];
      for (let propName in changes) {
       let changedProp = changes[propName];
       let from = changedProp.previousValue;
       let value = changedProp.currentValue;
        switch(propName)
            {
                case "onText":
                    this._calculateWidth();
                    break;
                case "offText":
                    this._calculateWidth();
                    break;
                case "onColor":
                    this._setColor('on', value);
                    break;
                case "offColor":
                    this._setColor('off', value);
                    break;
                case "status":
                    this._statusStr = value.toString();
                    break;
                case "size":
                    this._calculateSize();
                    break;
                case "disabled":
                    this._setDisabled(value);
                    break;
            }

            log.push(`${propName} changed from ${from} to ${value}`);
        }
        console.log(log.join(', '));
   }
   
  ngAfterViewInit() {
     // this._calculateSize("normal");
     // this._calculateWidth();
  }

}
