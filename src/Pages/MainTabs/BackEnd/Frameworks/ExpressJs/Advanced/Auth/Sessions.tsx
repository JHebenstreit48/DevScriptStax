import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Sessions = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Auth/Sessions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sessions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Sessions;
