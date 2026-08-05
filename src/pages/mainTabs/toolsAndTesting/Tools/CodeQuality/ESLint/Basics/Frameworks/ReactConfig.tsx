import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReactConfig = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/Frameworks/ReactConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactConfig;
