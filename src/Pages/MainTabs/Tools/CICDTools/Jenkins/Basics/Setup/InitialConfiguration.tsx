import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InitialConfiguration = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Setup/InitialConfiguration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Initial Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitialConfiguration;
