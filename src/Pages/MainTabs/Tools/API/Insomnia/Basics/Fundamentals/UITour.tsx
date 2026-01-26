import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UITour = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Fundamentals/UITour';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="UI Tour" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UITour;
