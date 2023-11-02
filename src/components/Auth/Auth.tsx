import React from "react";
import {inject} from "mobx-react";
import {
  Box,
  Button, ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@mui/material'
import {WebAppUser} from '@twa-dev/types'
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
    const {first_name = 'Test', last_name = 'Testovich'} = WebApp.initDataUnsafe;
    console.log(WebApp.initDataUnsafe)
    const {count, setCount} = this.props;


    const buttons = [
      <Button key="one">One</Button>,
      <Button key="two">Two</Button>,
      <Button key="three">Three</Button>,
    ];
    // console.log(WebAppUser)
    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
                component="img"
                // height="140"
                image="/public/logo.png"
                alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {last_name} {first_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => setCount(count + 1)}>
              Увеличить балл на 1
            </Button>
          </CardActions>
        </Card>
      </>
    )
  }
}

export default Auth