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
    history.push(`/arabic/${path}`);
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
                مقالات
                تهمك
              </div>
              {/* Button to navigate to 'Articles' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('articles')}>
                <IonImg src="./public/Articles.svg" alt="Articles.svg" className='selectorpics ion-text-wrap'></IonImg>
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
                الثانوي
                الإعدادي
              </div>

              {/* Button to navigate to 'college' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('college')}>
                <IonImg src="./public/College.svg" alt="College.svg" className='selectorpics ion-text-wrap'></IonImg>
              </IonButton>
            </div>

            </IonCol>
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset' onClick={() => navigateTo('primaire')}>
                السلك
                الابتدائي
              </div>

              {/* Button to navigate to 'Primary' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('primaire')}>
                <IonImg src="./public/Primary.svg" alt="Primary.svg" className='selectorpics ion-text-wrap'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>

          {/* Row 3 */}
          <IonRow className="ion-text-center">
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset' onClick={() => navigateTo('superieur')}>
                التعليم العالي
              </div>

              {/* Button to navigate to 'superior' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('superieur')}>
                <IonImg src="./public/Superior.svg" alt="Superior.svg" className='selectorpics ion-text-wrap'></IonImg>
              </IonButton>
            </div>
            </IonCol>
            <IonCol>
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset' onClick={() => navigateTo('secondaire')}>
                الثانوي  
                التأهيلي
              </div>

              {/* Button to navigate to 'secondary' */}
              <IonButton className="backgroundcubes" color="color-button-primary" onClick={() => navigateTo('secondaire')}>
                <IonImg src="./public/Secondary.svg" alt="Secondary.svg" className='selectorpics ion-text-wrap'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>

          {/* HomeButton component for navigation */}
          <NavBTN className='custombackbutton custombackbuttonpages' whereTo="/arabic" />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Arabic;
