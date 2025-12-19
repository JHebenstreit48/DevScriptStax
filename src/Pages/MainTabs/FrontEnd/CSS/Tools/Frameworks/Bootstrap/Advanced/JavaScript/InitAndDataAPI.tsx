import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InitAndDataAPI = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/JavaScript/InitAndDataAPI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Init & Data API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitAndDataAPI;
