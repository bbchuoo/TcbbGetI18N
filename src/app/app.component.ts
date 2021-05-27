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
    this.jspI18nList = [];
    this.htmlI18nList = [];

    console.log('this.jspContent', this.jspContent);
    // const aa = [...this.jspContent];
    var arr = this.jspContent.split("\n");
    const filter = [];
    console.log('arr=', arr)
    arr.forEach((x, i) => {
      console.log('x.indexOf((this.i18nTitle)=', x.indexOf((this.i18nTitle)));
      if (x.indexOf(('{'+this.i18nTitle)) > 0) {
        if (x.indexOf(('#')) > 0) {
          const ind2 = x.indexOf("'");
          const ind3 = x.lastIndexOf("'");
          const cc = x.substring(ind2 + 1, ind3);
          console.log('cc=', cc);
          this.jspI18nList.push(cc + "<br/>");
          this.htmlI18nList.push(`{{'${cc}' | translate}}<br/>`);
        }
      }
    })

    console.log('filter=', filter)
    // for (let i = 0; i <= aa.length ; i++) {
    // console.log('this.jspContent', aa[i]);

  }
}
