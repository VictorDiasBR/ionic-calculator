import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { isNumber } from "util";
@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.css"]
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  value = "0";
  oldValue = "0";

  lastOperator = "";
  readyForNewInput = true;
  numberGroups = [
    ["!n", "n^", "MMC", "c"],
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "x"],
    [".", 0, "=", "/"]
  ];

  onButtonPress(symbol) {
    console.log(symbol);

    if (isNumber(symbol) || symbol === ".") {
      if (this.readyForNewInput) this.value = "" + symbol;
      else this.value += "" + symbol;
      this.readyForNewInput = false;
    } else if (symbol === "c") {
      this.value = "0";
      this.readyForNewInput = true;
    } else if (symbol === "=") {
      if (this.lastOperator === "x")
        this.value =
          "" +
          Number(this.value.substring(0, this.value.indexOf("x"))) *
            Number(this.value.substring(this.value.indexOf("x") + 1));
      else if (this.lastOperator === "-") {
        console.log(this.oldValue)
        console.log(this.value.match("[0-9]+$"))
        if(this.value.match("[0-9]+[.][0-9]+$")){
        this.value =
          "" + (Number(this.oldValue) - Number(this.value.match("[0-9]+[.][0-9]+$")));
          }else{
            this.value =
          "" + (Number(this.oldValue) - Number(this.value.match("[0-9]+$")));
          }
      } else if (this.lastOperator === "+")
        this.value =
          "" +
          (Number(this.oldValue) +
            Number(this.value.substring(this.value.indexOf("+") + 1)));
      else if (this.lastOperator === "^") {
        this.value =
          "" +
          Math.pow(
            Number(this.value.substring(0, this.value.indexOf("^"))),
            Number(this.value.substring(this.value.indexOf("^") + 1))
          );
      } else if (this.lastOperator === "!")
        this.value =
          "" +
          this.fatorial(
            Number(this.value.substring(0, this.value.indexOf("!")))
          );
       else if (this.lastOperator==="|") {
         this.value=""+ this.mmc(Number(this.value.substring(0,this.value.indexOf("|"))),Number(this.value.substring(this.value.indexOf("|")+1)));
       }  
      else if (this.lastOperator === "/")
        this.value =
          "" +
          Number(this.value.substring(0, this.value.indexOf("/"))) /
            Number(this.value.substring(this.value.indexOf("/") + 1));
      this.readyForNewInput = true;
    } else {
      if (this.value === "0") {
        this.value = "";
      }
      this.readyForNewInput = false;
      this.oldValue = this.value;
      if (symbol === "n^") (this.value += "" + "^"), (this.lastOperator = "^");
      else if (symbol === "!n")
        (this.value += "" + "!"), (this.lastOperator = "!");
      else if(symbol==="MMC") (this.value += "" + "|"), (this.lastOperator = "|");
      else {
        this.value += "" + symbol;
        if (symbol === "-" && this.lastOperator === "^") {
        } else if (symbol === "-" && this.lastOperator === "x") {
        } else if (symbol === "-" && this.lastOperator === "/") {
        }else if(symbol === "-" && this.lastOperator === "|") { 
        } else {
          this.lastOperator = symbol;
        }
      }
    }
  }
  fatorial(n: number) {
    let aux = 1;
    while (n > 0) {
      aux = aux * n;
      n = n - 1;
    }

    return aux;
  }
  mmc(num1:number, num2:number) {
         var resto, a, b;

         a = num1;
         b = num2;

        do {
        resto = a % b;

        a = b;
        b = resto;

        } while (resto != 0);

        return (num1 * num2) / a;
        }
}
