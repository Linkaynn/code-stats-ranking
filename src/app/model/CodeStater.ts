export class Language {
  name: string;
  totalExperience: number = 0;
  newExperience: number = 0;

  static fromJSON(json) {
    let language = new Language();

    language.name = json.name;
    language.totalExperience = json.xps;
    language.newExperience = json.new_xps;

    return language;
  }
}

export class CodeStater {

  user : string;
  newExperience: number = 0;
  totalExperience: number = 0;
  languages : Language[] = [];
  experiencePerDay: { date: string, exp: number }[] = [];

  averageExpPerDay() {
    let totalExp = 0;

    for (const pair of this.experiencePerDay) {
      totalExp += pair.exp;
    }

    return totalExp / this.experiencePerDay.length;
  }

  bestLanguage() {
    return this.languages.reduce((previousValue, currentValue) => {
      if (currentValue.totalExperience > previousValue.totalExperience) {
        return currentValue;
      } else {
        return previousValue;
      }
    })
  }

  static fromJSON(json) {
    let codeStaters = new CodeStater();

    codeStaters.user = json.user;
    codeStaters.totalExperience = json.total_xp;
    codeStaters.newExperience = json.new_xp ? json.new_xp : '0';

    let dates = Object.keys(json.dates);

    if (dates.length) {
      for (const date of dates) {
        codeStaters.experiencePerDay.push({date: date, exp: json.dates[date]})
      }
    }

    let languages = Object.keys(json.languages);

    if (languages.length) {
      for (const languageID of languages) {
        let language = json.languages[languageID];
        language.name = languageID;

        codeStaters.languages.push(Language.fromJSON(language))
      }
    }

    return codeStaters;
  }
}
