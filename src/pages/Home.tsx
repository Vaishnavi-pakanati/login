
import { IonContent, IonPage, IonTitle,IonCard,IonCardHeader,IonInput,IonIcon,IonText,IonLabel,IonButton, IonGrid,IonRow,IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {eye} from 'ionicons/icons';
import axios from 'axios'



import {useState, useEffect} from 'react'



const Home: React.FC = () => {


return (
<IonPage id='i' >

<IonContent  >



<IonCard color="" id='ka' >
<IonGrid>

<IonCardHeader>
<IonRow>
<IonTitle id='k'>
<h1> Administrator Login</h1></IonTitle></IonRow>
<IonRow>
<p>Please enter your admin credentials to gain access</p></IonRow>
</IonCardHeader>
<IonRow>
<IonInput id='b' placeholder='Username or email address' >
</IonInput></IonRow>
<IonRow><IonCol>
<IonInput id='b' placeholder='Password' >

<IonIcon slot='end' id='d' ></IonIcon>
</IonInput></IonCol></IonRow>
<IonRow><IonCol></IonCol><IonCol>
<IonButton href='/Login' shape='round' >Login</IonButton></IonCol><IonCol></IonCol></IonRow>
<IonRow> <p>
<IonText id='f'>Forgot Password?</IonText>
</p></IonRow>
<IonRow> <p id='c'>
<IonLabel id='f' >New to idigo? Register here</IonLabel>
</p>
</IonRow>
</IonGrid>
</IonCard>


</IonContent>


</IonPage>
);
};
export default Home;