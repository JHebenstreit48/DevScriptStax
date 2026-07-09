import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UITour = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Fundamentals/UITour';

  return (
    <>
      <PageLayout>
        <PageTitle title="UI Tour" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UITour;
