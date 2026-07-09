import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
