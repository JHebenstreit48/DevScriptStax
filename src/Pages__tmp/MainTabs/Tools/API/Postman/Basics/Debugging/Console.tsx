import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Console = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Debugging/Console';

  return (
    <>
      <PageLayout>
        <PageTitle title="Console" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Console;
