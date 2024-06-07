// Importing necessary React components and modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';

// Importing Ionic styles
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// Importing theme variables
import './theme/variables.css';
import './theme/language_selector.css';
import './theme/home.css';
import './theme/menu.css';
import './theme/language_specific.css';


// Importing pages
import firstpage from './pages/Language_Selector';

import home_ar from './pages/ArabicPages/Home';
  import selector_ar from './pages/ArabicPages/Menu';
  import a_Articles from './pages/ArabicPages/Articles';
  import a_Primaire from './pages/ArabicPages/Primaire';
  import a_College from './pages/ArabicPages/College';
  import a_Secondaire from './pages/ArabicPages/Secondaire';
  import a_Superieur from './pages/ArabicPages/Superieur';

import home_fr from './pages/FrenchPages/Home';
  import selector_fr from './pages/FrenchPages/Menu';
  import f_Articles from './pages/FrenchPages/Articles';
  import f_Primaire from './pages/FrenchPages/Primaire';
  import f_College from './pages/FrenchPages/College';
  import f_Secondaire from './pages/FrenchPages/Secondaire';
  import f_Superieur from './pages/FrenchPages/Superieur';


// Setting up Ionic React
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Switch>
        {/* Setting up routes for each page */}
        <Route exact path="/" component={firstpage} />

        <Route exact path="/arabic" component={home_ar} />
          <Route exact path="/arabic/documents" component={selector_ar} />
          <Route exact path="/arabic/articles" component={a_Articles} />
          <Route exact path="/arabic/primaire" component={a_Primaire} />
          <Route exact path="/arabic/college" component={a_College} />
          <Route exact path="/arabic/secondaire" component={a_Secondaire} />
          <Route exact path="/arabic/superieur" component={a_Superieur} />

        <Route exact path="/french" component={home_fr} />
          <Route exact path="/french/documents" component={selector_fr} />
          <Route exact path="/french/articles" component={f_Articles} />
          <Route exact path="/french/primaire" component={f_Primaire} />
          <Route exact path="/french/college" component={f_College} />
          <Route exact path="/french/secondaire" component={f_Secondaire} />
          <Route exact path="/french/superieur" component={f_Superieur} />


        {/* Redirecting to the default page for unknown links */}
        <Redirect to="/" />
      </Switch>
    </IonReactRouter>
  </IonApp>
);

export default App;
