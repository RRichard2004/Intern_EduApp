import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonContent,
  IonPage,
  IonImg,
  IonItem,
  IonText,
} from '@ionic/react';

import '../../theme/variables.css';


import { useHistory } from 'react-router-dom';

import NavBTN from '../../components/NavigateBtn';

const Arabic: React.FC = () => {
  const history = useHistory();

  // Function to navigate to a specific path
  const navigateTo = (path: string) => {
    history.push(`/french/${path}`);
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid className='centeringelementsdiv'>
          {/* Row 1 - Combined Buttons */}
          <IonRow className="ion-text-center">
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset' onClick={() => navigateTo('articles')}>
              Articles
              pour vous
              </div>
              {/* Button to navigate to 'Articles' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('articles')}>
                <IonImg src="./public/Articles.svg" alt="Articles.svg" className='ion-text-wrap'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>

          {/* Row 2 */}
          <IonRow className="ion-text-center">
            <IonCol>
              
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset' onClick={() => navigateTo('college')}>
                COLLEGE
              </div>

              {/* Button to navigate to 'college' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('college')}>
                <IonImg src="./public/College.svg" alt="College.svg" className='ion-text-wrap'></IonImg>
              </IonButton>
            </div>

            </IonCol>
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset' onClick={() => navigateTo('primaire')}>
                PRIMAIRE
              </div>

              {/* Button to navigate to 'Primary' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('primaire')}>
                <IonImg src="./public/Primary.svg" alt="Primary.svg" className='ion-text-wrap'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>

          {/* Row 3 */}
          <IonRow className="ion-text-center"  onClick={() => navigateTo('superieur')}>
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset'>
               SUPERIEUR
              </div>

              {/* Button to navigate to 'superior' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('superieur')}>
                <IonImg src="./public/Superior.svg" alt="Superior.svg" className='ion-text-wrap'></IonImg>
              </IonButton>
            </div>
            </IonCol>
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset'  onClick={() => navigateTo('secondaire')}>
                SECONDAIRE
              </div>

              {/* Button to navigate to 'secondary' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('secondaire')}>
                <IonImg src="./public/Secondary.svg" alt="Secondary.svg" className='ion-text-wrap'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>

          {/* HomeButton component for navigation */}
          <NavBTN className='custombackbutton custombackbuttonpages' whereTo="/french" />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Arabic;
