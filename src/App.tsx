import CustomHooks from "./modules/CustomHook"
import LearnCreateContextHook from "./modules/LearnCreateContextHook"
import LearnUseContextHook from "./modules/LearnUseContextHook"
import LearnUseReducer from "./modules/LearnUseReducer"

const App = () => {

  return (
    <LearnCreateContextHook>

    <div>
     {/* <CustomHooks /> */}
     {/* <LearnUseReducer /> */}
     <LearnUseContextHook />
    </div>
    </LearnCreateContextHook>
  )
}

export default App