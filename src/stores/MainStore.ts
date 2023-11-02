import {action, makeAutoObservable, observable} from 'mobx';

class MainStore {
  @observable count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action setCount = (value: number) => {
    this.count = value;
  }
}

export default MainStore;