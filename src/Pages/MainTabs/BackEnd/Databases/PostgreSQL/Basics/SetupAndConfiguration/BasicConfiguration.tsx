import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BasicConfiguration = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration/BasicConfiguration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Basic Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicConfiguration;
