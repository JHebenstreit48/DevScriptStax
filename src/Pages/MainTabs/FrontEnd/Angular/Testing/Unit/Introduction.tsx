import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath =
    'FrontEnd/Angular/Testing/Unit/Introduction';

  return (
    <>
      <PageTitle title="Unit Testing in Angular" />
      <Notes
        filePath={markdownFilePath}
      />
    </>
  );
};

export default Introduction;