import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IAMAndCLI = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AWSLambda/Basics/Setup/IAMAndCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="IAM & CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IAMAndCLI;
