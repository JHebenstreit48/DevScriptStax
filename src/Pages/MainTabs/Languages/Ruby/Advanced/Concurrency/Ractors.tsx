import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Ractors = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/Concurrency/Ractors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ractors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Ractors;
