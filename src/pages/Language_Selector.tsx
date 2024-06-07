import React from 'react';
import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonHeader,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/react';

import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import '../theme/variables.css';
import '../theme/language_selector.css';

const Lang_Selector = () => {
  const history = useHistory(); // Initialize the history object

  return (
    <>
      {/* IonContent for page content */}
      <IonContent scroll-y="false">
        <div className='centeringelementsdiv'>
          {/* IonButton for selecting Arabic language */}
          <IonButton
            className="bigbutton languageselectorbutton"
            color="color-button-primary"
            onClick={(e) => { e.preventDefault(); history.push('/arabic'); }}
          >
            العربية
          </IonButton>

          {/* IonButton for selecting French language */}
          <IonButton
            className="bigbutton languageselectorbutton"
            color="color-button-primary"
            onClick={(e) => { e.preventDefault(); history.push('/french'); }}
          >
            FRANCAIS
          </IonButton>
          <IonButton
            className="bigbutton languageselectorbutton"
            color="color-button-primary"
            onClick={(e) => { e.preventDefault(); history.push('/french'); }}
          >
            English
          </IonButton>
        </div>
      </IonContent>
    </>
  );
}

export default Lang_Selector;
