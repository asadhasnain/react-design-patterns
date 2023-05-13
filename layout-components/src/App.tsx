import { LeftHandComponent } from "./layout/LeftHandComponent";
import { RightHandComponent } from "./layout/RightHandComponent";
import { SplitScreen } from "./layout/SplitScreen";

function App() {
  return (
   <SplitScreen>
      <LeftHandComponent name="Left"/>
      <RightHandComponent message="Right" />
    </SplitScreen>
  );
}

export default App;
