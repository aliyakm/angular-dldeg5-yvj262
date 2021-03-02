import { Component, enableProdMode } from "@angular/core";

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
    let maindiv = document.getElementById("mainlist");
    document.getElementById("mainlist").innerHTML = "";
    let mainlist = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.style.textAlign = "center";
    h3.appendChild(document.createTextNode(s));
    maindiv.appendChild(h3);

    // window.alert("Hello " + s);
    var arr = [];
    for (let product of products) {
      if (product.category == s) {
        // console.log("yes");
        arr.push(product);
      }
    }
    for (let item of arr) {
      let itemdiv = document.createElement("div");
      let itemname = document.createElement("h3");
      let a = document.createElement("a");
      let img = document.createElement("img");
      let p = document.createElement("p");
      // let link = document.createElement('link');
      // link.rel = 'stylesheet';
      // link.href = 'product-list.component.css';
      a.title = item.name + " details";
      a.href = "products/" + item.id;
      console.log(a.href);
      // a.href = "['/products', item.id]";
      // a.router.navigate(['/products',item.id]);
      img.src = item.imagePath;
      img.style.width = "150px";
      img.style.padding = "5px";
      p.style.fontSize = "13px";
      itemdiv.style.width = "160px";
      itemdiv.style.height = "535px";
      itemdiv.style.display = "inline-table";
      itemdiv.style.padding = "30px";
      itemdiv.style.borderBottom = "1px solid silver";

      a.appendChild(document.createTextNode(item.name));
      itemname.appendChild(a);
      itemdiv.appendChild(itemname);
      itemdiv.appendChild(img);
      p.appendChild(document.createTextNode(item.description));
      itemdiv.appendChild(p);
      mainlist.appendChild(itemdiv);
    }
    maindiv.appendChild(mainlist);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
