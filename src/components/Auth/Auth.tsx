import React from "react";
import {inject} from "mobx-react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography
} from '@mui/material';
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
    // @ts-ignore
    const {user: {first_name = 'Test', last_name = 'Testovich'}} = WebApp.initDataUnsafe;

    const {count, setCount} = this.props;


    const buttons = [
      <Button key="one">One</Button>,
      <Button key="two">Two</Button>,
      <Button key="three">Three</Button>,
    ];
    // console.log(WebAppUser)
    return (
      <>
        <Box>
          <Box
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6LG-9qlxTj_J9HSMVutBj5K60vyCA5yocQ&usqp=CAU"
          />
          <Typography gutterBottom variant="h5" component="div">
            {last_name} {first_name}
          </Typography>
          <Typography variant="body2" color="text.primari">
            Баллы: {count}
          </Typography>
          <Box
              sx={{
                display: 'flex',
                '& > *': {
                  m: 1,
                },
              }}
          >
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
              {buttons}
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
            >
              {buttons}
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
            >
              {buttons}
            </ButtonGroup>
          </Box>
          <Button size="small" color="primary" onClick={setCount}>
            Увеличить баллы на 1
          </Button>
        </Box>
      </>
    )
  }
}

export default Auth