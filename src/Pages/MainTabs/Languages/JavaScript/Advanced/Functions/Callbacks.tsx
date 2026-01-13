import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Callbacks = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Functions/Callbacks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Callbacks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Callbacks;
