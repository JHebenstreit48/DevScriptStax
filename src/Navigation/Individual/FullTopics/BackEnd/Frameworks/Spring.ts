import type { Subpage } from '@/types/navigation';

// --------------------------------- Spring Boot Start ---------------------------------
import BootBasics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Basics';
import BootAdvanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Spring/SpringBoot/Advanced';
// --------------------------------- Spring Boot End -----------------------------------

// --------------------------------- Spring Main Start ---------------------------------
import MainBasics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Spring/SpringMain/Basics';
import MainAdvanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Spring/SpringMain/Advanced';
// --------------------------------- Spring Main End -----------------------------------

const Spring: Subpage = {
  name: 'Spring',
  subpages: [
    {
      name: 'Spring Boot',
      subpages: [
        BootBasics,
        BootAdvanced
      ],
    },
    {
      name: 'Spring Main',
      subpages: [
        MainBasics,
        MainAdvanced
      ],
    },
  ],
};

export default Spring;