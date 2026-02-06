import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonJSVsESM = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Node/Basics/ModulesAndPackages/CommonJSVsEsm';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CommonJS vs ESM" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonJSVsESM;
