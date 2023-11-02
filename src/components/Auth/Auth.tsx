import {inject} from "mobx-react";
import React from "react";

@inject(({mainStore}: any) => {
  return {
    count: mainStore.count,
    setCount: mainStore.setCount
  }
})

class Auth extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    console.log(props);
  }
  render() {
    const {count, setCount} = this.props;
    return (
      <>
        <h1>Внимание</h1>
        <button onClick={() => setCount(count + 1)} />
        {count}
      </>
    )
  }
}

export default Auth