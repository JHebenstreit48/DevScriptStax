import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ES6FeaturesIntroduction = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ModernES6/ES6FeaturesIntroduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Basics - ES6 Features Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ES6FeaturesIntroduction;
