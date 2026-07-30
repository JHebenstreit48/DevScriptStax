import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ESMCommonJSMocking = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/ModulesAndState/ESMCommonJSMocking';

  return (
    <>
      <PageLayout>
        <PageTitle title="ESM/CommonJS Mocking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ESMCommonJSMocking;
