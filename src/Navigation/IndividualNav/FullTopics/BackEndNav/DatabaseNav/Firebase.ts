import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Fundamentals';
import Authentication from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Authentication';
import RealtimeDatabase from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/RealtimeDatabase';
import Firestore from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Firestore';
import Storage from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/FirebaseNav/Storage';


const Firebase: Subpage = {
  name: 'Firebase',
  subpages: [
    Fundamentals,
    Authentication,
    RealtimeDatabase,
    Firestore,
    Storage
  ]
};

export default Firebase;