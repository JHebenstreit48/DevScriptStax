import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonJSVsESM = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages/CommonJSVsEsm';

  return (
    <>
      <PageLayout>
        <PageTitle title="CommonJS vs ESM" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonJSVsESM;
