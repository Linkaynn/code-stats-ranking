export class Language {
  name: string;
  totalExperience: number = 0;
  newExperience: number = 0;

  static fromJSON(json) {
    const language = new Language();

    language.name = json.name;
    language.totalExperience = json.xps;
    language.newExperience = json.new_xps;

    return language;
  }
}

export class CodeStater {

  user: string;
  name: string;
  email: string;
  personalPage: string;
  description: string;
  newExperience: number = 0;
  totalExperience: number = 0;
  languages: Language[] = [];
  experiencePerDay: { date: string, exp: number }[] = [];

  static fromJSON(json, moreData) {
    const codeStater = new CodeStater();

    codeStater.user = json.user;
    codeStater.name = moreData.name;
    codeStater.email = moreData.email;
    codeStater.personalPage = moreData.personal_page;
    codeStater.description = moreData.description;

    codeStater.totalExperience = json.total_xp;
    codeStater.newExperience = json.new_xp ? json.new_xp : '0';

    const dates = Object.keys(json.dates);

    if (dates.length) {
      for (const date of dates) {
        codeStater.experiencePerDay.push({date: date, exp: json.dates[date]});
      }
    }

    const languages = Object.keys(json.languages);

    if (languages.length) {
      for (const languageID of languages) {
        const language = json.languages[languageID];
        language.name = languageID;

        codeStater.languages.push(Language.fromJSON(language));
      }

      codeStater.languages.sort((a, b) => a.totalExperience >= b.totalExperience ? -1 : 1);
    }

    return codeStater;
  }

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
    });
  }
}
