// eslint-disable-next-line import/prefer-default-export
export class Storage {
  static saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static loadData(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }
}
