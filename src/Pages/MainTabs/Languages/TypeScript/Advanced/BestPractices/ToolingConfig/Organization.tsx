import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Organization = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/BestPractices/ToolingConfig/Organization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Organization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Organization;
