import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- End To End Testing Navigation Start ----------
import CypressBasicsNavigation from '@/Navigation/IndividualNav/TestingNavigation/End2End/CypressNav/Basics';
import CypressIntermediateNavigation from '@/Navigation/IndividualNav/TestingNavigation/End2End/CypressNav/Intermediate';
import CypressAdvancedNavigation from '@/Navigation/IndividualNav/TestingNavigation/End2End/CypressNav/Advanced';
// import PlaywrightNavigation from '@/Navigation/IndividualNav/TestingNavigation/End2End/Playwright';
// ---------- End To End Testing Navigation End ----------

// ---------- Framework Testing Navigation Start ----------
import JestNavigation from '@/Navigation/IndividualNav/TestingNavigation/Framework/Jest';
import VitestNavigation from '@/Navigation/IndividualNav/TestingNavigation/Framework/Vitest';
import MochaNavigation from '@/Navigation/IndividualNav/TestingNavigation/Framework/Mocha';
// ---------- Framework Testing Navigation End ----------

// ---------- Unit Testing Navigation Start ----------
import PytestNavigation from '@/Navigation/IndividualNav/TestingNavigation/UnitTesting/Pytest';
import RSpecNavigation from '@/Navigation/IndividualNav/TestingNavigation/UnitTesting/RSpec';
import PHPUnitNavigation from '@/Navigation/IndividualNav/TestingNavigation/UnitTesting/PHPUnit';
import TestifyNavigation from '@/Navigation/IndividualNav/TestingNavigation/UnitTesting/Testify';

// ---------- Unit Testing Navigation End ----------

const testingNav: Page = {
  name: 'Testing',
  subpages: [
    // ---------- End To End Testing Navigation Start ----------
    {
      name: 'End To End',
      subpages: [
        {
          name: 'Cypress',
          subpages: [
            CypressBasicsNavigation,
            CypressIntermediateNavigation,
            CypressAdvancedNavigation
          ]
        },
        // {
        //   name: 'Playwright',
        //   subpages: []
        // }
      ]
    },
    // ---------- End To End Testing Navigation End ----------

    // ---------- Framework Testing Navigation Start ----------
    {
      name: 'Framework',
      subpages: [JestNavigation, VitestNavigation, MochaNavigation]
    },
    // ---------- Framework Testing Navigation End ----------

    // ---------- Unit Testing Navigation Start ----------
    {
      name: 'Unit',
      subpages: [
        PytestNavigation,
        RSpecNavigation,
        PHPUnitNavigation,
        TestifyNavigation
      ]
    }
    // ---------- Unit Testing Navigation End ----------
  ]
};

// ---------- End To End Testing Navigation End ----------

export default testingNav;
