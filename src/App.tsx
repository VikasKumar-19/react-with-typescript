import UserContext from "./context/UserContext"
import CustomHooks from "./modules/CustomHook"
import LearnCreateContextHook from "./modules/LearnCreateContextHook"
import LearnUseContextHook from "./modules/LearnUseContextHook"
import LearnUseReducer from "./modules/LearnUseReducer"
import NewsFeeds from "./modules/NewsFeeds"
import UserProfile from "./modules/UserProfile"

const App = () => {

  return (
    // <LearnCreateContextHook>

    // <div>
    //  {/* <CustomHooks /> */}
    //  {/* <LearnUseReducer /> */}
    //  <LearnUseContextHook />
    // </div>
    // </LearnCreateContextHook>

    <UserContext>
      <UserProfile />
      <NewsFeeds />
    </UserContext>
  )
}

export default App