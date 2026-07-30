import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Examples = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/Documentation/Examples';

  return (
    <>
      <PageLayout>
        <PageTitle title="Examples" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Examples;
