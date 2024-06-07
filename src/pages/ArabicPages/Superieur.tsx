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
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonIcon,
  IonImg
} from '@ionic/react';

import NavBTN from '../../components/NavigateBtn';
import '../../css/lists.css';


const Page: React.FC = () => {
  // Predetermined list of links, titles, and descriptions
  const items = [
    { id: 1, link: 'https://facebook.com', title: 'Facebook', description: 'Social network for connecting with friends' },
    { id: 2, link: 'https://youtube.com', title: 'YouTube', description: 'Video-sharing platform for watching and uploading videos' },
    { id: 3, link: 'https://google.com', title: 'Google', description: 'Search engine for finding information online' },
    { id: 4, link: 'https://github.com', title: 'Github', description: 'it is github' },

    // Add more items as needed
  ];

  
  const handleItemClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-padding ion-text-center documents-grid">
            <div className='button-container'>
              {/* Text above the button */}
              <div className='selectortextoffset' >
                التعليم 
                <br/>
                العالي    
              </div>
              <IonButton className="backgroundcubes" color="color-button-primary">
                <IonImg src="./public/Superior.svg" alt="Superior.svg" className='selectorpics ion-text-wrap'></IonImg>
              </IonButton>
            </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-padding ion-text-center">
              <IonList lines='none'>
                {items.map((item) => (
                  <IonItem className='list-item' key={item.id} onClick={() => handleItemClick(item.link)}>
                    <IonLabel>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <NavBTN className='custombackbutton custombackbuttonpages' whereTo="/arabic" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;