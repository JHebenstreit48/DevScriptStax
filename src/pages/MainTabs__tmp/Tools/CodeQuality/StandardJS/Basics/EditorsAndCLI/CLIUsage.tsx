import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CLIUsage = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/EditorsAndCLI/CLIUsage';

  return (
    <>
      <PageLayout>
        <PageTitle title="CLI Usage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLIUsage;
