import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Runtimes = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/RuntimeAndConfig/Runtimes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Runtimes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Runtimes;
