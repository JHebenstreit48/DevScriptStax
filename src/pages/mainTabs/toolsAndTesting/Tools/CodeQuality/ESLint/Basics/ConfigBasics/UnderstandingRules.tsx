import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnderstandingRules = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/ConfigBasics/UnderstandingRules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Understanding Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnderstandingRules;
