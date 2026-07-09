import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LanguagesAndSDKs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/RuntimeAndConfig/LanguagesAndSDKs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages & SDKs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LanguagesAndSDKs;
