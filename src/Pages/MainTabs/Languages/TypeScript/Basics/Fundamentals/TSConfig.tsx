import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TSConfig = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Fundamentals/TSConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Basics - TSConfig" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TSConfig;