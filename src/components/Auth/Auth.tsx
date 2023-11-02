import React from "react";
import {inject} from "mobx-react";
import {Box, Card, CardHeader} from '@mui/material'
// import {WebAppUser} from '@twa-dev/types'
import WebApp from "@twa-dev/sdk";

@inject(({mainStore}: any) => {
  return {
    count: mainStore.count,
    setCount: mainStore.setCount
  }
})

class Auth extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log(WebApp.initData)
    console.log(WebApp.initDataUnsafe)
    const {count, setCount} = this.props;
    // console.log(WebAppUser)
    return (
      <>
        <Box>
          <Card>
            <CardHeader title={"Fio USer"} />
          </Card>
          <img src={'./public/logo.png'}/>
          <h1>Внимание</h1>
          <button onClick={() => setCount(count + 1)} />
          {count}
        </Box>
      </>
    )
  }
}

export default Auth