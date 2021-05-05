import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alvinTest2';

  jspContent = '';

  jspI18nList = [];
  htmlI18nList = [];
  // 這個請自行換成需要抓取的i18n開頭
  i18nTitle = '';

  send() {
    console.log('this.jspContent', this.jspContent);
    // const aa = [...this.jspContent];
    var arr = this.jspContent.split("\n");
    const filter = [];
    console.log('arr=', arr)
    arr.forEach((x, i) => {

      if (x.indexOf(('#{'+this.i18nTitle)) > 0) {
        const ind1 = x.indexOf(('#{'+this.i18nTitle));
        const bb = x.slice(ind1 + 8)
        const ind2 = bb.indexOf("'");
        const cc = bb.substring(0, ind2);
        this.jspI18nList.push(cc + "<br/>");
        this.htmlI18nList.push(`{{'${cc}' | translate}}<br/>`);
      }
    })

    console.log('filter=', filter)
    // for (let i = 0; i <= aa.length ; i++) {
    // console.log('this.jspContent', aa[i]);

  }
}
