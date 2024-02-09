import React from 'react';
import Navigation from './navigation/navigation';
import {Provider} from 'react-redux';
import Store, {Persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
