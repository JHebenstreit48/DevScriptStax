import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InitFunctions = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Setup/InitFunctions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Init Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitFunctions;
