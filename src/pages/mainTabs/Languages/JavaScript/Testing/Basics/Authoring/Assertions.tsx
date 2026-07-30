import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Assertions = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/Authoring/Assertions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Assertions (Basics)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Assertions;
