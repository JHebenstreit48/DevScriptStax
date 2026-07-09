import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VariablesAndTypes = () => {
  const markdownFilePath = 'Languages/Go/Basics/CoreConcepts/VariablesAndTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Variables & Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariablesAndTypes;
