import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
