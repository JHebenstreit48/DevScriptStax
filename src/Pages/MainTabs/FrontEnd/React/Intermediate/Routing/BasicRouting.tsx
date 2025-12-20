import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BasicRouting = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/Routing/BasicRouting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Basic Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicRouting;
