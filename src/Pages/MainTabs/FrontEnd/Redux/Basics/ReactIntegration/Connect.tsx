import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Connect = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/ReactIntegration/Connect';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="connect (legacy)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Connect;
