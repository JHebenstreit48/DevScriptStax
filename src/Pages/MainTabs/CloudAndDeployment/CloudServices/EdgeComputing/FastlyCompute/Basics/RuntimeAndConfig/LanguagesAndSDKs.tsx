import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LanguagesAndSDKs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/RuntimeAndConfig/LanguagesAndSDKs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Languages & SDKs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LanguagesAndSDKs;
