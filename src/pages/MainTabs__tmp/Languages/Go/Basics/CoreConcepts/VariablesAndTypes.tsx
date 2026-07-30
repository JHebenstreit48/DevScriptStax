import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
