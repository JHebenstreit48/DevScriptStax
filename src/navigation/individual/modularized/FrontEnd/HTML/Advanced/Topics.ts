import type { Subpage } from '@/types/navigation';

import AccessibilityAndMedia from '@/navigation/individual/modularized/FrontEnd/HTML/Advanced/Topics/AccessibilityAndMedia';
import SeoAndMetadata from '@/navigation/individual/modularized/FrontEnd/HTML/Advanced/Topics/SeoAndMetadata';
import ModernHtmlAndDelivery from '@/navigation/individual/modularized/FrontEnd/HTML/Advanced/Topics/ModernHTMLAndDelivery';

const Topics: Subpage = {
  name: 'Topics',
  subpages: [
    AccessibilityAndMedia,
    SeoAndMetadata,
    ModernHtmlAndDelivery
  ]
};

export default Topics;