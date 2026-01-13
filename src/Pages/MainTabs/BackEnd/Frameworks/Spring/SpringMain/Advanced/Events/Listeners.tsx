import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Listeners = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/Events/Listeners';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Listeners" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Listeners;
