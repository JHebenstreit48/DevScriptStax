import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Conditionals = () => {
  const markdownFilePath = 'Languages/Dart/Basics/ControlFlow/Conditionals';

  return (
    <>
      <PageLayout>
        <PageTitle title="Conditionals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Conditionals;
