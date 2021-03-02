import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert("The product has been shared!");
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
  showItems(s: string) {
    let mainlist = document.getElementById("mainlist");

    // window.alert("Hello " + s);
    var arr = [];
    for (let product of products) {
      if (product.category == s) {
        // console.log("yes");
        arr.push(product);
      }
    }
    for (let item of arr) {
      let itemname = document.createElement("h3");
      let a = document.createElement("a");
      let img = document.createElement("img");
      let p = document.createElement("p");
      // let link = document.createElement('link');
      // link.rel = 'stylesheet';
      // link.href = 'product-list.component.css';

      a.title = "details";
      img.src = item.imagePath;
      img.style.width = "150px";
      img.style.padding = "5px";
      p.style.fontSize = '13px';

      a.appendChild(document.createTextNode(item.name));
      itemname.appendChild(a);
      mainlist.appendChild(itemname);
      mainlist.appendChild(img);
      p.appendChild(document.createTextNode(item.description));
      mainlist.appendChild(p);
    }
    console.log(arr);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
