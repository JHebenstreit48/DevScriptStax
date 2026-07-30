import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InitAndDataAPI = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/JavaScript/InitAndDataAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Init & Data API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitAndDataAPI;
