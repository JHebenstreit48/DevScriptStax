import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Closures = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Functions/Closures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Closures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Closures;
