import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IntroToJSONAndJSONB = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/IntroToJSONAndJSONB';

  return (
    <>
      <PageLayout>
        <PageTitle title="Intro to JSON & JSONB" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroToJSONAndJSONB;
