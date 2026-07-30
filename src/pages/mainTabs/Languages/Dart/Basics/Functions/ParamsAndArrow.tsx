import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ParamsAndArrow = () => {
  const markdownFilePath = 'Languages/Dart/Basics/Functions/ParamsAndArrow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Params & Arrow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndArrow;
