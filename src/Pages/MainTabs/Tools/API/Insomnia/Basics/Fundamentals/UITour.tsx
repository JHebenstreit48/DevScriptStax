import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UITour = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Fundamentals/UITour';

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
