import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WindowFunctions = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/WindowFunctions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Window Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WindowFunctions;
