import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
