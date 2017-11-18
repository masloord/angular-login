import { Injectable } from '@angular/core'
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
@Injectable()
export class UserService {

  constructor(private _http: Http) {
  }



  public login(username,password){
    var url ="https://ft-masloord.oraclecloud2.dreamfactory.com/api/v2/angularlogin/_table/user?filter=(username%3D"+username+")and(password%3D"+password+")"

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
headers.append('X-DreamFactory-Api-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d')

    return this._http.get(url, { headers:headers  })
      .toPromise()

  }

public signup(user){
var url = "https://ft-masloord.oraclecloud2.dreamfactory.com/api/v2/angularlogin/_table/user"

var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('X-DreamFactory-Api-Key', '6498a8ad1beb9d84d63035c5d1120c007fad6de706734db9689f8996707e0f7d')

return this._http.post(url, JSON.stringify({ resource: [user] }), { headers: headers })
.toPromise()


  }


}
