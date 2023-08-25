import { Component } from '@angular/core';

@Component({
  selector: 'app-event-toggle-components',
  templateUrl: './event-toggle-components.component.html',
  styleUrls: ['./event-toggle-components.component.css']
})
export class EventToggleComponentsComponent {
  public widthImg = 50
  public displayBlock = 'block'
  public textAlignCenter = 'center'
  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  public content = '<span>Angular is awesome</span>'
  public clickImg = true
  public text = ''
  public myColor = 'red'
  public showParagraph = true
  public currentClass = 'colorRed';

  public toggleShownEl(){
    this.showParagraph = !this.showParagraph
  }
  public toggleColor(){
    this.myColor = (this.myColor === 'black')  ? 'red' : 'black'
  }
  public toggleClass(){
    this.currentClass = (this.currentClass === 'colorRed')  ? 'colorBlack' : 'colorRed'

  }

  public search(ev: Event){
    const el = ev.target as HTMLInputElement
    this.text = el.value
  }

  public changeColor(color: string) : void{
    this.myColor = color
  }

}
