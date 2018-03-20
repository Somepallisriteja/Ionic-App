import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NetworkEngineProvider Provider');
  }
  callPost(name,city){
    console.log("name =" + name, "city =" + city);
    let param = { Title: name, Location: city};
    let url = "https://script.googleusercontent.com/macros/echo?user_content_key=KnMOpRSBB9QnwA__JhM33hRTxgwvCtJrQZ9TiiSAiA3Z2Xpdu_DhqR84dgENyyKTDiEP0yOCACwsr260fviJ3V31zHuh9jq5OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp7VtjYS6BG3NcwNOxiBwrD95fAxDfxvwqqzBHjvr-3_85BPy4_3_gBux4Rx99sEiCsKiW3k6MDkf31SIMZH6H4k&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx";
    let request = this.http.post(url,param);
    return request.toPromise();  
  }

}
