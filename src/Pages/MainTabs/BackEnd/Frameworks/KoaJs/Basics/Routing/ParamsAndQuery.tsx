import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParamsAndQuery = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/Routing/ParamsAndQuery';

  return (
    <>
      <PageLayout>
        <PageTitle title="Params & Query" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndQuery;
