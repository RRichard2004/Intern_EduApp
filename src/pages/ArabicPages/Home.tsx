import React from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonHeader,
  IonFooter,
  IonTitle,
  IonToolbar,
  IonPage,
  IonImg
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import NavBTN from '../../components/NavigateBtn';

import '../../theme/variables.css';
import '../../theme/home.css';

const Page: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage >
      {/* IonContent for page content */}
      <IonContent>
                {/* IonGrid for layout */}
        <IonGrid className='centeringelementsdiv'>
          {/* Row for the header section */}
          <IonRow>
            <IonCol size="12" class="ion-padding ion-text-center sizemanupulate64">
              {/* IonImg for the header image */}
              <div className="centering-container">
                <IonImg src="./public/people.svg" alt="people.png" className='homepics'></IonImg>
              </div>
              وجهة
            </IonCol>
          </IonRow>

          {/* Row for the title and description */}
          <IonRow>
            <IonCol size="12" className="ion-padding ion-text-center sizemanipulate36">
              دليلك لاكتشاف المسار <div className="ion-text-wrap">المناسب لدراستك</div>
            </IonCol>
          </IonRow>

          {/* Row for the buttons */}
          <IonRow>
            <IonCol size="12" class="ion-padding ion-text-center">
              {/* IonButton for navigation */}
              <IonButton color="color-button-primary bigbutton" onClick={() => history.push('/arabic/documents')}>
                مرحبا   
              </IonButton>

              {/* A div for spacing */}
              <div className="ion-text-wrap" />

              {/* HomeButton for navigating back */}
              <NavBTN className='custombackbutton custombackbuttonhome' whereTo="/" />

            </IonCol>
          </IonRow>
          <IonRow className='gridfooterparent'>
            <IonCol size="3">
              <IonImg src="./public/logo1.png" alt="people.png" className='footerimg'></IonImg>
            </IonCol>
            <IonCol size="3">
              <IonImg src="./public/logo2.png" alt="people.png" className='footerimg'></IonImg>
            </IonCol>
            <IonCol size="3">
              <IonImg src="./public/logo3.png" alt="people.png" className='footerimg'></IonImg>
            </IonCol>
            <IonCol size="3">
              <IonImg src="./public/logo4.png" alt="people.png" className='footerimg'></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;
