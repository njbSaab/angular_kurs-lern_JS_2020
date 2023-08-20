import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-component',
  templateUrl: './interpolation-component.component.html',
  styleUrls: ['./interpolation-component.component.css']
})
export class InterpolationComponentComponent {

  public mySalary = 3500;
  public myName = 'Nj'

  public myAge = 0
  public myBD = ''

  public getSallary(): number{
    return this.mySalary * 1.2;
  }

  public getAge(): number{
    return this.myAge + 30
  }

  public getBirthDate(): string{
    this.myBD = '03.05.1992'
    return this.myBD
  }

}
