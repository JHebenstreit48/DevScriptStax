import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- End To End Testing Navigation Start ----------
import Cypress from '@/Navigation/IndividualNav/FullTopics/Test/End2End/Cypress';
// import Playwright from '@/Navigation/IndividualNav/TestingNav/End2End/Playwright';
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
    // ---------- End To End Testing Navigation Start ----------
    {
      name: 'End To End',
      subpages: [
        Cypress,
      ]
    },
    // ---------- End To End Testing Navigation End ----------

    // ---------- Framework Testing Navigation Start ----------
    {
      name: 'Framework',
      subpages: [
        // Jest,
        // Vitest,
        // Mocha
      ]
    },
    // ---------- Framework Testing Navigation End ----------

    // ---------- Unit Testing Navigation Start ----------
    {
      name: 'Unit',
      subpages: [
        // Pytest,
        // RSpec,
        // PHPUnit,
      ]
    }
    // ---------- Unit Testing Navigation End ----------
  ]
};

// ---------- End To End Testing Navigation End ----------

export default testing;