import NoteForm from "./components/NoteForm";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persisStore, store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persisStore}>
          <NoteForm />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
