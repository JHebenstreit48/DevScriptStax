import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ESMCommonJSMocking = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/ModulesAndState/ESMCommonJSMocking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ESM/CommonJS Mocking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ESMCommonJSMocking;
