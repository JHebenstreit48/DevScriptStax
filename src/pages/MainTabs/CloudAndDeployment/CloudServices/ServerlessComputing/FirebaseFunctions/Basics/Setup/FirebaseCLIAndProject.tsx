import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FirebaseCLIAndProject = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Setup/FirebaseCLIAndProject';

  return (
    <>
      <PageLayout>
        <PageTitle title="Firebase CLI & Project" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirebaseCLIAndProject;
