import MainStore from "../stores/MainStore.ts";
import Auth from "./Auth/Auth.tsx"
import {Provider} from "mobx-react";

const MainPage = () => {
  const mainStore = new MainStore({test: 666})


  return (
    <>
      <Provider mainStore={mainStore}>
        <Auth />
      </Provider>
    </>
  )
}

export default MainPage
