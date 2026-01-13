import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParamsAndHeaders = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Requests/ParamsAndHeaders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Params & Headers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndHeaders;
