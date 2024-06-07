// French.tsx
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
  IonImg,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import NavBTN from '../../components/NavigateBtn';

const Page: React.FC = () => {

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
            <IonCol size="12" class="ion-padding ion-text-center">
            <div className='button-container'>
                {/* Text above the button */}
                <div className='selectortextoffset'>
                  مقالات
                  <br/>
                  تهمك
                </div>

                {/* Button to navigate to 'college' */}
                <IonButton className="backgroundcubes" color="color-button-primary">
                  <IonImg src="./public/Articles.svg" alt="Articles.svg" className='selectorpics ion-text-wrap'></IonImg>
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
            <IonCol size="12" className="ion-text-center homebuttondiv">
              <NavBTN className='custombackbutton custombackbuttonpages' whereTo="/arabic" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;
