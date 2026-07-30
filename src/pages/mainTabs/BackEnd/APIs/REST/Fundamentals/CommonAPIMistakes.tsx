import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonAPIMistakes = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/Fundamentals/CommonAPIMistakes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common API Mistakes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonAPIMistakes;
