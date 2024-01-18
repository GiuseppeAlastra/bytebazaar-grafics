import {baseUrl} from "./base.url";

export class AuthUrl {
  private static baseUrl = baseUrl + "/all";

  public static login(): string {
    return this.baseUrl + "/login";
  }
}
