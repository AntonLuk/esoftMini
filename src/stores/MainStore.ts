import {action, makeAutoObservable, observable} from 'mobx';

class MainStore {
  @observable count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action setCount = () => {
    this.count = this.count + 1;
  }
}

export default MainStore;