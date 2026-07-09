import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParamsAndHeaders = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Requests/ParamsAndHeaders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Params & Headers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndHeaders;
