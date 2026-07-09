import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VueCLI = () => {
  const markdownFilePath = 'FrontEnd/Vue/Basics/Fundamentals/VueCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Vue CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VueCLI;
