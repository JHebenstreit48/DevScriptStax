import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FirstFunction = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Setup/FirstFunction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="First Function" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirstFunction;
