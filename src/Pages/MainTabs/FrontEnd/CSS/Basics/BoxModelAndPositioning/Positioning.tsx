import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Positioning = () => {
  const markdownFilePath = 'FrontEnd/CSS/Basics/BoxModelAndPositioning/Positioning';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Positioning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Positioning;
