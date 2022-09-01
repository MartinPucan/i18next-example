import React from 'react';
import {useTranslation} from "react-i18next";
import './App.css';
import Header from "./components/Header/Header";

function App() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <Header/>
      <div className="App-header">
        {t('header.hello-world')}
      </div>
      <div>
        <button>{t('button.save')}</button>
        <button>{t('button.delete')}</button>
      </div>
    </div>
  );
}

export default App;
