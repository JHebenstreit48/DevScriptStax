import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- End To End Testing Navigation Start ----------
import Cypress from '@/Navigation/IndividualNav/FullTopics/TestingNav/End2End/Cypress';
// import Playwright from '@/Navigation/IndividualNav/TestingNav/End2End/Playwright';
// ---------- End To End Testing Navigation End ----------

// ---------- Framework Testing Navigation Start ----------
// import Jest from '@/Navigation/IndividualNav/TestingNav/Framework/Jest';
// import VitestNavigation from '@/Navigation/IndividualNav/TestingNav/Framework/Vitest';
// import MochaNavigation from '@/Navigation/IndividualNav/TestingNav/Framework/Mocha';
// ---------- Framework Testing Navigation End ----------

// ---------- Unit Testing Navigation Start ----------
// import PytestNavigation from '@/Navigation/IndividualNav/TestingNav/UnitTesting/Pytest';
// import RSpecNavigation from '@/Navigation/IndividualNav/TestingNav/UnitTesting/RSpec';
// import PHPUnitNavigation from '@/Navigation/IndividualNav/TestingNav/UnitTesting/PHPUnit';
// import TestifyNavigation from '@/Navigation/IndividualNav/TestingNav/UnitTesting/Testify';

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
        // JestNavigation,
        // VitestNavigation,
        // MochaNavigation
      ]
    },
    // ---------- Framework Testing Navigation End ----------

    // ---------- Unit Testing Navigation Start ----------
    {
      name: 'Unit',
      subpages: [
        // PytestNavigation,
        // RSpecNavigation,
        // PHPUnitNavigation,
        // TestifyNavigation
      ]
    }
    // ---------- Unit Testing Navigation End ----------
  ]
};

// ---------- End To End Testing Navigation End ----------

export default testing;