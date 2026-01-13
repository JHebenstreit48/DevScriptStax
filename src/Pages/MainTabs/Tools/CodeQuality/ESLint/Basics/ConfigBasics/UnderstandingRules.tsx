import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnderstandingRules = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/ConfigBasics/UnderstandingRules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Understanding Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnderstandingRules;
