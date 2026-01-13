import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroToJSONAndJSONB = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/IntroToJSONAndJSONB';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Intro to JSON & JSONB" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroToJSONAndJSONB;
