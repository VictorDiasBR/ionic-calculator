import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
@Component({
  selector: "conversao",
  templateUrl: "conversao.html",
  styleUrls: ["conversao.css"]
})
export class Conversao {
  de: string = "";
  para: string = "";
  value: number = 0;

  res: number;

  constructor(public navCtrl: NavController) {}

  converter() {
    if (this.de.toString() === "segundos") {
      if (this.para == "minutos") {
        this.res = this.value / 60;
      } else if (this.para === "horas") {
        this.res = (this.value / 3600) * 60;
      } else if (this.para === "dias") {
        this.res = (this.value * 24) / 86400;
      } else if (this.para === "semanas") {
        this.res = (this.value * 168) / 604800;
      } else if (this.para === "meses") {
        this.res = (this.value * 720) / Math.pow(2592, 6);
      } else if (this.para === "anos") {
        this.res = (this.value * 8760) / Math.pow(31536, 7);
      } else {
        this.res = this.value;
      }
    } else if (this.de === "minutos") {
      if (this.para === "segundos") {
        this.res = this.value * 60;
      } else if (this.para === "horas") {
        this.res = this.value / 60;
      } else if (this.para === "dias") {
        this.res = (this.value * 24) / 1440;
      } else if (this.para === "semanas") {
        this.res = (this.value * 168) / 10080;
      } else if (this.para === "meses") {
        this.res = (this.value * 730.001) / 43800.06;
      } else if (this.para === "anos") {
        this.res = (this.value * 8760) / 525600;
      } else {
        this.res = this.value;
      }
    } else if (this.de === "horas") {
      if (this.para === "segundos") {
        this.res = this.value * 60 * 60;
      } else if (this.para === "minutos") {
        this.res = this.value * 60;
      } else if (this.para === "dias") {
        this.res = this.value / 24;
      } else if (this.para === "semanas") {
        this.res = this.value / 168;
      } else if (this.para === "meses") {
        this.res = this.value / 720;
      } else if (this.para === "anos") {
        this.res = this.value / 8760;
      } else {
        this.res = this.value;
      }
    } else if (this.de === "dias") {
      if (this.para === "segundos") {
        this.res = this.value * 60 * 60;
      } else if (this.para === "minutos") {
        this.res = this.value * 1440;
      } else if (this.para === "horas") {
        this.res = this.value * 24;
      } else if (this.para === "semanas") {
        (this.res = this.value * 0), 142857;
      } else if (this.para === "meses") {
        this.res = this.value * 0.0328767;
      } else if (this.para === "anos") {
        this.res = this.value * 0.00273973;
      } else {
        this.res = this.value;
      }
    } else if (this.de === "semanas") {
      if (this.para === "segundos") {
        this.res = this.value * 604800;
      } else if (this.para === "minutos") {
        this.res = this.value * 10080;
      } else if (this.para === "horas") {
        this.res = this.value * 168;
      } else if (this.para === "dias") {
        this.res = this.value * 7;
      } else if (this.para === "meses") {
        this.res = this.value * 0.230137;
      } else if (this.para === "anos") {
        this.res = this.value * 0.0191781;
      } else {
        this.res = this.value;
      }
    } else if (this.de === "meses") {
      if (this.para === "segundos") {
        this.res = this.value * Math.pow(2628, 6);
      } else if (this.para === "minutos") {
        this.res = this.value * 43800;
      } else if (this.para === "horas") {
        this.res = this.value * 730.001;
      } else if (this.para === "dias") {
        this.res = this.value * 30.4167;
      } else if (this.para === "semanas") {
        this.res = this.value * 4.34524;
      } else if (this.para === "anos") {
        this.res = this.value * 0.0833334;
      } else {
        this.res = this.value;
      }
    } else if (this.de === "anos") {
      if (this.para === "segundos") {
        this.res = this.value * Math.pow(3154, 7);
      } else if (this.para === "minutos") {
        this.res = this.value * 525600;
      } else if (this.para === "horas") {
        this.res = this.value * 8760;
      } else if (this.para === "dias") {
        this.res = this.value * 365;
      } else if (this.para === "semanas") {
        this.res = this.value * 52.1429;
      } else if (this.para === "meses") {
        this.res = this.value * 12;
      } else {
        this.res = this.value;
      }
    }
    //this.res = Number(this.res.toFixed(2));
  }
}
