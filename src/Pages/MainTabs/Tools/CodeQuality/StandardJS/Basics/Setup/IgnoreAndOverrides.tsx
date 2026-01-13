import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IgnoreAndOverrides = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/Setup/IgnoreAndOverrides';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ignore & Overrides" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IgnoreAndOverrides;
