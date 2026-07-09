import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Classes = () => {
  const markdownFilePath = 'Languages/Dart/Basics/OOP/Classes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Classes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Classes;
