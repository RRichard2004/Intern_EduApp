import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import '../theme/main.css';

interface NavigateToProps {
  whereTo: string;
  className: string;
}


const NavigateTo: React.FC<NavigateToProps> = ({ whereTo, className }) => {
  const history = useHistory();

const navigateTo = () => {
  history.push(whereTo) 
};

  return (
    <IonButton className={className} onClick={navigateTo}>
    </IonButton>
  );
};

export default NavigateTo;
