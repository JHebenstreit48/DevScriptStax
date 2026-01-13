import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ColdStartsAndMinInstances = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Performance/ColdStartsAndMinInstances';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cold Starts & Min Instances" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColdStartsAndMinInstances;
