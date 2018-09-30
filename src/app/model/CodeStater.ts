export class CodeStater {

  user : string;
  totalXP: number;

  static fromJSON(json) {
    let codeStaters = new CodeStater();

    codeStaters.user = json.user;
    codeStaters.totalXP = json.total_xp;

    return codeStaters;
  }
}
