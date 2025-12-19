import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Modals = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Overlays/Modals';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Modals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Modals;
