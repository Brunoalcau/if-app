import Route from "./src/Route";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Route />
    </NativeBaseProvider>
  );
}
