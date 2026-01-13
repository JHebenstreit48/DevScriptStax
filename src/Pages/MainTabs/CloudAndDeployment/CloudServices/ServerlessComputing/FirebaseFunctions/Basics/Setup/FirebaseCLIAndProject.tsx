import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FirebaseCLIAndProject = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Setup/FirebaseCLIAndProject';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Firebase CLI & Project" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirebaseCLIAndProject;
