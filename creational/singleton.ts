type TYPE_MODE = "dark" | "light";
type TYPE_LANGUAGE = "id" | "en";

class Settings {
  static instance: Settings;
  private mode: TYPE_MODE;
  private lang: TYPE_LANGUAGE;

  private constructor() {
    this.mode = "light";
    this.lang = "id";
  }

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }

  public getMode(): TYPE_MODE {
    return this.mode;
  }
  public setMode(newMode: TYPE_MODE): void {
    this.mode = newMode;
  }

  public getLanguage(): TYPE_LANGUAGE {
    return this.lang;
  }
  public setLanguage(newLanguage: TYPE_LANGUAGE): void {
    this.lang = newLanguage;
  } 
}

export default Settings;