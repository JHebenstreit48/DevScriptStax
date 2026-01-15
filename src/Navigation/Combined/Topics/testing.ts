import type { Subpage } from '@/types/navigation';

// ---------- End To End Testing Navigation Start ----------
import Cypress from '@/Navigation/Individual/FullTopics/Testing/End2End/Cypress';
import Playwright from '@/Navigation/Individual/FullTopics/Testing/End2End/Playwright';
// ---------- End To End Testing Navigation End ----------

// ---------- Framework Testing Navigation Start ----------
// import Jest from '@/Navigation/IndividualNav/TestingNav/Framework/Jest';
// import Vitest from '@/Navigation/IndividualNav/TestingNav/Framework/Vitest';
// import Mocha from '@/Navigation/IndividualNav/TestingNav/Framework/Mocha';
// ---------- Framework Testing Navigation End ----------

// ---------- Unit Testing Navigation Start ----------
// import Pytest from '@/Navigation/IndividualNav/TestingNav/UnitTesting/Pytest';
// import RSpec from '@/Navigation/IndividualNav/TestingNav/UnitTesting/RSpec';
// import PHPUnit from '@/Navigation/IndividualNav/TestingNav/UnitTesting/PHPUnit';

// ---------- Unit Testing Navigation End ----------

const testing: Subpage = {
  name: 'Testing',
  subpages: [
    {
      name: 'End To End',
      subpages: [
        Cypress,
        Playwright
      ]
    },
    {
      name: 'Framework',
      subpages: [
        // Jest,
        // Vitest,
        // Mocha
      ]
    },
    {
      name: 'Unit',
      subpages: [
        // Pytest,
        // RSpec,
        // PHPUnit,
      ]
    }
  ]
};

export default testing;